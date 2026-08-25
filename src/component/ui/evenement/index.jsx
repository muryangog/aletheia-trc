"use client";
import React, { useState } from "react";
import { Calendar, Clock, MapPin, ArrowRight, Video, Sparkles, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Agenda Annuel 2026
const EVENEMENTS_ANNUELS = [
  {
    id: 1,
    title: "Culte d'Action de Grâce de Nouvel An",
    category: "Cultes",
    month: 0, // Janvier
    date: "Mercredi 1er Janvier 2026",
    time: "09h00 - 11h30",
    location: "Sanctuaire Principal - TRC",
    isOnline: true,
    description: "Célébration spéciale pour rendre grâce à Dieu pour la nouvelle année 2026 et consacrer nos familles.",
    image: "/Logo_aletheia.png",
  },
  {
    id: 2,
    title: "21 Jours de Jeûne et Prière",
    category: "Prière",
    month: 0, // Janvier
    date: "Du 5 au 25 Janvier 2026",
    time: "18h00 - 19h30 chaque soir",
    location: "Temple TRC & En Ligne",
    isOnline: true,
    description: "Une saison de consécration, de jeûne et de prière pour poser les fondements spirituels de l'année.",
    image: "/Logo_aletheia.png",
  },
  {
    id: 3,
    title: "Séminaire des Couples & Familles",
    category: "Conférences",
    month: 1, // Février
    date: "Samedi 14 Février 2026",
    time: "15h00 - 18h00",
    location: "Salle d'Honneur Aletheia",
    isOnline: false,
    description: "Un temps d'enseignement et d'échange pratique sur les fondements du mariage et de la famille chrétienne.",
    image: "/Logo_aletheia.png",
  },
  {
    id: 4,
    title: "Grande Conférence Aletheia TRC",
    category: "Conférences",
    month: 2, // Mars
    date: "Du 18 au 22 Mars 2026",
    time: "17h00 - 20h00 chaque soir",
    location: "Grand Auditorium TRC",
    isOnline: true,
    description: "Notre conférence annuelle avec des orateurs invités sous le thème de la Restauration Spirituelle par la Vérité.",
    image: "/Logo_aletheia.png",
  },
  {
    id: 5,
    title: "Célébration de la Pâque (Résurrection)",
    category: "Cultes",
    month: 3, // Avril
    date: "Dimanche 5 Avril 2026",
    time: "09h00 - 12h00",
    location: "Sanctuaire Principal - TRC",
    isOnline: true,
    description: "Célébration de la résurrection de notre Seigneur Jésus-Christ. Sainte Cène solennelle.",
    image: "/Logo_aletheia.png",
  },
  {
    id: 6,
    title: "Campagne d'Évangélisation et Impact Social",
    category: "Social",
    month: 4, // Mai
    date: "Du 15 au 17 Mai 2026",
    time: "Toute la journée",
    location: "Bujumbura Mairie",
    isOnline: false,
    description: "Partage de l'Évangile dans les rues et distribution de dons alimentaires aux familles démunies.",
    image: "/Logo_aletheia.png",
  },
  {
    id: 7,
    title: "Soirée Jeunesse & Impact",
    category: "Jeunesse",
    month: 5, // Juin
    date: "Samedi 20 Juin 2026",
    time: "16h00 - 19h00",
    location: "Salle des Fêtes TRC",
    isOnline: false,
    description: "Rencontre dynamique pour la jeunesse : louange vibrante, témoignages et partages d'idées.",
    image: "/Logo_aletheia.png",
  },
  {
    id: 8,
    title: "Retraite Spirituelle de l'Équipe Pastorale",
    category: "Prière",
    month: 6, // Juillet
    date: "Du 10 au 12 Juillet 2026",
    time: "Retraite résidentielle",
    location: "Gitega",
    isOnline: false,
    description: "Retraite annuelle de ressourcement, de prière et de planification stratégique des ministères.",
    image: "/Logo_aletheia.png",
  },
  {
    id: 9,
    title: "Conférence d'Enseignement Doctrinal",
    category: "Conférences",
    month: 8, // Septembre
    date: "Du 16 au 20 Septembre 2026",
    time: "18h00 - 20h00",
    location: "Auditorium Aletheia",
    isOnline: true,
    description: "Affermissement spirituel sur les doctrines fondamentales de la grâce divine.",
    image: "/Logo_aletheia.png",
  },
  {
    id: 10,
    title: "Nuit d'Adoration Passionnée",
    category: "Cultes",
    month: 9, // Octobre
    date: "Vendredi 30 Octobre 2026",
    time: "21h00 - 05h00",
    location: "Sanctuaire Principal - TRC",
    isOnline: true,
    description: "Une nuit entière de prière, de louange et d'adoration dans la présence souveraine de Dieu.",
    image: "/Logo_aletheia.png",
  },
  {
    id: 11,
    title: "Célébration de la Nativité de Christ",
    category: "Cultes",
    month: 11, // Décembre
    date: "Vendredi 25 Décembre 2026",
    time: "09h00 - 11h30",
    location: "Sanctuaire Principal - TRC",
    isOnline: true,
    description: "Culte solennel célébrant l'incarnation de la Parole de Dieu en Jésus-Christ.",
    image: "/Logo_aletheia.png",
  },
  {
    id: 12,
    title: "Veillée d'Entrée dans la Nouvelle Année (Cross-Over)",
    category: "Prière",
    month: 11, // Décembre
    date: "Jeudi 31 Décembre 2026",
    time: "21h00 - 01h00",
    location: "Grand Auditorium TRC",
    isOnline: true,
    description: "Veillée solennelle de transition spirituelle pour accueillir la nouvelle année dans la prière.",
    image: "/Logo_aletheia.png",
  },
];

const MOIS = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];

