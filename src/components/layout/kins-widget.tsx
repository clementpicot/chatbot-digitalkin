"use client";

import { useKin } from "@/providers/kin-provider";
import { ChevronRight, Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export default function KinWidget() {
  const { kins } = useKin();
  const t = useTranslations();

  return (
    <div>
      <div className="border-b pb-4 mb-4 flex items-center justify-between gap-4">
        <h2 className="text-2xl">Kins</h2>
        <Button asChild>
          <Link href="/dashboard/kins/create">
            <Plus /> {t("kins.create")}
          </Link>
        </Button>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {kins.map((kin) => {
          return (
            <div
              className="border-2 rounded-lg p-4 hover:border-primary cursor-pointer"
              key={kin.id}
            >
              <Link
                className="flex flex-col h-full"
                href={`/dashboard/kins/${kin.url}`}
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-xl font-bold">
                    Kin {t("kins.name", { name: kin.title })}
                  </h3>
                  <span className="flex items-center gap-0.5 text-xs underline underline-offset-2">
                    {t("generic.newChat")} <ChevronRight width={12} />
                  </span>
                </div>
                <p className="text-sm mt-2 mb-4 text-muted-foreground">
                  {t("kins.description", { description: kin.description })}
                </p>

                <div className="mt-auto">
                  <Badge className="hover:bg-primary">
                    {t("kins.tokens", {
                      remainingTokens: kin.remainingTokens,
                      maxTokens: kin.maxTokens,
                    })}
                  </Badge>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
