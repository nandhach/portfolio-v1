export const CONTENT_LOCALES = ["en", "id"] as const;
export type ContentLocale = (typeof CONTENT_LOCALES)[number];
export type Localized<T> = Record<ContentLocale, T>;

export const getContentLocale = (locale: string = "en"): ContentLocale =>
  locale === "id" ? "id" : "en";
