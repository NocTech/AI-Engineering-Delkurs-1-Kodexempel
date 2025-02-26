const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { callHuggingFace, callOpenAI, callGemini } = require('./using-fetch');
const { callHuggingFaceSDK, callOpenAISDK, callGeminiSDK } = require('./using-sdk');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3051;

app.use(cors());
app.use(express.json());

// Routes for using fetch
app.post('/api/huggingface', async (req, res) => {
    try {
        const result = await callHuggingFace(req.body.query || "What is 2+2?");
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 
