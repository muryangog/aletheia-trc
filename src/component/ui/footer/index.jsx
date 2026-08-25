import Link from "next/link";
import Image from "next/image";
import ContactInfo from "./Adresse&Whatsapp";

// ── Couleurs Aletheia ──────────────────────────────────────────────────────
// Bleu marine principal : #0c2448 | Vert signature : #48a848

const currentYear = new Date().getFullYear();

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos/vision", label: "Vision" },
  { href: "/a-propos/equipe", label: "Équipe" },
  { href: "/sermons/audio", label: "Audios" },
  { href: "/sermons/radio", label: "Radio Aletheia" },
  { href: "/ressources/evenements", label: "Événements" },
  { href: "/ressources/devotion", label: "Dévotion" },
  { href: "/ressources/nouveaux-convertis", label: "Nouveaux Convertis" },
  { href: "/ministeres", label: "Ministères" },
  { href: "/contact", label: "Nous contacter" },
];

const socials = [
  {
    label: "X / Twitter",
    href: "https://x.com/AletheiaTRC",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/search/top/?q=aletheia%20truth%20revealed",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/aletheia_truth_revealed/",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Threads",
    href: "https://www.threads.net/@aletheia_truth_revealed",
    icon: (
      <svg width="15" height="15" viewBox="0 0 192 192" fill="currentColor">
        <path d="M141.537 88.988a66.667 66.667 0 00-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.229c8.249.053 14.474 2.452 18.503 7.129 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.371-39.134 15.264-38.105 34.568.522 9.792 5.4 18.216 13.735 23.719 7.047 4.652 16.124 6.927 25.557 6.412 12.458-.683 22.231-5.436 29.049-14.127 5.178-6.6 8.453-15.153 9.899-25.93 5.937 3.583 10.337 8.298 12.767 13.966 4.132 9.635 4.373 25.468-8.546 38.376-11.319 11.308-24.925 16.2-45.488 16.351-22.809-.169-40.06-7.484-51.275-21.742C35.236 129.342 29.889 111.02 29.714 88c.175-23.02 5.522-41.342 15.89-54.474C56.819 19.268 74.07 11.953 96.88 11.784c22.96.17 40.526 7.52 52.208 21.85 5.733 7.08 10.02 15.96 12.79 26.44l16.215-4.325c-3.43-12.931-8.785-24.076-16.059-33.158C147.036 6.812 125.202-1.229 96.972-1.429h-.072C68.805-1.229 47.235 6.842 32.396 22.77 19.183 36.986 12.343 57.149 12.14 83.02v.96c.203 25.86 7.043 46.024 20.314 60.271 14.839 15.928 36.409 24 64.613 24.2h.072c25.317-.173 43.167-6.832 57.981-21.56 19.406-19.244 18.797-43.33 12.427-58.135-4.568-10.65-13.147-19.059-25.01-24.768z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/results?search_query=aletheia+truth+revealed+church",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0c2448] dark:bg-[#071324] text-slate-300 transition-colors duration-300 relative overflow-hidden">
      {/* Ligne décorative supérieure */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-[#48a848]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── TOP : Logo / Marque + Réseaux ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 border-b border-white/10 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Image
              src="/Logo_aletheia.png"
              alt="Logo Aletheia"
              width={110}
              height={110}
              className="w-auto h-[55px] brightness-110 object-contain"
            />
            <div className="flex flex-col items-start text-left gap-0.5">
              <span className="text-lg font-bold tracking-wider text-white">
                ALETHE<span className="text-[#48a848]">IA</span>
              </span>
              <span className="text-[9px] tracking-[0.18em] uppercase text-white/45">
                Truth Revealed Church · Kinindo
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-end">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 bg-white/5
                           flex items-center justify-center
                           text-white/70 hover:bg-[#48a848] hover:border-[#48a848]
                           hover:text-white hover:-translate-y-0.5 transition-all duration-200 shadow-sm flex-shrink-0">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* ── MIDDLE : Rubriques empilées & centrées ── */}
        <div className="flex flex-col py-8 divide-y divide-white/10 border-b border-white/10">
          {/* 1. Navigation Rapide (Centrée) */}
          <div className="pb-8 flex flex-col items-center text-center">
            <p className="text-[11px] tracking-[0.18em] uppercase text-[#5cbd5c] mb-4 font-semibold">
              Navigation Rapide
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-3.5 py-1.5 rounded-full text-[12.5px] font-medium
                             text-slate-300 border border-white/10 bg-white/5
                             hover:bg-[#48a848]/20 hover:border-[#48a848]/50 hover:text-white
                             transition-all duration-200 whitespace-nowrap">
                  {l.label}
                </Link>
              ))}
              <Link
                href="/don"
                className="px-4 py-1.5 rounded-full text-[12.5px] font-semibold
                           bg-[#48a848] hover:bg-[#3a8a3a] text-white shadow-sm
                           transition-all duration-200 whitespace-nowrap">
                Faire un don
              </Link>
            </div>
          </div>

          {/* 2. Programme des Cultes (Centré) */}
          <div className="py-8 flex flex-col items-center text-center">
            <p className="text-[11px] tracking-[0.18em] uppercase text-[#5cbd5c] mb-4 font-semibold">
              Programme des Cultes
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/8 flex items-center justify-center gap-3 text-left">
                <div className="w-8 h-8 rounded-xl bg-[#48a848]/15 border border-[#48a848]/30 flex items-center justify-center text-[#5cbd5c] flex-shrink-0">
                  <Clock size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Mercredi</h4>
                  <p className="text-[12px] text-slate-300">17h30 – 19h30</p>
                  <span className="text-[10px] text-[#5cbd5c] font-medium">
                    Culte de Louange
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/8 flex items-center justify-center gap-3 text-left">
                <div className="w-8 h-8 rounded-xl bg-[#48a848]/15 border border-[#48a848]/30 flex items-center justify-center text-[#5cbd5c] flex-shrink-0">
                  <Clock size={16} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Dimanche</h4>
                  <p className="text-[12px] text-slate-300">09h00 – 12h30</p>
                  <span className="text-[10px] text-[#5cbd5c] font-medium">
                    Culte Dominical
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Nous Trouver (Centré) */}
          <div className="pt-8 flex flex-col items-center text-center">
            <p className="text-[11px] tracking-[0.18em] uppercase text-[#5cbd5c] mb-4 font-semibold">
              Nous Trouver
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* <ContactRow
                icon={<MapPin />}
                label="Kinindo, Bujumbura, Burundi"
              /> */}
              <ContactInfo />
            </div>
          </div>
        </div>

        {/* ── BOTTOM : Copyright ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-6 text-xs text-white/40 text-center sm:text-left">
          <p>
            Copyright © {currentYear} · Tous droits réservés par{" "}
            <span className="text-[#5cbd5c] font-medium">MuryangoDev</span>
          </p>
          <p className="tracking-widest uppercase text-[10px]">
            Aletheia Truth Revealed Church
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── Composants d'icônes & helpers ─────────────────────────────────
function MapPin() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function Clock({ size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ContactRow({ icon, label }) {
  return (
    <div className="flex items-center gap-3 text-xs text-slate-300">
      <div className="w-8 h-8 rounded-xl bg-[#48a848]/15 border border-[#48a848]/30 flex items-center justify-center text-[#5cbd5c] flex-shrink-0">
        {icon}
      </div>
      <span>{label}</span>
    </div>
  );
}
