import DailyDevotion from "./devotion/DailyDevotion";
import HeroSlider from "./hero/HeroSlider";
DailyDevotion;
export default function Home() {
  return (
    <main className="dark:bg-slate-900">
      <HeroSlider />
      <DailyDevotion />
    </main>
  );
}
