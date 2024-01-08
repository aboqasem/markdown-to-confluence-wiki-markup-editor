import { languages } from "~/extensions/languages";

test("languages", async () => {
  for await (const language of languages) {
    expect(language.name).is.not.empty;
    expect(language.extensions).is.not.empty;
    expect(await language.load()).is.not.null;
  }
});
