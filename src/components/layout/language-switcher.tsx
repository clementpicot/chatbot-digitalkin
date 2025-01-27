"use client";

import { useTranslation } from "@/hooks/use-translation";
import { LocaleContext } from "@/providers/locale-provider";
import { useContext } from "react";

export default function LanguageSwitcher() {
  const { t } = useTranslation();
  const { locale, setLocale } = useContext(LocaleContext);

  const isLocale = locale === "fr" ? "en" : "fr";

  return (
    <div>
      <button data-active={isLocale} onClick={() => setLocale(isLocale)}>
        {t("switch")} {locale === "fr" ? t("english") : t("french")}
      </button>
    </div>
  );
}
