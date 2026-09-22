import React from "react";
import { Clock, MapPin } from "lucide-react";

export default function Programs() {
  return (
    <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#0c2448] text-white rounded-xl p-6 sm:p-8 lg:p-10 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10 items-stretch">
          <div className="flex flex-col justify-center gap-4 lg:pr-4">
            <span className="self-start text-[11px] text-[#48a848] font-bold uppercase tracking-[0.16em] bg-[#48a848]/20 px-3 py-1.5 rounded-full border border-[#48a848]/40">
              Horaires des Cultes
            </span>
            <h2 className="type-section-title font-display text-white leading-tight">
              Rejoignez-nous <br />
              lors de nos cultes
            </h2>
            <p className="max-w-md text-sm text-slate-300 leading-relaxed">
              Partagez avec nous des moments puissants d'adoration,
              d'intercession et de révélation de la Parole à Kinindo.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-300 pt-1">
              <MapPin size={16} className="text-[#48a848] shrink-0" />
              <span>Kinindo, Bujumbura, Burundi</span>
            </div>
          </div>

          <div className="h-full bg-[#12305a] border border-[#294466] p-5 sm:p-6 rounded-xl flex flex-col gap-5">
            <div className="flex justify-between items-center gap-3 border-b border-[#294466] pb-3">
              <h3 className="font-bold text-lg text-[#5cbd5c]">Mercredi</h3>
              <span className="text-[10px] font-bold uppercase tracking-wide bg-[#0c2448] px-2.5 py-1 rounded-md">
                Louange
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <Clock className="text-[#48a848] shrink-0" size={18} />
              <div>
                <p className="text-sm text-white/60">
                  Culte de Louange & Adoration
                </p>
                <p className="text-base font-bold mt-1">17h30 – 19h30</p>
              </div>
            </div>
            <p className="mt-auto text-sm text-slate-300 leading-relaxed">
              Un rendez-vous pour approfondir la Parole de Dieu, prier ensemble
              et renouveler nos forces spirituelles.
            </p>
          </div>

          <div className="h-full bg-[#12305a] border border-[#294466] p-5 sm:p-6 rounded-xl flex flex-col gap-5">
            <div className="flex justify-between items-center gap-3 border-b border-[#294466] pb-3">
              <h3 className="font-bold text-lg text-[#5cbd5c]">Dimanche</h3>
              <span className="text-[10px] font-bold uppercase tracking-wide bg-[#0c2448] px-2.5 py-1 rounded-md">
                Dominical
              </span>
            </div>
            <div className="flex gap-3 items-center">
              <Clock className="text-[#48a848] shrink-0" size={18} />
              <div>
                <p className="text-sm text-white/60">Service Dominical</p>
                <p className="text-base font-bold mt-1">09h00 - 12h00</p>
              </div>
            </div>
            <p className="mt-auto text-sm text-slate-300 leading-relaxed">
              Rejoignez-nous pour un moment intense de louange, d'enseignement
              biblique édifiant et un programme adapté pour vos enfants
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
