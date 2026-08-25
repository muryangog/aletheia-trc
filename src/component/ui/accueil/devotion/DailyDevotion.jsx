"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Share2,
  Play,
  Heart,
  MessageCircle,
  ArrowUpRight,
  Radio,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import DevotionNav from "./DevotionNav";

const FacebookIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-blue-600 dark:text-blue-400">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const YoutubeIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-red-600">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default function DailyDevotion() {
  const [activeTab, setActiveTab] = useState("read");
  const [lang, setLang] = useState("fr");

  const devotions = {
    fr: {
      title: "FAIRE CONFIANCE À DIEU SEULEMENT",
      ref: "Matthieu 14:28-32",
      text: "Dans les moments de tempête, nos yeux ont tendance à se fixer sur la hauteur des vagues plutôt que sur la fidélité de Dieu. Lorsque Pierre a détourné ses yeux de Jésus pour regarder au vent fort, il a commencé à enfoncer. Mais la bonne nouvelle, c'est que la main de Jésus est toujours tendue pour nous secourir. Ne laissez pas les circonstances dicter votre foi. Regardez à Jésus, le chef et le consommateur de notre foi.",
      date: "Aujourd'hui à 08:30",
      likes: "154",
      comments: "28",
    },
    kr: {
      title: "KWIZIGIRA IMANA GUSA",
      ref: "Matayo 14:28-32",
      text: "Mu bihe vy'ibihuhusi, amaso yacu akunze kwihweza uburebure bw'imipfunda aho kwihweza ukwizigirwa kw'Imana. Igihe Petero yakura amaso yiwe kuri Yesu akayerekeza ku muyaga ukomeye, yarashotse. Ariko inkuru nziza nuko ukuboko kwa Yesu guhoro kurambutse ngo kudutabare. Ntabwo dukwiye kureka ibihe bituyobora, ahubwo ntiworere amaso kuri Yesu we ntangiriro n'iherezo ry'ukwizera kwacu.",
      date: "Uyu musi isaha 08:30",
      likes: "189",
      comments: "42",
    },
    en: {
      title: "TRUSTING GOD ALONE",
      ref: "Matthew 14:28-32",
      text: "In times of storms, our eyes tend to focus on the height of the waves rather than God's faithfulness. When Peter took his eyes off Jesus to look at the strong wind, he began to sink. But the good news is, Jesus' hand is always stretched out to rescue us. Do not let circumstances dictate your faith. Keep your eyes on Jesus, the author and finisher of our faith.",
      date: "Today at 08:30",
      likes: "142",
      comments: "19",
    },
  };

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <DevotionNav />
      <div className="max-w-6xl mx-auto px-4 mt-8">
        {/* Onglets principaux */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("read")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
              activeTab === "read"
                ? "bg-[#48a848] text-white shadow-md shadow-[#48a848]/25"
                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750"
            }`}>
            <BookOpen size={16} />
            Dévotion Quotidienne
          </button>

          <button
            onClick={() => setActiveTab("live")}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
              activeTab === "live"
                ? "bg-red-600 text-white shadow-md shadow-red-650/25"
                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-750"
            }`}>
            <YoutubeIcon />
            Flux Direct (Live)
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            {activeTab === "read" ? (
              <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200/80 dark:border-slate-700/50 overflow-hidden">
                {/* Header du post style Facebook */}
                <div className="p-6 pb-4 border-b border-slate-100 dark:border-slate-700/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border border-slate-100 dark:border-slate-700 bg-slate-100">
                      <Image
                        src="/Logo_aletheia.png"
                        alt="Logo Aletheia"
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-sm text-[#0c2448] dark:text-white leading-tight">
                          Aletheia Truth Revealed Church
                        </span>
                        <span className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-[8px] font-bold">
                          ✓
                        </span>
                      </div>
                      <span className="text-[11px] text-slate-400 font-medium block">
                        {devotions[lang].date} · Publié par l'équipe Média · 🌐
                      </span>
                      <div className="flex items-center gap-1 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[9px] text-emerald-600 dark:text-emerald-405 font-bold uppercase tracking-wider">
                          Facebook Live Sync
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Sélecteur de langue */}
                  <div className="flex gap-1 bg-slate-100 dark:bg-slate-900 p-1 rounded-xl">
                    {["kr", "fr", "en"].map((l) => (
                      <button
                        key={l}
                        onClick={() => setLang(l)}
                        className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase transition-all ${
                          lang === l
                            ? "bg-[#48a848] text-white shadow-sm"
                            : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                        }`}>
                        {l}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Corps du post */}
                <div className="p-6 md:p-8 space-y-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#48a848]/10 text-[#48a848] text-xs font-bold uppercase tracking-wider">
                    Dévotion du jour
                  </span>
                  <h3 className="text-xl md:text-2xl font-extrabold text-[#0c2448] dark:text-white">
                    {devotions[lang].title}
                  </h3>
                  <p className="text-[#48a848] font-bold text-sm italic">
                    📖 Réf: {devotions[lang].ref}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base whitespace-pre-line">
                    {devotions[lang].text}
                  </p>
                </div>

                {/* Footer du post style Facebook */}
                <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 hover:text-[#48a848] transition-colors cursor-pointer">
                      <Heart size={14} className="text-red-500 fill-red-500" />
                      <strong>{devotions[lang].likes}</strong>
                    </span>
                    <span className="flex items-center gap-1 hover:text-[#48a848] transition-colors cursor-pointer">
                      <MessageCircle size={14} />
                      <strong>{devotions[lang].comments}</strong>
                    </span>
                  </div>

                  <a
                    href="https://www.facebook.com/truthrevealedaletheia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold hover:underline transition-all">
                    <FacebookIcon />
                    Lire sur Facebook
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            ) : (
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-black aspect-video border border-slate-200 dark:border-slate-850 relative group">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/live_stream?channel=UC_TON_ID_ICI"
                  title="Direct YouTube Aletheia TRC"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute top-4 left-4 bg-red-650 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 animate-pulse shadow-md z-15">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  EN DIRECT SUR YOUTUBE
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {/* CARTE PLEROMA */}
            <div className="bg-[#0c2448] p-6 rounded-3xl text-white shadow-xl relative overflow-hidden group border border-white/5">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] [background-size:12px_12px]" />
              <h4 className="text-[#48a848] font-bold text-[10px] uppercase mb-1 tracking-wider">
                Aletheia Academy
              </h4>
              <h3 className="text-xl font-bold mb-3 italic font-serif">
                PLEROMA Class
              </h3>
              <p className="text-slate-300 text-xs mb-5 leading-relaxed">
                Rejoignez nos cours approfondis d'affermissement doctrinal et de
                théologie pratique.
              </p>
              <a
                href="/ministeres"
                className="inline-flex items-center gap-2 bg-white/10 px-4 py-2.5 rounded-xl text-xs font-bold hover:bg-white/20 transition-all text-white border border-white/10">
                Découvrir l'Academy <Play size={10} className="fill-white" />
              </a>
            </div>

            {/* CARTE PODCAST */}
            <div className="bg-[#48a848] p-6 rounded-3xl text-white shadow-xl relative overflow-hidden group border border-white/5">
              <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />
              <h4 className="text-white/80 font-bold text-[10px] uppercase mb-1 tracking-wider">
                Sermons & Audios
              </h4>
              <h3 className="text-xl font-extrabold mb-3 uppercase tracking-tight">
                English Podcast
              </h3>
              <p className="text-white/90 text-xs mb-5 leading-relaxed">
                Revivez les sessions spéciales de réveil spirituel et les
                messages hebdomadaires.
              </p>
              <a
                href="/sermons/audio"
                className="inline-flex items-center gap-2 bg-[#0c2448] hover:bg-[#07162b] px-4 py-2.5 rounded-xl text-xs font-bold shadow-lg transition-all">
                Écouter maintenant <Radio size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
