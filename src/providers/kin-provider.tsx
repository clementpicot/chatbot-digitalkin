"use client";

import { KinContextType, Kin } from "@/types";
import React, { createContext, useContext, useState } from "react";

const KinContext = createContext<KinContextType | undefined>(undefined);

export default function KinProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dummyKins: Kin[] = [
    {
      id: 1,
      title: "R&D",
      description:
        "Analyze and process state of the art, literature reviews, definition of research programs...",
      remainingTokens: 9457,
      url: "r-and-d",
      maxTokens: 100000,
    },
    {
      id: 2,
      title: "DAF",
      description:
        "Take over tasks such as low-value-added accounting production for finance professionals.",
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
