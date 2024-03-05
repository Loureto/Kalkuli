import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { NextResponse } from "next/server";
import { z } from "zod";

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  baseURL: "http://api.kalkuli.com.br:5001/v1/chat/completions",
  apiKey: process.env.OPENAI_API_KEY || "",
});

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function POST(req: Request) {
  // try {
  // const { searchParams } = new URL(req.url);
  // const slug = z.string().parse(searchParams.get("slug"));
  const messages = await req.json();

  const response = await openai.chat.completions.create({
    model: "gpt-4-1106-preview",
    stream: true,
    temperature: 0.1,
    response_format: {
      type: "json_object",
    },
    messages,
    // messages: [
    //   {
    //     role: "system",
    //     content: "Responda sempre em português.",
    //   },
    //   {
    //     role: "system",
    //     content:
    //       "Se possível, corrija palavras que estiverem escritas erradas.",
    //   },
    //   {
    //     role: "system",
    //     content: "Retorne somente o texto convertido, nada além disso.",
    //   },
    //   {
    //     role: "system",
    //     content: `Converta o texto ${slug}`,
    //   },
    // ],
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
