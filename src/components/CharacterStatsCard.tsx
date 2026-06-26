import React from "react";
import { Character } from "../data";
import { Shield, Sparkles, Brain, Flame, Heart } from "lucide-react";
import { motion } from "motion/react";

interface CharacterStatsCardProps {
  character: Character;
}

export default function CharacterStatsCard({ character }: CharacterStatsCardProps) {
  const statConfig = [
    { key: "fe" as const, label: "Fé (Emunah)", color: "bg-amber-500", icon: Shield },
    { key: "coragem" as const, label: "Coragem", color: "bg-red-500", icon: Flame },
    { key: "sabedoria" as const, label: "Sabedoria", color: "bg-blue-500", icon: Brain },
    { key: "impacto" as const, label: "Impacto Épico", color: "bg-purple-500", icon: Sparkles },
    { key: "alianca" as const, label: "Pacto / Aliança", color: "bg-emerald-500", icon: Heart },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-zinc-950 text-white rounded-xl border-4 border-black p-5 shadow-[6px_6px_0px_0px_rgba(217,119,6,1)] overflow-hidden relative"
      id={`char-card-${character.id}`}
    >
      {/* Decorative Shonen Background effects */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-red-500/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="flex items-center justify-between border-b-2 border-zinc-800 pb-3 mb-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-amber-500 font-mono">Ficha de Herói Bíblico</span>
          <h3 className="text-2xl font-black text-white font-sans tracking-tight">{character.name}</h3>
        </div>
        <div className="bg-amber-600 text-black px-2.5 py-1 rounded text-xs font-black uppercase font-mono shadow">
          Class: SR
        </div>
      </div>

      {/* Hero Illustration */}
      <div className="relative border-2 border-black rounded-lg overflow-hidden h-48 bg-zinc-900 flex items-center justify-center group mb-4">
        <img
          src={character.illustrationUrl}
          alt={character.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
        
        {/* Era Badge */}
        <div className="absolute bottom-2 left-2 right-2 bg-black/85 backdrop-blur-sm border border-zinc-700 rounded p-1 text-[10px] text-zinc-300 font-mono">
          <span className="text-amber-500 font-bold">Época:</span> {character.era}
        </div>
      </div>

      {/* Special Move Area */}
      <div className="bg-zinc-900 border-2 border-black rounded-lg p-3 mb-5 shadow-inner">
        <div className="flex items-center gap-1.5 text-amber-400 font-black text-xs uppercase mb-1 font-mono">
          <Sparkles size={14} className="animate-pulse" />
          Habilidade de Fé: {character.specialMove}
        </div>
        <p className="text-xs text-zinc-300 leading-relaxed font-sans">{character.specialMoveDesc}</p>
      </div>

      {/* Stats Grid */}
      <div className="space-y-3">
        <h4 className="text-xs uppercase font-mono font-bold tracking-widest text-zinc-400">Atributos Shonen</h4>
        {statConfig.map((stat) => {
          const Icon = stat.icon;
          const val = character.stats[stat.key];
          return (
            <div key={stat.key} className="space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="flex items-center gap-1 font-mono text-zinc-300">
                  <Icon size={12} className="text-zinc-500" />
                  {stat.label}
                </span>
                <span className="font-mono font-bold text-amber-500">{val}/100</span>
              </div>
              <div className="h-3 bg-zinc-800 border border-black rounded overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${val}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`h-full ${stat.color} border-r border-white/50`}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Biography quote */}
      <div className="mt-5 pt-3 border-t border-zinc-900 text-center">
        <p className="text-xs italic text-zinc-400 leading-relaxed font-sans">
          "{character.bio}"
        </p>
      </div>
    </motion.div>
  );
}
