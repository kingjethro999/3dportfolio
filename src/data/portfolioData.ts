export interface ServiceItem {
  number: string;
  name: string;
  description: string;
}

export interface ProjectItem {
  number: string;
  name: string;
  category: string;
  repoUrl: string;
  liveUrl?: string;
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  summary: string;
  deliverables: string[];
  terminalPreview: string;
}

export const PROFILE_INFO = {
  name: 'King Jethro',
  shortHeading: "Hi, i’m Jethro",
  handle: 'kingjethro999',
  roles: 'Software Engineer · Bug Bounty Hunter · Systems & AI Builder · Athlete',
  heroTagline:
    'building developer tooling, autonomous ai agents, native utilities, and 3d web systems',
  githubUrl: 'https://github.com/kingjethro999',
  portfolioUrl: 'https://jethroportfolio.vercel.app',
  linkedinUrl: 'https://linkedin.com/in/king-jethro-jerry',
  twitterUrl: 'https://x.com/IamKingJethro',
  sponsorsUrl: 'https://github.com/sponsors/kingjethro999',
  thanksDevUrl: 'https://thanks.dev/u/gh/kingjethro999',
};

export const HERO_PORTRAIT_URL =
  'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';

export const MARQUEE_GIFS: string[] = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

export const ABOUT_CORNER_IMAGES = {
  topLeftMoon:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  bottomLeftObject:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  topRightLego:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  bottomRightGroup:
    'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
};

export const ABOUT_PARAGRAPH_TEXT =
  'I build developer tooling, autonomous AI agents, native utilities, and interactive 3D web systems, alongside offensive security and vulnerability hunting. Rather than sticking to comfortable boilerplate, i focus on systems thinking — building tools that eliminate friction for developers and securing digital infrastructure.';

export const BEYOND_TERMINAL_TEXT =
  "Footballer & Athlete: When not behind the keyboard, I'm on the pitch or training. The athleticism, pace, and discipline I cultivate in football directly shape my work ethic, focus, and stamina as an engineer.";

export const SKILLS_LIST: string[] = [
  'TypeScript',
  'Go',
  'Python',
  'Kotlin',
  'C++',
  'JavaScript',
  'Bash',
  'Linux',
  'Three.js',
  'React',
  'Next.js',
  'Node.js',
  'Tailwind CSS',
  'Docker',
  'Git',
  'Burp Suite',
  'Wireshark',
  'Metasploit',
  'Kali Linux',
  'Postman',
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    number: '01',
    name: 'AI Agents & OS Automation',
    description:
      'Building watched-mode AI computer operators (Automator), terminal-first agentic coding assistants in Go (GOO), and local-first prompt workspaces (Prompt Dock) with MCP integration and 3-tier safety gating.',
  },
  {
    number: '02',
    name: 'Systems & Dev Tooling',
    description:
      'Engineering storage-efficient Node.js package managers built around content-addressable stores (Zyrk) and Model Context Protocol bridges (Figma MCP) that eliminate developer friction.',
  },
  {
    number: '03',
    name: '3D Web & Spatial Graphics',
    description:
      'Creating high-performance in-browser 3D model viewers and topology inspectors (3d-viewre) supporting GLB, GLTF, OBJ, STL, PLY, and FBX with 100% private client-side Three.js rendering.',
  },
  {
    number: '04',
    name: 'Bug Bounty & Offensive Security',
    description:
      'Web application vulnerability research, exploit feasibility verification, packet analysis with Burp Suite, Wireshark, and Metasploit, and securing execution boundaries for autonomous agents.',
  },
  {
    number: '05',
    name: 'Native Android & ML Systems',
    description:
      'Developing minimalist OLED-black Android launchers with embedded Linux terminals in Kotlin (D.A.R.K) and CPU-based latency/memory estimators for Transformer workloads on GPUs and TPUs (Accel_Sim).',
  },
];

