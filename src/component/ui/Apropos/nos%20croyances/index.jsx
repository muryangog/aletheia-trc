"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Compass, Flame, Shield, CheckCircle, ChevronDown } from "lucide-react";

const BELIEFS = [
  {
    title: "La Parole de Dieu (La Bible)",
    icon: <BookOpen className="w-5 h-5 text-[#48a848]" />,
    summary: "Nous croyons que la Bible est la Parole inspirée, infaillible et souveraine de Dieu.",
    details:
      "Toute l'Écriture est inspirée de Dieu et utile pour enseigner, pour convaincre, pour corriger, pour instruire dans la justice (2 Timothée 3:16). Elle constitue notre règle suprême de foi et de conduite chrétienne.",
  },
  {
    title: "La Trinité (Dieu unique)",
    icon: <Shield className="w-5 h-5 text-[#48a848]" />,
    summary: "Nous croyons en un seul Dieu, éternellement existant en trois personnes : Père, Fils et Saint-Esprit.",
    details:
      "Dieu est amour, lumière et esprit. Il est Créateur de toutes choses, tout-puissant, omniscient et souverain sur toute la création. Les trois personnes de la Trinité possèdent la même nature divine et les mêmes perfections.",
  },
  {
    title: "Jésus-Christ (Le Sauveur)",
    icon: <Compass className="w-5 h-5 text-[#48a848]" />,
    summary: "Nous croyons en la divinité de Jésus-Christ, sa naissance virginale, son sacrifice expiatoire et sa résurrection.",
    details:
      "Jésus-Christ est le Fils éternel de Dieu venu en chair. Par sa mort à la croix et sa résurrection physique, il a payé la dette de nos péchés pour nous réconcilier avec le Père. Il est le seul chemin, la vérité et la vie.",
  },
  {
    title: "Le Saint-Esprit (Le Consolateur)",
    icon: <Flame className="w-5 h-5 text-[#48a848]" />,
    summary: "Nous croyons au ministère actif du Saint-Esprit pour régénérer, sanctifier et équiper le croyant.",
    details:
      "Le Saint-Esprit habite en chaque croyant pour le sceller, le transformer et lui donner la force de vivre une vie sainte. Nous croyons à la manifestation de ses dons spirituels et au baptême dans le Saint-Esprit pour le service.",
  },
  {
    title: "Le Salut par la Grâce",
    icon: <CheckCircle className="w-5 h-5 text-[#48a848]" />,
    summary: "Nous croyons que le salut est un don gratuit de Dieu reçu uniquement par la foi en Jésus-Christ.",
    details:
      "L'homme est sauvé non par ses œuvres, mais par la seule grâce de Dieu au moyen de la repentance et de la foi en Christ. Cette régénération intérieure produit une vie nouvelle manifestée par l'amour et l'obéissance.",
  },
  {
    title: "L'Église locale & Mission",
    icon: <Shield className="w-5 h-5 text-[#48a848]" />,
    summary: "Nous croyons au sacerdoce universel et à la mission de l'Église de proclamer la Vérité.",
    details:
      "L'Église est le corps de Christ sur terre, appelée à l'adoration, à la communion fraternelle et à la proclamation de l'Évangile. Chaque croyant est membre du corps et dispose de ministères ou de dons pour édifier la communauté.",
  },
];

export default function NosCroyances() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen pb-20 transition-colors duration-300">
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#0c2448] text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#48a848]/20 border border-[#48a848]/40 text-[#5cbd5c] text-xs font-semibold tracking-wider uppercase mb-4">
            Fondations de la Foi
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 animate-fade-in">
            Nos Croyances
          </h1>
          <p className="text-lg md:text-xl text-slate-350 max-w-2xl mx-auto leading-relaxed">
            Ce que nous confessons, enseignons et croyons à la lumière des Écritures.
          </p>
        </div>
      </section>

      {/* 2. CONTENU PRINCIPAL */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[#0c2448] dark:text-white mb-4">
            Déclaration de Foi
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
            Chez Aletheia TRC, nous sommes attachés aux vérités fondamentales de l'Évangile historique et réformé, centrés sur la seigneurie de Jésus-Christ.
          </p>
        </div>

        {/* Accordéon interactif */}
        <div className="space-y-4">
          {BELIEFS.map((belief, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden transition-all duration-300">
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between p-6 text-left outline-none">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                      {belief.icon}
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-[#0c2448] dark:text-white transition-colors group-hover:text-[#48a848]">
                        {belief.title}
                      </h3>
                      <p className="text-xs text-slate-450 dark:text-slate-400 mt-1 line-clamp-1">
                        {belief.summary}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
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
                        <p className="text-sm md:text-base text-slate-650 dark:text-slate-300 leading-relaxed pl-16">
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
