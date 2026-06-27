import React from "react";
import { CHARACTERS, Chapter } from "../data";
import { BookOpen, Sparkles, ChevronRight, HelpCircle, PenTool } from "lucide-react";
import { motion } from "motion/react";

interface MangaCoverProps {
  chapters: Chapter[];
  onSelectChapter: (chapterId: string) => void;
  onSelectTab: (tab: "reader" | "quiz" | "generator") => void;
}

export default function MangaCover({ chapters, onSelectChapter, onSelectTab }: MangaCoverProps) {
  return (
    <div className="space-y-12 py-4" id="manga-cover-container">
      {/* Hero Welcome banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border-4 border-black p-6 md:p-8 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
        {/* Halftone Screentone Pattern overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="lg:col-span-7 space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-black uppercase font-mono shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border border-black">
            <Sparkles size={12} />
            Estilo de Quadrinhos Épicos
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black text-black tracking-tight leading-none uppercase">
            BÍBLIA EM <br className="hidden md:block"/>
            <span className="bg-yellow-400 text-black px-4 py-2 inline-block border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 mt-2 tracking-tighter">AÇÃO</span>
          </h1>
          
          <p className="text-lg text-zinc-700 leading-relaxed font-sans max-w-xl">
            Explore as Escrituras Sagradas através de ilustrações dinâmicas e páginas de quadrinhos integradas, inspiradas no clássico "Bíblia em Ação".
            Uma viagem histórica, arqueológica e teológica precisa, do nascimento à glória de 10 grandes personagens bíblicos, com diálogos fiéis aos textos originais e explicações educativas de margem.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => onSelectChapter(chapters[0].id)}
              className="flex items-center gap-2 bg-black text-white hover:bg-zinc-800 transition px-6 py-3 rounded-lg text-sm font-black uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(245,158,11,1)]"
              id="btn-start-reading"
            >
              <BookOpen size={18} />
              Iniciar Leitura (Cap 1)
            </button>
            <button
              onClick={() => onSelectTab("quiz")}
              className="flex items-center gap-2 bg-amber-100 text-amber-950 hover:bg-amber-200 transition px-5 py-3 rounded-lg text-sm font-black uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              id="btn-go-quiz"
            >
              <HelpCircle size={18} />
              Quiz da Aliança
            </button>
          </div>
        </div>

        {/* Big Cover Illustration from generated assets */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div 
            whileHover={{ scale: 1.02, rotate: 1 }}
            className="w-full max-w-sm rounded-xl border-4 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-zinc-950 p-2 relative group"
          >
            <div className="absolute top-4 left-4 bg-yellow-400 text-black font-black uppercase text-[10px] px-2 py-0.5 rounded shadow z-10 font-mono tracking-wider border-2 border-black">
              EDIÇÃO HISTÓRICA & GEOGRÁFICA
            </div>
            <div className="border-2 border-zinc-800 rounded-lg overflow-hidden bg-zinc-900 aspect-[3/4]">
              <img
                src="/assets/images/manga_capa_biblia_1782499151394.jpg"
                alt="Bíblia em Ação Capa"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="pt-3 pb-1 text-center font-mono text-[11px] text-zinc-400">
              BÍBLIA EM AÇÃO: AS CRÔNICAS DOS HERÓIS DA FÉ
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature Navigation Cards (Quiz / AI Creator) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-amber-50 border-4 border-black p-6 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex gap-4 items-start">
          <div className="bg-amber-500 text-black border-2 border-black p-3 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0">
            <HelpCircle size={24} />
          </div>
          <div>
            <h3 className="text-xl font-black text-black uppercase tracking-tight">Quiz de Conhecimento Histórico</h3>
            <p className="text-sm text-zinc-700 mt-1 mb-4 leading-relaxed">
              Responda a perguntas precisas sobre arqueologia, grego, hebraico e narrativa bíblica para obter patentes Shonen de prestígio espiritual.
            </p>
            <button
              onClick={() => onSelectTab("quiz")}
              className="inline-flex items-center gap-1.5 text-xs font-black text-black uppercase tracking-wider hover:underline"
            >
              Entrar no Desafio <ChevronRight size={14} />
            </button>
          </div>
        </div>

        <div className="bg-purple-50 border-4 border-black p-6 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex gap-4 items-start">
          <div className="bg-purple-500 text-white border-2 border-black p-3 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0">
            <PenTool size={24} />
          </div>
          <div>
            <h3 className="text-xl font-black text-black uppercase tracking-tight">Criador de Roteiro IA</h3>
            <p className="text-sm text-zinc-700 mt-1 mb-4 leading-relaxed">
              Escreva qualquer história ou versículo bíblico e nossa Inteligência Artificial criará instantaneamente um roteiro de mangá shonen com balões de fala e notas de rodapé!
            </p>
            <button
              onClick={() => onSelectTab("generator")}
              className="inline-flex items-center gap-1.5 text-xs font-black text-black uppercase tracking-wider hover:underline"
            >
              Criar com IA <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Chapters Grid Header */}
      <div className="border-b-4 border-black pb-3">
        <h2 className="text-2xl font-black text-black tracking-tight uppercase flex items-center gap-2">
          <BookOpen className="text-amber-500" />
          Índice de Capítulos (Os 10 Personagens)
        </h2>
      </div>

      {/* Chapters Grid Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {chapters.map((chapter) => {
          const char = CHARACTERS[chapter.characterId];
          const hasGeneratedImg = chapter.imageUrl || char.illustrationUrl;
          return (
            <motion.div
              key={chapter.id}
              whileHover={{ y: -5 }}
              onClick={() => onSelectChapter(chapter.id)}
              className="bg-white border-4 border-black rounded-xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(245,158,11,1)] transition-all cursor-pointer flex flex-col justify-between group"
              id={`chapter-card-${chapter.id}`}
            >
              <div>
                {/* Chapter Thumbnail */}
                <div className="h-36 bg-zinc-900 border-b-2 border-black relative overflow-hidden flex items-center justify-center">
                  <img
                    src={char.illustrationUrl || "/assets/images/manga_capa_biblia_1782499151394.jpg"}
                    alt={chapter.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-black text-white px-2 py-0.5 rounded text-[10px] font-mono font-bold border border-zinc-700">
                    Cap {chapter.number}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 font-mono">
                    {char.name}
                  </span>
                  <h3 className="text-base font-black text-black leading-snug tracking-tight group-hover:text-amber-600 transition-colors">
                    {chapter.title}
                  </h3>
                  <p className="text-xs text-zinc-600 line-clamp-3 leading-relaxed font-sans">
                    {chapter.summary}
                  </p>
                </div>
              </div>

              {/* Read Button */}
              <div className="p-4 pt-0">
                <div className="w-full bg-zinc-100 group-hover:bg-amber-500 group-hover:text-black border-2 border-black rounded py-1.5 text-center text-xs font-black uppercase tracking-wider transition-colors">
                  Ler Capítulo
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
