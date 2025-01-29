/*
Användarinteraktion som sätter igång träningen:
Denna funktion är kopplad till den knapp som är synlig i gränssnittet i index.html.
När vi trycker på den anropas denna funktion som laddar vårt dataset iris.json.
*/
async function startLearning() {
	fetch("iris.json")
		.then((response) => response.json()) // Hämtar JSON-datat och omvandlar det till ett JavaScript-objekt
		.then((data) => initModel(data)) // Skickar vidare datan till initModel-funktionen
		.catch((error) => console.error("Error loading dataset:", error)); // Fångar eventuella fel vid laddning
}

/*
Initierar modellen och bearbetar datasetet:
Denna funktion tar det laddade datasetet, konverterar det till TensorFlow-tensors,
bygger en modell, tränar den och gör en prediktion.
*/
async function initModel(data) {
	try {
		/*
        Skapar insignalstensors från datasetet:
        - Vi extraherar fyra numeriska värden från varje rad (sepal och petal-mått)
        - Dessa värden representerar egenskaper hos blommorna och används som inputs till vår modell.
        - Konverterar datan till en 2D Tensor där varje rad representerar en blomma och varje kolumn en egenskap.
        */
		const inputs = tf.tensor2d(
			data.map((row) => [
				parseFloat(row["SepalLengthCm"]),
				parseFloat(row["SepalWidthCm"]),
				parseFloat(row["PetalLengthCm"]),
				parseFloat(row["PetalWidthCm"]),
			])
		);

		/*
        Skapar one-hot-kodade etiketter (labels):
        - Vi extraherar de unika arterna i datasetet (setosa, versicolor, virginica)
        - Varje datapunkt får en vektor där rätt klass är '1' och de andra '0'.
        */
		const species = [...new Set(data.map((row) => row["Species"]))];
		const labels = tf.tensor2d(
			data.map((row) => species.map((s) => (row["Species"] === s ? 1 : 0)))
		);

		/*
        Skapar en sekventiell modell:
        - Vi använder tf.sequential() för att skapa en feed-forward neural network-modell.
        */
		const model = tf.sequential();

		/*
        Första lagret - Dense Layer:
        - inputShape: [inputs.shape[1]] anger att vi har 4 insignalvärden eftersom varje blomma beskrivs av fyra egenskaper.
        - units: 32 innebär att vi har 32 neuroner i detta lager som används för att extrahera mönster från insignalvärdena.
        - activation: "relu" används för att introducera icke-linjäritet, vilket hjälper modellen att lära sig komplexa samband.
        */
		model.add(
			tf.layers.dense({
				inputShape: [inputs.shape[1]],
				units: 32,
				activation: "relu",
			})
		);

		/*
        Dolt lager - Extra Dense Layer:
        - Lägger till ett dolt lager för att förbättra modellens kapacitet att lära sig samband i datan.
        - units: 16 minskar ner antalet neuroner för att ge en hierarkisk representation.
        - activation: "relu" behåller icke-linjäritet för att modellen ska kunna förstå komplexa samband.
        */
		model.add(
			tf.layers.dense({
				units: 16,
				activation: "relu",
			})
		);

		/*
        Utkommande lager - Klassificeringslager:
        - units: species.length motsvarar antalet arter (3), vilket gör att modellen kan klassificera tre olika klasser.
        - activation: "softmax" används eftersom vi gör en flerklassklassificering, där varje klass får en sannolikhet.
        */
		model.add(
			tf.layers.dense({
				units: species.length,
				activation: "softmax",
			})
		);

		/*
        Kompilerar modellen:
        - optimizer: "adam" används för att effektivt uppdatera vikterna.
        - loss: "categoricalCrossentropy" är en vanlig förlustfunktion vid flerklassklassificering.
        - metrics: ["accuracy"] används för att mäta noggrannhet.
        */
		model.compile({
			optimizer: "adam",
			loss: "categoricalCrossentropy",
			metrics: ["accuracy"],
		});

		/*
        Tränar modellen:
        - epochs: 100 innebär att datan passerar genom modellen 100 gånger.
        - callbacks: Loggar träningsstatus och visar träningshistorik med tfvis.
        */
		const surface = { name: "show.history", tab: "Training" };
		const history = await model.fit(inputs, labels, {
			epochs: 100,
			callbacks: {
				onEpochEnd: (epoch, logs) => {
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
		});

		tfvis.show.history(surface, history, ["loss"]);

		/*
        Gör en prediktion på en ny datapunkt:
        - Skapar en ny tensor med blomparametrar och skickar den till modellen.
        - Använder `model.predict` för att få sannolikhetsfördelningen.
        - Hittar den art som har högst sannolikhet genom att identifiera indexet med högst värde i arrayen.
        */
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
				row.SepalLengthCm,
				row.SepalWidthCm,
				row.PetalLengthCm,
				row.PetalWidthCm,
			])
		);
		const prediction = model.predict(newInputs);
		prediction.print(); // Skriver ut sannolikhetsfördelningen i konsolen
		const predictionArray = prediction.arraySync()[0]; // Omvandlar tensor till en vanlig array
		const predictedSpecies =
			species[predictionArray.indexOf(Math.max(...predictionArray))]; // Hittar arten med högst sannolikhet
		console.log("Prediction: ", predictedSpecies);
	} catch (error) {
		console.error(
			"There was an error setting up and/or training the model",
			error
		);
	}
}
