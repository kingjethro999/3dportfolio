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
  posterImage?: string;
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

// 21 authentic repository screenshots, live tool captures, and short demo videos
export const MARQUEE_GIFS: string[] = [
  '/assets/videos/viewre-demo.webm',
  '/assets/repos/automator-mcp.png',
  '/assets/projects/zyrk-cas.png',
  '/assets/projects/promptdock-live.png',
  '/assets/videos/goo-demo.webm',
  '/assets/projects/dark-live.png',
  '/assets/projects/accelsim-main.png',
  '/assets/projects/figma-mcp-live.png',
  '/assets/repos/automator-kanban.png',
  '/assets/videos/zyrk-demo.webm',
  '/assets/repos/promptdock-social-v2.png',
  '/assets/repos/dark-main.png',
  '/assets/projects/viewre-main.png',
  '/assets/videos/accelsim-demo.webm',
  '/assets/projects/goo-tui.png',
  '/assets/repos/automator-achievements.png',
  '/assets/projects/figmamcp-main.png',
  '/assets/repos/promptdock-preview-1.png',
  '/assets/projects/zyrk-bench.png',
  '/assets/repos/automator-skills-hub.png',
  '/assets/projects/accelsim-heatmap.png',
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
    col1Image1: '/assets/repos/automator-mcp.png',
    col1Image2: '/assets/repos/automator-kanban.png',
    col2Image: '/assets/videos/automator-session-orchestrator.mp4',
    posterImage: '/assets/repos/automator-achievements.png',
    summary:
      'A watched-mode AI computer operator featuring an observed UI execution timeline, AI cursor overlay, live UI event streams, MCP server hub, and desktop/OS automation skills.',
    deliverables: ['Python', 'Watched-Mode Operator', 'AI Cursor Overlay', 'OS Automation Skills'],
    terminalPreview: '$ automator --watch --cursor-overlay\n[ timeline ] UI event stream attached · safety gate active',
  },
  {
    number: '02',
    name: 'Zyrk',
    category: 'Systems & Tooling',
    repoUrl: 'https://github.com/kingjethro999/zyrk',
    col1Image1: '/assets/projects/zyrk-cas.png',
    col1Image2: '/assets/projects/zyrk-bench.png',
    col2Image: '/assets/videos/zyrk-demo.webm',
    posterImage: '/assets/projects/zyrk-cas.png',
    summary:
      'Fast, deduplicated package manager for Node.js 24+ built around a global SHA-256 content-addressable store, crash-journaled lockfiles, and hardlink resolution to eradicate disk bloat.',
    deliverables: ['TypeScript', 'Node.js 24+', 'Content-Addressable Store', 'Hardlink Deduplication'],
    terminalPreview: '$ zyrk install --frozen-lockfile\n[ok] Linked 1,420 packages from global CAS in 380ms (0B duplicated)',
  },
  {
    number: '03',
    name: 'Prompt Dock',
    category: 'AI & Dev Tools',
    repoUrl: 'https://github.com/kingjethro999/promptdock',
    liveUrl: 'https://thepromptdock.vercel.app',
    col1Image1: '/assets/repos/promptdock-social-v2.png',
    col1Image2: '/assets/repos/promptdock-preview-1.png',
    col2Image: '/assets/videos/promptdock-demo.webm',
    posterImage: '/assets/projects/promptdock-live.png',
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
    col1Image1: '/assets/repos/dark-screenshot1.jpg',
    col1Image2: '/assets/repos/dark-terminal-start.jpg',
    col2Image: '/assets/videos/dark-demo.webm',
    posterImage: '/assets/projects/dark-live.png',
    summary:
      "Developers' Adaptive Responsive Kernel: a minimalist, OLED-black, text-only Android launcher with an embedded Linux terminal built for distraction-free speed.",
    deliverables: ['Kotlin', 'Android Launcher', 'OLED-Black UI', 'Embedded Linux Shell'],
    terminalPreview: 'root@dark:~# launch --oled-minimal --shell=ash · 100% text-only · 0 icons',
  },
  {
    number: '05',
    name: '3d-viewre',
    category: '3D Graphics / Web',
    repoUrl: 'https://github.com/kingjethro999/3d-viewre',
    col1Image1: '/assets/projects/viewre-main.png',
    col1Image2: '/assets/projects/viewre-formats.png',
    col2Image: '/assets/videos/viewre-demo.webm',
    posterImage: '/assets/projects/viewre-main.png',
    summary:
      'High-performance in-browser 3D model viewer and topology inspector supporting GLB, GLTF, OBJ, STL, PLY, and FBX formats with 100% private client-side Three.js rendering.',
    deliverables: ['Next.js 16', 'Three.js', 'React Three Fiber', 'Zustand 5 Inspector'],
    terminalPreview: '[3d-viewre] Loaded cyber_valkyrie_rig.glb · 142,800 tris · wireframe [W] active',
  },
  {
    number: '06',
    name: 'GOO',
    category: 'AI / Systems (Go)',
    repoUrl: 'https://github.com/kingjethro999/goo',
    col1Image1: '/assets/projects/goo-tui.png',
    col1Image2: '/assets/projects/goo-safety.png',
    col2Image: '/assets/videos/goo-demo.webm',
    posterImage: '/assets/projects/goo-tui.png',
    summary:
      'Terminal-first agentic coding assistant built in Go featuring Bubbletea streaming TUI, Model Context Protocol (MCP) integration, parallel sub-agents, SQLite memory, and 3-tier safety gating.',
    deliverables: ['Go', 'Parallel Sub-Agents', 'MCP JSON-RPC', '3-Tier Safety Gating'],
    terminalPreview: '$ goo agent "refactor MCP transport" --parallel=4 --safety=allowlist_only',
  },
  {
    number: '07',
    name: 'Accel_Sim',
    category: 'ML Systems (Python)',
    repoUrl: 'https://github.com/kingjethro999/Accel_Sim',
    col1Image1: '/assets/projects/accelsim-main.png',
    col1Image2: '/assets/projects/accelsim-heatmap.png',
    col2Image: '/assets/videos/accelsim-demo.webm',
    posterImage: '/assets/projects/accelsim-main.png',
    summary:
      'CPU-based hardware estimation toolkit hooking into PyTorch torch.fx graphs to predict latency, analytical Roofline bottlenecks, and KV-cache memory footprint on V100, A100, H100, and TPUs.',
    deliverables: ['Python', 'PyTorch torch.fx', 'GPU/TPU Roofline Model', 'OOM Predictor'],
    terminalPreview: '$ accel-sim compare transformer_block.py --devices v100,a100,h100\nRecommended: A100-40GB (90% Compute Bound · 41.2ms prefill)',
  },
  {
    number: '08',
    name: 'Figma MCP',
    category: 'Dev Tools / MCP',
    repoUrl: 'https://github.com/kingjethro999/figma-mcp',
    liveUrl: 'https://figma-mcp-lilac.vercel.app',
    col1Image1: '/assets/projects/figma-mcp-live.png',
    col1Image2: '/assets/projects/figmamcp-main.png',
    col2Image: '/assets/videos/figmamcp-demo.webm',
    posterImage: '/assets/projects/figma-mcp-live.png',
    summary:
      'Dual REST API proxy and Model Context Protocol server turning Figma design nodes and AutoLayout tokens directly into production React/Vue/HTML code inside Cursor IDE.',
    deliverables: ['TypeScript', 'Model Context Protocol', 'Figma AST Bridge', 'Supabase IP Privacy'],
    terminalPreview: 'mcp://figma-server · generate_code_from_figma_node -> React + Tailwind TSX',
  },
];
