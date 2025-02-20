const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { HfInference } = require('@huggingface/inference');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Initialize Hugging Face client
const hf = new HfInference(process.env.HF_ACCESS_TOKEN);

// Store conversations (in memory - for demonstration purposes)
// In a production environment, you'd want to use a database
const conversations = new Map();

// Helper function to get or create a conversation
function getOrCreateConversation(conversationId) {
    if (!conversations.has(conversationId)) {
        conversations.set(conversationId, [{
            role: "system",
            content: "You are a helpful and friendly AI assistant. Please provide clear and concise responses. If the request from the user is not about sustainability, please say that you are not able to answer that question."
        }]);
    }
    return conversations.get(conversationId);
}

// Chat completion endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { message, conversationId = 'default' } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Get or create conversation history
        const conversationHistory = getOrCreateConversation(conversationId);

        // Add user message to history
        conversationHistory.push({
            role: "user",
            content: message
        });

        // Get AI response
        const response = await hf.chatCompletion({
					model: "mistralai/Mistral-7B-Instruct-v0.3",
					messages: conversationHistory,
					temperature: 0.7,
					maxTokens: 500,
				});

        const aiResponse = response.choices[0].message.content;

        // Add AI response to history
        conversationHistory.push({
            role: "assistant",
            content: aiResponse
        });

        // Send response
        res.json({
            message: aiResponse,
            conversationId
        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            error: 'An error occurred while processing your request'
        });
    }
});

// Get conversation history endpoint
app.get('/api/conversation/:conversationId', (req, res) => {
    const { conversationId } = req.params;
    const conversation = conversations.get(conversationId);

    if (!conversation) {
        return res.status(404).json({ error: 'Conversation not found' });
    }

    res.json({ conversation });
});

// Clear conversation endpoint
app.delete('/api/conversation/:conversationId', (req, res) => {
    const { conversationId } = req.params;
    conversations.delete(conversationId);
    res.json({ message: 'Conversation cleared' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 