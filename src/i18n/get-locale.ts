import { cookies, headers } from "next/headers";
import { defaultLocale, normalizeLocale, type Locale } from "./config";

export async function getLocale(): Promise<Locale> {
  const cookieLocale = (await cookies()).get("locale")?.value;
  if (cookieLocale) {
    const normalized = normalizeLocale(cookieLocale);
    if (normalized) return normalized;
  }

  const acceptLanguage = (await headers()).get("accept-language") || "";
  const match = acceptLanguage
    .split(",")
    .map((part) => part.trim().split(";")[0])
    .map((lang) => normalizeLocale(lang))
    .find((value): value is Locale => Boolean(value));

  return match ?? defaultLocale;
}
