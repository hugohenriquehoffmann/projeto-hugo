import { CalendarDay, ProductInfo, ScriptTemplate } from './types';

export const CAMPAIGN_NAME = "Aurora da Sua Melhor Versão";
export const SLOGAN = "Soluções reais para os problemas que ninguém conta.";

export const PRODUCTS: ProductInfo[] = [
  {
    name: "OzenFit / Detox",
    focus: "Emagrecimento",
    targetAudience: "Pessoas frustradas com dietas.",
    approach: "Não mostre apenas o pote. Mostre a dor e a solução. Foco em roupas largas e depoimentos.",
    color: "bg-green-100 text-green-800 border-green-200",
    icon: "scale"
  },
  {
    name: "Libid Intense / Durasil",
    focus: "Saúde Íntima",
    targetAudience: "Homens e mulheres querendo reacender a chama.",
    approach: "Educativa e discreta. Use humor ou curiosidade. Evite bloqueios do Instagram.",
    color: "bg-rose-100 text-rose-800 border-rose-200",
    icon: "heart"
  },
  {
    name: "Sonotonina",
    focus: "Sono e Ansiedade",
    targetAudience: "Pessoas estressadas, insones.",
    approach: "Vídeos relaxantes, POV rolando na cama. Foco em trocar insônia por sono profundo.",
    color: "bg-indigo-100 text-indigo-800 border-indigo-200",
    icon: "moon"
  }
];

export const WEEKLY_SCHEDULE: CalendarDay[] = [
  {
    day: "Segunda-feira",
    focus: "Motivação / Emagrecimento",
    activities: [
      { type: "Story", description: "Enquete: 'Como foi o fim de semana? Jacou ou manteve o foco?'" },
      { type: "Feed", description: "Foto do OzenFit com benefícios listados em carrossel." }
    ]
  },
  {
    day: "Quarta-feira",
    focus: "Bastidores / Envios",
    activities: [
      { type: "Story", description: "Vídeo embalando pedidos. Mostre caixas e etiquetas (Prova Social)." },
      { type: "Reel", description: "'Cai no golpe do Ozen...?' Use o gancho para falar do original." }
    ]
  },
  {
    day: "Sexta-feira",
    focus: "Fim de semana / Libido",
    activities: [
      { type: "Feed", description: "Sugestivo sobre aproveitar o fim de semana com Durasil/Libid." }
    ]
  },
  {
    day: "Domingo",
    focus: "Relaxamento / Sono",
    activities: [
      { type: "Story", description: "Preparação para a semana. Importância de dormir bem com Sonotonina." }
    ]
  }
];

export const SCRIPT_TEMPLATES: ScriptTemplate[] = [
  {
    title: "Quebra de Objeção",
    product: "OzenFit",
    type: "Reel",
    content: `(Segurando o pote)\n"Muita gente me pergunta: 'Aurora, isso funciona mesmo ou é só propaganda?'\nGente, olha esses depoimentos aqui atrás (coloca print na tela verde).\nO OzenFit não faz mágica, ele inibe aquele apetite monstro que você tem à noite.\nQuer testar? Me chama no Direct."`
  },
  {
    title: "Curiosidade & Desejo",
    product: "Libid Intense",
    type: "Story",
    content: `"Mulheres/Homens, parem de rolar!\nVocês sabiam que a falta de desejo pode não ser cansaço, mas falta de estímulo certo?\nChegou reposição do nosso queridinho (mostra o produto rápido).\nEstoque limitado, corre!"`
  }
];

export const BIO_PRESET = {
  line1: "💊 Suplementação Inteligente & Bem-estar.",
  line2: "💪 Emagreça, Durma Melhor e Recupere sua Autoestima.",
  line3: "📦 Frete Grátis para todo Brasil.",
  cta: "👇 Compre aqui:"
};