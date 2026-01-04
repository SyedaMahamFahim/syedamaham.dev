import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import RootLayout from "../RootLayout/RootLayout";
import GoogleAnalytics from "../google/GoogleAnalytics";
import MetricoolAnalytics from "../google/MetricoolAnalytics";
import GoogleAdsAnalytics from "../google/GoogleAdsAnalytics";
import "./globals.scss";
import {
    WEBSITE_NAME,
    META_SEO_KEYWORDS,
    META_DESCRIPTION,
} from "@/constants/_APP_SETUP";

// Metadata setup
export const metadata: Metadata = {
    title: {
        default: WEBSITE_NAME,
        template: "%s",
    },
    description: META_DESCRIPTION,
    keywords: META_SEO_KEYWORDS,
    icons: [
        { url: "/favicon.ico", type: "image/*" },
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/favicon-32x32.png",
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "/favicon-16x16.png",
        },
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            url: "/apple-touch-icon.png",
        },
        { rel: "android-chrome", sizes: "192x192", url: "/android-chrome.png" }, // typo fix
        {
            rel: "android-chrome",
            sizes: "512x512",
            url: "/android-chrome-512x512.png",
        },
    ],
};

// Main layout
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className='flex min-h-screen flex-col bg-slate-100 transition-all dark:bg-slate-900'>
                {/* Main content */}
                <RootLayout>
                    <main className='flex-1'>
                        
                        {children}
                        
                        </main>
                </RootLayout>

                {/* Analytics */}
                <Analytics />
                {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
                    <GoogleAnalytics
                        ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
                    />
                )}
                {process.env.NEXT_PUBLIC_Metricool_Analytics_TOKEN && (
                    <MetricoolAnalytics
                        ga_id={
                            process.env.NEXT_PUBLIC_Metricool_Analytics_TOKEN
                        }
                    />
                )}
                <GoogleAdsAnalytics />
            </body>
        </html>
    );
}
