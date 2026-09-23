"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Menu, Clock } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  useUser,
  useAuth,
} from "@clerk/clerk-react";

import NavSermon from "./NavSermon";
import NavApropos from "./NavApropos";
import NavRessources from "./NavRessources";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "@/components/ui/ThemeToggle/ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  function handleSearch(event) {
    event.preventDefault();
    const query = searchQuery.trim();

    if (query) {
      router.push(`/recherche?q=${encodeURIComponent(query)}`);
    }
  }

  let clerkAvailable = true;
  let isSignedIn = false;
  let user = null;
  let isLoaded = false;

  try {
    ({ isSignedIn } = useAuth());
    ({ user, isLoaded } = useUser());
  } catch {
    clerkAvailable = false;
  }

  return (
    <>
      {/* ── Barre supérieure ── */}
      <div className="bg-[#0c2448] border-b border-[#48a848]/20 py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[11px] text-white/45 tracking-wider">
            <Clock size={11} />
            Mercredi · Louange de 17h30 &amp; 19h30 | <Clock size={11} />{" "}
            Dimanche · Service de 09h00 à 12h00
          </span>
          <span className="hidden sm:flex items-center gap-3 text-[11px] text-white/45 tracking-wider">
            Suivez-nous ·
            <a
              href="https://www.youtube.com/results?search_query=aletheia+truth+revealed+church"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5cbd5c] hover:text-white transition-colors">
              YouTube
            </a>
            <a
              href="https://www.facebook.com/search/top/?q=aletheia%20truth%20revealed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5cbd5c] hover:text-white transition-colors">
              Facebook
            </a>
          </span>
        </div>
      </div>

      {/* ── Navbar principale ── */}
      <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-200 relative z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18.5 gap-4">
            <div className="flex items-center justify-between w-full lg:w-auto">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/Logo_aletheia.png"
                  alt="Logo Aletheia"
                  width={72}
                  height={72}
                  className="w-auto h-16.25 dark:brightness-110"
                  priority
                />
              </Link>

              <button
                className="lg:hidden p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 transition-colors duration-200"
                onClick={() => setIsOpen(true)}
                aria-label="Ouvrir le menu">
                <Menu size={22} />
              </button>
            </div>

            <form
              onSubmit={handleSearch}
              className="w-full max-w-sm relative hidden lg:block">
              <input
                type="search"
                placeholder="Rechercher un sermon, un événement..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                aria-label="Rechercher un sermon ou un événement"
                className="w-full pl-9 pr-4 h-9.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-[#48a848] focus:ring-2 focus:ring-[#48a848]/20 outline-none transition-colors duration-200"
              />
              <button
                type="submit"
                aria-label="Lancer la recherche"
                className="absolute left-0 top-0 h-full w-9 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-[#48a848] transition-colors">
                <Search size={14} />
              </button>
            </form>

            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              <ThemeToggle className="w-9.5 h-9.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-[#48a848] flex items-center justify-center transition-colors duration-200" />

              <div className="w-px h-5 bg-slate-200 dark:bg-slate-800" />

              {!clerkAvailable ? (
                <>
                  <button className="h-9.5 px-5 rounded-xl border border-slate-200 dark:border-slate-800 text-[12.5px] font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200">
                    Connexion
                  </button>
                  <button className="h-9.5 px-5 rounded-xl bg-[#48a848] hover:bg-[#3a8a3a] text-[12.5px] font-semibold text-white transition-colors duration-200 shadow-sm">
                    S'inscrire
                  </button>
                </>
              ) : !isSignedIn ? (
                <>
                  <SignInButton mode="modal">
                    <button className="h-9.5 px-5 rounded-xl border border-slate-200 dark:border-slate-800 text-[12.5px] font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200">
                      Connexion
                    </button>
                  </SignInButton>

                  <SignUpButton mode="modal">
                    <button className="h-9.5 px-5 rounded-xl bg-[#48a848] hover:bg-[#3a8a3a] text-[12.5px] font-semibold text-white transition-colors duration-200 shadow-sm">
                      S'inscrire
                    </button>
                  </SignUpButton>
                </>
              ) : (
                <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 py-1 px-1.5 pl-4 rounded-xl border border-slate-200 dark:border-slate-800 transition-colors duration-200">
                  {isLoaded && user && (
                    <span className="text-[12.5px] font-medium text-slate-800 dark:text-slate-200">
                      Bonjour, {user.firstName}
                    </span>
                  )}
                  <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox:
                          "w-8 h-8 border-2 border-[#48a848] shadow-sm",
                      },
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="h-0.75 bg-linear-to-r from-transparent via-[#48a848]/55 to-transparent" />

      <div className="sticky top-0 z-50 w-full py-3 pointer-events-none hidden lg:block">
        <div className="flex justify-center px-4">
          <motion.div
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#0c2448] dark:bg-slate-900 pointer-events-auto inline-flex items-center h-12.5 px-2 gap-0.5 rounded-2xl border border-slate-700/50 dark:border-slate-800 shadow-xl relative transition-colors duration-200">
            <NavLink href="/" label="Accueil" activePath={pathname} />
            <Separator />
            <NavApropos activePath={pathname} />
            <NavSermon activePath={pathname} />
            <NavRessources activePath={pathname} />
            <NavLink
              href="/ministeres"
              label="Ministères"
              activePath={pathname}
            />
            <Separator />
            <NavLink
              href="/don"
              label="Faire un Don"
              isGreen
              activePath={pathname}
            />
            <Separator />
            <NavLink
              href="/contact"
              label="Nous Contacter"
              activePath={pathname}
            />
          </motion.div>
        </div>
      </div>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        user={user}
        isLoaded={isLoaded}
        isSignedIn={isSignedIn}
        renderDropdowns={(onClose) => (
          <>
            <div className="py-1 border-b border-white/5 mb-1">
              <NavApropos isMobile={true} onCloseMobile={onClose} />
            </div>
            <div className="py-1 border-b border-white/5 mb-1">
              <NavSermon isMobile={true} onCloseMobile={onClose} />
            </div>
            <div className="py-1 border-b border-white/5 mb-1">
              <NavRessources isMobile={true} onCloseMobile={onClose} />
            </div>
          </>
        )}
      />
    </>
  );
}

function Separator() {
  return <div className="w-px h-4.5 bg-white/9 mx-1 shrink-0" />;
}

function NavLink({ href, label, isGreen, activePath }) {
  const isActive = activePath === href;

  return (
    <Link
      href={href}
      className={`type-nav relative px-4 py-2 rounded-full transition-colors duration-200 z-10 flex items-center justify-center ${
        isGreen
          ? "text-[#5cbd5c] hover:text-white"
          : isActive
            ? "text-white font-semibold"
            : "text-slate-300 hover:text-white"
      }`}>
      <span className="relative z-20">{label}</span>

      {isActive && (
        <motion.div
          layoutId="active-pill"
          className="absolute inset-0 rounded-full border border-[#48a848] bg-[#48a848]/20 z-10"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}
