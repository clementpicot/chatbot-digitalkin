import React from "react";
import { Message } from "./chatbot-interface";
import LogoIcon from "./logo-icon";
import { cn, formatTime } from "@/lib/utils";
import { Avatar, AvatarImage } from "../ui/avatar";

export default function Chatbot({ messages }: { messages: Message[] }) {
  if (messages.length === 0) {
    return (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <LogoIcon className="opacity-50" />
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {messages.map(({ id, message, date, sender }) => {
        const formattedTime = formatTime(date);

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
            <div className="flex items-center gap-2">
              {sender === "agent" && (
                <Avatar className="size-6 border border-muted-foreground/50 bg-background p-1">
                  <LogoIcon className="" />
                </Avatar>
              )}
              <div className="whitespace-pre-wrap">{message}</div>
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
  );
}
