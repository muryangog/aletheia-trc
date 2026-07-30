"use client";
import React from "react";
import Image from "next/image";
import { Mail, Phone, Flame, Heart, Sparkles, BookOpen } from "lucide-react";

const TEAM = [
  {
    name: "Pasteur Principal", // À remplacer par l'utilisateur
    role: "Pasteur Principal / Visionnaire",
    bio: "Dévoué à prêcher la Parole de Vérité (Aletheia) et à guider le troupeau dans la révélation divine.",
    image: "", // L'utilisateur mettra son image ici, ex: "/equipe/pasteur.jpg"
    contact: "contact@aletheiatrc.bi",
    icon: <Flame size={16} className="text-[#48a848]" />,
  },
  {
    name: "Co-Pasteur", // À remplacer
    role: "Co-Pasteur / Enseignement",
    bio: "Passionné par la formation spirituelle, l'exégèse de la Parole de Dieu et le discipulat.",
    image: "",
    contact: "education@aletheiatrc.bi",
    icon: <BookOpen size={16} className="text-[#48a848]" />,
  },
  {
    name: "Responsable Média", // À remplacer
    role: "Direction Technique & Média",
    bio: "En charge de la diffusion en direct, des réseaux sociaux et de la mise à jour spirituelle en ligne.",
    image: "",
    contact: "aletheiamediateam@gmail.com",
    icon: <Sparkles size={16} className="text-[#48a848]" />,
  },
  {
    name: "Responsable Louange", // À remplacer
    role: "Direction de l'Adoration",
    bio: "Conduit le peuple de Dieu dans une louange vibrante, authentique et inspirée par l'Esprit.",
    image: "",
    contact: "louange@aletheiatrc.bi",
    icon: <Heart size={16} className="text-[#48a848]" />,
  },
];

export default function EquipePastorale() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen pb-20">
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#0c2448] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#48a848]/20 border border-[#48a848]/40 text-[#5cbd5c] text-xs font-semibold tracking-wider uppercase mb-4">
            Bergers & Serviteurs
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            L'Équipe Pastorale
          </h1>
          <p className="text-lg md:text-xl text-slate-350 max-w-2xl mx-auto leading-relaxed">
            Découvrez nos leaders dévoués qui guident la communauté Aletheia dans l'amour et la Vérité.
          </p>
        </div>
      </section>

      {/* 2. GRILLE DE L'ÉQUIPE */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-[#0c2448] dark:text-white mb-4">
            Nos Bergers et Responsables
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Une équipe unie pour équiper les saints, prêcher l'Évangile et fortifier l'Église locale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              
              {/* Image Container */}
              <div className="relative h-64 bg-slate-100 dark:bg-slate-800 flex items-center justify-center p-6 border-b border-slate-100 dark:border-slate-800">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-[#0c2448]/5 dark:bg-white/5 border border-[#0c2448]/10 dark:border-white/10 flex flex-col items-center justify-center text-[#0c2448] dark:text-white/70 group-hover:scale-105 transition-transform duration-500 relative">
                    <span className="text-2xl font-bold font-serif opacity-30 select-none">
                      Aletheia
                    </span>
                    <div className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-white dark:bg-slate-850 shadow-md">
                      {member.icon}
                    </div>
                  </div>
                )}
              </div>

              {/* Contenu */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-2.5">
                  <span className="inline-block text-[11px] font-bold text-[#48a848] uppercase tracking-wider bg-[#48a848]/10 px-3 py-1 rounded-full">
                    {member.role}
                  </span>
                  <h3 className="text-lg font-bold text-[#0c2448] dark:text-white group-hover:text-[#48a848] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Contact Footer */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <a
                    href={`mailto:${member.contact}`}
                    className="inline-flex items-center gap-1.5 text-xs text-[#0c2448]/60 dark:text-white/60 hover:text-[#48a848] dark:hover:text-[#48a848] font-semibold transition-all">
                    <Mail size={13} />
                    Contacter
                  </a>
                  <a
                    href="https://wa.me/25779006007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all shadow-sm">
                    <Phone size={12} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Biblical Encouragement Card */}
        <div className="mt-20 bg-gradient-to-br from-[#0c2448] to-[#12305a] text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative z-10 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#48a848] font-bold bg-[#48a848]/10 px-4 py-1.5 rounded-full border border-[#48a848]/20">
              L'Appel pastoral
            </span>
            <p className="text-lg md:text-xl font-serif italic text-slate-200">
              « Prenez donc garde à vous-mêmes, et à tout le troupeau sur lequel le Saint-Esprit vous a établis évêques, pour paître l'Église du Seigneur, qu'il s'est acquise par son propre sang. »
            </p>
            <span className="block text-sm text-[#48a848] font-bold">— Actes 20:28</span>
          </div>
        </div>
      </section>
    </div>
  );
}
