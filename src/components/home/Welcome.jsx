import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";

export default function Welcome() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative w-full max-w-md mx-auto aspect-4/5 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-800 group">
          <Image
            src="/equipe/evrard-sinagaye.jpg"
            alt="Prophet Evrard Sinagaye"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-8 text-white">
            {/* <span className="text-[10px] uppercase tracking-widest text-[#48a848] font-bold">
              Fondateur d'Aletheia TRC
            </span> */}
            <h3 className="type-subsection-title font-display mt-1">
              Prophete Evrard SINAGAYE
            </h3>
            <p className="text-xs text-white/70 font-light mt-1">
              « Umusi umwe isi izokwikangura yaracerewe kuko kuno kuri tugufise
              turi benshi »
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#48a848]/10 text-[#48a848] text-xs font-bold uppercase tracking-wider">
            Qui sommes-nous ?
          </span>
          <h2 className="type-section-title font-display leading-tight">
            Révéler la Vérité <br />
            <span className="text-[#48a848]">pour transformer les vies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm sm:text-base">
            Aletheia Truth Revealed Church est une communauté de croyants
            passionnés par Jésus-Christ, basée à Kinindo, Bujumbura. Notre
            fardeau est de prêcher l'Évangile pur, de révéler la plénitude de
            Christ à travers les Écritures et d'accompagner chaque personne vers
            une foi solide et victorieuse.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
            Que vous soyez de passage ou à la recherche d'une famille
            spirituelle où grandir, nous vous accueillons à bras ouverts.
            Découvrez la communion fraternelle, nos enseignements et nos
            différents espaces de service.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/a-propos/vision"
              className="inline-flex items-center gap-2 bg-[#0c2448] hover:bg-[#07162b] text-white px-6 py-3 rounded-xl text-xs font-bold transition-colors duration-200 shadow-md">
              Notre Vision
              {/* <Compass size={14} /> */}
            </Link>
            <Link
              href="/a-propos/doctrine"
              className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 px-6 py-3 rounded-xl text-xs font-bold transition-colors duration-200 border border-slate-200 dark:border-slate-700">
              Nos Croyances
              {/* <ArrowRight size={14} /> */}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
