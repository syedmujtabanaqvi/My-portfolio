import posterAgainstAllOdds from '../assets/images/graphic-design/poster-against-all-odds.jpg'
import posterAgainstAllOddsConcept from '../assets/images/graphic-design/poster-against-all-odds-concept.jpg'
import posterMidnightSurgeon from '../assets/images/graphic-design/poster-midnight-surgeon.jpg'
import posterAtrospace from '../assets/images/graphic-design/poster-atrospace.jpg'
import posterBigBuckBunny from '../assets/images/graphic-design/poster-big-buck-bunny.jpg'
import adFreshkaSquare from '../assets/images/graphic-design/ad-freshka-mango-square.jpg'
import adFreshkaCampaign from '../assets/images/graphic-design/ad-freshka-campaign.jpg'

export const graphicDesignCaseStudy = {
  slug: 'graphic-design',
  title: 'Graphic Design',
  subtitle:
    'Movie posters, streaming key art, and social campaigns — composition, typography, and color built to stop the scroll.',
  category: 'Graphic Design',
  hue: 355,
  thumbnail: posterAgainstAllOdds,
  heroImage: posterAgainstAllOdds,

  overview: [
    {
      title: 'Project Goal',
      body: 'Build a range of key art and campaign pieces — film posters, streaming "coming soon" art, and product social ads — that each read clearly in under a second.',
    },
    {
      title: 'Design Philosophy',
      body: 'One dominant focal point per piece. Every poster is built around a single strong image or gesture, with type and color doing the rest of the work.',
    },
    {
      title: 'Creative Direction',
      body: 'High-contrast, mood-driven compositions for film work; bright, energetic color and playful hand-drawn accents for product and social campaigns.',
    },
    {
      title: 'Target Style',
      body: 'Bold display typography paired with tightly cropped photography — cinematic for posters, punchy and colorful for social-first ad formats.',
    },
    {
      title: 'Challenges',
      body: 'Keeping each piece legible at thumbnail size while still holding up as a full-resolution poster — balancing type scale, contrast, and negative space.',
    },
    {
      title: 'Final Outcome',
      body: 'A cohesive set of finished key art and campaign pieces spanning film posters, streaming art, and a full product ad campaign.',
    },
  ],

  gallery: [
    { src: posterAgainstAllOdds, alt: 'Against All Odds boxing film poster', caption: 'Against All Odds — Film Poster' },
    { src: posterMidnightSurgeon, alt: 'The Midnight Surgeon streaming poster', caption: 'The Midnight Surgeon — Streaming Key Art' },
    { src: posterAtrospace, alt: 'Atrospace astronaut typography poster', caption: 'Atrospace — Typography Poster' },
    { src: posterBigBuckBunny, alt: 'Big Buck Bunny poster redesign', caption: 'Big Buck Bunny — Poster Study' },
    { src: adFreshkaSquare, alt: 'Freshka Mango Tango social ad', caption: 'Freshka Mango Tango — Social Ad' },
    { src: adFreshkaCampaign, alt: 'Freshka campaign carousel ad', caption: 'Freshka — Campaign Ad' },
  ],

  process: [
    { title: 'Concept', desc: 'Reading the brief for tone — is this moody and cinematic, or bright and energetic?' },
    { title: 'Reference Collection', desc: 'Pulling reference from film posters, streaming key art, and product campaigns in the same tone.' },
    { title: 'Layout Sketching', desc: 'Roughing in composition — where the focal image sits, and how much room type needs to breathe.' },
    { title: 'Image Selection & Cutout', desc: 'Sourcing or shooting the hero image and cleanly separating it from its background.' },
    { title: 'Typography', desc: 'Choosing display type that matches the mood, then hand-tuning kerning and hierarchy.' },
    { title: 'Color Grading', desc: 'Grading the hero image and background to unify everything into one consistent mood.' },
    { title: 'Compositing', desc: 'Layering type, image, and background elements with the right depth and shadow.' },
    { title: 'Detail Pass', desc: 'Adding supporting graphics — credit blocks, logos, badges, and texture.' },
    { title: 'Final Export', desc: 'Exporting at full resolution plus optimized versions for social and web.' },
  ],

  techDetails: [
    { label: 'Software Used', value: 'Adobe Photoshop, Illustrator' },
    { label: 'Design Workflow', value: 'Layout sketch → compositing → color grade → type pass' },
    { label: 'Typography', value: 'Bold display faces paired with condensed supporting type' },
    { label: 'Color Workflow', value: 'Custom grading per piece to unify photo and background' },
    { label: 'Formats Delivered', value: 'Poster (portrait), square social, and campaign carousel' },
    { label: 'Optimization', value: 'Compressed exports for fast-loading web and social delivery' },
    { label: 'Export Formats', value: 'PNG (source), JPEG (web-optimized)' },
  ],

  featuredAssets: [
    {
      image: posterAgainstAllOdds,
      name: 'Against All Odds',
      category: 'Film Poster',
      desc: 'A high-contrast boxing film poster built around a single dramatic gesture — gloves raised, eyes locked on camera.',
      software: 'Photoshop',
      renderInfo: 'Portrait poster, red/black grade',
    },
    {
      image: posterMidnightSurgeon,
      name: 'The Midnight Surgeon',
      category: 'Streaming Key Art',
      desc: 'A "coming soon" streaming poster using cool teal tones and bold condensed type to build tension.',
      software: 'Photoshop',
      renderInfo: 'Portrait poster, teal grade',
    },
    {
      image: posterAtrospace,
      name: 'Atrospace',
      category: 'Typography Poster',
      desc: 'A type-driven space poster where the negative space of a single letterform frames the astronaut.',
      software: 'Photoshop · Illustrator',
      renderInfo: 'Square poster, nebula composite',
    },
    {
      image: adFreshkaCampaign,
      name: 'Freshka Campaign',
      category: 'Social Ad',
      desc: 'A multi-flavor product campaign ad using color-blocked sections to introduce a full drink lineup at once.',
      software: 'Photoshop · Illustrator',
      renderInfo: 'Square campaign carousel',
    },
  ],

  compare: {
    before: { src: posterAgainstAllOddsConcept, label: 'Grayscale Concept' },
    after: { src: posterAgainstAllOdds, label: 'Final Color Grade' },
  },

  skills: [
    'Composition',
    'Typography',
    'Photo Compositing',
    'Color Grading',
    'Key Art Design',
    'Brand Campaigns',
    'Social Ad Design',
    'Retouching',
    'Layout Design',
  ],

  showcase: [
    posterAgainstAllOdds,
    posterMidnightSurgeon,
    posterAtrospace,
    posterBigBuckBunny,
    adFreshkaSquare,
    adFreshkaCampaign,
  ],
}
