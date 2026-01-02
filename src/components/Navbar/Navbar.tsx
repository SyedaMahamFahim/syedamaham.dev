"use client";
import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import { FiArrowUpRight } from "react-icons/fi";
import { LOGO } from "@/constants/_APP_SETUP";
import { combineClasses } from "@/utils/utils";
import classes from "./Navbar.module.scss";

const Navbar = () => {
    const { theme, setTheme } = useTheme();
    const [open, setOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const closeAll = () => {
        setOpen(false);
        setActiveDropdown(null);
    };

    return (
        <nav
            // className={combineClasses(
            //     classes.navbar,
            //     "sticky top-0 w-full border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
            // )}
            className={combineClasses(
                classes.navbar,
                "w-full border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
            )}
        >
            <div
                className={combineClasses(
                    classes.navbar__container,
                    "container mx-auto flex h-10 items-center justify-between px-4"
                )}
            >
                <Link
                    href='/'
                    className='text-lg font-semibold'
                    onClick={closeAll}
                >
                    {LOGO}
                </Link>

                {/* ---------- DESKTOP ---------- */}
                <div className='hidden items-center gap-8 md:flex'>
                    {/* Maham */}
                    <div className='relative'>
                        <button
                            onClick={() =>
                                setActiveDropdown(
                                    activeDropdown === "maham" ? null : "maham"
                                )
                            }
                            className='flex items-center gap-1'
                        >
                            Maham
                        </button>

                        {activeDropdown === "maham" && (
                            <div className='absolute left-0 top-8 w-40 rounded-lg bg-white shadow-md dark:bg-slate-800'>
                                <Link
                                    href='/about'
                                    onClick={closeAll}
                                    className='block px-4 py-2'
                                >
                                    About
                                </Link>

                                <a
                                    href='https://www.linkedin.com/in/syedamahamfahim'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    onClick={closeAll}
                                    className='flex items-center justify-between px-4 py-2'
                                >
                                    <span>Experience</span>
                                    <FiArrowUpRight className='text-sm opacity-70' />
                                </a>

                                <Link href="/yearly-notes" onClick={closeAll} className="block px-4 py-2">
                                    Yearly Notes
                                </Link>
                                <Link
                                    href='/profiles'
                                    onClick={closeAll}
                                    className='block px-4 py-2'
                                >
                                    Profiles
                                </Link>
                                <Link
                                    href='/contact'
                                    onClick={closeAll}
                                    className='block px-4 py-2'
                                >
                                    Contact
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Writing */}
                    <div className='relative'>
                        <button
                            onClick={() =>
                                setActiveDropdown(
                                    activeDropdown === "writing"
                                        ? null
                                        : "writing"
                                )
                            }
                            className='flex items-center gap-1'
                        >
                            Writing
                        </button>

                        {activeDropdown === "writing" && (
                            <div className='absolute left-0 top-8 w-44 rounded-lg bg-white shadow-md dark:bg-slate-800'>
                                <Link
                                    href='/articles'
                                    onClick={closeAll}
                                    className='block px-4 py-2'
                                >
                                    Articles
                                </Link>
                                <Link
                                    href='/series'
                                    onClick={closeAll}
                                    className='block px-4 py-2'
                                >
                                    Series
                                </Link>
                                <Link
                                    href='/reflections'
                                    onClick={closeAll}
                                    className='block px-4 py-2'
                                >
                                    Reflections
                                </Link>
                                <Link
                                    href='/snippets'
                                    onClick={closeAll}
                                    className='block px-4 py-2'
                                >
                                    Snippets
                                </Link>
                                {/* <Link href="/ebook" onClick={closeAll} className="block px-4 py-2">
                                    EBook
                                </Link> */}
                                <Link
                                    href='/publications'
                                    onClick={closeAll}
                                    className='block px-4 py-2'
                                >
                                    Publications
                                </Link>
                            </div>
                        )}
                    </div>

                    <button
                        onClick={() =>
                            setTheme(theme === "dark" ? "light" : "dark")
                        }
                        className='text-xl'
                    >
                        {theme === "dark" ? (
                            <BsFillSunFill />
                        ) : (
                            <BsFillMoonFill />
                        )}
                    </button>
                </div>

                {/* ---------- MOBILE TOGGLE ---------- */}
                <button
                    className='text-2xl md:hidden'
                    onClick={() => setOpen(!open)}
                >
                    {open ? <HiX /> : <HiMenu />}
                </button>
            </div>

            {/* ---------- MOBILE MENU ---------- */}
            {open && (
                <div className='border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 md:hidden'>
                    <div className='flex flex-col gap-4 p-4'>
                        {/* Maham */}
                        <button
                            onClick={() =>
                                setActiveDropdown(
                                    activeDropdown === "maham-mobile"
                                        ? null
                                        : "maham-mobile"
                                )
                            }
                            className='flex justify-between'
                        >
                            <span>Maham</span>
                            <span>
                                {activeDropdown === "maham-mobile" ? "−" : "+"}
                            </span>
                        </button>

                        {activeDropdown === "maham-mobile" && (
                            <div className='ml-4 flex flex-col gap-2'>
                                <Link href='/about' onClick={closeAll}>
                                    About
                                </Link>
                                <a
                                    href='https://www.linkedin.com/in/syedamahamfahim'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    onClick={closeAll}
                                    className='flex items-center gap-1'
                                >
                                    Experience{" "}
                                    <FiArrowUpRight className='text-sm opacity-70' />
                                </a>
                                {/* <Link href="/timeline" onClick={closeAll}>Timeline</Link> */}
                                <Link href='/profiles' onClick={closeAll}>
                                    Profiles
                                </Link>
                                <Link href='/contact' onClick={closeAll}>
                                    Contact
                                </Link>
                            </div>
                        )}

                        {/* Writing */}
                        <button
                            onClick={() =>
                                setActiveDropdown(
                                    activeDropdown === "writing-mobile"
                                        ? null
                                        : "writing-mobile"
                                )
                            }
                            className='mt-4 flex justify-between'
                        >
                            <span>Writing</span>
                            <span>
                                {activeDropdown === "writing-mobile"
                                    ? "−"
                                    : "+"}
                            </span>
                        </button>

                        {activeDropdown === "writing-mobile" && (
                            <div className='ml-4 flex flex-col gap-2'>
                                <Link href='/articles' onClick={closeAll}>
                                    Articles
                                </Link>
                                <Link href='/series' onClick={closeAll}>
                                    Series
                                </Link>
                                <Link href='/reflections' onClick={closeAll}>
                                    Reflections
                                </Link>
                                <Link href='/snippets' onClick={closeAll}>
                                    Snippets
                                </Link>
                                {/* <Link href="/ebook" onClick={closeAll}>EBook</Link> */}
                                <Link href='/publications' onClick={closeAll}>
                                    Publications
                                </Link>
                            </div>
                        )}

                        <button
                            onClick={() =>
                                setTheme(theme === "dark" ? "light" : "dark")
                            }
                            className='mt-4 flex items-center gap-2'
                        >
                            {theme === "dark" ? (
                                <BsFillSunFill />
                            ) : (
                                <BsFillMoonFill />
                            )}
                            <span>{theme === "dark" ? "Light" : "Dark"}</span>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
