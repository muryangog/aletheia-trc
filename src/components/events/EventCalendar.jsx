"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  Sparkles,
} from "lucide-react";
import EventCard from "./EventCard";
import EventFilters from "./EventFilters";
import { eventsService } from "@/services/events.service";

export default function EventCalendar() {
  const [activeMonthIdx, setActiveMonthIdx] = useState(new Date().getMonth());
  const [selectedCat, setSelectedCat] = useState("Tous");

  const categories = eventsService.getCategories();
  const months = eventsService.getMonths();
  const filteredEvents = eventsService.getByMonthAndCategory(
    activeMonthIdx,
    selectedCat,
  );

  const handlePrevMonth = () => {
    setActiveMonthIdx((prev) => (prev === 0 ? 11 : prev - 1));
  };

  const handleNextMonth = () => {
    setActiveMonthIdx((prev) => (prev === 11 ? 0 : prev + 1));
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen pb-20 transition-colors duration-200">
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#0c2448] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] bg-size-[20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-[#48a848]/20 border border-[#48a848]/40 text-[#5cbd5c] text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Agenda de l'Église 2026
          </span>
          <h1 className="type-page-title text-white mb-4">Calendrier Annuel</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Consultez toutes les activités, cultes, séminaires et événements
            planifiés pour toute l'année.
          </p>
        </div>
      </section>

      {/* 2. CALENDAR MONTH SLIDER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-[#0c2448] text-white rounded-2xl p-6 shadow-xl border border-white/5 flex items-center justify-between gap-4 max-w-2xl mx-auto mb-10">
          <button
            onClick={handlePrevMonth}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-colors duration-200 outline-none cursor-pointer"
            aria-label="Mois précédent">
            <ChevronLeft size={20} />
          </button>
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-extrabold tracking-wide uppercase text-green-400">
              {months[activeMonthIdx]} 2026
            </h2>
            <p className="text-[10px] text-white/50 uppercase mt-0.5">
              Naviguez pour voir toute l'année
            </p>
          </div>
          <button
            onClick={handleNextMonth}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-colors duration-200 outline-none cursor-pointer"
            aria-label="Mois suivant">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Filtres par Catégorie */}
        <EventFilters
          categories={categories}
          selectedCategory={selectedCat}
          onSelectCategory={setSelectedCat}
        />

        {/* Liste des événements */}
        <div className="space-y-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((item) => (
              <EventCard key={item.id} item={item} />
            ))
          ) : (
            <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 transition-colors duration-200">
              <CalendarIcon className="w-14 h-14 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Aucun événement prévu en {months[activeMonthIdx]} 2026
              </h3>
              <p className="text-xs text-slate-400 mt-1.5">
                Consultez les mois précédents ou suivants pour découvrir
                l'agenda de l'église.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
