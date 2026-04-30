# 🎓 Academic Portfolio Astro

[![Astro](https://img.shields.io/badge/ASTRO-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind](https://img.shields.io/badge/TAILWIND-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Markdown](https://img.shields.io/badge/MARKDOWN-000000?style=for-the-badge&logo=markdown&logoColor=white)](#)
[![GitHub](https://img.shields.io/badge/PAGES-181717?style=for-the-badge&logo=github&logoColor=white)](#)
[![License](https://img.shields.io/badge/MIT-44CC11?style=for-the-badge)](https://opensource.org/license/mit)

A fast, minimalist, and highly customizable Astro template designed specifically for researchers, professors, PhD students, and academics. 

Strongly inspired by [Academic Pages](https://github.com/academicpages/academicpages.github.io) and [AstroPaper](https://github.com/satnaing/astro-paper), this template prioritizes content readability, SEO discoverability, and ease of configuration without touching the UI code.

> 🌟 **[View the Live Demo](https://shannon.github.io/academic-portfolio-astro/)**
 - [ ] Sticky navbar (at least on large screens)
 - [ ] Better readme
 - [ ] MIT LICENSE INCLUDE
 - [ ] Better navigation on long pages (go up button / progress bar)
 - [ ] Use always `<Image />` Astro component. Squared Aspect ratio for AVATAR!!!!!
 - [ ] Contraste: El texto sobre los fondos (especialmente en clases como .body-xs) no es lo suficientemente oscuro/claro. Revisa tus variables de color --lightFg y --lightBg para que cumplan con el ratio 4.5:1. CHECK FOOTER
 - [ ] Punto de referencia principal (Landmark): Tu HTML necesita una etiqueta <main>. El lector de pantalla no sabe dónde empieza el contenido real. Solución: Envuelve tu contenido principal así: <main class="main-content"> ... </main>.
 - [ ] robots.txt no es válido 1 error encontrado Si el formato del archivo robots.txt no es correcto, es posible que los rastreadores no puedan interpretar cómo quieres que se rastree o indexe tu sitio web. Más información sobre robots.txt Line # Content Error 4 Sitemap: /sitemap-index.xml Invalid sitemap URL
 - [ ] /sitemap-index.xml generated is empty
 - [ ] Update CV UI
 - [ ] Add Search Feature
 - [ ] Change `src/assets/icons`
---

## ✨ Features

- **Markdown-Driven Collections:** Easily manage your Bio, Blog, Publications, Projects, Talks, CV, and Teaching experience purely through `.md` files.
- **Academic Standard Support:** Out-of-the-box $\LaTeX$ rendering support via KaTeX. Includes structured metadata for Google Scholar indexing (DOI, Journal, PDF Links).
- **Extensive Theming System:** Built-in Light/Dark mode toggle with a highly customizable underlying design system and several beautiful preset palettes (`notepad`, `leafBlue`, `pikkyDark`, etc).
- **Toggleable Sections:** Don't need a "Talks" or "Teaching" section? Disable them globally with a single boolean flag in your config.
- **Peak Performance:** Built with Astro v6 and Tailwind CSS v4, yielding near-perfect Lighthouse scores and 0kb of unnecessary client-side JavaScript.
- **Privacy-First Analytics:** Includes native configuration options for self-hosted Umami analytics, as well as GA4 support—with built-in lazy-loading strategies to protect Core Web Vitals.
- **Built-in Developer Tools:** Unique internal visualizers for inspecting themes, typography, and responsive screen sizes on your local development server.

---

## 🚀 Getting Started

### 1. Bootstrap the Repository
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

## 📂 Project Structure

```text
/
├── public/                 # Static assets (images, favicon, robots.txt)
├── src/
│   ├── assets/             # Global icons (`icons.ts`)
│   ├── components/         # Reusable Astro UI components
│   ├── config/             # ⚙️ ALL GLOBAL CONFIGURATION LIVES HERE
│   │   ├── site.ts         # Meta details & Analytics
│   │   ├── pages.ts        # Enable/Disable sections & subtitles
│   │   ├── themes.ts       # Color palettes
│   │   ├── navigation.ts   # Navbar links
│   │   └── social.ts       # Social media links
│   ├── content/            # 📝 ALL MARKDOWN CONTENT LIVES HERE
│   │   ├── bio.md
│   │   ├── cv.md
│   │   ├── posts/
│   │   ├── projects/
│   │   ├── publications/
│   │   ├── talks/
│   │   └── teaching/
│   ├── layouts/            # Page layout wrappers
│   ├── pages/              # Astro routing
│   ├── styles/             # Global CSS and Tailwind directives
│   └── types/              # TypeScript interfaces
└── content.config.ts       # Zod schemas for all markdown collections
```

## 📖 Documentation & Setup

For a comprehensive, step-by-step guide on how to configure your site, modify the design, and write new content, please refer to the dedicated setup post included in this template:

**👉 [Setting up Your Academic Portfolio](src/content/posts/setting-up-portfolio.md)**

This detailed guide covers:
- Global configuration (`site.ts`, `pages.ts`, `themes.ts`)
- Setting up privacy-first analytics (Umami & GA4)
- Creating new publications, talks, and blog posts
- Using $\LaTeX$ in your markdown files
- Building and deploying to production

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
