import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export default async function BreadcrumbSlot({
  params,
}: {
  params: Promise<{ catchAll: string[] }>;
}) {
  const catchAll = (await params).catchAll;

  console.log(catchAll);

  return <Breadcrumbs routes={catchAll} />;
}
