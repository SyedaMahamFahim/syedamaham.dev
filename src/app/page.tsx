import {
    HeroSection,
    HomeArticles,
    Snippets as SnippetsContainer,
} from "@/containers";
import { SanityDocument } from "@sanity/client";
import { postsQuery, snippetsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { Suspense } from "react";

export default async function Home() {
    const articles = await sanityFetch<SanityDocument>({
        query: postsQuery,
    });
    const allSnippets = await sanityFetch<SanityDocument>({
        query: snippetsQuery,
    });

    return (
        <>
            <div
                className={
                    "font-regular bg-slate-100 pb-[20px] text-lg leading-relaxed text-black dark:bg-slate-900 dark:text-white md:min-h-screen"
                }
                key={Math.random()}
            >
                <HeroSection />
                <Suspense fallback={"Data is Laoding"}>
                    <div className='container mx-auto mb-20 px-0 lg:px-[15px]'>
                        <div className={"flex flex-wrap"}>
                            <h1 className='mb-5 w-full px-3 text-xl font-bold md:text-3xl'>
                                READ LATEST ARTICLES
                            </h1>

                            <hr className='border-1 mx-auto mb-5 w-[98%]' />
                            {articles?.length > 0 ? (
                                <HomeArticles
                                    noOfArticle={3}
                                    isArchive={true}
                                    articles={articles}
                                    isSeries={false}
                                    isExternal={false}
                                />
                            ) : (
                                <p>No Article Found</p>
                            )}
                        </div>
                    </div>
                </Suspense>
                <div className='container mx-auto mt-20 px-0 lg:px-[15px]'>
                    <div className={"flex flex-wrap"}>
                        <h1 className='mb-5 w-full px-3 text-xl font-bold md:text-3xl'>
                            EXPLORE LATEST SNIPPETS
                        </h1>
                        <hr className='border-1 mx-auto mb-5 w-[98%]' />
                        {allSnippets?.length > 0 ? (
                            <SnippetsContainer
                                isArchive={true}
                                snippets={allSnippets}
                                noOfSnippet={3}
                            />
                        ) : (
                            <p>No Snippets Found</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
