
import TutorialProvider from "@/providers/tutorial-provider";
import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TutorialProvider>
      {children}
    </TutorialProvider>
  );
}
