import React, { useState } from "react";
import { QUIZ_QUESTIONS, CHARACTERS } from "../data";
import { HelpCircle, Award, CheckCircle, XCircle, RefreshCw, Trophy, ArrowRight, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface QuizSectionProps {
  onBackToCover: () => void;
}

export default function QuizSection({ onBackToCover }: QuizSectionProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [historyAnswers, setHistoryAnswers] = useState<boolean[]>([]);

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const relatedChar = CHARACTERS[currentQuestion.characterId];

  const handleOptionSelect = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOptionIndex(index);
  };

  const handleSubmitAnswer = () => {
    if (selectedOptionIndex === null || isAnswerSubmitted) return;
    
    const isCorrect = selectedOptionIndex === currentQuestion.answerIndex;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setHistoryAnswers(prev => [...prev, isCorrect]);
    setIsAnswerSubmitted(true);
  };

  const handleNextQuestion = () => {
    setSelectedOptionIndex(null);
    setIsAnswerSubmitted(false);
    
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setIsFinished(false);
    setHistoryAnswers([]);
  };

  // Determine Shonen Level / Title
  const getShonenLevel = () => {
    if (score <= 3) return { title: "Escriba Iniciante", badge: "bg-zinc-500", desc: "Você está começando a compreender os mistérios antigos. Continue lendo as notas de margem!", color: "text-zinc-500" };
    if (score <= 6) return { title: "Guerreiro da Palavra", badge: "bg-blue-600", desc: "Sua sabedoria histórica e narrativa está crescendo! O caminho heróico o aguarda.", color: "text-blue-600" };
    if (score <= 8) return { title: "Guardião do Templo", badge: "bg-purple-600", desc: "Fabuloso! Suas respostas refletem um alto entendimento cultural e teológico das eras bíblicas.", color: "text-purple-600" };
    return { title: "Profeta da Aliança Eterna", badge: "bg-amber-500 animate-pulse text-black", desc: "Sabedoria Divina Máxima! Você domina com precisão e fidelidade absoluta toda a história sagrada. Um mestre digno da classe SR!", color: "text-amber-500 font-extrabold" };
  };

  const levelInfo = getShonenLevel();

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4" id="quiz-section-root">
      {/* Title Header */}
      <div className="bg-zinc-950 text-white p-6 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(217,119,6,1)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-amber-500">Modo Gamificação Educativa</span>
            <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight flex items-center gap-2 mt-1">
              <Trophy className="text-amber-500" />
              Quiz da Aliança Eterna
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
        {!isFinished ? (
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white border-4 border-black p-6 md:p-8 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-6"
          >
            {/* Progress indicators */}
            <div className="flex justify-between items-center border-b-2 border-zinc-200 pb-3">
              <span className="font-mono text-xs font-bold text-zinc-500">
                Pergunta {currentQuestionIndex + 1} de {QUIZ_QUESTIONS.length}
              </span>
              <div className="flex gap-1">
                {QUIZ_QUESTIONS.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-3.5 h-3.5 rounded border border-black ${
                      idx === currentQuestionIndex
                        ? "bg-amber-500 scale-110"
                        : historyAnswers[idx] === true
                        ? "bg-emerald-500"
                        : historyAnswers[idx] === false
                        ? "bg-red-500"
                        : "bg-zinc-100"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Question Text */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-amber-600 font-bold uppercase tracking-widest bg-amber-100 px-2.5 py-1 rounded-full border border-amber-300">
                História de {relatedChar.name} ({relatedChar.title})
              </span>
              <h3 className="text-lg md:text-xl font-black text-black leading-tight pt-2">
                {currentQuestion.question}
              </h3>
            </div>

            {/* Options list */}
            <div className="grid grid-cols-1 gap-3">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedOptionIndex === idx;
                const isCorrect = idx === currentQuestion.answerIndex;
                
                let optionStyle = "border-2 border-black bg-white text-black hover:bg-zinc-50";
                if (isAnswerSubmitted) {
                  if (isCorrect) {
                    optionStyle = "border-4 border-emerald-600 bg-emerald-50 text-emerald-950 font-bold";
                  } else if (isSelected) {
                    optionStyle = "border-4 border-red-500 bg-red-50 text-red-950 line-through";
                  } else {
                    optionStyle = "border-2 border-zinc-200 bg-zinc-50 text-zinc-400 cursor-not-allowed";
                  }
                } else if (isSelected) {
                  optionStyle = "border-4 border-black bg-amber-400 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] scale-[1.01]";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(idx)}
                    disabled={isAnswerSubmitted}
                    className={`p-4 rounded-xl text-left text-sm md:text-base font-semibold transition-all flex items-center justify-between ${optionStyle}`}
                  >
                    <span>{option}</span>
                    {isAnswerSubmitted && isCorrect && <CheckCircle className="text-emerald-600 shrink-0" size={20} />}
                    {isAnswerSubmitted && isSelected && !isCorrect && <XCircle className="text-red-500 shrink-0" size={20} />}
                  </button>
                );
              })}
            </div>

            {/* Verification explanation block */}
            {isAnswerSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl border-2 border-black ${
                  selectedOptionIndex === currentQuestion.answerIndex
                    ? "bg-emerald-50 border-emerald-600"
                    : "bg-red-50 border-red-500"
                }`}
              >
                <h4 className="font-bold text-xs uppercase font-mono tracking-wider flex items-center gap-1">
                  {selectedOptionIndex === currentQuestion.answerIndex ? (
                    <span className="text-emerald-700">✓ Resposta Correta!</span>
                  ) : (
                    <span className="text-red-700">✗ Resposta Incorreta</span>
                  )}
                </h4>
                <p className="text-xs text-zinc-800 leading-relaxed mt-1.5 font-sans">
                  {currentQuestion.explanation}
                </p>
              </motion.div>
            )}

            {/* Quiz Controls */}
            <div className="flex justify-end pt-4 border-t-2 border-zinc-100">
              {!isAnswerSubmitted ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={selectedOptionIndex === null}
                  className={`flex items-center gap-1.5 px-6 py-3 rounded-lg text-sm font-black uppercase tracking-wider border-2 border-black transition ${
                    selectedOptionIndex !== null
                      ? "bg-black text-white hover:bg-zinc-800 shadow-[4px_4px_0px_0px_rgba(245,158,11,1)] cursor-pointer"
                      : "bg-zinc-100 text-zinc-400 border-zinc-300 cursor-not-allowed"
                  }`}
                >
                  Enviar Resposta
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="flex items-center gap-1.5 bg-black text-white hover:bg-zinc-800 border-2 border-black px-6 py-3 rounded-lg text-sm font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(245,158,11,1)] transition"
                >
                  {currentQuestionIndex === QUIZ_QUESTIONS.length - 1 ? "Ver Resultado Final" : "Próxima Pergunta"}
                  <ArrowRight size={16} />
                </button>
              )}
            </div>
          </motion.div>
        ) : (
          /* SCORE RESULTS SCREEN */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border-4 border-black p-8 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center space-y-8"
          >
            <div className="max-w-md mx-auto space-y-4">
              <div className="inline-flex bg-amber-100 text-amber-600 border-4 border-black p-4 rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <Award size={48} className="animate-bounce" />
              </div>
              <h3 className="text-3xl font-black text-black uppercase tracking-tight">Desafio Concluído!</h3>
              <p className="text-sm text-zinc-600 font-sans leading-relaxed">
                Você percorreu as eras, enfrentou gigantes, superou dilúvios e testemunhou a maior de todas as vitórias históricas! Aqui está o seu relatório de fé:
              </p>
            </div>

            {/* Score Ring Grid */}
            <div className="bg-zinc-50 border-4 border-black p-6 rounded-xl max-w-sm mx-auto shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-wider block">Seu Desempenho</span>
              <div className="text-5xl font-black font-mono text-black mt-1 mb-2">
                {score} <span className="text-lg text-zinc-400">/ 10</span>
              </div>
              <div className="h-4 bg-zinc-200 border-2 border-black rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-500 border-r-2 border-black"
                  style={{ width: `${(score / 10) * 100}%` }}
                />
              </div>
              <p className="text-xs text-zinc-500 font-mono mt-2">
                Aproveitamento de { (score / 10) * 100 }% de precisão
              </p>
            </div>

            {/* Rank / Title Award Card */}
            <div className="border-4 border-black p-6 rounded-xl bg-zinc-950 text-white max-w-xl mx-auto shadow-[4px_4px_0px_0px_rgba(217,119,6,1)] space-y-3">
              <span className="text-xs uppercase font-mono font-black tracking-widest text-zinc-500 block">Patente Shonen Obtida</span>
              <h4 className={`text-2xl uppercase tracking-wider ${levelInfo.color}`}>
                👑 {levelInfo.title}
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed font-sans max-w-sm mx-auto">
                {levelInfo.desc}
              </p>
            </div>

            {/* Action controls */}
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <button
                onClick={handleRestartQuiz}
                className="flex items-center gap-1.5 bg-white hover:bg-zinc-100 text-black border-2 border-black px-6 py-3 rounded-lg text-sm font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition"
              >
                <RefreshCw size={16} /> Refazer Quiz
              </button>
              <button
                onClick={onBackToCover}
                className="flex items-center gap-1.5 bg-black text-white hover:bg-zinc-800 border-2 border-black px-6 py-3 rounded-lg text-sm font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(245,158,11,1)] transition"
              >
                Voltar ao Início
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
