# AI Agent Instructions: Astro Academic Portfolio

## 1. Project Overview
This is an academic portfolio template built using **Astro**, **TypeScript**, and **Tailwind CSS**.
The aesthetic mimics the minimalist, accessible style of "AstroPaper", adapted into a 2-column layout.
The primary design philosophy is to allow users to **easily modify the site's content just by writing `.md` files**, without needing to edit any Astro or frontend code.

## 2. Technology Stack & Content Modeling
* **Framework:** Astro (latest) with TypeScript.
* **Styling:** Tailwind CSS.
* **Content Source:** Primary data source is Markdown (`.md`/`.mdx`) files with YAML frontmatter, along with structured YAML/JSON data files (e.g., for the CV).
* **Content Management:** Astro Content Collections.
* **Features:** Supports LaTeX rendering (via `remark-math` and `rehype-katex`), ViewTransitions, and RSS Feed.

## 3. UI and Software Design Rules (CRITICAL)

### Unified UI through Components
* **Common UI:** The application must maintain a consistent and unified User Interface across all pages.
* **No Specific CSS in Astro Pages:** **Do NOT** add page-specific CSS directly within Astro pages (e.g., avoiding `<style>` tags in `.astro` files if possible).
* **Global Styles First:** The UI should be defined primarily through global CSS styles (e.g., in `src/styles/global.css`) for base styles, themes, and colors.
* **Component-Based Styling:** Reusable UI elements should be logically separated into components. Utilize Tailwind CSS utility classes within these components to build the design system.

### Easy to Modify Template
* **Markdown-Driven:** The template is strictly designed so that a non-technical user can append or modify content *purely* by dealing with `.md` files.
* **Content Separation:** Maintain a strict boundary between structural logic (Astro layouts/components) and the content itself. Never hardcode content into components when it should be dynamic.

### Layout Architecture
* **Two-Column Design:**
  * **Left Sidebar (Sticky):** Contains profile identity (avatar, name, bio, social links).
  * **Right Main (Scrollable):** Contains the main page content, navigation menu, and dynamically routed content.

## 4. Agent Operational Instructions
* Follow the constraints listed above vigorously.
* If proposing new structural changes or major design directions that aren't clear, **always ask the user for clarification first.**
