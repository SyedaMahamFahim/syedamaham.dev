import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/utils/sanity-utils";
import CopyableCodeBlock from "@/components/Article/ArticleContent/CopyableCodeBlock";

const FLOAT_WIDTH = 180;
const MAX_HEIGHT = 240;

/** Arabic / Urdu script ranges */
const ARABIC_SCRIPT =
    /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;

function blockText(value: any): string {
    if (!value?.children) return "";
    return value.children.map((child: any) => child?.text || "").join("");
}

function isUrduBlock(value: any): boolean {
    return ARABIC_SCRIPT.test(blockText(value));
}

function urduBlockClass(base: string, value: any) {
    if (!isUrduBlock(value)) return base;
    return `${base} font-urdu text-right text-[1.25rem] md:text-[1.4rem]`;
}

function dimensionsFromRef(ref?: string) {
    if (!ref) return null;
    const match = ref.match(/-(\d+)x(\d+)-/);
    if (!match) return null;
    return { width: Number(match[1]), height: Number(match[2]) };
}

function TravelBlogImage({ value }: { value: any }) {
    if (!value?.asset?._ref) return null;

    const fromAsset = dimensionsFromRef(value.asset._ref);
    const naturalW = fromAsset?.width || FLOAT_WIDTH;
    const naturalH = fromAsset?.height || MAX_HEIGHT;

    const scale = Math.min(
        FLOAT_WIDTH / naturalW,
        MAX_HEIGHT / naturalH,
        1
    );
    const displayWidth = Math.max(1, Math.round(naturalW * scale));
    const displayHeight = Math.max(1, Math.round(naturalH * scale));

    const src = urlFor(value)
        .width(displayWidth * 2)
        .auto("format")
        .url();

    return (
        <figure className='mx-auto my-5 block w-[180px] max-w-[180px] overflow-hidden sm:float-right sm:clear-right sm:mx-0 sm:mb-5 sm:ml-6 sm:mt-1'>
            <Image
                src={src}
                alt={value.alt || "Travel photo"}
                width={displayWidth}
                height={displayHeight}
                className='block h-auto w-full rounded-sm shadow-md'
                sizes='180px'
            />
            {value.alt ? (
                <figcaption className='mt-1.5 text-center text-xs italic leading-snug text-gray-500 dark:text-gray-400'>
                    {value.alt}
                </figcaption>
            ) : null}
        </figure>
    );
}

const travelPortableText = {
    block: {
        normal: ({ children, value }: any) => (
            <p
                dir={isUrduBlock(value) ? "rtl" : undefined}
                lang={isUrduBlock(value) ? "ur" : undefined}
                className={urduBlockClass(
                    "my-6 text-base leading-relaxed md:text-lg",
                    value
                )}
            >
                {children}
            </p>
        ),
        h1: ({ children, value }: any) => (
            <h1
                dir={isUrduBlock(value) ? "rtl" : undefined}
                lang={isUrduBlock(value) ? "ur" : undefined}
                className={urduBlockClass(
                    "my-6 text-3xl font-semibold leading-tight md:text-4xl",
                    value
                )}
            >
                {children}
            </h1>
        ),
        h2: ({ children, value }: any) => (
            <h2
                dir={isUrduBlock(value) ? "rtl" : undefined}
                lang={isUrduBlock(value) ? "ur" : undefined}
                className={urduBlockClass(
                    "my-6 text-2xl font-semibold leading-tight md:text-3xl",
                    value
                )}
            >
                {children}
            </h2>
        ),
        h3: ({ children, value }: any) => (
            <h3
                dir={isUrduBlock(value) ? "rtl" : undefined}
                lang={isUrduBlock(value) ? "ur" : undefined}
                className={urduBlockClass(
                    "my-5 text-xl font-semibold leading-tight md:text-2xl",
                    value
                )}
            >
                {children}
            </h3>
        ),
        h4: ({ children, value }: any) => (
            <h4
                dir={isUrduBlock(value) ? "rtl" : undefined}
                lang={isUrduBlock(value) ? "ur" : undefined}
                className={urduBlockClass("my-4 text-lg font-semibold", value)}
            >
                {children}
            </h4>
        ),
        blockquote: ({ children, value }: any) => (
            <blockquote
                dir={isUrduBlock(value) ? "rtl" : undefined}
                lang={isUrduBlock(value) ? "ur" : undefined}
                className={
                    isUrduBlock(value)
                        ? "font-urdu my-6 border-r-4 border-appPurple-100 pr-4 text-right text-[1.25rem] text-gray-600 dark:border-appRed-100 dark:text-gray-300 md:text-[1.4rem]"
                        : "my-6 border-l-4 border-appPurple-100 pl-4 italic text-gray-600 dark:border-appRed-100 dark:text-gray-300"
                }
            >
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className='my-4 list-disc pl-7'>{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className='my-4 list-decimal pl-7'>{children}</ol>
        ),
    },
    listItem: {
        bullet: ({ children }: any) => <li className='my-2 pl-1'>{children}</li>,
        number: ({ children }: any) => (
            <li className='my-1.5 pl-1'>{children}</li>
        ),
    },
    marks: {
        link: ({ children, value }: any) => {
            const external = !value?.href?.startsWith("/");
            if (external) {
                return (
                    <a
                        href={value.href}
                        rel='noreferrer noopener'
                        target='_blank'
                        className='text-appPurple-100 underline dark:text-appRed-100'
                    >
                        {children}
                    </a>
                );
            }
            return (
                <Link
                    href={value.href}
                    className='text-appPurple-100 underline dark:text-appRed-100'
                >
                    {children}
                </Link>
            );
        },
        strong: ({ children }: any) => (
            <strong className='font-semibold'>{children}</strong>
        ),
        em: ({ children }: any) => <em>{children}</em>,
        underline: ({ children }: any) => (
            <span className='underline'>{children}</span>
        ),
        "strike-through": ({ children }: any) => (
            <span className='line-through'>{children}</span>
        ),
        code: ({ children }: any) => (
            <span className='rounded-md bg-gray-300/20 px-1 py-0.5 font-mono text-sm font-bold text-appRed-100 dark:text-appPurple-100'>
                {children}
            </span>
        ),
    },
    types: {
        code: ({ value }: any) => (
            <CopyableCodeBlock>{value}</CopyableCodeBlock>
        ),
        image: ({ value }: any) => <TravelBlogImage value={value} />,
    },
};

const TravelArticleContent = ({ content }: { content: any[] }) => {
    if (!content?.length) return null;
    return (
        <div className='flow-root dark:text-gray-300'>
            <PortableText value={content} components={travelPortableText} />
        </div>
    );
};

export default TravelArticleContent;