export default function PageEvenements() {
  const [activeMonthIdx, setActiveMonthIdx] = useState(new Date().getMonth());
  const [selectedCat, setSelectedCat] = useState("Tous");

  const handlePrevMonth = () => {
    setActiveMonthIdx((prev) => (prev === 0 ? 11 : prev - 1));
  };

  const handleNextMonth = () => {
    setActiveMonthIdx((prev) => (prev === 11 ? 0 : prev + 1));
  };

  // Filtrer les événements par mois actif et catégorie
  const filteredEvents = EVENEMENTS_ANNUELS.filter((event) => {
    const matchesMonth = event.month === activeMonthIdx;
    const matchesCat = selectedCat === "Tous" || event.category === selectedCat;
    return matchesMonth && matchesCat;
  });

  const categories = ["Tous", "Cultes", "Conférences", "Prière", "Social", "Jeunesse"];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen pb-20 transition-colors duration-300">
      
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#0c2448] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#48a848]/20 border border-[#48a848]/40 text-[#5cbd5c] text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Agenda de l'Église 2026
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Calendrier Annuel
          </h1>
          <p className="text-lg md:text-xl text-slate-350 max-w-2xl mx-auto leading-relaxed">
            Consultez toutes les activités, cultes, séminaires et événements planifiés pour toute l'année.
          </p>
        </div>
      </section>

      {/* 2. CALENDAR MONTH SLIDER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-[#0c2448] text-white rounded-3xl p-6 shadow-xl border border-white/5 flex items-center justify-between gap-4 max-w-2xl mx-auto mb-10">
          <button
            onClick={handlePrevMonth}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors outline-none">
            <ChevronLeft size={20} />
          </button>
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-extrabold tracking-wide uppercase text-green-400">
              {MOIS[activeMonthIdx]} 2026
            </h2>
            <p className="text-[10px] text-white/50 uppercase mt-0.5">Naviguez pour voir toute l'année</p>
          </div>
          <button
            onClick={handleNextMonth}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors outline-none">
            <ChevronRight size={20} />
          </button>
        </div>

        {/* 3. CATEGORIES FILTERS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-slate-200 dark:border-slate-800 scrollbar-none">
          <Filter className="w-4 h-4 text-slate-400 flex-shrink-0" />
          {categories.map((cat) => (
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

        {/* 4. EVENTS CONTAINER */}
        <div className="space-y-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Event info (7 Cols) */}
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#0c2448]/10 dark:bg-slate-800 text-[#0c2448] dark:text-slate-200 uppercase">
                      {item.category}
                    </span>
                    {item.isOnline && (
                      <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-450 px-2 py-0.5 rounded-md font-bold">
                        <Video className="w-3 h-3" /> En Direct
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#0c2448] dark:text-white leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#48a848] flex-shrink-0" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#48a848] flex-shrink-0" />
                      <span>{item.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#48a848] flex-shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Event image/brand (4 Cols) */}
                <div className="lg:col-span-4 relative h-48 rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-center justify-center p-6">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={110}
                    height={110}
                    className="object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800">
              <Calendar className="w-14 h-14 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-700 dark:text-slate-350">
                Aucun événement prévu en {MOIS[activeMonthIdx]} 2026
              </h3>
              <p className="text-xs text-slate-450 mt-1.5">
                Consultez les mois précédents ou suivants pour découvrir l'agenda de l'église.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
