import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const TYPING_SPEED = 10;
export const SERVER_LATENCY = 1000;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTime(
  timestamp: number,
  fullDateTime: boolean = false
): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  if (fullDateTime) {
    options.second = '2-digit'
    options.day = "numeric";
    options.month = "short";
    options.year = "numeric";
  }

  return new Date(timestamp).toLocaleTimeString("fr-FR", options);
}

export function getRandomValue(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
