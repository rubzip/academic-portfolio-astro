# 🎓 Academic Portfolio Astro

[![Built with Astro](https://img.shields.io/badge/Built_with-Astro-ff5d01?logo=astro&logoColor=white&style=flat-square)](https://astro.build/)
[![Styled with Tailwind](https://img.shields.io/badge/Styled_with-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white&style=flat-square)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)

A fast, minimalist, and highly customizable Astro template designed specifically for researchers, professors, PhD students, and academics. 

Strongly inspired by [Academic Pages](https://github.com/academicpages/academicpages.github.io) and [AstroPaper](https://github.com/satnaing/astro-paper), this template prioritizes content readability, SEO discoverability, and ease of configuration.

> 🌟 **[View the Live Demo](https://shannon.github.io/academic-portfolio-astro/)**

---

## ✨ Features

- **Markdown-Driven Collections:** Easily manage your Blog, Publications, Projects, Talks, and Teaching experience without touching UI code.
- **Academic Standard:** Out-of-the-box $\LaTeX$ rendering support via KaTeX. Includes structured metadata for Google Scholar indexing (DOI, Journal, PDF Links).
- **Extensive Theming System:** Built-in Light/Dark mode toggle with a highly customizable underlying design system and several beautiful preset palettes (`notepad`, `leafBlue`, `pikkyDark`, etc).
- **Peak Performance:** Built with Astro v6 and Tailwind CSS v4, yielding near-perfect Lighthouse scores and 0kb of unnecessary client-side JavaScript.
- **Privacy-First Analytics:** Includes native configuration options for self-hosted Umami analytics, as well as GA4 support—with built-in lazy-loading strategies to protect Core Web Vitals.
- **Developer Tools:** Unique built-in visualizers for inspecting themes, typography, and responsive screen sizes on your local development server.

---

## 🚀 Getting Started

### 1. Create a Repository
You can initialize a new repository using the GitHub CLI or standard Git:

**Via GitHub CLI (Recommended):**
```bash
gh repo create my-portfolio --template="rubzip/academic-portfolio-astro" --clone
cd my-portfolio
```

**Via Standard Git:**
```bash
git clone https://github.com/rubzip/academic-portfolio-astro.git my-portfolio
cd my-portfolio
```

### 2. Install Dependencies
This project uses Node.js (requires v22.12.0 or higher).
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Your local server will start at `http://localhost:4321`.

---

## ⚙️ Configuration & Customization

The core philosophy of this template is centralized configuration. All site-wide settings are isolated inside the `src/config/` directory.

### Global Site Details
Open `src/config/site.ts` to edit your overarching metadata, default analytics IDs, and default themes:
```typescript
export const SITE: SiteConfig = {
    website: "https://your-domain.com/",
    author: "Your Name",
    desc: "Your academic portfolio.",
    title: "Portfolio Title",
    ogImage: "your-image.webp",
    favicon: "/favicon.svg",
    lang: "en",
};
```

### Content Organization
The site contains predefined content collections optimized for academic workflows:
- 📁 `src/content/bio.md`: Your homepage biography.
- 📁 `src/content/cv/`: Structured markdown arrays of your education and experience.
- 📁 `src/content/posts/`: Your technical blog posts.
- 📁 `src/content/publications/`: Scholarly articles, preprints, and conference papers.
- 📁 `src/content/talks/`: Keynotes, presentations, and colloquia.

*If you do not need all of these pages, you can dynamically disable them by modifying the `isActive` boolean in `src/config/pages.ts`!*

### Theming
A fully responsive design system dictates the UI styling. Open `src/config/themes.ts` to adjust individual CSS variable properties (`background`, `foreground`, `accent`, `muted`, `border`), or choose from existing defaults.

To preview available themes in real-time on your local machine, visit `http://localhost:4321/dev-tools`.

---

## 🛠️ Build Commands

All standard build commands run through `npm`:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the local development server on `localhost:4321` |
| `npm run build` | Builds your project for production output into `./dist/` |
| `npm run preview` | Previews your production build locally |

---

## 🤝 Contributing & License

Contributions, issues, and feature requests are always welcome! Feel free to check the [issues page](https://github.com/rubzip/academic-portfolio-astro/issues).

This project is licensed under the MIT License - see the `LICENSE` file for details.
