const apiUrl = "https://api.openai.com/v1/chat/completions";
const apiKey = "din_openai_nyckel_här";

const input = {
	model: "gpt-4o",
	messages: [
		{
			role: "system",
			content:
				"You are a great storyteller, continue the sentence provided by the user with a great story. Make sure to include the sentence in the beginning of your response so that the story is complete.",
		},
		{
			role: "user",
			content: "I visited Paris, and saw the eiffel tower, it was ",
		},
	],
	max_tokens: 1000,
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
			throw new Error("HTTP Error: Status: ", response.status);
		}
		return response.json();
	})
	.then((data) => {
		console.log("GPT-4o generated text is: ", data.choices[0].message.content);
	})
	.catch((error) => {
		console.log("There was an error: ", error);
	});
