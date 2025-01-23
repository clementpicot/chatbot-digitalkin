"use client";

import TutorialTooltip from "@/components/ui/tutorial-tooltip";
import React, { createContext, useContext, useEffect, useState } from "react";
import Joyride, { Step, CallBackProps } from "react-joyride";

type TutorialContextType = {
  startTutorial: () => void;
  steps: Step[];
};

const TutorialContext = createContext<TutorialContextType | undefined>(
  undefined
);

export default function TutorialProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [run, setRun] = useState(false);

  const steps: Step[] = [
    {
      target: ".tutorial-1",
      title: "Your profile",
      content:
        "This little section is usefull if you want to manage your account settings, refill your Kin's thougths or switch the current application theme!",
    },
    {
      target: ".tutorial-2",
      title: "Application sidebar",
      content:
        "The sidebar allows you to navigate through the entire application services! You can manage your existing chats, start a new chat, or create a new Kin to fit your needs!",
    },
    {
      target: ".tutorial-3",
      title: "Our chatbot",
      content:
        "This is where the magic happens. Start asking anything related to any topic to your Kin, and he will answer back to you with the informations you need. 🤖",
    },
  ];

  const startTutorial = () => {
    setRun(true);
  };

  // Update the localstorage item when user completed or skipped tutorial
  const handleCallback = (data: CallBackProps) => {
    if (data.status === "finished" || data.status === "skipped") {
      setRun(false);
      localStorage.setItem("tutorialCompleted", "true");
    }
  };

  // On component mount check if tutorial has been completed, otherwise run the tutorial
  useEffect(() => {
    if (localStorage.getItem("tutorialCompleted") === "true") return;

    setRun(true);
  }, []);

  return (
    <TutorialContext.Provider value={{ startTutorial, steps }}>
      {children}
      <Joyride
        steps={steps}
        run={run}
        continuous
        showSkipButton
        callback={handleCallback}
        tooltipComponent={TutorialTooltip}
        styles={{
          options: {
            zIndex: 10000,
            arrowColor: "transparent",
            primaryColor: `hsl(${getComputedStyle(
              document.documentElement
            ).getPropertyValue("--foreground")})`,
          },
        }}
      />
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
