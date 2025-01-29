import { cn } from "@/lib/utils";
import React from "react";

export default function Cell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("p-4 md:p-8 rounded-xl bg-muted/50", className)}>
      {children}
    </div>
  );
}
