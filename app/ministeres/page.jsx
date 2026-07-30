"use client";
import React from "react";
import { Users, Music, HeartHandshake, Tv, Smile, Bookmark, Sparkles } from "lucide-react";

const DEPARTMENTS = [
  {
    name: "Louange & Adoration",
    leader: "Responsable Louange",
    description: "Conduit la communauté dans la présence de Dieu chaque dimanche à travers des chants vivants et inspirés.",
    icon: <Music className="w-6 h-6 text-[#48a848]" />,
  },
  {
    name: "Jeunesse (Aletheia Youth)",
    leader: "Comité des Jeunes",
    description: "Un espace dynamique pour connecter, équiper et inspirer les jeunes à vivre pleinement pour Christ.",
    icon: <Users className="w-6 h-6 text-[#48a848]" />,
  },
  {
    name: "Social & Entraide (Compassion)",
    leader: "Comité d'Entraide",
    description: "Manifester l'amour pratique de Jésus en venant en aide aux nécessiteux et aux membres dans le besoin.",
    icon: <HeartHandshake className="w-6 h-6 text-[#48a848]" />,
  },
  {
    name: "Médias & Communication",
    leader: "Responsable Média",
    description: "En charge de la sonorisation, de la captation vidéo, des diffusions en direct et de la communication digitale.",
    icon: <Tv className="w-6 h-6 text-[#48a848]" />,
  },
  {
    name: "Ministère des Enfants",
    leader: "Moniteurs d'Écodim",
    description: "Enseigner la Parole de Dieu de manière adaptée et ludique aux enfants pour bâtir leur foi dès le plus jeune âge.",
    icon: <Smile className="w-6 h-6 text-[#48a848]" />,
  },
  {
    name: "Aletheia Academy / Enseignement",
    leader: "Collège Pastoral",
    description: "Cours doctrinaux approfondis, classes Pleroma et séminaires pour affermir les disciples dans la Vérité.",
    icon: <Bookmark className="w-6 h-6 text-[#48a848]" />,
  },
];

export default function Page() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen pb-20 transition-colors duration-300">
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#0c2448] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#48a848]/20 border border-[#48a848]/40 text-[#5cbd5c] text-xs font-semibold tracking-wider uppercase mb-4">
            Servir ensemble
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Nos Ministères
          </h1>
          <p className="text-lg md:text-xl text-slate-350 max-w-2xl mx-auto leading-relaxed">
            Découvrez les différents départements où vous pouvez vous impliquer, grandir et servir le Seigneur chez Aletheia TRC.
          </p>
        </div>
      </section>

      {/* 2. DEPARTMENTS GRID */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-[#0c2448] dark:text-white mb-4">
            S'engager et Servir
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Chaque croyant a reçu des talents et des dons pour l'édification commune. Trouvez votre place parmi nous.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEPARTMENTS.map((dept, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 border border-slate-100 dark:border-slate-800">
                  {dept.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0c2448] dark:text-white mb-3 group-hover:text-[#48a848] transition-colors">
                  {dept.name}
                </h3>
                <p className="text-slate-500 dark:text-slate-450 text-xs sm:text-sm leading-relaxed mb-6">
                  {dept.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Responsable : {dept.leader}</span>
                <span className="font-semibold text-[#48a848] hover:underline cursor-pointer flex items-center gap-1">
                  Rejoindre <Sparkles size={11} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
