import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Github",
        href: "https://github.com/albert-einstein",
        linkTitle: `Follow albert-einstein on Github`,
        active: true,
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/alberteinstein",
        linkTitle: `Follow albert-einstein on LinkedIn`,
        active: true,
    },
    {
        name: "Mail",
        href: "mailto:albert@ias.edu",
        linkTitle: `Send an email to Albert`,
        active: true,
    },
    {
        name: "Google Scholar",
        href: "https://scholar.google.com/citations?user=einstein",
        linkTitle: `Albert Einstein on Google Scholar`,
        active: true,
    },
    {
        name: "ORCID",
        href: "https://orcid.org/0000-0001-2345-6789",
        linkTitle: `Albert Einstein on ORCID`,
        active: true,
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    LinkedIn: "LinkedIn",
    Mail: "Mail",
    "Google Scholar": "Google Scholar",
    ORCID: "ORCID",
    RSS: "RSS",
};
