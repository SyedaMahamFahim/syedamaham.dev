"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import type { TravelPhoto } from "@/types/travel";
import { urlFor } from "@/utils/sanity-utils";

type TravelGalleryProps = {
    photos: TravelPhoto[];
};

function photoSrc(photo: TravelPhoto): string | null {
    if (photo.src) return photo.src;
    if (photo.image) return urlFor(photo.image).width(1600).url();
    return null;
}

function photoId(photo: TravelPhoto, index: number): string {
    return photo._key || `${photo.caption}-${index}`;
}

const TravelGallery = ({ photos }: TravelGalleryProps) => {
    const validPhotos = useMemo(
        () => photos.filter((p) => photoSrc(p)),
        [photos]
    );

    const cities = useMemo(
        () => Array.from(new Set(validPhotos.map((p) => p.city))),
        [validPhotos]
    );
    const [activeCity, setActiveCity] = useState<string>("All");
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const filtered =
        activeCity === "All"
            ? validPhotos
            : validPhotos.filter((photo) => photo.city === activeCity);

    const showTabs = cities.length > 1;
    const isOpen = lightboxIndex !== null;
    const current = isOpen ? filtered[lightboxIndex] : null;
    const currentSrc = current ? photoSrc(current) : null;

    const closeLightbox = useCallback(() => setLightboxIndex(null), []);

    const showPrev = useCallback(() => {
        setLightboxIndex((i) => {
            if (i === null || filtered.length === 0) return i;
            return (i - 1 + filtered.length) % filtered.length;
        });
    }, [filtered.length]);

    const showNext = useCallback(() => {
        setLightboxIndex((i) => {
            if (i === null || filtered.length === 0) return i;
            return (i + 1) % filtered.length;
        });
    }, [filtered.length]);

    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") {
                e.preventDefault();
                showPrev();
            }
            if (e.key === "ArrowRight") {
                e.preventDefault();
                showNext();
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, closeLightbox, showPrev, showNext]);

    useEffect(() => {
        setLightboxIndex(null);
    }, [activeCity]);

    return (
        <div>
            {showTabs && (
                <div className='mb-8 flex flex-wrap items-center justify-center gap-2'>
                    {["All", ...cities].map((city) => {
                        const isActive = activeCity === city;
                        return (
                            <button
                                key={city}
                                type='button'
                                onClick={() => setActiveCity(city)}
                                className={`rounded-md px-4 py-1.5 text-sm transition-colors ${
                                    isActive
                                        ? "bg-appPurple-100 text-white dark:bg-appRed-100"
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                                }`}
                            >
                                {city}
                            </button>
                        );
                    })}
                </div>
            )}

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {filtered.map((photo, index) => {
                    const src = photoSrc(photo);
                    if (!src) return null;

                    return (
                        <button
                            key={photoId(photo, index)}
                            type='button'
                            onClick={() => setLightboxIndex(index)}
                            className='group overflow-hidden rounded-md border border-gray-200 bg-white text-left transition hover:border-appPurple-100 dark:border-gray-700 dark:bg-gray-900 dark:hover:border-appRed-100'
                        >
                            <div className='relative aspect-square w-full overflow-hidden'>
                                <Image
                                    src={src}
                                    alt={photo.caption}
                                    fill
                                    className='object-cover transition duration-300 group-hover:scale-105'
                                    sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw'
                                />
                            </div>
                            <span className='block px-3 py-3 text-center text-sm text-gray-700 dark:text-gray-300'>
                                {photo.caption}
                            </span>
                        </button>
                    );
                })}
            </div>

            {filtered.length === 0 && (
                <p className='text-center text-gray-500'>
                    No photos for this city.
                </p>
            )}

            {isOpen && current && currentSrc && (
                <div
                    className='fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm'
                    role='dialog'
                    aria-modal='true'
                    aria-label={current.caption}
                    onClick={closeLightbox}
                >
                    <button
                        type='button'
                        onClick={closeLightbox}
                        className='absolute right-4 top-4 z-10 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white transition hover:bg-white/20'
                        aria-label='Close'
                    >
                        ✕
                    </button>

                    {filtered.length > 1 && (
                        <>
                            <button
                                type='button'
                                onClick={(e) => {
                                    e.stopPropagation();
                                    showPrev();
                                }}
                                className='absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 px-3 py-3 text-xl text-white transition hover:bg-white/20 sm:left-6'
                                aria-label='Previous photo'
                            >
                                ‹
                            </button>
                            <button
                                type='button'
                                onClick={(e) => {
                                    e.stopPropagation();
                                    showNext();
                                }}
                                className='absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 px-3 py-3 text-xl text-white transition hover:bg-white/20 sm:right-6'
                                aria-label='Next photo'
                            >
                                ›
                            </button>
                        </>
                    )}

                    <div
                        className='relative flex max-h-[90vh] w-full max-w-5xl flex-col items-center'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className='relative h-[70vh] w-full overflow-hidden rounded-md'>
                            <Image
                                key={photoId(current, lightboxIndex ?? 0)}
                                src={currentSrc}
                                alt={current.caption}
                                fill
                                className='object-contain transition-opacity duration-300'
                                sizes='100vw'
                                priority
                            />
                        </div>
                        <p className='mt-4 text-center text-base text-white'>
                            {current.caption}
                        </p>
                        <p className='mt-1 text-sm text-white/60'>
                            {(lightboxIndex ?? 0) + 1} / {filtered.length}
                            <span className='ml-2 hidden sm:inline'>
                                · use ← → keys
                            </span>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TravelGallery;
