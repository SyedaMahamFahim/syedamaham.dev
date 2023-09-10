"use client";
import { useEffect, useState } from "react";
import {
  addBodyNoScroll,
  combineClasses,
  removeBodyNoScroll,
} from "@/utils/utils";
// import Search from "../Search";
import classes from "./Navbar.module.scss";
import Link from "next/link";
import { useTheme } from "next-themes";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
// import { AiOutlineSearch } from "react-icons/ai";

import { LOGO } from "@/constants/_APP_SETUP";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    showSearch
      ? addBodyNoScroll()
      : () => {
          return;
        };
    return () => {
      removeBodyNoScroll();
    };
  }, [showSearch]);

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const openSearch = () => {
    setShowSearch(true);
  };

  return (
    <>
      <nav
        className={combineClasses(
          classes.navbar,
          "bg-white  dark:bg-slate-900 dark:text-white text-black"
        )}
      >
        <div
          className={combineClasses(
            classes.navbar__container,
            "container flex items-center justify-between",
            "px-2"
          )}
        >
          <div className="flex items-center">
            <Link href="/" className="text-[22px] font-semibold">
              {LOGO}
            </Link>
          </div>

          <div className="flex items-center">
            {/* <div
              className={combineClasses(
                classes.search_icon_wrapper,
                "ml-5 dark:text-white"
              )}
              onClick={() => openSearch()}
            >
              <button name="search-button" aria-label="search button">
                <AiOutlineSearch className="dark:text-white text-black text-[22px]" />
              </button>
            </div> */}

            <button
              name="theme-switch"
              aria-label="theme button"
              className={combineClasses(
                classes.theme_switch,
                "pl-3 dark:text-white text-black"
              )}
              onClick={changeTheme}
            >
              {theme && theme === "dark" ? (
                <BsFillSunFill className="text-2xl" />
              ) : (
                <BsFillMoonFill className="text-md " />
              )}
            </button>
          </div>
        </div>{" "}
      </nav>

      {/* {showSearch && <Search closeSearch={() => setShowSearch(false)} />} */}
    </>
  );
};

export default Navbar;
