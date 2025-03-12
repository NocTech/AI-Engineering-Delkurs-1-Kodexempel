import { HfInference } from '@huggingface/inference';
import { NextResponse } from 'next/server';

const systemInstruction =
  "You are a helpful Stockholm guide. If the user asks about anything other than Stockholm, kindly reply, 'I'm sorry, but I can only answer questions related to Stockholm.' Additionally, provide a fun fact about Stockholm related to the user's query when possible.";

export async function POST(request) {
  try {
    const { query } = await request.json();
    const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

    const response = await hf.chatCompletion({
      model: "meta-llama/Llama-3.2-3B-Instruct",
      messages: [
        {
          role: "system",
          content: systemInstruction,
        },
        {
          role: "user",
          content: query,
        },
      ],
      parameters: {
        max_new_tokens: 500,
      },
    });

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 