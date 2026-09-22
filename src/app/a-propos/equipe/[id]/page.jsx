import TeamProfile from "@/components/team/TeamProfile";
import { pastorsService } from "@/services/pastors.service";

export async function generateStaticParams() {
  return pastorsService.getSlugs().map((slug) => ({ id: slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;
  if (!id) return { title: "Équipe Pastorale | Aletheia TRC" };

  const member = pastorsService.getById(id);
  const name =
    member?.name ||
    id
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  return {
    title: `${name} - Équipe Pastorale | Aletheia TRC`,
    description: `Découvrez la biographie et le ministère de ${name} chez Aletheia Truth Revealed Church.`,
  };
}

export default async function MemberPage({ params }) {
  const resolvedParams = await params;
  return <TeamProfile id={resolvedParams.id} />;
}
