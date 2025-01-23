const apiUrl = "http://localhost:3020/classify";

const input = {
	SepalLengthCm: 5.1,
	SepalWidthCm: 3.5,
	PetalLengthCm: 1.4,
	PetalWidthCm: 0.2,
};

fetch(apiUrl, {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
	},
	body: JSON.stringify(input),
})
	.then((response) => {
		console.log("Response is: ", response);
		if (!response.ok) {
			throw new Error("HTTP Error: Status: ", response);
		}
		return response.json();
	})
	.then((data) => {
		console.log("Our response from the model is: ", data);
	})
	.catch((error) => {
		console.log("There was an error: ", error);
	});
