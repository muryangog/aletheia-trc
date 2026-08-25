"use client";

import React, { useState } from "react";
import { Landmark, Smartphone, Heart, ShieldCheck, Copy, Check, Info } from "lucide-react";

export default function Page() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const isCopied = (id) => copiedId === id;

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen pb-20 transition-colors duration-300">
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#0c2448] text-white py-20 lg:py-24 overflow-hidden border-b border-[#48a848]/10">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#48a848]/20 border border-[#48a848]/40 text-[#5cbd5c] text-xs font-semibold tracking-wider uppercase mb-4">
            Libéralité chrétienne
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Faire un Don / Dîmes
          </h1>
          <p className="text-lg md:text-xl text-slate-305 max-w-2xl mx-auto leading-relaxed">
            Soutenez l'œuvre de Dieu, les ministères et les projets d'extension d'Aletheia TRC.
          </p>
        </div>
      </section>

      {/* 2. DÉTAILS DE GIVING */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encouragement biblique */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <Heart size={36} className="text-[#48a848] mx-auto animate-pulse" />
          <h2 className="text-3xl font-extrabold text-[#0c2448] dark:text-white">
            Donner avec joie
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed italic">
            « Que chacun donne comme il l'a résolu en son cœur, sans tristesse ni contrainte; car Dieu aime celui qui donne avec joie. » <br />
            <span className="font-bold text-[#48a848] not-italic">— 2 Corinthiens 9:7</span>
          </p>
        </div>

        {/* Bénéficiaire Officiel */}
        <div className="max-w-4xl mx-auto mb-10 bg-[#0c2448] text-white p-6 rounded-3xl border border-[#48a848]/30 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#48a848_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="flex items-center gap-3 relative z-10">
            <div className="p-3 bg-[#48a848]/20 text-[#5cbd5c] rounded-2xl border border-[#48a848]/35 flex-shrink-0">
              <Info size={22} />
            </div>
            <div>
              <span className="text-[10px] text-white/50 tracking-wider uppercase font-bold">Nom officiel du bénéficiaire</span>
              <h3 className="text-lg md:text-xl font-bold tracking-tight text-white mt-0.5">
                ALETHEIA - TRUTH REVEALED MINISTRIES
              </h3>
            </div>
          </div>
          <button
            onClick={() => handleCopy("ALETHEIA- TRUTH REVEALED MINISTRIES", "beneficiary")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 z-10 border ${
              isCopied("beneficiary")
                ? "bg-[#48a848]/25 text-[#5cbd5c] border-[#48a848]/50"
                : "bg-white/10 hover:bg-white/20 text-white border-white/10"
            }`}>
            {isCopied("beneficiary") ? (
              <>
                <Check size={13} /> Copié !
              </>
            ) : (
              <>
                <Copy size={13} /> Copier le nom
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Option 1 : Comptes Internationaux (Bank of America) */}
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-3.5 bg-blue-500/10 text-blue-600 rounded-2xl border border-blue-500/20">
                  <Landmark size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#0c2448] dark:text-white">Comptes Internationaux</h3>
                  <p className="text-xs text-slate-450 dark:text-slate-400 mt-0.5">Bank of America (USD & Devises étrangères)</p>
                </div>
              </div>

              <div className="space-y-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
                
                {/* Bank of America - USD */}
                <div className="p-5 bg-slate-50 dark:bg-slate-950 rounded-2xl space-y-3 border border-slate-200/30 dark:border-slate-800/50">
                  <div className="flex justify-between items-center border-b border-slate-200/50 dark:border-slate-800/50 pb-2">
                    <span className="font-bold text-[#0c2448] dark:text-[#48a848]">Bank of America (USD)</span>
                    <span className="text-[10px] bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded-full font-bold">Devise : USD</span>
                  </div>

                  <div className="space-y-2 text-[11px] sm:text-xs">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-slate-400">Nº de compte :</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-[#0c2448] dark:text-white">488 138 549 770</span>
                        <button
                          onClick={() => handleCopy("488138549770", "bofa-usd")}
                          className={`p-1.5 border rounded-lg transition-colors ${
                            isCopied("bofa-usd")
                              ? "bg-[#48a848]/20 border-[#48a848]/40 text-[#5cbd5c]"
                              : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-850 hover:text-[#48a848]"
                          }`}>
                          {isCopied("bofa-usd") ? <Check size={11} /> : <Copy size={11} />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <span className="text-slate-400">Code Swift/BIC :</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-[#0c2448] dark:text-white">BOFAUS3N</span>
                        <button
                          onClick={() => handleCopy("BOFAUS3N", "bofa-swift-usd")}
                          className={`p-1.5 border rounded-lg transition-colors ${
                            isCopied("bofa-swift-usd")
                              ? "bg-[#48a848]/20 border-[#48a848]/40 text-[#5cbd5c]"
                              : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-850 hover:text-[#48a848]"
                          }`}>
                          {isCopied("bofa-swift-usd") ? <Check size={11} /> : <Copy size={11} />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <span className="text-slate-400">Adresse de la banque :</span>
                      <span className="font-medium text-right text-slate-650 dark:text-slate-350 max-w-[180px]">
                        222 Broadway, New York, NY 10038
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bank of America - Devises Etrangères */}
                <div className="p-5 bg-slate-50 dark:bg-slate-950 rounded-2xl space-y-3 border border-slate-200/30 dark:border-slate-800/50">
                  <div className="flex justify-between items-center border-b border-slate-200/50 dark:border-slate-800/50 pb-2">
                    <span className="font-bold text-[#0c2448] dark:text-[#48a848]">Bank of America (Devises)</span>
                    <span className="text-[10px] bg-indigo-500/10 text-indigo-500 px-2 py-0.5 rounded-full font-bold">Autres Devises</span>
                  </div>

                  <div className="space-y-2 text-[11px] sm:text-xs">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-slate-400">Code Swift/BIC :</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-[#0c2448] dark:text-white">BOFAUS6S</span>
                        <button
                          onClick={() => handleCopy("BOFAUS6S", "bofa-swift-foreign")}
                          className={`p-1.5 border rounded-lg transition-colors ${
                            isCopied("bofa-swift-foreign")
                              ? "bg-[#48a848]/20 border-[#48a848]/40 text-[#5cbd5c]"
                              : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-850 hover:text-[#48a848]"
                          }`}>
                          {isCopied("bofa-swift-foreign") ? <Check size={11} /> : <Copy size={11} />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <span className="text-slate-400">Adresse de la banque :</span>
                      <span className="font-medium text-right text-slate-650 dark:text-slate-350 max-w-[180px]">
                        555 California St, San Francisco, CA 94104
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-450 dark:text-slate-400 flex items-center gap-2">
              <ShieldCheck className="text-emerald-500 flex-shrink-0" size={16} />
              <span>Les transferts internationaux par SWIFT sont sécurisés et traçables.</span>
            </div>
          </div>

          {/* Option 2 : Comptes Locaux & Mobile Money (Bancobu, CRDB Bank, Lumicash) */}
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-200/80 dark:border-slate-800 shadow-xl flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="p-3.5 bg-yellow-500/10 text-yellow-600 rounded-2xl border border-yellow-500/20">
                  <Smartphone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#0c2448] dark:text-white">Comptes Locaux & Mobile Money</h3>
                  <p className="text-xs text-slate-450 dark:text-slate-400 mt-0.5">Bancobu, CRDB Bank, Lumicash (Burundi)</p>
                </div>
              </div>

              <div className="space-y-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
                
                {/* BANCOBU */}
                <div className="p-5 bg-slate-50 dark:bg-slate-950 rounded-2xl space-y-3 border border-slate-200/30 dark:border-slate-800/50">
                  <div className="flex justify-between items-center border-b border-slate-200/50 dark:border-slate-800/50 pb-2">
                    <span className="font-bold text-[#0c2448] dark:text-[#48a848]">BANCOBU</span>
                    <span className="text-[10px] bg-[#48a848]/10 text-[#48a848] px-2.5 py-0.5 rounded-full font-bold">Banque burundaise</span>
                  </div>

                  <div className="space-y-2.5 text-[11px] sm:text-xs">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-slate-400">Compte FBU :</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-[#0c2448] dark:text-white">24117720101-87</span>
                        <button
                          onClick={() => handleCopy("24117720101-87", "bancobu-fbu")}
                          className={`p-1.5 border rounded-lg transition-colors ${
                            isCopied("bancobu-fbu")
                              ? "bg-[#48a848]/20 border-[#48a848]/40 text-[#5cbd5c]"
                              : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-850 hover:text-[#48a848]"
                          }`}>
                          {isCopied("bancobu-fbu") ? <Check size={11} /> : <Copy size={11} />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <span className="text-slate-400">Compte USD :</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-[#0c2448] dark:text-white">24117720201-78</span>
                        <button
                          onClick={() => handleCopy("24117720201-78", "bancobu-usd")}
                          className={`p-1.5 border rounded-lg transition-colors ${
                            isCopied("bancobu-usd")
                              ? "bg-[#48a848]/20 border-[#48a848]/40 text-[#5cbd5c]"
                              : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-850 hover:text-[#48a848]"
                          }`}>
                          {isCopied("bancobu-usd") ? <Check size={11} /> : <Copy size={11} />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <span className="text-slate-400">Compte Enoti :</span>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-[#0c2448] dark:text-white">4117720102-84</span>
                        <button
                          onClick={() => handleCopy("4117720102-84", "bancobu-enoti")}
                          className={`p-1.5 border rounded-lg transition-colors ${
                            isCopied("bancobu-enoti")
                              ? "bg-[#48a848]/20 border-[#48a848]/40 text-[#5cbd5c]"
                              : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-850 hover:text-[#48a848]"
                          }`}>
                          {isCopied("bancobu-enoti") ? <Check size={11} /> : <Copy size={11} />}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CRDB BANK */}
                <div className="p-5 bg-slate-50 dark:bg-slate-950 rounded-2xl space-y-3 border border-slate-200/30 dark:border-slate-800/50">
                  <div className="flex justify-between items-center border-b border-slate-200/50 dark:border-slate-800/50 pb-2">
                    <span className="font-bold text-[#0c2448] dark:text-[#48a848]">CRDB BANK</span>
                    <span className="text-[10px] bg-red-500/10 text-red-500 px-2 py-0.5 rounded-full font-bold">Banque</span>
                  </div>

                  <div className="flex items-center justify-between gap-4 text-[11px] sm:text-xs">
                    <span className="text-slate-400">Nº de compte :</span>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-[#0c2448] dark:text-white">0150 801 212 000</span>
                      <button
                        onClick={() => handleCopy("0150801212000", "crdb-acc")}
                        className={`p-1.5 border rounded-lg transition-colors ${
                          isCopied("crdb-acc")
                            ? "bg-[#48a848]/20 border-[#48a848]/40 text-[#5cbd5c]"
                            : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-850 hover:text-[#48a848]"
                        }`}>
                        {isCopied("crdb-acc") ? <Check size={11} /> : <Copy size={11} />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* LUMICASH */}
                <div className="p-5 bg-slate-50 dark:bg-slate-950 rounded-2xl space-y-3 border border-slate-200/30 dark:border-slate-800/50">
                  <div className="flex justify-between items-center border-b border-slate-200/50 dark:border-slate-800/50 pb-2">
                    <span className="font-bold text-[#0c2448] dark:text-[#48a848]">LUMICASH (Mobile Money)</span>
                    <span className="text-[10px] bg-orange-500/10 text-orange-500 px-2 py-0.5 rounded-full font-bold">Code Marchand</span>
                  </div>

                  <div className="flex items-center justify-between gap-4 text-[11px] sm:text-xs">
                    <span className="text-slate-400">Code Marchand :</span>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-[#0c2448] dark:text-white">87 986</span>
                      <button
                        onClick={() => handleCopy("87986", "lumicash-code")}
                        className={`p-1.5 border rounded-lg transition-colors ${
                          isCopied("lumicash-code")
                            ? "bg-[#48a848]/20 border-[#48a848]/40 text-[#5cbd5c]"
                            : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-850 hover:text-[#48a848]"
                        }`}>
                        {isCopied("lumicash-code") ? <Check size={11} /> : <Copy size={11} />}
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-450 dark:text-slate-400 flex items-center gap-2">
              <ShieldCheck className="text-emerald-500 flex-shrink-0" size={16} />
              <span>Saisissez le numéro officiel d'Aletheia TRC lors de votre envoi mobile.</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
