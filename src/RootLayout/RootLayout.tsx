"use client";
import { ThemeProvider } from "next-themes";
import { Navbar, Footer } from "@/components";

export default function RootLayout({ children }: { children: any }) {
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
