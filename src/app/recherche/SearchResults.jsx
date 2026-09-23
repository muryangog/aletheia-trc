"use client";

import Link from "next/link";
import { BookOpen, CalendarDays, Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { EVENTS_DATA } from "@/data/events.data";
import { SERMONS_AUDIO } from "@/data/sermons.data";

function matchesQuery(values, query) {
  return values.some((value) =>
    String(value || "")
      .toLocaleLowerCase("fr")
      .includes(query),
  );
}

export default function SearchResults() {
  const searchParams = useSearchParams();
  const rawQuery = searchParams.get("q") || "";
  const query = rawQuery.trim().toLocaleLowerCase("fr");
  const sermons = query
    ? SERMONS_AUDIO.filter((sermon) =>
        matchesQuery([sermon.title, sermon.series, sermon.preacher], query),
      )
    : [];
  const events = query
    ? EVENTS_DATA.filter((event) =>
        matchesQuery(
          [event.title, event.category, event.description, event.location],
          query,
        ),
      )
    : [];
  const totalResults = sermons.length + events.length;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#287a3d] dark:text-[#6dcc6d] mb-3">
            Recherche
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3">
            {query ? `Résultats pour « ${rawQuery} »` : "Rechercher"}
          </h1>
          {query && (
            <p className="text-slate-600 dark:text-slate-400">
              {totalResults} résultat{totalResults === 1 ? "" : "s"} trouvé
              {totalResults === 1 ? "" : "s"}.
            </p>
          )}
        </div>

        {!query ? (
          <Message
            text="Saisissez un mot-clé dans la barre de recherche."
            icon
          />
        ) : totalResults === 0 ? (
          <Message text="Aucun résultat ne correspond à votre recherche." />
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            <ResultGroup
              title="Sermons"
              icon={<BookOpen size={18} />}
              results={sermons}
              type="sermon"
            />
            <ResultGroup
              title="Événements"
              icon={<CalendarDays size={18} />}
              results={events}
              type="event"
            />
          </div>
        )}
      </div>
    </main>
  );
}

function Message({ text, icon = false }) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 text-center">
      {icon && <Search className="mx-auto mb-3 text-slate-400" size={28} />}
      <p className="text-slate-600 dark:text-slate-400">{text}</p>
    </div>
  );
}

function ResultGroup({ title, icon, results, type }) {
  if (!results.length) return null;
  return (
    <section>
      <h2 className="flex items-center gap-2 text-xl font-bold mb-4">
        <span className="text-[#48a848]">{icon}</span>
        {title}
      </h2>
      <div className="space-y-3">
        {results.map((item) => (
          <Link
            key={`${type}-${item.id}`}
            href={
              type === "sermon" ? "/sermons/audio" : "/ressources/evenements"
            }
            className="block bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 hover:border-[#48a848] hover:shadow-sm transition-all">
            <h3 className="font-bold mb-1">{item.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
              {type === "sermon"
                ? `${item.series} · ${item.preacher}`
                : `${item.category} · ${item.location}`}
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500">
              {item.date}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
