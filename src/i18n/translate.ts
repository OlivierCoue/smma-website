import { defaultLocale, type Locale } from "./config";
import { messages as messagesEn } from "./messages.en";
import { messages as messagesFr, type MessageKey } from "./messages.fr";

const messagesByLocale: Record<Locale, Record<MessageKey, string>> = {
  fr: messagesFr,
  en: messagesEn,
};

export function t(locale: Locale, key: MessageKey): string {
  return (
    messagesByLocale[locale]?.[key] ??
    messagesByLocale[defaultLocale][key] ??
    key
  );
}

export function createTranslator(locale: Locale) {
  return (key: MessageKey) => t(locale, key);
}
