import React, { useState } from "react";
import { Sparkles, PenTool, BookOpen, ChevronLeft, ArrowRight, HelpCircle, AlertCircle, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AiScriptGeneratorProps {
  onBackToCover: () => void;
}

interface Dialogue {
  speaker: string;
  text: string;
  type: "speech" | "thought" | "narrator" | "shout";
}

interface ScriptPanel {
  number: number;
  title: string;
  actionDescription: string;
  soundEffect: string;
  soundEffectTranslation: string;
  historicalNote: string;
  dialogues: Dialogue[];
}

interface MangaScript {
  title: string;
  characterName: string;
  era: string;
  specialMove: string;
  specialMoveDesc: string;
  keyVerse: string;
  keyVerseRef: string;
  panels: ScriptPanel[];
}

const PRESET_SUGGESTIONS = [
  "Daniel na cova dos leões enfrentando feras com anjos de luz.",
  "Elias desafiando os profetas de Baal e clamando fogo consumidor do céu.",
  "Sansão quebrando as colunas monumentais do templo filisteu com força divina.",
  "O pastor de ovelhas Davi protegendo seu rebanho e lutando contra um urso e um leão.",
  "Jesus multiplicando cinco pães e dois peixes para alimentar uma multidão de cinco mil."
];

export default function AiScriptGenerator({ onBackToCover }: AiScriptGeneratorProps) {
  const [promptInput, setPromptInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [scriptResult, setScriptResult] = useState<MangaScript | null>(null);
  const [currentPanelIndex, setCurrentPanelIndex] = useState(0);

  const handleSuggestionClick = (suggestion: string) => {
    setPromptInput(suggestion);
  };

  const handleGenerateScript = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!promptInput.trim()) return;

    setIsLoading(true);
    setError(null);
    setScriptResult(null);
    setCurrentPanelIndex(0);

    try {
      const response = await fetch("/api/generate-manga-script", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: promptInput }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erro ao conectar com o gerador de IA.");
      }

      const data = await response.json();
      setScriptResult(data);
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Não foi possível gerar seu roteiro de mangá. Verifique suas chaves de API e tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setPromptInput("");
    setScriptResult(null);
    setError(null);
    setCurrentPanelIndex(0);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 py-4" id="ai-generator-root">
      {/* Page Header */}
      <div className="bg-zinc-950 text-white p-6 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(168,85,247,1)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-purple-400">Poder de Inteligência Artificial</span>
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight flex items-center gap-2 mt-1">
              <Sparkles className="text-purple-400" />
              Criador de Roteiro Shonen IA
            </h2>
          </div>
          <button
            onClick={onBackToCover}
            className="hidden sm:inline bg-white hover:bg-zinc-100 text-black border-2 border-black px-4 py-2 rounded text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition"
          >
            Voltar ao Início
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* INPUT PROMPT SCREEN */}
        {!isLoading && !scriptResult && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="bg-white border-4 border-black p-6 md:p-8 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-xl font-black text-black uppercase tracking-tight flex items-center gap-2">
                <PenTool size={20} className="text-purple-500" />
                Qual história bíblica você quer transformar em Mangá?
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed font-sans">
                Escreva qualquer passagem, personagem ou evento das Escrituras Sagradas (ex: Antigo ou Novo Testamento). Nossa IA gerará um roteiro Shonen detalhado de 3 painéis com diálogos, onomatopeias, fiação de combate e notas de rodapé arqueológicas.
              </p>
            </div>

            <form onSubmit={handleGenerateScript} className="space-y-4">
              <div className="relative border-4 border-black rounded-xl overflow-hidden shadow-inner bg-zinc-50 p-2">
                <textarea
                  value={promptInput}
                  onChange={(e) => setPromptInput(e.target.value)}
                  placeholder="Ex: Daniel na cova dos leões enfrentando feras com anjos de luz de forma heróica..."
                  rows={4}
                  className="w-full bg-transparent border-none outline-none text-base font-medium placeholder-zinc-400 p-2 resize-none font-sans"
                />
              </div>

              {error && (
                <div className="bg-red-50 border-2 border-red-500 text-red-950 p-4 rounded-xl flex items-center gap-3">
                  <AlertCircle className="text-red-600 shrink-0" />
                  <p className="text-xs font-semibold leading-relaxed font-sans">{error}</p>
                </div>
              )}

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={!promptInput.trim()}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-black uppercase tracking-wider border-2 border-black transition ${
                    promptInput.trim()
                      ? "bg-purple-600 text-white hover:bg-purple-700 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
                      : "bg-zinc-100 text-zinc-400 border-zinc-300 cursor-not-allowed"
                  }`}
                >
                  <Sparkles size={16} />
                  Gerar Roteiro Shonen
                </button>
              </div>
            </form>

            {/* Suggested presets */}
            <div className="space-y-3 pt-4 border-t-2 border-zinc-100">
              <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-zinc-400">Sugestões de Ideias</h4>
              <div className="flex flex-wrap gap-2">
                {PRESET_SUGGESTIONS.map((suggestion, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="bg-zinc-50 hover:bg-purple-50 hover:text-purple-950 text-zinc-700 border-2 border-black rounded-lg px-3 py-2 text-xs font-semibold text-left transition"
                  >
                    💡 {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* LOADING ANIMATED SHONEN STATE */}
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white border-4 border-black p-12 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center space-y-6 min-h-[400px] flex flex-col justify-center items-center"
          >
            <div className="relative">
              {/* Spinner animation */}
              <div className="w-16 h-16 border-8 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
              <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple-600 animate-ping" size={24} />
            </div>
            
            <div className="space-y-2 max-w-sm">
              <h3 className="text-xl font-black text-black uppercase tracking-tight animate-pulse">Concentrando Poder de Fé...</h3>
              <p className="text-xs text-zinc-500 font-mono">
                [O Escriba Sagrado da IA está folheando os manuscritos antigos e esboçando as retículas shonen do seu capítulo de mangá...]
              </p>
            </div>
          </motion.div>
        )}

        {/* SCRIPT RESULTS STAGE SCREEN */}
        {!isLoading && scriptResult && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            {/* Generated Header card */}
            <div className="bg-purple-950 text-white p-6 rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-wrap justify-between items-center gap-4">
              <div>
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-purple-400 bg-purple-900/60 border border-purple-800 px-2.5 py-1 rounded">
                  Capítulo Customizado Criado por IA
                </span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight mt-2">{scriptResult.title}</h3>
                <p className="text-xs text-purple-200 font-sans mt-1">
                  Protagonista: <span className="font-bold text-white">{scriptResult.characterName}</span> • Época: <span className="font-bold text-white">{scriptResult.era}</span>
                </p>
              </div>

              <button
                onClick={handleReset}
                className="bg-white hover:bg-zinc-100 text-black border-2 border-black px-4 py-2 rounded text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition flex items-center gap-1.5"
              >
                <RefreshCw size={14} /> Novo Roteiro
              </button>
            </div>

            {/* Main Stage Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
              
              {/* Left Side: Generated Storyboard Panels */}
              <div className="xl:col-span-8 space-y-6">
                <div className="bg-white border-4 border-black p-5 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  {/* Selector Header */}
                  <div className="flex justify-between items-center border-b-2 border-black pb-3 mb-4 font-mono text-xs">
                    <span className="font-black flex items-center gap-1 text-purple-600">
                      <BookOpen size={14} /> ROTEIRO SEQUENCIAL DE COMICS
                    </span>
                    <div className="flex gap-1.5">
                      {scriptResult.panels.map((p, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentPanelIndex(idx)}
                          className={`w-6 h-6 rounded-full border-2 border-black flex items-center justify-center font-bold font-mono transition-colors text-[10px] ${
                            currentPanelIndex === idx
                              ? "bg-purple-500 text-white shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                              : "bg-white text-zinc-400 hover:bg-zinc-100"
                          }`}
                        >
                          {idx + 1}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Panel view stage */}
                  <div className="bg-zinc-50 border-4 border-black rounded-xl overflow-hidden relative min-h-[420px] flex flex-col justify-between p-1">
                    
                    {/* Decorative halftone overlay */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-multiply bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1)_1px,transparent_1px,transparent_10px)]"></div>

                    <div className="bg-black text-white px-4 py-2 font-black text-xs uppercase tracking-widest font-mono border-b-2 border-black relative z-10">
                      Painel #{currentPanelIndex + 1}: {scriptResult.panels[currentPanelIndex].title}
                    </div>

                    {/* Stage visual description */}
                    <div className="relative flex-grow flex flex-col justify-center bg-zinc-950 p-6 text-white border-b-4 border-black min-h-[250px]">
                      {/* Onomatopeia overlay */}
                      <div className="absolute top-4 right-4 bg-yellow-400 text-black border-2 border-black px-3 py-1 font-black text-lg tracking-tight shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] uppercase transform rotate-6 select-none z-20">
                        {scriptResult.panels[currentPanelIndex].soundEffect}
                        <span className="block text-[8px] font-mono text-zinc-800 border-t border-black mt-0.5 text-center leading-none">
                          {scriptResult.panels[currentPanelIndex].soundEffectTranslation}
                        </span>
                      </div>

                      <div className="space-y-4 max-w-xl relative z-10">
                        <span className="text-[9px] font-mono text-purple-400 font-bold uppercase tracking-wider block">Diretriz Visual de Arte Shonen (Storyboard)</span>
                        <p className="text-xs md:text-sm text-zinc-300 leading-relaxed italic font-mono">
                          {scriptResult.panels[currentPanelIndex].actionDescription}
                        </p>
                      </div>

                      {/* Display Speech Bubbles of the panel */}
                      <div className="mt-6 flex flex-col gap-2 relative z-10">
                        {scriptResult.panels[currentPanelIndex].dialogues.map((dialog, dIdx) => (
                          <div
                            key={dIdx}
                            className={`p-2.5 max-w-sm rounded-xl border-2 border-black text-xs ${
                              dialog.type === "thought"
                                ? "bg-zinc-100 text-zinc-900 border-dashed self-start"
                                : dialog.type === "narrator"
                                ? "bg-zinc-900 text-zinc-100 border-zinc-700 self-center text-center max-w-lg italic font-sans"
                                : dialog.type === "shout"
                                ? "bg-purple-600 text-white font-bold uppercase self-end shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] animate-pulse"
                                : "bg-white text-black self-start"
                            }`}
                          >
                            <span className="text-[8px] font-mono font-black uppercase text-zinc-500 block">
                              {dialog.speaker} {dialog.type === "thought" && "(Pensamento)"}
                            </span>
                            <p className="leading-snug">{dialog.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Holy scripture box */}
                    <div className="bg-purple-100 text-purple-950 p-4 relative z-10 font-sans">
                      <div className="absolute -top-3 left-4 bg-purple-600 text-white border-2 border-black px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-widest font-bold">
                        Fidelidade Bíblica • {scriptResult.keyVerseRef}
                      </div>
                      <p className="text-xs md:text-sm font-black italic pt-1 leading-relaxed">
                        "{scriptResult.keyVerse}"
                      </p>
                    </div>
                  </div>

                  {/* Panel navigation controls */}
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-[10px] text-zinc-400 font-mono">
                      Visualizando painel {currentPanelIndex + 1} de {scriptResult.panels.length}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setCurrentPanelIndex(prev => Math.max(0, prev - 1))}
                        disabled={currentPanelIndex === 0}
                        className={`flex items-center gap-1 border-2 border-black px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition ${
                          currentPanelIndex === 0 ? "opacity-50 cursor-not-allowed bg-zinc-50" : "bg-white hover:bg-zinc-100"
                        }`}
                      >
                        <ChevronLeft size={14} /> Anterior
                      </button>
                      <button
                        onClick={() => setCurrentPanelIndex(prev => Math.min(scriptResult.panels.length - 1, prev + 1))}
                        disabled={currentPanelIndex === scriptResult.panels.length - 1}
                        className={`flex items-center gap-1 border-2 border-black px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition ${
                          currentPanelIndex === scriptResult.panels.length - 1 ? "opacity-50 cursor-not-allowed bg-zinc-50" : "bg-black text-white hover:bg-zinc-800"
                        }`}
                      >
                        Próximo <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Special Abilities Card and AI Margins */}
              <div className="xl:col-span-4 space-y-6">
                {/* AI generated special stats card */}
                <div className="bg-zinc-950 text-white rounded-xl border-4 border-black p-5 shadow-[6px_6px_0px_0px_rgba(168,85,247,1)] overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
                  <div className="flex items-center justify-between border-b-2 border-zinc-800 pb-2 mb-3">
                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-purple-400 font-mono">Habilidade Descoberta por IA</span>
                      <h4 className="text-xl font-black text-white tracking-tight">{scriptResult.characterName}</h4>
                    </div>
                  </div>
                  
                  <div className="bg-zinc-900 border-2 border-black rounded-lg p-3">
                    <span className="text-[9px] font-mono text-purple-400 font-bold uppercase block mb-1">MOVIMENTO DE FÉ EXCLUSIVO</span>
                    <div className="text-sm font-black text-white font-sans">{scriptResult.specialMove}</div>
                    <p className="text-xs text-zinc-300 leading-relaxed font-sans mt-1">
                      {scriptResult.specialMoveDesc}
                    </p>
                  </div>
                </div>

                {/* AI generated margins / notes */}
                <div className="bg-purple-50 border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                  <div className="bg-black text-white px-4 py-3 font-black text-xs uppercase tracking-widest font-mono flex items-center gap-1.5 border-b-4 border-black">
                    <HelpCircle size={16} className="text-purple-400" />
                    Margem Educativa da IA
                  </div>
                  <div className="p-5 space-y-4">
                    <span className="text-[9px] font-mono text-purple-700 font-bold uppercase block">EXPLICAÇÃO DO PAINEL #{currentPanelIndex + 1}</span>
                    <h5 className="font-black text-xs text-zinc-950 uppercase">História e Arqueologia</h5>
                    <p className="text-xs text-zinc-800 leading-relaxed font-sans">
                      {scriptResult.panels[currentPanelIndex].historicalNote}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
