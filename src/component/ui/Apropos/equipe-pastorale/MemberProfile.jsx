"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  ArrowLeft,
  Flame,
  Heart,
  Sparkles,
  BookOpen,
  ShieldCheck,
  UserCheck,
  Calendar,
  Quote,
} from "lucide-react";

const MEMBERS_DATA = {
  "evrard-sinagaye": {
    name: "Prophet Evrard SINAGAYE",
    role: "Fondateur & Père Spirituel",
    image: "/equipe/evrard-sinagaye.jpg",
    bio: "Prophet Evrard Sinagaye est le fondateur de l'église Aletheia Truth Revealed Church. Choisi et oint par la seule grâce souveraine de Dieu pour dispenser la Parole de Vérité (Aletheia) non diluée, son ministère se caractérise par des enseignements profonds, axés sur la révélation de Christ dans les Écritures et la manifestation concrète des dons de l'Esprit Saint.",
    testimony: "« J'ai reçu le mandat ministériel avec une directive claire du Seigneur : prêcher la Vérité pure sans compromis ni dilution pour affranchir les âmes. Mon fardeau quotidien et ma prière sont de voir l'Église de Jésus-Christ atteindre la pleine maturité spirituelle et manifester la stature parfaite de Christ sur la terre. »",
    vision: "Équiper et affermir les croyants dans leur identité en Christ à travers la saine doctrine pour bâtir une génération sainte et victorieuse.",
    favoriteVerse: "Actes 20:24 - « Mais je ne fais aucun cas de ma vie, comme si elle m'était précieuse, pourvu que j'accomplisse ma course avec joie, et le ministère que j'ai reçu du Seigneur Jésus, pour annoncer la bonne nouvelle de la grâce de Dieu. »",
    contact: "evrard.sinagaye@aletheiatrc.bi",
    icon: <Flame size={20} className="text-[#48a848]" />,
  },
  "ines-sinagaye": {
    name: "Minister Ines SINAGAYE",
    role: "Servante de Dieu & Sœur en Christ",
    image: "/equipe/ines-sinagaye.jpg",
    bio: "Minister Ines Sinagaye travaille aux côtés de son époux, le Prophète Evrard Sinagaye. Très impliquée dans le développement spirituel des familles et des foyers au sein d'Aletheia, elle apporte sa sensibilité et sa rigueur chrétienne pour encadrer et conseiller les couples, les femmes ainsi que la jeunesse de l'église locale.",
    testimony: "« Servir à côté de mon époux et prendre soin du troupeau d'Aletheia est un immense privilège divin. Constater chaque semaine comment la grâce divine restaure des vies brisées et guérit les cœurs blessés est ma plus grande source de joie et d'encouragement dans le ministère. »",
    vision: "Restaurer les valeurs familiales fondées sur les principes du Royaume de Dieu et inspirer un engagement fervent des femmes chrétiennes.",
    favoriteVerse: "Proverbes 31:30 - « La grâce est trompeuse, et la beauté est vaine; la femme qui craint l'Éternel est celle qui sera louée. »",
    contact: "ines.sinagaye@aletheiatrc.bi",
    icon: <Heart size={20} className="text-[#48a848]" />,
  },
  "eric-bimenyimana": {
    name: "Pastor Eric BIMENYIMANA",
    role: "Ministère Pastoral & Doctrine",
    image: "/equipe/eric-bimenyimana.jpg",
    bio: "Pastor Eric Bimenyimana est un enseignant de la Parole passionné d'exégèse et d'herméneutique biblique. Il est le principal responsable des programmes d'affermissement doctrinal au sein de la communauté Aletheia, supervisant particulièrement la PLEROMA Class ainsi que le parcours de discipulat pour les nouveaux membres.",
    testimony: "« Depuis que j'ai rencontré le Christ, mon unique ambition est de sonder la richesse inépuisable des Écritures pour les exposer de manière claire et accessible. Enseigner et affermir les bases doctrinales des fidèles est ma plus belle tâche. »",
    vision: "Bâtir des croyants inébranlables par la connaissance systématique de la saine doctrine pour éliminer toute confusion ou dérive spirituelle.",
    favoriteVerse: "2 Timothée 2:15 - « Efforce-toi de te présenter devant Dieu comme un homme éprouvé, un ouvrier qui n'a point à rougir, qui dispense droitement la parole de la vérité. »",
    contact: "eric.bimenyimana@aletheiatrc.bi",
    icon: <BookOpen size={20} className="text-[#48a848]" />,
  },
  "grace-bimenyimana": {
    name: "Pastor Grace BIMENYIMANA",
    role: "Ministère Pastoral & Intercession",
    image: "/equipe/mama-grace.jpg",
    bio: "Pastor Grace Bimenyimana est une femme de prière consacrée à l'intercession et au suivi pastoral. Responsable des cellules d'intercession d'Aletheia, elle coordonne les chaînes de prière continue et veille à ce que l'église soit constamment sous la couverture de la prière.",
    testimony: "« La prière est la respiration de notre ministère et de l'église. J'ai vu à maintes reprises des situations impossibles se dénouer, des corps être guéris et des vies se transformer simplement grâce à une foi persistante et à l'intercession commune des saints. »",
    vision: "Bâtir un autel de prière ininterrompu au sein d'Aletheia pour soutenir spirituellement tous les projets et les besoins de la communauté.",
    favoriteVerse: "Philippiens 4:6 - « Ne vous inquiétez de rien; mais en toute chose faites connaître vos besoins à Dieu par des prières et des supplications, avec des actions de grâces. »",
    contact: "grace.bimenyimana@aletheiatrc.bi",
    icon: <UserCheck size={20} className="text-[#48a848]" />,
  },
  "odilon-ntwari": {
    name: "Apostle Odilon NTWARI",
    role: "Ministère Apostolique & Missions",
    image: "/equipe/odilon-ntwari.jpg",
    bio: "Apostle Odilon Ntwari est chargé du développement extérieur et des missions d'implantation d'églises chez Aletheia TRC. Son travail apostolique l'amène à parcourir de nombreuses régions pour fonder de nouvelles cellules de prière et accompagner les responsables locaux.",
    testimony: "« L'Évangile ne doit pas rester enfermé dans les murs de nos églises. Le mandat missionnaire nous commande d'aller prêcher la Parole partout où elle n'est pas encore entendue. Chaque cellule plantée est un phare de lumière dans les ténèbres. »",
    vision: "Étendre l'impact géographique d'Aletheia par l'établissement régulier de nouvelles églises locales autonomes et dynamiques.",
    favoriteVerse: "Matthieu 28:19 - « Allez, faites de toutes les nations des disciples, les baptisant au nom du Père, du Fils et du Saint-Esprit. »",
    contact: "odilon.ntwari@aletheiatrc.bi",
    icon: <ShieldCheck size={20} className="text-[#48a848]" />,
  },
  "divin-nduwumwami": {
    name: "Apostle Divin NDUWUMWAMI",
    role: "Ministère Apostolique & Évangélisation",
    image: "/equipe/apostle-divin.jpg",
    bio: "Apostle Divin Nduwumwami est un évangéliste zélé et un leader spirituel charismatique. À la tête du département de mobilisation de l'église, il anime les sorties d'évangélisation de rue, les campagnes de plein air et veille à l'accueil chaleureux des nouveaux croyants.",
    testimony: "« Rien ne surpasse la joie de voir une âme accepter Jésus-Christ comme son Sauveur personnel. L'Évangile est la puissance de Dieu pour le salut de quiconque croit, et ma vie entière est vouée à le crier sur les toits. »",
    vision: "Mobiliser la communauté d'Aletheia pour en faire une église activement évangélique et orientée vers la conquête des âmes perdues.",
    favoriteVerse: "Romains 1:16 - « Car je n'ai point honte de l'Évangile: c'est une puissance de Dieu pour le salut de quiconque croit, du Juif d'abord, puis du Grec. »",
    contact: "divin.nduwumwami@aletheiatrc.bi",
    icon: <Sparkles size={20} className="text-[#48a848]" />,
  },
  "joselyne-irankunda": {
    name: "Pastor Josélyne IRANKUNDA",
    role: "Ministère Pastoral & Administration",
    image: "/equipe/pastor-joselyne-irankunda.jpg",
    bio: "Pastor Joselyne Irankunda coordonne les activités administratives d'Aletheia et gère les relations internationales avec nos partenaires extérieurs. Par son action ordonnée, elle soutient la logistique globale du ministère et la tenue des événements majeurs.",
    testimony: "« L'ordre et l'excellence administrative reflètent la gloire de notre Seigneur. Veiller à la saine administration de la maison de Dieu est un ministère d'intendance sacré auquel je me consacre avec joie et dévouement. »",
    vision: "Assurer une gestion irréprochable des ressources du ministère et faciliter l'expansion internationale des projets d'Aletheia.",
    favoriteVerse: "1 Corinthiens 14:40 - « Mais que tout se fasse avec bienséance et avec ordre. »",
    contact: "joselyne.irankunda@aletheiatrc.bi",
    icon: <ShieldCheck size={20} className="text-[#48a848]" />,
  },
};

