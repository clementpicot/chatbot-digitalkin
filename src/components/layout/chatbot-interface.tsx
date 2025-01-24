"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import Chatbot from "./chatbot";
import ChatbotInput from "./chatbot-input";

export type Message = {
  id: string;
  message: string;
  date: number;
  sender: "user" | "agent";
};

export default function ChatbotInterface({ slug }: { slug: string }) {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: crypto.randomUUID(),
      message: "Bonjour! J'ai besoin d'aide aujourd'hui pour créer un fichier",
      date: Date.now(),
      sender: "user",
    },
    {
      id: crypto.randomUUID(),
      message:
        "Bien sûr, fournissez-moi les fichiers que vous souhaitez que je traite. Je m'occupe du reste!",
      date: Date.now(),
      sender: "agent",
    },
  ]);

  // Automatically scroll to bottom of
  // ScrollArea when there is a new message
  useEffect(() => {
    const scrollArea = scrollAreaRef.current?.querySelector(
      "[data-radix-scroll-area-viewport]"
    );
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <ScrollArea
        ref={scrollAreaRef}
        className={cn(
          "flex-1 pr-6",
          messages.length === 0 &&
            "flex [&>div]:flex [&>div>div]:flex-1 [&>div>div]:relative"
        )}
      >
        <Chatbot messages={messages} />
      </ScrollArea>
      <ChatbotInput setMessages={setMessages} />
    </>
  );
}
