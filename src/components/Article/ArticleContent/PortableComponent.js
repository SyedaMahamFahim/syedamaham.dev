import Link from "next/link";
import CopyableCodeBlock from './CopyableCodeBlock'
import ImagePortableCom from './ImagePortableCom'
const articePortableText = {
    block: {
      normal: ({ children }) => <p className="my-8 text-base md:text-lg">{children}</p>,
      h1: ({ children }) => <h1 className="font-semibold text-3xl my-8 leading-tight md:text-4xl">{children}</h1>,
      h2: ({ children }) => <h2 className="font-semibold text-2xl my-8 leading-tight md:text-3xl">{children}</h2>,
      h3: ({ children }) => <h3 className="font-semibold text-1xl my-8 leading-tight md:text-2xl">{children}</h3>,
      h4: ({ children }) => <h4 className="font-semibold text-lg my-8 leading-tight md:text-1xl">{children}</h4>,
      h5: ({ children }) => <h5 className="font-semibold text-base my-8 leading-tight md:text-lg">{children}</h5>,
      h6: ({ children }) => <h6 className="font-semibold text-sm my-8 leading-tight md:text-base">{children}</h6>,
    },

    list: {
      bullet: ({ children }) => <ul className="my-4 pl-7 list-disc">{children}</ul>,
      number: ({ children }) => <ol className="my-4 pl-7">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li className="pl-1 my-2">{children}</li>,
      number: ({ children }) => <li className="pl-1 my-1.5 list-decimal">{children}</li>,
    },
    marks: {
      link: ({ children, value }) => {
        const rel = !value?.href?.startsWith('/') ? 'noreferrer noopener' : undefined
        const targ = !value?.href?.startsWith('/') ? '_blank' : undefined
        return (
          !value?.href?.startsWith('/') ?
            <a href={value.href} rel={rel} target={targ} className="text-appPurple-100 dark:text-appRed-100 text-decoration-underline" aria-label={`${children}`}>
              {children}
            </a> : <Link href={value.href} className="text-appPurple-100 dark:text-appRed-100 text-decoration-underline">{children}</Link>
        )
      },
      strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
      emphasis: ({ children }) => <em className="font-italic">{children}</em>,
      code: ({ children }) => <span className="font-mono leading-normal bg-opacity-15 bg-gray-300 dark:text-appPurple-100 text-appRed-100 rounded-md text-sm px-1 py-2 font-bold"
      
      >
        {children}
      </span>,
    },
    types: {
      code: ({ value }) => (

        <CopyableCodeBlock>
          {value}
        </CopyableCodeBlock>
      ),
      image: ({ value }) => (<ImagePortableCom value={value} />)

    },
  };

  export default articePortableText