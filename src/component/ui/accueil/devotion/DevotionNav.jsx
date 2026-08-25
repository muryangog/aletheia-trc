// src/component/ui/DevotionNav.jsx
"use client";
import {
  BookOpen,
  GraduationCap,
  Mic2,
  Music,
  Users,
  Video,
} from "lucide-react";

export default function DevotionNav({ activeTab, setActiveTab }) {
  // const tabs = [
  //   {
  //     id: "read",
  //     label: "Dévotion",
  //     sub: "Umuco w'ukuri",
  //     icon: <BookOpen size={20} />,
  //     color: "hover:bg-green-600",
  //   },
  //   {
  //     id: "live",
  //     label: "Live Sermon",
  //     sub: "Last Sermon",
  //     icon: <Video size={20} />,
  //     color: "hover:bg-red-600",
  //   },
  //   {
  //     id: "connect",
  //     label: "Aletheia Connect",
  //     sub: "Interactive Live",
  //     icon: <Users size={20} />,
  //     color: "hover:bg-cyan-600",
  //   },
  //   {
  //     id: "pleroma",
  //     label: "Pleroma",
  //     sub: "Academy",
  //     icon: <GraduationCap size={20} />,
  //     color: "hover:bg-blue-900",
  //   },
  //   {
  //     id: "podcast",
  //     label: "Podcast",
  //     sub: "Revive me Lord",
  //     icon: <Mic2 size={20} />,
  //     color: "hover:bg-purple-600",
  //   },
  //   {
  //     id: "audio",
  //     label: "Audio",
  //     sub: "Chants & Sermons",
  //     icon: <Music size={20} />,
  //     color: "hover:bg-orange-600",
  //   },
  // ];
  // return (
  //   <div className="flex flex-wrap justify-center gap-3 mb-12">
  //     {tabs.map((tab) => (
  //       <button
  //         key={tab.id}
  //         onClick={() => setActiveTab(tab.id)}
  //         className={`relative flex items-center gap-4 px-5 py-3.5 rounded-2xl transition-all duration-300 group shadow-sm border border-slate-100 dark:border-slate-800
  //           ${
  //             activeTab === tab.id
  //               ? "bg-blue-950 text-white shadow-xl scale-105 z-10"
  //               : "bg-white dark:bg-slate-900 text-slate-500 hover:text-white " +
  //                 tab.color
  //           }
  //         `}>
  //         <div
  //           className={`p-2 rounded-lg ${activeTab === tab.id ? "bg-white/20" : "bg-slate-100 dark:bg-slate-800 group-hover:bg-white/20"}`}>
  //           {tab.icon}
  //         </div>
  //         <div className="text-left">
  //           <p className="text-[9px] uppercase font-bold tracking-widest opacity-70 leading-none mb-1">
  //             {tab.sub}
  //           </p>
  //           <p className="font-bold text-sm leading-none whitespace-nowrap">
  //             {tab.label}
  //           </p>
  //         </div>
  //       </button>
  //     ))}
  //   </div>
  // );
}
