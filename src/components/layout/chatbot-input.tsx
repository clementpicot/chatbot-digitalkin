"use client";

import { ArrowUp, Plus } from "lucide-react";
import React, { useRef, useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import TooltipButton from "../ui/tooltip-button";
import { Message } from "./chatbot-interface";
import { SERVER_LATENCY, TYPING_SPEED } from "@/lib/utils";
import { Input } from "../ui/input";

const keywordResponses: Record<string, string> = {
  merge:
    "I can help you merge multiple files into a single file. Please provide the files you want to merge.",
  create: "What type of file would you like me to create?",
  translate:
    "I'm ready to help you translate a file. Please specify the file and the target language.I'm ready to help you translate a file. Please specify the file and the target language.I'm ready to help you translate a file. Please specify the file and the target language.",
};

const badges: string[] = [
  "Merge multiple files",
  "Create a file",
  "Translate a PDF",
];

export default function ChatbotInput({
  messages,
  setMessages,
  setIsTyping,
}: {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  setIsTyping: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [userInput, setUserInput] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);


  const addMessage = (message: string) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      message: message.trim(),
      date: Date.now(),
      sender: "user",
    };

    setMessages((prevState) => [...prevState, userMessage]);

    const agentResponse = getAgentResponse(message.trim());

    const agentMessage: Message = {
      id: crypto.randomUUID(),
      message: agentResponse,
      date: Date.now(),
      sender: "agent",
    };

    setMessages((prevState) => [...prevState, agentMessage]);
    setIsTyping(true);

    // Simulate typing completion
    const simulateTyping = () => {
      setTimeout(() => {
        setIsTyping(false);
      }, agentResponse.length * (TYPING_SPEED + 5) + SERVER_LATENCY);
    };
    simulateTyping();

    // Reset user input value + height
    setUserInput("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      addMessage(userInput);
    }
  }

  // Simulate Kin response with pre-defined values
  function getAgentResponse(userMessage: string): string {
    const lowercaseMessage = userMessage.trim().toLowerCase();

    for (const keyword in keywordResponses) {
      if (lowercaseMessage.includes(keyword)) {
        return keywordResponses[keyword];
      }
    }

    // If none of the keyword matches, we simply return an "error" message.
    // In a real context, the agent would answer back to the user with
    // precise data/information, but I didn't want to take too much time
    // implementing this feature and allocate more time on User Experience
    return "I apologize, but I'm not sure how to help with your request.";
  }

  return (
    <div className="mt-8">
      {messages.length === 0 && (
        <div className="flex justify-center gap-4">
          {badges.map((badge) => (
            <Badge
              key={badge}
              variant="default"
              className="cursor-pointer"
              onClick={() => addMessage(badge)}
            >
              {badge}
            </Badge>
          ))}
        </div>
      )}
      <div className="mt-4 p-2 rounded-lg border border-input focus-within:ring-1 focus-within:ring-ring">
        <Textarea
          ref={textareaRef}
          value={userInput}
          className="py-0 border-none resize-none shadow-none focus-visible:ring-0"
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "0px";
            target.style.height = target.scrollHeight + "px";
          }}
          placeholder="Message to your Kin"
        />
        <div className="flex justify-between mt-4">
          <div className="flex gap-2">
            <TooltipButton
              variant="ghost"
              size="icon"
              buttonContent={
                <>
                  <Input
                    type="file"
                    className="absolute inset-0 z-50 opacity-0"
                  />
                  <Plus />
                </>
              }
              tooltip="Add files"
            />
          </div>
          <div>
            <Button
              size="icon"
              className="rounded-full"
              onClick={() => addMessage(userInput)}
              disabled={!userInput.trim()}
            >
              <ArrowUp strokeWidth={3} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
