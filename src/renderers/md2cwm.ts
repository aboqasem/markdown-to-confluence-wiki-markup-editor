import { Renderer } from "marked";

const BR_PATTERN = /\s*<br\s*\/?>\s*/g;
const BR_ZERO_OR_MORE_PATTERN = new RegExp(`(?:${BR_PATTERN.source})*`);
const BR_REPLACE_PATTERN = new RegExp(
  `^(${BR_ZERO_OR_MORE_PATTERN.source})?((?:.|\\s)*?)(${BR_ZERO_OR_MORE_PATTERN.source})?$`,
);
type BrReplacer = (
  match: string,
  startBrs: string | undefined,
  other: string | undefined,
  endBrs: string | undefined,
  offset: number,
  string: string,
) => string;

const UNESCAPE_MAP: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
};
const UNESCAPE_PATTERN = new RegExp(`(${Object.keys(UNESCAPE_MAP).join("|")})`, "g");

export class Md2CwmRenderer extends Renderer {
  override code(code: string, infostring: string | undefined, _escaped: boolean): string {
    const languageProp = infostring ? `language=${infostring}` : "";
    return `{code:${languageProp}|linenumbers=true|collapse=false}\n${code}\n{code}\n`;
  }

  override blockquote(quote: string): string {
    return `bq. ${quote}\n`;
  }

  override html(html: string, _block?: boolean): string {
    const replacer: BrReplacer = (_match, startBrs, other, endBrs) => {
      const br = this.br();

      const start = startBrs?.replace(BR_PATTERN, br) ?? "";
      const html = other ? `\n{html}${other}{html}\n` : "";
      const end = endBrs?.replace(BR_PATTERN, br) ?? "";

      return `${start}${html}${end}`;
    };

    return html.replace(BR_REPLACE_PATTERN, replacer);
  }

  override heading(text: string, level: number, _raw: string): string {
    return `h${level}. ${text}\n`;
  }

  override hr(): string {
    return "---\n";
  }

  override list(body: string, ordered: boolean, _start: number | ""): string {
    return `${body.trim().replace(/^|(?<=\n+)/g, ordered ? "# " : "* ")}\n\n`;
  }

  override listitem(text: string, _task: boolean, _checked: boolean): string {
    return `${text}\n`;
  }

  override checkbox(checked: boolean): string {
    return super.checkbox(checked);
  }

  override paragraph(text: string): string {
    return `${text}\n`;
  }

  override table(header: string, body: string): string {
    return `${header}${body}\n`;
  }

  override tablerow(content: string): string {
    return `${content} |\n`;
  }

  override tablecell(
    content: string,
    flags: {
      header: boolean;
      align: "center" | "left" | "right" | null;
    },
  ): string {
    return flags.header ? `|| ${content}` : `| ${content}`;
  }

  override strong(text: string): string {
    return `{*}${text}{*}`;
  }

  override em(text: string): string {
    return `{_}${text}{_}`;
  }

  override codespan(text: string): string {
    return `{{{}${text}{}}}`;
  }

  override br(): string {
    return " \\\\ ";
  }

  override del(text: string): string {
    return `{-}${text}{-}`;
  }

  override link(href: string, title: string | null | undefined, text: string): string {
    const aliasProp = text ? `${text}|` : "";
    const tooltipProp = title ? `|${title}` : "";
    return `[${aliasProp}${href}${tooltipProp}]`;
  }

  override image(href: string, title: string | null, text: string): string {
    return `{html}${super.image(href, title, text)}{html}\n`;
  }

  override text(text: string): string {
    return text.replace(UNESCAPE_PATTERN, (match) => UNESCAPE_MAP[match]);
  }
}
