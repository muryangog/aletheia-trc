import React from "react";
import {
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
  Users,
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

export default function MinistryCard({ dept, onClick }) {
  const IconComp = ICONS[dept.iconName] || HelpCircle;

  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg transition-shadow duration-150 flex flex-col justify-between group cursor-pointer">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-100 dark:border-slate-800 text-[#48a848]">
            <IconComp className="w-5 h-5" />
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
          <span className="text-[10px] font-bold text-[#0c2448] dark:text-slate-300 block mb-0.5">
            ⚙️ En pratique :
          </span>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
            {dept.howItWorks}
          </p>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px]">
        <span className="text-slate-450 truncate pr-1">{dept.leader}</span>

        <span className="inline-flex items-center gap-1 text-[#48a848] font-bold hover:underline">
          Voir Détails
          <ArrowRight size={11} />
        </span>
      </div>
    </div>
  );
}
