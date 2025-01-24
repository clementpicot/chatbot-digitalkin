"use client";

import { ArrowUp, Plus } from "lucide-react";
import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import TooltipButton from "../ui/tooltip-button";
import { Message } from "./chatbot-interface";

export default function ChatbotInput({
  setMessages,
}: {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}) {
  const [userInput, setUserInput] = useState<string>("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      if (!userInput.trim()) return;

      setMessages((prevState) => [
        ...prevState,
        {
          id: crypto.randomUUID(),
          message: userInput.trim(),
          date: Date.now(),
          sender: "user",
        },
      ]);

      setUserInput("");

      // Once message is sent, reset textarea height
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  }

  return (
    <div className="mt-8 p-2 rounded-lg border border-input focus-within:ring-1 focus-within:ring-ring">
      <Textarea
        ref={textareaRef}
        value={userInput}
        className="py-0 border-none resize-none shadow-none focus-visible:ring-0"
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        placeholder="Message to your Kin"
      />
      <div className="flex justify-between mt-4">
        <div className="flex gap-2">
          <TooltipButton
            variant="ghost"
            size="icon"
            buttonContent={<Plus />}
            tooltip="Add files"
          />
        </div>
        <div>
          <Button
            size="icon"
            className="rounded-full"
            onClick={() => {
              if (!userInput) return;
              setMessages((prevState) => [
                ...prevState,
                {
                  id: crypto.randomUUID(),
                  message: userInput.trim(),
                  date: Date.now(),
                  sender: "user",
                },
              ]);
              setUserInput("");
            }}
            disabled={!userInput.trim()}
          >
            <ArrowUp strokeWidth={3} />
          </Button>
        </div>
      </div>
    </div>
  );
}
