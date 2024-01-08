# Markdown to Confluence Wiki Markup Editor

[![Netlify Status](https://api.netlify.com/api/v1/badges/3bb229e1-0d12-4a7b-a36a-c09cffa6015b/deploy-status)](https://app.netlify.com/sites/markdown-to-confluence-wiki-markup/deploys)

An editor that converts Markdown to [Confluence Wiki Markup](https://confluence.atlassian.com/doc/confluence-wiki-markup-251003035.html).

## Features

- [x] Basic functionality
  - [x] [Headings](https://confluence.atlassian.com/doc/confluence-wiki-markup-251003035.html#ConfluenceWikiMarkup-Headings)
  - [ ] [Lists](https://confluence.atlassian.com/doc/confluence-wiki-markup-251003035.html#ConfluenceWikiMarkup-Lists)
    - [x] Single level
    - [ ] Multiple levels
  - [x] [Links](https://confluence.atlassian.com/doc/confluence-wiki-markup-251003035.html#ConfluenceWikiMarkup-Links)
  - [x] [Tables](https://confluence.atlassian.com/doc/confluence-wiki-markup-251003035.html#ConfluenceWikiMarkup-Tables)
  - [ ] [Text effects](https://confluence.atlassian.com/doc/confluence-wiki-markup-251003035.html#ConfluenceWikiMarkup-TextEffects)
    - [x] Bold / Strong
    - [x] Italic / Emphasis
    - [-] Citation?
    - [ ] Deleted / Strikethrough
    - [-] Inserted / Underline
    - [-] Superscript?
    - [-] Subscript?
    - [x] Monospaced
    - [x] Blockquote
    - [-] Colored?
  - [x] [Text breaks](https://confluence.atlassian.com/doc/confluence-wiki-markup-251003035.html#ConfluenceWikiMarkup-TextBreaks)
    - [x] Line break (using `<br/>`s)
    - [x] Horizontal rule
  - [ ] [Links](https://confluence.atlassian.com/doc/confluence-wiki-markup-251003035.html#ConfluenceWikiMarkup-Links)
  - [ ] [Images](https://confluence.atlassian.com/doc/confluence-wiki-markup-251003035.html#ConfluenceWikiMarkup-Images)
  - [x] [Simple code blocks](https://confluence.atlassian.com/doc/code-block-macro-139390.html)

## Tech Stack

- [TypeScript](https://www.typescriptlang.org)
- [Bun](https://bun.sh)
- [Biome](https://biomejs.dev)
- [Vite](https://vitejs.dev)
- [Vitest](https://vitest.dev)
- [Solid](https://solidjs.com)
- [Tailwind CSS](https://tailwindcss.com)
- [CodeMirror](https://codemirror.net)
- [Marked](https://marked.js.org)

## Development

```bash
# Install dependencies
bun install

# Start dev server
bun dev

# Build for production
bun run build

# Preview production build
bun run preview

# Run tests
bun run test # or `bun run test:watch` for watch mode

# Format & lint
bun check
```
