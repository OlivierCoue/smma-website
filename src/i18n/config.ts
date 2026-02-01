export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export function normalizeLocale(value: string | null | undefined): Locale | null {
  if (!value) return null;
  const base = value.toLowerCase().split("-")[0];
  return locales.includes(base as Locale) ? (base as Locale) : null;
}
