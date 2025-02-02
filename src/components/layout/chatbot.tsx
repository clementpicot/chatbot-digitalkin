"use client";

import { cn, formatTime, SERVER_LATENCY, TYPING_SPEED } from "@/lib/utils";
import {} from "@/providers/kin-provider";
import { useEffect, useRef, useState } from "react";
import TypingEffect from "../typing-effect";
import { Avatar } from "../ui/avatar";
import { ScrollArea } from "../ui/scroll-area";
import { Message } from "./chatbot-interface";
import LogoIcon from "./logo-icon";
import { Kin } from "@/types";
import { useTranslations } from "next-intl";

export default function Chatbot({
  messages,
  isTyping,
  kin,
}: {
  messages: Message[];
  isTyping: boolean;
  kin: Kin[];
}) {
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [showTypingIndicator, setShowTypingIndicator] = useState(false);
  const t = useTranslations()

  // Auto scroll to bottom of ScrollView when there
  // is a new message to ensure user visibility
  useEffect(() => {
    const scrollArea = scrollAreaRef.current?.querySelector(
      "[data-radix-scroll-area-viewport]"
    );
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }, [messages]);

  // Simulate latency before showing the typing indicator
  useEffect(() => {
    if (isTyping) {
      const timeout = setTimeout(() => {
        setShowTypingIndicator(true);
      }, SERVER_LATENCY);

      return () => {
        clearTimeout(timeout);
      };
    } else {
      setShowTypingIndicator(false);
    }
  }, [isTyping]);

  // Find the last agent message
  const lastAgentMessage = [...messages]
    .reverse()
    .find(({ sender }) => sender === "agent");

  return (
    <>
      {messages.length === 0 && (
        <div className="h-full flex flex-col items-center justify-center text-muted-foreground max-w-lg mx-auto text-center">
          <LogoIcon className="opacity-50 size-12" />
          <h2 className="text-xl mt-4">
            {t('kins.chat.title', {name: kin[0].title})}
          </h2>
          <p className="mt-2">{t('kins.description', {description: kin[0].description})}</p>
        </div>
      )}
      {messages.length > 0 && (
        <ScrollArea
          ref={scrollAreaRef}
          className={cn("flex-1 pr-6", messages.length === 0 && "flex")}
        >
          <div className="flex flex-col">
            {messages.map(({ id, message, date, sender }) => {
              const formattedTime = formatTime(date);
              const isLastAgentMessage = id === lastAgentMessage?.id;

              return (
                <div
                  className={cn("mb-4", sender === "user" && "self-end")}
                  key={id}
                >
                  <div
                    className={cn(
                      "p-2 mb-2 rounded-lg",
                      sender === "user"
                        ? "max-w-[500px] bg-primary/85 text-background px-4"
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
                      <div className="whitespace-pre-wrap self-center">
                        {isTyping &&
                        sender === "agent" &&
                        isLastAgentMessage ? (
                          showTypingIndicator ? (
                            <TypingEffect
                              text={message}
                              speed={TYPING_SPEED}
                              onComplete={() => {}}
                            />
                          ) : (
                            <div className="typing-indicator">
                              <div className="dot"></div>
                              <div className="dot"></div>
                              <div className="dot"></div>
                            </div>
                          )
                        ) : (
                          message
                        )}
                      </div>
                    </div>
                  </div>
                  {sender === "user" && (
                    <span className="block text-xs font-bold text-right">
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
