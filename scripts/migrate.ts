import { getCliClient } from 'sanity/cli'
import { categoryData } from '../lib/categoryData'

const client = getCliClient()

async function migrate() {
  console.log('Starting migration...')

  // 1. Create Categories
  const categoryIdMap = new Map<string, string>()

  for (const [index, cat] of categoryData.entries()) {
    console.log(`Creating category: ${cat.name}`)
    
    // We omit the 'icon' object (Lucide icon) and just use the name if possible, 
    // but the schema expects a string. In categoryData, icon is a component.
    // Let's extract the name from the component or just leave it empty for now,
    // or map it based on the slug.
    let iconName = ''
    if (cat.slug === 'agarbatti-perfume') iconName = 'Flame'
    else if (cat.slug === 'perfume-spray') iconName = 'SprayCan'
    else if (cat.slug === 'cosmetics') iconName = 'Sparkles'
    else if (cat.slug === 'agarbatti') iconName = 'Flame'
    else if (cat.slug === 'perfume-compound') iconName = 'FlaskConical'
    else if (cat.slug === 'air-freshener') iconName = 'Wind'
    else if (cat.slug === 'diffuser-oil-and-electric-diffuser') iconName = 'Leaf'
    else if (cat.slug === 'automobile-polish') iconName = 'CarFront'
    else if (cat.slug === 'sanitizer') iconName = 'Droplet'
    else if (cat.slug === 'spa-massage-oil') iconName = 'Waves'
    else if (cat.slug === 'floor-cleaner') iconName = 'SprayCan'
    else if (cat.slug === 'hotel-hospital-institution') iconName = 'Building2'
    else if (cat.slug === 'shower-gel') iconName = 'Droplet'
    else if (cat.slug === 'car-shampoo') iconName = 'CarFront'
    else if (cat.slug === 'car-wash-liquid') iconName = 'Droplet'
    else if (cat.slug === 'electric-diffuser') iconName = 'Zap'
    else if (cat.slug === 'liquid-handwash') iconName = 'Droplet'
    else if (cat.slug === 'toilet-cleaner') iconName = 'Sparkles'
    else if (cat.slug === 'aroma-diffuser-set') iconName = 'Flower2'
    else if (cat.slug === 'dishwash-cleaner') iconName = 'Utensils'
    else if (cat.slug === 'room-freshener') iconName = 'Wind'
    else if (cat.slug === 'glass-cleaner') iconName = 'Sparkles'
    else if (cat.slug === 'branded-perfume') iconName = 'FlaskConical'
    else if (cat.slug === 'massage-cream') iconName = 'Waves'

    const doc = {
      _type: 'category',
      name: cat.name,
      slug: { _type: 'slug', current: cat.slug },
      icon: iconName,
      tone: cat.tone,
      badge: cat.badge,
      tagline: cat.tagline,
      description: cat.desc,
      highlights: cat.highlights,
      useCases: cat.useCases,
      supplyOptions: cat.supplyOptions,
      faqs: cat.faqs ? cat.faqs.map(f => ({ question: f.q, answer: f.a })) : [],
      order: index
    }

    try {
      const createdCat = await client.create(doc)
      categoryIdMap.set(cat.slug, createdCat._id)
      console.log(`✅ Created category: ${cat.name} (${createdCat._id})`)
      
      // 2. Create Products for this category
      if (cat.products && cat.products.length > 0) {
        for (const [prodIndex, prod] of cat.products.entries()) {
          const prodSlug = prod.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
          const prodDoc = {
            _type: 'product',
            name: prod.name,
            slug: { _type: 'slug', current: `${cat.slug}-${prodSlug}-${prodIndex}` },
            category: {
              _type: 'reference',
              _ref: createdCat._id
            },
            order: prodIndex
          }
          const createdProd = await client.create(prodDoc)
          console.log(`  📦 Created product: ${prod.name}`)
        }
      }
    } catch (err) {
      console.error(`❌ Failed to create category ${cat.name}:`, err.message)
    }
  }

  // 3. Create Hero Section
  console.log('Creating Hero Section...')
  const heroDoc = {
    _type: 'heroSection',
    _id: 'heroSection', // Use fixed ID for singleton
    subtitle: 'Manufacturer & Supplier since establishment',
    heading: 'Fragrance, care and cleaning products, made for every space you look after.',
    description: 'Pragati Enterprises manufactures and supplies perfumes, room fresheners, cosmetics, agarbatti, diffuser oils, car & auto care, spa care, household cleaning and institutional care products — trusted by hotels, hospitals, offices and homes alike.',
    ctaButtonText: 'Request a Quote',
    ctaButtonLink: '/contact',
    whatsappNumber: '910000000000',
    stats: [
      { value: '10+', label: 'Product categories' },
      { value: '6', label: 'Industries served' },
      { value: 'B2B', label: 'Bulk & custom supply' }
    ]
  }

  try {
    await client.createOrReplace(heroDoc)
    console.log('✅ Created/Updated Hero Section')
  } catch (err) {
    console.error('❌ Failed to create Hero Section:', err.message)
  }

  console.log('Migration complete!')
}

migrate().catch(console.error)
