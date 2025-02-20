const dotenv = require("dotenv/config");

const { HfInference } = require("@huggingface/inference");

const client = new HfInference(process.env.HF_ACCESS_TOKEN);
console.log(client);

async function main() {
    
    const userMessage = `What is the capital of Sweden?`;

    const chatCompletion = await client.chatCompletion({
			model: "meta-llama/Llama-3.2-3B-Instruct",
			messages: [
				{
					role: "user",
					content: `You are a helpful and friendly AI assistant. Please provide clear and concise responses. If the request from the user is not about sustainability, please say that you are not able to answer that question. The user message is: ${userMessage}`,
				},
			],
			provider: "hf-inference",
            temperature: 0.1,
			max_tokens: 500,
		});

	console.log(chatCompletion.choices[0].message);
}

main();
