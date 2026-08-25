"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Play,
  Pause,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize2,
  Tv,
  ListVideo,
  Sparkles,
  Radio,
} from "lucide-react";

// Convertit la durée ISO 8601 de YouTube (ex: PT1H2M10S) en secondes
function parseISO8601Duration(duration) {
  const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!match) return 300;
  const hours = parseInt(match[1] || 0, 10);
  const minutes = parseInt(match[2] || 0, 10);
  const seconds = parseInt(match[3] || 0, 10);
  return hours * 3600 + minutes * 60 + seconds;
}

export default function AletheiaTV() {
  const [playlist, setPlaylist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [player, setPlayer] = useState(null);

  // État pour gérer la présence d'un vrai live en direct
  const [isLiveActive, setIsLiveActive] = useState(false);
  const [liveVideo, setLiveVideo] = useState(null);

  const containerRef = useRef(null);
  const currentIdxRef = useRef(currentIdx);
  const playlistRef = useRef(playlist);

  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;
  const UPLOADS_PLAYLIST_ID = CHANNEL_ID ? CHANNEL_ID.replace(/^UC/, "UU") : "";

  useEffect(() => {
    currentIdxRef.current = currentIdx;
  }, [currentIdx]);

  useEffect(() => {
    playlistRef.current = playlist;
  }, [playlist]);

  // 1. Récupération complète (Pagination + Détection de Live)
  useEffect(() => {
    async function initTVData() {
      if (!API_KEY || !CHANNEL_ID) {
        setError("Clés API manquantes dans .env.local");
        setLoading(false);
        return;
      }

      try {
        // A. Vérifier s'il y a un DIRECT actif sur la chaîne
        const liveRes = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&type=video&eventType=live&part=snippet`,
        );
        const liveData = await liveRes.json();

        if (liveData.items && liveData.items.length > 0) {
          const liveItem = liveData.items[0];
          setIsLiveActive(true);
          setLiveVideo({
            id: liveItem.id.videoId,
            title: liveItem.snippet.title,
            speaker: "Aletheia TRC (EN DIRECT)",
          });
        } else {
          setIsLiveActive(false);
          setLiveVideo(null);
        }

        // B. Récupérer TOUTES les vidéos (Pagination avec nextPageToken)
        let allPlaylistItems = [];
        let nextPageToken = "";

        do {
          const playlistRes = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?key=${API_KEY}&playlistId=${UPLOADS_PLAYLIST_ID}&part=snippet,contentDetails&maxResults=50&pageToken=${nextPageToken}`,
          );
          if (!playlistRes.ok)
            throw new Error(`Erreur API Playlist: ${playlistRes.status}`);
          const playlistData = await playlistRes.json();

          if (playlistData.items) {
            allPlaylistItems = [...allPlaylistItems, ...playlistData.items];
          }

          nextPageToken = playlistData.nextPageToken || "";
        } while (nextPageToken); // Recommence tant qu'il y a des pages suivantes

        if (allPlaylistItems.length === 0) {
          setError("Aucune vidéo trouvée sur la chaîne.");
          setLoading(false);
          return;
        }

        // C. Récupérer les durées par lots (max 50 vidéos par requête d'IDs)
        const videoIds = allPlaylistItems
          .map(
            (item) =>
              item.snippet.resourceId?.videoId || item.contentDetails?.videoId,
          )
          .filter(Boolean);

        const durationMap = {};
        for (let i = 0; i < videoIds.length; i += 50) {
          const chunkIds = videoIds.slice(i, i + 50).join(",");
          const videosRes = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${chunkIds}&part=contentDetails`,
          );
          if (videosRes.ok) {
            const videosData = await videosRes.json();
            videosData.items?.forEach((v) => {
              durationMap[v.id] = parseISO8601Duration(
                v.contentDetails.duration,
              );
            });
          }
        }

        // D. Formater la liste complète
        const items = allPlaylistItems
          .filter(
            (item) =>
              item.snippet.title !== "Private video" &&
              item.snippet.title !== "Deleted video",
          )
          .map((item) => {
            const videoId =
              item.snippet.resourceId?.videoId || item.contentDetails?.videoId;
            const rawTitle = item.snippet.title
              .replace(/&#39;/g, "'")
              .replace(/&amp;/g, "&")
              .replace(/&quot;/g, '"');

            let speaker = "Aletheia TRC";
            if (rawTitle.includes("With ")) {
              speaker = rawTitle.split("With ")[1].trim();
            } else if (rawTitle.includes("|")) {
              const parts = rawTitle.split("|");
              speaker = parts[parts.length - 1].trim();
            }

            return {
              id: videoId,
              title: rawTitle,
              speaker,
              duration: durationMap[videoId] || 300,
              date: new Date(item.snippet.publishedAt).toLocaleDateString(
                "fr-FR",
                {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                },
              ),
              thumbnail:
                item.snippet.thumbnails?.medium?.url ||
                item.snippet.thumbnails?.default?.url,
            };
          });

        setPlaylist(items);
      } catch (err) {
        console.error("Erreur de chargement TV:", err);
        setError("Impossible de charger la chaîne TV.");
      } finally {
        setLoading(false);
      }
    }

    initTVData();

    // Optionnel : vérifier si un Live commence toutes les 3 minutes
    const interval = setInterval(() => {
      initTVData();
    }, 180000);

    return () => clearInterval(interval);
  }, [API_KEY, CHANNEL_ID, UPLOADS_PLAYLIST_ID]);

  // 2. Calcul du temps pour la TV 24/7
  const calculateLiveSync = (items) => {
    if (!items || items.length === 0) return { index: 0, startSeconds: 0 };

    const totalCycleDuration = items.reduce(
      (acc, item) => acc + item.duration,
      0,
    );
    if (totalCycleDuration === 0) return { index: 0, startSeconds: 0 };

    const currentGlobalTime = Math.floor(Date.now() / 1000);
    let offsetInCycle = currentGlobalTime % totalCycleDuration;

    for (let i = 0; i < items.length; i++) {
      if (offsetInCycle < items[i].duration) {
        return { index: i, startSeconds: offsetInCycle };
      }
      offsetInCycle -= items[i].duration;
    }

    return { index: 0, startSeconds: 0 };
  };

  // 3. Initialisation du lecteur vidéo (Priorité au Live si actif)
  useEffect(() => {
    if (playlist.length === 0 && !isLiveActive) return;

    // Si Live actif -> On utilise l'ID du live et démarrage à 0
    // Si pas de Live -> Calcul du temps d'antenne VOD
    const activeVideoId = isLiveActive
      ? liveVideo.id
      : playlist[currentIdx]?.id;

    const { index, startSeconds } = isLiveActive
      ? { index: 0, startSeconds: 0 }
      : calculateLiveSync(playlist);

    if (!isLiveActive) {
      setCurrentIdx(index);
    }

    const initPlayer = () => {
      if (player) {
        // Si le lecteur existe déjà, charger la vidéo en cours
        player.loadVideoById(
          activeVideoId,
          isLiveActive ? 0 : Math.floor(startSeconds),
        );
        return;
      }

      try {
        new window.YT.Player("youtube-tv-player", {
          height: "100%",
          width: "100%",
          videoId: activeVideoId,
          playerVars: {
            autoplay: 1,
            controls: 0,
            rel: 0,
            showinfo: 0,
            modestbranding: 1,
            iv_load_policy: 3,
            start: isLiveActive ? 0 : Math.floor(startSeconds),
          },
          events: {
            onReady: (event) => {
              setPlayer(event.target);
              event.target.playVideo();
              setIsPlaying(true);
            },
            onStateChange: (event) => {
              if (event.data === 0 && !isLiveActive) {
                handleNextAuto();
              } else if (event.data === 1) {
                setIsPlaying(true);
              } else if (event.data === 2) {
                setIsPlaying(false);
              }
            },
          },
        });
      } catch (e) {
        console.error("Erreur d'initialisation du lecteur TV", e);
      }
    };

    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        initPlayer();
      };
    } else {
      initPlayer();
    }
  }, [playlist, isLiveActive]);

  const handleNextAuto = () => {
    const currentList = playlistRef.current;
    const nextIdx = (currentIdxRef.current + 1) % currentList.length;
    setCurrentIdx(nextIdx);
    if (player && currentList[nextIdx]) {
      player.loadVideoById(currentList[nextIdx].id, 0);
      player.playVideo();
      setIsPlaying(true);
    }
  };

  const handlePlayPause = () => {
    if (!player) return;
    if (isPlaying) {
      player.pauseVideo();
      setIsPlaying(false);
    } else {
      player.playVideo();
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    if (playlist.length === 0 || isLiveActive) return;
    const nextIdx = (currentIdx + 1) % playlist.length;
    setCurrentIdx(nextIdx);
    if (player) {
      player.loadVideoById(playlist[nextIdx].id, 0);
      player.playVideo();
      setIsPlaying(true);
    }
  };

  const handleMuteToggle = () => {
    if (!player) return;
    if (isMuted) {
      player.unMute();
      setIsMuted(false);
    } else {
      player.mute();
      setIsMuted(true);
    }
  };

  const handleFullscreen = () => {
    if (containerRef.current) {
      if (containerRef.current.requestFullscreen) {
        containerRef.current.requestFullscreen();
      } else if (containerRef.current.webkitRequestFullscreen) {
        containerRef.current.webkitRequestFullscreen();
      }
    }
  };

  const handleSelectVideo = (idx) => {
    if (isLiveActive) return; // Désactivé si un Live est en cours
    setCurrentIdx(idx);
    if (player) {
      player.loadVideoById(playlist[idx].id, 0);
      player.playVideo();
      setIsPlaying(true);
    }
  };

  const currentVideo = isLiveActive ? liveVideo : playlist[currentIdx];

  return (
    <div className="bg-slate-950 text-white min-h-screen pb-16">
      {/* Header TV */}
      <section className="bg-slate-900 border-b border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#48a848] flex items-center justify-center shadow-lg shadow-[#48a848]/20 animate-pulse">
              <Tv className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">
                Aletheia TRC TV
              </h1>
              <p className="text-[10px] text-white/50">
                {isLiveActive
                  ? "Diffusion du Culte / Événement EN DIRECT"
                  : "Diffusion de prédications en continu 24h/7"}
              </p>
            </div>
          </div>

          {/* Badge statut (Live ou Programme 24/7) */}
          {isLiveActive ? (
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 border border-red-500 text-white text-[10px] font-bold tracking-widest uppercase animate-bounce">
              <Radio className="w-3.5 h-3.5 animate-pulse" />
              DIRECT EN COURS
            </span>
          ) : (
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-500 text-[10px] font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
              Différé 24/7
            </span>
          )}
        </div>
      </section>

      {/* Lecteur et Playlist */}
      <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-4">
          <div
            ref={containerRef}
            className="relative aspect-video w-full rounded-3xl overflow-hidden bg-black border border-white/10 shadow-2xl group">
            <div
              id="youtube-tv-player"
              className="w-full h-full pointer-events-none"
            />

            {player && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between z-10">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handlePlayPause}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all">
                    {isPlaying ? (
                      <Pause size={16} />
                    ) : (
                      <Play size={16} className="ml-0.5" />
                    )}
                  </button>
                  {!isLiveActive && (
                    <button
                      onClick={handleNext}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
                      title="Vidéo suivante">
                      <SkipForward size={16} />
                    </button>
                  )}
                  <button
                    onClick={handleMuteToggle}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all">
                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  </button>
                </div>
                <button
                  onClick={handleFullscreen}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all">
                  <Maximize2 size={16} />
                </button>
              </div>
            )}
          </div>

          <div className="bg-slate-900 border border-white/5 p-6 rounded-3xl space-y-2">
            <span
              className={`text-[10px] font-bold uppercase tracking-widest ${
                isLiveActive ? "text-red-500 animate-pulse" : "text-[#48a848]"
              }`}>
              {isLiveActive
                ? "🔴 En direct maintenant"
                : "En cours de diffusion"}
            </span>
            <h2 className="text-xl font-bold">
              {loading
                ? "Calcul du temps d'antenne..."
                : currentVideo?.title || "Prédication Aletheia TRC"}
            </h2>
            <p className="text-xs text-white/60">
              Orateur : {currentVideo?.speaker || "Aletheia TRC"}{" "}
              {currentVideo?.date && `· Publié le ${currentVideo.date}`}
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="bg-slate-900 border border-white/5 p-6 rounded-3xl space-y-4">
            <h3 className="text-base font-bold flex items-center gap-2 border-b border-white/5 pb-4">
              <ListVideo className="text-[#48a848]" size={18} />
              Programme Continu ({playlist.length} vidéos)
            </h3>

            {isLiveActive && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-2xl text-xs text-red-400 font-medium">
                Un direct est actuellement en cours. La playlist 24/7 reprendra
                automatiquement à la fin du direct.
              </div>
            )}

            {loading ? (
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-16 bg-white/5 rounded-2xl animate-pulse"
                  />
                ))}
              </div>
            ) : error ? (
              <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-2xl text-xs">
                {error}
              </div>
            ) : (
              <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
                {playlist.map((video, idx) => {
                  const isActive = !isLiveActive && currentIdx === idx;
                  return (
                    <div
                      key={video.id}
                      onClick={() => handleSelectVideo(idx)}
                      className={`p-3 rounded-2xl flex gap-3 items-center cursor-pointer transition-all border ${
                        isActive
                          ? "bg-[#48a848]/10 border-[#48a848] text-white"
                          : "bg-slate-950 border-white/5 text-white/70 hover:bg-slate-800"
                      } ${isLiveActive ? "opacity-40 cursor-not-allowed" : ""}`}>
                      <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                        {isActive && isPlaying ? (
                          <span className="w-2.5 h-2.5 bg-[#48a848] rounded-full animate-ping" />
                        ) : (
                          idx + 1
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-bold text-xs truncate leading-snug">
                          {video.title}
                        </h4>
                        <p className="text-[10px] text-white/40 mt-0.5">
                          {video.speaker}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="bg-gradient-to-br from-[#0c2448] to-slate-900 border border-white/5 p-6 rounded-3xl space-y-3">
            <Sparkles size={20} className="text-[#48a848]" />
            <h4 className="font-bold text-sm">Visitez notre chaîne YouTube</h4>
            <p className="text-[10px] text-white/60 leading-relaxed">
              Retrouvez l'intégralité de nos cultes, enseignements bibliques et
              moments de louange sur notre chaîne officielle.
            </p>
            <a
              href={`https://www.youtube.com/channel/${CHANNEL_ID || ""}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-[#48a848] text-white font-bold rounded-xl text-[10px] hover:bg-[#3d913d] transition-all mt-2 shadow-md">
              Ouvrir YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
