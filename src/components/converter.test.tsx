import { render } from "@solidjs/testing-library";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Converter } from "~/components/converter";

describe("Converter", () => {
  let rendered: ReturnType<typeof render>;
  let inputEditor: HTMLElement;
  let outputEditor: HTMLElement;

  beforeEach(() => {
    rendered = render(Converter);
    inputEditor = rendered
      .getByTestId("converter-input")
      .querySelector(".cm-content") as HTMLElement;
    outputEditor = rendered
      .getByTestId("converter-output")
      .querySelector(".cm-content") as HTMLElement;
  });

  it("exists", () => {
    expect(inputEditor).toBeInTheDocument();
    expect(outputEditor).toBeInTheDocument();
  });

  it("converts markdown to confluence wiki markup", async () => {
    const input = `# Hello World

- This is a list item
- This is another list item

> This is a blockquote

\`\`\`js
// This is a code block
console.log("Hello World");
\`\`\`
`;

    await userEvent.type(inputEditor, input);

    expect(outputEditor).matchSnapshot();
  });
});