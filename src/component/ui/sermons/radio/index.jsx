"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Play,
  Pause,
  Volume2,
  Disc,
  Radio,
  Clock,
  Sparkles,
  Music,
  Share2,
  Tv,
  ListMusic,
  Tv2,
} from "lucide-react";

const CHANNELS = [
  {
    id: "teaching",
    name: "Radio Enseignements",
    status: "En direct",
    active: true,
    description: "La Parole de Vérité dispensée par nos pasteurs 24h/7.",
  },
  {
    id: "worship",
    name: "Aletheia Louange",
    status: "Projet en cours",
    active: false,
    description: "Flux continu d'adoration, louange et chants inspirés (Bientôt).",
  },
  {
    id: "youth",
    name: "Radio Jeunesse",
    status: "Projet en cours",
    active: false,
    description: "Émissions spéciales, débats et musique chrétienne urbaine (Bientôt).",
  },
];

const PLAYLIST = [
  {
    id: 1,
    title: "Le Combat de la Foi",
    preacher: "Prophet Evrard SINAGAYE",
    duration: "45:12",
    fileUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: 2,
    title: "La Puissance de la Vérité",
    preacher: "Prophet Evrard SINAGAYE",
    duration: "52:30",
    fileUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: 3,
    title: "Vaincre la peur par l'amour",
    preacher: "Pastor Eric BIMENYIMANA",
    duration: "38:45",
    fileUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    id: 4,
    title: "Le Pardon Divin et Restauration",
    preacher: "Apostle Divin NDUWUMWAMI",
    duration: "41:20",
    fileUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
];

export default function AletheiaRadio() {
  const [selectedChannel, setSelectedChannel] = useState("teaching");
  const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef(null);
  const activeTrack = PLAYLIST[currentTrackIdx];

  // Effet pour gérer la lecture
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.log("Lecture bloquée par le navigateur:", err);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrackIdx]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTrackSelect = (idx) => {
    setCurrentTrackIdx(idx);
    setIsPlaying(true);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pb-20 transition-colors duration-300 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#48a848]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#0c2448]/40 rounded-full blur-3xl pointer-events-none" />

      {/* 1. HERO BANNER */}
      <section className="relative bg-[#0c2448] text-white py-16 lg:py-20 overflow-hidden border-b border-[#48a848]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#48a848]/20 border border-[#48a848]/40 text-[#5cbd5c] text-xs font-semibold tracking-wider uppercase mb-4">
            Aletheia Media Center
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 flex items-center justify-center gap-3">
            <Radio className="w-8 h-8 text-[#48a848] animate-pulse" />
            Aletheia Radio
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Écoutez nos enseignements inspirants, nos cultes passés et découvrez nos futurs projets de radio en ligne.
          </p>
        </div>
      </section>

      {/* 2. PLAYER & CHANNELS */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Lecteur de Radio Principal */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900/80 backdrop-blur-xl border border-white/5 p-8 rounded-[2.5rem] shadow-2xl flex flex-col justify-between aspect-video md:aspect-[21/9] lg:aspect-auto min-h-[350px]">
              
              {/* Entête du Player */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                    Live - Enseignements
                  </span>
                </div>
                <div className="text-[11px] text-white/40 flex items-center gap-1.5">
                  <Clock size={12} />
                  <span>24/7 Stream</span>
                </div>
              </div>

              {/* Contenu Radio Courante */}
              <div className="my-8 flex flex-col md:flex-row items-center gap-6">
                {/* Visualizer / Vinyl */}
                <div className="relative w-28 h-28 bg-[#0c2448] rounded-full border-4 border-white/5 shadow-inner flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <Disc className={`w-16 h-16 text-[#48a848]/60 ${isPlaying ? "animate-spin" : ""}`} />
                  <div className="absolute inset-0 border-2 border-white/10 rounded-full" />
                </div>

                {/* Titre & Prédicateur */}
                <div className="text-center md:text-left space-y-2 flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                    {activeTrack.title}
                  </h3>
                  <p className="text-sm text-[#48a848] font-semibold">{activeTrack.preacher}</p>
                  <p className="text-xs text-white/40">Station : Aletheia Radio - Canal Enseignements</p>
                </div>
              </div>

              {/* Ondes Audio / Visualizer de rechange en CSS */}
              {isPlaying && (
                <div className="flex items-end justify-center gap-1 h-8 mb-4">
                  {[...Array(15)].map((_, i) => (
                    <span
                      key={i}
                      className="w-1 bg-[#48a848] rounded-full animate-bounce"
                      style={{
                        animationDuration: `${0.5 + Math.random() * 0.8}s`,
                        animationDelay: `${i * 0.05}s`,
                        height: `${20 + Math.random() * 80}%`,
                      }}
                    />
                  ))}
                </div>
              )}

              {/* Contrôles du Lecteur */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                {/* Élément Audio HTML5 caché */}
                <audio
                  ref={audioRef}
                  src={activeTrack.fileUrl}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={() => {
                    // Aller à la piste suivante en boucle
                    setCurrentTrackIdx((prev) => (prev + 1) % PLAYLIST.length);
                  }}
                />

                {/* Barre de Progression */}
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-white/40">{formatTime(currentTime)}</span>
                  <input
                    type="range"
                    min="0"
                    max={duration || 100}
                    value={currentTime}
                    onChange={handleSeek}
                    className="flex-1 h-1 bg-white/10 rounded-full appearance-none outline-none accent-[#48a848] cursor-pointer"
                  />
                  <span className="text-[11px] text-white/40">{formatTime(duration)}</span>
                </div>

                {/* Boutons d'Action & Volume */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handlePlayPause}
                      className="w-12 h-12 rounded-full bg-[#48a848] hover:bg-[#3d913d] text-white flex items-center justify-center shadow-lg transition-all hover:scale-105">
                      {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
                    </button>
                    <span className="text-xs text-white/60">
                      {isPlaying ? "Lecture en cours..." : "Pause"}
                    </span>
                  </div>

                  {/* Contrôle du Volume */}
                  <div className="flex items-center gap-2">
                    <Volume2 size={16} className="text-white/60" />
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={(e) => setVolume(parseFloat(e.target.value))}
                      className="w-20 h-1 bg-white/10 rounded-full appearance-none outline-none accent-[#48a848] cursor-pointer"
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Liste des enseignements de la Radio */}
            <div className="bg-slate-900/50 border border-white/5 p-6 rounded-[2rem] space-y-4">
              <h3 className="text-md font-bold text-white flex items-center gap-2">
                <ListMusic size={16} className="text-[#48a848]" />
                Enseignements disponibles à l'écoute
              </h3>
              <div className="divide-y divide-white/5">
                {PLAYLIST.map((track, idx) => {
                  const isActive = idx === currentTrackIdx;
                  return (
                    <div
                      key={track.id}
                      onClick={() => handleTrackSelect(idx)}
                      className={`flex items-center justify-between py-3.5 px-3 rounded-xl cursor-pointer transition-all ${
                        isActive
                          ? "bg-white/5 border border-white/5 text-[#48a848]"
                          : "hover:bg-white/5 text-slate-350 hover:text-white"
                      }`}>
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-slate-800 border border-white/5 flex items-center justify-center text-xs">
                          {isActive && isPlaying ? (
                            <span className="w-1.5 h-1.5 bg-[#48a848] rounded-full animate-ping" />
                          ) : (
                            idx + 1
                          )}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold leading-snug">{track.title}</h4>
                          <p className="text-[11px] text-white/40 mt-0.5">{track.preacher}</p>
                        </div>
                      </div>
                      <span className="text-[11px] text-white/40 font-medium">{track.duration}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Projets de Station (Chaînes) */}
          <div className="space-y-6">
            <div className="bg-slate-900/80 border border-white/5 p-6 rounded-[2rem] space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Nos Projets Radio</h3>
                <p className="text-xs text-white/40">
                  Découvrez et soutenez l'ouverture de nos différents canaux d'émissions.
                </p>
              </div>

              <div className="space-y-4">
                {CHANNELS.map((chan) => (
                  <div
                    key={chan.id}
                    className={`p-4 rounded-2xl border transition-all ${
                      chan.active
                        ? "bg-[#0c2448]/30 border-[#48a848]/30"
                        : "bg-slate-950/40 border-white/5 opacity-60"
                    }`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-sm text-white">{chan.name}</span>
                      <span
                        className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          chan.active
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                            : "bg-white/5 text-white/40 border border-white/10"
                        }`}>
                        {chan.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{chan.description}</p>
                  </div>
                ))}
              </div>

              {/* Appel au don pour la radio */}
              <div className="bg-gradient-to-br from-[#0c2448]/80 to-[#12305a]/80 p-5 rounded-2xl border border-white/5 text-center space-y-3">
                <Sparkles size={24} className="text-[#48a848] mx-auto animate-pulse" />
                <h4 className="font-bold text-sm text-white">Soutenir le Projet Radio</h4>
                <p className="text-[11px] text-slate-350 leading-relaxed">
                  Aidez-nous à acquérir de nouveaux serveurs et équipements de diffusion pour propager l'Évangile.
                </p>
                <a
                  href="/don"
                  className="inline-block w-full py-2 bg-[#48a848] hover:bg-[#3d913d] text-white text-xs font-bold rounded-xl transition-all shadow-md">
                  Faire un Don
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
