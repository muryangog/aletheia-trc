"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ photo, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 bg-[#071324]/95 z-50 flex items-center justify-center p-4"
      onClick={onClose}>
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 bg-[#12305a] hover:bg-[#294466] rounded-xl text-white transition-colors duration-200 outline-none z-60 cursor-pointer"
        aria-label="Fermer la galerie">
        <X size={24} />
      </button>

      {/* Prev Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 p-3 bg-[#12305a] hover:bg-[#294466] rounded-xl text-white transition-colors duration-200 outline-none z-60 cursor-pointer"
        aria-label="Précédente">
        <ChevronLeft size={24} />
      </button>

      <div
        className="w-full max-w-4xl max-h-[75vh] relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}>
        <Image
          src={photo.src}
          alt={photo.title}
          fill
          className="object-contain"
        />
      </div>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 p-3 bg-[#12305a] hover:bg-[#294466] rounded-xl text-white transition-colors duration-200 outline-none z-60 cursor-pointer"
        aria-label="Suivante">
        <ChevronRight size={24} />
      </button>

      {/* Caption info */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white space-y-1"
        onClick={(e) => e.stopPropagation()}>
        <span className="text-[10px] font-bold text-[#48a848] uppercase tracking-widest bg-[#48a848]/10 px-3 py-1 rounded-xl border border-[#48a848]/20">
          {photo.category}
        </span>
        <h4 className="font-bold text-lg mt-2">{photo.title}</h4>
        <p className="text-xs text-white/50">{photo.date}</p>
      </div>
    </div>
  );
}
