import type { SiteConfig, SettingsConfig, AnalyticsConfig } from "../types/config";

export const SITE: SiteConfig = {
    website: "https://rubzip.github.io/academic-portfolio-astro/",
    author: "Albert Einstein",
    desc: "Personal academic portfolio and blog of Albert Einstein, Professor of Theoretical Physics.",
    title: "Albert Einstein",
    ogImage: "einstein.webp",
    lightAndDark: true,
    postPerPage: 5,
    favicon: "/favicon.svg",
    profileImage: "einstein.webp",
    shortBio: "Theoretical physicist widely acknowledged to be one of the greatest and most influential physicists of all time. Best known for developing the theory of relativity.",
    institution: "Institute for Advanced Study, Princeton",
    themeLight: "default",
    themeDark: "default",
};

export const SETTINGS: SettingsConfig = {
    showTagsInNavbar: true,
    showRSSInFooter: true,
};

export const ANALYTICS: AnalyticsConfig = {
    // Google Analytics 4 Measurement ID (e.g., 'G-XXXXXXXXXX')
    ga4Id: "",
    // Umami Analytics configuration
    umami: {
        websiteId: "", // e.g., 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
        src: "https://cloud.umami.is/script.js", // Default Umami cloud script URL
    }
};
