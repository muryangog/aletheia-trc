"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  ArrowLeft,
  Flame,
  Heart,
  Sparkles,
  BookOpen,
  ShieldCheck,
  UserCheck,
  Quote,
} from "lucide-react";
import { pastorsService } from "@/services/pastors.service";

const ICONS_MAP = {
  Flame: <Flame size={20} className="text-[#48a848]" />,
  Heart: <Heart size={20} className="text-[#48a848]" />,
  BookOpen: <BookOpen size={20} className="text-[#48a848]" />,
  UserCheck: <UserCheck size={20} className="text-[#48a848]" />,
  ShieldCheck: <ShieldCheck size={20} className="text-[#48a848]" />,
  Sparkles: <Sparkles size={20} className="text-[#48a848]" />,
};

export default function TeamProfile({ id }) {
  const member = pastorsService.getById(id);

  if (!member) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-2xl font-bold text-white mb-2">
          Profil non trouvé
        </h2>
        <p className="text-slate-400 mb-6">
          Le profil de ce membre n'existe pas ou a été déplacé.
        </p>
        <Link
          href="/a-propos/equipe"
          className="inline-flex items-center gap-2 bg-[#48a848] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all">
          <ArrowLeft size={14} /> Retour à l'équipe
        </Link>
      </div>
    );
  }

  const memberIcon = ICONS_MAP[member.iconName] || (
    <Flame size={20} className="text-[#48a848]" />
  );

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pb-20 transition-colors duration-200 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#48a848]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#0c2448]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-10">
        <Link
          href="/a-propos/equipe"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-all text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 px-4 py-2 rounded-xl">
          <ArrowLeft size={13} />
          Retour à l'équipe
        </Link>
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Panel: Photo and short info */}
          <div className="bg-slate-900/80 border border-white/5 p-6 rounded-2xl shadow-xl text-center space-y-6">
            <div className="relative w-full aspect-square md:max-w-sm mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-slate-850 flex items-center justify-center">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <span className="type-subsection-title font-display opacity-30">
                  Aletheia
                </span>
              )}
            </div>

            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[#48a848]/20 border border-[#48a848]/40 text-[#5cbd5c] text-xs font-bold uppercase tracking-wider">
                {member.role}
              </span>
              <h2 className="type-section-title text-white font-display">
                {member.name}
              </h2>
            </div>

            <div className="pt-6 border-t border-white/5 space-y-3">
              <a
                href={`mailto:${member.contact}`}
                className="w-full py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white text-xs font-bold transition-all flex items-center justify-center gap-2">
                <Mail size={14} />
                {member.contact}
              </a>
              <a
                href={`https://wa.me/25779006007?text=Bonjour,%20je%20souhaite%20contacter%20${encodeURIComponent(member.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md">
                <Phone size={14} />
                Contacter sur WhatsApp
              </a>
            </div>
          </div>

          {/* Right Panel: Biography and testimonies */}
          <div className="lg:col-span-2 space-y-8">
            {/* Biography */}
            <div className="bg-slate-900/50 border border-white/5 p-8 rounded-2xl space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
                {memberIcon}
                Biographie & Appel
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {member.bio}
              </p>
            </div>

            {/* Testimony */}
            {member.testimony && (
              <div className="bg-[#0c2448]/30 border border-[#48a848]/25 p-8 rounded-2xl relative overflow-hidden space-y-4">
                <div className="absolute top-4 right-4 text-white/5">
                  <Quote size={80} />
                </div>
                <h3 className="text-lg font-bold text-[#5cbd5c] flex items-center gap-2.5">
                  <Flame size={20} />
                  Témoignage Personnel
                </h3>
                <p className="type-body text-slate-200 leading-relaxed italic font-display">
                  {member.testimony}
                </p>
              </div>
            )}

            {/* Vision & Favorite Verse */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Vision */}
              <div className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl space-y-3">
                <h4 className="font-bold text-sm text-white flex items-center gap-2">
                  <Sparkles size={16} className="text-[#48a848]" />
                  Vision Ministérielle
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {member.vision}
                </p>
              </div>

              {/* Favorite Verse */}
              <div className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl space-y-3">
                <h4 className="font-bold text-sm text-white flex items-center gap-2">
                  <BookOpen size={16} className="text-[#48a848]" />
                  Verset Préféré
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  {member.favoriteVerse}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
