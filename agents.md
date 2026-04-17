# AI Agent Instructions: Astro Academic Portfolio

## 1. Project Overview
You are building an academic portfolio template using **Astro**, **TypeScript**, and **Tailwind CSS**. 
The aesthetic must strictly mimic the minimalist, highly accessible style of "AstroPaper", but adapted into a 2-column layout. 
**Mock Data Persona:** Albert Einstein. All placeholder text, articles, configurations, and the CV must use Einstein's life, his *Annus Mirabilis* papers, and his time at the Bern patent office.
IT IS IMPORTANT THAT THE USER CAN EASILY CHANGE THE PAGE WITHOUT MODIFYING ANY ASTRO CODE. 

## 2. Technology Stack & Constraints
* **Framework:** Astro (latest) with TypeScript.
* **Styling:** Tailwind CSS.
* **Content:** Astro Content Collections (strictly typed). 
* **Math Support:** Must configure Astro to support LaTeX in Markdown/MDX using `remark-math` and `rehype-katex` (with KaTeX CSS included).
* **Data Preference:** Markdown files with YAML frontmatter are the primary data source. The CV must be a structured YAML/JSON file.
* **Key Features:** ViewTransitions enabled, RSS Feed generation, perfect (100) Lighthouse SEO scores.

## 3. Layout Architecture
The layout is a 2-column design, split into two entirely independent components:

* **`LeftSidebar.astro` (Sticky):** * Fixed to the left side of the viewport on desktop.
  * Contains: Avatar (Einstein), Name, Short Bio, and Social Icons (GitHub, Email, Google Scholar, etc.).
  * On mobile, this should gracefully collapse into a top header.

* **`RightMain.astro` (Scrollable):**
  * Contains the main navigation menu (Blog, CV, Articles, Talks, Code).
  * Contains the AstroPaper-style main content area.
  * Handles the page transitions and routing content.

## 4. Content Modeling (Strict Schemas)
Define strict TypeScript schemas in `src/content/config.ts`. 
* **Blog:** Markdown posts (title, date, tags, description). Must test LaTeX rendering in body (e.g., $E=mc^2$).
* **Articles/Publications:** Markdown files. Frontmatter: `journal`, `year`, `doi`, `pdf_link`. Body: Abstract/summary.
* **Talks:** Markdown files. Frontmatter: `event_name`, `date`, `location`, `slides_link`.
* **Code/Projects:** Markdown files. Frontmatter: `repo_url`, `tech_stack`, `stars`.

**The CV Data (`src/data/cv.yml` or `src/content/cv/index.json`):**
Must be a strongly typed structured file containing arrays of objects for:
* `education`: [institution, degree, start_year, end_year, description]
* `experience`: [role, organization, start_year, end_year, description]
* `awards`: [title, year, organization]
* `skills`: [category: [list of skills]]

## 5. Development Steps for the Agent
1. Initialize the Astro project and configure Tailwind + ViewTransitions.
2. Install and configure `remark-math` and `rehype-katex` in `astro.config.mjs`. Import KaTeX CSS in the base layout.
3. Setup `config.ts` for Content Collections based on the schemas above.
4. Build the `LeftSidebar` and `RightMain` layout wrappers.
5. Populate the `src/content/` and `src/data/` directories with Albert Einstein mock data. Include complex LaTeX equations in the mock blog posts to verify rendering.
6. Implement the AstroPaper UI components (lists, tags, pagination).
7. Create a dedicated `cv.astro` page that reads the structured CV data file and maps it into a styled visual timeline.
8. Implement RSS generation and verify SEO meta tags.