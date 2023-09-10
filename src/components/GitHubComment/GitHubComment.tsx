import Giscus from '@giscus/react';
export default function GitHubComment() {
    return (
      <Giscus
        id="comments"
        repo="SyedaMahamFahim/syedamaham.dev"
        repoId="R_kgDOKHIRnw"
        category="Comments"
        categoryId="DIC_kwDOKHIRn84CZNA7"
        mapping="url"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
        loading="lazy"
      />
    );
  }