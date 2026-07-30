// src/component/home/HeroSlider.jsx
"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

// Importation des styles essentiels de Swiper
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import HeroContent from "./HeroContent";

const slides = [
  {
    id: 1,
    img: "/1.jpg",
    title: "Révéler la Vérité,",
    highlight: "Transformer les Vies",
    sub: "Bienvenue à Aletheia–Truth Revealed Church. Une communauté passionnée par Christ.",
  },
  {
    id: 2,
    img: "/2.jpg",
    title: "La Parole de Dieu,",
    highlight: "Notre Seule Boussole",
    sub: "Découvrez des enseignements qui impactent votre quotidien et fortifient votre foi.",
  },
  {
    id: 3,
    img: "/3.jpg",
    title: "Vivre Ensemble,",
    highlight: "Grandir en Christ",
    sub: "Là où la vérité transforme les vies et restaure les cœurs.",
  },
  {
    id: 5,
    img: "/5.png",
    title: "Une Famille,",
    highlight: "Pour vous Accueillir",
    sub: "Rejoignez-nous chaque dimanche à Kinindo pour un moment unique de louange.",
  },
];

export default function HeroSlider() {
  return (
    <section className="h-[80vh] md:h-[90vh] w-full relative bg-slate-950 overflow-hidden">
      <Swiper
        effect={"fade"}
        speed={1000}
        loop={false}
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
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            {/* IMAGE DE FOND OPTIMISÉE */}
            <Image
              src={slide.img}
              alt={slide.title}
              fill
              priority={i === 0}
              className="object-cover brightness-[0.4]"
            />

            {/* OVERLAY GRADIENT (Comme sur la maquette) */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 via-transparent to-blue-950/80 z-10" />

            {/* CONTENU TEXTUEL */}
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

      {/* PERSONNALISATION DES POINTS DE PAGINATION */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.6;
        }
        .swiper-pagination-bullet-active {
          background: #22c55e !important;
          width: 20px;
          border-radius: 4px;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
