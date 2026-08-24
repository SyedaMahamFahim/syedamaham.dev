import { HeroSection, TalksSection } from "@/containers";
import { Text } from "@/components";
import Link from "next/link";

import { Metadata } from "next";
import { WEBSITE_NAME, META_DESCRIPTION } from "@/constants/_APP_SETUP";
import { featuredSpeakingQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

export const metadata: Metadata = {
    openGraph: {
        title: WEBSITE_NAME,
        description: META_DESCRIPTION,
        url: "https://www.syedamaham.dev",
        siteName: WEBSITE_NAME,
        images: [
            {
                url: "",
                width: 1400,
                height: 700,
            },
            {
                url: "./blog-banner.png",
                width: 1800,
                height: 1600,
                alt: "Syeda Maham Fahim",
            },
        ],
        locale: "en_US",
        type: "website",
    },
};

export default async function Home() {
    const featuredTalks = await sanityFetch<any[]>({
        query: featuredSpeakingQuery,
    });

    return (
        <>
            <HeroSection />

            {featuredTalks?.length > 0 && (
                <section className='container mx-auto px-4 pb-16 pt-4'>
                    <div className='mb-6 flex items-end justify-between gap-4'>
                        <div>
                            <Text
                                title
                                className='mb-2 text-appPurple-100 dark:text-appRed-100'
                            >
                                Featured Talks
                            </Text>
                            <Text
                                quote
                                className='text-black dark:text-white'
                            >
                                Selected public talks and sessions.
                            </Text>
                        </div>
                        <Link
                            href='/talks'
                            className='shrink-0 text-sm font-semibold text-appPurple-100 hover:underline dark:text-appRed-100'
                        >
                            View all →
                        </Link>
                    </div>
                    <TalksSection sessions={featuredTalks} showYears={false} />
                </section>
            )}
        </>
    );
}
