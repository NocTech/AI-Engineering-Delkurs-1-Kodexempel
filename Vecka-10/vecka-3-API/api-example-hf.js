const apiUrl = "https://api-inference.huggingface.co/models/gpt2"; //https://router.huggingface.co/hf-inference/models/openai-community/gpt2
const apiKey = "din_hf_nyckel_här";

const input = {
	inputs: "I visited Paris, and saw the eiffel tower, it was ",
};

fetch(apiUrl, {
	method: "POST",
	headers: {
		Authorization: `Bearer ${apiKey}`,
		"Content-Type": "application/json",
	},
	body: JSON.stringify(input),
})
	.then((response) => {
		if (!response.ok) {
			throw new Error("HTTP error: Status: ", response.status);
		}
		return response.json();
	})
	.then((data) => {
		console.log("Data is: ", data);
		console.log("GPT2 generated text is: ", data[0].generated_text);
	})
	.catch((error) => {
		console.log("There was an error: ", error);
	});

//Peter Glazkovitz
