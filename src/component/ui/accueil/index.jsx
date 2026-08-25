"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSlider from "./hero/HeroSlider";
import {
  Clock,
  Radio,
  BookOpen,
  Sparkles,
  ArrowRight,
  Heart,
  Calendar,
  Compass,
  MapPin,
  Music,
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen transition-colors duration-300">
      {/* 1. HERO SLIDER */}
      <HeroSlider />

      {/* 2. MOT DE BIENVENUE & VISION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image du Prophète Evrard Sinagaye */}
          <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-800 group">
            <Image
              src="/equipe/evrard-sinagaye.jpg"
              alt="Prophet Evrard Sinagaye"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay décoratif */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-8 text-white">
              <span className="text-[10px] uppercase tracking-widest text-[#48a848] font-bold">Fondateur d'Aletheia TRC</span>
              <h3 className="text-xl font-bold font-serif mt-1">Prophet Evrard SINAGAYE</h3>
              <p className="text-xs text-white/70 font-light mt-1">« Bâtir le corps du Christ par la Parole de Vérité. »</p>
            </div>
          </div>

          {/* Message de bienvenue */}
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#48a848]/10 text-[#48a848] text-xs font-bold uppercase tracking-wider">
              Qui sommes-nous ?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c2448] dark:text-white leading-tight font-serif">
              Révéler la Vérité <br />
              <span className="text-[#48a848]">pour transformer les vies</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-450 leading-relaxed text-sm sm:text-base">
              Aletheia Truth Revealed Church est une communauté de croyants passionnés par Jésus-Christ, basée à Kinindo, Bujumbura. Notre fardeau est de prêcher l'Évangile pur, de révéler la plénitude de Christ à travers les Écritures et d'accompagner chaque personne vers une foi solide et victorieuse.
            </p>
            <p className="text-slate-600 dark:text-slate-450 leading-relaxed text-sm">
              Que vous soyez de passage ou à la recherche d'une famille spirituelle où grandir, nous vous accueillons à bras ouverts. Découvrez la communion fraternelle, nos enseignements et nos différents espaces de service.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/a-propos/vision"
                className="inline-flex items-center gap-2 bg-[#0c2448] hover:bg-[#07162b] text-white px-6 py-3 rounded-full text-xs font-bold transition-all shadow-md">
                Notre Vision <Compass size={14} />
              </Link>
              <Link
                href="/a-propos/equipe"
                className="inline-flex items-center gap-2 bg-slate-150 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-800 dark:text-white px-6 py-3 rounded-full text-xs font-bold transition-all border border-slate-200 dark:border-slate-800">
                L'Équipe Pastorale <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CARTES INTERACTIVES DU PORTAIL */}
      <section className="py-16 bg-slate-100 dark:bg-slate-900/50 border-t border-b border-slate-200/50 dark:border-slate-850/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] font-bold text-[#48a848] uppercase tracking-wider bg-[#48a848]/10 px-2.5 py-1 rounded-md">
              Explorez le Ministère
            </span>
            <h2 className="text-3xl font-extrabold text-[#0c2448] dark:text-white mt-3 font-serif">
              Ressources et Médias en ligne
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
              Profitez de nos différents canaux de diffusion pour grandir spirituellement où que vous soyez.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Aletheia Radio */}
            <div className="bg-slate-950 text-white rounded-[2rem] p-6 border border-white/5 shadow-xl flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] [background-size:12px_12px]" />
              <div>
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="p-3 bg-[#48a848]/15 border border-[#48a848]/30 rounded-2xl text-[#48a848]">
                    <Radio className="w-6 h-6 animate-pulse" />
                  </div>
                  <span className="text-[8px] font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                    En direct
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">Aletheia Radio</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Notre flux radio continu. Écoutez nos prédications archivées, nos cultes et nos chants d'adoration à toute heure de la journée.
                </p>
              </div>
              <Link
                href="/sermons/radio"
                className="inline-flex items-center gap-2 bg-[#48a848] hover:bg-[#3d913d] text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-all relative z-10 self-start shadow-md">
                Écouter la Radio <ArrowRight size={12} />
              </Link>
            </div>

            {/* Dévotion Quotidienne */}
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 border border-slate-200/80 dark:border-slate-800 shadow-xl flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-blue-500">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="text-[8px] font-bold uppercase bg-[#48a848]/10 text-[#48a848] border border-[#48a848]/20 px-2 py-0.5 rounded-full">
                    Aujourd'hui
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0c2448] dark:text-white mb-2">La Dévotion Quotidienne</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-6">
                  Nourrissez votre foi tous les matins avec notre étude. Aujourd'hui : « Faire confiance à Dieu seulement (Matthieu 14:28-32) ».
                </p>
              </div>
              <Link
                href="/ressources/devotion"
                className="inline-flex items-center gap-2 bg-slate-150 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-800 dark:text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-all self-start border border-slate-250 dark:border-slate-800 shadow-sm">
                Lire la Méditation <ArrowRight size={12} />
              </Link>
            </div>

            {/* Nouveaux Convertis */}
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 border border-slate-200/80 dark:border-slate-800 shadow-xl flex flex-col justify-between group">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-500">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-[8px] font-bold uppercase bg-blue-500/10 text-blue-500 border border-blue-500/20 px-2 py-0.5 rounded-full">
                    Nouveau départ
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0c2448] dark:text-white mb-2">Nouveaux Convertis</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-6">
                  Vous venez de confesser Jésus-Christ ? Retrouvez les premiers pas de votre vie chrétienne et demandez un accompagnement pastoral.
                </p>
              </div>
              <Link
                href="/ressources/nouveaux-convertis"
                className="inline-flex items-center gap-2 bg-slate-150 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-800 dark:text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-all self-start border border-slate-250 dark:border-slate-800 shadow-sm">
                Commencer le Parcours <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. NOS PROGRAMMES & HORAIRES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0c2448] to-[#12305a] text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Grille décorative en arrière-plan */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10 items-center">
            
            {/* Colonne 1 : Titres */}
            <div className="space-y-4 lg:pr-6">
              <span className="text-[10px] text-[#48a848] font-bold uppercase tracking-widest bg-[#48a848]/20 px-3 py-1 rounded-full border border-[#48a848]/40">
                Horaires des Cultes
              </span>
              <h2 className="text-3xl font-bold font-serif leading-tight">
                Rejoignez-nous <br />
                lors de nos cultes
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                Partagez avec nous des moments puissants d'adoration, d'intercession et de révélation de la Parole à Kinindo.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-350 pt-2">
                <MapPin size={14} className="text-[#48a848]" />
                <span>Kinindo, Bujumbura, Burundi</span>
              </div>
            </div>

            {/* Colonne 2 : Programme de Mercredi */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <h3 className="font-bold text-md text-[#5cbd5c]">Mercredi</h3>
                <span className="text-[10px] font-bold uppercase bg-white/10 px-2 py-0.5 rounded-md">Louange</span>
              </div>
              <div className="flex gap-3 items-center">
                <Clock className="text-[#48a848]" size={16} />
                <div>
                  <p className="text-xs text-white/50">Culte de Louange & Adoration</p>
                  <p className="text-sm font-bold mt-0.5">17h30 – 19h30</p>
                </div>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Un temps spécialement consacré à adorer Dieu en communauté et à se rafraîchir dans sa sainte présence.
              </p>
            </div>

            {/* Colonne 3 : Programme de Dimanche */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-2">
                <h3 className="font-bold text-md text-[#5cbd5c]">Dimanche</h3>
                <span className="text-[10px] font-bold uppercase bg-[#48a848]/20 text-[#5cbd5c] px-2 py-0.5 rounded-md">Dominical</span>
              </div>
              <div className="flex gap-3 items-center">
                <Clock className="text-[#48a848]" size={16} />
                <div>
                  <p className="text-xs text-white/50">Services Dominicaux</p>
                  <p className="text-sm font-bold mt-0.5">09h00 et 12h30</p>
                </div>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Nos cultes principaux avec louange animée, prédication de la saine doctrine et ministères des enfants (Écodim).
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
