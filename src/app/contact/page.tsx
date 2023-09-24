import { Text, ArticleContent } from "@/components";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { getContactQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Connect with us for exceptional content. Reach out via LinkedIn, Email, Reporting, or Suggestions. Your input matters!",
    keywords:
        "contact us, get in touch, reach out, LinkedIn, email, reporting, suggestions, customer service, inquiries, feedback",
};

const Contact = async () => {
    const contact = await sanityFetch<SanityDocument>({
        query: getContactQuery,
    });
    const getFirstContact = contact[0];
    return (
        <>
            <section className='m-4 mt-20 dark:bg-slate-900 dark:text-white'>
                <div className='container px-0 pb-[20px] pt-[10px] md:px-[15px]'>
                    {contact?.length === 0 ? (
                        <p>No Contact Information Found</p>
                    ) : (
                        <>
                            <Text
                                title
                                className='text-appPurple-100 dark:text-appRed-100'
                            >
                                {getFirstContact?.title}
                            </Text>

                            <div className='grid'>
                                <ArticleContent
                                    ARTICLE_CONTENT={getFirstContact?.body}
                                />
                            </div>
                        </>
                    )}
                </div>
            </section>
        </>
    );
};

export default Contact;
