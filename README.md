# 🎓 Academic Portfolio Astro

[![Built with Astro](https://img.shields.io/badge/Built_with-Astro-ff5d01?logo=astro&logoColor=white&style=flat-square)](https://astro.build/)
[![Styled with Tailwind](https://img.shields.io/badge/Styled_with-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white&style=flat-square)](https://tailwindcss.com/)

A fast, minimalist, and highly customizable Astro template designed specifically for researchers, professors, PhD students, and academics. 

Strongly inspired by [Academic Pages](https://github.com/academicpages/academicpages.github.io) and [AstroPaper](https://github.com/satnaing/astro-paper), this template prioritizes content readability, and easy configuration.

> **[Live Demo](https://astro-academics-page.vercel.app/)**

## Features
# Academic Portfolio: Implemented Features

This document summarizes the core features and functionality implemented in this Astro-based academic portfolio template.

## 🚀 Core Technology Stack
- **Framework:** [Astro v6](https://astro.build/) - Modern static site generator.
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Type-safe development.
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS using the new `@tailwindcss/vite` plugin.

## 🎨 Design & Layout
- **2-Column Layout:**
  - **Left Sidebar:** Sticky container with profile image, name, institution, social links, and a short bio.
  - **Right Main:** Scrollable area for content, navigation, and page-specific layouts.
- **Responsiveness:** Fully mobile-friendly design (sidebar collapses to a top/bottom header on small screens).
- **Theme System:**
  - **Light/Dark Mode:** Built-in toggle with persistence in `localStorage`.
  - **Preset Themes:** Multiple color schemes (e.g., `default`, `lobster`, `leafBlue`, `astroPaper`, `pikkyDark`).
  - **Unified UI:** Centralized styling in `global.css` and reusable components.

## 📝 Content Management (Astro Collections)
The project is strictly "Markdown-driven," allowing users to modify content just by editing `.md` files.
- **Publications:** Supports authors, date, journal/conference info, DOI, and PDF links.
- **Talks:** Tracking events, locations, slide decks, and video recordings.
- **Projects:** Featured projects with tech tags and GitHub links.
- **Blog (Posts):** Full-featured blog with reading time estimation and tags.
- **Teaching:** Documenting roles and institutions across semesters.
- **CV:** Structured education and experience data rendered into a clean layout.
- **Bio:** Dedicated bio page driven by markdown.

## 🎓 Academic Features
- **LaTeX Support:** Integrated `remark-math` and `rehype-katex` for rendering complex mathematical equations.
- **Rich Meta Metadata:** Extensive support for DOI, ISBN, and external URLs across all academic collections.

## 🛠️ Performance & SEO
- **SEO Ready:** Optimized meta tags (Open Graph, Twitter Cards) and canonical URLs.
- **Analytics:** Out-of-the-box support for Umami and Google Analytics 4.
- **Fast Navigation:** Uses Astro's View Transitions (`ClientRouter`) for smooth page loads.
- **RSS Feed:** Automated feed generation at `/rss.xml`.
- **Lighthouse Tooling:** Built-in scripts for running performance audits.

## 🔧 Developer Utilities
- **Content Adapters:** A unified item model transforms diverse content types into a standard renderable format.
- **Tagging Engine:** Automatic tag extraction and filtering system across all collections.
- **Developer Tools:** Specialized layouts and utilities for rapid template customization.


## Customization Guide

### 1. Update Site Configuration
Edit `src/config.ts` to change the site title, description, favicon, and social links.
- **Favicon**: You can set `SITE.favicon` to any path in `public/`. For example, `"/favicon-academic.svg"` for the default academic icon.

### 2. Add Your Content
- **Publications**: Add your publications to `src/content/publications/`.
- **Blog Posts**: Add your blog posts to `src/content/posts/`.
- **Projects**: Add your projects to `src/content/projects/`.
- **Bio**: Edit `src/content/bio.md` to update your biography.

### 3. Customize Appearance
- **Colors**: Edit `src/styles/global.css` to change the color scheme.
- **Layout**: Edit `src/layouts/Layout.astro` to change the layout.

### 4. Deploy
Push your changes to GitHub and deploy to GitHub Pages, Netlify, Vercel, or any other hosting provider.

## ✅ Project Status & Progress
 - [x] Refactor code
 - [x] Add tag system.
 - [x] Add RSS button.
 - [x] Script for checking lighthouse score
 - [x] Evaluate github pages deployment (optionally netlify, vercel)
 - [x] Evaluate different screen sizes
 - [x] No CSS / tailwind code theme configuration. Choosing it as a .ts config file, between a group of them
 - [x] Active or disable sections and their respective subpages
 - [x] Change GH repo name
 - [x] **VISUAL BUG:** When some navbar buttons are clicked, sidebar moves
 - [x] Add option for null title or null subtitle (and correctly moving page upper)
 - [x] Download icons 
 - [x] Clean and restructure `config.ts`
### Bugs
 - [x] Sometimes when you first load page, light/dark toggle doesnt work. You have to refresh or change page for doing it
 - [x] Pagination is broken. It doesnt show pagination for blog now. (Closed, it wasnt a bug)
### TO DO
 - [x] CRITICAL: Finish code simplification, full integrate `types/display.ts`. Probably we should keep (and improve) `ListingItem` and aditionally create `DetailItem`.
 - [x] Add `addDevToolsInProduction` to `SettingsConfig`
 - [x] Add new file `config/social.ts`
 - [ ] Add `assets/fonts.ts`?
 - [ ] Rethink what to do with `assets/icons.ts`
 - [ ] Delete unused features (Lighthouse, scripts, ...)
 - [x] Move theme interface to types. Unify LIGHT_THEMES and DARK_THEMES in themes. Probably we should add an extra parameter to interface (isDark)
 - [x] Naming convention: I would like to change boolean variables (e.g. 'active' -> 'isActive')
 - [ ] Maybe adding settings to `bio.md`. Maybe we could place there things like: avatar, name, short_bio, institution...
```typescript
// types/config.ts
export interface SiteConfig {
    url: string;
    author: string;
    description: string;
    title: string;
    postPerPage: number;
    favicon: string;
}

export interface ThemeConfig {
    lightAndDark: boolean;
    themeLight: string;
    themeDark?: string;
}

export interface SettingsConfig {
    showTagsInNavbar: boolean;
    showRSSInFooter: boolean;
    addDevToolsInProduction: boolean;
}
// types/content.ts
export interface Bio {
    name: string;
    avatar: string;
    shortBio?: string;
    institution?: string;
}
```
 - [ ] Add code examples and images in posts
 - [ ] Remove G4A or consider doing it. It is mandatory to add cookies policy in case we are tracking with G4A. Talk about why is great Umami analytics (low control).
 - [ ] Set things for loading lazyly analytics and keeping performance good
 - [ ] Add an extra theme visualizer, it should be simpler. Instead of loading the full page maybe would be better loading some easier html
 - [ ] Add `images/` folder, `robots.txt`.
 - [ ] Add share buttons to posts?
 - [ ] Change content to Shannon
 
### Aesthetics
 - [ ] Define a new style make content more readable and compact
 - [ ] Implement definitive themes
### Features
 - [x] Analytics implementation
 - [x] Add bibtex support? There are 2 options, add bibtex as a feature of every specific article or having a master bibtex doc and mention it for having metadata
 - [x] Improve dev tools.
 - [ ] i18n? Maybe too much coding and not useful enough
### Clean Code
 - [x] Define types for every feature
 - [x] Refactor
### Docs
 - [ ] Improve documentation / README
 - [ ] Make look better repo.
 - [ ] Add a post for explaining how to set repository
 - [ ] Add examples with code and evaluate it
 - [ ] Add examples with images
 - [ ] Add more examples, with different configurations 
### SEO Improvements To-Do
- [ ] **Avoid hardcoded language:** Make the `<html lang="en">` attribute in `BaseLayout.astro` dynamic or tied to the global site configuration.
- [ ] **Pass dynamic metadata to detail pages:** Update `BaseDetail.astro` to extract specific descriptions/excerpts and Open Graph images, and pass them as props to `<BaseLayout>`.
- [ ] **Implement dynamic Open Graph types:** Add an `og:type` prop to differentiate between `website` (for home/listing pages) and `article` (for publications, posts, and talks).
- [ ] **Generate a Sitemap:** Install and configure the `@astrojs/sitemap` integration to ensure search engines can discover and index all dynamic routes.
- [ ] **Add a `robots.txt` file:** Create a static `public/robots.txt` or dynamically generate one to guide web crawlers and provide the sitemap URL.
- [ ] **Implement Structured Data (JSON-LD):** Add Schema.org metadata (e.g., `Person` for the portfolio owner, `ScholarlyArticle` for publications, `BlogPosting` for posts) to improve indexing in Google and Google Scholar.
- [ ] **Add explicit indexing meta tags:** Include `<meta name="robots" content="index, follow">` in the base layout, allowing specific pages (like dev tools) to opt-out via props.
## LightHouse Score
![Lighthouse Performance](https://lighthouse-metrics.com/api/v1/pages/https-astro-academics-page-vercel-app/performance/badge.svg)

## Agentic AI Warning
This project was mainly vibe coded by strong human supervision. Take it in count in case you dont like LLMs.
