import ChatHistory from "@/components/layout/chat-history";
import ChatbotInterface from "@/components/layout/chatbot-interface";
import { Button } from "@/components/ui/button";
import Cell from "@/components/ui/cell";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { History } from "lucide-react";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return (
    <div className="md:flex gap-4">
      <Cell className="flex-1 flex flex-col h-[calc(100vh-64px-1rem)]">
        <ChatbotInterface slug={slug} />
      </Cell>

      {/* Chat history on desktop */}
      <Cell className="hidden md:flex min-w-64 flex-col h-[calc(100vh-64px-1rem)]">
        <ChatHistory slug={slug} className="flex-1" />
      </Cell>

      {/* Chat history on mobile */}
      <div className="md:hidden absolute top-3.5 right-0 pr-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <History />
            </Button>
          </SheetTrigger>
          <SheetContent className="pt-12">
            <SheetHeader>
              <SheetTitle className="sr-only">Chat history</SheetTitle>
              <SheetDescription className="sr-only">
                This is where all your chat history with your Kin is listed
              </SheetDescription>
            </SheetHeader>
            <ChatHistory
              slug={slug}
              className="h-[calc(100vh-64px-6rem)] !mt-8"
            />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
