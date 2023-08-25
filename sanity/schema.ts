import { type SchemaTypeDefinition } from 'sanity'
import {product} from "./product" 
import { category } from './category'
import { tagline } from './tagline'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, tagline]
}
