import React from "react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export function Breadcrumbs({ routes = [] }: { routes: string[] }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {/* Only show the "Dashboard" link if it's not already in the routes */}
        {!routes.includes("dashboard") && (
          <BreadcrumbItem>
            <BreadcrumbLink href="/dashboard" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        )}

        {/* Render the rest of the breadcrumbs */}
        {routes.map((route, index) => {
          const href = `/${routes.slice(0, index + 1).join("/")}`;
          const isLast = index === routes.length - 1;

          route = route.replace("-", " ");

          return (
            <React.Fragment key={href}>
              {route !== "dashboard" && <BreadcrumbSeparator />}
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="capitalize">
                    {route}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={href} asChild>
                    <Link href={href} className="capitalize">
                      {route}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
