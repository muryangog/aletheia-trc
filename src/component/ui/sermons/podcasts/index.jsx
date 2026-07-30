"use client";
import React from "react";
import { Radio, Headphones, Play, ArrowRight, ExternalLink } from "lucide-react";

const PLATFORMS = [
  {
    name: "Spotify",
    description: "Écoutez nos messages hebdomadaires directement sur votre application Spotify.",
    href: "https://open.spotify.com",
    color: "bg-[#1DB954] hover:bg-[#1aa34a]",
  },
  {
    name: "Apple Podcasts",
    description: "Abonnez-vous sur Apple Podcasts pour recevoir nos sermons dès leur publication.",
    href: "https://podcasts.apple.com",
    color: "bg-[#872EC4] hover:bg-[#7628ad]",
  },
  {
    name: "Google Podcasts",
    description: "Retrouvez-nous facilement sur Google Podcasts pour écouter en déplacement.",
    href: "https://podcasts.google.com",
    color: "bg-[#F89B29] hover:bg-[#df8b24]",
  },
];

const RECENT_EPISODES = [
  {
    id: 1,
    title: "Session Spéciale de Réveil - Partie 1",
    published: "Il y a 3 jours",
    duration: "32 min",
    series: "Revive Me Lord",
  },
  {
    id: 2,
    title: "Cultiver la Révélation Divine au Quotidien",
    published: "Il y a 1 semaine",
    duration: "45 min",
    series: "Pleroma Teachings",
  },
  {
    id: 3,
    title: "Le Combat Spirituel par la Parole",
    published: "Il y a 2 semaines",
    duration: "39 min",
    series: "Revive Me Lord",
  },
];

export default function SermonsPodcasts() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen pb-20 transition-colors duration-300">
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#0c2448] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#48a848]/20 border border-[#48a848]/40 text-[#5cbd5c] text-xs font-semibold tracking-wider uppercase mb-4">
            Baladodiffusions
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Nos Podcasts
          </h1>
          <p className="text-lg md:text-xl text-slate-350 max-w-2xl mx-auto leading-relaxed">
            Abonnez-vous à nos flux de podcasts pour écouter la Parole de Vérité n'importe où, n'importe quand.
          </p>
        </div>
      </section>

      {/* 2. PLATFORM GRIDS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-[#0c2448] dark:text-white mb-4">
            S'abonner sur vos applications
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Cliquez sur votre plateforme préférée pour vous abonner et ne rater aucun épisode chrétien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLATFORMS.map((platform, i) => (
            <a
              key={i}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 text-slate-700 dark:text-white border border-slate-100 dark:border-slate-800">
                  <Headphones size={22} className="text-[#48a848]" />
                </div>
                <h3 className="text-xl font-bold text-[#0c2448] dark:text-white mb-3">
                  {platform.name}
                </h3>
                <p className="text-slate-500 dark:text-slate-450 text-xs sm:text-sm leading-relaxed mb-8">
                  {platform.description}
                </p>
              </div>

              <div className={`w-full py-3.5 rounded-xl text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md ${platform.color}`}>
                S'abonner maintenant
                <ExternalLink size={13} />
              </div>
            </a>
          ))}
        </div>

        {/* 3. RECENT EPISODES */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-extrabold text-[#0c2448] dark:text-white flex items-center gap-2">
              <Radio className="text-[#48a848]" />
              Derniers Épisodes
            </h3>
            <span className="text-xs text-slate-400 font-semibold">Mis à jour régulièrement</span>
          </div>

          <div className="space-y-4">
            {RECENT_EPISODES.map((episode) => (
              <div
                key={episode.id}
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:shadow-md transition-shadow">
                <div className="space-y-1.5">
                  <span className="inline-block text-[10px] font-bold text-[#48a848] uppercase tracking-wider bg-[#48a848]/10 px-2 py-0.5 rounded">
                    {episode.series}
                  </span>
                  <h4 className="font-bold text-[#0c2448] dark:text-white text-base">
                    {episode.title}
                  </h4>
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span>{episode.published}</span>
                    <span>·</span>
                    <span>Durée: {episode.duration}</span>
                  </div>
                </div>

                <button className="inline-flex items-center gap-2 bg-[#0c2448] hover:bg-[#48a848] text-white text-xs font-bold px-5 py-3 rounded-xl transition-all shadow-md">
                  Écouter
                  <Play size={12} className="fill-white" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
