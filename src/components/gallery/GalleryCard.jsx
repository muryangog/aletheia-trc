import React from "react";
import Image from "next/image";
import { ZoomIn, Calendar } from "lucide-react";

export default function GalleryCard({ photo, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 group cursor-pointer">
      <div className="relative h-56 bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <Image
          src={photo.src}
          alt={photo.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
          <div className="p-3 bg-[#0c2448] rounded-xl text-white">
            <ZoomIn size={18} />
          </div>
        </div>
        <div className="absolute top-3 left-3 bg-[#0c2448] text-white text-[9px] font-bold px-2.5 py-1 rounded-xl z-15 shadow-sm">
          {photo.category}
        </div>
      </div>

      {/* Text info */}
      <div className="p-5 space-y-2">
        <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-tight truncate">
          {photo.title}
        </h3>
        <div className="flex items-center gap-1.5 text-[10px] text-slate-450 dark:text-slate-400">
          <Calendar size={11} className="text-[#48a848]" />
          <span>{photo.date}</span>
        </div>
      </div>
    </div>
  );
}
