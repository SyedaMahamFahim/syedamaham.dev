import { Text, ArticleContent } from "@/components";
import { format } from "date-fns";
import { getLegalQuery} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const legal = await sanityFetch<SanityDocument>({
    query: getLegalQuery,
    params,
  });
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
    const legal = await sanityFetch<SanityDocument>({
      query: getLegalQuery,
      params,
    });
    return (
        <>
            <section className='m-4 mt-20 md:mt-10'>
                <div className='container px-0 pb-[20px] pt-[10px] md:px-[15px]'>
                  {
                    !legal ? (
                      <p>No Legal Found</p>
                    ) :(<>
                    <Text p className='text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-appPurple-100 dark:text-appRed-100'>
                        Created At:{" "}
                        {format(new Date(legal?._createdAt), "MMMM d, yyyy")} |
                        Last Updated At:
                        {format(new Date(legal?._updatedAt), "MMMM d, yyyy")}
                    </Text>

                    <div className='grid'>
                        <ArticleContent ARTICLE_CONTENT={legal?.body} />
                    </div>
                    </>)
                  }
                    
                </div>
            </section>
        </>
    );
};

export default Legal;
