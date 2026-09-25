import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Category Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image representing this category',
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Lucide icon name (e.g. "Flame", "Wind", "Droplet", "Sparkles", "CarFront", "Waves", "SprayCan", "Shield", "Leaf", "Zap", "Flower2", "Utensils", "FlaskConical", "Building2")',
    }),
    defineField({
      name: 'tone',
      title: 'Color Tone',
      type: 'string',
      options: {
        list: [
          { title: 'Plum', value: 'plum' },
          { title: 'Brass', value: 'brass' },
          { title: 'Sage', value: 'sage' },
          { title: 'Ink', value: 'ink' },
        ],
        layout: 'radio',
      },
      initialValue: 'plum',
    }),
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'Optional badge label (e.g. "Popular", "New")',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short one-line tagline for the category',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Detailed description of the category',
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key highlights / selling points',
    }),
    defineField({
      name: 'useCases',
      title: 'Use Cases',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'body',
              title: 'Body',
              type: 'text',
              rows: 2,
            }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'body' },
          },
        },
      ],
    }),
    defineField({
      name: 'supplyOptions',
      title: 'Supply Options',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 3,
            }),
          ],
          preview: {
            select: { title: 'question' },
          },
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order of categories on the website (lower = first)',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'tagline',
      media: 'image',
    },
  },
})
