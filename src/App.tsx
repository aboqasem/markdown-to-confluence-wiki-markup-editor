import { markdown } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { basicSetup } from 'codemirror';
import { createSignal } from 'solid-js';
import { Editor, baseTheme } from '~/components/editor';

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
  const [input, setInput] = createSignal('');

  return (
    <div class="h-screen max-h-screen flex flex-col">
      <Header />

      <div class="flex grow overflow-auto p-4 justify-between gap-4">
        <Editor
          class="size-full overflow-scroll"
          value={input}
          onValueChange={setInput}
          extensions={[basicSetup, baseTheme, markdown({ codeLanguages: languages })]}
        />

        <hr class="border h-full border-gray-200" />

        <Editor
          class="size-full overflow-scroll"
          value={input}
          extensions={[basicSetup, baseTheme]}
        />
      </div>
    </div>
  );
}

export default App;
