import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export default async function BreadcrumbSlot({
  params,
}: {
  params: Promise<{ catchAll: string[] }>;
}) {
  const catchAll = (await params).catchAll;

  return <Breadcrumbs routes={catchAll} />;
}
