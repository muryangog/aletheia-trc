import React from "react";
import Link from "next/link";
import Image from "next/image";
import ContactInfo from "./ContactInfo";
import { NAV_LINKS, CHURCH_SERVICE_TIMES } from "@/lib/constants/navigation";
import { SOCIAL_LINKS } from "@/lib/constants/socials";
import { Clock } from "lucide-react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full bg-[#0c2448] dark:bg-[#071324] text-slate-300 transition-colors duration-300 relative overflow-hidden">
      <div className="h-0.75 bg-linear-to-r from-transparent via-[#48a848]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 border-b border-[#294466] text-center sm:text-left">
          <div className="flex items-center">
            <Link href="/" className="inline-block">
              <Image
                src="/Logo_aletheia.png"
                alt="Aletheia TRC"
                width={120}
                height={120}
                className="w-auto h-20 object-contain brightness-110"
              />
            </Link>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-end">
            {SOCIAL_LINKS.map((s) => {
              const IconComponent = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  aria-label={s.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl border border-slate-700 bg-slate-800/80
                   flex items-center justify-center
                   text-white/70 hover:bg-[#48a848] hover:border-[#48a848]
                   hover:text-white transition-colors duration-200 shrink-0">
                  <IconComponent className="text-base sm:text-lg" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col py-8 divide-y divide-slate-800 border-b border-slate-800">
          <div className="pb-8 flex flex-col items-center text-center">
            <p className="text-[11px] tracking-[0.18em] uppercase text-[#5cbd5c] mb-4 font-semibold">
              Navigation Rapide
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-3.5 py-1.5 rounded-xl text-[12.5px] font-medium
                             text-slate-300 border border-slate-700 bg-slate-800/80
                             hover:bg-[#48a848] hover:border-[#48a848] hover:text-white
                             transition-colors duration-200 whitespace-nowrap">
                  {l.label}
                </Link>
              ))}
              <Link
                href="/don"
                className="px-4 py-1.5 rounded-xl text-[12.5px] font-semibold
                           bg-[#48a848] hover:bg-[#3a8a3a] text-white shadow-sm
                           transition-colors duration-200 whitespace-nowrap">
                Faire un don
              </Link>
            </div>
          </div>

          <div className="py-8 flex flex-col items-center text-center">
            <p className="text-[11px] tracking-[0.18em] uppercase text-[#5cbd5c] mb-4 font-semibold">
              Programme des Cultes
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl">
              {CHURCH_SERVICE_TIMES.map((service) => (
                <div
                  key={service.day}
                  className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-center gap-3 text-left">
                  <div className="w-8 h-8 rounded-xl bg-[#48a848]/15 border border-[#48a848]/30 flex items-center justify-center text-[#5cbd5c] shrink-0">
                    <Clock size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white">
                      {service.day}
                    </h4>
                    <p className="text-[12px] text-slate-300">{service.time}</p>
                    <span className="text-[10px] text-[#5cbd5c] font-medium">
                      {service.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-8 flex flex-col items-center text-center">
            <p className="text-[11px] tracking-[0.18em] uppercase text-[#5cbd5c] mb-4 font-semibold">
              Nous Trouver
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <ContactInfo />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-xs text-white/40 text-center sm:text-left">
          <p>
            Copyright © {currentYear} · Tous droits réservés par{" "}
            <span className="text-[#5cbd5c] font-medium">Aletheia TRC</span>
          </p>
          <p className="tracking-widest uppercase text-[10px]">
            Truth Revealed Church
          </p>
        </div>
      </div>
    </footer>
  );
}
