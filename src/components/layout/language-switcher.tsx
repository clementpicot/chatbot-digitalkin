"use client";

import { setUserLocale } from "@/services/locale";
import { useLocale, useTranslations } from "next-intl";


export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations();

  return (
    <div>
      <button onClick={() => setUserLocale(locale === "en" ? "fr" : "en")}>
        {t("user.lang")}
      </button>
    </div>
  );
}
