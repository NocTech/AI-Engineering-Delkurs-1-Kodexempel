const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3020;

app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.send("Server is running! Ready to classify data!");
});

app.post("/classify", async (req, res) => {
	//Modellen är laddad
	//Req.body -> skicka in i vår modell.
	//return ett json svar
	res.json({
		message: "Soon, there will be an actual response from our great model!",
		inputRecieved: req.body,
	});
});

app.listen(port, () => {
	console.log("Server is running on port: ", port);
});
