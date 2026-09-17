"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type {
    TravelCountryTripDraft,
    TravelVisitDraft,
} from "@/data/travelVisitsDraft";

function Pin() {
    return (
        <span
            aria-hidden
            className='absolute left-1/2 top-2 z-20 h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-[0_2px_4px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.35)]'
        >
            <span className='absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-900/40' />
        </span>
    );
}

const TravelCountryPreview = ({
    trip,
    initialCitySlug,
}: {
    trip: TravelCountryTripDraft;
    initialCitySlug?: string;
}) => {
    const initial =
        trip.visits.find((v) => v.slug === initialCitySlug) || trip.visits[0];
    const [active, setActive] = useState<TravelVisitDraft>(initial);

    const cities = useMemo(() => trip.visits, [trip.visits]);

    return (
        <div>
            <div className='mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-amber-100'>
                Static preview ·{" "}
                <Link href='/travel-preview' className='font-medium underline'>
                    ← All trips
                </Link>
                {" · "}
                <Link href='/travel' className='font-medium underline'>
                    Live Sanity travel
                </Link>
            </div>

            {/* Country as pin frame — not a text-only title */}
            <div className='mb-12 flex justify-center'>
                <div className='w-full max-w-[220px] -rotate-[1deg]'>
                    <div className='relative rounded-sm bg-[#f7f4ee] p-3 pb-5 shadow-[0_10px_28px_rgba(37,99,235,0.18),0_2px_6px_rgba(0,0,0,0.08)] ring-1 ring-black/5 dark:bg-[#2a2a2e] dark:ring-white/10'>
                        <Pin />
                        <div className='relative mt-3 aspect-square overflow-hidden bg-gray-200 shadow-inner dark:bg-gray-800'>
                            <Image
                                src={trip.coverImage}
                                alt={trip.country}
                                fill
                                className='object-cover'
                                sizes='220px'
                                priority
                            />
                        </div>
                        <div className='mt-4 text-center'>
                            <h1 className='text-lg font-bold tracking-tight text-gray-900 dark:text-white'>
                                {trip.country}
                            </h1>
                            <p className='mt-1 text-sm text-blue-600/80 dark:text-blue-300/80'>
                                {trip.month}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <p className='mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400'>
                Cities visited
            </p>

            <div className='mb-10 flex flex-wrap gap-5'>
                {cities.map((visit) => {
                    const selected = active.slug === visit.slug;
                    return (
                        <button
                            key={visit.id}
                            type='button'
                            onClick={() => setActive(visit)}
                            className='group flex w-[84px] shrink-0 flex-col items-center gap-2'
                            aria-pressed={selected}
                        >
                            <span
                                className={`rounded-full bg-gradient-to-tr from-appPurple-100 via-pink-400 to-orange-400 p-[3px] transition ${
                                    selected
                                        ? "scale-105 opacity-100"
                                        : "opacity-70 group-hover:opacity-100"
                                }`}
                            >
                                <span className='block rounded-full bg-white p-[2px] dark:bg-gray-950'>
                                    <span className='relative block h-[72px] w-[72px] overflow-hidden rounded-full'>
                                        <Image
                                            src={visit.coverImage}
                                            alt={visit.city}
                                            fill
                                            className='object-cover'
                                            sizes='72px'
                                        />
                                    </span>
                                </span>
                            </span>
                            <span className='text-center text-xs leading-tight text-gray-800 dark:text-gray-200'>
                                <span
                                    className={`block ${
                                        selected
                                            ? "font-bold text-appPurple-100 dark:text-appRed-100"
                                            : "font-semibold"
                                    }`}
                                >
                                    {visit.city}
                                </span>
                                <span className='text-[10px] uppercase tracking-wide text-gray-500 dark:text-gray-400'>
                                    {visit.countryCode}
                                </span>
                            </span>
                        </button>
                    );
                })}
            </div>

            <p className='mb-4 text-center text-xs text-gray-500 dark:text-gray-400'>
                Tap a city to show its story below
            </p>

            {active.instagramHighlightUrl ? (
                <div className='mb-10 flex justify-center'>
                    <a
                        href={active.instagramHighlightUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group inline-flex items-center gap-3 rounded-sm border border-gray-200 bg-white/80 px-3 py-2 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-900/80'
                        title={`Photographs from ${active.city} on Instagram`}
                    >
                        <span className='relative h-12 w-12 shrink-0 overflow-hidden rounded-sm ring-1 ring-black/10 dark:ring-white/10'>
                            <Image
                                src={active.coverImage}
                                alt=''
                                fill
                                className='object-cover transition duration-300 group-hover:scale-105'
                                sizes='48px'
                            />
                        </span>
                        <span className='text-left'>
                            <span className='block text-sm font-semibold text-gray-900 dark:text-white'>
                                Photographs
                            </span>
                            <span className='block text-xs text-appPurple-100 dark:text-appRed-100'>
                                {active.city} · Instagram →
                            </span>
                        </span>
                    </a>
                </div>
            ) : (
                <div className='mb-8' />
            )}

            <article className='mx-auto max-w-3xl'>
                <h2 className='mb-4 text-2xl font-semibold text-gray-900 dark:text-white'>
                    The story · {active.city}
                </h2>
                <p className='mb-6 text-lg leading-relaxed text-gray-800 dark:text-gray-200'>
                    {active.blog.intro}
                </p>
                {active.blog.paragraphs.map((para, i) => (
                    <p
                        key={i}
                        className='mb-4 leading-relaxed text-gray-700 dark:text-gray-300'
                    >
                        {para}
                    </p>
                ))}
            </article>
        </div>
    );
};

export default TravelCountryPreview;
