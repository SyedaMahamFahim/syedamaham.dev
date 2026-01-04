import dynamic from 'next/dynamic'

export const HeroSection = dynamic(() => import('./HeroSection/HeroSection'));
export const HomeArticles = dynamic(() => import('./HomeArticles/HomeArticles'))
export const ReflectionsSection = dynamic(() => import('./ReflectionsSection/ReflectionsSection'))
export const Snippets = dynamic(() => import('./Snippets/Snippets'))
export const ArticleDetails = dynamic(() => import('./ArticleDetails/ArticleDetails'), { ssr: false })
export const SeriesSection = dynamic(() => import('./SeriesSection/SeriesSection'))
export const PublicationSection = dynamic(() => import('./PublicationSection/PublicationSection'))
export const EbookSection = dynamic(() => import('./EbookSection/EbookSection'))
export const TimelineSection = dynamic(() => import('./TimelineSection/TimelineSection'))
export const OpenSourceSection
= dynamic(() => import('./OpenSourceSection/OpenSourceSection'))

export const YearlyNotesSection = dynamic(() => import('./YearlyNotesSec/YearlyNotesSec'))

export const AppWrapper = dynamic(() => import('./AppWrapper/AppWrapper'))