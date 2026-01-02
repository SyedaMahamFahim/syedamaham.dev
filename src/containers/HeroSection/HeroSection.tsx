import React from "react";
import { MyInfoCard } from "@/components/index";

const HeroSection = () => {
    return (
        <>
            <section className='mt-[clamp(120px,50vh,280px)] w-full pb-16 md:mt-[150px] md:pb-[100px]'>
                <div className='bg-slate-200 text-black shadow-sm dark:bg-slate-800 dark:text-white'>
                    <MyInfoCard />
                </div>
            </section>
        </>
    );
};

export default HeroSection;
