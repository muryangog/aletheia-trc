"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Calendar, BookOpen, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const ressources = [
  {
    name: "Événements",
    sub: "Nos cultes & réunions",
    href: "/ressources/evenements",
    icon: <Calendar size={16} className="text-[#48a848]" />,
  },
  {
    name: "Dévotion",
    sub: "La manne du jour",
    href: "/ressources/devotion",
    icon: <BookOpen size={16} className="text-[#48a848]" />,
  },
  {
    name: "Nouveaux Convertis",
    sub: "Premiers pas avec Christ",
    href: "/ressources/nouveaux-convertis",
    icon: <Sparkles size={16} className="text-[#48a848]" />,
  },
];

export default function NavRessources({ isMobile = false, onCloseMobile }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Fermeture au clic extérieur (Desktop uniquement)
  useEffect(() => {
    if (isMobile) return;
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile]);

  const handleLinkClick = () => {
    setIsOpen(false);
    onCloseMobile?.();
  };

  // ── Version Mobile ─────────────────────────────────────────
  if (isMobile) {
    return (
      <div className="w-full flex flex-col">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full py-3 px-3 rounded-xl
                     text-white/75 hover:text-white hover:bg-white/5
                     text-[14px] font-medium transition-all outline-none">
          <span>Ressources</span>
          <ChevronDown
            className={`w-[14px] h-[14px] transition-transform duration-250 opacity-50
                        ${isOpen ? "rotate-180 !opacity-100 text-[#48a848]" : ""}`}
          />
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden">
              <div className="flex flex-col py-1 px-1 mb-2">
                {ressources.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="flex items-center gap-2 py-2.5 px-3 rounded-lg
                               text-[13.5px] text-white/60 hover:text-[#5cbd5c]
                               hover:bg-[#48a848]/10 transition-all group">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#48a848] transition-colors flex-shrink-0" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // ── Version Desktop ───────────────────────────────────
  return (
    <div className="relative flex items-center h-full" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 h-9 px-[15px] rounded-full
                    text-[13px] font-medium transition-all duration-200 outline-none
                    ${
                      isOpen
                        ? "bg-white/10 text-white"
                        : "text-white/75 hover:text-white hover:bg-white/8"
                    }`}>
        Ressources
        <ChevronDown
          className={`w-3 h-3 opacity-55 transition-transform duration-200
                      ${isOpen ? "rotate-180 opacity-80" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[calc(100%+10px)] left-0 z-[60]
                       bg-white dark:bg-[#0c2448] rounded-[14px] p-1.5 min-w-[230px]
                       border border-[#0c2448]/7 dark:border-white/10
                       shadow-[0_16px_40px_rgba(12,36,72,0.2),0_2px_8px_rgba(12,36,72,0.1)]">
            <div
              className="absolute -top-[5px] left-6 w-2.5 h-2.5 bg-white dark:bg-[#0c2448] rotate-45
                            border-t border-l border-[#0c2448]/7 dark:border-white/10"
            />

            {ressources.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2.5 p-2.5 rounded-[9px]
                             group transition-colors hover:bg-[#f5f7fa] dark:hover:bg-white/5">
                  <div
                    className="w-8 h-8 rounded-lg bg-[#f5f7fa] dark:bg-slate-950/45 border border-[#0c2448]/8 dark:border-white/5
                                  flex items-center justify-center flex-shrink-0
                                  transition-all group-hover:bg-[#48a848] group-hover:border-[#48a848]">
                    <span className="text-[#0c2448] dark:text-slate-200 group-hover:text-white transition-colors">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <div className="text-[12.5px] font-medium text-[#0c2448] dark:text-white leading-none">
                      {item.name}
                    </div>
                    {item.sub && (
                      <div className="text-[11px] text-[#6b7a8d] dark:text-white/50 mt-[3px]">
                        {item.sub}
                      </div>
                    )}
                  </div>
                </Link>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
