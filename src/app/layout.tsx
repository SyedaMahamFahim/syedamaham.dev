import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';

import RootLayout from '../RootLayout/RootLayout'
import "./globals.scss";
import {WEBSITE_NAME,META_SEO_KEYWORDS,META_DESCRIPTION} from '@/constants/_APP_SETUP'
import GoogleAnalytics from "../google/GoogleAnalytics";

// export const revalidate = 60 
export const metadata: Metadata = {
  title: {
    default: WEBSITE_NAME,
    template: `%s`
  },
  description:META_DESCRIPTION,
  keywords: META_SEO_KEYWORDS,
  verification: {
    google: "google-site-verification=878787878",
  },
  icons: [
    {
      url: "/favicon.ico",
      type: "image/*",
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'android-chrome',
      sizes: '192x192',
      url: '/android-chrome.pngg',
    },
    {
      rel: 'android-chrome',
      sizes: '512x512',
      url: '/android-chrome-512x512.png',
    },
  ],
}


export default function Layout({ children }:  {children: any}) {
    return (
        <html lang="en">
             <body className="bg-slate-100 dark:bg-slate-900 transition-all flex flex-col min-h-screen h-auto">
           
                <RootLayout>{children}</RootLayout>
                <Analytics />
                {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics ga_id= 
            {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null}
            </body>
        </html>
    )
}