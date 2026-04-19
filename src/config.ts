export const SITE = {
    website: "https://astro-academics.pages.dev/",
    author: "Albert Einstein",
    desc: "Albert Einstein - Researcher at the Bern Patent Office.",
    title: "Albert Einstein",
    ogImage: "astropaper-og.jpg",
    profileImage: "einstein.webp",
    shortBio: "Theoretical physicist, developed the general theory of relativity.",
    institution: "Bern Patent Office",
    lightAndDarkMode: true,
    postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the browser locale

export const LOGO_IMAGE = {
    enable: false,
    svg: true,
    width: 216,
    height: 46,
};

export const SOCIALS = [
    {
        name: "Github",
        href: "https://github.com/albert-einstein",
        linkTitle: ` ${SITE.title} on Github`,
        active: true,
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/albert-einstein",
        linkTitle: `${SITE.title} on LinkedIn`,
        active: true,
    },
    {
        name: "Google Scholar",
        href: "https://scholar.google.com/citations?user=dQw4w9WgXcQ",
        linkTitle: `${SITE.title} on Google Scholar`,
        active: true,
    },
    {
        name: "ORCID",
        href: "https://orcid.org/0000-0000-0000-0000",
        linkTitle: `${SITE.title} on ORCID`,
        active: true,
    },
    {
        name: "Mail",
        href: "mailto:albert.einstein@bernpatent.ch",
        linkTitle: `Send an email to ${SITE.title}`,
        active: true,
    },
];

export const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/publications", label: "Publications" },
    { href: "/talks", label: "Talks" },
    { href: "/projects", label: "Code" },
    { href: "/blog", label: "Blog" },
    { href: "/cv", label: "CV" },
];

export const PAGES = {
    home: {
        title: "About Me",
        subtitle: "",
    },
    publications: {
        title: "Publications",
        subtitle: "A collection of research papers and scientific contributions.",
    },
    talks: {
        title: "Talks & Presentations",
        subtitle: "Invited talks, conference presentations, and seminars.",
    },
    projects: {
        title: "Research & Code",
        subtitle: "Open source software and technical projects.",
    },
    blog: {
        title: "Blog",
        subtitle: "Thoughts on physics, mathematics, and philosophy.",
    },
    cv: {
        title: "Curriculum Vitae",
        subtitle: "",
    },
};

export const SOCIAL_ICONS: Record<string, string> = {
    Github: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
    LinkedIn: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
    Mail: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
    "Google Scholar": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>`,
    ORCID: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9 8v8"/><path d="M12 8c2.2 0 3 1.8 3 4s-.8 4-3 4h-1V8h1z"/></svg>`,
};
