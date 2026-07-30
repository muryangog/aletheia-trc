"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Search, Play, X, Calendar, User, Video, Clock } from "lucide-react";

// Prédications vidéos de Aletheia TRC sur YouTube
const VIDEOS = [
  {
    id: 1,
    title: "Vivre dans la Plénitude de la Grâce",
    preacher: "Pasteur Principal",
    youtubeId: "dQw4w9WgXcQ", // À remplacer par les vrais IDs de leur chaîne
    date: "26 Juillet 2026",
    duration: "48:15",
    category: "Culte Dominical",
  },
  {
    id: 2,
    title: "Révélation de la Vérité (Aletheia)",
    preacher: "Co-Pasteur",
    youtubeId: "dQw4w9WgXcQ",
    date: "19 Juillet 2026",
    duration: "55:40",
    category: "Séminaire",
  },
  {
    id: 3,
    title: "Bâtir sa Vie sur le Roc",
    preacher: "Pasteur Principal",
    youtubeId: "dQw4w9WgXcQ",
    date: "12 Juillet 2026",
    duration: "42:10",
    category: "Enseignement",
  },
  {
    id: 4,
    title: "Le Saint-Esprit notre Guide",
    preacher: "Co-Pasteur",
    youtubeId: "dQw4w9WgXcQ",
    date: "05 Juillet 2026",
    duration: "39:55",
    category: "Culte Dominical",
  },
];

const CATEGORIES = ["Tous", "Culte Dominical", "Séminaire", "Enseignement"];

export default function SermonsVideo() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [activeVideoId, setActiveVideoId] = useState(null);

  // Filtrage des vidéos
  const filteredVideos = VIDEOS.filter((video) => {
    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.preacher.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "Tous" || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen pb-20 transition-colors duration-300">
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#0c2448] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#48a848]/20 border border-[#48a848]/40 text-[#5cbd5c] text-xs font-semibold tracking-wider uppercase mb-4">
            Galerie Vidéo
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Sermons Vidéo
          </h1>
          <p className="text-lg md:text-xl text-slate-350 max-w-2xl mx-auto leading-relaxed">
            Regardez les derniers cultes et séminaires d'Aletheia TRC directement diffusés depuis notre chaîne YouTube.
          </p>
        </div>
      </section>

      {/* 2. BARRE DE RECHERCHE ET FILTRES */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Catégories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <Video className="w-4 h-4 text-slate-400 flex-shrink-0" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap outline-none ${
                  selectedCategory === cat
                    ? "bg-[#0c2448] text-white shadow-sm"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
                }`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Recherche */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher une vidéo, un prédicateur..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#48a848]/20 focus:border-[#48a848] text-slate-850 dark:text-white transition-all"
            />
          </div>
        </div>

        {/* 3. GRILLE DES VIDÉOS */}
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => setActiveVideoId(video.youtubeId)}
                className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer">
                
                {/* Miniature Youtube */}
                <div className="relative h-48 bg-slate-900 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 z-10 transition-colors" />
                  <Image
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0c2448] text-white text-[10px] font-bold px-2.5 py-1 rounded-md z-20 shadow-sm">
                    {video.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded z-20 flex items-center gap-1">
                    <Clock size={10} />
                    {video.duration}
                  </div>

                  {/* Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center z-25">
                    <div className="w-14 h-14 rounded-full bg-[#48a848] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play size={20} className="fill-white ml-1" />
                    </div>
                  </div>
                </div>

                {/* Contenu de la Carte */}
                <div className="p-6 space-y-4">
                  <h3 className="text-base md:text-lg font-bold text-[#0c2448] dark:text-white leading-snug line-clamp-2 group-hover:text-[#48a848] transition-colors">
                    {video.title}
                  </h3>

                  <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100 dark:border-slate-800/85">
                    <span className="flex items-center gap-1">
                      <User size={13} className="text-[#48a848]" />
                      {video.preacher}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={13} className="text-[#48a848]" />
                      {video.date}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-850">
            <Video className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300">Aucune vidéo trouvée</h3>
            <p className="text-sm text-slate-450 mt-1">Veuillez ajuster vos filtres de recherche.</p>
          </div>
        )}
      </section>

      {/* 4. MODAL/LIGHTBOX D'INTEGRATION VIDEO */}
      {activeVideoId && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <button
            onClick={() => setActiveVideoId(null)}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors outline-none"
            aria-label="Fermer la vidéo">
            <X size={24} />
          </button>
          
          <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl relative">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              title="Lecteur YouTube Aletheia TRC"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
