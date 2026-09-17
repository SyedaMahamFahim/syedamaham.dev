import Link from "next/link";
import Image from "next/image";
import type { TravelTrip } from "@/types/travel";
import { sortTripsByMonth } from "@/utils/travel";

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

function CountryCard({ trip, index }: { trip: TravelTrip; index: number }) {
    const slug = trip.slug?.current;
    if (!slug || !trip.coverImageUrl) return null;

    const tilt =
        index % 3 === 0
            ? "-rotate-[1.5deg]"
            : index % 3 === 1
              ? "rotate-[1.25deg]"
              : "-rotate-[0.5deg]";

    return (
        <Link
            href={`/travel/${slug}`}
            className={`group relative block transition duration-300 hover:-translate-y-1 hover:rotate-0 ${tilt}`}
        >
            <div className='relative rounded-sm bg-[#f7f4ee] p-3 pb-5 shadow-[0_10px_28px_rgba(37,99,235,0.18),0_2px_6px_rgba(0,0,0,0.08)] ring-1 ring-black/5 transition duration-300 group-hover:shadow-[0_16px_36px_rgba(37,99,235,0.28),0_4px_10px_rgba(0,0,0,0.1)] dark:bg-[#2a2a2e] dark:ring-white/10'>
                <Pin />

                <div className='relative mt-3 aspect-square overflow-hidden bg-gray-200 shadow-inner dark:bg-gray-800'>
                    <Image
                        src={trip.coverImageUrl}
                        alt={trip.title}
                        fill
                        className='object-cover transition duration-500 group-hover:scale-[1.04]'
                        sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                    />
                </div>

                <div className='mt-4 text-center'>
                    <h3 className='text-lg font-bold tracking-tight text-gray-900 dark:text-white'>
                        {trip.title}
                    </h3>
                    <p className='mt-1 text-sm text-blue-600/80 dark:text-blue-300/80'>
                        {trip.month}
                    </p>
                </div>
            </div>
        </Link>
    );
}

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
        <div className='flex w-full flex-col gap-14'>
            {years.map((year) => {
                const ordered = sortTripsByMonth(grouped[year]);
                return (
                    <section key={year}>
                        <h2 className='mb-8 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl'>
                            Travel • {year}
                        </h2>

                        <div className='rounded-2xl bg-[linear-gradient(180deg,#eef4ff_0%,#f8fafc_100%)] p-5 dark:bg-[linear-gradient(180deg,#111827_0%,#0b1220_100%)] sm:p-8'>
                            <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                                {ordered.map((trip, index) => (
                                    <CountryCard
                                        key={trip._id}
                                        trip={trip}
                                        index={index}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                );
            })}
        </div>
    );
};

export default TravelSection;
