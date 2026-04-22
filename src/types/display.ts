export interface DisplayMeta {
    label?: string;
    value: string;
    datetime?: string;
}

export interface DisplayLink {
    href: string;
    label: string;
}

export interface UnifiedItem {
    id: string;
    collection: string;
    title: string;
    description?: string;
    metaLine1?: string; // Standardized first line for cards
    metaLine2?: string; // Standardized second line for cards
    meta: DisplayMeta[]; // Full metadata for detail pages
    links: DisplayLink[]; // Action links (PDF, DOI, GitHub, etc.)
    tags: string[];
    featured?: boolean;
    href: string;
    backLabel: string;
    backHref: string;
}

export interface ListingItem {
    title: string;
    description?: string;
    date?: string;
    author?: string;
    extra?: string;
    tags: string[];
    externalUrl: string;
}
