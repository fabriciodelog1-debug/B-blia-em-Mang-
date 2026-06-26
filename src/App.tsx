/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { CHAPTERS } from "./data";
import MangaCover from "./components/MangaCover";
import MangaReader from "./components/MangaReader";
import QuizSection from "./components/QuizSection";
import AiScriptGenerator from "./components/AiScriptGenerator";
import { BookOpen, HelpCircle, Sparkles, BookMarked, Compass } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  const [activeTab, setActiveTab] = useState<"cover" | "reader" | "quiz" | "generator">("cover");
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);

  const selectedChapter = CHAPTERS.find((c) => c.id === selectedChapterId) || CHAPTERS[0];

  const handleSelectChapter = (chapterId: string) => {
    setSelectedChapterId(chapterId);
    setActiveTab("reader");
  };

  const handleNextChapter = () => {
    const currentIndex = CHAPTERS.findIndex((c) => c.id === selectedChapterId);
    if (currentIndex < CHAPTERS.length - 1) {
      setSelectedChapterId(CHAPTERS[currentIndex + 1].id);
    }
  };

  const handlePrevChapter = () => {
    const currentIndex = CHAPTERS.findIndex((c) => c.id === selectedChapterId);
    if (currentIndex > 0) {
      setSelectedChapterId(CHAPTERS[currentIndex - 1].id);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 pb-16 font-sans selection:bg-amber-500 selection:text-black" id="app-wrapper">
      
      {/* Dynamic Header */}
      <header className="sticky top-0 z-50 bg-white border-b-4 border-black px-4 md:px-8 py-3.5 flex items-center justify-between shadow-[0_4px_0_0_rgba(0,0,0,1)]">
        <div 
          onClick={() => { setActiveTab("cover"); setSelectedChapterId(null); }}
          className="flex items-center gap-2 cursor-pointer group"
          id="header-logo-container"
        >
          <div className="bg-black text-amber-500 border-2 border-black p-1.5 rounded-lg group-hover:bg-amber-500 group-hover:text-black transition-colors">
            <BookMarked size={20} />
          </div>
          <span className="font-black text-lg tracking-tighter uppercase font-sans">
            Bíblia <span className="bg-amber-500 text-black px-1.5 py-0.5 rounded border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ml-1">MANGÁ</span>
          </span>
        </div>

        {/* Top Navbar Buttons */}
        <nav className="flex items-center gap-1 sm:gap-3">
          <button
            onClick={() => { setActiveTab("cover"); setSelectedChapterId(null); }}
            className={`flex items-center gap-1 px-3 py-1.5 rounded text-xs font-black uppercase tracking-wider transition ${
              activeTab === "cover"
                ? "bg-amber-500 text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                : "hover:bg-zinc-100 text-zinc-700"
            }`}
          >
            <Compass size={14} />
            <span className="hidden sm:inline">Índice</span>
          </button>

          <button
            onClick={() => { setActiveTab("reader"); }}
            className={`flex items-center gap-1 px-3 py-1.5 rounded text-xs font-black uppercase tracking-wider transition ${
              activeTab === "reader"
                ? "bg-amber-500 text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                : "hover:bg-zinc-100 text-zinc-700"
            }`}
          >
            <BookOpen size={14} />
            <span className="hidden sm:inline">Leitor</span>
          </button>

          <button
            onClick={() => { setActiveTab("quiz"); }}
            className={`flex items-center gap-1 px-3 py-1.5 rounded text-xs font-black uppercase tracking-wider transition ${
              activeTab === "quiz"
                ? "bg-amber-500 text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                : "hover:bg-zinc-100 text-zinc-700"
            }`}
          >
            <HelpCircle size={14} />
            <span className="hidden sm:inline">Quiz</span>
          </button>

          <button
            onClick={() => { setActiveTab("generator"); }}
            className={`flex items-center gap-1 px-3 py-1.5 rounded text-xs font-black uppercase tracking-wider transition ${
              activeTab === "generator"
                ? "bg-amber-500 text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                : "hover:bg-zinc-100 text-zinc-700"
            }`}
          >
            <Sparkles size={14} />
            <span className="hidden sm:inline">Criador IA</span>
          </button>
        </nav>
      </header>

      {/* Main content body */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-8" id="main-content-layout">
        
        {activeTab === "cover" && (
          <MangaCover
            chapters={CHAPTERS}
            onSelectChapter={handleSelectChapter}
            onSelectTab={setActiveTab}
          />
        )}

        {activeTab === "reader" && (
          <MangaReader
            chapter={selectedChapter}
            onBackToCover={() => { setActiveTab("cover"); setSelectedChapterId(null); }}
            onNextChapter={
              CHAPTERS.findIndex((c) => c.id === selectedChapter.id) < CHAPTERS.length - 1
                ? handleNextChapter
                : undefined
            }
            onPrevChapter={
              CHAPTERS.findIndex((c) => c.id === selectedChapter.id) > 0
                ? handlePrevChapter
                : undefined
            }
          />
        )}

        {activeTab === "quiz" && (
          <QuizSection
            onBackToCover={() => { setActiveTab("cover"); setSelectedChapterId(null); }}
          />
        )}

        {activeTab === "generator" && (
          <AiScriptGenerator
            onBackToCover={() => { setActiveTab("cover"); setSelectedChapterId(null); }}
          />
        )}

      </main>

      {/* Comic styled footer */}
      <footer className="border-t-4 border-black mt-20 pt-8 pb-12 bg-white text-center text-xs font-mono text-zinc-500 space-y-2">
        <div>BÍBLIA EM MANGÁ • ESTUDO HISTÓRICO, ARQUEOLÓGICO E TEOLÓGICO</div>
        <div className="flex justify-center gap-1 items-center">
          Desenvolvido no Estilo Shonen • © {new Date().getFullYear()} Todos os direitos reservados.
        </div>
      </footer>

    </div>
  );
}
