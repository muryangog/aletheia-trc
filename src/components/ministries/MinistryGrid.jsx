"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import MinistryCard from "./MinistryCard";
import MinistryModal from "./MinistryModal";
import { ministriesService } from "@/services/ministries.service";

export default function MinistryGrid() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState(null);

  const categories = ministriesService.getCategories();
  const filteredDepartments = ministriesService.search(
    searchQuery,
    selectedCategory,
  );

  return (
    <div className="bg-(--color-background) text-(--color-foreground) min-h-screen pb-20 transition-colors duration-300">
      {/* HERO BANNER */}
      <section className="relative bg-[#0c2448] text-white py-14 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] bg-size-[20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#48a848]/20 border border-[#48a848]/40 text-[#5cbd5c] text-xs font-semibold tracking-wider uppercase mb-4">
            Servir ensemble
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Tous nos Départements
          </h1>
          <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Chaque département a un rôle unique. Cliquez sur l'un d'eux pour
            découvrir ses activités, ses membres et ses vidéos.
          </p>
        </div>
      </section>

      {/* RECHERCHE ET FILTRES */}
      <section className="pt-8 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Rechercher un département..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#48a848]"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#48a848] text-white border-[#48a848] shadow-sm"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-[#48a848]"
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRILLE DES DÉPARTEMENTS */}
      <section className="py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredDepartments.map((dept) => (
            <MinistryCard
              key={dept.id}
              dept={dept}
              onClick={() => setSelectedDept(dept)}
            />
          ))}
        </div>
      </section>

      {/* MODAL DU DÉPARTEMENT SÉLECTIONNÉ */}
      {selectedDept && (
        <MinistryModal
          dept={selectedDept}
          onClose={() => setSelectedDept(null)}
        />
      )}
    </div>
  );
}
