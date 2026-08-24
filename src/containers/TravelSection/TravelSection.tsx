import Link from "next/link";
import Image from "next/image";
import type { TravelTrip } from "@/types/travel";
import { urlFor } from "@/utils/sanity-utils";

const TravelSection = ({ trips }: { trips: TravelTrip[] }) => {
    if (!trips?.length) return null;

    const grouped = trips.reduce((acc: Record<string, TravelTrip[]>, trip) => {
        const year = String(trip.year);
        acc[year] = acc[year] || [];
        acc[year].push(trip);
        return acc;
    }, {});

    const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

    return (
        <div className='flex w-full flex-col gap-12'>
            {years.map((year) => (
                <section key={year}>
                    <div className='mb-8 flex items-center gap-4'>
                        <div className='h-px flex-1 bg-gray-200 dark:bg-gray-700' />
                        <h2 className='whitespace-nowrap text-center text-xl font-semibold text-appPurple-100 dark:text-appRed-100 sm:text-2xl'>
                            Travel • {year}
                        </h2>
                        <div className='h-px flex-1 bg-gray-200 dark:bg-gray-700' />
                    </div>

                    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {grouped[year].map((trip) => {
                            const slug = trip.slug?.current;
                            if (!slug || !trip.coverImage) return null;

                            return (
                                <Link
                                    key={trip._id}
                                    href={`/travel/${slug}`}
                                    className='group overflow-hidden rounded-md border border-gray-200 bg-white transition hover:border-appPurple-100 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-appRed-100'
                                >
                                    <div className='relative aspect-square w-full overflow-hidden'>
                                        <Image
                                            src={urlFor(trip.coverImage)
                                                .width(800)
                                                .url()}
                                            alt={trip.title}
                                            fill
                                            className='object-cover transition duration-300 group-hover:scale-105'
                                            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                                        />
                                    </div>
                                    <div className='px-4 py-4 text-center'>
                                        <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                                            {trip.title}
                                        </h3>
                                        <p className='mt-1 text-sm text-gray-500 dark:text-gray-400'>
                                            {trip.month}
                                        </p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </section>
            ))}
        </div>
    );
};

export default TravelSection;
