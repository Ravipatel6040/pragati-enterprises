import { type SchemaTypeDefinition } from 'sanity'

import heroSection from './heroSection'
import category from './category'
import product from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [heroSection, category, product],
}
