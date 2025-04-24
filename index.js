import 'dotenv/config';
import OpenAI from "openai";



const API_KEY = process.env.GEMINI_API_KEY;
const openai = new OpenAI({
    apiKey: API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});
const response = await openai.chat.completions.create({
    model: "gemini-2.0-flash",
    messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
            role: "user",
            content: "Hello!",
        },
    ],
});
console.log(response.choices[0].message);