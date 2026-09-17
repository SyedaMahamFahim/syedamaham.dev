"use client";

import { useRef } from "react";
import Image from "next/image";
import type { TravelCity } from "@/types/travel";

type Props = {
    cities: TravelCity[];
};

const TravelCityStories = ({ cities }: Props) => {
    const scrollerRef = useRef<HTMLDivElement>(null);

    const scrollBy = (dir: 1 | -1) => {
        scrollerRef.current?.scrollBy({
            left: dir * 220,
            behavior: "smooth",
        });
    };

    const visible = (cities || []).filter((city) => city.imageUrl && city.name);

    if (!visible.length) return null;

    return (
        <div className='relative mb-10'>
            <div
                ref={scrollerRef}
                className='flex gap-5 overflow-x-auto px-1 pb-3 pt-1'
                style={{ scrollbarWidth: "none" }}
            >
                {visible.map((city, index) => {
                    const hasLink = Boolean(city.instagramHighlightUrl);
                    const key = city._key || `${city.name}-${index}`;
                    const className =
                        "group flex w-[84px] shrink-0 flex-col items-center gap-2";

                    const circle = (
                        <>
                            <span className='rounded-full bg-gradient-to-tr from-appPurple-100 via-pink-400 to-orange-400 p-[3px] transition group-hover:opacity-90'>
                                <span className='block rounded-full bg-white p-[2px] dark:bg-gray-950'>
                                    <span className='relative block h-[72px] w-[72px] overflow-hidden rounded-full'>
                                        <Image
                                            src={city.imageUrl as string}
                                            alt={city.name}
                                            fill
                                            className='object-cover transition duration-300 group-hover:scale-105'
                                            sizes='72px'
                                        />
                                    </span>
                                </span>
                            </span>
                            <span className='text-center text-xs leading-tight text-gray-800 dark:text-gray-200'>
                                <span className='block font-semibold'>
                                    {city.name}
                                </span>
                                <span className='text-[10px] uppercase tracking-wide text-gray-500 dark:text-gray-400'>
                                    {city.countryCode}
                                </span>
                            </span>
                        </>
                    );

                    if (hasLink) {
                        return (
                            <a
                                key={key}
                                href={city.instagramHighlightUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className={className}
                                title={`Open ${city.name} on Instagram`}
                            >
                                {circle}
                            </a>
                        );
                    }

                    if (city.href) {
                        return (
                            <a
                                key={key}
                                href={city.href}
                                className={className}
                                title={`Open ${city.name}`}
                            >
                                {circle}
                            </a>
                        );
                    }

                    return (
                        <div key={key} className={`${className} opacity-70`}>
                            {circle}
                        </div>
                    );
                })}
            </div>

            {visible.length > 4 && (
                <button
                    type='button'
                    onClick={() => scrollBy(1)}
                    className='absolute -right-1 top-7 hidden h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-sm shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:flex'
                    aria-label='Scroll cities'
                >
                    ›
                </button>
            )}

            <p className='mt-2 text-center text-xs text-gray-500 dark:text-gray-400'>
                Tap a city to open its Instagram Highlight
            </p>
        </div>
    );
};

export default TravelCityStories;
