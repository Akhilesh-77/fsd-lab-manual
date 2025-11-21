import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const askGemini = async (question: string, context: string) => {
  if (!apiKey) {
    console.warn("API Key missing");
    return "API Key is missing. Please configure it in your environment.";
  }

  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = `
      You are an expert Full Stack Development tutor. 
      The user is currently reading a lab manual. 
      Answer their questions specifically based on the provided "Lab Context".
      If the answer isn't in the context, use your general knowledge but mention that it's outside the current lab scope.
      Keep answers concise and helpful for students.
    `;

    const prompt = `
      Lab Context:
      ${context}

      User Question:
      ${question}
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        systemInstruction,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error while processing your request.";
  }
};