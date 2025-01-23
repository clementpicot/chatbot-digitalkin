import Cell from "@/components/ui/cell";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return (
    <Cell className="min-h-[100vh] flex-1 md:min-h-min">
      <h1 className="text-2xl">Kin {slug}</h1>
    </Cell>
  );
}
