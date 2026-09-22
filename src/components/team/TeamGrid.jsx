import React from "react";
import TeamCard from "./TeamCard";
import { pastorsService } from "@/services/pastors.service";

export default function TeamGrid({ pastors }) {
  const list = pastors || pastorsService.getAll();

  return (
    <div className="bg-(--color-background) text-(--color-foreground) min-h-screen pb-12 sm:pb-20">
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#0c2448] text-white py-14 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] bg-size-[20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-[#48a848]/20 border border-[#48a848]/40 text-[#5cbd5c] text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-3 sm:mb-4">
            Staff
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3 sm:mb-4">
            L'Équipe Pastorale
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Découvrez nos leaders dévoués qui guident la communauté Aletheia
            dans l'amour, la Grâce et la Vérité.
          </p>
        </div>
      </section>

      {/* 2. GRILLE DE L'ÉQUIPE */}
      <section className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0c2448] dark:text-white mb-2 sm:mb-4">
            Nos Bergers et Responsables
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm">
            Une équipe unie pour équiper les saints, prêcher l'Évangile et
            fortifier l'Église.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {list.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
}
