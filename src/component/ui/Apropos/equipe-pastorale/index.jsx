"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  Flame,
  Heart,
  Sparkles,
  BookOpen,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const TEAM = [
  {
    slug: "evrard-sinagaye",
    name: "Prophet Evrard SINAGAYE",
    role: "Fondateur & Père Spirituel",
    bio: "Dévoué à prêcher la Parole de Vérité (Aletheia) non diluée et à guider le peuple dans la révélation divine de Christ.",
    image: "/equipe/evrard-sinagaye.jpg",
    contact: "aletheiamediateam@gmail.com",
    icon: <Flame size={16} className="text-[#48a848]" />,
  },
  {
    slug: "ines-sinagaye",
    name: "Minister Ines SINAGAYE",
    role: "Servante de Dieu & Sœur en Christ",
    bio: "Engagée dans le service, l'encadrement spirituel et l'accompagnement des familles et des fidèles dans la foi.",
    image: "/equipe/ines-sinagaye.jpg",
    contact: "aletheiamediateam@gmail.com",
    icon: <Heart size={16} className="text-[#48a848]" />,
  },
  {
    slug: "eric-bimenyimana",
    name: "Pastor Eric BIMENYIMANA",
    role: "Ministère Pastoral",
    bio: "Passionné par la formation spirituelle, l'exégèse biblique et le discipulat des croyants.",
    image: "/equipe/eric-bimenyimana.jpg",
    contact: "aletheiamediateam@gmail.com",
    icon: <BookOpen size={16} className="text-[#48a848]" />,
  },
  {
    slug: "grace-bimenyimana",
    name: "Pastor Grace BIMENYIMANA",
    role: "Ministère Pastoral & Intercession",
    bio: "Consacrée au soutien pastoral, à la prière et à l'édification de la communauté Aletheia.",
    image: "/equipe/mama-grace.jpg",
    contact: "aletheiamediateam@gmail.com",
    icon: <UserCheck size={16} className="text-[#48a848]" />,
  },
  {
    slug: "odilon-ntwari",
    name: "Apostle Odilon NTWARI",
    role: "Ministère Apostolique",
    bio: "Oeuvre dans l'implantation, l'affermissement des croyants et la propagation de la Vérité.",
    image: "/equipe/odilon-ntwari.jpg",
    contact: "aletheiamediateam@gmail.com",
    icon: <ShieldCheck size={16} className="text-[#48a848]" />,
  },
  {
    slug: "divin-nduwumwami",
    name: "Apostle Divin NDUWUMWAMI",
    role: "Ministère Apostolique",
    bio: "Dédié au leadership spirituel, à l'évangélisation et à la préparation des saints pour l'œuvre du ministère.",
    image: "/equipe/apostle-divin.jpg",
    contact: "aletheiamediateam@gmail.com",
    icon: <Sparkles size={16} className="text-[#48a848]" />,
  },
  {
    slug: "joselyne-irankunda",
    name: "Pastor Josélyne IRANKUNDA",
    role: "Ministère Pastoral",
    bio: "Impliquée dans le développement spirituel et la coordination des activités internationales.",
    image: "/equipe/pastor-joselyne-irankunda.jpg",
    contact: "aletheiamediateam@gmail.com",
    icon: <ShieldCheck size={16} className="text-[#48a848]" />,
  },
];

export default function EquipePastorale() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen pb-12 sm:pb-20">
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#0c2448] text-white py-14 sm:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] [background-size:20px_20px]" />
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
          {TEAM.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-[2rem] border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              {/* Image Container */}
              <div className="relative h-56 sm:h-64 bg-slate-100 dark:bg-slate-800 flex items-center justify-center p-4 sm:p-6 border-b border-slate-100 dark:border-slate-800">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#0c2448]/5 dark:bg-white/5 border border-[#0c2448]/10 dark:border-white/10 flex flex-col items-center justify-center text-[#0c2448] dark:text-white/70 group-hover:scale-105 transition-transform duration-500 relative">
                    <span className="text-lg sm:text-xl font-bold font-serif opacity-30 select-none text-center px-2">
                      Aletheia
                    </span>
                    <div className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-white dark:bg-slate-800 shadow-md">
                      {member.icon}
                    </div>
                  </div>
                )}
              </div>

              {/* Contenu */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-2 sm:space-y-2.5">
                  <span className="inline-block text-[10px] sm:text-[11px] font-bold text-[#48a848] uppercase tracking-wider bg-[#48a848]/10 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full">
                    {member.role}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#0c2448] dark:text-white group-hover:text-[#48a848] transition-colors leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Contact Footer */}
                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <Link
                    href={`/a-propos/equipe/${member.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0c2448] dark:text-white hover:text-[#48a848] dark:hover:text-[#48a848] transition-all px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    En savoir plus
                  </Link>
                  <a
                    href={`https://wa.me/25779006007?text=Bonjour,%20je%20souhaite%20contacter%20${encodeURIComponent(member.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contacter sur WhatsApp"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all shadow-sm">
                    <Phone size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Encouragement Biblique */}
        <div className="mt-12 sm:mt-20 bg-gradient-to-br from-[#0c2448] to-[#12305a] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden text-center max-w-4xl mx-auto">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="relative z-10 space-y-3 sm:space-y-4">
            <p className="text-sm sm:text-lg md:text-xl font-serif italic text-slate-200 leading-relaxed">
              « Prenez donc garde à vous-mêmes, et à tout le troupeau sur lequel
              le Saint-Esprit vous a établis évêques, pour paître l'Église du
              Seigneur, qu'il s'est acquise par son propre sang. »
            </p>
            <span className="block text-xs sm:text-sm text-[#48a848] font-bold">
              — Actes 20:28
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
