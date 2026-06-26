import React, { useState, useEffect } from "react";
import { Chapter, CHARACTERS } from "../data";
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Sparkles, 
  HelpCircle, 
  AlertCircle, 
  RefreshCw,
  Flame, 
  Swords, 
  Shield, 
  Scroll, 
  Scale, 
  Droplet, 
  Star, 
  Crown, 
  Zap, 
  Anchor, 
  Wind, 
  Sun, 
  Heart 
} from "lucide-react";
import CharacterStatsCard from "./CharacterStatsCard";
import { motion, AnimatePresence } from "motion/react";

interface MangaVectorIllustrationProps {
  characterId: string;
  panelIndex: number;
  panelTitle: string;
  actionDescription: string;
}

function MangaVectorIllustration({ characterId, panelIndex, panelTitle, actionDescription }: MangaVectorIllustrationProps) {
  // Determine central icon based on character and panel index
  let centralIcon = <Sparkles className="w-16 h-16 text-zinc-500 animate-pulse" />;
  let energyColor = "from-amber-500 to-yellow-300";
  let bgEffect = "sunburst"; // sunburst, waves, vortex, lightning

  if (characterId === "adao_eva") {
    energyColor = "from-emerald-500 to-green-300";
    if (panelIndex === 1 || panelIndex === 2) {
      centralIcon = <Sparkles className="w-16 h-16 text-emerald-400" />;
      bgEffect = "vortex";
    } else if (panelIndex === 3 || panelIndex === 4) {
      centralIcon = <Flame className="w-16 h-16 text-red-500" />;
      bgEffect = "sunburst";
    } else {
      centralIcon = <Flame className="w-16 h-16 text-orange-500 animate-bounce" />;
      bgEffect = "lightning";
    }
  } else if (characterId === "noe") {
    energyColor = "from-blue-600 to-cyan-400";
    if (panelIndex === 0 || panelIndex === 1) {
      centralIcon = <Anchor className="w-16 h-16 text-blue-400" />;
      bgEffect = "vortex";
    } else if (panelIndex === 3) {
      centralIcon = <Wind className="w-16 h-16 text-cyan-300 animate-bounce" />;
      bgEffect = "waves";
    } else {
      centralIcon = <Sun className="w-16 h-16 text-yellow-300 animate-pulse" />;
      bgEffect = "sunburst";
    }
  } else if (characterId === "abraao") {
    energyColor = "from-amber-500 to-yellow-200";
    if (panelIndex === 2) {
      centralIcon = <Star className="w-16 h-16 text-yellow-300 animate-pulse" />;
      bgEffect = "vortex";
    } else if (panelIndex === 4) {
      centralIcon = <Flame className="w-16 h-16 text-red-400" />;
      bgEffect = "sunburst";
    } else {
      centralIcon = <Scroll className="w-16 h-16 text-amber-300" />;
      bgEffect = "lightning";
    }
  } else if (characterId === "jose") {
    energyColor = "from-purple-500 to-pink-400";
    if (panelIndex === 0) {
      centralIcon = <Crown className="w-16 h-16 text-pink-400" />;
      bgEffect = "sunburst";
    } else if (panelIndex === 3) {
      centralIcon = <Scroll className="w-16 h-16 text-purple-400" />;
      bgEffect = "vortex";
    } else {
      centralIcon = <Crown className="w-16 h-16 text-amber-400 animate-bounce" />;
      bgEffect = "lightning";
    }
  } else if (characterId === "moises") {
    energyColor = "from-orange-500 to-yellow-300";
    if (panelIndex === 1) {
      centralIcon = <Flame className="w-16 h-16 text-orange-500 animate-pulse" />;
      bgEffect = "vortex";
    } else if (panelIndex === 4) {
      centralIcon = <Scroll className="w-16 h-16 text-yellow-400" />;
      bgEffect = "lightning";
    } else {
      centralIcon = <Wind className="w-16 h-16 text-cyan-300" />;
      bgEffect = "waves";
    }
  } else if (characterId === "josue") {
    energyColor = "from-red-600 to-orange-400";
    if (panelIndex === 0 || panelIndex === 2) {
      centralIcon = <Shield className="w-16 h-16 text-orange-400" />;
      bgEffect = "sunburst";
    } else if (panelIndex === 4 || panelIndex === 5) {
      centralIcon = <Swords className="w-16 h-16 text-red-500" />;
      bgEffect = "lightning";
    } else {
      centralIcon = <Wind className="w-16 h-16 text-yellow-500 animate-pulse" />;
      bgEffect = "waves";
    }
  } else if (characterId === "david") {
    energyColor = "from-blue-500 to-indigo-300";
    if (panelIndex === 0 || panelIndex === 1) {
      centralIcon = <Heart className="w-16 h-16 text-red-400 animate-pulse" />;
      bgEffect = "vortex";
    } else if (panelIndex === 3 || panelIndex === 4) {
      centralIcon = <Swords className="w-16 h-16 text-zinc-300 animate-bounce" />;
      bgEffect = "lightning";
    } else {
      centralIcon = <Crown className="w-16 h-16 text-yellow-400" />;
      bgEffect = "sunburst";
    }
  } else if (characterId === "salomao") {
    energyColor = "from-yellow-600 to-amber-300";
    if (panelIndex === 1) {
      centralIcon = <Scale className="w-16 h-16 text-amber-400" />;
      bgEffect = "sunburst";
    } else if (panelIndex === 4) {
      centralIcon = <Crown className="w-16 h-16 text-yellow-300" />;
      bgEffect = "vortex";
    } else {
      centralIcon = <Scroll className="w-16 h-16 text-amber-400 animate-pulse" />;
      bgEffect = "lightning";
    }
  } else if (characterId === "jesus_vida") {
    energyColor = "from-cyan-500 to-blue-300";
    if (panelIndex === 0) {
      centralIcon = <Star className="w-16 h-16 text-yellow-300 animate-pulse" />;
      bgEffect = "sunburst";
    } else if (panelIndex === 1) {
      centralIcon = <Droplet className="w-16 h-16 text-blue-400 animate-bounce" />;
      bgEffect = "vortex";
    } else {
      centralIcon = <Heart className="w-16 h-16 text-pink-400" />;
      bgEffect = "waves";
    }
  } else if (characterId === "jesus_ressurreicao") {
    energyColor = "from-amber-500 to-red-500";
    if (panelIndex === 2) {
      centralIcon = <Flame className="w-16 h-16 text-red-500" />;
      bgEffect = "lightning";
    } else if (panelIndex === 4) {
      centralIcon = <Zap className="w-16 h-16 text-yellow-400 animate-pulse" />;
      bgEffect = "vortex";
    } else {
      centralIcon = <Sun className="w-16 h-16 text-yellow-300 animate-spin" style={{ animationDuration: "15s" }} />;
      bgEffect = "sunburst";
    }
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-zinc-950 via-zinc-900 to-black flex flex-col items-center justify-center text-center p-6 text-white border-2 border-zinc-800 relative select-none overflow-hidden rounded-lg">
      {/* Screentone layout */}
      <div className="opacity-15 pointer-events-none absolute inset-0 bg-[radial-gradient(#fff_1.2px,transparent_1.2px)] [background-size:12px_12px]"></div>

      {/* Shonen energy speedlines overlays */}
      {bgEffect === "sunburst" && (
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[repeating-conic-gradient(from_0deg,transparent_0deg,transparent_10deg,#fff_10deg,#fff_20deg)]"></div>
      )}
      {bgEffect === "waves" && (
        <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-screen bg-[repeating-linear-gradient(0deg,transparent,transparent_15px,rgba(255,255,255,0.15)_15px,rgba(255,255,255,0.15)_30px)]"></div>
      )}
      {bgEffect === "vortex" && (
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[radial-gradient(circle_at_center,transparent_40%,rgba(255,255,255,0.2)_100%)]"></div>
      )}
      {bgEffect === "lightning" && (
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-color-dodge bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.3)_20px,rgba(255,255,255,0.3)_40px)]"></div>
      )}

      {/* Halo */}
      <div className={`absolute w-28 h-28 rounded-full bg-gradient-to-tr ${energyColor} blur-2xl opacity-20`}></div>

      {/* Central icon in box */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
        className="relative z-10 p-3 border-4 border-black bg-zinc-950 rounded-2xl shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] flex items-center justify-center transform -rotate-1"
      >
        {centralIcon}
      </motion.div>

      {/* Description */}
      <div className="relative z-10 mt-5 max-w-sm">
        <h4 className="text-lg font-black uppercase tracking-wider text-amber-400 font-mono">
          {panelTitle}
        </h4>
        <p className="text-[11px] text-zinc-400 mt-1.5 italic font-mono leading-relaxed border-t border-zinc-800/80 pt-1.5 px-2">
          {actionDescription}
        </p>
      </div>
    </div>
  );
}

