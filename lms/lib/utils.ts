import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const cnNew = (
  ...classes: (string | boolean | undefined | null)[]
): string => classes.filter(Boolean).join(" ");
