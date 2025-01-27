"use client";

import { driver, Driver } from "driver.js";
import "driver.js/dist/driver.css";
import React, { createContext, useContext, useEffect, useRef } from "react";

type TutorialContextType = {
  startTutorial: () => void;
  steps: Step[];
};

type Step = {
  element: string;
  popover: {
    title: string;
    content: string;
  };
};

const TutorialContext = createContext<TutorialContextType | undefined>(
  undefined
);

const steps: Step[] = [
  {
    element: ".tutorial-1",
    popover: {
      title: "Your profile",
      content:
        "This little section is useful if you want to manage your account settings, refill your Kin's thoughts, or switch the current application theme!",
    },
  },
  {
    element: ".tutorial-2",
    popover: {
      title: "Application sidebar",
      content:
        "The sidebar allows you to navigate through the entire application services! You can manage your existing chats, start a new chat, or create a new Kin to fit your needs!",
    },
  },
  {
    element: ".tutorial-3",
    popover: {
      title: "Our chatbot",
      content:
        "This is where the magic happens. Start asking anything related to any topic to your Kin, and he will answer back to you with the information you need. 🤖",
    },
  },
];

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
