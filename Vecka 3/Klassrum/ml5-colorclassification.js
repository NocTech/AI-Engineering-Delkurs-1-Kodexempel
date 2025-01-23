let nn;

async function startLearning() {
	ml5.setBackend("cpu");

	nn = ml5.neuralNetwork({ task: "classification", debug: true });

	const response = await fetch("iris.json"); // Replace with your JSON file path
	const data = await response.json();

	data.forEach((item) => {
		//let inputs = ??? vad ska vi skriva som våra inputs?
		//let inputs = [item.r, item.g, item.b];
		let inputs = {
			SepalLengthCm: item.SepalLengthCm,
			SepalWidthCm: item.SepalWidthCm,
			PetalLengthCm: item.PetalLengthCm,
			PetalWidthCm: item.PetalWidthCm,
		};
		let outputs = { Species: item.Species };
		nn.addData(inputs, outputs);
	});

	nn.normalizeData();
	nn.train({ epochs: 5, batchSize: 12 }, finishedTraining);
}

function finishedTraining() {
	console.log("Training completed");
	const newFlower = {
		SepalLengthCm: "5.9",
		SepalWidthCm: "3.0",
		PetalLengthCm: "5.1",
		PetalWidthCm: "1.8",
	};
	nn.classify(newFlower, (results, error) => {
		console.log(results);
	});
}
