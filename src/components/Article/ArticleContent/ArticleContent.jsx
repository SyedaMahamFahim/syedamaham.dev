import { PortableText } from "@portabletext/react";

import articePortableText from './PortableComponent'
const ArticleContent = ({ ARTICLE_CONTENT }) => {
  const body = ARTICLE_CONTENT;
  return (
    <>
      <div className="dark:text-gray-300">
        <PortableText value={body} components={articePortableText} /></div>


    </>
  );
};

export default ArticleContent;
