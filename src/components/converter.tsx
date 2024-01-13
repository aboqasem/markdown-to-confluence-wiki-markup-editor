import { type ComponentProps, createSignal } from "solid-js";
import { Editor } from "~/components/editor";
import { baseTheme } from "~/extensions/base-theme";
import { lazyBasicSetup } from "~/extensions/basic-setup.lazy";
import { lazyMarkdown } from "~/extensions/lang-markdown.lazy";
import { md2Cwm } from "~/renderers/md2cwm";

export type ConverterProps = ComponentProps<"div">;

export function Converter(props: ConverterProps) {
  const inputEditorId = `${props.id}_input-editor`;
  const outputEditorId = `${props.id}_output-editor`;

  const [input, setInput] = createSignal("");

  const output = () => md2Cwm(input());

  return (
    <div
      {...props}
      data-testid={props.id}
      class="flex grow overflow-auto p-4 justify-between gap-4"
    >
      <Editor
        id={inputEditorId}
        data-testid={inputEditorId}
        class="size-full overflow-scroll"
        value={input}
        onValueChange={setInput}
        extensions={[baseTheme]}
        lazyExtensions={[lazyBasicSetup, lazyMarkdown]}
      />

      <hr class="border h-full border-gray-200" />

      <Editor
        id={outputEditorId}
        data-testid={outputEditorId}
        class="size-full overflow-scroll"
        value={output}
        extensions={[baseTheme]}
        lazyExtensions={[lazyBasicSetup]}
      />
    </div>
  );
}
