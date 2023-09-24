import { Text, ArticleContent } from "@/components";
import { Metadata } from "next";
import { META_DESCRIPTION, META_SEO_KEYWORDS } from "@/constants/_APP_SETUP";
import { SanityDocument } from "@sanity/client";
import { getAboutQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

export const metadata: Metadata = {
    title: "About",
    description: META_DESCRIPTION,
    keywords: META_SEO_KEYWORDS,
};

const About = async () => {
    const about = await sanityFetch<SanityDocument>({
        query: getAboutQuery,
    });
    const getFirstAbout = about[0];

    return (
        <>
            <section className='m-4 mt-20 dark:bg-slate-900 dark:text-white'>
                <div className='container px-0 pb-[20px] pt-[10px] md:px-[15px]'>
                    {about?.length === 0 ? (
                        <p>No About Information Found</p>
                    ) : (
                        <>
                            <Text
                                title
                                className='text-appPurple-100 dark:text-appRed-100'
                            >
                                {getFirstAbout?.title}
                            </Text>

                            <div className='grid'>
                                <ArticleContent
                                    ARTICLE_CONTENT={getFirstAbout?.body}
                                />
                            </div>
                        </>
                    )}
                </div>
            </section>
        </>
    );
};

export default About;
