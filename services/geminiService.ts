import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  if (!process.env.API_KEY) {
    console.warn("API_KEY is not set. AI features will not work.");
    return null;
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateMarketingTagline = async (brandName: string, industry: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) return "AI service unavailable. Please check API configuration.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Generate a single, punchy, high-converting marketing tagline for a brand named "${brandName}" in the "${industry}" industry. Return ONLY the tagline, no quotes, no extra text.`,
      config: {
        maxOutputTokens: 50,
        temperature: 0.9,
      }
    });

    return response.text?.trim() || "Could not generate tagline.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error generating content. Please try again.";
  }
};

export const auditContent = async (text: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) return "AI service unavailable.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Act as a senior copywriter. Review this text: "${text}". Give one specific, actionable tip to improve it for conversion. Keep it under 2 sentences.`,
      config: {
        maxOutputTokens: 100,
      }
    });
    return response.text?.trim() || "No feedback generated.";
  } catch (error) {
    console.error("Gemini Audit Error:", error);
    return "Could not complete audit.";
  }
};