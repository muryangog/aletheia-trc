// src/component/home/HeroContent.jsx
"use client";
import { motion } from "framer-motion";
import SermonFilter from "./SermonFilter"; // Assure-toi que le chemin est correct

export default function HeroContent({ title, sub, id }) {
  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 md:px-6">
      <div className="max-w-5xl mx-auto w-full">
        {/* TITRE : Animation d'entrée par le bas */}
        <motion.h1
          key={`title-${id}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif leading-tight drop-shadow-2xl">
          {title}
        </motion.h1>

        {/* SOUS-TITRE : Apparaît en fondu avec un délai */}
        <motion.p
          key={`sub-${id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
          {sub}
        </motion.p>

        {/* BOUTONS : Actions principales */}
        <motion.div
          key={`btns-${id}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
          <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-3.5 rounded-full font-bold transition-all shadow-lg active:scale-95 text-lg min-w-[200px]">
            Nous Rejoindre
          </button>

          <button className="border-2 border-white/40 hover:bg-white/10 text-white px-10 py-3.5 rounded-full font-bold transition-all backdrop-blur-md active:scale-95 text-lg min-w-[200px]">
            Derniers Sermons
          </button>
        </motion.div>

        {/* BARRE DE RECHERCHE : Appel du composant enfant */}
        <SermonFilter id={id} />
      </div>
    </div>
  );
}
