import { closeBrackets, closeBracketsKeymap } from "@codemirror/autocomplete";
import { defaultKeymap, history, historyKeymap } from "@codemirror/commands";
import {
  bracketMatching,
  defaultHighlightStyle,
  indentOnInput,
  syntaxHighlighting,
} from "@codemirror/language";
import { highlightSelectionMatches, searchKeymap } from "@codemirror/search";
import { EditorState, Extension } from "@codemirror/state";
import {
  EditorView,
  drawSelection,
  highlightActiveLine,
  highlightActiveLineGutter,
  highlightSpecialChars,
  keymap,
  lineNumbers,
} from "@codemirror/view";
import {
  CreateCodeMirrorProps,
  createCodeMirror,
  createEditorControlledValue,
} from "solid-codemirror";
import { Accessor, ComponentProps, splitProps } from "solid-js";

export const basicSetup = [
  lineNumbers(),
  highlightActiveLineGutter(),
  highlightSpecialChars(),
  history(),
  drawSelection(),
  EditorState.allowMultipleSelections.of(true),
  indentOnInput(),
  syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
  bracketMatching(),
  closeBrackets(),
  highlightActiveLine(),
  highlightSelectionMatches(),
  keymap.of([...closeBracketsKeymap, ...defaultKeymap, ...searchKeymap, ...historyKeymap]),
];

export const baseTheme = EditorView.baseTheme({
  "&": {
    height: "100%",
    width: "100%",
  },
});

export function Editor(
  props: ComponentProps<"div"> &
    Pick<CreateCodeMirrorProps, "onValueChange"> & {
      value?: string | Accessor<string>;
      extensions?: (Extension | Accessor<Extension | undefined>)[];
    },
) {
  const [componentProps, divProps] = splitProps(props, ["value", "onValueChange", "extensions"]);

  const {
    editorView,
    createExtension,
    ref: editorRef,
  } = createCodeMirror({
    value:
      typeof componentProps.value === "function" ? componentProps.value() : componentProps.value,
    onValueChange: componentProps.onValueChange,
  });

  if (typeof componentProps.value === "function") {
    createEditorControlledValue(editorView, componentProps.value);
  }

  if (componentProps.extensions) {
    for (const extension of componentProps.extensions) {
      createExtension(extension);
    }
  }

  return <div {...divProps} ref={editorRef} />;
}
