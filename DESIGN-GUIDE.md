# DESIGN-GUIDE.md

## Design Philosophy

Follows this core aesthetic principles: **clean, minimal, content-first**. The design should never compete with the content-everything exists to serve readability.

---

## Layout

### 2-Column Structure (Primary)
- **Left Sidebar:** Sticky profile with name, institution, social links, short bio. Fixed width (~280px desktop).
- **Right Main:** Scrollable content area. Max-width 800px for optimal reading line length.
- **Responsive:** Sidebar collapses to top/bottom header on mobile.

### Spacing
- Generous vertical whitespace between sections (3-4rem).
- Items in lists separated by 3.5rem gaps.
- Paragraphs use relaxed line-height (1.8) for readability.

---

## Color

### Principles (AstroPaper-inspired)
- **Monochromatic base:** Let content breathe. No competing colors.
- **Accent = function:** Use accent only for hover states, active links, and subtle highlights.
- **One accent color per theme:** Never use multiple accent colors together.

### Theme System
- Themes configured in `src/config/themes.ts` (LIGHT_THEMES, DARK_THEMES)
- Each theme defines 6 tokens: `background`, `foreground`, `accent`, `muted`, `border`, `surface`
- All CSS variables injected into `src/styles/global.css`
- Users select active light/dark themes via `src/config/site.ts` (`themeLight`, `themeDark`)

### Contrast (non-negotiable)
- Text must pass WCAG AAA contrast in both light and dark modes.
- Minimum 7:1 contrast ratio for body text.

---

## Typography

### Font Stack
- **Body/Headings:** Inter (via @fontsource-variable/inter)
- **Code/Tags/Metadata:** JetBrains Mono (via @fontsource/jetbrains-mono)
- No external web fonts—self-host via fontsource packages

### Hierarchy
- **Page title:** 1.75rem, font-weight 800, letter-spacing -0.025em, line-height 1.1
- **Section heading (h2):** 1.4rem, font-weight 700, border-bottom 1px solid border
- **Body text:** 1.05rem, line-height 1.8, opacity 0.95
- **Meta text:** 0.95rem, opacity 0.75

### Prose (Blog/Content)
- Font-size: 1.15rem for readability
- Lists (ul/ol) use accent color for markers
- Code blocks: JetBrains Mono, subtle background variation

---

## UI Components

### Flat Design
- **NO drop shadows.** Ever.
- **NO glassmorphism.**
- NO heavy gradients.
- Separation = 1px solid border OR subtle background variation.

### Links
- Underline with 4px offset.
- Hover: color shifts to accent, full opacity.
- Transition: 0.2s ease.

### Tags/Badges
- Minimal display: inline-flex, transparent background.
- Accent text color, font-weight 700.
- Hover: underline.

### Buttons
- Flat, no shadows.
- Hover: subtle background shift or color change.

### Icons
- Outline style (Lucide/Tabler style).
- stroke-width: 1.5px.
- Size: 24px standard, 20px for small contexts.

---

## Animations

- Keep it subtle. Fast (0.2-0.4s) and ease-out.
- Staggered fade-in for lists: 0.4s per item, scale from 0.95.
- Link hover: smooth color transition only.

---

## Accessibility

- **Focus rings:** Visible dashed outline for keyboard navigation.
- **Skip to content:** Hidden link, appears on focus.
- **Reduced motion:** Respect `prefers-reduced-motion` media query.
- **Alt text:** Required for all images.

---

## Implementation Notes

- **No `<style>` in `.astro` files.** All styles in `global.css` or via Tailwind classes.
- **Tailwind v4:** Uses `@tailwindcss/vite` plugin (no `tailwind.config.js`).
- Tailwind utilities allowed for layout, but custom CSS for fine-tuned control.
