import { getAuthorAbout} from "@/utils/sanity-utils";
import { Text, ArticleContent  } from "@/components";

import { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const author = await getAuthorAbout(params.slug)
  if (!author)
    return {
      title: "Not Found",
      description: "The page is not found",
    };

  return {
    title: author?.name,
    description: author?.meta_description,
  };
}

interface AuthorAbout {
  body: any
  name: string;
}
const AuthorAbout = async ({ params }: { params: { slug: string } }) => {
 
  const authorAbout: AuthorAbout = await getAuthorAbout(params.slug);

  return (
    <>
      <section className="dark:bg-slate-900 dark:text-white">
        <div className="container px-0 md:px-[15px] pt-[10px] pb-[20px]">
         
          <Text
            title
            className="mb-5 mt-10 dark:text-appRed-100 text-appPurple-100"
          >
          About: {authorAbout?.name}
            
          </Text>

          <div className="grid">
         
            <ArticleContent ARTICLE_CONTENT={authorAbout?.body}/>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthorAbout;
