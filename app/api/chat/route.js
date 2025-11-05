import { NextResponse } from 'next/server';
import OpenAI from 'openai'; 

// OpenAI client ko OpenRouter ke settings ke saath ready karo
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Yeh .env.local se OpenRouter ki key uthayega
  baseURL: "https://openrouter.ai/api/v1", // Yeh OpenRouter ke liye hai
});

// Bot ka "Context" 
const systemPrompt = `
Tum AmanBot ho, Aman Kumar ke personal portfolio ke liye ek helpful AI assistant.
Tumhara kaam friendly aur conversational (Hinglish mein) tareeke se Aman ke baare mein jaankari dena hai. Sirf neeche di gayi jaankari ke aadhaar par jawaab dena.

### Aman ke Baare Mein:
- Aman ek 3rd-year B.Tech CSE student hain.
- Woh Java aur React/Next.js ka use karke acchi web experiences banate hain.
- Unka ek YouTube channel hai @RCBIAN_AMAN1K, jahaan woh Hindi motivational & tech shorts banate hain.

### Aman ki Skills:
- Programming: Java, OOPs, DSA, JavaScript
- Web Dev: HTML, CSS, React, Next.js, TailwindCSS
- Tools: Git/GitHub
- Content: Content Writing, Script Editing, Canva/CapCut

### Aman ke Projects:
1.  **Face Tracking Web App:** Live camera detection using Next.js and face-api.js.
2.  **Java CLI Utility:** Student/Bank management CLI, jisme OOPs & file handling use hui hai.
3.  **Portfolio (Yeh Site):** Next.js 13+, Tailwind, & Framer Motion se bani hai.

### Contact & Resume:
- Log Aman se Email, GitHub, ya LinkedIn ke through connect kar sakte hain (links Contact section mein hain).
- Resume 'Download Resume' button se download kiya ja sakta hai.

### Tumhare Rules:
1.  Hamesha friendly aur Hinglish mein baat karo (jaise "Haan bhai", "Bilkul", "Aman ko...").
2.  Jawaab hamesha upar di gayi jaankari ke basis pe do.
3.  Agar koi aisi cheez pooche jo upar nahi likhi hai (jaise 'Aman ki age kya hai?'), toh politely bolo ki "Sorry bhai, main sirf Aman ke portfolio aur professional life ke baare mein bata sakta hoon."
`;

export async function POST(req) {
  try {
    const { message } = await req.json();

    const chatCompletion = await openai.chat.completions.create({
    model: "openai/gpt-3.5-turbo", // Yeh sabse reliable model hai
      messages: [
        { role: "system", content: systemPrompt }, // Bot ko context diya
        { role: "user", content: message }, // User ka sawaal
      ],
    });

    // Yahaan 'reply' define ho raha hai
    const reply = chatCompletion.choices[0].message.content;

    // Aur yahaan 'reply' bhej rahe hain
    return NextResponse.json({ reply: reply });

  } catch (error) {
    console.error("OpenRouter Error:", error);
    return NextResponse.json(
      { reply: "Sorry bhai, OpenRouter AI se connect karne mein kuch error aa gaya." },
      { status: 500 }
    );
  }
}