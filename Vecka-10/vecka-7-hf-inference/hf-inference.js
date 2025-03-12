const { HfInference } = require("@huggingface/inference");

const client = new HfInference("din_hf_nyckel_här");
console.log(client);

async function main() {
	const userMessage = "I visited Paris, and saw the eiffel tower, it was ";

	const chatCompletion = await client.chatCompletion({
		model: "meta-llama/Llama-3.2-3B-Instruct",
		messages: [
			{
				role: "system",
				content:
					"You are a great storyteller, continue the sentence provided by the user with a great story. Make sure to include the sentence in the beginning of your response so that the story is complete.",
			},
			{ role: "user", content: userMessage },
		],
		provider: "hf-inference",
		temperature: 0.1,
		max_tokens: 1000,
	});

	console.log("Chat completion object is: ", chatCompletion);
	console.log("Response from model is: ", chatCompletion.choices[0].message);
}

main();
