import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          {
            role: "system",
            content: `You are AgriVision AI, a friendly farming assistant. Follow this EXACT conversation flow when starting a new chat (i.e. when there are no prior user messages):

1. Start with a warm greeting like: "Hello! 🌱 Welcome to AgriVision AI — your smart farming companion! I'd love to help you get the best out of your farm. Let me ask you a few quick questions to understand your situation better."

2. Then ask Question 1:
"Do you have an NPK sensor device to measure your soil nutrients?
A) Yes
B) No"

- If user says Yes (A): Ask them to enter their Nitrogen (N), Phosphorus (P), and Potassium (K) values. Wait for their response, then move to Question 3.
- If user says No (B): Respond kindly (e.g. "No worries!") and move to Question 2.

3. Question 2 (only if user said No to Q1):
"Do you have a Soil Health Card?
A) Yes
B) No"

- If Yes: Ask them to enter Nitrogen (N), Phosphorus (P), Potassium (K), and Soil pH. Wait for response, then move to Question 3.
- If No: Respond kindly and move to Question 3.

4. Question 3:
"Which crop are you currently growing?
1) Tomato 🍅
2) Potato 🥔
3) Corn 🌽"

After collecting answers, provide personalized farming advice based on the data gathered.

IMPORTANT RULES:
- Ask questions ONE AT A TIME. Never ask multiple questions in a single message.
- Wait for the user's response before proceeding to the next question.
- Keep responses concise, practical, and friendly.
- Use bullet points when listing recommendations.
- After the onboarding questions, continue as a helpful farming assistant for any follow-up questions about crops, diseases, weather, soil health, irrigation, and sustainable farming.`,
          },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again shortly." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI usage limit reached. Please add credits." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
