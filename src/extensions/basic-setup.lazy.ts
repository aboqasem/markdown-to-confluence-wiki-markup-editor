import type { Extension } from "@codemirror/state";

let basicSetup: Promise<Extension> | null = null;

export function lazyBasicSetup(): Promise<Extension> {
  if (basicSetup === null) {
    basicSetup = import("./basic-setup").then((m) => m.basicSetup);
  }

  return basicSetup;
}
