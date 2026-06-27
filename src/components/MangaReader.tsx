import React, { useState, useEffect } from "react";
import { Chapter, CHARACTERS, ComicPanel } from "../data";
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
  Heart,
  Maximize2,
  X,
  BookOpenCheck,
  LayoutGrid,
  FileText
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
  let centralIcon = <Sparkles className="w-12 h-12 text-zinc-500 animate-pulse" />;
  let energyColor = "from-yellow-500 to-amber-300";
  let bgEffect = "sunburst"; // sunburst, waves, vortex, lightning

  if (characterId === "adao_eva") {
    energyColor = "from-emerald-500 to-green-300";
    if (panelIndex === 1 || panelIndex === 2) {
      centralIcon = <Sparkles className="w-12 h-12 text-emerald-400" />;
      bgEffect = "vortex";
    } else if (panelIndex === 3 || panelIndex === 4) {
      centralIcon = <Flame className="w-12 h-12 text-red-500" />;
      bgEffect = "sunburst";
    } else {
      centralIcon = <Flame className="w-12 h-12 text-orange-500 animate-bounce" />;
      bgEffect = "lightning";
    }
  } else if (characterId === "noe") {
    energyColor = "from-blue-600 to-cyan-400";
    if (panelIndex === 0 || panelIndex === 1) {
      centralIcon = <Anchor className="w-12 h-12 text-blue-400" />;
      bgEffect = "vortex";
    } else if (panelIndex === 3) {
      centralIcon = <Wind className="w-12 h-12 text-cyan-300 animate-bounce" />;
      bgEffect = "waves";
    } else {
      centralIcon = <Sun className="w-12 h-12 text-yellow-300 animate-pulse" />;
      bgEffect = "sunburst";
    }
  } else if (characterId === "abraao") {
    energyColor = "from-amber-500 to-yellow-200";
    if (panelIndex === 2) {
      centralIcon = <Star className="w-12 h-12 text-yellow-300 animate-pulse" />;
      bgEffect = "vortex";
    } else if (panelIndex === 4) {
      centralIcon = <Flame className="w-12 h-12 text-red-400" />;
      bgEffect = "sunburst";
    } else {
      centralIcon = <Scroll className="w-12 h-12 text-amber-300" />;
      bgEffect = "lightning";
    }
  } else if (characterId === "jose") {
    energyColor = "from-purple-500 to-pink-400";
    if (panelIndex === 0) {
      centralIcon = <Crown className="w-12 h-12 text-pink-400" />;
      bgEffect = "sunburst";
    } else if (panelIndex === 3) {
      centralIcon = <Scroll className="w-12 h-12 text-purple-400" />;
      bgEffect = "vortex";
    } else {
      centralIcon = <Crown className="w-12 h-12 text-amber-400 animate-bounce" />;
      bgEffect = "lightning";
    }
  } else if (characterId === "moises") {
    energyColor = "from-orange-500 to-yellow-300";
    if (panelIndex === 1) {
      centralIcon = <Flame className="w-12 h-12 text-orange-500 animate-pulse" />;
      bgEffect = "vortex";
    } else if (panelIndex === 4) {
      centralIcon = <Scroll className="w-12 h-12 text-yellow-400" />;
      bgEffect = "lightning";
    } else {
      centralIcon = <Wind className="w-12 h-12 text-cyan-300" />;
      bgEffect = "waves";
    }
  } else if (characterId === "josue") {
    energyColor = "from-red-600 to-orange-400";
    if (panelIndex === 0 || panelIndex === 2) {
      centralIcon = <Shield className="w-12 h-12 text-orange-400" />;
      bgEffect = "sunburst";
    } else if (panelIndex === 4 || panelIndex === 5) {
      centralIcon = <Swords className="w-12 h-12 text-red-500" />;
      bgEffect = "lightning";
    } else {
      centralIcon = <Wind className="w-12 h-12 text-yellow-500 animate-pulse" />;
      bgEffect = "waves";
    }
  } else if (characterId === "david") {
    energyColor = "from-blue-500 to-indigo-300";
    if (panelIndex === 0 || panelIndex === 1) {
      centralIcon = <Heart className="w-12 h-12 text-red-400 animate-pulse" />;
      bgEffect = "vortex";
    } else if (panelIndex === 3 || panelIndex === 4) {
      centralIcon = <Swords className="w-12 h-12 text-zinc-300 animate-bounce" />;
      bgEffect = "lightning";
    } else {
      centralIcon = <Crown className="w-12 h-12 text-yellow-400" />;
      bgEffect = "sunburst";
    }
  } else if (characterId === "salomao") {
    energyColor = "from-yellow-600 to-amber-300";
    if (panelIndex === 1) {
      centralIcon = <Scale className="w-12 h-12 text-amber-400" />;
      bgEffect = "sunburst";
    } else if (panelIndex === 4) {
      centralIcon = <Crown className="w-12 h-12 text-yellow-300" />;
      bgEffect = "vortex";
    } else {
      centralIcon = <Scroll className="w-12 h-12 text-amber-400 animate-pulse" />;
      bgEffect = "lightning";
    }
  } else if (characterId === "jesus_vida") {
    energyColor = "from-cyan-500 to-blue-300";
    if (panelIndex === 0) {
      centralIcon = <Star className="w-12 h-12 text-yellow-300 animate-pulse" />;
      bgEffect = "sunburst";
    } else if (panelIndex === 1) {
      centralIcon = <Droplet className="w-12 h-12 text-blue-400 animate-bounce" />;
      bgEffect = "vortex";
    } else {
      centralIcon = <Heart className="w-12 h-12 text-pink-400" />;
      bgEffect = "waves";
    }
  } else if (characterId === "jesus_ressurreicao") {
    energyColor = "from-amber-500 to-red-500";
    if (panelIndex === 2) {
      centralIcon = <Flame className="w-12 h-12 text-red-500" />;
      bgEffect = "lightning";
    } else if (panelIndex === 4) {
      centralIcon = <Zap className="w-12 h-12 text-yellow-400 animate-pulse" />;
      bgEffect = "vortex";
    } else {
      centralIcon = <Sun className="w-12 h-12 text-yellow-300 animate-spin" style={{ animationDuration: "15s" }} />;
      bgEffect = "sunburst";
    }
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-zinc-950 via-zinc-900 to-black flex flex-col items-center justify-center text-center p-4 text-white relative select-none overflow-hidden rounded-lg">
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
      <div className={`absolute w-24 h-24 rounded-full bg-gradient-to-tr ${energyColor} blur-2xl opacity-25`}></div>

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
        className="relative z-10 p-2.5 border-4 border-black bg-zinc-950 rounded-2xl shadow-[3px_3px_0px_0px_rgba(255,255,255,0.15)] flex items-center justify-center transform -rotate-1"
      >
        {centralIcon}
      </motion.div>

      {/* Description */}
      <div className="relative z-10 mt-3 max-w-sm px-2">
        <h4 className="text-sm font-black uppercase tracking-wider text-yellow-400 font-mono">
          {panelTitle}
        </h4>
        <p className="text-[10px] text-zinc-400 mt-1 italic font-mono leading-snug border-t border-zinc-800/80 pt-1">
          {actionDescription}
        </p>
      </div>
    </div>
  );
}

