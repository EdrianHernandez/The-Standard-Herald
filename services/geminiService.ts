
import { GoogleGenAI } from "@google/genai";

export const getArticleSummary = async (title: string, content: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a concise, professional executive summary for a news reader about this article titled "${title}". Focus on the key takeaway. Content: ${content}`,
      config: {
        temperature: 0.7,
        topP: 0.95,
        maxOutputTokens: 150,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini summary failed:", error);
    return "Unable to generate summary at this time.";
  }
};
