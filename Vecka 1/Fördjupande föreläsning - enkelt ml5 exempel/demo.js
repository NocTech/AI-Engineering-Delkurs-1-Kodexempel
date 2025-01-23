let nn;

function startLearning() {
	ml5.setBackend("cpu");

	nn = ml5.neuralNetwork({ task: "regression", debug: true });

	nn.addData([0, 0], [0]);
	nn.addData([0, 1], [1]);
	nn.addData([1, 0], [1]);
	nn.addData([1, 1], [0]);

	nn.normalizeData();
	nn.train({ epochs: 32 }, finishedTraining);
}

function finishedTraining() {
	console.log("Training finished");

	nn.predict([0, 2], (results, err) => {
		if (err) {
			console.log("Någonting gick fel.");
		} else {
			console.log("Predictions: ", results[0].value);
		}
	});
}
