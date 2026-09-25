import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Small text above the heading (e.g. "Manufacturer & Supplier since establishment")',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'text',
      rows: 3,
      description: 'Main hero heading text',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Paragraph text below the heading',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Main hero section image (displayed on the right side)',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'CTA Button Text',
      type: 'string',
      description: 'Primary call-to-action button text (e.g. "Request a Quote")',
      initialValue: 'Request a Quote',
    }),
    defineField({
      name: 'ctaButtonLink',
      title: 'CTA Button Link',
      type: 'string',
      description: 'Link for the primary CTA button',
      initialValue: '/contact',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'WhatsApp number with country code (e.g. 910000000000)',
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'value',
              title: 'Value',
              type: 'string',
              description: 'Stat number/text (e.g. "10+", "6", "B2B")',
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'Stat description (e.g. "Product categories")',
            }),
          ],
          preview: {
            select: {
              title: 'value',
              subtitle: 'label',
            },
          },
        },
      ],
      description: 'Stats displayed at the bottom of the hero section',
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      media: 'heroImage',
    },
    prepare(selection) {
      return {
        title: 'Hero Section',
        subtitle: selection.title ? selection.title.substring(0, 60) + '...' : '',
        media: selection.media,
      }
    },
  },
})
