"use client";

import { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Music,
  Radio,
  Video,
  Mic2,
  Tv,
  RadioTower,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const sermonLinks = [
  {
    name: "Audios",
    sub: "Écouter les messages",
    href: "/sermons/audio",
    icon: <Music size={16} />,
  },
  {
    name: "Radio Aletheia",
    sub: "Écouter en continu",
    href: "/sermons/radio",
    icon: <Radio size={16} />,
  },
  {
    name: "Vidéos",
    sub: "Regarder les prédications",
    href: "/sermons/videos",
    icon: <Video size={16} />,
  },
  {
    name: "Podcasts",
    sub: "Écouter les séries audio",
    href: "/sermons/podcasts",
    icon: <Mic2 size={16} />,
  },
  {
    name: "Aletheia TV",
    sub: "Regarder la chaîne en ligne",
    href: "/tv",
    icon: <Tv size={16} />,
  },
  {
    name: "Culte en direct",
    sub: "Suivre la retransmission",
    href: "/sermons/live",
    separator: true,
    icon: <RadioTower size={16} />,
  },
];

export default function NavSermon({ isMobile = false, onCloseMobile }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isMobile) return;
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobile]);

  const handleLinkClick = () => {
    setIsOpen(false);
    onCloseMobile?.();
  };

  if (isMobile) {
    return (
      <div className="w-full flex flex-col">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="type-nav flex items-center justify-between w-full py-3 px-3 rounded-xl text-white/75 hover:text-white hover:bg-white/5 transition-all outline-none">
          <span>Prédications</span>
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-250 opacity-50 ${
              isOpen ? "rotate-180 opacity-100! text-[#48a848]" : ""
            }`}
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
                {sermonLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg transition-colors hover:bg-white/5 group">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#48a848]">
                      {item.icon}
                    </div>
                    <div className="text-left">
                      <div className="text-[13px] text-white/80">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-white/45 mt-0.5">
                        {item.sub}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="relative flex items-center h-full" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`type-nav flex items-center gap-1 h-9 px-3.75 rounded-full transition-all duration-200 outline-none ${
          isOpen
            ? "bg-white/10 text-white"
            : "text-white/75 hover:text-white hover:bg-white/8"
        }`}>
        Prédications
        <ChevronDown
          className={`w-3 h-3 opacity-55 transition-transform duration-200 ${
            isOpen ? "rotate-180 opacity-80" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[calc(100%+10px)] left-0 z-60 bg-white dark:bg-[#0c2448] rounded-[14px] p-1.5 min-w-57.5 border border-[#0c2448]/7 dark:border-white/10 shadow-[0_16px_40px_rgba(12,36,72,0.2),0_2px_8px_rgba(12,36,72,0.1)]">
            <div className="absolute -top-1.25 left-6 w-2.5 h-2.5 bg-white dark:bg-[#0c2448] rotate-45 border-t border-l border-[#0c2448]/7 dark:border-white/10" />

            {sermonLinks.map((item) => (
              <div key={item.name}>
                {item.separator && (
                  <div className="h-px bg-[#0c2448]/6 dark:bg-white/10 mx-1.5 my-1" />
                )}
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2.5 p-2.5 rounded-[9px] group transition-colors hover:bg-[#f5f7fa] dark:hover:bg-white/5">
                  <div className="w-8 h-8 rounded-lg bg-[#f5f7fa] dark:bg-slate-950/45 border border-[#0c2448]/8 dark:border-white/5 flex items-center justify-center shrink-0 text-[#48a848] transition-all group-hover:bg-[#48a848] group-hover:border-[#48a848]">
                    <span className="group-hover:text-white transition-colors">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <div className="text-[12.5px] font-medium text-[#0c2448] dark:text-white leading-none">
                      {item.name}
                    </div>
                    {item.sub && (
                      <div className="text-[11px] text-[#6b7a8d] dark:text-white/50 mt-0.75">
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
