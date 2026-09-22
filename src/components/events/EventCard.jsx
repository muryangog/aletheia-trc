import React from "react";
import Image from "next/image";
import { Calendar, Clock, MapPin, Video } from "lucide-react";

export default function EventCard({ item }) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* Event info (8 Cols) */}
      <div className="lg:col-span-8 space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#0c2448]/10 dark:bg-slate-800 text-[#0c2448] dark:text-slate-200 uppercase">
            {item.category}
          </span>
          {item.isOnline && (
            <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-md font-bold">
              <Video className="w-3 h-3" /> En Direct
            </span>
          )}
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold text-[#0c2448] dark:text-white leading-tight">
          {item.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
          {item.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#48a848] shrink-0" />
            <span>{item.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#48a848] shrink-0" />
            <span>{item.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#48a848] shrink-0" />
            <span className="truncate">{item.location}</span>
          </div>
        </div>
      </div>

      {/* Event image/brand (4 Cols) */}
      <div className="lg:col-span-4 relative h-48 rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-center justify-center p-6">
        <Image
          src={item.image}
          alt={item.title}
          width={110}
          height={110}
          className="object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
