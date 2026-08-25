import DailyDevotion from "@/src/component/ui/accueil/devotion/DailyDevotion";

export const metadata = {
  title: "Dévotion Quotidienne | Aletheia TRC",
  description:
    "Méditez chaque jour la Parole de Dieu avec l'équipe d'Aletheia Truth Revealed Church.",
};

export default function Page() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 min-h-screen">
      {/* En-tête de la page */}
      <section className="relative bg-[#0c2448] text-white py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#48a848_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#48a848]/20 border border-[#48a848]/40 text-[#5cbd5c] text-xs font-semibold tracking-wider uppercase mb-4">
            Ressources Spirituelles
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Dévotion Quotidienne
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Nourrissez votre esprit chaque jour avec nos méditations, versets et révélations de la Parole de Dieu.
          </p>
        </div>
      </section>

      {/* Rendu du composant de dévotion */}
      <DailyDevotion />
    </div>
  );
}
