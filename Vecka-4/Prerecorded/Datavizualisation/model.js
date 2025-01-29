async function initModel(data) {
	try {
		const inputs = tf.tensor2d(
			data.map((row) => [
				row["Antal_Badrum"],
				row["Antal_Sovrum"],
				row["Husstorlek_kvm"],
				row["Husets_Ålder_År"],
				/* row["Stad_Göteborg"],
				row["Stad_Malmö"],
				row["Stad_Stockholm"],
				row["Stad_Visby"], */
			])
		);

		const labels = tf.tensor2d(data.map((row) => [row["Pris_SEK"]]));

		const model = tf.sequential();

		model.add(
			tf.layers.dense({
				inputShape: [inputs.shape[1]],
				units: 32,
				actvation: "relu",
			})
		);

		model.add(
			tf.layers.dense({
				units: 1,
			})
		);

		model.compile({
			optimizer: "adam",
			loss: "meanSquaredError",
		});

		await model.fit(inputs, labels, {
			epochs: 1000,
			callbacks: {
				onEpochEnd: (epoch, logs) => {
					console.log("Epoch: ", epoch + 1);
					console.log("Loss:", logs.loss.toFixed(4));
				},
				onTrainEnd: () => {
					console.log("Training finished!");
				},
			},
		});

		const newData = [
			{
				Antal_Badrum: 0,
				Antal_Sovrum: 1,
				Husets_Ålder_År: 40,
				Husstorlek_kvm: 245,
				Stad_Göteborg: 0,
				Stad_Stockholm: 1,
				Stad_Malmö: 0,
				Stad_Visby: 0,
			},
		];

		const newInputs = tf.tensor2d(
			newData.map((row) => [
				row["Antal_Badrum"],
				row["Antal_Sovrum"],
				row["Husstorlek_kvm"],
				row["Husets_Ålder_År"],
				/* row["Stad_Göteborg"],
				row["Stad_Malmö"],
				row["Stad_Stockholm"],
				row["Stad_Visby"], */
			])
		);

		const newPrediction = model.predict(newInputs);
		newPrediction.print();
		console.log("Prediction: ", newPrediction.arraySync());
	} catch (error) {
		console.error(
			"There was an error setting up and or training the model",
			error
		);
	}
}