// Global Image Mapping Helper
function getPanelImageUrl(characterId: string, panelIndex: number): string {
  if (characterId === "adao_eva" && panelIndex === 0) {
    return "/assets/images/manga_adao_eva_1782499164526.jpg";
  } else if (characterId === "moises") {
    if (panelIndex === 1) {
      return "/assets/images/manga_moises_1782499176841.jpg";
    } else if (panelIndex === 3) {
      return "/assets/images/manga_moses_color_1782506122152.jpg";
    }
  } else if (characterId === "david" && panelIndex === 4) {
    return "/assets/images/manga_david_1782499191963.jpg";
  } else if (characterId === "jesus_vida" && panelIndex === 5) {
    return "/assets/images/manga_jesus_color_1782506101211.jpg";
  } else if (characterId === "jesus_ressurreicao" && panelIndex === 5) {
    return "/assets/images/manga_jesus_ressurreicao_1782499203519.jpg";
  }
  return "";
}

interface ComicPanelCardProps {
  panel: ComicPanel;
  index: number;
  characterId: string;
  onClick: () => void;
  className?: string;
}

function ComicPanelCard({ panel, index, characterId, onClick, className = "" }: ComicPanelCardProps) {
  const imgUrl = getPanelImageUrl(characterId, index);

  return (
    <div 
      onClick={onClick}
      className={`group relative bg-zinc-900 border-4 border-black rounded-xl overflow-hidden cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(234,179,8,1)] hover:scale-[1.01] hover:z-10 transition-all duration-300 flex flex-col justify-between select-none ${className}`}
    >
      {/* Artwork Stage */}
      <div className="relative flex-grow min-h-[220px] overflow-hidden bg-zinc-950">
        {imgUrl ? (
          <img
            src={imgUrl}
            alt={panel.title}
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover brightness-95 contrast-110 ${
              imgUrl.includes("color") ? "" : "grayscale brightness-90 contrast-125 group-hover:grayscale-0 transition-all duration-700"
            }`}
          />
        ) : (
          <MangaVectorIllustration
            characterId={characterId}
            panelIndex={index}
            panelTitle={panel.title}
            actionDescription={panel.actionDescription}
          />
        )}

        {/* Shading Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30 pointer-events-none"></div>

        {/* Speeds overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-multiply bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1)_1px,transparent_1px,transparent_10px)]"></div>

        {/* DIALOGS AND BALLOONS OVERLAYS */}
        <div className="absolute inset-0 p-3 pointer-events-none flex flex-col justify-between z-10">
          
          {/* Top Row: Narrator Yellow Box */}
          <div className="flex flex-col gap-1.5 items-start">
            {panel.dialogs.filter(d => d.type === "narrator").map((dialog, dIdx) => (
              <div
                key={dIdx}
                className="bg-yellow-200 border-2 border-black text-black text-[10px] font-black uppercase tracking-tight p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded pointer-events-auto max-w-[90%] transform -rotate-1 font-sans"
              >
                <span className="text-[8px] font-mono text-amber-800 block mb-0.5 font-bold">NARRADOR:</span>
                {dialog.text}
              </div>
            ))}
          </div>

          {/* Middle Row: Onomatopeia (Sound Effect) */}
          {panel.soundEffect && (
            <div className="flex justify-center items-center h-full my-auto pointer-events-none">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-yellow-400 text-black border-4 border-black px-3.5 py-1 font-black text-lg md:text-xl tracking-tighter shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] uppercase transform -rotate-12 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.25)] select-none pointer-events-auto"
              >
                {panel.soundEffect}
                <span className="block text-[7px] font-mono font-black tracking-wider text-zinc-800 border-t border-black mt-0.5 text-center leading-none">
                  {panel.soundEffectTranslation}
                </span>
              </motion.div>
            </div>
          )}

          {/* Bottom Row: Speech and Thought balloons */}
          <div className="flex flex-col gap-2 items-stretch mt-auto pointer-events-auto">
            {panel.dialogs.filter(d => d.type !== "narrator").map((dialog, dIdx) => {
              const isThought = dialog.type === "thought";
              const isShout = dialog.type === "shout";
              
              // Alternate alignments based on dialog index
              const isLeft = dIdx % 2 === 0;

              if (isThought) {
                return (
                  <div
                    key={dIdx}
                    className={`relative bg-zinc-50 border-2 border-dashed border-zinc-600 rounded-xl px-2.5 py-1 text-zinc-950 text-[10px] shadow-md max-w-[85%] transform ${
                      isLeft ? "self-start -rotate-1" : "self-end rotate-1"
                    }`}
                  >
                    {/* Cloud bubble trail */}
                    <div className={`absolute -bottom-2 w-2 h-2 bg-zinc-50 border border-zinc-500 rounded-full ${isLeft ? "left-5" : "right-5"}`}></div>
                    <div className={`absolute -bottom-3.5 w-1 h-1 bg-zinc-50 border border-zinc-500 rounded-full ${isLeft ? "left-6" : "right-6"}`}></div>
                    <div className="font-extrabold text-[8px] uppercase tracking-wider text-zinc-500 block mb-0.5">
                      {dialog.speaker} {isLeft ? "◄" : "►"}
                    </div>
                    <p className="font-sans font-extrabold italic leading-snug">{dialog.text}</p>
                  </div>
                );
              }

              if (isShout) {
                return (
                  <div
                    key={dIdx}
                    className={`relative bg-red-600 border-2 border-black rounded-xl px-2.5 py-1 text-white text-[10px] shadow-lg max-w-[85%] transform ${
                      isLeft ? "self-start -rotate-2" : "self-end rotate-2"
                    }`}
                  >
                    {/* Spike bubble tail */}
                    <div className={`absolute -bottom-2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-black ${isLeft ? "left-4" : "right-4"}`}></div>
                    <div className={`absolute -bottom-1 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-red-600 ${isLeft ? "left-4" : "right-4"}`}></div>
                    <div className="font-extrabold text-[8px] uppercase tracking-wider text-yellow-300 block mb-0.5 leading-none">
                      {dialog.speaker} • GRITO! {isLeft ? "◄" : "►"}
                    </div>
                    <p className="font-sans font-black uppercase tracking-tight leading-snug">{dialog.text}</p>
                  </div>
                );
              }

              // Normal speech balloon
              return (
                <div
                  key={dIdx}
                  className={`relative bg-white border-2 border-black rounded-xl px-2.5 py-1 text-zinc-900 text-[10px] shadow-md max-w-[85%] transform ${
                    isLeft ? "self-start -rotate-1" : "self-end rotate-1"
                  }`}
                >
                  {/* Speech bubble tail pointer */}
                  <div className={`absolute -bottom-2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-black ${isLeft ? "left-4" : "right-4"}`}></div>
                  <div className={`absolute -bottom-1 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-white ${isLeft ? "left-4" : "right-4"}`}></div>
                  <div className="font-extrabold text-[8px] uppercase tracking-wider text-yellow-600 block mb-0.5 leading-none">
                    {dialog.speaker} {isLeft ? "◄" : "►"}
                  </div>
                  <p className="font-sans font-bold leading-snug text-zinc-900">{dialog.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hover Click Zoom Assist Label */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1.5 z-20 pointer-events-none">
          <div className="bg-yellow-400 text-black border-2 border-black px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1">
            <Maximize2 size={12} />
            Ampliar Painel #{index + 1}
          </div>
        </div>
      </div>

      {/* Scripture Bar */}
      <div className="bg-zinc-950 text-white px-3 py-2 border-t-2 border-black font-sans text-[10px] md:text-[11px] leading-relaxed relative shrink-0">
        <span className="text-[9px] font-mono text-yellow-400 font-extrabold uppercase mr-1.5">{panel.verseRef}:</span>
        <span className="italic text-zinc-300 font-medium">"{panel.verseText}"</span>
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
  const [viewMode, setViewMode] = useState<"page" | "slide">("page");
  const [currentPanelIndex, setCurrentPanelIndex] = useState(0);
  const [zoomedPanelIndex, setZoomedPanelIndex] = useState<number | null>(null);

  const character = CHARACTERS[chapter.characterId];
  const panels = chapter.panels;
  const currentPanel = panels[currentPanelIndex];

  // Reset panel and mode on chapter changes
  useEffect(() => {
    setCurrentPanelIndex(0);
    setZoomedPanelIndex(null);
  }, [chapter]);

  // Arrow Keys Navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setZoomedPanelIndex(null);
        return;
      }

      if (viewMode === "slide") {
        if (e.key === "ArrowRight") {
          handleNextPanel();
        } else if (e.key === "ArrowLeft") {
          handlePrevPanel();
        }
      } else if (zoomedPanelIndex !== null) {
        if (e.key === "ArrowRight") {
          handleNextZoomedPanel();
        } else if (e.key === "ArrowLeft") {
          handlePrevZoomedPanel();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPanelIndex, zoomedPanelIndex, viewMode, panels]);

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

  // Lightbox Navigation
  const handleNextZoomedPanel = () => {
    if (zoomedPanelIndex !== null) {
      if (zoomedPanelIndex < panels.length - 1) {
        setZoomedPanelIndex(zoomedPanelIndex + 1);
      } else {
        setZoomedPanelIndex(0); // Loop back or close
      }
    }
  };

  const handlePrevZoomedPanel = () => {
    if (zoomedPanelIndex !== null) {
      if (zoomedPanelIndex > 0) {
        setZoomedPanelIndex(zoomedPanelIndex - 1);
      } else {
        setZoomedPanelIndex(panels.length - 1);
      }
    }
  };

  return (
    <div className="space-y-6" id="manga-reader-root">
      
      {/* Top Controller Ribbon */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b-4 border-black pb-4 bg-white p-3 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <button
          onClick={onBackToCover}
          className="flex items-center gap-1.5 bg-white hover:bg-zinc-50 border-2 border-black px-4 py-2 rounded text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <ChevronLeft size={16} />
          Voltar ao Índice
        </button>

        {/* Dynamic Mode Switcher (Bíblia em Ação vs Shonen) */}
        <div className="flex items-center bg-zinc-100 border-2 border-black rounded-lg p-1.5">
          <button
            onClick={() => setViewMode("page")}
            className={`flex items-center gap-1 px-3 py-1.5 rounded text-xs font-black uppercase tracking-wider transition ${
              viewMode === "page"
                ? "bg-yellow-400 text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                : "text-zinc-600 hover:text-black"
            }`}
          >
            <LayoutGrid size={14} />
            Grade de HQ
          </button>
          <button
            onClick={() => setViewMode("slide")}
            className={`flex items-center gap-1 px-3 py-1.5 rounded text-xs font-black uppercase tracking-wider transition ${
              viewMode === "slide"
                ? "bg-yellow-400 text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                : "text-zinc-600 hover:text-black"
            }`}
          >
            <Sparkles size={14} />
            Painel por Painel
          </button>
        </div>

        {/* Chapters quick jumpers */}
        <div className="flex items-center gap-2">
          {onPrevChapter && (
            <button
              onClick={onPrevChapter}
              className="bg-white hover:bg-zinc-50 border-2 border-black p-2 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition text-xs font-black uppercase font-mono flex items-center gap-1 hover:-translate-y-0.5"
              title="Capítulo Anterior"
            >
              <ChevronLeft size={14} /> Cap Ant
            </button>
          )}

          <div className="bg-black text-white px-4 py-2 rounded text-xs font-black uppercase tracking-wider font-mono border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Capítulo {chapter.number} de 10
          </div>

          {onNextChapter && (
            <button
              onClick={onNextChapter}
              className="bg-white hover:bg-zinc-50 border-2 border-black p-2 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition text-xs font-black uppercase font-mono flex items-center gap-1 hover:-translate-y-0.5"
              title="Próximo Capítulo"
            >
              Cap Próx <ChevronRight size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Chapter Title Badge block */}
      <div className="bg-zinc-950 text-white p-6 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <span className="text-xs uppercase font-mono font-bold tracking-widest text-yellow-400">
          Série Bíblia em Ação • Capítulo {chapter.number}
        </span>
        <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase mt-1">
          {chapter.title}
        </h2>
        <p className="text-sm text-zinc-300 mt-2 max-w-3xl leading-relaxed font-sans font-medium">
          {chapter.summary}
        </p>
      </div>

      {/* CORE ACTIVE READERS VIEW */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: THE GRAPHIC CONTENT VIEWPORT (Span 8) */}
        <div className="xl:col-span-8 space-y-6">
          
          <AnimatePresence mode="wait">
            {viewMode === "page" ? (
              
              /* ======================= MODO REVISTA (BÍBLIA EM AÇÃO) ======================= */
              <motion.div
                key="magazine-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="p-1 md:p-3 bg-gradient-to-br from-[#E2D4C0] via-[#D8C7AD] to-[#C9B698] border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
              >
                {/* Visual table wood grain background simulation */}
                <div className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(90deg,#9c6644,#9c6644_2px,transparent_2px,transparent_40px)] pointer-events-none"></div>

                {/* Comic book open page element */}
                <div className="bg-[#FAF8F5] border-4 border-black rounded-2xl p-4 md:p-6 shadow-[inset_0px_0px_10px_rgba(0,0,0,0.1)] relative space-y-6">
                  <div className="flex justify-between items-center border-b-2 border-zinc-300 pb-3 font-mono text-[10px] md:text-xs text-zinc-600">
                    <span className="font-extrabold flex items-center gap-1 uppercase tracking-wider">
                      <BookOpen size={14} className="text-yellow-500" />
                      Visualização em Página Integrada • Bíblia em Ação
                    </span>
                    <span className="font-bold hidden sm:inline">Páginas 148-149 • Toque num painel para ampliar</span>
                  </div>

                  {/* Dynamic Comic Page Grid (12 Columns Responsive Layout) */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {/* Panel 1 (Top Left, spans 7) */}
                    <ComicPanelCard
                      panel={panels[0]}
                      index={0}
                      characterId={chapter.characterId}
                      onClick={() => setZoomedPanelIndex(0)}
                      className="md:col-span-7 aspect-[4/3] md:h-80"
                    />

                    {/* Panel 2 (Top Right, spans 5) */}
                    <ComicPanelCard
                      panel={panels[1]}
                      index={1}
                      characterId={chapter.characterId}
                      onClick={() => setZoomedPanelIndex(1)}
                      className="md:col-span-5 aspect-[3/4] md:h-80"
                    />

                    {/* Panel 3 (Middle Left, spans 4) */}
                    <ComicPanelCard
                      panel={panels[2]}
                      index={2}
                      characterId={chapter.characterId}
                      onClick={() => setZoomedPanelIndex(2)}
                      className="md:col-span-4 aspect-square md:h-72"
                    />

                    {/* Panel 4 (Middle Center, spans 4) */}
                    <ComicPanelCard
                      panel={panels[3]}
                      index={3}
                      characterId={chapter.characterId}
                      onClick={() => setZoomedPanelIndex(3)}
                      className="md:col-span-4 aspect-square md:h-72"
                    />

                    {/* Panel 5 (Middle Right, spans 4) */}
                    <ComicPanelCard
                      panel={panels[4]}
                      index={4}
                      characterId={chapter.characterId}
                      onClick={() => setZoomedPanelIndex(4)}
                      className="md:col-span-4 aspect-square md:h-72"
                    />

                    {/* Panel 6 (Bottom panoramic climax panel, spans 12!) */}
                    <ComicPanelCard
                      panel={panels[5]}
                      index={5}
                      characterId={chapter.characterId}
                      onClick={() => setZoomedPanelIndex(5)}
                      className="md:col-span-12 aspect-[21/9] md:min-h-[300px] border-amber-500 border-4"
                    />
                  </div>

                  <div className="text-center text-[10px] text-zinc-500 font-mono tracking-widest uppercase pt-2 border-t border-zinc-200">
                    Música ambiente & Efeitos especiais integrados • Bíblia em Ação
                  </div>
                </div>
              </motion.div>

            ) : (
              
              /* ======================= MODO SLIDE (SEQUENCIAL SHONEN) ======================= */
              <motion.div
                key="slide-view"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="bg-white border-4 border-black p-4 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
              >
                {/* Header with panel dots */}
                <div className="flex justify-between items-center border-b-2 border-black pb-3 mb-4 font-mono text-xs">
                  <span className="font-bold flex items-center gap-1 uppercase">
                    <Sparkles size={14} className="text-yellow-500" />
                    Painel Focado
                  </span>
                  <div className="flex gap-1.5">
                    {panels.map((p, idx) => (
                      <button
                        key={p.id}
                        onClick={() => setCurrentPanelIndex(idx)}
                        className={`w-6 h-6 rounded-full border-2 border-black flex items-center justify-center font-bold font-mono transition-colors text-[10px] ${
                          currentPanelIndex === idx
                            ? "bg-yellow-400 text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                            : "bg-white text-zinc-400 hover:bg-zinc-100"
                        }`}
                      >
                        {idx + 1}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Focused Panel stage */}
                <div className="bg-zinc-100 border-4 border-black rounded-xl overflow-hidden relative min-h-[420px] flex flex-col justify-between">
                  <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1)_1px,transparent_1px,transparent_10px)]"></div>
                  
                  {/* Panel Title */}
                  <div className="bg-black text-white px-4 py-2 font-black text-xs uppercase tracking-widest font-mono relative z-10 border-b-2 border-black">
                    Painel #{currentPanelIndex + 1}: {currentPanel.title}
                  </div>

                  {/* Main Display screen */}
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
                        {(() => {
                          const imgUrl = getPanelImageUrl(chapter.characterId, currentPanelIndex);
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

                        {/* Shading */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/45 pointer-events-none"></div>

                        {/* Sound Effect overlay */}
                        {currentPanel.soundEffect && (
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
                        )}

                        {/* Dialog overlays with physical comic speech balloons */}
                        <div className="absolute inset-x-4 bottom-4 z-20 flex flex-col gap-2">
                          {currentPanel.dialogs.map((dialog, index) => {
                            const isThought = dialog.type === "thought";
                            const isNarrator = dialog.type === "narrator";
                            const isShout = dialog.type === "shout";
                            const isLeft = index % 2 === 0;

                            if (isNarrator) {
                              return (
                                <div
                                  key={index}
                                  className="bg-yellow-100 border-2 border-black text-black p-2.5 rounded text-xs font-sans font-bold leading-relaxed shadow-lg max-w-xl mx-auto uppercase transform -rotate-1"
                                >
                                  <span className="text-[9px] font-mono text-amber-700 font-extrabold uppercase block mb-0.5 leading-none">NARRADOR:</span>
                                  {dialog.text}
                                </div>
                              );
                            }

                            if (isThought) {
                              return (
                                <motion.div
                                  key={index}
                                  initial={{ y: 10, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  className={`p-3 max-w-sm border-2 border-dashed border-zinc-600 bg-zinc-50 text-black rounded-2xl text-xs md:text-sm font-sans leading-snug transform ${
                                    isLeft ? "self-start -rotate-1" : "self-end rotate-1"
                                  }`}
                                >
                                  <div className={`absolute -bottom-2 w-2.5 h-2.5 bg-zinc-50 border border-zinc-500 rounded-full ${isLeft ? "left-6" : "right-6"}`}></div>
                                  <div className={`absolute -bottom-4.5 w-1.5 h-1.5 bg-zinc-50 border border-zinc-500 rounded-full ${isLeft ? "left-7.5" : "right-7.5"}`}></div>
                                  <span className="text-[9px] font-mono font-black uppercase block mb-0.5 text-zinc-500">
                                    {dialog.speaker} (PENSAMENTO)
                                  </span>
                                  <p className="font-extrabold italic text-zinc-800">{dialog.text}</p>
                                </motion.div>
                              );
                            }

                            if (isShout) {
                              return (
                                <motion.div
                                  key={index}
                                  initial={{ y: 10, opacity: 0 }}
                                  animate={{ y: 0, opacity: 1 }}
                                  className={`p-3 max-w-sm border-3 border-black bg-red-600 text-white rounded-2xl text-xs md:text-sm font-sans leading-snug transform scale-102 ${
                                    isLeft ? "self-start -rotate-2" : "self-end rotate-2"
                                  }`}
                                >
                                  <div className={`absolute -bottom-2.5 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-black ${isLeft ? "left-4" : "right-4"}`}></div>
                                  <div className={`absolute -bottom-1.5 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-red-600 ${isLeft ? "left-4" : "right-4"}`}></div>
                                  <span className="text-[9px] font-mono font-black uppercase block mb-0.5 text-yellow-300">
                                    {dialog.speaker} • GRITO!
                                  </span>
                                  <p className="font-black uppercase tracking-tight">{dialog.text}</p>
                                </motion.div>
                              );
                            }

                            return (
                              <motion.div
                                key={index}
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 * index }}
                                className={`p-3 max-w-sm border-2 border-black bg-white text-zinc-900 rounded-2xl text-xs md:text-sm font-sans leading-snug transform ${
                                  isLeft ? "self-start -rotate-1" : "self-end rotate-1"
                                }`}
                              >
                                <div className={`absolute -bottom-2.5 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-black ${isLeft ? "left-4" : "right-4"}`}></div>
                                <div className={`absolute -bottom-1.5 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-white ${isLeft ? "left-4" : "right-4"}`}></div>
                                <span className="text-[9px] font-mono font-black uppercase block mb-0.5 text-yellow-600">
                                  {dialog.speaker}
                                </span>
                                <p className="font-extrabold">{dialog.text}</p>
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Bible verse strip */}
                  <div className="bg-yellow-400 text-black p-4 border-t-4 border-black relative z-10 font-sans shadow-inner shrink-0">
                    <div className="absolute -top-3.5 left-4 bg-black text-white border-2 border-black px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-widest font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      Palavras Sagradas • {currentPanel.verseRef}
                    </div>
                    <p className="text-sm md:text-base font-black leading-relaxed italic pt-1">
                      "{currentPanel.verseText}"
                    </p>
                  </div>
                </div>

                {/* Individual slide navigator controls */}
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
                      className="flex-1 sm:flex-initial flex items-center justify-center gap-1 bg-black text-white hover:bg-zinc-800 border-2 border-black px-5 py-2 rounded text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(234,179,8,1)] transition"
                    >
                      {currentPanelIndex === panels.length - 1 ? "Próx Cap" : "Próx Painel"}
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Action Storyboard Guide */}
          <div className="bg-zinc-50 border-4 border-black p-5 rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-lg font-black text-black uppercase tracking-tight border-b-2 border-zinc-200 pb-2 mb-3 flex items-center gap-1">
              <FileText size={18} className="text-yellow-500" />
              Diretrizes do Storyboard Artístico
            </h3>
            <div className="bg-white border-2 border-black rounded-lg p-4 shadow-inner space-y-2.5">
              <span className="text-[10px] font-mono text-zinc-400 font-extrabold uppercase block">Enquadramento do Painel Ativo</span>
              <p className="text-xs text-zinc-700 leading-relaxed font-mono font-medium">
                {viewMode === "page" ? "Selecione e clique em qualquer painel acima para abrir o Storyboard correspondente ou para ler o diálogo completo em tamanho grande." : currentPanel.actionDescription}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: MARGIN NOTES & HERO STATS (Span 4) */}
        <div className="xl:col-span-4 space-y-8">
          
          {/* MARGEM EDUCATIVA */}
          <div className="bg-yellow-50 border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden" id="margin-notes-pane">
            <div className="bg-black text-white px-4 py-3 font-black text-xs uppercase tracking-widest font-mono flex items-center gap-1.5 border-b-4 border-black">
              <HelpCircle size={16} className="text-yellow-400" />
              Margem Educativa (Notas)
            </div>
            
            <div className="p-5 space-y-5">
              {/* Active Panel archaeological note */}
              <div className="space-y-2 border-b-2 border-yellow-200/50 pb-4">
                <span className="text-[10px] font-mono text-amber-700 font-black uppercase block tracking-wider">
                  Arqueologia • Painel #{viewMode === "page" ? (zoomedPanelIndex !== null ? zoomedPanelIndex + 1 : 1) : currentPanelIndex + 1}
                </span>
                <h4 className="font-black text-sm text-zinc-950 uppercase font-sans tracking-tight leading-snug">
                  Contexto Histórico e Linguístico
                </h4>
                <p className="text-xs text-zinc-800 leading-relaxed font-sans font-medium">
                  {viewMode === "page" 
                    ? panels[zoomedPanelIndex !== null ? zoomedPanelIndex : 0].historicalNote 
                    : currentPanel.historicalNote
                  }
                </p>
              </div>

              {/* General history note */}
              <div className="space-y-2 border-b-2 border-yellow-200/50 pb-4">
                <span className="text-[10px] font-mono text-amber-700 font-black uppercase block tracking-wider">
                  Geografia & História Geral
                </span>
                <h4 className="font-black text-sm text-zinc-950 uppercase font-sans tracking-tight">
                  {chapter.extraHistoryNote.title}
                </h4>
                <p className="text-xs text-zinc-800 leading-relaxed font-sans font-medium">
                  {chapter.extraHistoryNote.content}
                </p>
              </div>

              {/* Theology Note */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-amber-700 font-black uppercase block tracking-wider">
                  Estudo Teológico Bíblico
                </span>
                <h4 className="font-black text-sm text-zinc-950 uppercase font-sans tracking-tight">
                  Profecia e Significado
                </h4>
                <p className="text-xs text-zinc-800 leading-relaxed font-sans font-medium">
                  {chapter.theologicalContext}
                </p>
              </div>
            </div>
          </div>

          {/* CHARACTER COLLECTIBLE CARD STATS */}
          <CharacterStatsCard character={character} />

        </div>
      </div>

      {/* IMMERSIVE LIGHTBOX OVERLAY DIALOG (Zoom View Mode) */}
      <AnimatePresence>
        {zoomedPanelIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex flex-col justify-between p-4 md:p-6"
          >
            {/* Top Close bar */}
            <div className="flex justify-between items-center text-white pb-3 border-b border-zinc-800 w-full">
              <div className="flex items-center gap-2">
                <span className="bg-yellow-400 text-black border-2 border-black px-2.5 py-0.5 rounded text-[10px] font-black uppercase font-mono shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  Painel #{zoomedPanelIndex + 1} de {panels.length}
                </span>
                <span className="text-xs md:text-sm font-black uppercase text-zinc-300 font-mono hidden sm:inline">
                  {panels[zoomedPanelIndex].title}
                </span>
              </div>
              <button
                onClick={() => setZoomedPanelIndex(null)}
                className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white rounded-full p-2 transition cursor-pointer"
                title="Fechar"
              >
                <X size={20} />
              </button>
            </div>

            {/* Centered Large Immersive Artwork container */}
            <div className="flex-grow flex items-center justify-center max-w-4xl mx-auto w-full relative">
              
              {/* Left Arrow */}
              <button
                onClick={handlePrevZoomedPanel}
                className="absolute left-2 md:-left-12 bg-black/80 hover:bg-black text-white border-2 border-zinc-700 hover:border-yellow-400 rounded-full p-3 transition z-30 cursor-pointer"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Dynamic Panel Canvas */}
              <div className="relative border-4 border-black rounded-2xl overflow-hidden shadow-2xl bg-zinc-950 aspect-[4/3] w-full max-h-[75vh]">
                {(() => {
                  const imgUrl = getPanelImageUrl(chapter.characterId, zoomedPanelIndex);
                  if (imgUrl) {
                    return (
                      <img
                        src={imgUrl}
                        alt={panels[zoomedPanelIndex].title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover brightness-95 contrast-110"
                      />
                    );
                  }
                  return (
                    <MangaVectorIllustration
                      characterId={chapter.characterId}
                      panelIndex={zoomedPanelIndex}
                      panelTitle={panels[zoomedPanelIndex].title}
                      actionDescription={panels[zoomedPanelIndex].actionDescription}
                    />
                  );
                })()}

                {/* Shading */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/45 pointer-events-none"></div>

                {/* Sound effect */}
                {panels[zoomedPanelIndex].soundEffect && (
                  <motion.div
                    initial={{ scale: 0.9, rotate: -15 }}
                    animate={{ scale: 1.05, rotate: -12 }}
                    className="absolute top-10 left-8 bg-yellow-400 text-black border-4 border-black px-4.5 py-2 font-black text-2xl md:text-4xl tracking-tighter shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase select-none transform rotate-[-12deg] z-20"
                  >
                    {panels[zoomedPanelIndex].soundEffect}
                    <span className="block text-[10px] font-mono font-black tracking-widest text-zinc-800 border-t border-black mt-1 text-center leading-none">
                      {panels[zoomedPanelIndex].soundEffectTranslation}
                    </span>
                  </motion.div>
                )}

                {/* Overlaid Speeches and Narrations (Larger fonts for cell phones!) */}
                <div className="absolute inset-x-4 bottom-4 z-20 flex flex-col gap-2.5">
                  {panels[zoomedPanelIndex].dialogs.map((dialog, index) => {
                    const isThought = dialog.type === "thought";
                    const isNarrator = dialog.type === "narrator";
                    const isShout = dialog.type === "shout";
                    const isLeft = index % 2 === 0;

                    if (isNarrator) {
                      return (
                        <div
                          key={index}
                          className="bg-yellow-100 border-2 border-black text-black p-3 rounded text-xs md:text-sm font-sans font-black leading-relaxed shadow-lg max-w-xl mx-auto uppercase transform -rotate-1"
                        >
                          <span className="text-[10px] font-mono text-amber-700 font-extrabold uppercase block mb-0.5 leading-none">NARRADOR:</span>
                          {dialog.text}
                        </div>
                      );
                    }

                    if (isThought) {
                      return (
                        <div
                          key={index}
                          className={`p-3 max-w-md border-2 border-dashed border-zinc-600 bg-zinc-50 text-black rounded-2xl text-xs md:text-sm font-sans leading-snug transform shadow-lg ${
                            isLeft ? "self-start -rotate-1" : "self-end rotate-1"
                          }`}
                        >
                          <div className={`absolute -bottom-2 w-2.5 h-2.5 bg-zinc-50 border border-zinc-500 rounded-full ${isLeft ? "left-6" : "right-6"}`}></div>
                          <div className={`absolute -bottom-4 w-1.5 h-1.5 bg-zinc-50 border border-zinc-500 rounded-full ${isLeft ? "left-7" : "right-7"}`}></div>
                          <span className="text-[10px] font-mono font-black uppercase block mb-0.5 text-zinc-500">
                            {dialog.speaker} (PENSAMENTO)
                          </span>
                          <p className="font-extrabold italic text-zinc-800">{dialog.text}</p>
                        </div>
                      );
                    }

                    if (isShout) {
                      return (
                        <div
                          key={index}
                          className={`p-3 max-w-md border-3 border-black bg-red-600 text-white rounded-2xl text-xs md:text-sm font-sans leading-snug transform shadow-xl ${
                            isLeft ? "self-start -rotate-2" : "self-end rotate-2"
                          }`}
                        >
                          <div className={`absolute -bottom-2.5 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-black ${isLeft ? "left-4" : "right-4"}`}></div>
                          <div className={`absolute -bottom-1.5 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-red-600 ${isLeft ? "left-4" : "right-4"}`}></div>
                          <span className="text-[10px] font-mono font-black uppercase block mb-0.5 text-yellow-300">
                            {dialog.speaker} • GRITO!
                          </span>
                          <p className="font-black uppercase tracking-tight leading-snug">{dialog.text}</p>
                        </div>
                      );
                    }

                    return (
                      <div
                        key={index}
                        className={`p-3 max-w-md border-2 border-black bg-white text-zinc-900 rounded-2xl text-xs md:text-sm font-sans leading-snug transform shadow-md ${
                          isLeft ? "self-start -rotate-1" : "self-end rotate-1"
                        }`}
                      >
                        <div className={`absolute -bottom-2.5 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[7px] border-t-black ${isLeft ? "left-4" : "right-4"}`}></div>
                        <div className={`absolute -bottom-1.5 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-white ${isLeft ? "left-4" : "right-4"}`}></div>
                        <span className="text-[10px] font-mono font-black uppercase block mb-0.5 text-yellow-600">
                          {dialog.speaker}
                        </span>
                        <p className="font-extrabold text-zinc-900 leading-snug">{dialog.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={handleNextZoomedPanel}
                className="absolute right-2 md:-right-12 bg-black/80 hover:bg-black text-white border-2 border-zinc-700 hover:border-yellow-400 rounded-full p-3 transition z-30 cursor-pointer"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Scripture Box */}
            <div className="bg-zinc-900 border-2 border-zinc-700 p-4 rounded-xl text-center max-w-2xl mx-auto w-full mb-2 shadow-inner">
              <div className="text-yellow-400 font-black uppercase tracking-widest text-[10px] font-mono mb-1">
                Escritura Sagrada • {panels[zoomedPanelIndex].verseRef}
              </div>
              <p className="text-sm italic text-zinc-100 font-bold leading-relaxed">
                "{panels[zoomedPanelIndex].verseText}"
              </p>
              <div className="text-[9px] text-zinc-400 font-mono italic mt-2.5 max-w-md mx-auto leading-normal">
                {panels[zoomedPanelIndex].actionDescription}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
