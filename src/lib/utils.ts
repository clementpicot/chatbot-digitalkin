import { FileType } from "@/types";
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
    options.second = "2-digit";
    options.day = "numeric";
    options.month = "short";
    options.year = "numeric";
  }

  return new Date(timestamp).toLocaleTimeString("fr-FR", options);
}

export function getRandomValue(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getRandomFileType = (fileType: FileType[]) => {
  const randomIndex = Math.floor(Math.random() * fileType.length);
  return fileType[randomIndex];
};

export function getRandomAvatar() {
  const avatars = [
    "avatar.svg",
    "avatar1.svg",
    "avatar2.svg",
    "avatar3.svg",
    "avatar4.svg",
    "avatar5.svg",
  ];

  const randomIndex = Math.floor(Math.random() * avatars.length);
  return `/avatars/${avatars[randomIndex]}`;
}
