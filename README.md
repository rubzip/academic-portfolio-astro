# Astro Academics Page
An Astro template for your academic portfolio. This template is strongly inspired by [academic pages](https://github.com/academicpages/academicpages.github.io) and [astro paper](https://github.com/satnaing/astro-paper).

Designed to be easy to use and customize, with a focus on content and presentation.

## Customization Guide

### 1. Update Site Configuration
Edit `src/config.ts` to change the site title, description, and social links.

### 2. Add Your Content
- **Publications**: Add your publications to `src/content/publications/`.
- **Blog Posts**: Add your blog posts to `src/content/posts/`.
- **Projects**: Add your projects to `src/content/projects/`.
- **Bio**: Edit `src/content/bio.md` to update your biography.

### 3. Customize Appearance
- **Colors**: Edit `src/styles/global.css` to change the color scheme.
- **Layout**: Edit `src/layouts/Layout.astro` to change the layout.

### 4. Deploy
Push your changes to GitHub and deploy to Netlify, Vercel, or any other hosting provider.

## ✅ Project Status & Progress
 - [ ] Refactor code
 - [ ] Add bibtex support
 - [ ] Add tagg system.
 - [ ] Add RSS button.
 - [ ] Script for checking lighthouse score
 - [ ] Change styles, make content more readable and compact
 - [ ] Evaluate github pages deployment (optionally netlify, vercel)
 - [ ] Add examples with images
 - [ ] Add more examples, with different configurations
 - [ ] Improve documentation
 - [ ] Evaluate different screen sizes
 - [ ] No CSS / tailwind code theme configuration. Choosing it as a .ts config file, between a group of them
 - [ ] Active or disable sections and their respective subpages
 - [ ] Make look better repo

## 🚀 Performance & SEO


### Audit it yourself
To run a full Lighthouse audit across all pages:
```bash
npm run build
npm run preview
npm run lighthouse
```
This will build the project and launch [Unlighthouse](https://unlighthouse.dev/) for a deep-scan.
