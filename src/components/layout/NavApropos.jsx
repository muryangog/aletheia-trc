"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Eye, Users, BookOpen } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const aproposLinks = [
  {
    name: "Notre Vision",
    sub: "Notre appel et notre direction",
    href: "/a-propos/vision",
    icon: <Eye size={16} />,
  },
  {
    name: "L'Équipe Pastorale",
    sub: "Nos bergers et nos leaders",
    href: "/a-propos/equipe",
    icon: <Users size={16} />,
  },
  {
    name: "Nos Croyances",
    sub: "Notre doctrine et notre foi",
    href: "/a-propos/doctrine",
    icon: <BookOpen size={16} />,
  },
];

export default function NavApropos({ isMobile = false, onCloseMobile }) {
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
          <span>À propos</span>
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
                {aproposLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="flex items-center gap-2.5 p-2.5 rounded-xl transition-colors hover:bg-white/5 group">
                    <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#48a848]">
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
        À propos
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
            className="absolute top-[calc(100%+10px)] left-0 z-60 bg-white dark:bg-slate-900 rounded-2xl p-1.5 min-w-57.5 border border-slate-200 dark:border-slate-800 shadow-xl transition-colors duration-200">
            <div className="absolute -top-1.25 left-6 w-2.5 h-2.5 bg-white dark:bg-slate-900 rotate-45 border-t border-l border-slate-200 dark:border-slate-800" />

            {aproposLinks.map((item) => (
              <div key={item.name}>
                {item.separator && (
                  <div className="h-px bg-slate-200 dark:bg-slate-800 mx-1.5 my-1" />
                )}
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl group transition-colors hover:bg-slate-50 dark:hover:bg-slate-800">
                  <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0 text-[#48a848] transition-all group-hover:bg-[#48a848] group-hover:border-[#48a848]">
                    <span className="group-hover:text-white transition-colors">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <div className="text-[12.5px] font-medium text-slate-800 dark:text-slate-100 leading-none">
                      {item.name}
                    </div>
                    {item.sub && (
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.75">
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
