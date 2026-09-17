"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { TravelVisitDraft } from "@/data/travelVisitsDraft";
import { getTravelCountryTrips } from "@/data/travelVisitsDraft";

type ViewMode = "cities" | "countries";

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

function CountryPinCard({
    title,
    month,
    coverImage,
    href,
    index,
}: {
    title: string;
    month: string;
    coverImage: string;
    href: string;
    index: number;
}) {
    const tilt =
        index % 3 === 0
            ? "-rotate-[1.5deg]"
            : index % 3 === 1
              ? "rotate-[1.25deg]"
              : "-rotate-[0.5deg]";

    return (
        <Link
            href={href}
            className={`group relative block transition duration-300 hover:-translate-y-1 hover:rotate-0 ${tilt}`}
        >
            <div className='relative rounded-sm bg-[#f7f4ee] p-3 pb-5 shadow-[0_10px_28px_rgba(37,99,235,0.18),0_2px_6px_rgba(0,0,0,0.08)] ring-1 ring-black/5 transition duration-300 group-hover:shadow-[0_16px_36px_rgba(37,99,235,0.28)] dark:bg-[#2a2a2e] dark:ring-white/10'>
                <Pin />
                <div className='relative mt-3 aspect-square overflow-hidden bg-gray-200 shadow-inner dark:bg-gray-800'>
                    <Image
                        src={coverImage}
                        alt={title}
                        fill
                        className='object-cover transition duration-500 group-hover:scale-[1.04]'
                        sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                    />
                </div>
                <div className='mt-4 text-center'>
                    <h3 className='text-lg font-bold tracking-tight text-gray-900 dark:text-white'>
                        {title}
                    </h3>
                    <p className='mt-1 text-sm text-blue-600/80 dark:text-blue-300/80'>
                        {month}
                    </p>
                </div>
            </div>
        </Link>
    );
}

function CityHighlight({
    visit,
    href,
    selected,
    onSelect,
}: {
    visit: TravelVisitDraft;
    href?: string;
    selected?: boolean;
    onSelect?: () => void;
}) {
    const ring = selected
        ? "from-appPurple-100 via-pink-400 to-orange-400"
        : "from-appPurple-100/70 via-pink-400/70 to-orange-400/70";

    const content = (
        <>
            <span
                className={`mx-auto block w-fit rounded-full bg-gradient-to-tr p-[3px] transition group-hover:opacity-90 ${ring} ${
                    selected ? "scale-105" : ""
                }`}
            >
                <span className='block rounded-full bg-white p-[2px] dark:bg-gray-950'>
                    <span className='relative mx-auto block h-24 w-24 overflow-hidden rounded-full sm:h-28 sm:w-28'>
                        <Image
                            src={visit.coverImage}
                            alt={visit.city}
                            fill
                            className='object-cover transition duration-300 group-hover:scale-105'
                            sizes='112px'
                        />
                    </span>
                </span>
            </span>
            <span className='mt-3 block text-center'>
                <span className='block font-semibold text-gray-900 dark:text-white'>
                    {visit.city}{" "}
                    <span className='text-xs font-normal uppercase tracking-wide text-gray-500 dark:text-gray-400'>
                        {visit.countryCode}
                    </span>
                </span>
                <span className='mt-1 block text-xs text-gray-500 dark:text-gray-400'>
                    {visit.month}
                </span>
            </span>
        </>
    );

    if (onSelect) {
        return (
            <button
                type='button'
                onClick={onSelect}
                className='group text-left'
                aria-pressed={selected}
            >
                {content}
            </button>
        );
    }

    return (
        <Link href={href || "#"} className='group'>
            {content}
        </Link>
    );
}

const TravelVisitsPreview = ({
    visits,
    basePath = "/travel-preview",
}: {
    visits: TravelVisitDraft[];
    basePath?: string;
}) => {
    const [view, setView] = useState<ViewMode>("countries");

    const countryTrips = useMemo(
        () => getTravelCountryTrips(visits),
        [visits]
    );

    const tripsByYear = useMemo(() => {
        const grouped = countryTrips.reduce(
            (acc: Record<string, typeof countryTrips>, trip) => {
                const year = String(trip.year);
                acc[year] = acc[year] || [];
                acc[year].push(trip);
                return acc;
            },
            {}
        );
        return Object.keys(grouped)
            .sort((a, b) => Number(b) - Number(a))
            .map((year) => ({ year, items: grouped[year] }));
    }, [countryTrips]);

    const citiesByYear = useMemo(() => {
        const grouped = visits.reduce(
            (acc: Record<string, TravelVisitDraft[]>, visit) => {
                const year = String(visit.year);
                acc[year] = acc[year] || [];
                acc[year].push(visit);
                return acc;
            },
            {}
        );
        return Object.keys(grouped)
            .sort((a, b) => Number(b) - Number(a))
            .map((year) => ({ year, items: grouped[year] }));
    }, [visits]);

    return (
        <div>
            <div className='mb-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-amber-100'>
                Static preview of the <strong>city-visit</strong> model. Your
                Sanity Croatia data on <code>/travel</code> is untouched.
            </div>

            <div className='mb-10 flex justify-center'>
                <div className='inline-flex rounded-full border border-gray-200 bg-white p-1 dark:border-gray-700 dark:bg-gray-900'>
                    <button
                        type='button'
                        onClick={() => setView("countries")}
                        className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                            view === "countries"
                                ? "bg-appPurple-100 text-white dark:bg-appRed-100"
                                : "text-gray-600 hover:text-gray-900 dark:text-gray-300"
                        }`}
                    >
                        Countries
                    </button>
                    <button
                        type='button'
                        onClick={() => setView("cities")}
                        className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                            view === "cities"
                                ? "bg-appPurple-100 text-white dark:bg-appRed-100"
                                : "text-gray-600 hover:text-gray-900 dark:text-gray-300"
                        }`}
                    >
                        Cities / Visits
                    </button>
                </div>
            </div>

            {view === "countries" ? (
                <div className='flex w-full flex-col gap-14'>
                    {tripsByYear.map(({ year, items }) => (
                        <section key={year}>
                            <h2 className='mb-8 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl'>
                                Travel • {year}
                            </h2>
                            <div className='rounded-2xl bg-[linear-gradient(180deg,#eef4ff_0%,#f8fafc_100%)] p-5 dark:bg-[linear-gradient(180deg,#111827_0%,#0b1220_100%)] sm:p-8'>
                                <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                                    {items.map((trip, index) => (
                                        <CountryPinCard
                                            key={trip.id}
                                            title={trip.country}
                                            month={trip.month}
                                            coverImage={trip.coverImage}
                                            href={`${basePath}/${trip.slug}`}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
            ) : (
                <div className='flex w-full flex-col gap-14'>
                    {citiesByYear.map(({ year, items }) => (
                        <section key={year}>
                            <h2 className='mb-8 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl'>
                                Travel • {year}
                            </h2>
                            <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
                                {items.map((visit) => (
                                    <CityHighlight
                                        key={visit.id}
                                        visit={visit}
                                        href={`${basePath}/${visit.country
                                            .toLowerCase()
                                            .replace(/\s+/g, "-")}-${visit.year}?city=${visit.slug}`}
                                    />
                                ))}
                            </div>
                        </section>
                    ))}
                    <p className='text-center text-xs text-gray-500 dark:text-gray-400'>
                        Tap a city to open that trip — story text appears below
                        the city circles.
                    </p>
                </div>
            )}
        </div>
    );
};

export default TravelVisitsPreview;
