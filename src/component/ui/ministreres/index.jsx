"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Users,
  Music,
  HeartHandshake,
  Tv,
  Smile,
  Shield,
  Briefcase,
  FileText,
  UserCheck,
  Brush,
  Activity,
  Lock,
  Home,
  Megaphone,
  Globe,
  HandHeart,
  ArrowRight,
  Search,
  X,
  Play,
  Video,
  Info,
} from "lucide-react";

// Données enrichies des départements
const DEPARTMENTS = [
  {
    id: "aletheia-sound",
    category: "Culte & Louange",
    name: "Aletheia Sound",
    leader: "Dir. Louange (Aimee & David)",
    description: "La chorale et le groupe de louange d'Aletheia. Conduit la communauté dans la présence de Dieu à travers des chantres et musiciens passionnés.",
    howItWorks: "Répétitions vocales, répétitions générales et conduite de l'adoration lors des cultes.",
    icon: <Music className="w-6 h-6 text-[#48a848]" />,
    activities: [
      "Animation de la louange et adoration lors de tous les cultes du dimanche et mercredi.",
      "Répétitions hebdomadaires et ateliers de perfectionnement vocal et technique.",
      "Organisation du grand concert annuel de louange et d'adoration.",
      "Enregistrement de compositions et chants originaux inspirés du ministère.",
    ],
    members: [
      { name: "David K.", role: "Directeur de Louange & Pianiste" },
      { name: "Aimee N.", role: "Chantre Principale" },
      { name: "Sarah M.", role: "Soprano" },
      { name: "Jean-Paul N.", role: "Guitariste" },
    ],
    images: ["/2.jpg", "/1.jpg"],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Lien vidéo fictif ou réel
  },
  {
    id: "staff",
    category: "Administration",
    name: "Aletheia Staff",
    leader: "Direction Administrative",
    description: "Assure la gestion globale, la planification stratégique et la coordination des activités de l'église.",
    howItWorks: "Réunions de suivi, planification et gestion opérationnelle.",
    icon: <Briefcase className="w-6 h-6 text-[#48a848]" />,
    activities: [
      "Planification stratégique et calendrier annuel des événements de l'église.",
      "Coordination logistique pour les rassemblements majeurs et conférences.",
      "Gestion administrative des ressources et des locaux de l'église.",
      "Communication interne entre les différents départements.",
    ],
    members: [
      { name: "Pasteur Eric B.", role: "Coordinateur des Ministères" },
      { name: "Pastor Joselyne I.", role: "Secrétaire Générale" },
      { name: "Marc N.", role: "Responsable Logistique" },
    ],
    images: ["/1.jpg", "/3.jpg"],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "secretariat",
    category: "Administration",
    name: "Aletheia Secretariat",
    leader: "Secrétariat Général",
    description: "Gère les données des membres, l'accueil administratif, la correspondance et l'archivage.",
    howItWorks: "Permanences administratives et suivi des fiches de membres.",
    icon: <FileText className="w-6 h-6 text-[#48a848]" />,
    activities: [
      "Gestion de la base de données des fidèles et des nouveaux convertis.",
      "Traitement de la correspondance officielle de l'église.",
      "Délivrance de certificats de baptême, mariage et autres actes officiels.",
      "Accueil physique et téléphonique lors des heures de bureau.",
    ],
    members: [
      { name: "Pastor Joselyne I.", role: "Secrétaire Principale" },
      { name: "Chloé N.", role: "Assistante administrative" },
      { name: "Alain N.", role: "Archiviste" },
    ],
    images: ["/1.jpg", "/6.jpg"],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "media",
    category: "Technique & Média",
    name: "Aletheia Media Team",
    leader: "Responsable Média & Son",
    description: "Gère les retransmissions en direct, la sonorisation technique, la vidéo, la photo et la communication digitale.",
    howItWorks: "Captation live, régie son/vidéo et création de contenus.",
    icon: <Tv className="w-6 h-6 text-[#48a848]" />,
    activities: [
      "Retransmission en direct des cultes sur YouTube et Facebook (Live Sync).",
      "Prise de photos et vidéos de tous les événements de la communauté.",
      "Gestion de la sonorisation et de l'éclairage de la salle de culte.",
      "Création de visuels et gestion des réseaux sociaux officiels.",
    ],
    members: [
      { name: "Thierry N.", role: "Directeur Technique" },
      { name: "Clément K.", role: "Ingénieur du Son" },
      { name: "Bella I.", role: "Photographe" },
      { name: "Olivier M.", role: "Régisseur Vidéo" },
    ],
    images: ["/6.jpg", "/2.jpg"],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "protocol",
    category: "Accueil & Ordre",
    name: "Aletheia Protocole",
    leader: "Comité Protocole",
    description: "Accueille chaleureusement les fidèles et visiteurs et veille au bon déroulement de l'ordre durant le culte.",
    howItWorks: "Accueil à l'entrée, placement des personnes et service d'ordre.",
    icon: <UserCheck className="w-6 h-6 text-[#48a848]" />,
    activities: [
      "Accueil personnalisé des fidèles et des invités dès leur arrivée.",
      "Orientation et placement optimal dans la salle de culte.",
      "Distribution des enveloppes de dons et autres documents de communication.",
      "Gestion des besoins de l'équipe pastorale durant les services.",
    ],
    members: [
      { name: "Jean-Claude M.", role: "Responsable Protocole" },
      { name: "Fabiola N.", role: "Adjointe Accueil" },
      { name: "Christian U.", role: "Protocole Culte" },
    ],
    images: ["/6.jpg", "/3.jpg"],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "security",
    category: "Accueil & Ordre",
    name: "Aletheia Security Team",
    leader: "Responsable Sécurité",
    description: "Veille à la sécurité des personnes, du matériel et au bon stationnement lors des rassemblements.",
    howItWorks: "Surveillance du site, gestion des flux et prévention.",
    icon: <Shield className="w-6 h-6 text-[#48a848]" />,
    activities: [
      "Sécurisation des accès à l'église lors de tous les événements.",
      "Gestion du parking et orientation des véhicules des fidèles.",
      "Surveillance générale pour prévenir tout incident ou perturbation.",
      "Secourisme de premier niveau en cas d'urgence médicale.",
    ],
    members: [
      { name: "Gabriel N.", role: "Chef de la Sécurité" },
      { name: "Samuel M.", role: "Responsable Parking" },
      { name: "Pierre C.", role: "Secouriste" },
    ],
    images: ["/6.jpg", "/1.jpg"],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "cleaning",
    category: "Accueil & Ordre",
    name: "Aletheia Cleaning Team",
    leader: "Équipe d'Entretien",
    description: "Maintient la propreté, la préparation et la beauté du sanctuaire et de ses espaces annexes.",
    howItWorks: "Nettoyage et aménagement avant et après les réunions.",
    icon: <Brush className="w-6 h-6 text-[#48a848]" />,
    activities: [
      "Nettoyage complet du temple avant et après chaque réunion de l'église.",
      "Assurer la propreté et le ravitaillement des installations sanitaires.",
      "Décoration florale et esthétique de l'autel.",
      "Gestion des déchets et tri sélectif des locaux.",
    ],
    members: [
      { name: "Nathalie I.", role: "Responsable Entretien" },
      { name: "Belyse M.", role: "Adjointe Décoration" },
      { name: "Eric N.", role: "Membre Actif" },
    ],
    images: ["/6.jpg", "/3.jpg"],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "welfare",
    category: "Compassion & Social",
    name: "Aletheia Welfare",
    leader: "Comité Bien-être & Social",
    description: "Apporte de l'entraide, du réconfort et du soutien matériel ou financier aux membres en besoin.",
    howItWorks: "Écoute fraternelle, visites et redistribution d'aides.",
    icon: <HeartHandshake className="w-6 h-6 text-[#48a848]" />,
    activities: [
      "Visites aux familles traversant des épreuves (maladie, deuil, difficultés).",
      "Collecte et redistribution de dons alimentaires et de vêtements.",
      "Gestion d'une caisse d'entraide pour soutenir financièrement les membres en détresse.",
      "Organisation d'ateliers d'aide à l'emploi et d'orientation sociale.",
    ],
    members: [
      { name: "Clarisse M.", role: "Présidente Welfare" },
      { name: "Apostle Divin N.", role: "Conseiller Pastoral" },
      { name: "Sandra N.", role: "Trésorière Sociale" },
    ],
    images: ["/3.jpg", "/9.jpg"],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "hospital",
    category: "Compassion & Social",
    name: "Aletheia Hospital Ministry",
    leader: "Aumônerie Hospitalière",
    description: "Visite les malades dans les hôpitaux pour leur apporter prières, réconfort et message de guérison.",
    howItWorks: "Visites régulières, temps de prière et distribution d'aides.",
    icon: <Activity className="w-6 h-6 text-[#48a848]" />,
    activities: [
      "Visites régulières dans les hôpitaux de Bujumbura.",
      "Prière de foi pour la guérison des malades alités.",
      "Distribution de repas et de kits d'hygiène de première nécessité.",
      "Partage du message d'espoir et d'amour de Jésus-Christ aux patients.",
    ],
    members: [
      { name: "Pastor Grace B.", role: "Aumônier Référente" },
      { name: "Aimable N.", role: "Visiteur Hospitalier" },
      { name: "Cynthia U.", role: "Visiteuse" },
    ],
    images: ["/9.jpg", "/3.jpg"],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "prison",
    category: "Compassion & Social",
    name: "Aletheia Prison Ministry",
    leader: "Aumônerie Carcérale",
    description: "Porte la Bonne Nouvelle, la grâce et le message de rédemption aux personnes incarcérées.",
    howItWorks: "Descentes en milieu carcéral, enseignements et dons.",
    icon: <Lock className="w-6 h-6 text-[#48a848]" />,
    activities: [
      "Descentes régulières autorisées dans les prisons centrales.",
      "Prédication et étude biblique pour la réhabilitation des détenus.",
      "Dons en nature (produits d'hygiène, vêtements, livres).",
      "Suivi spirituel et réinsertion des anciens détenus à leur sortie.",
    ],
    members: [
      { name: "Apostle Odilon N.", role: "Responsable Aumônerie" },
      { name: "Gérard M.", role: "Intervenant Carcéral" },
      { name: "Alice N.", role: "Intervenante" },
    ],
    images: ["/3.jpg", "/9.jpg"],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "sundayschool",
    category: "Enfance & Jeunesse",
    name: "Aletheia Sunday School",
    leader: "Moniteurs Écodim",
    description: "Enseigne la Parole de Dieu de façon adaptée, ludique et profonde aux enfants pour bâtir leur foi.",
    howItWorks: "Classes d'âge chaque dimanche pendant le culte principal.",
    icon: <Smile className="w-6 h-6 text-[#48a848]" />,
    activities: [
      "Enseignement biblique hebdomadaire structuré par tranches d'âge.",
      "Activités manuelles, chants, mimes et jeux centrés sur la Parole de Dieu.",
      "Préparation des spectacles de Noël et des fêtes chrétiennes.",
      "Accompagnement spirituel et éveil de la foi chez les plus jeunes.",
    ],
    members: [
      { name: "Vanessa I.", role: "Monitrice Principale" },
      { name: "Kevin N.", role: "Moniteur Adjoint" },
      { name: "Delphine K.", role: "Aide-Monitrice" },
    ],
    images: ["/4.jpg", "/3.jpg"],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "youth",
    category: "Enfance & Jeunesse",
    name: "Aletheia Youth",
    leader: "Comité des Jeunes",
    description: "Un espace d'impact pour équiper, connecter et motiver la jeunesse à vivre pleinement pour Christ.",
    howItWorks: "Cultes de jeunes, ateliers, retraites et soirées de partage.",
    icon: <Users className="w-6 h-6 text-[#48a848]" />,
    activities: [
      "Organisation des cultes spéciaux et réunions pour la jeunesse d'Aletheia.",
      "Retraites de prière, sorties récréatives et camps d'été.",
      "Ateliers d'orientation académique, professionnelle et affective.",
      "Service actif des jeunes au sein de différents départements (Média, Louange).",
    ],
    members: [
      { name: "Jonathan K.", role: "Président de la Jeunesse" },
      { name: "Ornella M.", role: "Vice-Présidente" },
      { name: "Patrick I.", role: "Responsable Prière Jeunes" },
    ],
    images: ["/8.jpg", "/2.jpg"],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "family",
    category: "Enfance & Jeunesse",
    name: "Aletheia Family Connect",
    leader: "Ministère des Familles",
    description: "Accompagne les couples et les parents pour bâtir des foyers stables fondés sur la Parole de Dieu.",
    howItWorks: "Séminaires pour couples, conseils et rencontres familiales.",
    icon: <Home className="w-6 h-6 text-[#48a848]" />,
    activities: [
      "Séminaires thématiques sur le mariage chrétien et l'éducation des enfants.",
      "Soirées de ressourcement pour les couples mariés.",
      "Entretiens pré-conjugaux pour les fiancés et jeunes couples.",
      "Journées récréatives réunissant l'ensemble des familles de l'église.",
    ],
    members: [
      { name: "Prophète Evrard S.", role: "Conseiller Conjugal" },
      { name: "Minister Ines S.", role: "Conseillère Conjugale" },
      { name: "Richard & Liliane", role: "Couple Coordinateur" },
    ],
    images: ["/1.jpg", "/4.jpg"],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "mobilisation",
    category: "Missions & Impact",
    name: "Aletheia Mobilisation",
    leader: "Équipe de Mobilisation",
    description: "Organise l'évangélisation sur le terrain, les campagnes de rue et la conquête des âmes.",
    howItWorks: "Sorties d'évangélisation, campagnes et sensibilisations.",
    icon: <Megaphone className="w-6 h-6 text-[#48a848]" />,
    activities: [
      "Descentes d'évangélisation porte-à-porte dans les quartiers de Bujumbura.",
      "Campagnes d'évangélisation en plein air avec sonorisation mobile.",
      "Distribution de traités, bibles et brochures d'affermissement.",
      "Suivi immédiat et intégration des personnes ayant donné leur vie au Seigneur.",
    ],
    members: [
      { name: "Apostle Divin N.", role: "Coordinateur Évangélisation" },
      { name: "Tharcisse N.", role: "Responsable Terrain" },
      { name: "Jolie I.", role: "Évangélisatrice active" },
    ],
    images: ["/7.jpg", "/9.jpg"],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "homemissions",
    category: "Missions & Impact",
    name: "Aletheia Home Missions",
    leader: "Comité des Missions",
    description: "Supervise l'implantation de nouvelles cellules, d'églises locales et le travail missionnaire.",
    howItWorks: "Prospection, soutien aux missionnaires et cellules de maison.",
    icon: <Globe className="w-6 h-6 text-[#48a848]" />,
    activities: [
      "Prospection géographique et spirituelle pour l'implantation de nouvelles cellules.",
      "Formation et envoi de missionnaires dans les provinces et pays voisins.",
      "Suivi spirituel et matériel des cellules de maison existantes.",
      "Appui aux églises sœurs et communautés partenaires.",
    ],
    members: [
      { name: "Apostle Odilon N.", role: "Directeur des Missions" },
      { name: "Pastor Eric B.", role: "Formateur Missionnaire" },
      { name: "Jean-Marie V.", role: "Secrétaire Missionnaire" },
    ],
    images: ["/7.jpg", "/1.jpg"],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "partners",
    category: "Missions & Impact",
    name: "Aletheia Partners",
    leader: "Réseau des Partenaires",
    description: "Regroupe les membres qui soutiennent activement la vision et les projets du ministère par leurs ressources.",
    howItWorks: "Rencontres stratégiques et participation aux grands projets.",
    icon: <HandHeart className="w-6 h-6 text-[#48a848]" />,
    activities: [
      "Réunions stratégiques d'information sur les grands projets du ministère.",
      "Soutien financier mensuel pour le fonctionnement et l'expansion d'Aletheia.",
      "Parrainage de projets ciblés (Média, Radio, Social, Implantation).",
      "Événements de réseautage et partage d'expérience pour les entrepreneurs.",
    ],
    members: [
      { name: "Pastor Joselyne I.", role: "Responsable Partenaires" },
      { name: "Christian N.", role: "Partenaire Coordinateur" },
      { name: "Audry K.", role: "Partenaire Représentant" },
    ],
    images: ["/1.jpg", "/3.jpg"],
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const CATEGORIES = [
  "Tous",
  "Culte & Louange",
  "Administration",
  "Technique & Média",
  "Accueil & Ordre",
  "Compassion & Social",
  "Enfance & Jeunesse",
  "Missions & Impact",
];

export default function PageMinisteres() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState(null);
  const [activeTab, setActiveTab] = useState("activities");

  const filteredDepartments = DEPARTMENTS.filter((dept) => {
    const matchesCategory =
      selectedCategory === "Tous" || dept.category === selectedCategory;
    const matchesSearch =
      dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen pb-20 transition-colors duration-300">
      {/* HERO BANNER */}
      <section className="relative bg-[#0c2448] text-white py-14 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#48a848]/20 border border-[#48a848]/40 text-[#5cbd5c] text-xs font-semibold tracking-wider uppercase mb-4">
            Servir ensemble
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Tous nos Départements
          </h1>
          <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Chaque département a un rôle unique. Cliquez sur l'un d'eux pour découvrir ses activités, ses membres et ses vidéos.
          </p>
        </div>
      </section>

      {/* RECHERCHE ET FILTRES */}
      <section className="pt-8 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Rechercher un département..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs sm:text-sm focus:outline-none focus:border-[#48a848]"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                  selectedCategory === cat
                    ? "bg-[#48a848] text-white border-[#48a848] shadow-sm"
                    : "bg-white dark:bg-slate-900 text-slate-650 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-[#48a848]"
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRILLE DES DÉPARTEMENTS */}
      <section className="py-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredDepartments.map((dept) => (
            <div
              key={dept.id}
              onClick={() => {
                setSelectedDept(dept);
                setActiveTab("activities");
              }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-100 dark:border-slate-800">
                    {dept.icon}
                  </div>
                  <span className="text-[10px] font-bold text-[#48a848] bg-[#48a848]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {dept.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#0c2448] dark:text-white mb-2 group-hover:text-[#48a848] transition-colors">
                  {dept.name}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-4">
                  {dept.description}
                </p>

                <div className="bg-slate-50 dark:bg-slate-800/40 p-2.5 rounded-xl mb-4 border border-slate-100 dark:border-slate-800/60">
                  <span className="text-[10px] font-bold text-[#0c2448] dark:text-slate-350 block mb-0.5">
                    ⚙️ En pratique :
                  </span>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                    {dept.howItWorks}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px]">
                <span className="text-slate-450 truncate pr-1">
                  {dept.leader}
                </span>

                <span className="inline-flex items-center gap-1 text-[#48a848] font-bold hover:underline">
                  Voir Détails
                  <ArrowRight size={11} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FENÊTRE DÉTAILLÉE (MODALE) */}
      {selectedDept && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-3xl rounded-[2.5rem] overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]">
            
            {/* Bouton de Fermeture */}
            <button
              onClick={() => setSelectedDept(null)}
              className="absolute top-6 right-6 p-2 bg-slate-150 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 rounded-full text-slate-700 dark:text-white transition-all z-20 outline-none">
              <X size={18} />
            </button>

            {/* En-tête Modale */}
            <div className="p-8 pb-4 border-b border-slate-100 dark:border-slate-800 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0c2448]/5 dark:bg-white/5 border border-[#0c2448]/10 dark:border-white/10 flex items-center justify-center text-[#48a848] flex-shrink-0">
                {selectedDept.icon}
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#48a848] bg-[#48a848]/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {selectedDept.category}
                </span>
                <h2 className="text-xl md:text-2xl font-extrabold text-[#0c2448] dark:text-white">
                  {selectedDept.name}
                </h2>
                <p className="text-xs text-slate-400">Responsable : {selectedDept.leader}</p>
              </div>
            </div>

            {/* Onglets */}
            <div className="flex border-b border-slate-100 dark:border-slate-800 px-8 py-1.5 gap-4">
              {[
                { id: "activities", label: "Activités", icon: <Info size={13} /> },
                { id: "members", label: "Membres", icon: <Users size={13} /> },
                { id: "media", label: "Photos & Vidéos", icon: <Video size={13} /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 py-2 px-3 text-xs font-bold transition-all border-b-2 outline-none ${
                    activeTab === tab.id
                      ? "border-[#48a848] text-[#48a848]"
                      : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-350"
                  }`}>
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Contenu Défilant */}
            <div className="p-8 overflow-y-auto flex-1 space-y-6">
              
              {/* Tab 1: Activités */}
              {activeTab === "activities" && (
                <div className="space-y-4">
                  <h4 className="font-bold text-sm text-[#0c2448] dark:text-white uppercase tracking-wider">
                    Liste des Activités Réalisées
                  </h4>
                  <ul className="space-y-3.5">
                    {selectedDept.activities?.map((act, i) => (
                      <li key={i} className="flex gap-3 items-start text-xs sm:text-sm text-slate-600 dark:text-slate-350 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#48a848] mt-2 flex-shrink-0" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tab 2: Membres */}
              {activeTab === "members" && (
                <div className="space-y-4">
                  <h4 className="font-bold text-sm text-[#0c2448] dark:text-white uppercase tracking-wider">
                    Membres actifs du département
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedDept.members?.map((memb, i) => (
                      <div key={i} className="flex items-center gap-3 p-3.5 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200/50 dark:border-slate-800">
                        <div className="w-9 h-9 rounded-full bg-[#48a848]/20 flex items-center justify-center text-[11px] font-bold text-[#48a848]">
                          {memb.name.charAt(0)}
                        </div>
                        <div>
                          <h5 className="font-bold text-xs text-[#0c2448] dark:text-white leading-tight">{memb.name}</h5>
                          <span className="text-[10px] text-slate-450 block mt-0.5">{memb.role}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 3: Photos & Vidéos */}
              {activeTab === "media" && (
                <div className="space-y-6">
                  {/* Galerie d'images */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-sm text-[#0c2448] dark:text-white uppercase tracking-wider">
                      Galerie d'Images
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {selectedDept.images?.map((img, i) => (
                        <div key={i} className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-800">
                          <Image src={img} alt="Activité du département" fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Intégration Vidéo */}
                  {selectedDept.video && (
                    <div className="space-y-3">
                      <h4 className="font-bold text-sm text-[#0c2448] dark:text-white uppercase tracking-wider">
                        Vidéos de présentation
                      </h4>
                      <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800 bg-black">
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src={selectedDept.video}
                          title="Vidéo du département"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

            </div>

            {/* Pied de Modale (Actions) */}
            <div className="p-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <span className="text-[10px] text-slate-450 dark:text-slate-400">
                Aletheia TRC · Kinindo
              </span>
              <a
                href={`https://wa.me/25779006007?text=Bonjour,%20je%2520souhaite%2520rejoindre%2520le%2520département%2520:${encodeURIComponent(selectedDept.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-full bg-[#48a848] hover:bg-[#3d913d] text-white text-xs font-bold transition-all shadow-md">
                <span>Rejoindre ce département</span>
                <ArrowRight size={13} />
              </a>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
