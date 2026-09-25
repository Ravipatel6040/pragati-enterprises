import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Pragati Enterprises')
    .items([
      // Hero Section — singleton
      S.listItem()
        .title('Hero Section')
        .id('heroSection')
        .child(
          S.document()
            .schemaType('heroSection')
            .documentId('heroSection')
            .title('Hero Section')
        ),

      S.divider(),

      // Categories
      S.documentTypeListItem('category').title('Categories'),

      // Products
      S.documentTypeListItem('product').title('Products'),
    ])
