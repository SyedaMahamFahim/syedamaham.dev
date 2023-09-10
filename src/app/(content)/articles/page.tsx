import { Text, ContentsTypeTab } from "@/components";
import { HomeArticles } from "@/containers";
import {getPosts} from "@/utils/sanity-utils";
import { Metadata } from "next";
import {WEBSITE_NAME,META_SEO_KEYWORDS} from '@/constants/_APP_SETUP'

export const metadata: Metadata = {
  title:'Articles',
  description: `Dive into insightful articles by ${WEBSITE_NAME}. Explore tech, coding, and innovation through our expert perspectives.`,
  keywords: META_SEO_KEYWORDS,
};


const Article = async () => {
  const articles= await getPosts()
  
  return (
    <section className="container px-3 md:pb-20 md:pt-10 pt-20">
      <div className="mt-19">
        <ContentsTypeTab />

        <Text
          title
          className="mb-5 mt-10 dark:text-appRed-100 text-appPurple-100"
        >
          Article 📚 
        </Text>
        <div className={"flex flex-wrap flex-col"}>
          <HomeArticles 
          isArchive={false} 
          noOfArticle={6} 
          articles={articles} 
          isSeries={false}
          isExternal={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Article;
