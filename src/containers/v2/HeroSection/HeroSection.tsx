import React from "react";
import { ContentsTypeCard, MyInfoCard } from "@/components/index";
import Image from "next/legacy/image";
import PalestinFlag from "../../app/free-palestine/images/Palestine.jpg";
import Link from "next/link";

const HeroSection = () => {
    return (
        <>
            <section className='mb-10 w-full bg-slate-200 pb-20 pt-[90px] dark:bg-slate-800 md:pb-[70px] md:pt-[100px]'>
                <div className='container px-3'>
                    {/* <div className='flex flex-wrap items-start justify-center md:flex-nowrap'>
                        <Link href='/free-palestine'>
                            <h1 className='mb-5 cursor-pointer px-3 text-center text-xl font-bold md:text-3xl'>
                                I
                                <strong
                                    style={{
                                        color: "#149954",
                                    }}
                                >
                                    {" "}
                                    SUPPORT
                                </strong>
                                <strong className='text-appRed-100'>
                                    {" "}
                                    PALESTINE
                                </strong>{" "}
                                | READ WHY
                            </h1>
                        </Link>
                        <Image
                            alt={"palestini-flag"}
                            loading='lazy'
                            src={PalestinFlag}
                            height={40}
                            width={40}
                            objectFit='contain'
                        />
                    </div> */}

                    <div className='flex flex-wrap items-center justify-center md:flex-nowrap'>
                        <div className='flex h-full flex-col justify-between rounded-lg bg-white text-black  shadow-sm dark:bg-slate-900 dark:text-white md:items-center'>
                            <MyInfoCard />
                        </div>

                        <div className='mt-5 flex flex-col md:mt-0 md:flex-row md:items-center'>
                            <div className='mt-5 flex flex-wrap justify-center '>
                                <ContentsTypeCard />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
