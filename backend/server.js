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


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

console.log('Gemini key loaded:', !!process.env.GEMINI_API_KEY);