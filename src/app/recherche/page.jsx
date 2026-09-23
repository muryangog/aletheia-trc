import { Suspense } from "react";
import SearchResults from "./SearchResults";

export const metadata = {
  title: "Recherche | Aletheia TRC",
  description: "Recherchez les sermons et événements d'Aletheia TRC.",
};

export default function SearchPage() {
  return (
    <Suspense
      fallback={<div className="min-h-screen bg-slate-50 dark:bg-slate-950" />}>
      <SearchResults />
    </Suspense>
  );
}
