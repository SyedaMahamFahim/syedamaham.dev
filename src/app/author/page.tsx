import { Text } from "@/components";
import { HomeArticles } from "@/containers";
import {getExternalArticels} from "@/utils/sanity-utils";

const Author = async () => {
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

export default Author;
