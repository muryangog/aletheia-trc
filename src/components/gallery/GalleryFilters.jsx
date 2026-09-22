import React from "react";
import { ImageIcon } from "lucide-react";

export default function GalleryFilters({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-slate-200 dark:border-slate-800 scrollbar-none mb-10">
      <ImageIcon className="w-4 h-4 text-slate-400 shrink-0 mr-1" />
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap outline-none cursor-pointer ${
            selectedCategory === cat
              ? "bg-[#0c2448] text-white shadow-sm"
              : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
          }`}>
          {cat}
        </button>
      ))}
    </div>
  );
}
