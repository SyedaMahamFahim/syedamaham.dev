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
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, legal,category, contact,profiles,blockContent,tags,series,openSource,snippet ,about,externalArticles],
}
