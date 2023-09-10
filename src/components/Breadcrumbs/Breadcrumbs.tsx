import Link from "next/link";

interface BreadcrumbsProps {
  pageName: string;
  pageSlug: string;
  pageLink:string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ pageName, pageSlug,pageLink }) => {
  return (
    <>
      <nav className="flex items-center text-sm">
        <ol className="list-none p-0 m-0 flex space-x-2 font-bold">
          <li>
            <Link
              href="/"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-700"
            >
              Home /
            </Link>
          </li>
          <li>
            <Link
              href={pageLink}
              className="text-gray-500 dark:text-gray-200 hover:text-gray-700"
            >
              {pageName} /
            </Link>
          </li>

          <li className="text-gray-900 dark:text-gray-400 capitalize">
            {pageSlug}
          </li>
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
