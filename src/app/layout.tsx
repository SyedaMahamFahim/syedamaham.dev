import { Metadata } from 'next'

import RootLayout from '../RootLayout/RootLayout'
import "./globals.scss";
import {WEBSITE_NAME,META_SEO_KEYWORDS,META_DESCRIPTION} from '@/constants/_APP_SETUP'

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
}

export default function Layout({ children }:  {children: any}) {
    return (
        <html lang="en">
             <body className="bg-slate-100 dark:bg-slate-900 transition-all">
                <RootLayout>{children}</RootLayout>
            </body>
        </html>
    )
}