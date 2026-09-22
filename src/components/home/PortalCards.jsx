import React from "react";
import Link from "next/link";
import { Video, Headphones, BookOpen, ArrowRight } from "lucide-react";

export default function PortalCards() {
  return (
    <section className="py-16 bg-slate-100 dark:bg-slate-900/50 border-t border-b border-slate-200/50 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] font-bold text-[#48a848] uppercase tracking-wider bg-[#48a848]/10 px-2.5 py-1 rounded-md">
            Explorez le Ministère
          </span>
          <h2 className="type-section-title mt-3 font-display">
            Ressources et Médias en ligne
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
            Profitez de nos différents canaux de diffusion pour grandir
            spirituellement où que vous soyez.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1. VIDÉO */}
          <div className="bg-white dark:bg-[#0c2448] rounded-xl p-6 border border-slate-200 dark:border-[#294466] shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="p-3 bg-[#48a848]/15 border border-[#48a848]/30 rounded-2xl text-[#48a848]">
                  <Video className="w-6 h-6" />
                </div>
                <span className="text-[8px] font-bold uppercase bg-[#48a848]/10 text-[#48a848] border border-[#48a848]/20 px-2 py-0.5 rounded-full">
                  À voir
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#0c2448] dark:text-white mb-2">
                Aletheia Vidéo
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-6">
                Regardez nos prédications, nos cultes et les enseignements de la
                Parole de Dieu en vidéo.
              </p>
            </div>
            <Link
              href="/sermons/videos"
              className="inline-flex items-center gap-2 bg-slate-200 dark:bg-[#12305a] hover:bg-slate-300 dark:hover:bg-[#294466] text-slate-800 dark:text-white py-2.5 px-4 rounded-lg text-xs font-bold transition-colors duration-150 self-start border border-slate-300 dark:border-[#294466] shadow-sm">
              Voir les vidéos <ArrowRight size={12} />
            </Link>
          </div>

          {/* 2. AUDIO */}
          <div className="bg-white dark:bg-[#0c2448] rounded-xl p-6 border border-slate-200 dark:border-[#294466] shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-[#48a848]/10 border border-[#48a848]/20 rounded-2xl text-[#48a848]">
                  <Headphones className="w-6 h-6" />
                </div>
                <span className="text-[8px] font-bold uppercase bg-[#48a848]/10 text-[#48a848] border border-[#48a848]/20 px-2 py-0.5 rounded-full">
                  À écouter
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#0c2448] dark:text-white mb-2">
                Aletheia Audio
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-6">
                Écoutez nos prédications, nos enseignements et nos messages
                inspirants où que vous soyez.
              </p>
            </div>
            <Link
              href="/sermons/audio"
              className="inline-flex items-center gap-2 bg-slate-200 dark:bg-[#12305a] hover:bg-slate-300 dark:hover:bg-[#294466] text-slate-800 dark:text-white py-2.5 px-4 rounded-lg text-xs font-bold transition-colors duration-150 self-start border border-slate-300 dark:border-[#294466] shadow-sm">
              Écouter les audios <ArrowRight size={12} />
            </Link>
          </div>

          {/* 3. TRUE LIGHT */}
          <div className="bg-white dark:bg-[#0c2448] rounded-xl p-6 border border-slate-200 dark:border-[#294466] shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-[#48a848]/10 border border-[#48a848]/20 rounded-2xl text-[#48a848]">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-[8px] font-bold uppercase bg-[#48a848]/10 text-[#48a848] border border-[#48a848]/20 px-2 py-0.5 rounded-full">
                  Méditation
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#0c2448] dark:text-white mb-2">
                True Light
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-6">
                La véritable lumière pour nourrir votre foi chaque jour à
                travers la Parole et la méditation.
              </p>
            </div>
            <Link
              href="/ressources/devotion"
              className="inline-flex items-center gap-2 bg-slate-200 dark:bg-[#12305a] hover:bg-slate-300 dark:hover:bg-[#294466] text-slate-800 dark:text-white py-2.5 px-4 rounded-lg text-xs font-bold transition-colors duration-150 self-start border border-slate-300 dark:border-[#294466] shadow-sm">
              Lire True Light <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
