"use client";

import React, { useState } from "react";
import GalleryCard from "./GalleryCard";
import GalleryFilters from "./GalleryFilters";
import Lightbox from "./Lightbox";
import { galleryService } from "@/services/gallery.service";

export default function GalleryGrid() {
  const [selectedCat, setSelectedCat] = useState("Tous");
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const categories = galleryService.getCategories();
  const filteredPhotos = galleryService.getByCategory(selectedCat);

  const openLightbox = (idx) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);

  const handlePrev = () => {
    setLightboxIdx((prev) =>
      prev === 0 ? filteredPhotos.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setLightboxIdx((prev) =>
      prev === filteredPhotos.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div className="bg-(--color-background) text-(--color-foreground) min-h-screen pb-20 transition-colors duration-300">
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#0c2448] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] bg-size-[20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#48a848]/20 border border-[#48a848]/40 text-[#5cbd5c] text-xs font-semibold tracking-wider uppercase mb-4">
            Souvenirs & Images
          </span>
          <h1 className="type-page-title text-white mb-4">Galerie Photos</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Découvrez en images la vie de la communauté Aletheia TRC lors de nos
            cultes dominicaux et rassemblements.
          </p>
        </div>
      </section>

      {/* 2. GRILLE & FILTRES */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleryFilters
          categories={categories}
          selectedCategory={selectedCat}
          onSelectCategory={setSelectedCat}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <GalleryCard
              key={photo.id}
              photo={photo}
              onClick={() => openLightbox(index)}
            />
          ))}
        </div>

        {lightboxIdx !== null && (
          <Lightbox
            photo={filteredPhotos[lightboxIdx]}
            onClose={closeLightbox}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </section>
    </div>
  );
}
