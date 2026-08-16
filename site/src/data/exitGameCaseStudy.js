import heroShowcase from '../assets/images/exit-game/hero-showcase.jpg'
import sceneLobby from '../assets/images/exit-game/scene-lobby.jpg'
import scenePuzzleRoom from '../assets/images/exit-game/scene-puzzle-room.jpg'
import sceneCorridor from '../assets/images/exit-game/scene-corridor.jpg'
import sceneVault from '../assets/images/exit-game/scene-vault.jpg'
import sceneLibrary from '../assets/images/exit-game/scene-library.jpg'
import sceneExitHall from '../assets/images/exit-game/scene-exit-hall.jpg'
import sceneAlt01 from '../assets/images/exit-game/scene-alt-01.jpg'
import sceneAlt02 from '../assets/images/exit-game/scene-alt-02.jpg'

export const exitGameCaseStudy = {
  slug: 'exit-game',
  title: 'Exit',
  subtitle:
    'A low-poly isometric escape-room puzzle game — every hand-crafted room hides the one clue that unlocks the way out.',
  category: 'Game Dev',
  hue: 280,
  thumbnail: heroShowcase,
  heroImage: heroShowcase,

  overview: [
    {
      title: 'Project Goal',
      body: 'Design and build a self-contained escape-room puzzle game where every room is a readable, solvable environment — no UI hand-holding required.',
    },
    {
      title: 'Design Philosophy',
      body: 'Environment as interface. Keys, levers, and clues are staged directly in the 3D space so players learn the rules by looking, not by reading a tutorial.',
    },
    {
      title: 'Creative Direction',
      body: 'Warm, moody low-poly interiors lit like a physical escape room — pooled lamp light, deep shadow, and just enough color to draw the eye to what matters.',
    },
    {
      title: 'Target Style',
      body: 'Isometric, stylized realism with a compact color palette per room, so each space reads as a distinct chapter in the same overall building.',
    },
    {
      title: 'Challenges',
      body: 'Balancing puzzle difficulty against readability — every interactive object had to stay visually distinct from set-dressing without breaking immersion.',
    },
    {
      title: 'Final Outcome',
      body: 'A complete multi-room escape sequence — lobby, puzzle room, vault, library, and exit hall — built solo from blockout to final lighting pass.',
    },
  ],

  gallery: [
    { src: heroShowcase, alt: 'Exit game hero showcase render', caption: 'Featured Showcase Render' },
    { src: sceneLobby, alt: 'Low-poly escape room lobby scene', caption: 'Entry Lobby' },
    { src: scenePuzzleRoom, alt: 'Low-poly puzzle room with interactive objects', caption: 'Main Puzzle Room' },
    { src: sceneCorridor, alt: 'Low-poly connecting corridor scene', caption: 'Connecting Corridor' },
    { src: sceneVault, alt: 'Low-poly vault room scene', caption: 'Vault Room' },
    { src: sceneLibrary, alt: 'Low-poly library room scene', caption: 'Library Room' },
    { src: sceneExitHall, alt: 'Low-poly final exit hall scene', caption: 'Final Exit Hall' },
    { src: sceneAlt01, alt: 'Exit game environment render', caption: 'Environment Pass' },
    { src: sceneAlt02, alt: 'Exit game environment render', caption: 'Environment Detail' },
  ],

  process: [
    { title: 'Concept', desc: 'Sketching the escape sequence — how many rooms, what each one teaches the player.' },
    { title: 'Reference Collection', desc: 'Gathering lighting and prop references from real escape rooms and heist films.' },
    { title: 'Blockout', desc: 'Roughing in room scale, sightlines, and the isometric camera framing for each space.' },
    { title: 'Level Design', desc: 'Placing keys, levers, and clues so every puzzle has a fair, discoverable solution path.' },
    { title: 'Modeling', desc: 'Building low-poly props and architecture for each themed room.' },
    { title: 'Scripting', desc: 'Wiring up interactions — pickups, locks, triggers, and the win-state exit sequence.' },
    { title: 'Materials', desc: 'Assigning stylized, flat-shaded materials consistent across every room.' },
    { title: 'Lighting', desc: 'Building mood with pooled lamp light, rim light, and soft ambient fill per room.' },
    { title: 'Playtesting', desc: 'Running blind playtests to tune puzzle difficulty and pacing between rooms.' },
    { title: 'Final Polish', desc: 'Post-processing, sound cues, and final camera pass across the full sequence.' },
  ],

  techDetails: [
    { label: 'Engine', value: 'Unity' },
    { label: 'Scripting', value: 'C#' },
    { label: 'Modeling Workflow', value: 'Low-poly hard surface & prop modeling' },
    { label: 'Camera', value: 'Fixed isometric per-room camera' },
    { label: 'Texture Workflow', value: 'Flat-shaded stylized materials' },
    { label: 'Interaction System', value: 'Custom pickup, lock & trigger framework' },
    { label: 'Platform', value: 'PC / WebGL build' },
  ],

  featuredAssets: [
    {
      image: sceneLobby,
      name: 'Entry Lobby',
      category: 'Environment',
      desc: 'The first room players see — sets the tone and teaches the core interaction loop with a single, obvious puzzle.',
      software: 'Unity',
      renderInfo: 'Isometric camera, warm key light with cool ambient fill',
    },
    {
      image: scenePuzzleRoom,
      name: 'Main Puzzle Room',
      category: 'Environment',
      desc: 'The central hub of the escape sequence, layered with multiple interlocking clues across the space.',
      software: 'Unity',
      renderInfo: 'Isometric camera, pooled lamp lighting',
    },
    {
      image: sceneVault,
      name: 'Vault Room',
      category: 'Environment',
      desc: 'A high-tension late-game room built around a single combination-lock centerpiece.',
      software: 'Unity',
      renderInfo: 'Cool rim light, low ambient for tension',
    },
    {
      image: sceneLibrary,
      name: 'Library Room',
      category: 'Environment',
      desc: 'A dense prop-driven room where the clue is hidden in plain sight among the shelving.',
      software: 'Unity',
      renderInfo: 'Warm interior lighting rig, soft shadow',
    },
    {
      image: sceneCorridor,
      name: 'Connecting Corridor',
      category: 'Environment',
      desc: 'A transitional space that paces the sequence between major puzzle rooms.',
      software: 'Unity',
      renderInfo: 'Directional key light, long soft shadows',
    },
    {
      image: sceneExitHall,
      name: 'Exit Hall',
      category: 'Environment',
      desc: 'The final room and win-state — the payoff space that resolves the whole sequence.',
      software: 'Unity',
      renderInfo: 'Bright key light with warm bounce for a triumphant read',
    },
  ],

  compare: {
    before: { src: sceneAlt01, label: 'Environment Pass' },
    after: { src: heroShowcase, label: 'Final Showcase' },
  },

  skills: [
    'Level Design',
    'Environment Design',
    'Gameplay Scripting',
    'Lighting',
    'Puzzle Design',
    'Prop Modeling',
    'Material Creation',
    'Playtesting',
    'Composition',
  ],

  showcase: [heroShowcase, sceneLobby, scenePuzzleRoom, sceneVault, sceneLibrary, sceneExitHall],
}
