# AGENTS.md

## Commands
- `npm run dev` - Start dev server
- `npm run build` - Production build
- `npm run preview` - Preview build
- `npm run lighthouse` - Run Lighthouse audit

## Requirements
- Node.js >= 22.12.0

## Architecture
- **Content location:** `src/content/` - Add `.md` files to subdirectories (posts/, publications/, projects/, talks/, teaching/)
- **Config:** `src/config/site.ts` - Site metadata, analytics
- **Config:** `src/config/pages.ts` - Page titles, active/inactive state
- **Config:** `src/config/navigation.ts` - Navigation links
- **Styles:** `src/styles/global.css` - Theme colors, base styles

## Key Constraints
- **No `<style>` in `.astro` files** - Use global.css and Tailwind classes in components
- **Two-column layout:** Left sidebar (sticky profile), Right main (scrollable content)
- **Markdown-driven:** All content in `.md` files with YAML frontmatter

## Notes
- Tailwind CSS v4 uses `@tailwindcss/vite` plugin (no tailwind.config.js)
- LaTeX math rendering enabled via remark-math/rehype-katex
- No lint/typecheck scripts configured