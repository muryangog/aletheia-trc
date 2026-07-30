"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// ── Couleurs Aletheia ──────────────────────────────────────────────────────
// Bleu marine : #0c2448  |  Vert : #48a848

const sermons = [
  {
    name: "Audios",
    sub: "Écouter les messages",
    href: "/sermons/audio",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="w-4 h-4">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    name: "Vidéos",
    sub: "Regarder les sermons",
    href: "/sermons/videos",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="w-4 h-4">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
  },
  {
    name: "Podcasts",
    sub: "S'abonner au flux",
    href: "/sermons/podcasts",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="w-4 h-4">
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" />
      </svg>
    ),
  },
  {
    name: "En direct",
    sub: "Rejoindre le livestream",
    href: "/sermons/live",
    separator: true,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="w-4 h-4">
        <circle cx="12" cy="12" r="2" />
        <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
      </svg>
    ),
  },
];

export default function NavSermon({ isMobile = false, onCloseMobile }) {
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

  // ── Version Mobile (Accordéon) ─────────────────────────────────────────
  if (isMobile) {
    return (
      <div className="w-full flex flex-col">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full py-3 px-3 rounded-xl
                     text-white/75 hover:text-white hover:bg-white/5
                     text-[14px] font-medium transition-all outline-none">
          <span>Sermons</span>
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
                {sermons.map((item) => (
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

  // ── Version Desktop (Menu flottant) ───────────────────────────────────
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
        Sermons
        <ChevronDown
          className={`w-3 h-3 opacity-55 transition-transform duration-200
                      ${isOpen ? "rotate-180 opacity-80" : ""}`}
        />
      </button>

      {/* Panneau déroulant */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[calc(100%+10px)] left-0 z-[60]
                       bg-white rounded-[14px] p-1.5 min-w-[230px]
                       border border-[#0c2448]/7
                       shadow-[0_16px_40px_rgba(12,36,72,0.2),0_2px_8px_rgba(12,36,72,0.1)]">
            {/* Petite flèche */}
            <div
              className="absolute -top-[5px] left-6 w-2.5 h-2.5 bg-white rotate-45
                            border-t border-l border-[#0c2448]/7"
            />

            {sermons.map((item) => (
              <div key={item.name}>
                {item.separator && (
                  <div className="h-px bg-[#0c2448]/6 mx-1.5 my-1" />
                )}
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2.5 p-2.5 rounded-[9px]
                             group transition-colors hover:bg-[#f5f7fa]">
                  {/* Icône */}
                  <div
                    className="w-8 h-8 rounded-lg bg-[#f5f7fa] border border-[#0c2448]/8
                                  flex items-center justify-center flex-shrink-0
                                  transition-all group-hover:bg-[#48a848] group-hover:border-[#48a848]">
                    <span className="text-[#0c2448] group-hover:text-white transition-colors">
                      {item.icon}
                    </span>
                  </div>
                  {/* Texte */}
                  <div>
                    <div className="text-[12.5px] font-medium text-[#0c2448] leading-none">
                      {item.name}
                    </div>
                    {item.sub && (
                      <div className="text-[11px] text-[#6b7a8d] mt-[3px]">
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
