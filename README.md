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
 - [ ] Add bibtex support
 - [ ] Add tag system.
 - [x] Add RSS button.
 - [x] Script for checking lighthouse score
 - [ ] Change styles, make content more readable and compact
 - [x] Evaluate github pages deployment (optionally netlify, vercel)
 - [ ] Add examples with images
 - [ ] Add more examples, with different configurations
 - [ ] Improve documentation / README
 - [ ] Evaluate different screen sizes
 - [x] No CSS / tailwind code theme configuration. Choosing it as a .ts config file, between a group of them
 - [x] Active or disable sections and their respective subpages
 - [ ] Make look better repo.
 - [x] Change GH repo name
 - [ ] Analytics implementation
 - [x] **VISUAL BUG:** When some navbar buttons are clicked, sidebar moves
 - [ ] Add option for null title or null subtitle (and correctly moving page upper)
 - [ ] Download icons 
 - [ ] Clean and restructure `config.ts`
 - [ ] Add a post for explaining how to set repository

 

## LightHouse Score

## Agentic AI Warning
This project was mainly vibe coded by strong human supervision. Take it in count in case you dont like LLMs.
