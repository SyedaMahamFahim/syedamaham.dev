"use client";
import React from "react";

interface ArticleFiltersProps {
    onChange: (filters: {
        platform: string | null;
        tag: string | null;
        category: string | null;
        year: string | null;
    }) => void;
    platforms: {
        name: string;
        display_label?: string;
        slug: { current: string };
    }[];
    tags: any[];
    categories: any[];
    years: any[];
}
// dark:border-appRed-100
const filterClass =
    "px-5 py-3 bg-transparent font-bold cursor-pointer focus:outline-none transition-colors \
   border-2 border-appPurple-100 text-appPurple-100 \
    dark:text-white \
   hover:bg-appPurple-100/10 \
   dark:hover:bg-appRed-100/10";

const ArticleFilters = ({
    onChange,
    platforms,
    tags,
    categories,
    years,
}: ArticleFiltersProps) => {
    const updateFilter = (key: string, value: string) => {
        // @ts-ignore
        onChange((prev: any) => ({
            ...prev,
            [key]: value || null,
        }));
    };

    const normalizedYears = Array.from(
        new Set(
            years
                .filter((y) => y?.publishedAt)
                .map((y) => new Date(y.publishedAt).getFullYear().toString())
        )
    ).sort((a, b) => Number(b) - Number(a));

    return (
        <div className='mb-12 mt-6 w-full'>
            <div className='flex gap-4 overflow-x-auto pb-2 md:flex-wrap'>
                <select
                    className={filterClass}
                    defaultValue=''
                    onChange={(e) => updateFilter("platform", e.target.value)}
                >
                    <option value='' className="text-black">Platform</option>
                    {platforms?.map((platform) => (
                        <option
                            key={platform.slug.current}
                            value={platform.slug.current}
                            className="text-black"
                        >
                            {platform.display_label || platform.name}
                        </option>
                    ))}
                </select>

                <select
                    className={filterClass}
                    defaultValue=''
                    onChange={(e) => updateFilter("tag", e.target.value)}
                >
                    <option value='' className="text-black">Tag</option>
                    {tags?.map((tag) => (
                        <option
                            key={tag.slug.current}
                            value={tag.slug.current}
                            className='lowercase text-black'
                        >
                            {tag.title}
                        </option>
                    ))}
                    <option value='vuejs'>vuejs</option>
                </select>

                <select
                    className={filterClass}
                    defaultValue=''
                    onChange={(e) => updateFilter("category", e.target.value)}
                >
                    <option value='' className="text-black">Category</option>
                    {categories?.map((category) => (
                        <option
                            key={category.slug.current}
                            value={category.slug.current}
                            className="text-black"
                        >
                            {category.title}
                        </option>
                    ))}
                </select>

                <select
                    className={filterClass}
                    defaultValue=''
                    onChange={(e) => updateFilter("year", e.target.value)}
                >
                    <option value='' className="text-black">Year</option>
                    {normalizedYears.map((year) => (
                        <option key={year} value={year} className="text-black">
                            {year}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default ArticleFilters;
