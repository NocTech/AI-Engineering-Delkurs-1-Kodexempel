const dotenv = require("dotenv");
dotenv.config();

const systemInstruction =
	"You are a helpful Stockholm guide. If the user asks about anything other than Stockholm, kindly reply, 'I'm sorry, but I can only answer questions related to Stockholm.' Additionally, provide a fun fact about Stockholm related to the user's query when possible.";

async function callHuggingFaceSDK(query) {
	
}

async function callOpenAISDK(query) {
	
}

async function callGeminiSDK(query) {
	
}

module.exports = {
	callHuggingFaceSDK,
	callOpenAISDK,
	callGeminiSDK,
};
