let nn;
const data = [
	{ r: 255, g: 0, b: 0, color: "red-ish" },
	{ r: 254, g: 0, b: 0, color: "red-ish" },
	{ r: 253, g: 0, b: 0, color: "red-ish" },
	{ r: 220, g: 20, b: 30, color: "red-ish" },
	{ r: 240, g: 10, b: 10, color: "red-ish" },
	{ r: 0, g: 255, b: 0, color: "green-ish" },
	{ r: 0, g: 254, b: 0, color: "green-ish" },
	{ r: 0, g: 253, b: 0, color: "green-ish" },
	{ r: 20, g: 240, b: 30, color: "green-ish" },
	{ r: 10, g: 220, b: 10, color: "green-ish" },
	{ r: 0, g: 0, b: 255, color: "blue-ish" },
	{ r: 0, g: 0, b: 254, color: "blue-ish" },
	{ r: 0, g: 0, b: 253, color: "blue-ish" },
	{ r: 10, g: 20, b: 240, color: "blue-ish" },
	{ r: 30, g: 10, b: 220, color: "blue-ish" },
];

function startLearning() {
	console.log("Our function is called and we will start training the network");
	ml5.setBackend("cpu");

	nn = ml5.neuralNetwork({ task: "classification", debug: true });

	for (let i = 0; i < data.length; i++) {
		let item = data[i];
		let inputs = [item.r, item.g, item.b];
		let outputs = [item.color];
		nn.addData(inputs, outputs);
	}

	nn.normalizeData();
	nn.train({ epochs: 64 }, finishedTraining);
}

function finishedTraining() {
	console.log("Training finished, lets try the model!");
	nn.classify([128, 0, 128], (results, err) => {
		console.log(results); //red-ish, green-ish eller blue-ish
	});
}
