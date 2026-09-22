import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Flame,
  Heart,
  BookOpen,
  UserCheck,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const ICONS_MAP = {
  Flame: <Flame size={16} className="text-[#48a848]" />,
  Heart: <Heart size={16} className="text-[#48a848]" />,
  BookOpen: <BookOpen size={16} className="text-[#48a848]" />,
  UserCheck: <UserCheck size={16} className="text-[#48a848]" />,
  ShieldCheck: <ShieldCheck size={16} className="text-[#48a848]" />,
  Sparkles: <Sparkles size={16} className="text-[#48a848]" />,
};

export default function TeamCard({ member }) {
  const icon = ICONS_MAP[member.iconName] || (
    <Flame size={16} className="text-[#48a848]" />
  );

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-150 flex flex-col justify-between group">
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
            <span className="type-subsection-title font-display opacity-30 select-none text-center px-2">
              Aletheia
            </span>
            <div className="absolute bottom-2 right-2 p-1.5 rounded-lg bg-white dark:bg-slate-800 shadow-md">
              {icon}
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
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
            {member.bio}
          </p>
        </div>

        <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <Link
            href={`/a-propos/equipe/${member.id}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0c2448] dark:text-white hover:text-[#48a848] dark:hover:text-[#48a848] transition-all px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            En savoir plus
          </Link>
          <a
            href={`https://wa.me/25779006007?text=Bonjour,%20je%20souhaite%20contacter%20${encodeURIComponent(
              member.name,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter sur WhatsApp"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all shadow-sm">
            <Phone size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
