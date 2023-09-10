import { THEMES } from "../shared/enums";

// env
const env = process.env.NODE_ENV;
export const IS_DEV_MODE = env === "development" ? true : false;

export const CURRENT_YEAR = new Date().getFullYear();

export function slugToTitle(slug: string) {
  const words = slug.split("-");
  const titleWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return titleWords.join(" ");
}

/**
 *
 * @param classes string
 * @returns string
 */
export const combineClasses = function (...classes: any): string {
  return classes.filter((item: any) => !!item).join(" ");
};

/**
 * Changes Dark / Light Theme
 */
export const changeTheme = (): void => {
  const lsTheme = localStorage.getItem("theme");
  localStorage.setItem(
    "theme",
    lsTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
  );

  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  location.reload();
};

/**
 * Add no scroll class to body when modal isopen
 */
export const addBodyNoScroll = (): void => {
  document.body.classList.add("no-scroll");
};

/**
 * Removes no scroll class to body when modal isopen
 */
export const removeBodyNoScroll = (): void => {
  document.body.classList.remove("no-scroll");
};

/**
 * Generates a random linear gradient color using HSL color model.
 * @return {string} The generated linear gradient color in string format.
 */
export const getRandomGradientColor = (): string => {
  const hue1 = Math.floor(Math.random() * 360);
  const hue2 = (hue1 + Math.floor(Math.random() * 180)) % 360;
  const saturation = 75 + Math.floor(Math.random() * 25);
  const lightness1 = 50 + Math.floor(Math.random() * 25);
  const lightness2 = 50 + Math.floor(Math.random() * 25);
  return `linear-gradient(${hue1}deg, hsl(${hue1}, ${saturation}%, ${lightness1}%), hsl(${hue2}, ${saturation}%, ${lightness2}%))`;
};

export const getRandomHexColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
