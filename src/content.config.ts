import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const publications = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/publications" }),
    schema: z.object({
        title: z.string(),
        authors: z.array(z.string()),
        publicationDate: z.coerce.date(),
        journal: z.string().optional(),
        conference: z.string().optional(),
        doi: z.string().optional(),
        url: z.string().url().optional(),
        pdf: z.string().optional(),
        featured: z.boolean().default(false),
        description: z.string().optional(),
    }),
});

const talks = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/talks" }),
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        event: z.string(),
        location: z.string(),
        slides: z.string().url().optional(),
        video: z.string().url().optional(),
        description: z.string().optional(),
    }),
});

const posts = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
    schema: z.object({
        title: z.string(),
        pubDate: z.coerce.date(),
        description: z.string(),
        author: z.string(),
        tags: z.array(z.string()),
    }),
});

const bio = defineCollection({
    loader: glob({ pattern: "bio.md", base: "./src/content" }),
});

const projects = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tech: z.array(z.string()).optional(),
        github: z.string().url().optional(),
        featured: z.boolean().default(false),
    }),
});

const cv = defineCollection({
    loader: glob({ pattern: "cv.md", base: "./src/content" }),
    schema: z.object({
        name: z.string(),
        title: z.string(),
        experience: z.array(z.object({
            role: z.string(),
            institution: z.string(),
            period: z.string(),
            description: z.string(),
        })),
        education: z.array(z.object({
            degree: z.string(),
            institution: z.string(),
            period: z.string(),
            thesis: z.string().optional(),
        })),
        skills: z.array(z.string()),
    }),
});

export const collections = {
    'publications': publications,
    'talks': talks,
    'posts': posts,
    'bio': bio,
    'projects': projects,
    'cv': cv,
};
