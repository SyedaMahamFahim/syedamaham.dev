import {
    getPosts,
    getAuthors,
    getSeries,
    getSnippets,
    getLegals,
} from "@/utils/sanity-utils";
import { WEBSITE_URL } from "@/constants/_APP_SETUP";

export default async function sitemap() {
    const baseUrl = WEBSITE_URL;

    const posts = await getPosts();
    const postUrls = posts.map((post) => ({
        url: `${baseUrl}/post/${post?.slug?.current}`,
        lastModified: post?.updatedAt,
    }));

    const authors = await getAuthors();
    const authorsUrls = authors.map((author) => ({
        url: `${baseUrl}/author/${author?.slug?.current}`,
        lastModified: author?.updatedAt,
    }));

    const series = await getSeries();
    const seriesUrls = series.map((series) => ({
        url: `${baseUrl}/series/${series?.slug?.current}`,
        lastModified: series?.updatedAt,
    }));

    const snippets = await getSnippets();
    const snippetsUrls = snippets.map((snippet) => ({
        url: `${baseUrl}/snippets/${snippet?.slug?.current}`,
        lastModified: snippet?.updatedAt,
    }));

    const legals = await getLegals();
    const legalsUrls = legals.map((legal) => ({
        url: `${baseUrl}/legal/${legal?.slug?.current}`,
        lastModified: legal?.updatedAt,
    }));

    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/about`, lastModified: new Date() },
        { url: `${baseUrl}/contact`, lastModified: new Date() },
        { url: `${baseUrl}/profiles`, lastModified: new Date() },
        { url: `${baseUrl}/external-articles`, lastModified: new Date() },
        { url: `${baseUrl}/open-source`, lastModified: new Date() },
        { url: `${baseUrl}/tags`, lastModified: new Date() },
        { url: `${baseUrl}/articles`, lastModified: new Date() },
        { url: `${baseUrl}/snippets`, lastModified: new Date() },
        { url: `${baseUrl}/categories`, lastModified: new Date() },
        { url: `${baseUrl}/series`, lastModified: new Date()},
        ...postUrls,
        ...authorsUrls,
        ...seriesUrls,
        ...snippetsUrls,
        ...legalsUrls,
    ];
}
