import express from 'express';
// allows cross-origin requests from the frontend to the backend 
import cors from "cors"
import dotenv from "dotenv"
import { GoogleGenAI } from "@google/genai";

dotenv.config();
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const app = express();

// allows requests from frontend
app.use(cors());
// allows the backend to parse JSON data from the frontend
app.use(express.json());

const PORT = 5000;

const ai = new GoogleGenAI({
    apiKey: GEMINI_API_KEY,
})

// request contains information sent to the server
// response contains information sent back to the client
app.get('/', (req, res) => {
    res.json({ message: "StyleMatch backend is running" })
})

// app.post('/api/generate-outfit', async (req, res) => {
//     const { wardrobeItems, occasion, stylePreferences } = req.body;

//     console.log("Wardrobe Items:", wardrobeItems);
//     console.log("Occasion:", occasion);
//     console.log("Style Preferences:", stylePreferences);

//     res.json({ message: "Outfit request received" })
// })

app.post('/api/generate-outfit', async (req, res) => {
    const { wardrobeItems, occasion, style } = req.body;

    try {
        const prompt =
            `Generate one outfit based on ONLY these wardrobe items: ${wardrobeItems.join(', ')}
        The occasion is: ${occasion}. 
        The style preferences are: ${style}. 
        
        Reply in this exact format:

        Outfit: item + item + item
        Why: one short sentence

        Keep the whole response under 40 words.`;

        const response = await ai.models.generateContent({
            model: "gemini-3.6-flash",
            contents: prompt
        })
        res.json({ suggestion: response.text });

    } catch (error) {
        console.error("Error generating outfit:", error);
        res.status(500).json({ error: "Failed to generate outfit" });
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

console.log('Gemini key loaded:', !!process.env.GEMINI_API_KEY);