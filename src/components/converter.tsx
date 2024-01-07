import { marked } from "marked";
import { createSignal } from "solid-js";
import { Editor } from "~/components/editor";
import { baseTheme } from "~/extensions/base-theme";
import { lazyBasicSetup } from "~/extensions/basic-setup.lazy";
import { lazyMarkdown } from "~/extensions/lang-markdown.lazy";
import { Md2CwmRenderer } from "~/renderers/md2cwm";

export function Converter() {
  const renderer = new Md2CwmRenderer();

  const [input, setInput] = createSignal("");

  const output = () => marked(input(), { renderer }) as string;

  return (
    <div class="flex grow overflow-auto p-4 justify-between gap-4">
      <Editor
        data-testid="converter-input"
        class="size-full overflow-scroll"
        value={input}
        onValueChange={setInput}
        extensions={[baseTheme]}
        lazyExtensions={[lazyBasicSetup, lazyMarkdown]}
      />

      <hr class="border h-full border-gray-200" />

      <Editor
        data-testid="converter-output"
        class="size-full overflow-scroll"
        value={output}
        extensions={[baseTheme]}
        lazyExtensions={[lazyBasicSetup]}
      />
    </div>
  );
}
