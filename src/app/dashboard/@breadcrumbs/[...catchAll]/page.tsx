"use client";

import { usePathname } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export default function BreadcrumbSlot() {
  const pathname = usePathname();

  // Split the pathname into segments and filter out empty strings
  const routes = pathname.split("/").filter(Boolean);

  return <Breadcrumbs routes={routes} />;
}