const dotenv = require('dotenv');
dotenv.config();

const systemInstruction =
	"You are a helpful Stockholm guide. If the user asks about anything other than Stockholm, kindly reply, 'I'm sorry, but I can only answer questions related to Stockholm.' Additionally, provide a fun fact about Stockholm related to the user's query when possible.";

async function callHuggingFace(query) {
    console.log("Calling HuggingFace API...");
			const response = await fetch(
				"https://api-inference.huggingface.co/v1/chat/completions",
				{
					method: "POST",
					headers: {
						Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						model: "meta-llama/Llama-3.2-3B-Instruct",
						messages: [
							{
								role: "system",
								content:
									systemInstruction,
							},
							{
								role: "user",
								content: query,
							},
						],
						provider: "hf-inference",
						max_tokens: 500,
						temperature: 0.7,
					}),
				}
			);

            console.log(response);

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
            console.log(data);
			return data.choices[0].message.content;
}

async function callOpenAI(query) {
    console.log("Calling OpenAI API...");
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: systemInstruction,
                },
                { role: "user", content: query },
            ],
        }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data.choices[0].message.content;
}

async function callGemini(query) {
    console.log("Calling Gemini API...");
    const apiKey = process.env.GEMINI_API_KEY;
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            contents: [{ parts: [{ text: query }] }],
            systemInstruction: { parts: [{ text: systemInstruction }] },
            generationConfig: {
                temperature: 1.7,
                topP: 1,
                maxOutputTokens: 500,
                responseMimeType: "text/plain",
            },
        }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    return data.candidates[0].content.parts[0].text;
}

module.exports = {
    callHuggingFace,
    callOpenAI,
    callGemini,
}; 