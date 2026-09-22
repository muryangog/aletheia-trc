import EventCalendar from "@/components/events/EventCalendar";

export const metadata = {
  title: "Événements & Agenda | Aletheia TRC",
  description:
    "Découvrez les cultes, conférences, études bibliques et événements de la communauté Aletheia.",
};

export default function EvenementsPage() {
  return <EventCalendar />;
}
