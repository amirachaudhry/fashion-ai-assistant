import express from 'express';
// allows cross-origin requests from the frontend to the backend 
import cors from "cors"

const app = express();

// allows requests from frontend
app.use(cors());
// allows the backend to parse JSON data from the frontend
app.use(express.json());

const POST = 5000;

// request contains information sent to the server
// response contains information sent back to the client
app.get('/', (req, res) => {
    res.json({ message: "StyleMatch backend is running" })
})

app.listen(POST, () => {
    console.log(`Server is running on port ${POST}`);
})