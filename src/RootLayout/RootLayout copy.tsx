"use client";
import { ThemeProvider } from "next-themes";
import { Navbar, Footer } from "@/components";

export default function RootLayout({ children }: { children: any }) {
    return (
        <ThemeProvider enableSystem attribute='class'>
            <div className='flex min-h-screen flex-col'>
                <Navbar />
                <main className='flex-1'>
                    <section className='flex flex-col'>
                        <div
                            aria-hidden='true'
                            className='absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
                        >
                            <div
                                className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#8B5CF6] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
                                style={{
                                    clipPath:
                                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                                }}
                            />
                        </div>
                        <div className='mt-20 flex flex-col px-6 pb-5 pt-5 dark:text-white md:my-12'>
                            {" "}
                            {children}{" "}
                        </div>
                    </section>
                </main>
                {/* <main className='flex-1'>{children}</main> */}
                <Footer />
            </div>
        </ThemeProvider>
    );
}
