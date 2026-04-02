export interface Sector {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  intro: string
  whatWeDo: string[]
}

export const sectors: Sector[] = [
  {
    slug: 'shop-front-refurbishment',
    title: 'Shop Front Refurbishment',
    metaTitle: 'Shop Front Refurbishment | Commercial Surface Finishing | Vital Surface',
    metaDescription:
      'Professional shop front refurbishment across the Midlands. Spray painting, vinyl wrapping, signage, and window film — one contractor, clean results.',
    intro:
      'A shop front is the first impression a brand makes on the street. If it\'s tired, inconsistent, or simply the wrong colour, it undermines everything behind it. We refurbish commercial shop fronts across the Midlands — respraying frames, applying vinyl, refreshing signage, and installing window film — all managed as a single package so you\'re not co-ordinating multiple trades.',
    whatWeDo: [
      'Spray painting of shopfront frames, fascias, and door surrounds',
      'Vinyl wrapping of cladding, panels, and architectural elements',
      'Signage removal, installation, and replacement',
      'Window film application — solar, privacy, and manifestation',
      'Surface preparation and minor repairs prior to finishing',
      'Overnight and out-of-hours working to minimise trading disruption',
    ],
  },
  {
    slug: 'washroom-refurbishment',
    title: 'Washroom Refurbishment',
    metaTitle: 'Commercial Washroom Refurbishment | Surface Finishing | Vital Surface',
    metaDescription:
      'Surface finishing specialists for commercial washroom refurbishments across the Midlands. Trade and direct clients welcome.',
    intro:
      'Commercial washrooms take constant punishment — heat, humidity, cleaning chemicals, and heavy daily use. When they need refreshing, the finishing work needs to be done properly: right products, right prep, right application. We work with refurbishment contractors and facilities teams to deliver surface finishing in washroom environments that looks sharp and holds up.',
    whatWeDo: [
      'Spray painting of cubicle panels, doors, and frames',
      'Vinyl wrapping of cubicle and vanity surfaces',
      'Ceiling and wall finishing in moisture-resistant coatings',
      'Metal fixture painting — frames, brackets, and cisterns',
      'Surface preparation including filling, sanding, and priming',
      'Trade and direct client work across the Midlands',
    ],
  },
  {
    slug: 'pub-and-hospitality',
    title: 'Pub & Hospitality',
    metaTitle: 'Pub & Hospitality Surface Finishing | Midlands | Vital Surface',
    metaDescription:
      'Surface finishing for pubs, bars, and hospitality venues across the Midlands. On-site spray painting, vinyl wrapping, and signage installation.',
    intro:
      'Hospitality spaces work hard. Bars, booths, counters, and ceilings take daily abuse — and they need to be refreshed, recoloured, or fully transformed without shutting the venue down for weeks. We work with pub groups, independent operators, and fit-out contractors to deliver surface finishing that keeps up with the pace of the hospitality industry.',
    whatWeDo: [
      'Bar front and counter spray painting and vinyl wrapping',
      'Booth seating and banquette frame finishing',
      'Ceiling, beam, and structural element painting',
      'Feature wall finishing and decorative treatments',
      'Exterior facade and signage refurbishment',
      'Out-of-hours working to protect trading hours',
    ],
  },
  {
    slug: 'retail-fit-out',
    title: 'Retail Fit-Out',
    metaTitle: 'Retail Fit-Out Surface Finishing | Midlands & UK | Vital Surface',
    metaDescription:
      'Surface finishing for retail fit-outs across the Midlands and UK. Spray painting, vinyl wrapping, POS installation, and signage.',
    intro:
      'Retail fit-outs are schedule-driven. Every day of overrun costs money, and the finishing trades are usually last in — which means any delays earlier in the programme get absorbed by surface finishing. We work on retail fit-outs that are planned properly, and we execute against tight programmes without compromising on finish quality.',
    whatWeDo: [
      'Spray painting of shopfitting, joinery, and display fixtures',
      'Vinyl wrapping of gondolas, feature walls, and counters',
      'POS and display unit installation',
      'Signage and graphics installation',
      'Window film application for privacy, solar, and branding',
      'Snagging and remediation on existing retail environments',
    ],
  },
  {
    slug: 'office-refurbishment',
    title: 'Office Refurbishment',
    metaTitle: 'Office Refurbishment Surface Finishing | Midlands | Vital Surface',
    metaDescription:
      'Surface finishing for office refurbishments across the Midlands. Spray painting, vinyl wrapping, signage, and window film.',
    intro:
      'Office refurbishments move quickly and need to look considered. Whether it\'s a full floor refit or a phased refresh around live occupancy, we deliver surface finishing work that integrates cleanly into the wider project — co-ordinating with the main contractor, working to programme, and leaving spaces that look intentional.',
    whatWeDo: [
      'Reception and lobby surface finishing and branding installation',
      'Spray painting of joinery, partition frames, and bespoke furniture',
      'Vinyl wrapping of feature walls and architectural elements',
      'Window film — solar control, privacy, and manifestation',
      'Signage and wayfinding installation',
      'Breakout area and collaborative space finishing',
    ],
  },
]

export function getSectorBySlug(slug: string): Sector | undefined {
  return sectors.find((s) => s.slug === slug)
}
