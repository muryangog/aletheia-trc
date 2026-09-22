"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroContent({ title, sub, id }) {
  return (
    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 md:px-6 pointer-events-none">
      <div className="max-w-5xl mx-auto w-full pointer-events-auto pb-16">
        <motion.h1
          key={`title-${id}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="type-page-title text-white mb-6 font-display leading-tight drop-shadow-2xl">
          {title}
        </motion.h1>

        <motion.p
          key={`sub-${id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
          {sub}
        </motion.p>

        <motion.div
          key={`btns-${id}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Link
            href="/contact"
            className="inline-flex justify-center items-center bg-[#48a848] hover:bg-[#3a8a3a] text-white px-10 py-3.5 rounded-lg font-bold transition-colors duration-150 shadow-lg text-lg min-w-[200px]">
            Nous Contacter
          </Link>

          <Link
            href="/sermons/videos"
            className="inline-flex justify-center items-center border border-white/50 hover:bg-[#0c2448] text-white px-10 py-3.5 rounded-lg font-bold transition-colors duration-150 text-lg min-w-[200px]">
            Derniers Sermons
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
