"use client";
import React from "react";
import { Landmark, Smartphone, Heart, ShieldCheck, Copy, CheckCircle } from "lucide-react";

export default function Page() {
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copié dans le presse-papier !");
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen pb-20 transition-colors duration-300">
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#0c2448] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#48a848]/20 border border-[#48a848]/40 text-[#5cbd5c] text-xs font-semibold tracking-wider uppercase mb-4">
            Libéralité chrétienne
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Faire un Don / Dîmes
          </h1>
          <p className="text-lg md:text-xl text-slate-350 max-w-2xl mx-auto leading-relaxed">
            Soutenez l'œuvre de Dieu, les ministères et les projets d'extension d'Aletheia TRC.
          </p>
        </div>
      </section>

      {/* 2. DÉTAILS DE GIVING */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encouragement biblique */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Heart size={36} className="text-[#48a848] mx-auto animate-pulse" />
          <h2 className="text-3xl font-extrabold text-[#0c2448] dark:text-white">
            Donner avec joie
          </h2>
          <p className="text-slate-550 dark:text-slate-400 text-sm leading-relaxed italic">
            « Que chacun donne comme il l'a résolu en son cœur, sans tristesse ni contrainte; car Dieu aime celui qui donne avec joie. » <br />
            <span className="font-bold text-[#48a848] not-italic">— 2 Corinthiens 9:7</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          
          {/* Option 1 : Mobile Money (Ecocash/Lumicash) */}
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3.5 bg-yellow-500/10 text-yellow-600 rounded-2xl border border-yellow-500/20">
                  <Smartphone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#0c2448] dark:text-white">Mobile Money</h3>
                  <p className="text-xs text-slate-450 dark:text-slate-400 mt-0.5">Rapide et direct depuis le Burundi.</p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                
                {/* Lumicash */}
                <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-xs text-[#0c2448] dark:text-white">LUMICASH (Viettel)</h4>
                    <p className="text-xs text-[#48a848] font-bold mt-1">+257 69 00 00 00</p>
                  </div>
                  <button
                    onClick={() => handleCopy("+25769000000")}
                    className="p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:text-[#48a848] transition-colors">
                    <Copy size={14} />
                  </button>
                </div>

                {/* Ecocash */}
                <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-xs text-[#0c2448] dark:text-white">ECOCASH (Econet)</h4>
                    <p className="text-xs text-[#48a848] font-bold mt-1">+257 79 00 60 07</p>
                  </div>
                  <button
                    onClick={() => handleCopy("+25779006007")}
                    className="p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:text-[#48a848] transition-colors">
                    <Copy size={14} />
                  </button>
                </div>

              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-450 dark:text-slate-400 flex items-center gap-2">
              <ShieldCheck className="text-emerald-500 flex-shrink-0" size={16} />
              <span>Saisissez le numéro officiel d'Aletheia TRC lors de votre envoi.</span>
            </div>
          </div>

          {/* Option 2 : Virement Bancaire */}
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3.5 bg-blue-500/10 text-blue-600 rounded-2xl border border-blue-500/20">
                  <Landmark size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#0c2448] dark:text-white">Virement Bancaire</h3>
                  <p className="text-xs text-slate-450 dark:text-slate-400 mt-0.5">Pour les dons nationaux et internationaux.</p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-350">
                <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl space-y-2">
                  <div className="flex justify-between">
                    <span className="font-bold">Banque :</span>
                    <span>BANCORBU S.A.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Titulaire :</span>
                    <span className="text-right">Aletheia Truth Revealed Church</span>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="font-bold">Compte BIF :</span>
                    <span className="font-semibold text-[#0c2448] dark:text-white">10022-010098976-90</span>
                    <button
                      onClick={() => handleCopy("10022-010098976-90")}
                      className="p-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:text-[#48a848] transition-colors ml-1">
                      <Copy size={11} />
                    </button>
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <span className="font-bold">Compte USD :</span>
                    <span className="font-semibold text-[#0c2448] dark:text-white">10022-020098976-95</span>
                    <button
                      onClick={() => handleCopy("10022-020098976-95")}
                      className="p-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:text-[#48a848] transition-colors ml-1">
                      <Copy size={11} />
                    </button>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Code Swift/BIC :</span>
                    <span>BCRBBIBI</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-450 dark:text-slate-400 flex items-center gap-2">
              <ShieldCheck className="text-emerald-500 flex-shrink-0" size={16} />
              <span>Les transferts internationaux par SWIFT sont sécurisés et traçables.</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
