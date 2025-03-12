'use client';

import { useState } from 'react';

export default function Home() {
  const [response, setResponse] = useState('Results will appear here...');

  const callAPI = async (endpoint) => {
    setResponse('Calling ' + endpoint + ' API...');
    try {
      const response = await fetch('/api/' + endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: 'What is 2+2?',
        }),
      });
      const data = await response.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    }
  };

  return (
    <main className="container">
      <h1>AI API Demo</h1>
      <div className="button-container">
        <button
          onClick={() => callAPI('huggingface')}
          className="huggingface-button"
        >
          Call HuggingFace
        </button>
        <button
          onClick={() => callAPI('openai')}
          className="openai-button"
        >
          Call OpenAI
        </button>
        <button
          onClick={() => callAPI('gemini')}
          className="gemini-button"
        >
          Call Gemini
        </button>
      </div>
      <div className="response-container">
        <h2>Response:</h2>
        <pre>{response}</pre>
      </div>
    </main>
  );
}
