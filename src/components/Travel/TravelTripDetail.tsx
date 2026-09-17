"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { TravelCity, TravelTrip } from "@/types/travel";
import TravelArticleContent from "@/components/Travel/TravelArticleContent";

function cityKey(city: TravelCity) {
    return city._key || city.name;
}

function cityHasOwnStory(city: TravelCity) {
    return Boolean(city.blogIntro || (city.blogBody && city.blogBody.length));
}

const TravelTripDetail = ({
    trip,
    initialCityKey,
}: {
    trip: TravelTrip;
    initialCityKey?: string;
}) => {
    const cities = useMemo(
        () => (trip.cities || []).filter((c) => c.imageUrl && c.name),
        [trip.cities]
    );

    const initial =
        cities.find((c) => cityKey(c) === initialCityKey) || cities[0];

    const [active, setActive] = useState<TravelCity | undefined>(initial);

    const usingCityStory = Boolean(active && cityHasOwnStory(active));
    const intro = usingCityStory ? active?.blogIntro : trip.blogIntro;
    const body = usingCityStory ? active?.blogBody : trip.blogBody;
    const storyTitle = active?.name || trip.title;

    return (
        <div className='mx-auto max-w-3xl'>
            <Link
                href='/travel'
                className='mb-8 inline-block text-sm text-appPurple-100 hover:underline dark:text-appRed-100'
            >
                ← Back to Travel
            </Link>

            <header className='mb-8'>
                <h1 className='text-3xl font-bold tracking-tight text-appPurple-100 dark:text-appRed-100 sm:text-4xl'>
                    {trip.title}
                </h1>
                <p className='mt-1 text-sm text-gray-500 dark:text-gray-400'>
                    {trip.month}
                    {trip.year ? ` · ${trip.year}` : null}
                </p>
            </header>

            {cities.length > 0 ? (
                <section className='mb-8'>
                    <p className='mb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400'>
                        Cities visited
                    </p>

                    <div className='flex gap-4 overflow-x-auto pb-2 pt-1 sm:flex-wrap sm:overflow-visible'>
                        {cities.map((city) => {
                            const selected =
                                active && cityKey(active) === cityKey(city);
                            return (
                                <button
                                    key={cityKey(city)}
                                    type='button'
                                    onClick={() => setActive(city)}
                                    className='group flex w-[76px] shrink-0 flex-col items-center gap-2'
                                    aria-pressed={Boolean(selected)}
                                >
                                    <span
                                        className={`rounded-full bg-gradient-to-tr from-appPurple-100 via-pink-400 to-orange-400 p-[3px] transition ${
                                            selected
                                                ? "scale-105 opacity-100"
                                                : "opacity-60 group-hover:opacity-100"
                                        }`}
                                    >
                                        <span className='block rounded-full bg-white p-[2px] dark:bg-gray-950'>
                                            <span className='relative block h-[68px] w-[68px] overflow-hidden rounded-full'>
                                                <Image
                                                    src={city.imageUrl as string}
                                                    alt={city.name}
                                                    fill
                                                    className='object-cover'
                                                    sizes='68px'
                                                />
                                            </span>
                                        </span>
                                    </span>
                                    <span
                                        className={`text-center text-xs leading-tight ${
                                            selected
                                                ? "font-bold text-appPurple-100 dark:text-appRed-100"
                                                : "font-medium text-gray-700 dark:text-gray-300"
                                        }`}
                                    >
                                        {city.name}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {active?.instagramHighlightUrl ? (
                        <div className='mt-5 flex justify-end'>
                            <a
                                href={active.instagramHighlightUrl}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex items-center gap-2 rounded-full border border-gray-200/80 bg-white/60 px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm transition hover:border-appPurple-100/40 hover:text-appPurple-100 dark:border-gray-700 dark:bg-gray-900/60 dark:text-gray-200 dark:hover:border-appRed-100/40 dark:hover:text-appRed-100'
                            >
                                <span className='relative h-6 w-6 overflow-hidden rounded-full'>
                                    <Image
                                        src={
                                            (active.imageUrl ||
                                                trip.coverImageUrl) as string
                                        }
                                        alt=''
                                        fill
                                        className='object-cover'
                                        sizes='24px'
                                    />
                                </span>
                                Highlights
                                <span aria-hidden className='opacity-60'>
                                    →
                                </span>
                            </a>
                        </div>
                    ) : null}
                </section>
            ) : null}

            <article>
                {!usingCityStory && active && (intro || body?.length) ? (
                    <p className='mb-4 text-xs text-gray-500 dark:text-gray-400'>
                        Country overview — add a city story in Studio to make
                        this tab unique.
                    </p>
                ) : null}

                {intro ? (
                    <p className='mb-6 text-lg leading-relaxed text-gray-800 dark:text-gray-200'>
                        {intro}
                    </p>
                ) : null}

                {body?.length ? (
                    <TravelArticleContent content={body} />
                ) : null}

                {!intro && !body?.length ? (
                    <p className='text-gray-500 dark:text-gray-400'>
                        Story coming soon for {storyTitle}.
                    </p>
                ) : null}
            </article>
        </div>
    );
};

export default TravelTripDetail;
