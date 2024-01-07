import type { Extension } from "@codemirror/state";
import {
  CreateCodeMirrorProps,
  createCodeMirror,
  createEditorControlledValue,
  createLazyCompartmentExtension,
} from "solid-codemirror";
import { Accessor, ComponentProps, splitProps } from "solid-js";

export type EditorProps = ComponentProps<"div"> &
  Pick<CreateCodeMirrorProps, "onValueChange"> & {
    value?: string | Accessor<string>;
    extensions?: (Extension | Accessor<Extension | undefined>)[];
    lazyExtensions?: (() => Promise<Extension | null | undefined>)[];
  };

const componentPropsKeys: (keyof EditorProps)[] = [
  "value",
  "onValueChange",
  "extensions",
  "lazyExtensions",
];

export function Editor(props: EditorProps) {
  const [componentProps, otherProps] = splitProps(props, componentPropsKeys);

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

  if (componentProps.lazyExtensions) {
    for (const lazyExtension of componentProps.lazyExtensions) {
      createLazyCompartmentExtension(lazyExtension, editorView);
    }
  }

  return <div {...otherProps} ref={editorRef} />;
}
