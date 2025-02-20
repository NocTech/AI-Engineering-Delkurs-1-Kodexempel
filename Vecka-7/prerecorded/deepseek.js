const dotenv = require("dotenv/config");

const { HfInference } = require("@huggingface/inference");

const client = new HfInference(process.env.HF_ACCESS_TOKEN);
console.log(client);

async function main() {
    const chatCompletion = await client.chatCompletion({
    	model: "deepseek-ai/DeepSeek-R1-Distill-Qwen-32B",
    	messages: [
    		{
    			role: "user",
    			content: "What is the capital of France?",
    		},
    	],
    	provider: "hf-inference",
    	max_tokens: 500,
    });

    	console.log(chatCompletion.choices[0].message);
}

main();
