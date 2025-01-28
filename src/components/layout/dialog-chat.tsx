"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useKin } from "@/providers/kin-provider";
import { Bot, MessageCirclePlus } from "lucide-react";
import Link from "next/link";

export default function DialogChat() {
  const { kins } = useKin();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex gap-2 font-bold my-4 max-w-[calc(100%-1rem)] w-full mx-auto tutorial-4">
          <MessageCirclePlus />{" "}
          <span className="group-data-[collapsible=icon]:hidden">
            Start a new chat
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-2xl"
        aria-describedby="Select a Kin to start a chat or create a new one"
      >
        <DialogHeader>
          <DialogTitle>Select a Kin</DialogTitle>
          <DialogDescription>
            Your available Kins are listed below. Select one of them and start
            chatting, or create a new Kin to fit your needs.
          </DialogDescription>
        </DialogHeader>
        <div className="grid sm:grid-cols-2 items-center gap-4">
          {kins.map((kin) => (
            <div
              className="flex flex-col p-4 border-2 border-border hover:border-foreground transition-all duration-75 rounded-lg col-span-1"
              key={kin.id}
            >
              <h2 className="text-xl font-bold">Kin {kin.title}</h2>
              <p className="text-sm mt-2">{kin.description}</p>
              <p className="text-xs mt-4 text-muted-foreground">
                {kin.remainingTokens} of {kin.maxTokens} tokens left
              </p>
              <DialogClose asChild>
                <Button className="mt-4" asChild>
                  <Link href={`/dashboard/kins/${kin.url}`}>Select</Link>
                </Button>
              </DialogClose>
            </div>
          ))}
        </div>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border my-2">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Or
          </span>
        </div>
        <div className="flex justify-center">
          <DialogClose asChild>
            <Button className="flex gap-2 w-full" asChild>
              <Link href="/dashboard/kins/create">
                <Bot /> Create and configure a new Kin
              </Link>
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
