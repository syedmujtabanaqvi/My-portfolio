import threeDThumbnail from '../assets/images/threed-modeling/hero-showcase.jpg'
import exitGameThumbnail from '../assets/images/exit-game/hero-showcase.jpg'
import graphicDesignThumbnail from '../assets/images/graphic-design/poster-against-all-odds.jpg'

export const roles = ['Creative Developer', 'UI/UX Designer', 'AI Enthusiast', 'Game Developer']

export const aboutStats = [
  { value: '30+', label: 'Projects Completed' },
  { value: '18', label: 'Happy Clients' },
  { value: '5+', label: 'Years of Learning' },
  { value: '20+', label: 'Technologies Used' },
]

export const aboutSections = [
  {
    title: 'Who I Am',
    body: "I'm SYED MUJTABA ALI — a creative developer and designer working at the intersection of interface, motion, and intelligent systems. My path started with taking things apart to understand them, and turned into building things worth putting back together.",
  },
  {
    title: 'My Story',
    body: 'What began as curiosity about how websites worked turned into a discipline — first sketching interfaces, then learning to build them, then learning to make them feel alive with motion and depth.',
  },
  {
    title: 'My Journey',
    body: "From first freelance gigs to shipping full products, every project has sharpened the same instinct: care about the details most people scroll past — the easing curve, the extra 4px of padding, the microcopy that makes an empty state feel like an invitation.",
  },
  {
    title: 'Vision',
    body: 'I want to build interfaces and tools that feel like they were crafted by hand, even when powered by AI underneath — technology that disappears so the experience can lead.',
  },
  {
    title: 'Career Goals',
    body: 'Keep building a body of work that earns its place on the internet, ship independent products, and help founders and teams turn ambitious ideas into polished, working software.',
  },
  {
    title: 'Passion',
    body: "I'm endlessly drawn to the edges of what's possible in the browser — WebGL scenes, AI-assisted workflows, and interactions that make people stop scrolling for a second.",
  },
  {
    title: 'My Working Style',
    body: 'Fast, iterative, and detail-obsessed. I prototype early, test on real interactions rather than static mockups, and refine relentlessly until the motion feels inevitable.',
  },
]

export const skills = [
  {
    title: 'UI/UX Design',
    short: 'Interfaces designed around real user flows, not just mockups.',
    level: 92,
    tools: ['Figma', 'Framer', 'Principle'],
    projects: ['Studio Loop', 'Aperture Portfolio Kit'],
    desc: 'I design interfaces by mapping the user journey first, then layering visual language on top — so every screen earns its place in the flow.',
  },
  {
    title: 'Frontend Engineering',
    short: 'React, animation systems, and performance-minded interfaces.',
    level: 95,
    tools: ['React', 'TypeScript', 'Tailwind'],
    projects: ['Nimbus Analytics', 'Studio Loop'],
    desc: 'Building resilient, componentized interfaces with an obsessive focus on animation performance and rendering cost.',
  },
  {
    title: 'Backend',
    short: 'APIs and services that keep interactive products fast and reliable.',
    level: 78,
    tools: ['Node.js', 'Postgres', 'Express'],
    projects: ['Nimbus Analytics', 'Promptline'],
    desc: 'Designing lightweight backends and data models that stay out of the way of a fast, responsive frontend.',
  },
  {
    title: 'Next.js',
    short: 'Full-stack React framework for production-grade sites and apps.',
    level: 88,
    tools: ['Next.js', 'Vercel', 'Prisma'],
    projects: ['Promptline', 'Aperture Portfolio Kit'],
    desc: 'Shipping SSR/SSG-driven products with routing, data-fetching, and edge deployment handled the right way.',
  },
  {
    title: 'Three.js',
    short: 'WebGL scenes and product visuals built for the browser.',
    level: 74,
    tools: ['Three.js', 'React Three Fiber', 'Blender'],
    projects: ['Hero Crystal Scene'],
    desc: 'Crafting lightweight 3D scenes — floating objects, distortion materials, and camera-reactive motion.',
  },
  {
    title: 'Game Development',
    short: 'Interactive mechanics, prototyping, and playable experiences.',
    level: 70,
    tools: ['Unity', 'C#', 'Figma'],
    projects: ['Fable — Story Engine'],
    desc: 'Designing playable systems and branching narratives, from first prototype to a shipped, solo-built title.',
  },
  {
    title: 'AI Automation',
    short: 'Workflows and tools that put AI to work on repetitive craft.',
    level: 85,
    tools: ['Claude API', 'LangChain', 'Zapier'],
    projects: ['Promptline'],
    desc: 'Building AI-assisted tools and workflows that speed up creative and technical work without losing craft.',
  },
  {
    title: 'Branding',
    short: 'Naming, voice, and visual language that holds together.',
    level: 80,
    tools: ['Illustrator', 'After Effects'],
    projects: ['Northline Identity'],
    desc: 'Developing brand systems — mark, type, voice, and motion guidelines — that stay coherent across every touchpoint.',
  },
  {
    title: 'Graphic Design',
    short: 'Visual systems, layout, and typography with intent.',
    level: 83,
    tools: ['Illustrator', 'Photoshop', 'Figma'],
    projects: ['Northline Identity', 'Studio Loop'],
    desc: 'Layout and typography decisions grounded in hierarchy, rhythm, and restraint.',
  },
  {
    title: 'Motion Design',
    short: 'Micro-interactions and sequences that carry meaning.',
    level: 90,
    tools: ['GSAP', 'Framer Motion', 'After Effects'],
    projects: ['This Portfolio'],
    desc: 'Choreographing motion so it communicates state and hierarchy — not just decoration.',
  },
  {
    title: 'Problem Solving',
    short: 'Breaking ambiguous briefs into shippable, testable steps.',
    level: 94,
    tools: ['Notion', 'Linear', 'Whiteboards'],
    projects: ['Every project, really'],
    desc: 'Turning vague, ambitious briefs into scoped, sequenced plans that actually ship.',
  },
]

