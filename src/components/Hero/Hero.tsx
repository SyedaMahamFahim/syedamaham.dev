import React from "react";
import Button from "@/components/Button/Button";
import { HiArrowRight } from "react-icons/hi";
import Link from "next/link";

const Hero: React.FC = () => {
    return (
        <section className='relative overflow-hidden min-h-[90vh] flex items-center justify-center'>
            {/* Background Glows - Mobile par iski position adjust ki hai taake content hide na ho */}
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

            {/* Main Container: Mobile ke liye pt-28 (top padding) add ki hai taake navbar se neechay rahay */}
            <div className='mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-16 text-center md:px-12 md:pt-40 md:pb-32'>
                <div className='w-full max-w-4xl rounded-3xl border border-white/20 bg-white/60 p-6 sm:p-8 shadow-xl ring-1 ring-gray-900/5 backdrop-blur-xl dark:border-gray-700/30 dark:bg-slate-800/40 dark:ring-white/10 md:p-16'>
                    
                    <h1 className='font-display mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl'>
                        <span className='bg-gradient-to-r from-[#8B5CF6] to-indigo-500 bg-clip-text text-transparent'>
                            Syeda Maham
                        </span>
                    </h1>

                    <p className='mx-auto mb-8 max-w-2xl text-base font-light leading-relaxed text-gray-600 dark:text-slate-300 sm:text-lg md:text-2xl'>
                        I build software systems, focusing on{" "}
                        <span className='font-medium text-gray-900 dark:text-white'>
                            backend reliability
                        </span>{" "}
                        and{" "}
                        <span className='font-medium text-gray-900 dark:text-white'>
                            system-level thinking
                        </span>
                        .
                        <span className='ml-2 inline-flex items-center gap-1 align-middle'>
                            <span className='animate-pulse text-xl'>⚙️</span>
                            <span className='text-xl'>🧠</span>
                        </span>
                    </p>

                    <div className='mt-8 flex flex-col justify-center gap-4 sm:flex-row'>
                        <Link href='/profiles' className="w-full sm:w-auto">
                            <Button
                                variant='primary'
                                icon={HiArrowRight}
                                iconPosition='right'
                                className="w-full sm:w-auto"
                            >
                                View Profiles
                            </Button>
                        </Link>
                        <Link href='/articles' className="w-full sm:w-auto">
                            <Button variant='secondary' className="w-full sm:w-auto">
                                Read Blog
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;