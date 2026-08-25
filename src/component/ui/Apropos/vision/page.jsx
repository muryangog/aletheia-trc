"use client";

import {
  BookOpen,
  Compass,
  HeartHandshake,
  Flame,
  ShieldCheck,
  Quote,
  Eye,
  Send,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotreVision() {
  const piliers = [
    {
      icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />,
      title: "Enseignement de la Vérité",
      description:
        "Dévoiler la vérité de la parole de Dieu non diluée et enseigner le Dieu inconnu et incompris à travers la révélation du Christ.",
    },
    {
      icon: <Compass className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />,
      title: "Unité de la Foi",
      description:
        "Accompagner la génération actuelle jusqu'à parvenir à l'unité de la foi et expérimenter la plénitude spirituelle.",
    },
    {
      icon: <Flame className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />,
      title: "Vie Divine Authentique",
      description:
        "Aider chaque croyant à vivre une vie divine victorieuse, totalement libérée et non conditionnée par les circonstances physiques.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />,
      title: "Révélation du Christ",
      description:
        "Briser les mensonges de l'ennemi en faisant connaître la véritable nature et l'amour du Seigneur Jésus-Christ.",
    },
  ];

  const objectifs = [
    "Amener cette génération au bon sens de la parole de vérité non diluée.",
    "Démystifier les mensonges spirituels par la révélation du Christ.",
    "Bâtir des croyants qui ne dépendent pas de leurs circonstances physiques.",
    "Développer une communauté guidée et conduite par l'Esprit de Vérité.",
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen">
      {/* 1. HERO BANNER */}
      <section className="relative bg-blue-950 text-white py-14 sm:py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#5cbd5c_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <span className="inline-block text-green-400 font-semibold text-xs sm:text-sm uppercase tracking-widest bg-green-500/10 px-3.5 py-1.5 rounded-full border border-green-500/20">
            Aletheia • Truth Revealed Ministries
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold mt-4 sm:mt-6 mb-3 sm:mb-4 tracking-tight leading-tight">
            Notre Vision & Mission
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Dévoiler la vérité de la parole de Dieu et briser les mensonges de
            l'ennemi à travers la révélation du Christ.
          </p>
        </div>
      </section>

      {/* 2. DÉCLARATION VISION ET MISSION */}
      <section className="py-12 sm:py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            {/* CARTE VISION */}
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1.5 sm:w-2 h-full bg-green-500" />
              <div className="flex items-center gap-3 text-green-600 dark:text-green-400 font-bold text-base sm:text-lg mb-3">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Notre Vision</span>
              </div>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-sm sm:text-base font-medium mb-3">
                <strong className="text-blue-950 dark:text-white">
                  Aletheia
                </strong>{" "}
                est un ministère qui change la vie dont le but est de dévoiler
                la vérité de la parole de Dieu.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
                Nous nous sentons accablés par la responsabilité d'amener cette
                génération au bon sens de la parole de vérité non diluée,
                jusqu'à ce que nous parvenions à l'unité de la foi et vivions
                une vie divine qui n'est pas conditionnée par de simples
                circonstances physiques.
              </p>
            </div>

            {/* CARTE MISSION */}
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1.5 sm:w-2 h-full bg-blue-600" />
              <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 font-bold text-base sm:text-lg mb-3">
                <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Notre Mission</span>
              </div>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-sm sm:text-base font-semibold">
                « Briser les mensonges de l'ennemi en enseignant le Dieu inconnu
                et incompris à travers la révélation du Christ. »
              </p>
            </div>

            {/* VERSET CLÉ */}
            <div className="p-5 sm:p-6 bg-green-500/10 border-l-4 border-green-500 rounded-r-xl relative">
              <Quote className="absolute top-3 right-3 w-6 h-6 sm:w-8 sm:h-8 text-green-500/20" />
              <p className="italic text-slate-800 dark:text-slate-200 text-xs sm:text-sm md:text-base leading-relaxed mb-2">
                « Quand le consolateur sera venu, l'Esprit de vérité, il vous
                conduira dans toute la vérité; car il ne parlera pas de
                lui-même, mais il dira tout ce qu'il aura entendu, et il vous
                annoncera les choses à venir. »
              </p>
              <span className="font-bold text-green-600 dark:text-green-400 text-xs sm:text-sm">
                — Jean 16:13
              </span>
            </div>
          </div>

          {/* VISUEL & LOGO */}
          <div className="relative h-72 sm:h-96 md:h-[480px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 flex flex-col items-center justify-center p-6 sm:p-8 text-center">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-slate-900/80 to-transparent z-10" />
            <div className="relative z-20 w-44 h-44 sm:w-64 sm:h-64">
              <Image
                src="/Logo_aletheia.png"
                alt="Aletheia Truth Revealed"
                fill
                sizes="(max-width: 768px) 176px, 256px"
                className="object-contain transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="relative z-20 mt-4 sm:mt-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                Aletheia
              </h3>
              <p className="text-green-400 text-xs sm:text-sm font-medium">
                Truth Revealed Ministries
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LES 4 PILIERS */}
      <section className="bg-white dark:bg-slate-900 py-12 sm:py-16 md:py-24 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 dark:text-white mb-3 sm:mb-4">
              Les Piliers de Notre Ministère
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400">
              Chaque action et enseignement d'Aletheia repose sur ces principes
              fondamentaux.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {piliers.map((pilier, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="p-2.5 sm:p-3 bg-white dark:bg-slate-800 rounded-xl w-fit shadow-sm mb-4 sm:mb-5">
                    {pilier.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-blue-950 dark:text-white">
                    {pilier.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {pilier.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OBJECTIFS ET ENGAGEMENTS (SANS RÉSEAUX SOCIAUX) */}
      <section className="py-12 sm:py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden text-center sm:text-left">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#5cbd5c_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="relative z-10 space-y-6 sm:space-y-8">
            <div>
              <span className="inline-block text-xs uppercase tracking-widest text-green-400 font-bold bg-green-500/10 px-3.5 py-1 rounded-full border border-green-500/20 mb-3">
                Notre Engagement
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                Nos Engagements Concrets
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left">
              {objectifs.map((obj, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <ShieldCheck className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                    {obj}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex justify-center sm:justify-start">
              <Link
                href="/a-propos/equipe"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-full text-xs sm:text-sm transition-all shadow-md hover:shadow-green-500/20">
                <span>Découvrir l'Équipe Pastorale</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
