// Function to update the response display
function updateResponse(text) {
    document.getElementById('response').textContent = text;
}


/*
You are a helpful Stockholm guide, if the user asks for anything else but the Stockholm. Reply kindly by saying that "I'm sorry but I can not answer questions that do not relate to Stockholm" and in best case also add some fun fact about Stockholm that might relate to the users query.
*/

// Call HuggingFace API
async function callHuggingFace() {
    console.log("Calling HuggingFace API...");
    try {
        updateResponse("Calling HuggingFace API...");
        const response = await fetch(
					"https://api-inference.huggingface.co/v1/chat/completions",
					{
						method: "POST",
						headers: {
							Authorization: `Bearer YOUR_HUGGINGFACE_API_KEY`,
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							model: "meta-llama/Llama-3.2-3B-Instruct",
							messages: [
								{
									role: "system",
									content:
										"You are a helpful Stockholm guide, if the user asks for anything else but Stockholm. Reply kindly by saying that 'I'm sorry but I can not answer questions that do not relate to Stockholm' and in best case also add some fun fact about Stockholm that relates to the users query.",
								},
								{
									role: "user",
									content: "What is 2+2?",
								},
							],
							provider: "hf-inference",
							max_tokens: 500,
                            temperature: 0.7,
						}),
					}
				);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        updateResponse(data.choices[0].message.content);
    } catch (error) {
        updateResponse('Error calling OpenAI API: ' + error.message);
    }
}


// Call OpenAI API
async function callOpenAI() {
	console.log("Calling OpenAI API...");
	try {
		updateResponse("Calling OpenAI API...");
		const response = await fetch("https://api.openai.com/v1/chat/completions", {
			method: "POST",
			headers: {
				Authorization: `Bearer YOUR_OPEN_AI_API_KEY`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				model: "gpt-4o-mini",
				messages: [
					{
						role: "system",
						content:
							"You are a helpful Stockholm guide, if the user asks for anything else but Stockholm. Reply kindly by saying that 'I'm sorry but I can not answer questions that do not relate to Stockholm' and in best case also add some fun fact about Stockholm that relates to the users query.",
					},
					{
						role: "user",
						content: "What is 2+2?",
					},
				],
				max_tokens: 500,
                temperature: 1,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
			}),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
        console.log(data);
		updateResponse(data.choices[0].message.content);
	} catch (error) {
		updateResponse("Error calling Gemini API: " + error.message);
	}
}


// Call Gemini API
async function callGemini() {
	console.log("Calling Gemini API...");
    try {
			updateResponse("Calling Gemini API...");
            const apiKey = "YOUR_GEMINI_API_KEY";
			const response = await fetch(
				`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						contents: [
							{
								parts: [{text: "What is 2+2?"}]
							},
						],
						systemInstruction:
							{
								parts: [{text: "You are a helpful Stockholm guide, if the user asks for anything else but Stockholm. Reply kindly by saying that 'I'm sorry but I can not answer questions that do not relate to Stockholm' and in best case also add some fun fact about Stockholm that relates to the users query."}]
							},
                        generationConfig: {
                            temperature: 1.7,
                            topP: 1,
                            maxOutputTokens: 500,
                            responseMimeType: "text/plain",
                        }
					}),
				}
			);

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			console.log(data);
			updateResponse(data.candidates[0].content.parts[0].text);
		} catch (error) {
			updateResponse("Error calling HuggingFace API: " + error.message);
		}
}

