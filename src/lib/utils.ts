import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const TYPING_SPEED = 10;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatTime(timestamp: number) {
  return new Date(timestamp).toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}