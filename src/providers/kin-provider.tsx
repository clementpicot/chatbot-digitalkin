"use client";

import { Kin, KinContextType } from "@/types";
import { useLocale } from "next-intl";
import React, { createContext, useContext, useState } from "react";

const KinContext = createContext<KinContextType | undefined>(undefined);

export default function KinProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = useLocale();

  const dummyKins: Kin[] = [
    {
      id: 1,
      title: locale === 'en' ? "R&D" : "R&D",
      description:
        locale === "en"
          ? "Analyze and process state of the art, literature reviews, definition of research programs..."
          : "Analyser et traiter l'état de l'art, les revues de littérature, la définition des programmes de recherche...",
      remainingTokens: 9457,
      url: "r-and-d",
      maxTokens: 100000,
    },
    {
      id: 2,
      title: locale === 'en' ? "DAF" : "DAF",
      description:
        locale === "en"
          ? "Take over tasks such as low-value-added accounting production for finance professionals."
          : "Prendre en charge des tâches telles que la production comptable à faible valeur ajoutée pour les professionnels de la finance.",
      remainingTokens: 59517,
      url: "daf",
      maxTokens: 100000,
    },
  ];

  const [kins, setKins] = useState(dummyKins);

  // In a real project I'd use server actions to get and
  // process formData, then send it to the database
  function handleAddKin() {
    setKins((prevState) => [
      ...prevState,
      {
        id: 3,
        title: "HR",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus deserunt rerum nesciunt qui iure.",
        remainingTokens: 59517,
        url: "hr",
        maxTokens: 100000,
      },
    ]);
  }

  return (
    <KinContext.Provider value={{ kins, handleAddKin }}>
      {children}
    </KinContext.Provider>
  );
}

export const useKin = (): KinContextType => {
  const context = useContext(KinContext);
  if (!context) {
    throw new Error("There was an error initializing useKin context");
  }
  return context;
};
