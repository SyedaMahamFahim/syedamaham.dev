import dynamic from 'next/dynamic'

export const Navbar = dynamic(() => import('./Navbar/Navbar'))
export const Footer = dynamic(() => import('./Footer/Footer'))
export const MyInfoCard =dynamic(()=>import('./MyInfoCard/MyInfoCard'))
export const ContentsTypeCard=dynamic(()=>import('./ContentsTypeCard/ContentsTypeCard'))
export const ArticleCard =dynamic(()=>import('./Article/ArticleCards/ArticleCard'));
export const SnippetCard = dynamic(() => import('./SnippetCard/SnippetCard'))
export const OpenSourceCard =dynamic(()=>import('./OpenSourceCard/OpenSourceCard'));
export const CategoryCard =dynamic(()=>import('./CategoryCard/CategoryCard'));
export const Seperator = dynamic(() => import('./Seperator/Seperator'))
export const ArticleHeader =dynamic(()=>import('./Article/ArticleHeader/ArticleHeader'));
export const ContentsTypeTab =dynamic(()=>import('./ContentsTypeTab/ContentsTypeTab'));

export const Text = dynamic(() => import('./Text/Text'))
export const ReadingProgressLine =dynamic(()=>import('./ReadingProgressLine/ReadingProgressLine'));
export const Loader =dynamic(()=>import('./Loader/Loader'))
export const ArticleContent=dynamic(()=>import('./Article/ArticleContent/ArticleContent'))
export const ArticelFooter =dynamic(()=>import('./Article/ArticelFooter/ArticelFooter'))
export const ArticleAuthorCard=dynamic(()=>import('./Article/ArticleAuthorCard/ArticleAuthorCard'));

export const Breadcrumbs=dynamic(()=>import('./Breadcrumbs/Breadcrumbs'))
export const ProfileLink=dynamic(()=>import('./ProfileLink/ProfileLink'))

export const GitHubComment = dynamic(()=>import('./GitHubComment/GitHubComment'))