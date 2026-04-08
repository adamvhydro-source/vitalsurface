export interface Service {
  slug: string
  title: string
  descriptor: string
  metaTitle: string
  metaDescription: string
  intro: string
  whatWeCover: string[]
}

export const services: Service[] = [
  {
    slug: 'spray-painting-on-site',
    title: 'On-Site Spray Painting',
    descriptor: 'When the work can\u2019t come to us, we come to the work.',
    metaTitle: 'On-Site Spray Painting | Commercial | Staffordshire & Midlands | Vital Surface',
    metaDescription:
      'Professional on-site spray painting for commercial spaces across the Midlands. Minimal disruption, high-quality finish, trade and direct clients welcome.',
    intro:
      'When the work can\'t come to us, we come to the work. Our on-site spray painting service brings professional finishing directly to your commercial space — whether that\'s a shop floor, a bar interior, or a retail fit-out mid-build. We work around your schedule, protect the surrounding environment, and leave nothing but a clean, professional finish behind.',
    whatWeCover: [
      'Interior walls, ceilings, and structural elements',
      'Joinery, shopfitting, and bespoke furniture',
      'Metal fixtures, shelving, and racking',
      'Bar fronts, counters, and hospitality surfaces',
      'Retail display units and feature walls',
      'Pre-painted surfaces requiring refresh or recolour',
    ],
  },
  {
    slug: 'spray-painting-in-unit',
    title: 'In-Unit Spray Painting',
    descriptor: 'Professional spray finishing in our Staffordshire studio.',
    metaTitle: 'In-Unit Spray Painting Studio | Staffordshire | Vital Surface',
    metaDescription:
      'Bring your components and fixtures to our Staffordshire studio for professional spray finishing. Fast turnaround, trade rates, commercial quality.',
    intro:
      'Our Staffordshire studio is set up for professional spray finishing of components, fixtures, and fabricated pieces. If you\'re a joiner, fabricator, or fit-out contractor, our spray booth gives you access to a controlled environment, consistent results, and fast turnaround without adding spray to your own premises.',
    whatWeCover: [
      'Joinery components and bespoke furniture pieces',
      'Metal fabrications and structural elements',
      'Shopfitting and display units',
      'Cabinetry and bespoke millwork',
      'Architectural metalwork and ironmongery',
      'Batch runs for consistent commercial finishes',
    ],
  },
  {
    slug: 'vinyl-wrapping',
    title: 'Vinyl Wrapping',
    descriptor: 'Cost-effective surface transformation, no respray required.',
    metaTitle: 'Commercial Vinyl Wrapping | Midlands | Vital Surface',
    metaDescription:
      'Professional vinyl wrapping for commercial surfaces, fixtures and vehicles across the Midlands.',
    intro:
      'Vinyl wrapping is one of the most cost-effective ways to transform a surface — without the disruption, prep time, or permanence of a full respray. We apply premium vinyl films to commercial surfaces, fixtures, furniture, and vehicles, delivering clean edges, consistent finish, and results that last.',
    whatWeCover: [
      'Commercial surfaces and feature walls',
      'Shop fronts, fascias, and entrance surrounds',
      'Bar fronts, counters, and booth seating',
      'Furniture and bespoke fixtures',
      'Vehicles, vans, and fleet wrapping',
      'Architectural elements and cladding panels',
    ],
  },
  {
    slug: 'window-tinting',
    title: 'Window Tinting',
    descriptor: 'Solar control, privacy, and decorative film for commercial spaces.',
    metaTitle: 'Commercial Window Tinting | Staffordshire & Midlands | Vital Surface',
    metaDescription:
      'Professional window tinting and film installation for commercial properties across the Midlands.',
    intro:
      'Window film does more than block light. The right film can reduce glare, manage solar heat gain, increase privacy, enhance security, and finish a commercial space with a considered, professional look. We supply and install a wide range of commercial window films across the Midlands — from subtle solar control to frosted manifestation and decorative finishes.',
    whatWeCover: [
      'Solar control and heat reduction films',
      'Privacy and frosted window films',
      'Manifestation and branding films',
      'Safety and security laminate films',
      'Decorative and gradient films',
      'Anti-graffiti surface protection films',
    ],
  },
  {
    slug: 'pos-installation',
    title: 'POS Installation',
    descriptor: 'Retail environments installed exactly as designed.',
    metaTitle: 'POS Installation Service | Retail | UK | Vital Surface',
    metaDescription:
      'Professional point of sale installation for retail environments across the UK.',
    intro:
      'Point of sale lives and dies by the installation. A great POS design, badly installed, costs brands money — in damaged units, delayed launches, and stores that never look like the render. We install POS across the UK, working with agencies, brands, and fit-out contractors to deliver retail environments that look exactly as intended.',
    whatWeCover: [
      'Free-standing display units (FSDUs)',
      'Gondola ends and promotional bays',
      'Branded fixture and furniture installation',
      'In-store graphics and display fitting',
      'Temporary and permanent retail campaigns',
      'Multi-site rollouts and national programmes',
    ],
  },
  {
    slug: 'signage',
    title: 'Signage',
    descriptor: 'Fascia, wayfinding, and illuminated signage, managed end to end.',
    metaTitle: 'Commercial Signage Installation | Midlands | Vital Surface',
    metaDescription: 'Commercial signage supply and installation across the Midlands.',
    intro:
      'We work with a network of trusted signage fabricators to supply and install commercial signage across the Midlands and beyond. Whether you need a new fascia, wayfinding system, interior branding, or illuminated lettering, we manage the process from survey to sign-off — so you don\'t have to co-ordinate between multiple contractors.',
    whatWeCover: [
      'External fascia and shopfront signage',
      'Illuminated channel letters and light boxes',
      'Interior wayfinding and directional signage',
      'Reception and lobby branding',
      'Hoarding and construction site signage',
      'Vehicle and fleet graphics',
    ],
  },
  {
    slug: '3d-printing',
    title: '3D Printing',
    descriptor: 'Bespoke printed components, professionally spray finished.',
    metaTitle: 'Commercial 3D Printing & Finishing | Staffordshire | Vital Surface',
    metaDescription:
      'Bespoke 3D printing and professional finishing for commercial applications.',
    intro:
      'We run a professional 3D print facility in Staffordshire, producing bespoke components, props, fixtures, and prototypes for commercial clients. What sets us apart from a standard print bureau is finishing — every piece we produce can be professionally spray finished to the same standard as our other surface work, giving you 3D-printed parts that look like manufactured product.',
    whatWeCover: [
      'Bespoke retail display components and props',
      'Architectural models and scale prototypes',
      'Custom fixtures and fittings for interiors',
      'Point of sale stands and display elements',
      'Branded components with professional spray finish',
      'Short-run production parts and replacement components',
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
