import { render } from "@solidjs/testing-library";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Converter } from "~/components/converter";

function assertInstanceOf<T>(value: unknown, type: new () => T): T {
  chai.assert.instanceOf(value, type);

  return value as T;
}

describe("Converter", () => {
  const converterId = "converter";
  const converterInputId = `${converterId}_input-editor`;
  const converterOutputId = `${converterId}_output-editor`;
  let rendered: ReturnType<typeof render>;
  let inputEditor: HTMLDivElement;
  let outputEditor: HTMLDivElement;

  beforeEach(() => {
    rendered = render(() => <Converter id={converterId} />);
    inputEditor = assertInstanceOf(
      rendered.getByTestId(converterInputId).querySelector(".cm-content"),
      HTMLDivElement,
    );
    outputEditor = assertInstanceOf(
      rendered.getByTestId(converterOutputId).querySelector(".cm-content"),
      HTMLDivElement,
    );
  });

  it("converts markdown to confluence wiki markup", async () => {
    const input = `
# Hello World

- This is a list item
- This is another list item

> This is a blockquote

\`\`\`js
// This is a code block
console.log("Hello World");
\`\`\`
`;

    await userEvent.type(inputEditor, input, { delay: null });

    expect(outputEditor).matchSnapshot();
  });
});
