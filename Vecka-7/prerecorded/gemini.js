const dotenv = require("dotenv/config");

const {
	GoogleGenerativeAI,
	HarmCategory,
	HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
	model: "gemini-2.0-flash-exp",
	systemInstruction:
		"You are a helpful and friendly AI assistant. Please provide clear and concise responses. If the request from the user is not about sustainability, please say that you are not able to answer that question.",
});

const generationConfig = {
	temperature: 1,
	topP: 0.95,
	topK: 40,
	maxOutputTokens: 8192,
	responseMimeType: "text/plain",
};

async function run() {
	const chatSession = model.startChat({
		generationConfig,
		history: [],
	});

	const result = await chatSession.sendMessage("What is the capital of France?");
	console.log(result.response.text());
}

run();
