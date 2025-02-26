const dotenv = require("dotenv");
dotenv.config();

const { HfInference } = require("@huggingface/inference");
const { OpenAI } = require("openai");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const systemInstruction =
	"You are a helpful Stockholm guide. If the user asks about anything other than Stockholm, kindly reply, 'I'm sorry, but I can only answer questions related to Stockholm.' Additionally, always provide a fun fact about Stockholm related to the user's query.";

async function callHuggingFaceSDK(query) {
	const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);
    const result = await hf.chatCompletion({
			model: "deepseek-ai/DeepSeek-R1-Distill-Qwen-32B",
			messages: [
				{ role: "system", content: systemInstruction },
				{ role: "user", content: query },
			],
			provider: "hf-inference",
            max_tokens: 500,
		});
    return result.choices[0].message.content;
}

async function callOpenAISDK(query) {
	const openai = new OpenAI({
		apiKey: process.env.OPENAI_API_KEY,
	});
	const result = await openai.chat.completions.create({
		model: "gpt-4o-mini",
		messages: [
			{ role: "system", content: systemInstruction },
			{ role: "user", content: query },
		],
		max_tokens: 500,
	});
	return result.choices[0].message.content;
}

async function callGeminiSDK(query) {
	const apiKey = process.env.GEMINI_API_KEY;
	const genAI = new GoogleGenerativeAI(apiKey);

	const model = genAI.getGenerativeModel({
		model: "gemini-2.0-flash-exp",
        systemInstruction: systemInstruction,
	});

	const generationConfig = {
		temperature: 1,
		topP: 0.95,
		topK: 40,
		maxOutputTokens: 8192,
		responseMimeType: "text/plain",
	};

    const chatSession = await model.startChat({
        generationConfig: generationConfig,
        history: [],
    });

    const result = await chatSession.sendMessage(query);
    return result.response.text();
}

module.exports = {
	callHuggingFaceSDK,
	callOpenAISDK,
	callGeminiSDK,
};
