import Giscus from '@giscus/react';
export default function GitHubComment() {
  const {NEXT_PUBLIC_GITHUB_COMMENT_REPO_ID,NEXT_PUBLIC_GITHUB_COMMENT_CATEGORY_ID} = process.env

  
    return (
      <Giscus
        id="comments"
        repo="SyedaMahamFahim/syedamaham.dev"
        repoId={`${NEXT_PUBLIC_GITHUB_COMMENT_REPO_ID}`}
        category="Blog Comments"
        categoryId={NEXT_PUBLIC_GITHUB_COMMENT_CATEGORY_ID}
        mapping="pathname"
        term="Welcome to Maham's blog"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
        loading="lazy"
      />
     
    );
  }