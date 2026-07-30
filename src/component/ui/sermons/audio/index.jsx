"use client";
import React, { useState } from "react";
import { Search, Play, Pause, Download, Volume2, Calendar, Clock, User, Filter, Disc } from "lucide-react";

const SERMONS = [
  {
    id: 1,
    title: "Le Combat de la Foi",
    preacher: "Pasteur Principal",
    series: "Marcher dans l'Esprit",
    date: "Dimanche 26 Juillet 2026",
    duration: "45:12",
    fileUrl: "/audio/sermon1.mp3",
  },
  {
    id: 2,
    title: "La Puissance de la Vérité",
    preacher: "Co-Pasteur",
    series: "Aletheia Series",
    date: "Dimanche 19 Juillet 2026",
    duration: "52:30",
    fileUrl: "/audio/sermon2.mp3",
  },
  {
    id: 3,
    title: "Vaincre la peur par l'amour",
    preacher: "Pasteur Principal",
    series: "Victoire Chrétienne",
    date: "Dimanche 12 Juillet 2026",
    duration: "38:45",
    fileUrl: "/audio/sermon3.mp3",
  },
  {
    id: 4,
    title: "Le Pardon Divin et Restauration",
    preacher: "Co-Pasteur",
    series: "La Grâce Abondante",
    date: "Dimanche 05 Juillet 2026",
    duration: "41:20",
    fileUrl: "/audio/sermon4.mp3",
  },
];

const PREACHERS = ["Tous", "Pasteur Principal", "Co-Pasteur"];

export default function SermonsAudio() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPreacher, setSelectedPreacher] = useState("Tous");
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Filtrage
  const filteredSermons = SERMONS.filter((sermon) => {
    const matchesSearch =
      sermon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sermon.series.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPreacher =
      selectedPreacher === "Tous" || sermon.preacher === selectedPreacher;
    return matchesSearch && matchesPreacher;
  });

  const handlePlayPause = (sermon) => {
    if (currentTrack?.id === sermon.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(sermon);
      setIsPlaying(true);
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen pb-20 transition-colors duration-300">
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#0c2448] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#48a848]/20 border border-[#48a848]/40 text-[#5cbd5c] text-xs font-semibold tracking-wider uppercase mb-4">
            Messages & Prédications
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Sermons Audio
          </h1>
          <p className="text-lg md:text-xl text-slate-350 max-w-2xl mx-auto leading-relaxed">
            Écoutez la Parole enseignée avec clarté. Grandissez à l'écoute des sermons inspirants d'Aletheia TRC.
          </p>
        </div>
      </section>

      {/* 2. RECHERCHE ET FILTRES */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          
          {/* Sélecteur de prédicateurs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <Filter className="w-4 h-4 text-slate-400 flex-shrink-0" />
            {PREACHERS.map((preacher) => (
              <button
                key={preacher}
                onClick={() => setSelectedPreacher(preacher)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap outline-none ${
                  selectedPreacher === preacher
                    ? "bg-[#0c2448] text-white shadow-sm"
                    : "bg-white dark:bg-slate-900 text-slate-650 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
                }`}>
                {preacher}
              </button>
            ))}
          </div>

          {/* Recherche */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher par titre ou série..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#48a848]/20 focus:border-[#48a848] text-slate-850 dark:text-white transition-all"
            />
          </div>
        </div>

        {/* 3. LISTE DES SERMONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSermons.length > 0 ? (
            filteredSermons.map((sermon) => {
              const isCurrent = currentTrack?.id === sermon.id;
              return (
                <div
                  key={sermon.id}
                  className={`bg-white dark:bg-slate-900 rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg ${
                    isCurrent
                      ? "border-[#48a848] dark:border-[#48a848] bg-slate-50/50 dark:bg-slate-850"
                      : "border-slate-200/80 dark:border-slate-800"
                  }`}>
                  <div>
                    {/* Header Sermon */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="space-y-1.5">
                        <span className="inline-block text-[10px] font-bold text-[#48a848] uppercase tracking-widest bg-[#48a848]/10 px-2.5 py-1 rounded-md">
                          Série : {sermon.series}
                        </span>
                        <h3 className="text-lg font-bold text-[#0c2448] dark:text-white leading-snug">
                          {sermon.title}
                        </h3>
                      </div>

                      <button
                        onClick={() => handlePlayPause(sermon)}
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                          isCurrent && isPlaying
                            ? "bg-[#48a848] text-white animate-pulse"
                            : "bg-[#0c2448]/5 dark:bg-white/5 text-[#0c2448] dark:text-white hover:bg-[#48a848] hover:text-white"
                        }`}>
                        {isCurrent && isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
                      </button>
                    </div>

                    {/* Metadata */}
                    <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-slate-100 dark:border-slate-800/80 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <User size={13} className="text-[#48a848]" />
                        <span className="truncate">{sermon.preacher}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-[#48a848]" />
                        <span className="truncate">{sermon.date.split(" ").slice(1).join(" ")}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={13} className="text-[#48a848]" />
                        <span>{sermon.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions / Download */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Disc size={12} className={isCurrent && isPlaying ? "animate-spin text-[#48a848]" : ""} />
                      {isCurrent && isPlaying ? "Lecture en cours..." : "Prêt à écouter"}
                    </span>
                    <a
                      href={sermon.fileUrl}
                      download
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs font-bold text-[#0c2448] dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-[#0c2448] hover:text-white hover:border-[#0c2448] transition-all">
                      <Download size={13} />
                      Télécharger
                    </a>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-850">
              <Search className="w-12 h-12 text-slate-350 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300">Aucun sermon trouvé</h3>
              <p className="text-sm text-slate-450 mt-1">Essayez d'ajuster votre recherche.</p>
            </div>
          )}
        </div>

        {/* 4. PLAYER AUDIO FLOTTANT (PERSISTANT SI TRACK ACTIVE) */}
        {currentTrack && (
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0c2448] text-white border-t border-[#48a848]/30 py-4 px-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="p-2.5 bg-[#48a848]/20 rounded-xl border border-[#48a848]/30 text-[#48a848]">
                <Disc className={`w-5 h-5 ${isPlaying ? "animate-spin" : ""}`} />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">{currentTrack.title}</h4>
                <p className="text-[10px] text-white/50 mt-0.5">{currentTrack.preacher} · {currentTrack.series}</p>
              </div>
            </div>

            {/* Controles simples */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 rounded-full bg-[#48a848] text-white flex items-center justify-center shadow-md hover:bg-[#3d913d] transition-all">
                {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
              </button>

              <span className="text-[11px] text-white/50">{isPlaying ? "0:12" : "0:00"} / {currentTrack.duration}</span>
            </div>

            {/* Volume */}
            <div className="hidden md:flex items-center gap-2 text-white/70">
              <Volume2 size={16} />
              <div className="w-20 h-1 bg-white/20 rounded-full relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 bg-[#48a848] w-4/5" />
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
