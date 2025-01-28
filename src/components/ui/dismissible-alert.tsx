"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { DismissibleAlertProps } from "@/types";
import { X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export function DismissibleAlert({
  content,
  variant,
  icon: Icon,
}: DismissibleAlertProps) {
  const [isVisible, setIsVisible] = useState(true);
  const t = useTranslations()

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <Alert variant={variant} className="relative">
      {Icon && (
        <div className="mb-2 flex items-center gap-2">
          <Icon width={20} />
          <span className="capitalize text-sm">{t(`variants.${variant}`)}</span>
        </div>
      )}
      <AlertDescription>{content}</AlertDescription>
      <span
        onClick={handleClose}
        className="absolute top-2 right-2 cursor-pointer"
      >
        <X className="size-3" />
      </span>
    </Alert>
  );
}
