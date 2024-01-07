import { marked } from "marked";
import { createSignal } from "solid-js";
import { Editor } from "~/components/editor";
import { baseTheme } from "~/extensions/base-theme";
import { lazyBasicSetup } from "~/extensions/basic-setup.lazy";
import { lazyMarkdown } from "~/extensions/lang-markdown.lazy";
import { Md2CwmRenderer } from "~/renderers/md2cwm";

function Header() {
  return (
    <header class="md:flex md:items-center md:justify-between bg-zinc-900 p-4">
      <div class="min-w-0 flex-1">
        <h2 class="text-2xl font-medium leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
          Markdown to Confluence Wiki Markup Editor
        </h2>
      </div>
    </header>
  );
}

function App() {
  const renderer = new Md2CwmRenderer();

  const [input, setInput] = createSignal("");

  const output = () => marked(input(), { renderer }) as string;

  return (
    <div class="h-screen max-h-screen flex flex-col">
      <Header />

      <div class="flex grow overflow-auto p-4 justify-between gap-4">
        <Editor
          class="size-full overflow-scroll"
          value={input}
          onValueChange={setInput}
          extensions={[baseTheme]}
          lazyExtensions={[lazyBasicSetup, lazyMarkdown]}
        />

        <hr class="border h-full border-gray-200" />

        <Editor
          class="size-full overflow-scroll"
          value={output}
          extensions={[baseTheme]}
          lazyExtensions={[lazyBasicSetup]}
        />
      </div>
    </div>
  );
}

export default App;
