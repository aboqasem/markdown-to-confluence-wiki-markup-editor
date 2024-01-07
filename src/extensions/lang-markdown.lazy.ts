import type { Extension } from "@codemirror/state";
import { lazyLanguages } from "~/extensions/languages.lazy";

let markdown: Promise<Extension> | null = null;

export async function lazyMarkdown(): Promise<Extension> {
  const languages = lazyLanguages();

  if (markdown === null) {
    markdown = import("@codemirror/lang-markdown").then(async (m) =>
      m.markdown({ codeLanguages: await languages }),
    );
  }

  return markdown;
}
