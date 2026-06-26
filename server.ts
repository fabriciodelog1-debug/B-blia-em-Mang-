import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client (safely on server)
const getAiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not defined in environment variables.");
  }
  return new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

// API Route: Generate a custom manga script based on any bible passage or character
app.post("/api/generate-manga-script", async (req, res) => {
  try {
    const { prompt } = req.body;
    if (!prompt) {
      return res.status(400).json({ error: "O pedido ou passagem bíblica é obrigatório." });
    }

    const ai = getAiClient();
    
    const systemInstruction = `Você é um roteirista profissional de Mangá Shonen japonês e um historiador/teólogo especialista em cultura do antigo Oriente Próximo.
Sua missão é transformar qualquer trecho ou personagem da Bíblia fornecido pelo usuário em um roteiro dramático de Mangá Shonen altamente impactante, com 100% de fidelidade aos textos sagrados e precisão histórica.
O roteiro deve conter:
1. Título do capítulo e personagem principal.
2. Época histórica precisa.
3. Versículo bíblico literal associado.
4. Até 3 painéis sequenciais detalhados de quadrinhos.
5. Para cada painel: descrição visual dramática estilo desenho shonen, diálogos impactantes (balões de fala ou pensamentos), uma onomatopeia em português com sua tradução e uma nota explicativa de margem/borda educativa com contexto histórico, arqueológico ou linguístico (hebraico/grego antigo).

Gere a resposta estritamente no seguinte formato JSON.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `Transforme a seguinte passagem ou personagem bíblico em roteiro de mangá shonen: "${prompt}"`,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: "Título do capítulo de mangá" },
            characterName: { type: Type.STRING, description: "Nome do personagem principal" },
            era: { type: Type.STRING, description: "Época histórica precisa (ex: Idade do Ferro, Século I d.C.)" },
            specialMove: { type: Type.STRING, description: "Nome de um 'ataque especial' ou habilidade de fé inspirada no personagem" },
            specialMoveDesc: { type: Type.STRING, description: "Descrição do ataque especial de fé" },
            keyVerse: { type: Type.STRING, description: "Versículo bíblico principal em português" },
            keyVerseRef: { type: Type.STRING, description: "Referência bíblica exata (ex: Gênesis 12:1)" },
            panels: {
              type: Type.ARRAY,
              description: "Lista de painéis do quadrinho (máximo 3)",
              items: {
                type: Type.OBJECT,
                properties: {
                  number: { type: Type.INTEGER, description: "Número do painel (1, 2, 3)" },
                  title: { type: Type.STRING, description: "Título ou foco do painel" },
                  actionDescription: { type: Type.STRING, description: "Descrição detalhada do desenho shonen do painel (ângulos, linhas de velocidade, hachuras, expressões)" },
                  soundEffect: { type: Type.STRING, description: "Onomatopeia dramática em letras maiúsculas (ex: KABUM!, FWOSH!, SHIN!)" },
                  soundEffectTranslation: { type: Type.STRING, description: "Significado ou tradução da onomatopeia" },
                  historicalNote: { type: Type.STRING, description: "Nota educativa de borda/margem explicando arqueologia, história ou termos em hebraico/grego" },
                  dialogues: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        speaker: { type: Type.STRING, description: "Quem está falando ou pensando" },
                        text: { type: Type.STRING, description: "Fala ou pensamento do personagem em português" },
                        type: { type: Type.STRING, enum: ["speech", "thought", "narrator", "shout"], description: "Tipo de balão de diálogo" }
                      },
                      required: ["speaker", "text", "type"]
                    }
                  }
                },
                required: ["number", "title", "actionDescription", "soundEffect", "soundEffectTranslation", "historicalNote", "dialogues"]
              }
            }
          },
          required: ["title", "characterName", "era", "specialMove", "specialMoveDesc", "keyVerse", "keyVerseRef", "panels"]
        }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("O modelo Gemini retornou uma resposta vazia.");
    }

    const scriptData = JSON.parse(text.trim());
    return res.json(scriptData);
  } catch (error: any) {
    console.error("Erro ao gerar roteiro pelo Gemini:", error);
    return res.status(500).json({ error: error.message || "Falha ao processar requisição com a IA." });
  }
});

// Configure Vite or Static Files
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Bíblia Mangá] Servidor rodando com sucesso em http://localhost:${PORT}`);
  });
}

startServer();
