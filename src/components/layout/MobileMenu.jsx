"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search } from "lucide-react";
import { SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";
import ThemeToggle from "@/components/ui/ThemeToggle/ThemeToggle";

export default function MobileMenu({
  isOpen,
  onClose,
  user,
  isLoaded,
  isSignedIn,
  renderDropdowns,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#071324]/75 z-50 lg:hidden"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-[#0c2448] dark:bg-[#071324] text-white shadow-lg z-50 lg:hidden flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between p-6 pb-5 border-b border-[#294466]">
              <div className="flex items-center">
                <Image
                  src="/Logo_aletheia.png"
                  alt="Aletheia"
                  width={140}
                  height={140}
                  className="w-auto h-16 brightness-125 object-contain"
                />
              </div>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg bg-[#12305a] hover:bg-[#294466] flex items-center justify-center transition-colors duration-150"
                aria-label="Fermer le menu">
                <X size={18} />
              </button>
            </div>

            <div className="px-6 pt-5 pb-2">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Rechercher..."
                  className="w-full pl-9 pr-4 h-10 rounded-lg bg-[#12305a] border border-[#294466] text-sm text-white placeholder:text-[#9fb0c4] outline-none focus:border-[#48a848] transition-colors duration-150"
                />
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30"
                  size={14}
                />
              </div>
            </div>

            <nav className="flex flex-col px-4 py-4 flex-1 gap-0.5">
              <Link
                href="/"
                onClick={onClose}
                className="type-nav flex items-center py-3 px-3 rounded-lg text-white/75 hover:text-white hover:bg-[#12305a] transition-colors duration-150">
                Accueil
              </Link>

              {renderDropdowns && renderDropdowns(onClose)}

              <Link
                href="/ministeres"
                onClick={onClose}
                className="type-nav flex items-center py-3 px-3 rounded-lg text-white/75 hover:text-white hover:bg-[#12305a] transition-colors duration-150">
                Ministères
              </Link>

              <Link
                href="/don"
                onClick={onClose}
                className="type-nav flex items-center py-3 px-3 rounded-lg mt-1 text-[#48a848] font-semibold hover:bg-[#48a848]/10 transition-colors duration-150">
                Faire un Don
              </Link>

              <Link
                href="/contact"
                onClick={onClose}
                className="type-nav flex items-center py-3 px-3 rounded-xl text-white/75 hover:text-white hover:bg-white/5 transition-all">
                Nous Contacter
              </Link>
            </nav>

            <div className="p-6 pt-5 border-t border-[#294466] space-y-4">
              <div className="flex items-center justify-between">
                <span className="type-small text-white/60">
                  Thème de l'application
                </span>
                <ThemeToggle className="w-8 h-8 rounded-lg bg-[#12305a] hover:bg-[#294466] flex items-center justify-center text-[#48a848] transition-colors duration-150" />
              </div>

              {!isSignedIn ? (
                <div className="grid grid-cols-2 gap-3">
                  <SignInButton mode="modal">
                    <button
                      onClick={onClose}
                      className="type-button w-full h-10 rounded-lg border border-[#294466] hover:bg-[#12305a] transition-colors duration-150">
                      Connexion
                    </button>
                  </SignInButton>

                  <SignUpButton mode="modal">
                    <button
                      onClick={onClose}
                      className="type-button w-full h-10 rounded-lg bg-[#48a848] hover:bg-[#3a8a3a] text-white transition-colors duration-150">
                      S'inscrire
                    </button>
                  </SignUpButton>
                </div>
              ) : (
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#12305a] border border-[#294466]">
                  <div className="flex flex-col">
                    <span className="text-xs text-[#48a848] font-semibold">
                      Mon Compte
                    </span>
                    {isLoaded && user && (
                      <span className="text-sm font-medium text-white">
                        {user.firstName} {user.lastName}
                      </span>
                    )}
                  </div>
                  <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: "w-10 h-10 border-2 border-[#48a848]",
                      },
                    }}
                  />
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
