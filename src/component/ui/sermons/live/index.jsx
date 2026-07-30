"use client";
import React, { useState } from "react";
import { Tv, MessageSquare, HeartHandshake, CheckCircle, Calendar, Send, ShieldAlert } from "lucide-react";

export default function SermonsLive() {
  const [prayerName, setPrayerName] = useState("");
  const [prayerRequest, setPrayerRequest] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handlePrayerSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setPrayerName("");
      setPrayerRequest("");
    }, 1200);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen pb-20 transition-colors duration-300">
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#0c2448] text-white py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-650/20 border border-red-500/35 text-red-500 text-xs font-bold uppercase tracking-wider mb-4 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-red-550 animate-ping" />
            Service en Direct (Live)
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Culte en Direct
          </h1>
          <p className="text-lg md:text-xl text-slate-350 max-w-2xl mx-auto leading-relaxed">
            Rejoignez-nous en direct pour louer le Seigneur et écouter sa Parole depuis votre domicile.
          </p>
        </div>
      </section>

      {/* 2. PLAYER ET SERVICES */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Lecteur en Direct (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl bg-black aspect-video border border-slate-200 dark:border-slate-800 relative group">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/live_stream?channel=UC_TON_ID_ICI" // À configurer
                title="Direct YouTube Aletheia TRC"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            {/* Description du Direct */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-red-100 dark:bg-red-950/30 text-red-650 rounded-2xl flex-shrink-0">
                  <Tv size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#0c2448] dark:text-white">Culte de Célébration</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-450 mt-0.5">Retrouvez-nous chaque dimanche matin en direct.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-xs font-bold text-[#48a848]">
                <span>1er Service : 09h00</span>
                <span>·</span>
                <span>2e Service : 11h00</span>
              </div>
            </div>
          </div>

          {/* Formulaire requête de prière (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 border border-slate-200/80 dark:border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <HeartHandshake className="text-[#48a848]" size={20} />
                <h3 className="text-base font-extrabold text-[#0c2448] dark:text-white">
                  Requête de Prière
                </h3>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-6">
                Notre équipe pastorale prie pour vous. Laissez-nous votre requête de prière en toute confidentialité.
              </p>

              {sent ? (
                <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-500/20 rounded-2xl p-6 text-center space-y-3">
                  <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto" />
                  <h4 className="font-bold text-emerald-800 dark:text-emerald-400 text-sm">Requête reçue</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs">
                    Nous prions et croyons avec vous pour votre situation. Que Dieu vous bénisse.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="px-4 py-2 bg-emerald-500 text-white font-bold rounded-xl text-[10px] hover:bg-emerald-600 transition-all">
                    Envoyer une autre requête
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePrayerSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase">Votre Nom (ou Anonyme)</label>
                    <input
                      type="text"
                      value={prayerName}
                      onChange={(e) => setPrayerName(e.target.value)}
                      placeholder="Votre nom"
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-[#48a848]/20 focus:border-[#48a848] text-xs text-slate-800 dark:text-slate-100 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase">Sujet de prière *</label>
                    <textarea
                      required
                      rows={4}
                      value={prayerRequest}
                      onChange={(e) => setPrayerRequest(e.target.value)}
                      placeholder="Comment pouvons-nous prier pour vous ?"
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-[#48a848]/20 focus:border-[#48a848] text-xs text-slate-800 dark:text-slate-100 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-[#48a848] hover:bg-[#3d913d] text-white font-bold text-xs shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50">
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Soumettre ma prière
                        <Send size={11} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Infos de connexion alternative */}
            <div className="bg-[#0c2448] text-white rounded-[2rem] p-6 border border-white/5 shadow-md flex items-start gap-3">
              <ShieldAlert size={18} className="text-[#48a848] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-xs">Des soucis avec le direct ?</h4>
                <p className="text-[10px] text-slate-300 mt-1 leading-relaxed">
                  Si le live ne se charge pas, vous pouvez vous connecter directement sur notre chaîne YouTube officielle en cliquant sur le lien ci-dessous.
                </p>
                <a
                  href="https://www.youtube.com/@aletheiatruthrevealedchurc4758"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-xs font-bold text-[#48a848] hover:underline">
                  Visiter notre chaîne YouTube &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
