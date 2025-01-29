let nn;

function startLearning() {
	ml5.setBackend("cpu");

	nn = ml5.neuralNetwork({ task: "classification", debug: true });

	let data = [
		{ r: 255, g: 0, b: 0, color: "red-ish" },
		{ r: 254, g: 0, b: 0, color: "red-ish" },
		{ r: 253, g: 0, b: 0, color: "red-ish" },
		{ r: 0, g: 255, b: 0, color: "green-ish" },
		{ r: 0, g: 254, b: 0, color: "green-ish" },
		{ r: 0, g: 253, b: 0, color: "green-ish" },
		{ r: 0, g: 0, b: 255, color: "blue-ish" },
		{ r: 0, g: 0, b: 254, color: "blue-ish" },
		{ r: 0, g: 0, b: 253, color: "blue-ish" },
	];

	// Lägg till data
	for (let i = 0; i < data.length; i++) {
		let item = data[i];
		let inputs = [item.r, item.g, item.b];
		let outputs = [item.color];
		nn.addData(inputs, outputs);
	}

	// Normalize and train the network
	nn.normalizeData();
	nn.train({ epochs: 64, batchSize: 12 }, finishedTraining);
}

function finishedTraining() {
	console.log("Training complete!");

	nn.classify([128, 0, 128], (results, err) => {
		console.log(results); // "red", "green" eller "blue"
	});
}
