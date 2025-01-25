import ChatHistory from "@/components/layout/chat-history";
import ChatbotInterface from "@/components/layout/chatbot-interface";
import { Button } from "@/components/ui/button";
import Cell from "@/components/ui/cell";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCirclePlus } from "lucide-react";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return (
    <div className="flex gap-4">
      <Cell className="flex-1 flex flex-col h-[calc(100vh-64px-1rem)]">
        <ChatbotInterface slug={slug} />
      </Cell>
      <Cell className="min-w-64 flex flex-col h-[calc(100vh-64px-1rem)]">
        <Button
          className="flex gap-2 font-bold mb-4 max-w-[calc(100%-1rem)] w-full mx-auto"
          asChild
        >
          <a href={`/dashboard/kins/${slug}`}>
            <MessageCirclePlus /> New chat
          </a>
        </Button>
        <ScrollArea className="flex-1 pr-4">
          <ChatHistory />
        </ScrollArea>
      </Cell>
    </div>
  );
}
