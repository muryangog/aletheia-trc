"use client";

import {
  BookOpen,
  Compass,
  HeartHandshake,
  Flame,
  Target,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotreVision() {
  const piliers = [
    {
      icon: <BookOpen className="w-8 h-8 text-green-500" />,
      title: "Enseignement Biblique",
      description:
        "Proclamer la Vérité (Aletheia) de la Parole de Dieu avec clarté, authenticité et profondeur pour transformer les vies.",
    },
    {
      icon: <Compass className="w-8 h-8 text-green-500" />,
      title: "Orientation & Discipulat",
      description:
        "Accompagner chaque croyant dans son cheminement spirituel afin qu'il découvre son appel et grandisse dans sa foi.",
    },
    {
      icon: <Flame className="w-8 h-8 text-green-500" />,
      title: "Adoration Passionnée",
      description:
        "Cultiver une présence divine authentique à travers un culte vivant, la prière continue et la communion fraternelle.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-green-500" />,
      title: "Impact Social & Amour",
      description:
        "Manifester l'amour de Christ par des actions concrètes auprès de la communauté et des personnes dans le besoin.",
    },
  ];

  const objectifs = [
    "Équiper les croyants pour impacter leur sphère d'influence.",
    "Bâtir une communauté intergénérationnelle unie et accueillante.",
    "Rendre l'Évangile accessible grâce aux technologies modernes (Audios, Vidéos, Podcasts).",
    "Former les leaders de demain ancrés dans les valeurs de la Vérité divine.",
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen">
      {/* 1. HERO BANNER */}
      <section className="relative bg-blue-950 text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#5cbd5c_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <span className="text-green-400 font-semibold text-sm uppercase tracking-widest bg-green-500/10 px-4 py-1.5 rounded-full border border-green-500/20">
            Aletheia • Truth Revealed
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-6 mb-4 tracking-tight">
            Notre Vision & Mission
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Révéler la Vérité divine, transformer des vies par la Parole et
            bâtir une communauté forte et vivante.
          </p>
        </div>
      </section>

      {/* 2. DÉCLARATION DE LA VISION */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold text-sm mb-2">
              <Target size={18} />
              <span>D'où nous venons, où nous allons</span>
            </div>
            <h2 className="text-3xl font-bold text-blue-950 dark:text-white mb-6">
              Une église ancrée dans la Vérité, tournée vers l'avenir.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              Le nom{" "}
              <strong className="text-green-600 dark:text-green-400">
                Aletheia
              </strong>{" "}
              exprime notre conviction profonde : la Vérité de Dieu n'est pas
              une simple idée, mais une personne et une puissance capable
              d'affranchir et de restaurer.
            </p>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              Notre vision est de voir une génération debout, affermie dans sa
              foi, capable d'apporter de la lumière et de l'espoir là où règne
              l'obscurité.
            </p>
            <div className="p-4 bg-green-50 dark:bg-emerald-950/30 border-l-4 border-green-500 rounded-r-xl">
              <p className="italic text-sm text-slate-700 dark:text-slate-200">
                « Vous connaîtrez la vérité, et la vérité vous affranchira. » —
                Jean 8:32
              </p>
            </div>
          </div>

          <div className="relative h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
            <Image
              src="/Logo_aletheia.png"
              alt="Vision Aletheia"
              width={300}
              height={300}
              className="object-contain p-6"
            />
          </div>
        </div>
      </section>

      {/* 3. LES 4 PILIERS DE LA VISION */}
      <section className="bg-white dark:bg-slate-900 py-16 md:py-24 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-blue-950 dark:text-white mb-4">
              Les Piliers de Notre Action
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Chaque activité et chaque ministère d'Aletheia repose sur ces 4
              engagements fondamentaux.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {piliers.map((pilier, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl w-fit shadow-sm mb-5">
                  {pilier.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-blue-950 dark:text-white">
                  {pilier.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {pilier.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OBJECTIFS STRATÉGIQUES */}
      <section className="py-16 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-950 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-green-400">
              Nos Objectifs Concrets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {objectifs.map((obj, i) => (
                <div key={i} className="flex items-start gap-3">
                  <ShieldCheck className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200 text-sm md:text-base">
                    {obj}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-slate-300 text-sm">
                Vous souhaitez en savoir plus sur l'équipe pastorale ?
              </span>
              <Link
                href="/a-propos/equipe"
                className="px-6 py-2.5 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-full text-sm transition-all shadow-md">
                Découvrir l'Équipe
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
