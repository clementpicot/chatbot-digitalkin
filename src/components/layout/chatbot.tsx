"use client";

import { cn, formatTime, TYPING_SPEED } from "@/lib/utils";
import { Avatar } from "../ui/avatar";
import { Message } from "./chatbot-interface";
import LogoIcon from "./logo-icon";
import { useEffect, useRef } from "react";
import { ScrollArea } from "../ui/scroll-area";
import TypingEffect from "../typing-effect";

export default function Chatbot({
  messages,
  isTyping,
}: {
  messages: Message[];
  isTyping: boolean;
}) {
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of ScrollView when there
  // is a new message to ensure user visibility
  useEffect(() => {
    const scrollArea = scrollAreaRef.current?.querySelector(
      "[data-radix-scroll-area-viewport]"
    );
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }, [messages, isTyping]);

  // Find the last agent message
  const lastAgentMessage = [...messages]
    .reverse()
    .find(({ sender }) => sender === "agent");

  return (
    <>
      {messages.length === 0 && (
        <div className="h-full flex flex-col items-center justify-center text-muted-foreground max-w-lg mx-auto text-center">
          <LogoIcon className="opacity-50 size-12" />
          <h2 className="text-xl mt-4">Start a new chat with your Kin</h2>
          <p className="mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae quae nobis dolorem eligendi laboriosam aperiam, officia aliquam adipisci. Dolor, obcaecati?</p>
        </div>
      )}
      {messages.length > 0 && (
        <ScrollArea
          ref={scrollAreaRef}
          className={cn(
            "flex-1 pr-6",
            messages.length === 0 &&
              "flex"
          )}
        >
          <div className="flex flex-col">
            {messages.map(({ id, message, date, sender }) => {
              const formattedTime = formatTime(date);
              const isLastAgentMessage = id === lastAgentMessage?.id;

              return (
                <div
                  className={cn(
                    "p-2 mb-4 rounded-lg",
                    sender === "user"
                      ? "max-w-[500px] bg-primary/85 text-background self-end px-4"
                      : "text-foreground"
                  )}
                  key={id}
                >
                  <div className="flex gap-2">
                    {sender === "agent" && (
                      <Avatar className="size-6 border border-muted-foreground/50 bg-background p-1">
                        <LogoIcon className="" />
                      </Avatar>
                    )}
                    <div className="whitespace-pre-wrap">
                      {isTyping && sender === "agent" && isLastAgentMessage ? (
                        <TypingEffect
                          text={message}
                          speed={TYPING_SPEED}
                          onComplete={() => {}}
                        />
                      ) : (
                        message
                      )}
                    </div>
                  </div>
                  {sender === "user" && (
                    <span className="block text-xs font-bold mt-2 text-right">
                      {formattedTime}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollArea>
      )}
    </>
  );
}
