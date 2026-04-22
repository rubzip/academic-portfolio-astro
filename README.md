# 🎓 Academic Portfolio Astro

[![Built with Astro](https://img.shields.io/badge/Built_with-Astro-ff5d01?logo=astro&logoColor=white&style=flat-square)](https://astro.build/)
[![Styled with Tailwind](https://img.shields.io/badge/Styled_with-Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white&style=flat-square)](https://tailwindcss.com/)

A fast, minimalist, and highly customizable Astro template designed specifically for researchers, professors, PhD students, and academics. 

Strongly inspired by [Academic Pages](https://github.com/academicpages/academicpages.github.io) and [AstroPaper](https://github.com/satnaing/astro-paper), this template prioritizes content readability, and easy configuration.

> **[Live Demo](https://astro-academics-page.vercel.app/)**

## Features
GitHub Pages deploy
Easy markdown-based content creation.
Light/dark themes
RSS
Multiple Themes


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
 - [ ] Sometimes when you first load page, light/dark toggle doesnt work. You have to refresh or change page for doing it
### Aesthetics
 - [ ] Define a new style make content more readable and compact
 - [ ] Implement definitive themes
### Features
 - [ ] Analytics implementation
 - [ ] Add bibtex support? There are 2 options, add bibtex as a feature of every specific article or having a master bibtex doc and mention it for having metadata
 - [ ] Improve dev tools.
### Clean Code
 - [ ] Define types for every feature
 - [ ] Refactor
### Docs
 - [ ] Improve documentation / README
 - [ ] Make look better repo.
 - [ ] Add a post for explaining how to set repository
 - [ ] Add examples with code and evaluate it
 - [ ] Add examples with images
 - [ ] Add more examples, with different configurations
 

## LightHouse Score
![Lighthouse Performance](https://lighthouse-metrics.com/api/v1/pages/https-astro-academics-page-vercel-app/performance/badge.svg)

## Agentic AI Warning
This project was mainly vibe coded by strong human supervision. Take it in count in case you dont like LLMs.
