"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Filter,
  Users,
  Video,
  Sparkles,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Liste des événements
const EVENEMENTS = [
  {
    id: 1,
    title: "Culte de Célébration & Adoration",
    category: "Cultes",
    date: "Dimanche 10 Mai 2026",
    time: "09h30 - 12h00",
    location: "Sanctuaire Principal - TRC",
    isOnline: true,
    featured: true,
    description:
      "Rejoignez-nous pour un moment intense de louange, d'adoration et d'enseignement biblique inspirant autour de la Parole de Dieu.",
    image: "/Logo_aletheia.png", // Remplacez par votre image d'événement
    tag: "Prochain Culte",
  },
  {
    id: 2,
    title: "Conférence Spéciale : Découvrir la Vérité",
    category: "Conférences",
    date: "Vendredi 15 Mai 2026",
    time: "18h00 - 21h00",
    location: "Grand Auditorium Aletheia",
    isOnline: false,
    featured: false,
    description:
      "Une soirée d'impact et de réflexion profonde sur la foi chrétienne dans le monde moderne.",
    image: "/Logo_aletheia.png",
    tag: "Spécial",
  },
  {
    id: 3,
    title: "Soirée Jeunesse & Impact",
    category: "Jeunesse",
    date: "Samedi 23 Mai 2026",
    time: "16h00 - 19h00",
    location: "Salle des Fêtes TRC",
    isOnline: false,
    featured: false,
    description:
      "Rencontre dynamique pour la jeunesse : partage, musique, ateliers pratiques et temps d'échange.",
    image: "/Logo_aletheia.png",
    tag: "Jeunesse",
  },
  {
    id: 4,
    title: "Étude Biblique approfondie : Épître aux Romains",
    category: "Études Bibliques",
    date: "Mercredi 27 Mai 2026",
    time: "18h30 - 20h00",
    location: "En ligne (Zoom & Live)",
    isOnline: true,
    featured: false,
    description:
      "Parcours explicatif et participatif versets par versets pour grandir dans la doctrine biblique.",
    image: "/Logo_aletheia.png",
    tag: "Enseignement",
  },
];

const CATEGORIES = [
  "Tous",
  "Cultes",
  "Conférences",
  "Jeunesse",
  "Études Bibliques",
];

export default function PageEvenements() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtrage des événements
  const filteredEvents = EVENEMENTS.filter((event) => {
    const matchesCategory =
      selectedCategory === "Tous" || event.category === selectedCategory;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredEvent = EVENEMENTS.find((e) => e.featured) || EVENEMENTS[0];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen pb-20">
      {/* ── 1. HERO BANNER ────────────────────────────────────────────── */}
      <section className="relative bg-[#0c2448] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#48a848]/20 border border-[#48a848]/40 text-[#5cbd5c] text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Agenda & Rassemblements
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Nos Événements
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Venez partager des moments forts de communion, de prière,
            d'apprentissage et de célébration.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        {/* ── 2. ÉVÉNEMENT EN VEDETTE (FEATURED) ─────────────────────── */}
        {featuredEvent && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 dark:border-slate-800 mb-12">
            <div className="flex items-center gap-2 text-[#48a848] font-bold text-xs uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-[#48a848] animate-ping" />
              Événements à ne pas manquer
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#0c2448]/10 dark:bg-slate-800 text-[#0c2448] dark:text-slate-200">
                  {featuredEvent.category}
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0c2448] dark:text-white leading-tight">
                  {featuredEvent.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {featuredEvent.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-[#48a848]" />
                    <span>{featuredEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#48a848]" />
                    <span>{featuredEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-2.5 sm:col-span-2">
                    <MapPin className="w-4 h-4 text-[#48a848]" />
                    <span>{featuredEvent.location}</span>
                    {featuredEvent.isOnline && (
                      <span className="ml-2 inline-flex items-center gap-1 text-xs bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-md">
                        <Video className="w-3 h-3" /> En Direct
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/evenements/${featuredEvent.id}`}
                    className="inline-flex items-center gap-2 bg-[#48a848] hover:bg-[#3d913d] text-white font-medium px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg">
                    S'inscrire / En savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center p-6">
                <Image
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  width={240}
                  height={240}
                  className="object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        )}

        {/* ── 3. BARRE DE RECHERCHE ET FILTRES ───────────────────────── */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
          {/* Filtres par boutons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            <Filter className="w-4 h-4 text-slate-400 flex-shrink-0 mr-1 hidden sm:block" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap outline-none ${
                  selectedCategory === cat
                    ? "bg-[#0c2448] text-white shadow-sm"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
                }`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Recherche */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Rechercher un événement..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#48a848] transition-all"
            />
          </div>
        </div>

        {/* ── 4. GRILLE DE TOUS LES ÉVÉNEMENTS ───────────────────────── */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div>
                  {/* Visuel Top */}
                  <div className="relative h-48 bg-slate-100 dark:bg-slate-800 p-4 flex items-center justify-center">
                    <span className="absolute top-3 left-3 bg-[#0c2448] text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-sm">
                      {item.category}
                    </span>
                    {item.isOnline && (
                      <span className="absolute top-3 right-3 bg-emerald-500 text-white text-[11px] font-medium px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1">
                        <Video className="w-3 h-3" /> Live
                      </span>
                    )}
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={120}
                      height={120}
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Contenu */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-[#0c2448] dark:text-white mb-2 line-clamp-1 group-hover:text-[#48a848] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-2 text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-[#48a848]" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#48a848]" />
                        <span>{item.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#48a848]" />
                        <span className="truncate">{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Carte */}
                <div className="px-6 pb-6 pt-0">
                  <Link
                    href={`/evenements/${item.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-[#0c2448] hover:text-white dark:hover:bg-[#48a848] text-xs font-semibold transition-all">
                    Détails & Inscription
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <Users className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300">
              Aucun événement trouvé
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Essayez de modifier votre recherche ou sélectionnez une autre
              catégorie.
            </p>
          </div>
        )}

        {/* ── 5. APPEL À L'ACTION / RESTEZ INFORMÉS ───────────────────── */}
        <section className="mt-16 bg-gradient-to-r from-[#0c2448] to-[#173868] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Ne manquez aucun de nos prochains événements !
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Abonnez-vous à notre communauté pour recevoir directement les
              annonces et invitations.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email..."
                className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#48a848] flex-1"
              />
              <button className="bg-[#48a848] hover:bg-[#3d913d] text-white font-medium px-6 py-3 rounded-xl text-sm transition-all shadow-md">
                S'inscrire
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