export const PROJECTS_LIST: ProjectItem[] = [
  {
    number: '01',
    name: 'Automator',
    category: 'AI & OS Automation',
    repoUrl: 'https://github.com/kingjethro999/automator',
    col1Image1:
      'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
    col1Image2:
      'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    summary:
      'A watched-mode AI computer operator featuring an observed UI execution timeline, AI cursor overlay, live UI event streams, and desktop/OS automation skills.',
    deliverables: ['Python', 'Watched-Mode Operator', 'AI Cursor Overlay', 'OS Automation Skills'],
    terminalPreview: '$ automator --watch --cursor-overlay\n[ timeline ] UI event stream attached · safety gate active',
  },
  {
    number: '02',
    name: 'Zyrk',
    category: 'Systems & Tooling',
    repoUrl: 'https://github.com/kingjethro999/zyrk',
    col1Image1:
      'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
    col1Image2:
      'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    summary:
      'Fast, deduplicated package manager for Node.js projects built around a global content-addressable store and symlink/hardlink resolution to eradicate disk bloat.',
    deliverables: ['TypeScript', 'Node.js', 'Content-Addressable Store', 'Hardlink Deduplication'],
    terminalPreview: '$ zyrk install\n[ok] Linked 1,420 packages from global CAS in 380ms (0B duplicated)',
  },
  {
    number: '03',
    name: 'Prompt Dock',
    category: 'AI & Dev Tools',
    repoUrl: 'https://github.com/kingjethro999/promptdock',
    liveUrl: 'https://thepromptdock.vercel.app',
    col1Image1:
      'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
    col1Image2:
      'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    summary:
      'Local-first AI prompt engineering workspace with reusable templates, structured shape-contracts, live previews, and multi-provider fallback chains.',
    deliverables: ['JavaScript', 'Local-First Workspace', 'Shape Contracts', 'Multi-Provider Fallback'],
    terminalPreview: 'promptdock://workspace · shape-contract verified · fallback chain ready',
  },
  {
    number: '04',
    name: 'D.A.R.K',
    category: 'Android / Kotlin',
    repoUrl: 'https://github.com/kingjethro999/D.A.R.K',
    liveUrl: 'https://d-a-r-k.vercel.app',
    col1Image1:
      'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
    col1Image2:
      'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    summary:
      "Developers' Adaptive Responsive Kernel: a minimalist, OLED-black, text-only Android launcher with an embedded Linux terminal built for distraction-free speed.",
    deliverables: ['Kotlin', 'Android Launcher', 'OLED-Black UI', 'Embedded Linux Shell'],
    terminalPreview: 'dark-kernel@android:~$ launch --oled-minimal --shell=ash',
  },
  {
    number: '05',
    name: '3d-viewre',
    category: '3D Graphics / Web',
    repoUrl: 'https://github.com/kingjethro999/3d-viewre',
    col1Image1:
      'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
    col1Image2:
      'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    summary:
      'High-performance in-browser 3D model viewer and topology inspector supporting GLB, GLTF, OBJ, STL, PLY, and FBX formats with 100% private client-side rendering.',
    deliverables: ['Next.js', 'Three.js', 'React Three Fiber', 'Zustand Topology Inspector'],
    terminalPreview: '[3d-viewre] Loaded mesh.glb · 142,800 tris · wireframe & normal inspection active',
  },
  {
    number: '06',
    name: 'GOO',
    category: 'AI / Systems (Go)',
    repoUrl: 'https://github.com/kingjethro999/goo',
    col1Image1:
      'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
    col1Image2:
      'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    summary:
      'Terminal-first agentic coding assistant built in Go featuring Model Context Protocol (MCP) integration, parallel sub-agents, persistent memory, and 3-tier safety gating.',
    deliverables: ['Go', 'Parallel Sub-Agents', 'MCP Integration', '3-Tier Safety Gating'],
    terminalPreview: '$ goo run "refactor auth module" --agents=4 --safety=tier-2',
  },
  {
    number: '07',
    name: 'Accel_Sim',
    category: 'ML Systems (Python)',
    repoUrl: 'https://github.com/kingjethro999/Accel_Sim',
    col1Image1:
      'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
    col1Image2:
      'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    summary:
      'CPU-based hardware estimation toolkit designed to predict the latency, roofline bottlenecks, and memory footprint of Transformer workloads on GPUs and TPUs.',
    deliverables: ['Python', 'Transformer Profiling', 'GPU/TPU Roofline Model', 'Memory Estimator'],
    terminalPreview: '$ accel-sim --model llama-70b --target h100-sxm\nEst. KV-Cache: 38.4GB · Prefill: 41.2ms',
  },
  {
    number: '08',
    name: 'Figma MCP',
    category: 'Dev Tools / MCP',
    repoUrl: 'https://github.com/kingjethro999/figma-mcp',
    liveUrl: 'https://figma-mcp-lilac.vercel.app',
    col1Image1:
      'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
    col1Image2:
      'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    summary:
      'Model Context Protocol bridge turning Figma design nodes and layout tokens directly into production component code inside agentic IDEs.',
    deliverables: ['TypeScript', 'Model Context Protocol', 'Figma AST Bridge', 'Cursor / Agentic IDEs'],
    terminalPreview: 'mcp://figma-bridge · synced 24 frames -> React + Tailwind components',
  },
];
