const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const apiKey = "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";

app.post("/api/chat", async (req, res) => {
    try {
        const response = await axios.post("https://api.openai.com/v1/completions", {
            model: "text-davinci-003",
            prompt: req.body.prompt,
            max_tokens: 150,
            temperature: 0.7,
        }, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Error communicating with OpenAI API." });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
