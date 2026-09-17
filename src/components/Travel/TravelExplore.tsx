"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TravelSection from "@/containers/TravelSection/TravelSection";
import type { TravelCity, TravelTrip } from "@/types/travel";
import { travelMonthIndex } from "@/utils/travel";

type ViewMode = "countries" | "cities";

type FlatCity = TravelCity & {
    id: string;
    countryTitle: string;
    tripSlug: string;
    year: number;
    month: string;
};

function flattenCities(trips: TravelTrip[]): FlatCity[] {
    const cities: FlatCity[] = [];

    trips.forEach((trip) => {
        const tripSlug = trip.slug?.current;
        if (!tripSlug) return;

        (trip.cities || []).forEach((city, index) => {
            if (!city.imageUrl || !city.name) return;
            cities.push({
                ...city,
                id: `${trip._id}-${city._key || city.name}-${index}`,
                countryTitle: trip.title,
                tripSlug,
                year: trip.year,
                month: trip.month,
            });
        });
    });

    return cities;
}

const TravelExplore = ({ trips }: { trips: TravelTrip[] }) => {
    const [view, setView] = useState<ViewMode>("countries");
    const cities = useMemo(() => flattenCities(trips), [trips]);
    const citiesByYear = useMemo(() => {
        const grouped = cities.reduce(
            (acc: Record<string, FlatCity[]>, city) => {
                const year = String(city.year);
                acc[year] = acc[year] || [];
                acc[year].push(city);
                return acc;
            },
            {}
        );
        return Object.keys(grouped)
            .sort((a, b) => Number(b) - Number(a))
            .map((year) => ({
                year,
                cities: grouped[year].sort(
                    (a, b) =>
                        travelMonthIndex(a.month) - travelMonthIndex(b.month)
                ),
            }));
    }, [cities]);

    return (
        <div>
            <div className='mb-10 flex justify-center'>
                <div className='inline-flex rounded-full border border-gray-200 bg-white p-1 dark:border-gray-700 dark:bg-gray-900'>
                    <button
                        type='button'
                        onClick={() => setView("countries")}
                        className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                            view === "countries"
                                ? "bg-appPurple-100 text-white dark:bg-appRed-100"
                                : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
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
                                : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                        }`}
                    >
                        Cities / Towns
                    </button>
                </div>
            </div>

            {view === "countries" ? (
                <TravelSection trips={trips} />
            ) : citiesByYear.length > 0 ? (
                <div className='flex w-full flex-col gap-14'>
                    {citiesByYear.map(({ year, cities: yearCities }) => (
                        <section key={year}>
                            <h2 className='mb-8 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl'>
                                Travel • {year}
                            </h2>
                            <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
                                {yearCities.map((city) => (
                                    <Link
                                        key={city.id}
                                        href={`/travel/${city.tripSlug}?city=${encodeURIComponent(
                                            city._key || city.name
                                        )}`}
                                        className='group'
                                        title={`Open ${city.name} story`}
                                    >
                                        <span className='mx-auto block w-fit rounded-full bg-gradient-to-tr from-appPurple-100 via-pink-400 to-orange-400 p-[3px]'>
                                            <span className='block rounded-full bg-white p-[2px] dark:bg-gray-950'>
                                                <span className='relative mx-auto block h-24 w-24 overflow-hidden rounded-full sm:h-28 sm:w-28'>
                                                    <Image
                                                        src={
                                                            city.imageUrl as string
                                                        }
                                                        alt={city.name}
                                                        fill
                                                        className='object-cover transition duration-300 group-hover:scale-105'
                                                        sizes='112px'
                                                    />
                                                </span>
                                            </span>
                                        </span>
                                        <span className='mt-3 block text-center'>
                                            <span className='block font-semibold text-gray-900 dark:text-white'>
                                                {city.name}{" "}
                                                <span className='text-xs font-normal uppercase tracking-wide text-gray-500 dark:text-gray-400'>
                                                    {city.countryCode}
                                                </span>
                                            </span>
                                            <span className='mt-1 block text-xs text-gray-500 dark:text-gray-400'>
                                                {city.countryTitle}
                                            </span>
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </section>
                    ))}
                    <p className='text-center text-xs text-gray-500 dark:text-gray-400'>
                        Tap a city to open its trip and story
                    </p>
                </div>
            ) : (
                <p className='text-center text-gray-500 dark:text-gray-400'>
                    No cities yet. Add cities under your Travel documents in
                    Sanity.
                </p>
            )}
        </div>
    );
};

export default TravelExplore;
