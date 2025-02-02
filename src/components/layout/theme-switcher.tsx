"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
