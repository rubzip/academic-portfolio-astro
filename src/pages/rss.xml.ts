import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../config";

export async function GET(context: any) {
    const posts = await getCollection("posts");
    const publications = await getCollection("publications");

    const items = [
        ...posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/blog/${post.id}/`,
        })),
        ...publications.map((pub) => ({
            title: `[Publication] ${pub.data.title}`,
            pubDate: pub.data.publicationDate,
            description: pub.data.description || `Published in ${pub.data.journal || pub.data.conference || 'Journal'}`,
            link: `/publications/${pub.id}/`,
        })),
    ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

    return rss({
        title: SITE.title,
        description: SITE.desc,
        site: context.site || SITE.website,
        items,
    });
}
