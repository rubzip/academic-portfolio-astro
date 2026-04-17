import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../config";

export async function GET(context: any) {
    const posts = await getCollection("posts");
    return rss({
        title: SITE.title,
        description: SITE.desc,
        site: context.site || SITE.website,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/blog/${post.id}/`,
        })),
    });
}
