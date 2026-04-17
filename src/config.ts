export const SITE = {
    website: "https://astro-academics.pages.dev/",
    author: "Albert Einstein",
    desc: "Albert Einstein - Researcher at the Bern Patent Office.",
    title: "Albert Einstein",
    ogImage: "astropaper-og.jpg",
    profileImage: "einstein.jpg",
    shortBio: "Theoretical physicist, developed the general theory of relativity.",
    institution: "Bern Patent Office",
    lightAndDarkMode: true,
    postPerPage: 10,
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
