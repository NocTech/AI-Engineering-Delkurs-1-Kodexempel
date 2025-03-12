// TensorFlow.js implementation of color pattern recognition
let model;
let testData; // Store test data for evaluation

/*

Hur implementerar vi TensorFlow.js?

Först måste vi lägga till TensorFlow.js i vår HTML-fil.

Typ: <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>

1. Skapa en model
2. Lägg till lager
2.1 I detta exempel skriver vi ut datan i vår "start learning" funktion, sen blandar vi datan (shuffle) och delar upp datan i test och träningsdata
3. Kompilera modellen
4. Träna modellen
5. Evaluera modellen
6. Använd modellen

*/

function startLearning() {
	// Create a sequential model
	model = tf.sequential();

	//Vårt inputlager
	//Att det är dense betyder att alla noder/neuroner är kopplade till alla noder/neuroner i nästa lager
	// Add layers to the model
	model.add(
		tf.layers.dense({
			units: 16,
			activation: "relu",
			inputShape: [3], // RGB values
		})
	);

	//Vårt dolda lager
	model.add(
		tf.layers.dense({
			units: 16,
			activation: "relu",
		})
	);

	//Vårt outputlager
	model.add(
		tf.layers.dense({
			units: 3, // 3 output classes: red-ish, green-ish, blue-ish
			activation: "softmax",
		})
	);

	// Compile the model
	model.compile({
		optimizer: tf.train.adam(),
		loss: "categoricalCrossentropy",
		metrics: ["accuracy"],
	});

	// Prepare full dataset
	let fullData = [
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

	// Shuffle the data
	shuffleArray(fullData);

	// Split data into training (80%) and test (20%) sets
	const splitIndex = Math.floor(fullData.length * 0.8);
	const trainingData = fullData.slice(0, splitIndex);
	testData = fullData.slice(splitIndex);

	console.log(
		`Data split: ${trainingData.length} training samples, ${testData.length} test samples`
	);

	// Convert training data to tensors
	const trainingInputs = trainingData.map((item) => [
		item.r / 255,
		item.g / 255,
		item.b / 255,
	]); // Normalize RGB values to 0-1
	console.log(trainingInputs);
	const trainingOutputs = trainingData.map((item) => {
		if (item.color === "red-ish") return [1, 0, 0];
		if (item.color === "green-ish") return [0, 1, 0];
		if (item.color === "blue-ish") return [0, 0, 1];
	});

	const xs = tf.tensor2d(trainingInputs);
	const ys = tf.tensor2d(trainingOutputs);

	// Train the model
	const trainingConfig = {
		epochs: 64,
		batchSize: 3,
		callbacks: {
			onEpochEnd: (epoch, logs) => {
				console.log(
					`Epoch ${epoch}: loss = ${logs.loss}, accuracy = ${logs.acc}`
				);
			},
			onTrainEnd: () => {
				console.log("Training complete!");
				finishedTraining();
			},
		},
	};

	// Start training
	model.fit(xs, ys, trainingConfig);
}

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

function evaluateOnTestSet() {
	if (!testData || testData.length === 0) {
		console.error("No test data available");
		return;
	}

	// Convert test data to tensors
	const testInputs = testData.map((item) => [
		item.r / 255,
		item.g / 255,
		item.b / 255,
	]);
	const testOutputs = testData.map((item) => {
		if (item.color === "red-ish") return [1, 0, 0];
		if (item.color === "green-ish") return [0, 1, 0];
		if (item.color === "blue-ish") return [0, 0, 1];
	});

	const xTest = tf.tensor2d(testInputs);
	const yTest = tf.tensor2d(testOutputs);

	// Evaluate the model on test data
	const evalResult = model.evaluate(xTest, yTest);

	// Log evaluation results
	Promise.all([evalResult[0].data(), evalResult[1].data()]).then(
		([lossData, accData]) => {
			const testLoss = lossData[0];
			const testAcc = accData[0];
			console.log(
				`Test set evaluation: loss = ${testLoss.toFixed(
					4
				)}, accuracy = ${testAcc.toFixed(4)}`
			);

			// Display test results in the UI
			const testResultsDiv = document.getElementById("testResults");
			if (testResultsDiv) {
				testResultsDiv.innerHTML = `
        <h3>Test Set Evaluation</h3>
        <p>Loss: ${testLoss.toFixed(4)}</p>
        <p>Accuracy: ${(testAcc * 100).toFixed(2)}%</p>
      `;
			}

			// Individual predictions on test set
			console.log("Individual test set predictions:");
			let correctCount = 0;

			const predictions = model.predict(xTest);
			predictions.data().then((predData) => {
				const testResultsDetails =
					document.getElementById("testResultsDetails");
				if (testResultsDetails) {
					testResultsDetails.innerHTML =
						"<h4>Test Set Predictions</h4><table><tr><th>Color</th><th>Actual</th><th>Predicted</th><th>Correct</th></tr>";
				}

				for (let i = 0; i < testData.length; i++) {
					const item = testData[i];
					const offset = i * 3;
					const predValues = [
						predData[offset],
						predData[offset + 1],
						predData[offset + 2],
					];
					const maxIndex = predValues.indexOf(Math.max(...predValues));

					const classes = ["red-ish", "green-ish", "blue-ish"];
					const actualClass = item.color;
					const predictedClass = classes[maxIndex];
					const isCorrect = actualClass === predictedClass;

					if (isCorrect) correctCount++;

					console.log(
						`Test ${i + 1}: RGB(${item.r}, ${item.g}, ${
							item.b
						}) - Actual: ${actualClass}, Predicted: ${predictedClass}, Correct: ${isCorrect}`
					);

					if (testResultsDetails) {
						const colorStyle = `background-color: rgb(${item.r}, ${item.g}, ${item.b}); width: 20px; height: 20px; display: inline-block; margin-right: 10px;`;
						testResultsDetails.innerHTML += `
            <tr>
              <td><span style="${colorStyle}"></span> RGB(${item.r}, ${
							item.g
						}, ${item.b})</td>
              <td>${actualClass}</td>
              <td>${predictedClass}</td>
              <td>${isCorrect ? "✓" : "✗"}</td>
            </tr>
          `;
					}
				}

				if (testResultsDetails) {
					testResultsDetails.innerHTML += "</table>";
				}

				console.log(
					`Test set accuracy: ${correctCount}/${testData.length} (${(
						(correctCount / testData.length) *
						100
					).toFixed(2)}%)`
				);
			});
		}
	);
}

function finishedTraining() {
	// Test the model with a purple color (128, 0, 128)
	const testColor = tf.tensor2d([[128 / 255, 0 / 255, 128 / 255]]);
	const prediction = model.predict(testColor);

	// Get the predicted class
	prediction.data().then((data) => {
		const classes = ["red-ish", "green-ish", "blue-ish"];
		const maxIndex = data.indexOf(Math.max(...data));
		const predictedClass = classes[maxIndex];
		const confidence = data[maxIndex];

		console.log(
			`Prediction: ${predictedClass} with confidence ${confidence.toFixed(4)}`
		);
		console.log("Full results:", {
			"red-ish": data[0].toFixed(4),
			"green-ish": data[1].toFixed(4),
			"blue-ish": data[2].toFixed(4),
		});

		// Evaluate on test set
		evaluateOnTestSet();
	});
}

// Function to classify a new color
function classifyColor(r, g, b) {
	if (!model) {
		console.error("Model not trained yet!");
		return;
	}

	const inputColor = tf.tensor2d([[r / 255, g / 255, b / 255]]);
	const prediction = model.predict(inputColor);

	prediction.data().then((data) => {
		const classes = ["red-ish", "green-ish", "blue-ish"];
		const maxIndex = data.indexOf(Math.max(...data));
		const predictedClass = classes[maxIndex];
		const confidence = data[maxIndex];

		console.log(
			`Color RGB(${r}, ${g}, ${b}) is classified as: ${predictedClass} with confidence ${confidence.toFixed(
				4
			)}`
		);
	});
}
