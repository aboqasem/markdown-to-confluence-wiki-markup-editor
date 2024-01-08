# Markdown to Confluence Wiki Markup Editor

[![Netlify Status](https://api.netlify.com/api/v1/badges/3bb229e1-0d12-4a7b-a36a-c09cffa6015b/deploy-status)](https://app.netlify.com/sites/markdown-to-confluence-wiki-markup/deploys)

An editor that converts Markdown to [Confluence Wiki Markup](https://confluence.atlassian.com/doc/confluence-wiki-markup-251003035.html).

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
