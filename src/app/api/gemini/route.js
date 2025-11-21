import { GoogleGenerativeAI } from "@google/generative-ai";
import { portfolioData } from "../../[locale]/portofolio/dataporto";
import meData from "./me.json";

export async function POST(req) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "API Key not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // Prepare personal context
    const personalContext = `
    Name: ${meData.name}
    Age: ${meData.age}
    Birth Date: ${meData.birth_date}
    Nationality: ${meData.nationality}
    Title: ${meData.professional_title}
    Summary: ${meData.summary}
    Education: 
      - ${meData.education.bachelor.institution} (${
      meData.education.bachelor.major
    })
      - ${meData.education.diploma.institution} (${
      meData.education.diploma.major
    })
    Skills:
      - Mobile: ${meData.skills.mobile_development.join(", ")}
      - Frontend: ${meData.skills.frontend.join(", ")}
      - Backend: ${meData.skills.backend.join(", ")}
      - DevOps: ${meData.skills.devops.join(", ")}
    Certifications: ${meData.certifications.join(", ")}
    Contacts: ${Object.entries(meData.contacts)
      .map(([k, v]) => `${k}: ${v}`)
      .join(", ")}
    `;

    // Prepare portfolio context from data
    const portfolioContext = portfolioData
      .map(
        (p) =>
          `Project: ${p.title}
       Tech: ${p.technologies.join(", ")}
       Description: ${p.description.en} (Indonesian: ${p.description.id})
       Link: ${p.link}
       Features: ${p.features.en.join(", ")}`
      )
      .join("\n\n");

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [
            {
              text: `You are an AI assistant for Mohamad Hasyim Ridwan's portfolio terminal. 
              
              Here is the personal profile and background:
              ${personalContext}

              Here is the complete list of his projects:
              ${portfolioContext}

              Answer questions about him, his skills (React, Next.js, Node.js, etc.), his background, and his projects based on the data above. 
              IMPORTANT: Do NOT use Markdown formatting. Do NOT use asterisks (*) for bolding or lists. Use dashes (-) for lists. Keep the output clean and plain text only. Be concise.`,
            },
          ],
        },
        {
          role: "model",
          parts: [
            {
              text: "Understood. I have processed the portfolio data and am ready to assist visitors with information about Mohamad Hasyim Ridwan's projects and skills using plain text formatting.",
            },
          ],
        },
      ],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return new Response(JSON.stringify({ reply: text }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch response" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
