async function startLearning() {
	fetch("iris.json")
		.then((response) => response.json())
		.then((data) => initModel(data))
		.catch((error) => console.error("Error loading dataset:", error));
}

async function initModel(data) {
	try {
		const featureColumns = [
			"SepalLengthCm",
			"SepalWidthCm",
			"PetalLengthCm",
			"PetalWidthCm",
		];

		const { inputs, inputMax, inputMin } = createAndNormalizeTensors(
			data,
			featureColumns
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

		const newInputsTensor = tf.tensor2d(
			newFlower.map((row) => featureColumns.map((col) => parseFloat(row[col])))
		);

		console.log("Our new inputs are: ", newInputsTensor.arraySync());

		const normalizedNewInputs = newInputsTensor
			.sub(inputMin)
			.div(inputMax.sub(inputMin));

		const prediction = model.predict(normalizedNewInputs);
		prediction.print();
		const predictionArray = prediction.arraySync()[0];
		const predictedSpecies =
			species[predictionArray.indexOf(Math.max(...predictionArray))];
		console.log("Prediction: ", predictedSpecies);
	} catch (error) {
		console.error(
			"There was an error setting up and/or training the model",
			error
		);
	}
}

function createAndNormalizeTensors(data, featureColumns, labelColumn = null) {
	const inputs = tf.tensor2d(
		data.map((row) => featureColumns.map((col) => parseFloat(row[col])))
	);

	const inputMax = inputs.max(0);
	const inputMin = inputs.min(0);

	const normalizedInputs = inputs.sub(inputMin).div(inputMax.sub(inputMin));

	console.log("Original inputs: ", inputs.arraySync());
	console.log("Normalized inputs: ", normalizedInputs.arraySync());

	return {
		inputs: normalizedInputs,
		labels: null,
		inputMax,
		inputMin,
	};
}
