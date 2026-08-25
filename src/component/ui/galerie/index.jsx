"use client";
import React, { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, Calendar, ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";

const PHOTOS = [
  { id: 1, src: "/1.jpg", title: "Culte de Célébration", category: "Cultes", date: "Dimanche 26 Juillet 2026" },
  { id: 2, src: "/2.jpg", title: "Temps d'Adoration Passionnée", category: "Louange", date: "Dimanche 19 Juillet 2026" },
  { id: 3, src: "/3.jpg", title: "Communion Fraternelle", category: "Communauté", date: "Dimanche 12 Juillet 2026" },
  { id: 4, src: "/4.jpg", title: "Ministère des Enfants (Écodim)", category: "Enfants", date: "Dimanche 05 Juillet 2026" },
  { id: 5, src: "/6.jpg", title: "Accueil et Service d'Ordre", category: "Communauté", date: "Dimanche 28 Juin 2026" },
  { id: 6, src: "/7.jpg", title: "Séminaire d'Enseignement Biblique", category: "Cultes", date: "Vendredi 19 Juin 2026" },
  { id: 7, src: "/8.jpg", title: "Soirée Jeunesse et Impact", category: "Jeunesse", date: "Samedi 13 Juin 2026" },
  { id: 8, src: "/9.jpg", title: "Moment d'Intercession et Prière", category: "Cultes", date: "Dimanche 07 Juin 2026" },
];

const CATEGORIES = ["Tous", "Cultes", "Louange", "Communauté", "Enfants", "Jeunesse"];

export default function GaleriePhotos() {
  const [selectedCat, setSelectedCat] = useState("Tous");
  const [lightboxIdx, setLightboxIdx] = useState(null);

  // Filtrer les photos
  const filteredPhotos = PHOTOS.filter((p) => {
    return selectedCat === "Tous" || p.category === selectedCat;
  });

  const openLightbox = (idx) => {
    setLightboxIdx(idx);
  };

  const closeLightbox = () => {
    setLightboxIdx(null);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIdx((prev) => (prev === 0 ? filteredPhotos.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIdx((prev) => (prev === filteredPhotos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen pb-20 transition-colors duration-300">
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#0c2448] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#48a848]/20 border border-[#48a848]/40 text-[#5cbd5c] text-xs font-semibold tracking-wider uppercase mb-4">
            Souvenirs & Images
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 animate-fade-in">
            Galerie Photos
          </h1>
          <p className="text-lg md:text-xl text-slate-350 max-w-2xl mx-auto leading-relaxed">
            Découvrez en images la vie de la communauté Aletheia TRC lors de nos cultes dominicaux et rassemblements.
          </p>
        </div>
      </section>

      {/* 2. CATEGORIES FILTER */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-slate-200 dark:border-slate-800 scrollbar-none mb-10">
          <ImageIcon className="w-4 h-4 text-slate-400 flex-shrink-0 mr-1" />
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap outline-none ${
                selectedCat === cat
                  ? "bg-[#0c2448] text-white shadow-sm"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* 3. PHOTOS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
              
              {/* Image Container */}
              <div className="relative h-56 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  <div className="p-3 bg-white/25 backdrop-blur-md rounded-full text-white">
                    <ZoomIn size={18} />
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-[#0c2448] text-white text-[9px] font-bold px-2.5 py-1 rounded-md z-15 shadow-sm">
                  {photo.category}
                </div>
              </div>

              {/* Text info */}
              <div className="p-5 space-y-2">
                <h3 className="text-sm font-bold text-[#0c2448] dark:text-white leading-tight truncate">
                  {photo.title}
                </h3>
                <div className="flex items-center gap-1.5 text-[10px] text-slate-450 dark:text-slate-400">
                  <Calendar size={11} className="text-[#48a848]" />
                  <span>{photo.date}</span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 4. LIGHTBOX MODAL */}
      {lightboxIdx !== null && (
        <div className="fixed inset-0 bg-black/95 z-55 flex items-center justify-center p-4 backdrop-blur-md">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors outline-none z-60"
            aria-label="Fermer la galerie">
            <X size={24} />
          </button>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors outline-none z-60"
            aria-label="Précédente">
            <ChevronLeft size={24} />
          </button>

          {/* Image Container */}
          <div className="w-full max-w-4xl max-h-[75vh] relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl flex items-center justify-center">
            <Image
              src={filteredPhotos[lightboxIdx].src}
              alt={filteredPhotos[lightboxIdx].title}
              fill
              className="object-contain"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors outline-none z-60"
            aria-label="Suivante">
            <ChevronRight size={24} />
          </button>

          {/* Caption info under lightbox */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white space-y-1">
            <span className="text-[10px] font-bold text-[#48a848] uppercase tracking-widest bg-[#48a848]/10 px-3 py-1 rounded-full border border-[#48a848]/20">
              {filteredPhotos[lightboxIdx].category}
            </span>
            <h4 className="font-bold text-lg mt-2">{filteredPhotos[lightboxIdx].title}</h4>
            <p className="text-xs text-white/50">{filteredPhotos[lightboxIdx].date}</p>
          </div>
        </div>
      )}
    </div>
  );
}
