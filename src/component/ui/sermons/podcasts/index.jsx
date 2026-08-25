"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Search,
  Play,
  X,
  Calendar,
  User,
  Video,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Tv,
} from "lucide-react";

const CATEGORIES = [
  "Tous",
  "Revive Me Lord",
  "Pleroma Teachings",
  "Vidéos Uploadées",
];

const ITEMS_PER_PAGE = 12;

export default function PodcastsVideo() {
  const [allVideos, setAllVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);

  // Recherche & Filtres
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [activeVideoId, setActiveVideoId] = useState(null);

  // Pagination locale & API
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPageToken, setNextPageToken] = useState(null);

  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  // Identifiant de la chaîne de Evrard Sinagaye
  const CHANNEL_ID =
    process.env.NEXT_PUBLIC_YOUTUBE_SINAGAYE_CHANNEL_ID ||
    process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

  // Conversion du Channel ID (UC...) en Playlist Uploads (UU...)
  const UPLOADS_PLAYLIST_ID = CHANNEL_ID ? CHANNEL_ID.replace(/^UC/, "UU") : "";

  // Fonction de récupération des vidéos depuis la chaîne YouTube de Pr Evrard Sinagaye
  const fetchPlaylistItems = async (pageToken = "") => {
    if (!API_KEY || !CHANNEL_ID) {
      setError(
        "Clé API ou ID de la chaîne Evrard Sinagaye manquant dans .env.local",
      );
      setLoading(false);
      return;
    }

    try {
      let url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=${UPLOADS_PLAYLIST_ID}&part=snippet,contentDetails&maxResults=50`;

      if (pageToken) {
        url += `&pageToken=${pageToken}`;
      }

      const res = await fetch(url);
      if (!res.ok) throw new Error(`Erreur API: ${res.status}`);

      const data = await res.json();

      if (data.items) {
        const formatted = data.items.map((item) => {
          const title = item.snippet.title
            .replace(/&#39;/g, "'")
            .replace(/&amp;/g, "&");

          // Catégorisation personnalisée basée sur les mots-clés du titre
          let category = "Vidéos Uploadées";
          const titleLower = title.toLowerCase();

          if (titleLower.includes("revive") || titleLower.includes("réveil")) {
            category = "Revive Me Lord";
          } else if (
            titleLower.includes("pleroma") ||
            titleLower.includes("enseignement")
          ) {
            category = "Pleroma Teachings";
          }

          // Prédicateur / Intervenant
          let preacher = "Pr Evrard Sinagaye";
          if (title.includes("With ")) {
            preacher = title.split("With ")[1].trim();
          } else if (title.includes("|")) {
            const parts = title.split("|");
            preacher = parts[parts.length - 1].trim();
          }

          const videoId =
            item.snippet.resourceId?.videoId || item.contentDetails?.videoId;

          return {
            id: videoId,
            youtubeId: videoId,
            title,
            preacher,
            category,
            date: new Date(item.snippet.publishedAt).toLocaleDateString(
              "fr-FR",
              {
                day: "numeric",
                month: "long",
                year: "numeric",
              },
            ),
            thumbnail:
              item.snippet.thumbnails?.high?.url ||
              item.snippet.thumbnails?.medium?.url ||
              item.snippet.thumbnails?.default?.url,
          };
        });

        setAllVideos((prev) =>
          pageToken ? [...prev, ...formatted] : formatted,
        );
        setNextPageToken(data.nextPageToken || null);
      }
    } catch (err) {
      console.error("Erreur chargement YouTube (Chaîne Evrard Sinagaye):", err);
      setError("Impossible de charger les podcasts vidéo pour le moment.");
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchPlaylistItems();
  }, [API_KEY, CHANNEL_ID]);

  const handleFetchMoreFromYouTube = () => {
    if (nextPageToken && !loadingMore) {
      setLoadingMore(true);
      fetchPlaylistItems(nextPageToken);
    }
  };

  // Filtrage local
  const filteredVideos = allVideos.filter((video) => {
    if (video.title === "Private video" || video.title === "Deleted video")
      return false;

    const matchesSearch =
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.preacher.toLowerCase().includes(searchQuery.toLowerCase());

    let matchesCategory = true;
    if (selectedCategory === "Vidéos Uploadées") {
      matchesCategory = video.category === "Vidéos Uploadées";
    } else if (selectedCategory !== "Tous") {
      matchesCategory = video.category === selectedCategory;
    }

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredVideos.length / ITEMS_PER_PAGE) || 1;
  const paginatedVideos = filteredVideos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen pb-20 transition-colors duration-300">
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#0c2448] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#FF0000]/20 border border-[#FF0000]/40 text-red-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <Tv className="w-3.5 h-3.5" /> Podcasts Vidéo
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Chaîne Officielle Pr Evrard Sinagaye
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Retrouvez tous les podcasts, séries vidéo et enseignements exclusifs
            du Pr Evrard Sinagaye.
          </p>
        </div>
      </section>

      {/* 2. BARRE DE RECHERCHE ET FILTRES */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <Video className="w-4 h-4 text-slate-400 flex-shrink-0" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap outline-none ${
                  selectedCategory === cat
                    ? "bg-[#0c2448] text-white shadow-sm"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
                }`}>
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher un podcast, un thème..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#48a848]/20 focus:border-[#48a848] text-slate-800 dark:text-white transition-all"
            />
          </div>
        </div>

        {/* 3. GRILLE DES VIDÉOS / PODCASTS */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="bg-white dark:bg-slate-900 rounded-3xl h-80 animate-pulse border border-slate-200 dark:border-slate-800"
              />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12 bg-red-50 dark:bg-red-950/20 text-red-600 rounded-3xl border border-red-200 dark:border-red-900">
            <p className="text-sm font-semibold">{error}</p>
          </div>
        ) : paginatedVideos.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedVideos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setActiveVideoId(video.youtubeId)}
                  className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer">
                  {/* Miniature Youtube */}
                  <div className="relative h-48 bg-slate-900 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 z-10 transition-colors" />

                    {video.thumbnail && (
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}

                    <div className="absolute top-3 left-3 bg-[#0c2448] text-white text-[10px] font-bold px-2.5 py-1 rounded-md z-20 shadow-sm">
                      {video.category}
                    </div>

                    {/* Play Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-25">
                      <div className="w-14 h-14 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play size={20} className="fill-white ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Contenu de la Carte */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-base md:text-lg font-bold text-[#0c2448] dark:text-white leading-snug line-clamp-2 group-hover:text-[#48a848] transition-colors">
                      {video.title}
                    </h3>

                    <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100 dark:border-slate-800">
                      <span className="flex items-center gap-1 font-medium truncate max-w-[180px]">
                        <User
                          size={13}
                          className="text-[#48a848] flex-shrink-0"
                        />
                        {video.preacher}
                      </span>
                      <span className="flex items-center gap-1 flex-shrink-0">
                        <Calendar size={13} className="text-[#48a848]" />
                        {video.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 4. CONTROLES DE PAGINATION & CHARGEMENT EN MASSE */}
            <div className="mt-12 flex flex-col items-center gap-6">
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="p-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shadow-sm">
                  <ChevronLeft size={18} />
                </button>

                <span className="text-xs font-bold text-slate-600 dark:text-slate-400 px-3 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full">
                  Page {currentPage} sur {totalPages}
                </span>

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="p-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shadow-sm">
                  <ChevronRight size={18} />
                </button>
              </div>

              {nextPageToken && (
                <button
                  onClick={handleFetchMoreFromYouTube}
                  disabled={loadingMore}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0c2448] hover:bg-[#143260] text-white font-bold text-xs shadow-md transition-all">
                  {loadingMore ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Chargement des podcasts plus anciens...
                    </>
                  ) : (
                    "Charger plus de podcasts (+50)"
                  )}
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
            <Video className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300">
              Aucun podcast trouvé
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Ajustez votre recherche ou changez de filtre.
            </p>
          </div>
        )}
      </section>

      {/* 5. LIGHTBOX LECTEUR VIDÉO */}
      {activeVideoId && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <button
            onClick={() => setActiveVideoId(null)}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors outline-none"
            aria-label="Fermer le podcast">
            <X size={24} />
          </button>

          <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl relative">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              title="Lecteur YouTube Pr Evrard Sinagaye"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
