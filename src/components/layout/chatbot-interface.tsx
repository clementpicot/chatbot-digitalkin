"use client";

import { useKin } from "@/providers/kin-provider";
import { useState } from "react";
import Chatbot from "./chatbot";
import ChatbotInput from "./chatbot-input";

export type Message = {
  id: string;
  message: string;
  date: number;
  sender: "user" | "agent";
};

export default function ChatbotInterface({ slug }: { slug: string }) {
  const { kins } = useKin();

  const currentKin = kins.filter((kin) => kin.url === slug[0]);

  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  return (
    <>
      <Chatbot messages={messages} isTyping={isTyping} kin={currentKin} />

      <ChatbotInput
        messages={messages}
        setMessages={setMessages}
        setIsTyping={setIsTyping}
      />
    </>
  );
}
