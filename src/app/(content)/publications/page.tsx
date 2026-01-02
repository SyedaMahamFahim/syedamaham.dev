import { Text } from "@/components";
import { PublicationSection } from "@/containers";
import { Metadata } from "next";
import { WEBSITE_NAME, META_SEO_KEYWORDS } from "@/constants/_APP_SETUP";
import { SanityDocument } from "@sanity/client";
import {  getPublicationsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

export const metadata: Metadata = {
    title: "Publications",
    description: `Peer-reviewed research papers and scholarly work.`,
    keywords: META_SEO_KEYWORDS,
};

const Publications = async () => {
    const publications = await sanityFetch<SanityDocument>({
        query:  getPublicationsQuery,
    });

    return (
        <section className='container px-3 pt-20 md:pb-20 md:pt-10'>
            <div className='mt-19'>
                <div className={"flex flex-col flex-wrap"}>
                    <Text
                        title
                        className='mb-5 mt-2 text-appPurple-100 dark:text-appRed-100'
                    >
                        Publications 📚
                    </Text>
                    <Text
                        quote
                        className='mb-5 mt-2 text-black dark:text-white'
                    >
                        Peer-reviewed research papers and scholarly work.
                    </Text>

                    <PublicationSection
                    // @ts-ignore
                        publications={publications}
                    />
                </div>
            </div>
        </section>
    );
};

export default Publications;
