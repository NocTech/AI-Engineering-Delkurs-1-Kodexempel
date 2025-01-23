const apiUrl = "https://api-inference.huggingface.co/models/gpt2";
const apiToken = "din huggingface token här";

const input = {
	inputs: "Once upon a time in a classroom in a galaxy not too far away,",
};

fetch(apiUrl, {
	method: "POST",
	headers: {
		Authorization: `Bearer ${apiToken}`,
		"Content-Type": "application/json",
	},
	body: JSON.stringify(input),
})
	.then((response) => {
		if (!response.ok) {
			throw new Error("HTTP Error: Status: ", response.status);
		}
		return response.json();
	})
	.then((data) => {
		console.log("GPT2 generated text is: ", data[0].generated_text);
	})
	.catch((error) => {
		console.log("There was an error: ", error);
	});
