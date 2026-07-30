"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import NavSermon from "./NavSermon";
import NavApropos from "./Apropos";
import { Search, Moon, Sun, Menu, X, Clock } from "lucide-react";

// ── Couleurs extraites du logo ──────────────────────────────────────────────
// Bleu marine : #0c2448  |  Vert : #48a848

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    setDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  return (
    <>
      {/* ── Barre supérieure ── */}
      <div className="bg-[#0c2448] border-b border-[#48a848]/20 py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[11px] text-white/45 tracking-wider">
            <Clock size={11} />
            Dimanche · Service à 9h &amp; 11h
          </span>
          <span className="hidden sm:flex items-center gap-3 text-[11px] text-white/45 tracking-wider">
            Suivez-nous ·
            <a
              href="https://www.youtube.com/@aletheiatruthrevealedchurc4758"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5cbd5c] hover:text-white transition-colors">
              YouTube
            </a>
            <a
              href="https://www.facebook.com/aletheiatruthrevealed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5cbd5c] hover:text-white transition-colors">
              Facebook
            </a>
          </span>
        </div>
      </div>

      {/* ── Navbar principale ── */}
      <nav className="bg-white dark:bg-[#0a1a30] border-b border-[#0c2448]/8 dark:border-white/6 shadow-sm transition-colors duration-300 relative z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[74px] gap-4">
            {/* Logo */}
            <div className="flex items-center justify-between w-full lg:w-auto">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/Logo_aletheia.png"
                  alt="Logo Aletheia"
                  width={56}
                  height={56}
                  className="w-auto h-[54px] dark:brightness-110"
                  priority
                />
              </Link>

              {/* Burger mobile */}
              <button
                className="lg:hidden p-2 rounded-xl bg-[#f0f4f8] dark:bg-white/8 text-[#0c2448] dark:text-white"
                onClick={() => setIsOpen(true)}
                aria-label="Ouvrir le menu">
                <Menu size={22} />
              </button>
            </div>

            {/* Barre de recherche */}
            <div className="w-full max-w-sm relative hidden lg:block">
              <input
                type="search"
                placeholder="Rechercher un sermon, un événement..."
                className="w-full pl-9 pr-4 h-[38px]
                           border border-[#0c2448]/12 dark:border-white/10 rounded-full
                           bg-[#f5f7fa] dark:bg-white/6 text-sm
                           text-[#0c2448] dark:text-white
                           placeholder:text-[#6b7a8d] dark:placeholder:text-white/30
                           focus:border-[#48a848] focus:ring-2 focus:ring-[#48a848]/12
                           outline-none transition-all"
              />
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7a8d] dark:text-white/30"
                size={14}
              />
            </div>

            {/* Actions */}
            <div className="hidden sm:flex items-center gap-2.5 flex-shrink-0">
              <button
                onClick={toggleDarkMode}
                className="w-[38px] h-[38px] rounded-full
                           border border-[#0c2448]/12 dark:border-white/10
                           bg-transparent hover:bg-[#0c2448] dark:hover:bg-white/8
                           text-[#0c2448] dark:text-[#48a848] hover:text-white
                           flex items-center justify-center transition-all duration-200">
                <motion.div
                  key={darkMode ? "sun" : "moon"}
                  initial={{ rotate: -30, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.18 }}>
                  {darkMode ? <Sun size={15} /> : <Moon size={15} />}
                </motion.div>
              </button>

              <div className="w-px h-5 bg-[#0c2448]/10 dark:bg-white/10" />

              <button
                className="h-[38px] px-5 rounded-full
                                  border border-[#0c2448]/18 dark:border-white/12
                                  text-[12.5px] font-medium text-[#0c2448] dark:text-white
                                  hover:bg-[#0c2448] hover:text-white hover:border-[#0c2448]
                                  dark:hover:bg-white/8 transition-all duration-200">
                Connexion
              </button>
              <button
                className="h-[38px] px-5 rounded-full
                                  bg-[#48a848] hover:bg-[#3a8a3a]
                                  text-[12.5px] font-semibold text-white
                                  transition-all duration-200 hover:-translate-y-0.5
                                  shadow-sm hover:shadow-[#48a848]/30 hover:shadow-md">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Trait vert décoratif */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-[#48a848]/55 to-transparent" />

      {/* ── Barre de navigation flottante (Desktop) ── */}
      <div className="sticky top-0 z-30 w-full py-3 pointer-events-none hidden lg:block">
        <div className="flex justify-center px-4">
          <motion.div
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#0c2448] dark:bg-[#0a1a30] pointer-events-auto
                       inline-flex items-center h-[50px] px-2 gap-0.5
                       rounded-full border border-white/7
                       shadow-[0_10px_36px_rgba(12,36,72,0.28),0_2px_8px_rgba(12,36,72,0.15)]">
            <NavLink href="/" label="Accueil" isActive />
            <Separator />
            <NavApropos />
            <NavSermon />
            <NavLink href="/evenements" label="Événements" />
            <NavLink href="/ministeres" label="Ministères" />
            <Separator />
            <NavLink href="/don" label="Faire un Don" isGreen />
            <Separator />
            <NavLink href="/contact" label="Nous Contacter" />
          </motion.div>
        </div>
      </div>

      {/* ── Sidebar Mobile ── */}
      <SidebarMobile
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </>
  );
}

function Separator() {
  return <div className="w-px h-[18px] bg-white/9 mx-1 flex-shrink-0" />;
}

function NavLink({ href, label, isGreen = false, isActive = false }) {
  return (
    <Link
      href={href}
      className={`relative h-9 px-[15px] rounded-full flex items-center
                  text-[13px] font-medium transition-all duration-200 whitespace-nowrap
                  ${
                    isGreen
                      ? "bg-[#48a848] text-white font-semibold hover:bg-[#3a8a3a] hover:-translate-y-0.5"
                      : isActive
                        ? "bg-white/10 text-white"
                        : "text-white/75 hover:text-white hover:bg-white/8"
                  }`}>
      {label}
    </Link>
  );
}

function SidebarMobile({ isOpen, onClose, darkMode, toggleDarkMode }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed inset-y-0 right-0 w-4/5 max-w-sm
                       bg-[#0c2448] dark:bg-[#080f1e] text-white
                       shadow-2xl z-50 lg:hidden flex flex-col overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-5 border-b border-white/8">
              <div className="flex items-center gap-3">
                <Image
                  src="/Logo_aletheia.png"
                  alt="Aletheia"
                  width={120} // Augmenté pour garantir la netteté avec h-14
                  height={120}
                  className="w-auto h-14 brightness-125 object-contain"
                />
                <span className="text-[#48a848] font-semibold text-lg tracking-wide select-none">
                  ALETHEIA
                </span>
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg bg-white/6 hover:bg-white/10
               flex items-center justify-center transition-colors context-menu-none"
                aria-label="Fermer">
                <X size={18} />
              </button>
            </div>

            {/* Recherche */}
            <div className="px-6 pt-5 pb-2">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Rechercher..."
                  className="w-full pl-9 pr-4 h-10 rounded-xl
                             bg-white/6 border border-white/10
                             text-sm text-white placeholder:text-white/30
                             outline-none focus:border-[#48a848]/50 focus:bg-white/8 transition-all"
                />
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
                  size={14}
                />
              </div>
            </div>

            {/* Liens */}
            <nav className="flex flex-col px-4 py-4 flex-1 gap-0.5">
              <MobileLink href="/" label="Accueil" onClick={onClose} />

              <div className="py-1 border-b border-white/5 mb-1">
                <NavApropos />
              </div>
              <div className="py-1 border-b border-white/5 mb-1">
                <NavSermon />
              </div>

              <MobileLink
                href="/evenements"
                label="Événements"
                onClick={onClose}
              />
              <MobileLink
                href="/ministeres"
                label="Ministères"
                onClick={onClose}
              />

              <Link
                href="/don"
                onClick={onClose}
                className="flex items-center py-3 px-3 rounded-xl mt-1
                           text-[#48a848] font-semibold text-[14px]
                           hover:bg-[#48a848]/10 transition-all">
                Faire un Don
              </Link>

              <MobileLink
                href="/contact"
                label="Nous Contacter"
                onClick={onClose}
              />
            </nav>

            {/* Footer */}
            <div className="p-6 pt-5 border-t border-white/8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[13px] text-white/40">Mode sombre</span>
                <button
                  onClick={toggleDarkMode}
                  className="w-8 h-8 rounded-full bg-white/6 hover:bg-white/10
                             flex items-center justify-center text-[#48a848] transition-colors">
                  {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  className="h-10 rounded-full border border-white/15
                                    text-[13px] font-medium hover:bg-white/6 transition-all">
                  Connexion
                </button>
                <button
                  className="h-10 rounded-full bg-[#48a848] hover:bg-[#3a8a3a]
                                    text-[13px] font-semibold text-white transition-all">
                  S'inscrire
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function MobileLink({ href, label, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center py-3 px-3 rounded-xl
                 text-white/75 hover:text-white text-[14px] font-medium
                 hover:bg-white/5 transition-all">
      {label}
    </Link>
  );
}
