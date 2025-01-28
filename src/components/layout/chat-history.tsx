"use client";

import { MessageCirclePlus } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { useTranslations } from "next-intl";

export default function ChatHistory({
  slug,
  className,
}: {
  slug: string;
  className: string;
}) {

  const t = useTranslations();

  return (
    <>
      <Button
        className="flex gap-2 font-bold mb-4 max-w-[calc(100%-1rem)] w-full mx-auto"
        asChild
      >
        <a href={`/dashboard/kins/${slug}`}>
          <MessageCirclePlus /> {t('generic.newChat')}
        </a>
      </Button>
      <ScrollArea className={`pr-4 ${className}`}>
        <div className="mb-6">
          <h2 className="text-xs text-muted-foreground font-bold mb-2 pl-2">
            {t('timestamp.today')}
          </h2>
          {[...Array(4).keys()].map((item) => (
            <Link
              href="#"
              className="text-sm p-2 hover:bg-muted-foreground/20 w-full block rounded-lg"
              key={item}
            >
              This is a chat with a Kin agent
            </Link>
          ))}
        </div>
        <div className="mb-6">
          <h2 className="text-xs text-muted-foreground font-bold mb-2 pl-2">
          {t('timestamp.yesterday')}
          </h2>
          {[...Array(2).keys()].map((item) => (
            <Link
              href="#"
              className="text-sm p-2 hover:bg-muted-foreground/20 w-full block rounded-lg"
              key={item}
            >
              This is a chat with a Kin agent
            </Link>
          ))}
        </div>
        <div className="mb-6">
          <h2 className="text-xs text-muted-foreground font-bold mb-2 pl-2">
          {t('timestamp.1weekAgo')}
          </h2>
          {[...Array(5).keys()].map((item) => (
            <Link
              href="#"
              className="text-sm p-2 hover:bg-muted-foreground/20 w-full block rounded-lg"
              key={item}
            >
              This is a chat with a Kin agent
            </Link>
          ))}
        </div>
        <div className="mb-6">
          <h2 className="text-xs text-muted-foreground font-bold mb-2 pl-2">
          {t('timestamp.1monthAgo')}
          </h2>
          {[...Array(3).keys()].map((item) => (
            <Link
              href="#"
              className="text-sm p-2 hover:bg-muted-foreground/20 w-full block rounded-lg"
              key={item}
            >
              This is a chat with a Kin agent
            </Link>
          ))}
        </div>
        <div className="mb-6">
          <h2 className="text-xs text-muted-foreground font-bold mb-2 pl-2">
          {t('timestamp.2monthsAgo')}
          </h2>
          {[...Array(3).keys()].map((item) => (
            <Link
              href="#"
              className="text-sm p-2 hover:bg-muted-foreground/20 w-full block rounded-lg"
              key={item}
            >
              This is a chat with a Kin agent
            </Link>
          ))}
        </div>
      </ScrollArea>
    </>
  );
}
