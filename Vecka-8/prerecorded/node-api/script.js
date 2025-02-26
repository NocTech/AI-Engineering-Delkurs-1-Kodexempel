// Function to update the response display
function updateResponse(text) {
    document.getElementById('response').textContent = text;
}

// Call HuggingFace API through our server
async function callHuggingFace() {
    try {
        const response = await fetch("http://localhost:3051/api/huggingface-sdk", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query: "What is the weather in Paris?" }),
        });
        const data = await response.json();
        console.log(data);
        updateResponse(data);
    } catch (error) {
        updateResponse("Error calling HuggingFace API: " + error.message);
    }
}

// Call OpenAI API through our server
async function callOpenAI() {
    try {
        const response = await fetch("http://localhost:3051/api/openai-sdk", {
            method: "POST",
            body: JSON.stringify({ query: "What is the weather in Paris?" }),
        });
        const data = await response.json();
        console.log(data);
        updateResponse(data);
    } catch (error) {
        updateResponse("Error calling OpenAI API: " + error.message);
    }
}
// Call Gemini API through our server
async function callGemini() {
    try {
        const response = await fetch("http://localhost:3051/api/gemini-sdk", {
            method: "POST",
            body: JSON.stringify({ query: "What is the weather in Paris?" }),
        });
        const data = await response.json();
        console.log(data);
        updateResponse(data);
    } catch (error) {
        updateResponse("Error calling Gemini API: " + error.message);
    }
}

