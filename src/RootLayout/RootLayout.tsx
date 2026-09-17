"use client";

import { usePathname } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { Navbar, Footer } from "@/components";

export default function RootLayout({ children }: { children: any }) {
    const pathname = usePathname();
    const isStudio = pathname?.startsWith("/studio");

    if (isStudio) {
        return (
            <ThemeProvider enableSystem attribute='class'>
                {children}
            </ThemeProvider>
        );
    }

    return (
        <ThemeProvider enableSystem attribute='class'>
            <div className='flex min-h-screen flex-col'>
                <Navbar />
                <main className='flex-1'>{children}</main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}
