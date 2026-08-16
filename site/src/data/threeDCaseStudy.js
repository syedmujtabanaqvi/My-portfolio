import heroShowcase from '../assets/images/threed-modeling/hero-showcase.jpg'
import sceneLakeCabin from '../assets/images/threed-modeling/scene-lake-cabin.jpg'
import sceneInterior from '../assets/images/threed-modeling/scene-interior.jpg'
import sceneCamping from '../assets/images/threed-modeling/scene-camping.jpg'
import sceneCity from '../assets/images/threed-modeling/scene-city.jpg'
import assetCharacter from '../assets/images/threed-modeling/asset-character.jpg'
import sceneIsometricHouse from '../assets/images/threed-modeling/scene-isometric-house.jpg'
import sceneAlt01 from '../assets/images/threed-modeling/scene-alt-01.jpg'
import sceneAlt02 from '../assets/images/threed-modeling/scene-alt-02.jpg'

export const threeDCaseStudy = {
  slug: '3d-modeling-design',
  title: '3D Modeling Design',
  subtitle:
    'Creating high-quality 3D assets, environments, and product visualizations with precision, creativity, and modern workflows.',
  category: '3D Modeling',
  hue: 268,
  thumbnail: heroShowcase,
  heroImage: heroShowcase,

  overview: [
    {
      title: 'Project Goal',
      body: 'Build a cohesive library of low-poly 3D scenes and assets — environments, interiors, and characters — that share one consistent art direction from first blockout to final render.',
    },
    {
      title: 'Design Philosophy',
      body: 'Less geometry, more intent. Every scene leans on strong silhouettes, deliberate color palettes, and simplified forms instead of raw polygon density.',
    },
    {
      title: 'Creative Direction',
      body: 'Stylized realism — grounded lighting and believable composition applied to a low-poly, illustrative aesthetic so each scene reads instantly, even at a glance.',
    },
    {
      title: 'Target Style',
      body: 'Warm, atmospheric low-poly environments with soft gradients and isometric framing, balanced between game-ready asset design and standalone visual storytelling.',
    },
    {
      title: 'Challenges',
      body: 'Keeping poly counts lean while preserving mood and depth meant solving a lot with lighting and color rather than extra geometry — and keeping every asset in the set visually consistent.',
    },
    {
      title: 'Final Outcome',
      body: 'A unified collection of environment and character renders — landscapes, interiors, and isometric scenes — ready to anchor a portfolio, pitch deck, or game prototype.',
    },
  ],

  gallery: [
    { src: heroShowcase, alt: 'Featured low-poly 3D environment showcase render', caption: 'Final Showcase Render' },
    { src: sceneLakeCabin, alt: 'Low-poly lakeside cabin environment with pine trees', caption: 'Lakeside Cabin Environment' },
    { src: sceneInterior, alt: 'Low-poly stylized interior scene', caption: 'Interior Scene Study' },
    { src: sceneCamping, alt: 'Low-poly forest camping scene with campfire', caption: 'Forest Camping Scene' },
    { src: sceneCity, alt: 'Low-poly isometric city block', caption: 'Isometric City Block' },
    { src: assetCharacter, alt: 'Stylized low-poly character model', caption: 'Character Study' },
    { src: sceneIsometricHouse, alt: 'Low-poly isometric house exterior', caption: 'Isometric House Exterior' },
    { src: sceneAlt01, alt: 'Low-poly 3D environment render', caption: 'Environment Pass' },
    { src: sceneAlt02, alt: 'Low-poly 3D environment render', caption: 'Environment Detail' },
  ],

  process: [
    { title: 'Concept', desc: 'Defining mood, palette, and the story each scene needs to tell.' },
    { title: 'Reference Collection', desc: 'Gathering lighting, color, and composition references to ground the direction.' },
    { title: 'Blockout', desc: 'Roughing in scale, layout, and camera framing with primitive geometry.' },
    { title: 'Modeling', desc: 'Building out low-poly geometry for props, structures, and characters.' },
    { title: 'High Detail', desc: 'Refining silhouettes and adding secondary shapes where they earn their place.' },
    { title: 'UV Mapping', desc: 'Laying out clean, efficient UVs ready for texturing.' },
    { title: 'Materials', desc: 'Assigning stylized materials and flat-shaded palettes across each asset.' },
    { title: 'Lighting', desc: 'Building atmosphere with directional light, soft shadow, and ambient color.' },
    { title: 'Rendering', desc: 'Rendering final passes with post-processing for depth and warmth.' },
    { title: 'Final Presentation', desc: 'Curating and compositing the strongest angles for showcase.' },
  ],

  techDetails: [
    { label: 'Software Used', value: 'Blender' },
    { label: 'Modeling Workflow', value: 'Low-poly hard surface & organic modeling' },
    { label: 'Rendering Engine', value: 'Eevee / Cycles' },
    { label: 'Poly Count', value: 'Optimized low-poly per scene' },
    { label: 'Texture Workflow', value: 'Flat-shaded stylized materials' },
    { label: 'Optimization', value: 'Simplified geometry, baked lighting' },
    { label: 'Export Formats', value: 'FBX / OBJ / GLB' },
  ],

  featuredAssets: [
    {
      image: sceneLakeCabin,
      name: 'Lakeside Cabin',
      category: 'Environment',
      desc: 'A quiet lakeside environment built around a wooden cabin, pine treeline, and warm reflected light.',
      software: 'Blender',
      renderInfo: 'Eevee render, single directional light + ambient fill',
    },
    {
      image: sceneCamping,
      name: 'Forest Camp',
      category: 'Environment',
      desc: 'A forest camping scene composed around a central campfire, tent, and layered tree silhouettes.',
      software: 'Blender',
      renderInfo: 'Eevee render, warm key light with cool ambient bounce',
    },
    {
      image: sceneCity,
      name: 'City Block',
      category: 'Environment',
      desc: 'An isometric city block exploring stacked low-poly architecture and readable urban composition.',
      software: 'Blender',
      renderInfo: 'Isometric camera, flat-shaded material set',
    },
    {
      image: assetCharacter,
      name: 'Character Study',
      category: 'Character',
      desc: 'A stylized low-poly character model designed to sit comfortably inside the same environment set.',
      software: 'Blender',
      renderInfo: 'Studio-style three-point lighting setup',
    },
    {
      image: sceneIsometricHouse,
      name: 'Isometric House',
      category: 'Environment',
      desc: 'A single-building isometric exterior study focused on roofline, proportion, and material contrast.',
      software: 'Blender',
      renderInfo: 'Isometric camera, soft ambient occlusion pass',
    },
    {
      image: sceneInterior,
      name: 'Interior Scene',
      category: 'Interior',
      desc: 'A stylized interior composition balancing furniture silhouettes with warm, low-contrast lighting.',
      software: 'Blender',
      renderInfo: 'Eevee render, warm interior lighting rig',
    },
  ],

  compare: {
    before: { src: sceneAlt01, label: 'Environment Pass' },
    after: { src: heroShowcase, label: 'Final Showcase' },
  },

  skills: [
    'Hard Surface Modeling',
    'Environment Design',
    'Product Visualization',
    'Lighting',
    'Rendering',
    'UV Mapping',
    'Material Creation',
    'Optimization',
    'Composition',
  ],

  showcase: [heroShowcase, sceneLakeCabin, sceneCamping, sceneCity, sceneIsometricHouse, sceneInterior],
}
