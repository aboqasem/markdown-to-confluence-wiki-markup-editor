import { Renderer } from 'marked';

export class Md2CwmRenderer extends Renderer {
  override code(code: string, infostring: string | undefined, _escaped: boolean): string {
    const languageProp = infostring ? `language=${infostring}` : '';
    return `{code:${languageProp}|linenumbers=true|collapse=false}\n${code}\n{code}\n`;
  }

  override blockquote(quote: string): string {
    return `bq. ${quote}\n`;
  }

  override html(html: string, block?: boolean): string {
    return super.html(html, block);
  }

  override heading(text: string, level: number, _raw: string): string {
    return `h${level}. ${text}\n`;
  }

  override hr(): string {
    return '---\n';
  }

  override list(body: string, ordered: boolean, _start: number | ''): string {
    return `${body.trim().replace(/^|(?<=\n+)/g, ordered ? '# ' : '* ')}\n\n`;
  }

  override listitem(text: string, task: boolean, checked: boolean): string {
    return `${text}\n`;
  }

  override checkbox(checked: boolean): string {
    return super.checkbox(checked);
  }

  override paragraph(text: string): string {
    return `${text}\n`;
  }

  override table(header: string, body: string): string {
    return `${header}${body}`;
  }

  override tablerow(content: string): string {
    return `${content} |\n`;
  }

  override tablecell(
    content: string,
    flags: {
      header: boolean;
      align: 'center' | 'left' | 'right' | null;
    },
  ): string {
    return flags.header ? `|| ${content}` : `| ${content}`;
  }

  override strong(text: string): string {
    return `*${text}*`;
  }

  override em(text: string): string {
    return `_${text}_`;
  }

  override codespan(text: string): string {
    return `{{${text}}}`;
  }

  override br(): string {
    return '\\\\';
  }

  override del(text: string): string {
    return `-${text}-`;
  }

  override link(href: string, title: string | null | undefined, text: string): string {
    const aliasProp = text ? `${text}|` : '';
    const tooltipProp = title ? `|${title}` : '';
    return `[${aliasProp}${href}${tooltipProp}]`;
  }

  override image(href: string, title: string | null, text: string): string {
    return `{html}${super.image(href, title, text)}{html}\n`;
  }

  override text(text: string): string {
    return super.text(text);
  }
}
