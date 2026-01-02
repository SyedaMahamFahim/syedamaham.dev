import { HeroSection } from "@/containers";

import { Metadata } from "next";
import { WEBSITE_NAME, META_DESCRIPTION } from "@/constants/_APP_SETUP";

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
    return (
        <>
            {/* <div className='font-regular pb-5 text-lg text-black dark:text-white'> */}
                <HeroSection />
            {/* </div> */}
        </>
    );
}
