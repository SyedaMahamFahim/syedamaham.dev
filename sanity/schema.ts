import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import snippet from './schemas/snippet'
import legal from './schemas/legal'
import author from './schemas/author'
import tags from './schemas/tags'
import series from './schemas/series'
import profiles from './schemas/profiles'
import openSource from './schemas/openSource'
import about from './schemas/about'
import externalArticles from './schemas/externalArticles'
import contact from './schemas/contact'
import platform from './schemas/platform'
import publications from './schemas/publications'
import ebook from './schemas/ebook'
import timeline from './schemas/timeline'
import yearlyNotes from './schemas/yearlyNotes'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, legal,category, platform,publications,ebook,timeline,contact,yearlyNotes,profiles,blockContent,tags,series,openSource,snippet ,about,externalArticles],
}
