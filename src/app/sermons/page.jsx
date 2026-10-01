import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import VideoSermons from "@/components/sermons/VideoSermons";

export const metadata = {
  title: "Sermons | Aletheia TRC",
  description:
    "Retrouvez tous nos sermons, prédications et enseignements chrétiens.",
};

export default function SermonsPage() {
  return (
    <>
      <section className="bg-[#0c2448] px-4 py-5 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-start gap-3">
            <BookOpen className="mt-0.5 shrink-0 text-[#5cbd5c]" size={20} />
            <div>
              <h2 className="text-sm font-bold">True Light</h2>
              <p className="mt-1 text-xs text-slate-300">
                La véritable lumière au quotidien, à travers la Parole et la
                méditation.
              </p>
            </div>
          </div>
          <Link
            href="/ressources/devotion"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#48a848] px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-[#3d913d]">
            Découvrir True Light <ArrowRight size={14} />
          </Link>
        </div>
      </section>
      <VideoSermons />
    </>
  );
}
