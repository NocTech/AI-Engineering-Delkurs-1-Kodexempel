import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';



export async function POST(request) {
  try {
    const { query } = await request.json();

    const systemInstruction =
			"You are a helpful Stockholm guide. If the user asks about anything other than Stockholm, kindly reply, 'I'm sorry, but I can only answer questions related to Stockholm.' Additionally, provide a fun fact about Stockholm related to the user's query when possible.";

    const apiKey = process.env.GEMINI_API_KEY;

    const genAI = new GoogleGenerativeAI(apiKey);
		const model = genAI.getGenerativeModel({
			model: "gemini-2.0-flash-exp",
            systemInstruction: systemInstruction,
		});

    const generationConfig = {
			temperature: 1.6,
			topP: 0.75,
			topK: 40,
			maxOutputTokens: 8192,
			responseMimeType: "text/plain",
		};

   const chatSession = model.startChat({
			generationConfig,
			history: [],
		});

		const result = await chatSession.sendMessage(query);

    return NextResponse.json({ response: result.response.text() });
  } catch (error) {
    console.error('Gemini API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 