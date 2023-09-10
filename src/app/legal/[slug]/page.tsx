import { getLegal } from "@/utils/sanity-utils";
import { Text, ArticleContent } from "@/components";
import { format } from "date-fns";
import { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const legal = await getLegal(params.slug)
  if (!legal)
    return {
      title: "Not Found",
      description: "The page is not found",
    };

  return {
    title: legal?.title,
    description: legal?.meta_description,
  };
}

const Legal = async ({ params }: { params: { slug: string } }) => {
    const legal = await getLegal(params.slug);
    return (
        <>
            <section className='m-4 mt-20 md:mt-10'>
                <div className='container px-0 pb-[20px] pt-[10px] md:px-[15px]'>
                    <Text p className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-appPurple-100 dark:text-appRed-100'>
                        Created At:{" "}
                        {format(new Date(legal?._createdAt), "MMMM d, yyyy")} |
                        Last Updated At:
                        {format(new Date(legal?._updatedAt), "MMMM d, yyyy")}
                    </Text>

                    <div className='grid'>
                        <ArticleContent ARTICLE_CONTENT={legal?.body} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Legal;
