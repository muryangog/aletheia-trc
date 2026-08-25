import MemberProfile from "@/src/component/ui/Apropos/equipe-pastorale/MemberProfile";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  if (!id) return { title: "Équipe Pastorale | Aletheia TRC" };
  
  // Générer un titre propre
  const name = id
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title: `${name} - Équipe Pastorale | Aletheia TRC`,
    description: `Découvrez la biographie, le témoignage et le ministère de ${name} chez Aletheia Truth Revealed Church.`,
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  return <MemberProfile id={resolvedParams.id} />;
}
