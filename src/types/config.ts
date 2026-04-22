export interface SiteConfig {
    website: string;
    author: string;
    desc: string;
    title: string;
    ogImage: string;
    lightAndDark: boolean;
    postPerPage: number;
    favicon: string;
    profileImage: string;
    shortBio: string;
    institution: string;
    themeLight: string;
    themeDark: string;
}

export interface SettingsConfig {
    showTagsInNavbar: boolean;
    showRSSInFooter: boolean;
}

export interface UmamiAnalyticsConfig {
    websiteId: string;
    src: string;
}

export interface AnalyticsConfig {
    ga4Id?: string;
    umami?: UmamiAnalyticsConfig;
}

export interface NavLink {
    href: string;
    label: string;
    active: boolean;
}

export interface SocialLink {
    name: string;
    href: string;
    linkTitle: string;
    active: boolean;
}

export interface PageConfig {
    title: string;
    subtitle: string;
    active: boolean;
}

export type PagesConfig = Record<string, PageConfig>;