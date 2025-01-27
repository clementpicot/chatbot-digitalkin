"use client";

import { steps } from "@/lib/data";
import { TutorialContextType } from "@/types";
import { driver, Driver } from "driver.js";
import "driver.js/dist/driver.css";
import React, { createContext, useContext, useEffect, useRef } from "react";

const TutorialContext = createContext<TutorialContextType | undefined>(
  undefined
);


export default function TutorialProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const driverRef = useRef<Driver | null>(null);

  const startTutorial = () => {
    if (driverRef.current) {
      driverRef.current.drive();
    }
  };

  driverRef.current = driver({
    showProgress: true,
    animate: true,
    overlayOpacity: 0.75,
    stagePadding: 10,
    allowClose: true,
    doneBtnText: "Finish",
    nextBtnText: "Next",
    prevBtnText: "Back",
    popoverClass: "popover",
    onDestroyed: () => {
      // Mark tutorial as completed when closed or finished
      // then destroy it (cleanup)
      localStorage.setItem("tutorialCompleted", "true");
      driverRef.current?.destroy();
    },
  });

  driverRef.current.setSteps(
    steps.map((step) => ({
      element: step.element,
      popover: {
        title: step.popover.title,
        description: step.popover.content,
      },
    }))
  );

  useEffect(() => {
    // Start the tutorial on mount if not completed
    if (localStorage.getItem("tutorialCompleted") !== "true") {
      startTutorial();
    }
  }, []);

  return (
    <TutorialContext.Provider value={{ startTutorial, steps }}>
      {children}
    </TutorialContext.Provider>
  );
}

export const useTutorial = (): TutorialContextType => {
  const context = useContext(TutorialContext);
  if (!context) {
    throw new Error("There was an error initializing useTutorial context");
  }
  return context;
};
