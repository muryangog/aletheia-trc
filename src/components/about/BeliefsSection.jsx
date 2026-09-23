"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Compass,
  Flame,
  Shield,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import { beliefsService } from "@/services/beliefs.service";

const ICON_MAP = {
  BookOpen: <BookOpen className="w-5 h-5 text-[#48a848]" />,
  Shield: <Shield className="w-5 h-5 text-[#48a848]" />,
  Compass: <Compass className="w-5 h-5 text-[#48a848]" />,
  Flame: <Flame className="w-5 h-5 text-[#48a848]" />,
  CheckCircle: <CheckCircle className="w-5 h-5 text-[#48a848]" />,
};

export default function BeliefsSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const beliefs = beliefsService.getAll();

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen pb-20 transition-colors duration-200">
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#0c2448] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] bg-size-[20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-[#48a848]/20 border border-[#48a848]/40 text-[#5cbd5c] text-xs font-semibold tracking-wider uppercase mb-4">
            Fondations de la Foi
          </span>
          <h1 className="type-page-title text-white mb-4">Nos Croyances</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Ce que nous confessons, enseignons et croyons à la lumière des
            Écritures.
          </p>
        </div>
      </section>

      {/* 2. CONTENU PRINCIPAL */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 mb-4">
            Déclaration de Foi
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
            Chez Aletheia TRC, nous sommes attachés aux vérités fondamentales de
            l'Évangile historique et réformé, centrés sur la seigneurie de
            Jésus-Christ.
          </p>
        </div>

        {/* Accordéon interactif */}
        <div className="space-y-4">
          {beliefs.map((belief, index) => {
            const isOpen = openIndex === index;
            const icon = ICON_MAP[belief.iconName] || (
              <BookOpen className="w-5 h-5 text-[#48a848]" />
            );

            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-colors duration-200">
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between p-6 text-left outline-none">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                      {icon}
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100 transition-colors group-hover:text-[#48a848]">
                        {belief.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                        {belief.summary}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-[#48a848]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}>
                      <div className="px-6 pb-6 pt-2 border-t border-slate-50 dark:border-slate-800/50">
                        <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed pl-16">
                          {belief.details}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
