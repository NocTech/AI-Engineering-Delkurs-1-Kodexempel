const express = require("express");
const bodyParser = require("body-parser");
const tf = require("@tensorflow/tfjs-node");

const app = express();
const port = 3020;

app.use(bodyParser.json());

let model;

(async () => {
	try {
		model = await tf.loadLayersModel("file://./model/my-model.json");
		console.log("Modellen är laddad");
	} catch (error) {
		console.log("Error, could not load model: ", error);
	}
})();

app.get("/", (req, res) => {
	res.send("Server is running! Ready to classify data!");
});

app.post("/classify", async (req, res) => {
	//Modellen är laddad
	//Req.body -> skicka in i vår modell.
	//return ett json svar

	if (!model) {
		return res.status(500).json({ error: "Modellen har inte laddats än." });
	}

	try {
		const { SepalLengthCm, SepalWidthCm, PetalLengthCm, PetalWidthCm } =
			req.body;

		const inputTensor = tf.tensor2d([
			[SepalLengthCm, SepalWidthCm, PetalLengthCm, PetalWidthCm],
		]);

		const prediction = model.predict(inputTensor);
		const predictionArray = prediction.arraySync();

		res.json({
			prediction: predictionArray,
			inputRecieved: req.body,
		});
	} catch (error) {
		res.status(500).json({
			error: "Ett fel inträffade vid klassificering.",
			details: error.message,
		});
	}
});

app.listen(port, () => {
	console.log("Server is running on port: ", port);
});
