import { Text, ArticleContent } from "@/components";
import { Metadata } from "next";
import { SanityDocument } from "@sanity/client";
import { getContactQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { AppWrapper } from "@/containers";
export const metadata: Metadata = {
    title: "Contact",
    description:
        "Connect with ME for exceptional content. Reach out via LinkedIn, Email, Reporting, or Suggestions. Your input matters!",
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
            <AppWrapper>
                <div className='container'>
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
            </AppWrapper>
        </>
    );
};

export default Contact;
