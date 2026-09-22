"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import HeroContent from "./HeroContent";
import SermonFilter from "./SermonFilter";
import { HERO_SLIDES } from "@/data/home.data";

export default function Hero() {
  return (
    <section className="h-[85vh] md:h-[90vh] w-full relative bg-slate-950 overflow-hidden">
      {/* 1. CARROUSEL D'IMAGES ET TEXTE ANIMÉ */}
      <Swiper
        effect={"fade"}
        speed={1000}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="h-full w-full">
        {HERO_SLIDES.map((slide, i) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            <Image
              src={slide.img}
              alt={slide.title}
              fill
              priority={i === 0}
              className="object-cover brightness-[0.4]"
            />

            <div className="absolute inset-0 bg-linear-to-b from-blue-950/60 via-transparent to-blue-950/80 z-10 pointer-events-none" />

            <HeroContent
              id={slide.id}
              title={
                <>
                  {slide.title} <br />
                  <span className="text-green-500">{slide.highlight}</span>
                </>
              }
              sub={slide.sub}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 2. BARRE DE RECHERCHE FIXE EN BAS DU HERO (HORS SWIPER) */}
      <div className="absolute bottom-6 left-0 right-0 z-30 px-4 pointer-events-auto">
        <SermonFilter />
      </div>

      <style jsx global>{`
        .swiper-pagination {
          bottom: 110px !important;
        }
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.6;
        }
        .swiper-pagination-bullet-active {
          background: #22c55e !important;
          opacity: 1;
          width: 24px;
          border-radius: 9999px;
        }
      `}</style>
    </section>
  );
}
