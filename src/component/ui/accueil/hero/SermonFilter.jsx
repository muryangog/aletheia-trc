// src/component/home/SermonFilter.jsx
"use client";
import { motion } from "framer-motion";
import { Search, Calendar, User, BookOpen, ChevronDown } from "lucide-react";

export default function SermonFilter({ id, selected = "", setSelected }) {
  return (
    <motion.div
      key={`filter-${id}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.1 }}
      className="bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-2xl md:rounded-full shadow-2xl w-full max-w-4xl mx-auto">
      <form className="flex flex-col md:flex-row items-center gap-2">
        {/* Titre */}
        <div className="relative flex-1 w-full">
          <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 w-5 h-5" />
          <input
            type="text"
            placeholder="Titre du sermon..."
            className="w-full bg-white/5 border-none focus:ring-2 focus:ring-green-500 text-white placeholder:text-white/40 pl-12 pr-4 py-3 rounded-full text-sm outline-none transition-all"
          />
        </div>

        <div className="hidden md:block w-px h-8 bg-white/20"></div>

        {/* Prédicateur */}
        <div className="relative flex-1 w-full group">
          {/* Icône Prédicateur / Utilisateur à gauche */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-[#5cbd5c] transition-colors pointer-events-none z-10">
            <User className="w-5 h-5" />
          </div>

          {/* Select principal */}
          <select
            value={selected}
            onChange={(e) => setSelected?.(e.target.value)}
            className="w-full bg-white/10 dark:bg-slate-900/60 backdrop-blur-md border border-white/15 dark:border-slate-800 text-white font-medium pl-12 pr-10 py-3.5 rounded-2xl text-sm outline-none cursor-pointer appearance-none shadow-sm hover:bg-white/15 hover:border-white/25 focus:ring-2 focus:ring-[#48a848] focus:border-transparent transition-all duration-200">
            <option className="bg-[#0c2448] text-white py-2" value="">
              Tous les Prédicateurs
            </option>
            <option
              className="bg-[#0c2448] text-white py-2"
              value="prophete-evrard">
              Prophète SINAGAYE Evrard
            </option>
            <option
              className="bg-[#0c2448] text-white py-2"
              value="pasteur-eric">
              Pasteur BIKONESA Eric
            </option>
            <option
              className="bg-[#0c2448] text-white py-2"
              value="apotre-audilon">
              Apôtre AUDILON
            </option>
            <option
              className="bg-[#0c2448] text-white py-2"
              value="apotre-divin">
              Apôtre DIVIN
            </option>
            <option
              className="bg-[#0c2448] text-white py-2"
              value="evangeliste-ines">
              Évangéliste SINAGAYE Inès
            </option>
          </select>

          {/* Flèche Chevron à droite */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
            <ChevronDown className="w-4 h-4 group-hover:text-white transition-colors" />
          </div>
        </div>
        {/* Date */}
        <div className="relative flex-1 w-full">
          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 w-5 h-5" />
          <input
            type="date"
            placeholder="Date du sermon..."
            className="w-full bg-white/5 border-none focus:ring-2 focus:ring-green-500 text-white pl-12 pr-4 py-3 rounded-full text-sm outline-none cursor-pointer [color-scheme:dark]"
          />
        </div>

        {/* Bouton */}
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2 w-full md:w-auto justify-center shadow-lg">
          <Search className="w-5 h-5" />
          {/* <span className="md:hidden lg:inline">Filtrer</span> */}
        </button>
      </form>
    </motion.div>
  );
}
