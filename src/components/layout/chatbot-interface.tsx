"use client";

import { useState } from "react";
import Chatbot from "./chatbot";
import ChatbotInput from "./chatbot-input";

export type Message = {
  id: string;
  message: string;
  date: number;
  sender: "user" | "agent";
};

export default function ChatbotInterface({  }: { slug: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  return (
    <>
      <Chatbot messages={messages} isTyping={isTyping} />

      <ChatbotInput
        messages={messages}
        setMessages={setMessages}
        setIsTyping={setIsTyping}
      />
    </>
  );
}
