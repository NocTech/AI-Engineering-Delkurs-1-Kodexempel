async function startLearning() {
	fetch("iris.json")
		.then((response) => response.json())
		.then((data) => initModel(data))
		.catch((error) => console.error("Error loading dataset:", error));
}

async function initModel(data) {
	try {
		const inputs = tf.tensor2d(
			data.map((row) => [
				parseFloat(row["SepalLengthCm"]),
				parseFloat(row["SepalWidthCm"]),
				parseFloat(row["PetalLengthCm"]),
				parseFloat(row["PetalWidthCm"]),
			])
		);

		const species = [...new Set(data.map((row) => row["Species"]))];

		const labels = tf.tensor2d(
			data.map((row) => species.map((s) => (row["Species"] === s ? 1 : 0)))
		);

		const model = tf.sequential();

		model.add(
			tf.layers.dense({
				inputShape: [inputs.shape[1]],
				units: 32,
				activation: "relu",
			})
		);

		model.add(
			tf.layers.dense({
				units: species.length,
				activation: "softmax",
			})
		);

		model.compile({
			optimizer: "adam",
			loss: "categoricalCrossentropy",
			metrics: ["accuracy"],
		});

		const fitCallbacks = tfvis.show.fitCallbacks({ name: "Model Training" }, [
			"loss",
		]);

		const history = await model.fit(inputs, labels, {
			epochs: 120,
			callbacks: [
				fitCallbacks,
				{
					onEpochEnd: async (epoch, logs) => {
						console.log(
							`Epoch: ${epoch + 1}, Loss: ${logs.loss.toFixed(
								4
							)}, Accuracy: ${logs.acc.toFixed(4)}`
						);
					},
					onTrainEnd: () => {
						console.log("Training finished!");
					},
				},
			],
		});

		// Predict a new sample
		const newFlower = [
			{
				SepalLengthCm: 5.1,
				SepalWidthCm: 3.5,
				PetalLengthCm: 1.4,
				PetalWidthCm: 0.2,
			},
		];

		const newInputs = tf.tensor2d(
			newFlower.map((row) => [
				row["SepalLengthCm"],
				row["SepalWidthCm"],
				row["PetalLengthCm"],
				row["PetalWidthCm"],
			])
		);

		const prediction = model.predict(newInputs);
		prediction.print();
		const predictionArray = prediction.arraySync()[0];
		const predictedSpecies =
			species[predictionArray.indexOf(Math.max(...predictionArray))];
		console.log("Prediction: ", predictedSpecies);
		await saveModel(model);
	} catch (error) {
		console.error(
			"There was an error setting up and/or training the model",
			error
		);
	}
}

async function saveModel(model) {
	await model.save("downloads://my-model");
}
