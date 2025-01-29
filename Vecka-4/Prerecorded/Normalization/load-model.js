async function loadModel() {
	const model = await tf.loadLayersModel("./model/my-model.json");

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
}

loadModel();
