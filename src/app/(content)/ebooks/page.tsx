import { Text } from "@/components";
import { EbookSection } from "@/containers";
import { Metadata } from "next";
import { WEBSITE_NAME, META_SEO_KEYWORDS } from "@/constants/_APP_SETUP";
import { SanityDocument } from "@sanity/client";
import { getPublicEbooksQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

export const metadata: Metadata = {
  title: "Ebooks",
  description:
    "Structured, long-form documentation and learning material focused on software engineering, system design, and computer science fundamentals.",
  keywords: META_SEO_KEYWORDS,
};


const Ebooks = async () => {
    const ebooks = await sanityFetch<SanityDocument>({
        query: getPublicEbooksQuery,
    });

    return (
        <section className='container px-3 pt-20 md:pb-20 md:pt-10'>
            <div className='mt-19'>
                <div className={"flex flex-col flex-wrap"}>
                    <Text
                        title
                        className='mb-5 mt-2 text-appPurple-100 dark:text-appRed-100'
                    >
                        Ebooks 📚
                    </Text>
                    <Text
                        quote
                        className='mb-8 mt-2 text-black dark:text-white'
                    >
                        Structured, evolving documentation and learning
                        material.
                    </Text>

                    <EbookSection 
                    // @ts-ignore
                    ebooks={ebooks} />
                </div>
            </div>
        </section>
    );
};

export default Ebooks;
