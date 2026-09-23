"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Calendar, User, BookOpen } from "lucide-react";

export default function SermonFilter() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [speaker, setSpeaker] = useState("");
  const [date, setDate] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const params = new URLSearchParams();
    if (title) params.set("title", title);
    if (speaker) params.set("speaker", speaker);
    if (date) params.set("date", date);

    const queryString = params.toString();
    const targetUrl = queryString
      ? `/sermons/videos?${queryString}`
      : "/sermons/videos";

    router.push(targetUrl);
  };

  return (
    <div
      className="relative z-30 pointer-events-auto bg-[#0c2448] border border-[#294466] p-2.5 rounded-2xl shadow-lg w-full max-w-4xl mx-auto"
      onClick={(e) => e.stopPropagation()}>
      <form
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row items-center gap-2">
        <div className="relative flex-1 w-full">
          <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 w-5 h-5 pointer-events-none" />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titre du sermon..."
            className="w-full bg-[#12305a] border border-[#294466] focus:ring-2 focus:ring-[#48a848] text-white placeholder:text-[#9fb0c4] pl-12 pr-4 py-3 rounded-xl text-sm outline-none transition-colors duration-200"
          />
        </div>

        <div className="hidden md:block w-px h-8 bg-white/20"></div>

        <div className="relative flex-1 w-full">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 w-5 h-5 pointer-events-none" />
          <input
            type="text"
            value={speaker}
            onChange={(e) => setSpeaker(e.target.value)}
            placeholder="Nom du prédicateur..."
            className="w-full bg-[#12305a] border border-[#294466] focus:ring-2 focus:ring-[#48a848] text-white placeholder:text-[#9fb0c4] pl-12 pr-4 py-3 rounded-xl text-sm outline-none transition-colors duration-200"
          />
        </div>

        <div className="hidden md:block w-px h-8 bg-white/20"></div>

        <div className="relative flex-1 w-full">
          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 w-5 h-5 pointer-events-none" />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-[#12305a] border border-[#294466] focus:ring-2 focus:ring-[#48a848] text-white pl-12 pr-4 py-3 rounded-xl text-sm outline-none cursor-pointer scheme-dark transition-colors duration-200"
          />
        </div>

        <button
          type="submit"
          className="bg-[#48a848] hover:bg-[#3a8a3a] text-white px-6 py-3 rounded-xl font-bold transition-colors duration-200 flex items-center gap-2 w-full md:w-auto justify-center shadow-lg cursor-pointer">
          <Search className="w-5 h-5" />
          <span className="md:hidden lg:inline text-sm">Rechercher</span>
        </button>
      </form>
    </div>
  );
}
