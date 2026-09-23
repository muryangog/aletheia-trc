"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  Info,
  Users,
  Video,
  ArrowRight,
  Music,
  Briefcase,
  FileText,
  Tv,
  UserCheck,
  Shield,
  Brush,
  HeartHandshake,
  Activity,
  Lock,
  Smile,
  Home,
  Megaphone,
  Globe,
  HandHeart,
  HelpCircle,
} from "lucide-react";

const ICONS = {
  Music,
  Briefcase,
  FileText,
  Tv,
  UserCheck,
  Shield,
  Brush,
  HeartHandshake,
  Activity,
  Lock,
  Smile,
  Users,
  Home,
  Megaphone,
  Globe,
  HandHeart,
};

export default function MinistryModal({ selectedDept, onClose }) {
  const [activeTab, setActiveTab] = useState("activities");

  if (!selectedDept) return null;

  const IconComp = ICONS[selectedDept.iconName] || HelpCircle;

  return (
    <div className="fixed inset-0 z-50 bg-[#071324]/90 flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg relative flex flex-col max-h-[90vh] transition-colors duration-200">
        {/* Bouton de Fermeture */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl text-slate-700 dark:text-white transition-colors duration-200 z-20 outline-none cursor-pointer"
          aria-label="Fermer la fenêtre">
          <X size={18} />
        </button>

        {/* En-tête Modale */}
        <div className="p-5 sm:p-8 pb-4 border-b border-slate-100 dark:border-slate-800 flex items-start gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-[#48a848] shrink-0">
            <IconComp className="w-6 h-6" />
          </div>
          <div className="space-y-1 pr-6">
            <span className="text-[10px] font-bold text-[#48a848] bg-[#48a848]/10 px-2.5 py-0.5 rounded-xl uppercase tracking-wider">
              {selectedDept.category}
            </span>
            <h2 className="text-lg sm:text-2xl font-extrabold text-slate-900 dark:text-slate-100">
              {selectedDept.name}
            </h2>
            <p className="text-xs text-slate-400">
              Responsable : {selectedDept.leader}
            </p>
          </div>
        </div>

        {/* Onglets */}
        <div className="flex border-b border-slate-100 dark:border-slate-800 px-4 sm:px-8 py-1.5 gap-2 sm:gap-4 overflow-x-auto scrollbar-none">
          {[
            { id: "activities", label: "Activités", icon: <Info size={13} /> },
            { id: "members", label: "Membres", icon: <Users size={13} /> },
            {
              id: "media",
              label: "Photos & Vidéos",
              icon: <Video size={13} />,
            },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 py-2 px-3 text-xs font-bold transition-all border-b-2 whitespace-nowrap outline-none cursor-pointer ${
                activeTab === tab.id
                  ? "border-[#48a848] text-[#48a848]"
                  : "border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              }`}>
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contenu Défilant */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1 space-y-6">
          {/* Tab 1: Activités */}
          {activeTab === "activities" && (
            <div className="space-y-4">
              <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 uppercase tracking-wider">
                Description & Fonctionnement
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedDept.description}
              </p>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-100 dark:border-slate-800">
                <span className="font-bold text-xs text-slate-900 dark:text-slate-100 block mb-1">
                  Organisation au quotidien :
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {selectedDept.howItWorks}
                </p>
              </div>
            </div>
          )}

          {/* Tab 2: Membres */}
          {activeTab === "members" && (
            <div className="space-y-4">
              <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 uppercase tracking-wider">
                Leadership du département
              </h4>
              <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200/50 dark:border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#48a848]/20 flex items-center justify-center text-xs font-bold text-[#48a848]">
                  {selectedDept.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100">
                    {selectedDept.leader}
                  </h5>
                  <span className="text-[10px] text-slate-400">
                    Responsable principal
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Photos & Vidéos */}
          {activeTab === "media" && (
            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 uppercase tracking-wider">
                  Galerie d'Images
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedDept.images?.map((img, i) => (
                    <div
                      key={i}
                      className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-800">
                      <Image
                        src={img}
                        alt="Activité du département"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Pied de Modale */}
        <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[10px] text-slate-450 dark:text-slate-400 order-2 sm:order-1">
            Aletheia TRC · Kinindo
          </span>
          <a
            href={`https://wa.me/25779006007?text=Bonjour,%20je%20souhaite%20rejoindre%20le%20département%20:${encodeURIComponent(
              selectedDept.name,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-[#48a848] hover:bg-[#3d913d] text-white text-xs font-bold transition-all shadow-md order-1 sm:order-2">
            <span>Rejoindre ce département</span>
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
