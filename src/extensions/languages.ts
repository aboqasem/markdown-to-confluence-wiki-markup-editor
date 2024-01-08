import {
  LanguageDescription,
  LanguageSupport,
  StreamLanguage,
  type StreamParser,
} from "@codemirror/language";
import { type SupportedCwmLanguageName, supportedCwmLanguages } from "~/data/supported-languages";
import type { NonNullableItems } from "~/types/helpers";

function legacy(parser: StreamParser<unknown>) {
  return new LanguageSupport(StreamLanguage.define(parser));
}

const languageLoaders: {
  [key in SupportedCwmLanguageName]: (() => Promise<LanguageSupport>) | null;
} = {
  as3: null,
  applescript: null,
  bash: () => import("@codemirror/legacy-modes/mode/shell").then((m) => legacy(m.shell)),
  "c#": () => import("@codemirror/legacy-modes/mode/clike").then((m) => legacy(m.csharp)),
  c: () => import("@codemirror/lang-cpp").then((m) => m.cpp()),
  css: () => import("@codemirror/lang-css").then((m) => m.css()),
  cf: null,
  pas: () => import("@codemirror/legacy-modes/mode/pascal").then((m) => legacy(m.pascal)),
  diff: () => import("@codemirror/legacy-modes/mode/diff").then((m) => legacy(m.diff)),
  erl: () => import("@codemirror/legacy-modes/mode/erlang").then((m) => legacy(m.erlang)),
  groovy: () => import("@codemirror/legacy-modes/mode/groovy").then((m) => legacy(m.groovy)),
  xml: () => import("@codemirror/lang-html").then((m) => m.html()),
  java: () => import("@codemirror/lang-java").then((m) => m.java()),
  jfx: () => import("@codemirror/lang-html").then((m) => m.html()),
  js: () => import("@codemirror/lang-javascript").then((m) => m.javascript()),
  php: () => import("@codemirror/lang-php").then((m) => m.php()),
  pl: () => import("@codemirror/legacy-modes/mode/perl").then((m) => legacy(m.perl)),
  text: null,
  ps: () => import("@codemirror/legacy-modes/mode/powershell").then((m) => legacy(m.powerShell)),
  py: () => import("@codemirror/lang-python").then((m) => m.python()),
  rb: () => import("@codemirror/legacy-modes/mode/ruby").then((m) => legacy(m.ruby)),
  sql: () => import("@codemirror/lang-sql").then((m) => m.sql()),
  sass: () => import("@codemirror/lang-sass").then((m) => m.sass({ indented: true })),
  scala: () => import("@codemirror/legacy-modes/mode/clike").then((m) => legacy(m.scala)),
  vb: () => import("@codemirror/legacy-modes/mode/vb").then((m) => legacy(m.vb)),
  yml: () => import("@codemirror/legacy-modes/mode/yaml").then((m) => legacy(m.yaml)),
};

export const languages: LanguageDescription[] = Object.entries(languageLoaders)
  .filter((entry): entry is NonNullableItems<typeof entry> => entry[1] !== null)
  .map(([name, load]) =>
    LanguageDescription.of({
      name,
      // biome-ignore lint/style/noNonNullAssertion: languageLoaders has exact names of supportedCwmLanguages
      extensions: supportedCwmLanguages.find((l) => l.cwm === name)!.aliases,
      load,
    }),
  );
