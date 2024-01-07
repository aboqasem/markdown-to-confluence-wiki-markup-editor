import { render } from "@solidjs/testing-library";
import { Header } from "~/components/header";

describe("Header", () => {
  it("has header and text", () => {
    const rendered = render(Header);

    const header = rendered.container.querySelector("header");

    expect(header?.textContent).toBe("Markdown to Confluence Wiki Markup Editor");
  });
});