export const categories = ['All', '3D Modeling', 'Game Dev', 'Graphic Design', 'Web', 'UI Design', 'Branding', 'AI Projects']

export const projects = [
  {
    title: '3D Modeling Design',
    desc: 'A showcase collection of low-poly 3D environments, interiors, and characters built from concept to final render.',
    stack: ['Blender', 'Eevee', 'Cycles'],
    category: '3D Modeling',
    hue: 268,
    slug: '3d-modeling-design',
    caseStudy: true,
    thumbnail: threeDThumbnail,
  },
  {
    title: 'Exit',
    desc: 'A low-poly isometric escape-room puzzle game — every room hides the one clue that unlocks the way out.',
    stack: ['Unity', 'C#', 'Blender'],
    category: 'Game Dev',
    hue: 280,
    slug: 'exit-game',
    caseStudy: true,
    thumbnail: exitGameThumbnail,
  },
  {
    title: 'Graphic Design',
    desc: 'Movie posters, streaming key art, and social campaigns — typography and composition built to stop the scroll.',
    stack: ['Photoshop', 'Illustrator'],
    category: 'Graphic Design',
    hue: 355,
    slug: 'graphic-design',
    caseStudy: true,
    thumbnail: graphicDesignThumbnail,
  },
  {
    title: 'Nimbus Analytics',
    desc: 'A real-time dashboard for a data-ops startup, built for clarity under pressure.',
    stack: ['React', 'D3.js', 'Node'],
    category: 'Web',
    hue: 262,
  },
  {
    title: 'Fable — Story Engine',
    desc: 'Branching-narrative mobile game with a hand-tuned dialogue system.',
    stack: ['Unity', 'C#', 'Figma'],
    category: 'Game Dev',
    hue: 280,
  },
  {
    title: 'Northline Identity',
    desc: 'Full brand system for a logistics company — mark, type, and motion guidelines.',
    stack: ['Illustrator', 'After Effects'],
    category: 'Branding',
    hue: 240,
  },
  {
    title: 'Studio Loop',
    desc: 'A component-driven design system used across four internal products.',
    stack: ['Figma', 'React', 'Storybook'],
    category: 'UI Design',
    hue: 268,
  },
  {
    title: 'Promptline',
    desc: 'An AI writing copilot that drafts, critiques, and rewrites in your own voice.',
    stack: ['Next.js', 'Claude API', 'Postgres'],
    category: 'AI Projects',
    hue: 255,
  },
  {
    title: 'Aperture Portfolio Kit',
    desc: 'An open-source starter kit for photographers to launch a portfolio in a day.',
    stack: ['Astro', 'Tailwind'],
    category: 'Web',
    hue: 275,
  },
]

export const timeline = [
  {
    year: '2025 — Now',
    title: 'Independent Creative Developer',
    org: 'Freelance',
    desc: 'Partnering directly with founders on product design, frontend builds, and AI-powered tooling.',
  },
  {
    year: '2023 — 2025',
    title: 'Senior Frontend & UI Engineer',
    org: 'Product Studio',
    desc: 'Led interface development for three client products, from prototype to production launch.',
  },
  {
    year: '2022',
    title: 'Shipped first solo game project',
    org: 'Milestone',
    desc: 'Designed, built, and released a narrative-driven mobile game as a solo developer.',
  },
  {
    year: '2021 — 2023',
    title: 'UI/UX & Brand Designer',
    org: 'Design Collective',
    desc: 'Delivered brand identity and interface design for early-stage startups across industries.',
  },
  {
    year: '2020',
    title: 'Started freelancing',
    org: 'Milestone',
    desc: 'Took on first paid design and development projects while building foundational skills.',
  },
]

export const socials = [
  { label: 'GitHub', href: 'https://github.com/aurangzaib' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/aurangzaib' },
  { label: 'Instagram', href: 'https://instagram.com/aurangzaib' },
  { label: 'Email', href: 'mailto:hello@aurangzaib.dev' },
]
