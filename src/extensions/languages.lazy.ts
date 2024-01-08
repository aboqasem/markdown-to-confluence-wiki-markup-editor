import type { LanguageDescription } from "@codemirror/language";

let languages: Promise<LanguageDescription[]> | null = null;

export function lazyLanguages(): Promise<LanguageDescription[]> {
  if (languages === null) {
    languages = import("./languages").then((m) => m.languages);
  }

  return languages;
}
