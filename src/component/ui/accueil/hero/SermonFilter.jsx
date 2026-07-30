// src/component/home/SermonFilter.jsx
"use client";
import { motion } from "framer-motion";
import { Search, Calendar, User, BookOpen } from "lucide-react";

export default function SermonFilter({ id }) {
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
        <div className="relative flex-1 w-full">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 w-5 h-5" />
          <select className="w-full bg-white/5 border-none focus:ring-2 focus:ring-green-500 text-white appearance-none pl-12 pr-4 py-3 rounded-full text-sm outline-none cursor-pointer">
            <option className="text-gray-900" value="">
              Tous les Prédicateurs
            </option>
            <option className="text-gray-900" value="pasteur1">
              Pasteur Jean
            </option>
            <option className="text-gray-900" value="pasteur2">
              Pasteur Marc
            </option>
          </select>
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
