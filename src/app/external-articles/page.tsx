import { Text } from "@/components";
import { HomeArticles } from "@/containers";
import {getExternalArticels} from "@/utils/sanity-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:'External Articels',
  description: 'Explore curated external articles from Medium, Hashnode, and more. Gain insights into tech trends and coding expertise.',
  keywords: 'external articles, tech insights, coding expertise, innovative ideas, Medium, Hashnode, tech trends, perspectives, trusted sources',
};
const ExternalArticles = async () => {
  const articles= await getExternalArticels()
  
  return (
    <section className="container px-3 md:pb-20 md:pt-10 pt-20">
      <div className="mt-19">
       

        <Text
          title
          className="mb-5 mt-10 dark:text-appRed-100 text-appPurple-100 center"
        >
          External Articles✨
        </Text>
        <div className={"flex flex-wrap flex-col"}>
          <HomeArticles isArchive={false} noOfArticle={1} articles={articles} 
          isSeries={false}
          isExternal={true}
          />
        </div>
      </div>
    </section>
  );
};

export default ExternalArticles;
