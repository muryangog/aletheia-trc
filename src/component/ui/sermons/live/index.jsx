"use client";

import React, { useState, useEffect } from "react";
import {
  Tv,
  HeartHandshake,
  Mail,
  MessageSquare,
  ShieldAlert,
  Radio,
  Clock,
} from "lucide-react";

export default function SermonsLive() {
  const [prayerName, setPrayerName] = useState("");
  const [prayerRequest, setPrayerRequest] = useState("");

  const [videoId, setVideoId] = useState(null);
  const [isLiveActive, setIsLiveActive] = useState(false);
  const [videoTitle, setVideoTitle] = useState("");
  const [isLiveLoading, setIsLiveLoading] = useState(true);
  const [domainHost, setDomainHost] = useState("localhost");

  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

  const CHURCH_EMAIL = "aletheiamediateam@gmail.com";

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDomainHost(window.location.hostname);
    }
  }, []);

  useEffect(() => {
    async function checkLiveStream() {
      if (!API_KEY || !CHANNEL_ID) {
        console.warn("Clés API manquantes dans le fichier .env.local");
        setIsLiveLoading(false);
        return;
      }

      try {
        // 1. Chercher un direct EN COURS
        const liveRes = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video&eventType=live`,
        );
        const liveData = await liveRes.json();

        if (liveData.items && liveData.items.length > 0) {
          const liveItem = liveData.items[0];
          setVideoId(liveItem.id.videoId);
          setVideoTitle(liveItem.snippet.title);
          setIsLiveActive(true);
        } else {
          // 2. Si aucun direct actif trouvé, récupérer la dernière vidéo publiée/rediffusion
          const completedRes = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video&order=date&maxResults=1`,
          );
          const completedData = await completedRes.json();

          if (completedData.items && completedData.items.length > 0) {
            const recentItem = completedData.items[0];
            setVideoId(recentItem.id.videoId);
            setVideoTitle(recentItem.snippet.title);
          }
          setIsLiveActive(false);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération YouTube :", error);
        setIsLiveActive(false);
      } finally {
        setIsLiveLoading(false);
      }
    }

    checkLiveStream();
  }, [API_KEY, CHANNEL_ID]);

  const handleSendPrayerEmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Requête de prière - ${prayerName || "Anonyme"}`,
    );
    const body = encodeURIComponent(
      `Nom: ${prayerName || "Anonyme"}\n\nRequête de prière:\n${prayerRequest}`,
    );
    window.location.href = `mailto:${CHURCH_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen pb-20 transition-colors duration-300">
      {/* BANNER */}
      <section className="relative bg-[#0c2448] text-white py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {isLiveActive ? (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/35 text-red-500 text-xs font-bold uppercase tracking-wider mb-4 animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
              Service en Direct (En Antenne)
            </div>
          ) : (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-700/50 border border-slate-600 text-slate-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Radio size={13} className="text-slate-400" />
              Hors Antenne
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Culte en Direct
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {isLiveActive
              ? "Suivez notre culte en direct et participez au chat en temps réel."
              : "Aucune transmission en direct pour le moment. Retrouvez ci-dessous la dernière vidéo ou rediffusion."}
          </p>
        </div>
      </section>

      {/* PLAYER ET FORMULAIRE */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Bloc Vidéo */}
          <div className="lg:col-span-8 space-y-6">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl bg-black aspect-video border border-slate-200 dark:border-slate-800 relative group">
              {isLiveLoading ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-slate-400 gap-3">
                  <div className="w-8 h-8 border-2 border-[#48a848] border-t-transparent rounded-full animate-spin" />
                  <span className="text-xs font-semibold">
                    Recherche du flux...
                  </span>
                </div>
              ) : videoId ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=${isLiveActive ? 1 : 0}`}
                  title={videoTitle || "Vidéo YouTube"}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 p-8 text-center text-white">
                  <Clock size={28} className="text-[#48a848] mb-4" />
                  <h3 className="text-xl font-bold mb-2">
                    Aucune vidéo disponible
                  </h3>
                  <p className="text-xs text-slate-400 max-w-md leading-relaxed">
                    Vérifiez la configuration des clés API dans votre fichier
                    .env.local.
                  </p>
                </div>
              )}
            </div>

            {/* Infos / Chat */}
            {videoId && (
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm flex items-center gap-3">
                  <div className="p-3 bg-red-100 dark:bg-red-950/30 text-red-600 rounded-2xl">
                    <Tv size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#0c2448] dark:text-white">
                      {videoTitle || "Diffusion Aletheia"}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {isLiveActive
                        ? "En direct actuellement"
                        : "Dernière vidéo publiée"}
                    </p>
                  </div>
                </div>

                {isLiveActive && (
                  <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
                    <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                      <MessageSquare size={18} className="text-[#48a848]" />
                      <h4 className="font-bold text-sm text-[#0c2448] dark:text-white">
                        Chat du Direct
                      </h4>
                    </div>

                    <div className="h-[400px] w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950">
                      <iframe
                        src={`https://www.youtube.com/live_chat?v=${videoId}&embed_domain=${domainHost}`}
                        className="w-full h-full"
                        title="Chat en direct YouTube"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Formulaire requête de prière */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-[2rem] p-6 border border-slate-200/80 dark:border-slate-800 shadow-xl">
              <div className="flex items-center gap-2 mb-3">
                <HeartHandshake className="text-[#48a848]" size={20} />
                <h3 className="text-base font-extrabold text-[#0c2448] dark:text-white">
                  Requête de Prière Confidentielle
                </h3>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-6">
                Pour préserver votre vie privée, vos requêtes de prière sont
                directement transmises à notre équipe pastorale via{" "}
                <strong>aletheiamediateam@gmail.com</strong>.
              </p>

              <form onSubmit={handleSendPrayerEmail} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase">
                    Votre Nom (Optionnel)
                  </label>
                  <input
                    type="text"
                    value={prayerName}
                    onChange={(e) => setPrayerName(e.target.value)}
                    placeholder="Votre nom"
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-[#48a848]/20 focus:border-[#48a848] text-xs text-slate-800 dark:text-slate-100 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase">
                    Sujet de prière *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={prayerRequest}
                    onChange={(e) => setPrayerRequest(e.target.value)}
                    placeholder="Ecrivez votre sujet de prière ici..."
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-[#48a848]/20 focus:border-[#48a848] text-xs text-slate-800 dark:text-slate-100 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#48a848] hover:bg-[#3d913d] text-white font-bold text-xs shadow-md hover:shadow-lg transition-all duration-300">
                  <Mail size={14} />
                  Envoyer directement par Email
                </button>
              </form>
            </div>

            <div className="bg-[#0c2448] text-white rounded-[2rem] p-6 border border-white/5 shadow-md flex items-start gap-3">
              <ShieldAlert
                size={18}
                className="text-[#48a848] flex-shrink-0 mt-0.5"
              />
              <div>
                <h4 className="font-bold text-xs">
                  Ouvrir directement sur YouTube
                </h4>
                <p className="text-[10px] text-slate-300 mt-1 leading-relaxed">
                  Si vous préférez commenter depuis l'application mobile
                  YouTube, cliquez ci-dessous.
                </p>
                <a
                  href={`https://www.youtube.com/channel/${CHANNEL_ID || ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-xs font-bold text-[#48a848] hover:underline">
                  Ouvrir l'application YouTube &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
