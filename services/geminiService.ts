import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from "../constants";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API Key not found in environment variables");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateScript = async (
  productName: string,
  contentType: 'Reel' | 'Story' | 'Feed',
  tone: string
): Promise<string> => {
  const ai = getClient();
  if (!ai) return "Erro: API Key não configurada. Verifique as configurações.";

  const product = PRODUCTS.find(p => p.name.includes(productName)) || PRODUCTS[0];

  const prompt = `
    Atue como um especialista em marketing digital para a marca 'Aurora'.
    Crie um roteiro curto e persuasivo para um ${contentType} do produto ${productName}.
    
    Contexto do Produto:
    - Foco: ${product.focus}
    - Público Alvo: ${product.targetAudience}
    - Abordagem Recomendada: ${product.approach}
    
    Tom de voz: ${tone} (mas sempre autoridade amigável e real).
    
    Regras:
    - Se for Reel, inclua sugestão visual e de áudio.
    - Se for Story, seja direto e inclua uma Call to Action (CTA).
    - Use emojis.
    - O texto deve ser formatado para leitura fácil.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "Não foi possível gerar o conteúdo.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Erro ao gerar roteiro. Tente novamente mais tarde.";
  }
};

export const analyzeBio = async (currentBio: string): Promise<string> => {
  const ai = getClient();
  if (!ai) return "Erro: API Key não configurada.";

  const prompt = `
    Analise a seguinte Bio do Instagram para a loja de suplementos 'Aurora':
    
    "${currentBio}"
    
    Dê 3 sugestões rápidas de melhoria focado em autoridade e conversão.
    Seja breve.
  `;

   try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "Sem sugestões no momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Erro ao analisar bio.";
  }
}