export default function MemberProfile({ id }) {
  const member = MEMBERS_DATA[id];

  if (!member) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-2xl font-bold text-white mb-2">Profil non trouvé</h2>
        <p className="text-slate-400 mb-6">Le profil de ce membre n'existe pas ou a été déplacé.</p>
        <Link
          href="/a-propos/equipe"
          className="inline-flex items-center gap-2 bg-[#48a848] text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all">
          <ArrowLeft size={14} /> Retour à l'équipe
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pb-20 transition-colors duration-300 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#48a848]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#0c2448]/40 rounded-full blur-3xl pointer-events-none" />

      {/* Navigation Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-10">
        <Link
          href="/a-propos/equipe"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-all text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 px-4 py-2 rounded-full">
          <ArrowLeft size={13} />
          Retour à l'équipe
        </Link>
      </div>

      {/* Main Profile Info */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Panel: Photo and short info */}
          <div className="bg-slate-900/80 border border-white/5 p-6 rounded-[2.5rem] shadow-xl text-center space-y-6">
            <div className="relative w-full aspect-square md:max-w-sm mx-auto rounded-[2rem] overflow-hidden border border-white/10 shadow-lg bg-slate-850 flex items-center justify-center">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                <span className="text-xl font-bold font-serif opacity-30">Aletheia</span>
              )}
            </div>

            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#48a848]/20 border border-[#48a848]/40 text-[#5cbd5c] text-xs font-bold uppercase tracking-wider">
                {member.role}
              </span>
              <h2 className="text-2xl font-extrabold text-white font-serif">{member.name}</h2>
            </div>

            <div className="pt-6 border-t border-white/5 space-y-3">
              <a
                href={`mailto:${member.contact}`}
                className="w-full py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white text-xs font-bold transition-all flex items-center justify-center gap-2">
                <Mail size={14} />
                {member.contact}
              </a>
              <a
                href={`https://wa.me/25779006007?text=Bonjour,%20je%20souhaite%20contacter%20${encodeURIComponent(member.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md">
                <Phone size={14} />
                Contacter sur WhatsApp
              </a>
            </div>
          </div>

          {/* Right Panel: Biography and testimonies */}
          <div className="lg:col-span-2 space-y-8">
            {/* Biography */}
            <div className="bg-slate-900/50 border border-white/5 p-8 rounded-[2rem] space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2.5">
                {member.icon}
                Biographie & Appel
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {member.bio}
              </p>
            </div>

            {/* Testimony */}
            {member.testimony && (
              <div className="bg-[#0c2448]/30 border border-[#48a848]/25 p-8 rounded-[2rem] relative overflow-hidden space-y-4">
                <div className="absolute top-4 right-4 text-white/5">
                  <Quote size={80} />
                </div>
                <h3 className="text-lg font-bold text-[#5cbd5c] flex items-center gap-2.5">
                  <Flame size={20} />
                  Témoignage Personnel
                </h3>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic font-serif">
                  {member.testimony}
                </p>
              </div>
            )}

            {/* Vision & Favorite Verse */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Vision */}
              <div className="bg-slate-900/50 border border-white/5 p-6 rounded-[2rem] space-y-3">
                <h4 className="font-bold text-sm text-white flex items-center gap-2">
                  <Sparkles size={16} className="text-[#48a848]" />
                  Vision Ministérielle
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {member.vision}
                </p>
              </div>

              {/* Favorite Verse */}
              <div className="bg-slate-900/50 border border-white/5 p-6 rounded-[2rem] space-y-3">
                <h4 className="font-bold text-sm text-white flex items-center gap-2">
                  <BookOpen size={16} className="text-[#48a848]" />
                  Verset Préféré
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  {member.favoriteVerse}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
