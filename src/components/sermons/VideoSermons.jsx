"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
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
  FilterX,
} from "lucide-react";
import { VIDEO_CATEGORIES } from "@/data/sermons.data";

const ITEMS_PER_PAGE = 12;

function SermonsVideoContent() {
  const searchParams = useSearchParams();

  // Extraction des paramètres transmis par SermonFilter (depuis le Hero)
  const urlTitle = searchParams.get("title") || "";
  const urlSpeaker = searchParams.get("speaker") || "";
  const urlDate = searchParams.get("date") || "";

  const [allVideos, setAllVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);

  // Recherche & Filtres locaux
  const [searchQuery, setSearchQuery] = useState(urlTitle);
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [activeVideoId, setActiveVideoId] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPageToken, setNextPageToken] = useState(null);

  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;
  const UPLOADS_PLAYLIST_ID = CHANNEL_ID ? CHANNEL_ID.replace(/^UC/, "UU") : "";

  useEffect(() => {
    if (urlTitle) setSearchQuery(urlTitle);
  }, [urlTitle]);

  const fetchPlaylistItems = async (pageToken = "") => {
    if (!API_KEY || !CHANNEL_ID) {
      setError("Clé API ou Channel ID manquant dans .env.local");
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

          let category = "Vidéos Uploadées";
          const titleLower = title.toLowerCase();

          if (
            titleLower.includes("sunday service") ||
            titleLower.includes("culte")
          ) {
            category = "Sunday Service";
          } else if (
            titleLower.includes("wednesday") ||
            titleLower.includes("mercredi")
          ) {
            category = "Wednesday Fellowship";
          }

          let preacher = "Aletheia TRC";
          if (title.includes("With ")) {
            preacher = title.split("With ")[1].trim();
          } else if (title.includes("|")) {
            const parts = title.split("|");
            preacher = parts[parts.length - 1].trim();
          }

          const rawPublishedDate = item.snippet.publishedAt;
          const isoDate = rawPublishedDate
            ? rawPublishedDate.split("T")[0]
            : "";

          const videoId =
            item.snippet.resourceId?.videoId || item.contentDetails?.videoId;

          return {
            id: videoId,
            youtubeId: videoId,
            title,
            preacher,
            category,
            rawDate: isoDate,
            date: new Date(rawPublishedDate).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }),
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
      console.error("Erreur chargement de la playlist YouTube:", err);
      setError("Impossible de charger les vidéos YouTube pour le moment.");
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

  const filteredVideos = allVideos.filter((video) => {
    if (video.title === "Private video" || video.title === "Deleted video")
      return false;

    const matchesSearch =
      !searchQuery ||
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.preacher.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSpeaker =
      !urlSpeaker ||
      video.preacher.toLowerCase().includes(urlSpeaker.toLowerCase()) ||
      video.title.toLowerCase().includes(urlSpeaker.toLowerCase());

    const matchesDate = !urlDate || video.rawDate === urlDate;

    let matchesCategory = true;
    if (selectedCategory === "Vidéos Uploadées") {
      matchesCategory = video.category === "Vidéos Uploadées";
    } else if (selectedCategory !== "Tous") {
      matchesCategory = video.category === selectedCategory;
    }

    return matchesSearch && matchesSpeaker && matchesDate && matchesCategory;
  });

  const totalPages = Math.ceil(filteredVideos.length / ITEMS_PER_PAGE) || 1;
  const paginatedVideos = filteredVideos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const hasActiveUrlFilters = urlTitle || urlSpeaker || urlDate;

  return (
    <div className="bg-(--color-background) text-(--color-foreground) min-h-screen pb-20 transition-colors duration-300">
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#0c2448] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] bg-size-[20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-[#48a848]/20 border border-[#48a848]/40 text-[#5cbd5c] text-xs font-semibold tracking-wider uppercase mb-4">
            Médiathèque Vidéo
          </span>
          <h1 className="type-page-title text-white mb-4">
            Toutes les Vidéos YouTube
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Accédez à l'ensemble du catalogue de nos messages, prédications et
            vidéos archivées.
          </p>
        </div>
      </section>

      {/* 2. BARRE DE RECHERCHE ET FILTRES */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {hasActiveUrlFilters && (
          <div className="mb-6 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-wrap items-center justify-between gap-3 text-xs transition-colors duration-200">
            <div className="flex items-center flex-wrap gap-2">
              <span className="font-bold text-slate-500">Résultats pour :</span>
              {urlTitle && (
                <span className="bg-[#48a848]/10 text-[#48a848] border border-[#48a848]/20 px-3 py-1 rounded-xl font-medium">
                  Titre : "{urlTitle}"
                </span>
              )}
              {urlSpeaker && (
                <span className="bg-[#48a848]/10 text-[#48a848] border border-[#48a848]/20 px-3 py-1 rounded-xl font-medium">
                  Prédicateur : "{urlSpeaker}"
                </span>
              )}
              {urlDate && (
                <span className="bg-[#48a848]/10 text-[#48a848] border border-[#48a848]/20 px-3 py-1 rounded-xl font-medium">
                  Date : {urlDate}
                </span>
              )}
            </div>
            <Link
              href="/sermons/videos"
              className="flex items-center gap-1 text-red-500 hover:underline font-semibold">
              <FilterX size={14} /> Réinitialiser les filtres
            </Link>
          </div>
        )}

        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <Video className="w-4 h-4 text-slate-400 shrink-0" />
            {VIDEO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors duration-200 whitespace-nowrap outline-none ${
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
              placeholder="Rechercher une vidéo, un prédicateur..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#48a848]/20 focus:border-[#48a848] text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-colors duration-200"
            />
          </div>
        </div>

        {/* 3. GRILLE DES VIDÉOS */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="bg-white dark:bg-slate-900 rounded-2xl h-80 animate-pulse border border-slate-200 dark:border-slate-800"
              />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-12 bg-red-50 dark:bg-red-950/20 text-red-600 rounded-2xl border border-red-200 dark:border-red-900">
            <p className="text-sm font-semibold">{error}</p>
          </div>
        ) : paginatedVideos.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedVideos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => setActiveVideoId(video.youtubeId)}
                  className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group cursor-pointer">
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

                    <div className="absolute top-3 left-3 bg-[#0c2448] text-white text-[10px] font-bold px-2.5 py-1 rounded-xl z-20 shadow-sm">
                      {video.category}
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center z-25">
                      <div className="w-14 h-14 rounded-full bg-[#48a848] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play size={20} className="fill-white ml-1" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug line-clamp-2 group-hover:text-[#48a848] transition-colors">
                      {video.title}
                    </h3>

                    <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
                      <span className="flex items-center gap-1 font-medium truncate max-w-45">
                        <User size={13} className="text-[#48a848] shrink-0" />
                        {video.preacher}
                      </span>
                      <span className="flex items-center gap-1 shrink-0">
                        <Calendar size={13} className="text-[#48a848]" />
                        {video.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 4. CONTROLES DE PAGINATION */}
            <div className="mt-12 flex flex-col items-center gap-6">
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 shadow-sm">
                  <ChevronLeft size={18} />
                </button>

                <span className="text-xs font-bold text-slate-700 dark:text-slate-300 px-3.5 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl">
                  Page {currentPage} sur {totalPages}
                </span>

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 shadow-sm">
                  <ChevronRight size={18} />
                </button>
              </div>

              {nextPageToken && (
                <button
                  onClick={handleFetchMoreFromYouTube}
                  disabled={loadingMore}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0c2448] hover:bg-[#143260] text-white font-bold text-xs shadow-sm hover:shadow-md transition-all">
                  {loadingMore ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Chargement des vidéos plus anciennes...
                    </>
                  ) : (
                    "Charger plus de vidéos de la chaîne (+50)"
                  )}
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 transition-colors duration-200">
            <Video className="w-12 h-12 text-slate-400 dark:text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
              Aucune vidéo trouvée
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 mb-4">
              Ajustez votre recherche ou réinitialisez vos filtres.
            </p>
            {hasActiveUrlFilters && (
              <Link
                href="/sermons/videos"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#48a848] hover:bg-[#3a8a3a] text-white text-xs font-bold shadow-sm transition-colors duration-200">
                Réinitialiser la recherche
              </Link>
            )}
          </div>
        )}
      </section>

      {activeVideoId && (
        <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setActiveVideoId(null)}
            className="absolute top-6 right-6 p-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-300 hover:text-white transition-colors duration-200 outline-none"
            aria-label="Fermer la vidéo">
            <X size={24} />
          </button>

          <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl relative border border-slate-800">
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

export default function VideoSermons() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-[#48a848]" />
        </div>
      }>
      <SermonsVideoContent />
    </Suspense>
  );
}