interface MangaReaderProps {
  chapter: Chapter;
  onBackToCover: () => void;
  onNextChapter?: () => void;
  onPrevChapter?: () => void;
}

export default function MangaReader({ chapter, onBackToCover, onNextChapter, onPrevChapter }: MangaReaderProps) {
  const [currentPanelIndex, setCurrentPanelIndex] = useState(0);
  const character = CHARACTERS[chapter.characterId];
  const panels = chapter.panels;
  const currentPanel = panels[currentPanelIndex];

  // Reset panel index when chapter changes
  useEffect(() => {
    setCurrentPanelIndex(0);
  }, [chapter]);

  // Handle arrow keys for reading panels
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNextPanel();
      } else if (e.key === "ArrowLeft") {
        handlePrevPanel();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPanelIndex, panels]);

  const handleNextPanel = () => {
    if (currentPanelIndex < panels.length - 1) {
      setCurrentPanelIndex(prev => prev + 1);
    } else if (onNextChapter) {
      onNextChapter();
    }
  };

  const handlePrevPanel = () => {
    if (currentPanelIndex > 0) {
      setCurrentPanelIndex(prev => prev - 1);
    } else if (onPrevChapter) {
      onPrevChapter();
    }
  };

  return (
    <div className="space-y-6" id="manga-reader-root">
      {/* Top Reading Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-4 border-black pb-4 bg-zinc-50 p-2 rounded-xl">
        <button
          onClick={onBackToCover}
          className="flex items-center gap-1 bg-white hover:bg-zinc-100 border-2 border-black px-4 py-2 rounded font-black text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition"
        >
          <ChevronLeft size={16} />
          Voltar ao Índice
        </button>

        <div className="flex items-center gap-2">
          {onPrevChapter && (
            <button
              onClick={onPrevChapter}
              className="bg-white hover:bg-zinc-100 border-2 border-black p-2 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition text-xs font-black uppercase font-mono flex items-center gap-1"
              title="Capítulo Anterior"
            >
              <ChevronLeft size={14} /> Cap Ant
            </button>
          )}

          <div className="bg-black text-white px-4 py-2 rounded text-xs font-black uppercase tracking-wider font-mono">
            Capítulo {chapter.number} de 10
          </div>

          {onNextChapter && (
            <button
              onClick={onNextChapter}
              className="bg-white hover:bg-zinc-100 border-2 border-black p-2 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition text-xs font-black uppercase font-mono flex items-center gap-1"
              title="Próximo Capítulo"
            >
              Cap Próx <ChevronRight size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Chapter Title block */}
      <div className="bg-zinc-950 text-white p-6 rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <span className="text-xs uppercase font-mono font-bold tracking-widest text-amber-500">
          Série Crônicas da Fé • Capítulo {chapter.number}
        </span>
        <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase mt-1">
          {chapter.title}
        </h2>
        <p className="text-sm text-zinc-300 mt-2 max-w-3xl leading-relaxed font-sans">
          {chapter.summary}
        </p>
      </div>

      {/* Core Layout: Manga Comic Page + Border Notes and Character Stats */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: THE MANGA COMIC PAGE CONTAINER (Span 8) */}
        <div className="xl:col-span-8 space-y-6">
          <div className="bg-white border-4 border-black p-4 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
            {/* Comic page header with progress ticks */}
            <div className="flex justify-between items-center border-b-2 border-black pb-3 mb-4 font-mono text-xs">
              <span className="font-bold flex items-center gap-1">
                <BookOpen size={14} className="text-amber-500" />
                PAINEL DE LEITURA
              </span>
              <div className="flex gap-1.5">
                {panels.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setCurrentPanelIndex(idx)}
                    className={`w-6 h-6 rounded-full border-2 border-black flex items-center justify-center font-bold font-mono transition-colors text-[10px] ${
                      currentPanelIndex === idx
                        ? "bg-amber-500 text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                        : "bg-white text-zinc-400 hover:bg-zinc-100"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Panel Stage container */}
            <div className="bg-zinc-100 border-4 border-black rounded-xl overflow-hidden relative min-h-[450px] flex flex-col justify-between">
              
              {/* Speed Lines Overlay Background for extreme Shonen energy */}
              <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1)_1px,transparent_1px,transparent_10px)]"></div>
              
              {/* Panel Title */}
              <div className="bg-black text-white px-4 py-2 font-black text-xs uppercase tracking-widest font-mono relative z-10 border-b-2 border-black">
                Painel #{currentPanelIndex + 1}: {currentPanel.title}
              </div>

              {/* Dynamic Anime Artwork Stage */}
              <div className="relative flex-grow flex items-center justify-center bg-zinc-950 overflow-hidden group aspect-[4/3] p-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentPanel.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full relative flex items-center justify-center"
                  >
                    {/* Real Image or High Quality Custom Interactive Vector Overlay */}
                    {(() => {
                      let imgUrl = "";
                      
                      if (chapter.characterId === "adao_eva" && currentPanelIndex === 0) {
                        imgUrl = "/src/assets/images/manga_adao_eva_1782499164526.jpg";
                      } else if (chapter.characterId === "moises") {
                        if (currentPanelIndex === 1) {
                          imgUrl = "/src/assets/images/manga_moises_1782499176841.jpg";
                        } else if (currentPanelIndex === 3) {
                          imgUrl = "/src/assets/images/manga_moses_color_1782506122152.jpg";
                        }
                      } else if (chapter.characterId === "david" && currentPanelIndex === 4) {
                        imgUrl = "/src/assets/images/manga_david_1782499191963.jpg";
                      } else if (chapter.characterId === "jesus_vida" && currentPanelIndex === 5) {
                        imgUrl = "/src/assets/images/manga_jesus_color_1782506101211.jpg";
                      } else if (chapter.characterId === "jesus_ressurreicao" && currentPanelIndex === 5) {
                        imgUrl = "/src/assets/images/manga_jesus_ressurreicao_1782499203519.jpg";
                      }

                      if (imgUrl) {
                        return (
                          <img
                            src={imgUrl}
                            alt={currentPanel.title}
                            referrerPolicy="no-referrer"
                            className={`w-full h-full object-cover brightness-95 contrast-110 rounded-lg ${
                              imgUrl.includes("color") ? "" : "grayscale brightness-90 contrast-125 hover:grayscale-0 transition-all duration-700"
                            }`}
                          />
                        );
                      }

                      return (
                        <MangaVectorIllustration
                          characterId={chapter.characterId}
                          panelIndex={currentPanelIndex}
                          panelTitle={currentPanel.title}
                          actionDescription={currentPanel.actionDescription}
                        />
                      );
                    })()}

                    {/* Gradient shading */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/45 pointer-events-none"></div>

                    {/* Onomatopeia Épica (Epic Sound Effect Word Overlay) */}
                    <motion.div
                      initial={{ scale: 0, rotate: -25 }}
                      animate={{ scale: 1, rotate: -15 }}
                      className="absolute top-12 left-8 bg-yellow-400 text-black border-4 border-black px-4 py-2 font-black text-2xl md:text-3xl tracking-tighter shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase select-none transform rotate-[-12deg] z-20"
                    >
                      {currentPanel.soundEffect}
                      <span className="block text-[9px] font-mono font-bold tracking-widest text-zinc-800 border-t border-black mt-1 text-center">
                        {currentPanel.soundEffectTranslation}
                      </span>
                    </motion.div>

                    {/* Speech/Dialogue Bubbles overlays */}
                    <div className="absolute inset-x-4 bottom-4 z-20 flex flex-col gap-2">
                      {currentPanel.dialogs.map((dialog, index) => {
                        const isThought = dialog.type === "thought";
                        const isNarrator = dialog.type === "narrator";
                        const isShout = dialog.type === "shout";

                        if (isNarrator) {
                          return (
                            <div
                              key={index}
                              className="bg-zinc-950/95 border-2 border-zinc-700 text-zinc-100 p-2.5 rounded text-xs font-sans leading-relaxed shadow-lg max-w-xl mx-auto"
                            >
                              <span className="text-[9px] font-mono text-amber-500 font-bold uppercase block mb-0.5">Narrador</span>
                              {dialog.text}
                            </div>
                          );
                        }

                        return (
                          <motion.div
                            key={index}
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 * index }}
                            className={`p-3 max-w-sm border-2 border-black shadow-md ${
                              isThought
                                ? "bg-zinc-100 text-black rounded-3xl border-dashed self-start rounded-bl-none"
                                : isShout
                                ? "bg-red-500 text-white rounded-2xl font-bold uppercase tracking-tight self-end rounded-br-none scale-105 border-4 animate-pulse shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                                : "bg-white text-black rounded-2xl self-start rounded-bl-none"
                            }`}
                          >
                            <span className={`text-[9px] font-mono font-black uppercase block mb-0.5 ${isShout ? 'text-yellow-300' : 'text-zinc-500'}`}>
                              {dialog.speaker} {isThought && "• (PENSAMENTO)"}
                            </span>
                            <p className="text-xs md:text-sm font-sans leading-snug">
                              {dialog.text}
                            </p>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* LITERAL BIBLE SCRIPTURE PANEL BOX (The words from the Bible) */}
              <div className="bg-amber-500 text-black p-4 border-t-4 border-black relative z-10 font-sans">
                <div className="absolute -top-3 left-4 bg-black text-white border-2 border-black px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  Palavras Sagradas • {currentPanel.verseRef}
                </div>
                <p className="text-sm md:text-base font-black leading-relaxed italic pt-1 text-black">
                  "{currentPanel.verseText}"
                </p>
              </div>
            </div>

            {/* Panel reading instructions and quick control pad */}
            <div className="flex items-center justify-between mt-4">
              <span className="text-[10px] text-zinc-500 font-mono hidden sm:inline flex items-center gap-1">
                <AlertCircle size={12} /> Dica: Use as setas do teclado ◄ e ► para ler!
              </span>
              
              <div className="flex gap-3 w-full sm:w-auto">
                <button
                  onClick={handlePrevPanel}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1 bg-white hover:bg-zinc-100 border-2 border-black px-4 py-2 rounded text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition"
                >
                  <ChevronLeft size={16} /> Painel Ant
                </button>
                <button
                  onClick={handleNextPanel}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-1 bg-black text-white hover:bg-zinc-800 border-2 border-black px-5 py-2 rounded text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(245,158,11,1)] transition"
                >
                  {currentPanelIndex === panels.length - 1 ? "Próx Cap" : "Próx Painel"}
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Detailed Chapter Action Narrative Sheet */}
          <div className="bg-zinc-50 border-4 border-black p-5 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-lg font-black text-black uppercase tracking-tight border-b-2 border-zinc-200 pb-2 mb-3">
              Roteiro de Arte (Storyboard Técnico Shonen)
            </h3>
            <div className="bg-white border-2 border-black rounded-lg p-4 shadow-inner space-y-2.5">
              <span className="text-[10px] font-mono text-zinc-400 font-bold uppercase block">DIRETRIZ VISUAL DE ENQUADRAMENTO</span>
              <p className="text-xs text-zinc-700 leading-relaxed font-mono">
                {currentPanel.actionDescription}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: THE EDUCATION BORDER/MARGIN NOTES & CHARACTER CARD (Span 4) */}
        <div className="xl:col-span-4 space-y-8">
          
          {/* MARGEM EDUCATIVA (Specific educational side notes requested by user) */}
          <div className="bg-amber-50 border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden" id="margin-notes-pane">
            <div className="bg-black text-white px-4 py-3 font-black text-xs uppercase tracking-widest font-mono flex items-center gap-1.5 border-b-4 border-black">
              <HelpCircle size={16} className="text-amber-400" />
              Margem Educativa (Notas)
            </div>
            
            <div className="p-5 space-y-5">
              {/* Context Note of the Current Active Panel */}
              <div className="space-y-2 border-b-2 border-amber-200/50 pb-4">
                <span className="text-[10px] font-mono text-amber-700 font-black uppercase block tracking-wider">
                  Estudo do Painel #{currentPanelIndex + 1}
                </span>
                <h4 className="font-black text-sm text-zinc-950 uppercase font-sans tracking-tight">
                  Arqueologia e Contexto Linguístico
                </h4>
                <p className="text-xs text-zinc-800 leading-relaxed font-sans">
                  {currentPanel.historicalNote}
                </p>
              </div>

              {/* Global Chapter Historical Context Note */}
              <div className="space-y-2 border-b-2 border-amber-200/50 pb-4">
                <span className="text-[10px] font-mono text-amber-700 font-black uppercase block tracking-wider">
                  História Geral
                </span>
                <h4 className="font-black text-sm text-zinc-950 uppercase font-sans tracking-tight">
                  {chapter.extraHistoryNote.title}
                </h4>
                <p className="text-xs text-zinc-800 leading-relaxed font-sans">
                  {chapter.extraHistoryNote.content}
                </p>
              </div>

              {/* Theological Context Note */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-amber-700 font-black uppercase block tracking-wider">
                  Visão Teológica
                </span>
                <h4 className="font-black text-sm text-zinc-950 uppercase font-sans tracking-tight">
                  Significado e Profecia
                </h4>
                <p className="text-xs text-zinc-800 leading-relaxed font-sans">
                  {chapter.theologicalContext}
                </p>
              </div>
            </div>
          </div>

          {/* CHARACTER COLLECTIBLE CARD STATS */}
          <CharacterStatsCard character={character} />

        </div>
      </div>
    </div>
  );
}
