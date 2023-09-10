"use client";

import React, { useState } from "react";
const ReadingProgressLine = ({ target }: { target: any }) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const scrollListener = () => {
    if (!target.current) {
      return;
    }

    const element = target.current;
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight;
    const windowScrollTop =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (windowScrollTop === 0) {
      return setReadingProgress(0);
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100);
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });

  return (
    <div
      className={`reading-progress-bar dark:bg-appRed-100 bg-appPurple-100`}
      style={{ width: `${readingProgress}%` }}
    />
  );
};

export default ReadingProgressLine;
