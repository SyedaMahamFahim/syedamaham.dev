import { useTheme } from "next-themes";

import Giscus from "@giscus/react";
export default function GitHubComment() {
  const { theme} = useTheme();
    return (
        <Giscus
            id='comments'
            repo='SyedaMahamFahim/syedamaham.dev'
            repoId={`${process.env.NEXT_PUBLIC_GITHUB_COMMENT_REPO_ID}`}
            category='Comments'
            categoryId={process.env.NEXT_PUBLIC_GITHUB_COMMENT_CATEGORY_ID}
            mapping='url'
            term="Welcome to Maham's blog"
            reactionsEnabled='1'
            emitMetadata='0'
            inputPosition='top'
            theme={theme === "dark" ? "dark" : "light"}
            lang='en'
            loading='lazy'
        />
    );
}
