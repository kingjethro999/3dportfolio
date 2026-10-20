import React, { useCallback, useEffect, useState } from 'react';
import { ArrowUpRight, RefreshCw, Star, GitFork, Activity, FolderGit2 } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { PROFILE_INFO } from '../data/portfolioData';
import {
  aggregateGitHubRepoStats,
  GitHubRepoInput,
  LanguageBreakdownItem,
} from '../utils/portfolioMath';

interface GitHubUserResponse {
  login: string;
  name: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

interface GitHubEventItem {
  id: string;
  type: string;
  repo: {
    name: string;
  };
  created_at: string;
}

const FALLBACK_REPOS: GitHubRepoInput[] = [
  {
    name: 'automator',
    html_url: 'https://github.com/kingjethro999/automator',
    description:
      'Watched-mode AI computer operator featuring an observed UI execution timeline, AI cursor overlay, and OS automation skills.',
    language: 'Python',
    stargazers_count: 3,
    forks_count: 1,
    updated_at: '2026-10-20T12:00:00Z',
  },
  {
    name: 'zyrk',
    html_url: 'https://github.com/kingjethro999/zyrk',
    description:
      'Storage-efficient Node package manager: one verified package store per user, shared across projects through links.',
    language: 'TypeScript',
    stargazers_count: 4,
    forks_count: 1,
    updated_at: '2026-10-19T15:30:00Z',
  },
  {
    name: 'promptdock',
    html_url: 'https://github.com/kingjethro999/promptdock',
    description:
      'Local-first AI prompt workspace with reusable templates, live previews, and multi-provider prompt enhancement.',
    language: 'JavaScript',
    stargazers_count: 5,
    forks_count: 1,
    updated_at: '2026-10-18T10:20:00Z',
  },
  {
    name: 'D.A.R.K',
    html_url: 'https://github.com/kingjethro999/D.A.R.K',
    description:
      "Developers' Adaptive Responsive Kernel — a minimalist, OLED-black, text-only Android launcher with a built-in terminal.",
    language: 'Kotlin',
    stargazers_count: 4,
    forks_count: 1,
    updated_at: '2026-10-16T09:15:00Z',
  },
  {
    name: '3d-viewre',
    html_url: 'https://github.com/kingjethro999/3d-viewre',
    description:
      'High-performance in-browser 3D model viewer and topology inspector supporting GLB, GLTF, OBJ, STL, PLY, and FBX formats.',
    language: 'TypeScript',
    stargazers_count: 3,
    forks_count: 1,
    updated_at: '2026-10-14T18:45:00Z',
  },
  {
    name: 'goo',
    html_url: 'https://github.com/kingjethro999/goo',
    description:
      'GOO — terminal-first agentic AI coding assistant built with Go: MCP integration, parallel sub-agents, and 3-tier safety gating.',
    language: 'Go',
    stargazers_count: 6,
    forks_count: 1,
    updated_at: '2026-10-12T14:10:00Z',
  },
  {
    name: 'Accel_Sim',
    html_url: 'https://github.com/kingjethro999/Accel_Sim',
    description:
      'CPU-based estimation tool designed to predict the latency and memory footprint of Transformer-based workloads on GPUs and TPUs.',
    language: 'Python',
    stargazers_count: 3,
    forks_count: 1,
    updated_at: '2026-10-10T11:00:00Z',
  },
  {
    name: 'figma-mcp',
    html_url: 'https://github.com/kingjethro999/figma-mcp',
    description:
      'Model Context Protocol bridge turning Figma designs directly into component code inside agentic IDEs.',
    language: 'TypeScript',
    stargazers_count: 4,
    forks_count: 1,
    updated_at: '2026-10-08T16:20:00Z',
  },
];

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  Python: '#3776AB',
  Go: '#00ADD8',
  Kotlin: '#7F52FF',
  'C++': '#00599C',
  HTML: '#E34C26',
  CSS: '#563D7C',
  Shell: '#89E051',
};

const CONTRIBUTION_SNAKE_URL =
  'https://raw.githubusercontent.com/kingjethro999/kingjethro999/output/github-user-contribution.svg';

export const GitHubStatsSection: React.FC = () => {
  const [userProfile, setUserProfile] = useState<GitHubUserResponse>({
    login: 'kingjethro999',
    name: 'King Jethro',
    public_repos: 109,
    followers: 16,
    following: 15,
    created_at: '2022-12-27T13:30:24Z',
    updated_at: '2026-10-20T12:08:43Z',
  });
  const [repos, setRepos] = useState<GitHubRepoInput[]>(FALLBACK_REPOS);
  const [recentEventsCount, setRecentEventsCount] = useState<number>(30);
  const [latestEventLabel, setLatestEventLabel] = useState<string>(
    'PushEvent · kingjethro999/kingjethro999'
  );
  const [selectedLangFilter, setSelectedLangFilter] = useState<string>('All');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [snakeImageError, setSnakeImageError] = useState<boolean>(false);

  const fetchGitHubData = useCallback(async () => {
    setIsLoading(true);
    try {
      const [userRes, reposRes, eventsRes] = await Promise.all([
        fetch('https://api.github.com/users/kingjethro999'),
        fetch(
          'https://api.github.com/users/kingjethro999/repos?per_page=100&sort=updated'
        ),
        fetch('https://api.github.com/users/kingjethro999/events/public?per_page=30'),
      ]);

      if (userRes.ok) {
        const userData: GitHubUserResponse = await userRes.json();
        if (userData && typeof userData.public_repos === 'number') {
          setUserProfile(userData);
        }
      }

      if (reposRes.ok) {
        const reposData: GitHubRepoInput[] = await reposRes.json();
        if (Array.isArray(reposData) && reposData.length > 0) {
          setRepos(reposData);
        }
      }

      if (eventsRes.ok) {
        const eventsData: GitHubEventItem[] = await eventsRes.json();
        if (Array.isArray(eventsData) && eventsData.length > 0) {
          setRecentEventsCount(eventsData.length);
          const firstEvent = eventsData[0];
          if (firstEvent?.type && firstEvent?.repo?.name) {
            setLatestEventLabel(`${firstEvent.type} · ${firstEvent.repo.name}`);
          }
        }
      }
    } catch {
      // Keep deterministic fallback data if offline or rate-limited
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGitHubData();
  }, [fetchGitHubData]);

  const aggregated = aggregateGitHubRepoStats(repos);
  const topLanguages: LanguageBreakdownItem[] =
    aggregated.topLanguages.length > 0
      ? aggregated.topLanguages
      : aggregateGitHubRepoStats(FALLBACK_REPOS).topLanguages;

  const filterOptions = [
    'All',
    ...topLanguages.slice(0, 5).map((l) => l.language),
  ];

  const filteredRepos = repos
    .filter((repo) =>
      selectedLangFilter === 'All' ? true : repo.language === selectedLangFilter
    )
    .slice(0, 6);

  return (
    <section
      id="github-stats"
      aria-label="GitHub Engineering Stats"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 border-t border-[#D7E2EA]/10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Row */}
        <FadeIn
          delay={0}
          y={30}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div>
            <p className="text-xs sm:text-sm font-light uppercase tracking-widest text-[#D7E2EA]/60 mb-2">
              Live GitHub REST API Telemetry · @{PROFILE_INFO.handle}
            </p>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
            >
              GitHub Stats
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={fetchGitHubData}
              disabled={isLoading}
              aria-label="Refresh GitHub stats"
              className="rounded-full border border-[#D7E2EA]/35 px-5 py-2.5 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors inline-flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`}
              />
              <span>{isLoading ? 'Syncing API...' : 'Sync GitHub API'}</span>
            </button>

            <a
              href={PROFILE_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-[#D7E2EA] px-6 py-2.5 text-xs sm:text-sm font-medium uppercase tracking-widest text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <span>Open GitHub Profile</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>

        {/* 4-Column Engineering Impact Metrics Strip */}
        <FadeIn
          delay={0.1}
          y={20}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10"
        >
          <div className="rounded-[28px] border border-[#D7E2EA]/20 bg-[#121316] p-5 sm:p-7 flex flex-col justify-between gap-3">
            <div className="flex items-center justify-between text-[#D7E2EA]/60">
              <span className="text-xs uppercase tracking-widest font-light">
                Public Repositories
              </span>
              <FolderGit2 className="w-4 h-4" />
            </div>
            <p className="text-3xl sm:text-5xl font-black text-[#D7E2EA] tabular-nums leading-none">
              {userProfile.public_repos}
            </p>
            <p className="text-xs text-[#D7E2EA]/50 font-light">
              Open-source tools, agents &amp; systems
            </p>
          </div>

          <div className="rounded-[28px] border border-[#D7E2EA]/20 bg-[#121316] p-5 sm:p-7 flex flex-col justify-between gap-3">
            <div className="flex items-center justify-between text-[#D7E2EA]/60">
              <span className="text-xs uppercase tracking-widest font-light">
                Stars Earned
              </span>
              <Star className="w-4 h-4" />
            </div>
            <p className="text-3xl sm:text-5xl font-black text-[#D7E2EA] tabular-nums leading-none">
              {aggregated.totalStars}
            </p>
            <p className="text-xs text-[#D7E2EA]/50 font-light">
              Across {aggregated.totalRepos} indexed repositories
            </p>
          </div>

          <div className="rounded-[28px] border border-[#D7E2EA]/20 bg-[#121316] p-5 sm:p-7 flex flex-col justify-between gap-3">
            <div className="flex items-center justify-between text-[#D7E2EA]/60">
              <span className="text-xs uppercase tracking-widest font-light">
                Followers &amp; Forks
              </span>
              <GitFork className="w-4 h-4" />
            </div>
            <p className="text-3xl sm:text-5xl font-black text-[#D7E2EA] tabular-nums leading-none">
              {userProfile.followers + aggregated.totalForks}
            </p>
            <p className="text-xs text-[#D7E2EA]/50 font-light tabular-nums">
              {userProfile.followers} followers · {aggregated.totalForks} repo forks
            </p>
          </div>

          <div className="rounded-[28px] border border-[#D7E2EA]/20 bg-[#121316] p-5 sm:p-7 flex flex-col justify-between gap-3">
            <div className="flex items-center justify-between text-[#D7E2EA]/60">
              <span className="text-xs uppercase tracking-widest font-light">
                Recent API Events
              </span>
              <Activity className="w-4 h-4" />
            </div>
            <p className="text-3xl sm:text-5xl font-black text-[#D7E2EA] tabular-nums leading-none">
              {recentEventsCount}
            </p>
            <p className="text-xs text-[#D7E2EA]/50 font-light truncate">
              {latestEventLabel}
            </p>
          </div>
        </FadeIn>

        {/* Top Languages Breakdown + Contribution Grid Snake */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          {/* Top Languages Card (5 cols) */}
          <FadeIn
            delay={0.15}
            y={20}
            className="lg:col-span-5 rounded-[32px] border border-[#D7E2EA]/20 bg-[#121316] p-6 sm:p-8 flex flex-col justify-between gap-6"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-medium uppercase tracking-wide text-[#D7E2EA] mb-1">
                Top Languages Distribution
              </h3>
              <p className="text-xs font-light text-[#D7E2EA]/60 mb-5">
                Computed live from public repositories on GitHub REST API
              </p>

              {/* Multi-segment Language Bar */}
              <div className="w-full h-3 rounded-full overflow-hidden flex bg-[#1C1E24] mb-6">
                {topLanguages.map((item) => (
                  <div
                    key={item.language}
                    style={{
                      width: `${Math.max(item.percentage, 4)}%`,
                      backgroundColor:
                        LANGUAGE_COLORS[item.language] || '#BBCCD7',
                    }}
                    title={`${item.language}: ${item.percentage}%`}
                  />
                ))}
              </div>

              {/* Clean unboxed language breakdown list */}
              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                {topLanguages.map((item) => (
                  <div
                    key={item.language}
                    className="flex items-center justify-between text-xs sm:text-sm border-b border-[#D7E2EA]/10 pb-2"
                  >
                    <span className="font-medium text-[#D7E2EA]">
                      {item.language}
                    </span>
                    <span className="text-[#D7E2EA]/60 tabular-nums">
                      {item.percentage}% ({item.count})
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-xs text-[#D7E2EA]/50 font-light flex items-center justify-between pt-2">
              <span>Account Created: Dec 2022</span>
              <span className="tabular-nums">@{userProfile.login}</span>
            </div>
          </FadeIn>

          {/* Contribution Activity Grid Snake (7 cols) */}
          <FadeIn
            delay={0.2}
            y={20}
            className="lg:col-span-7 rounded-[32px] border border-[#D7E2EA]/20 bg-[#121316] p-6 sm:p-8 flex flex-col justify-between gap-6"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-lg sm:text-xl font-medium uppercase tracking-wide text-[#D7E2EA]">
                  Contribution Activity Grid
                </h3>
                <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60">
                  kingjethro999/output/github-user-contribution.svg
                </span>
              </div>
              <p className="text-xs font-light text-[#D7E2EA]/60 mb-6">
                Automated contribution snake &amp; commit cadence across systems, AI, and security repositories
              </p>

              <div className="w-full rounded-2xl bg-[#0C0C0C] border border-[#D7E2EA]/10 p-4 flex items-center justify-center min-h-[160px] overflow-hidden">
                {!snakeImageError ? (
                  <img
                    src={CONTRIBUTION_SNAKE_URL}
                    alt="King Jethro's GitHub Contribution Grid Snake"
                    referrerPolicy="no-referrer"
                    onError={() => setSnakeImageError(true)}
                    className="w-full h-auto object-contain block"
                  />
                ) : (
                  <div className="w-full grid grid-cols-26 gap-1 py-4">
                    {Array.from({ length: 130 }).map((_, idx) => {
                      const intensity = (idx * 17 + 7) % 5;
                      const opacities = [
                        'bg-[#D7E2EA]/10',
                        'bg-[#B600A8]/30',
                        'bg-[#B600A8]/55',
                        'bg-[#7621B0]/80',
                        'bg-[#BE4C00]',
                      ];
                      return (
                        <div
                          key={idx}
                          className={`h-2.5 rounded-xs ${opacities[intensity]}`}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#D7E2EA]/60 font-light">
              <span>
                Active Focus: Automator · Zyrk · Prompt Dock · D.A.R.K · 3d-viewre · GOO
              </span>
              <a
                href={`${PROFILE_INFO.githubUrl}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D7E2EA] hover:underline inline-flex items-center gap-1 whitespace-nowrap"
              >
                <span>View all {userProfile.public_repos} repositories</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Interactive Repository Activity Explorer */}
        <FadeIn
          delay={0.25}
          y={20}
          className="rounded-[32px] border border-[#D7E2EA]/20 bg-[#121316] p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-medium uppercase tracking-wide text-[#D7E2EA]">
                Recent Repository Activity
              </h3>
              <p className="text-xs font-light text-[#D7E2EA]/60">
                Filter live repositories by primary language
              </p>
            </div>

            {/* Interactive Segmented Filter Controls */}
            <div
              role="group"
              aria-label="Filter repositories by language"
              className="flex flex-wrap items-center gap-1.5 bg-[#0C0C0C] p-1.5 rounded-2xl border border-[#D7E2EA]/15"
            >
              {filterOptions.map((lang) => {
                const isActive = selectedLangFilter === lang;
                return (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setSelectedLangFilter(lang)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-[#D7E2EA] text-[#0C0C0C]'
                        : 'text-[#D7E2EA]/70 hover:text-[#D7E2EA]'
                    }`}
                  >
                    {lang}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-[#D7E2EA]/15 bg-[#0C0C0C] p-5 flex flex-col justify-between gap-4 hover:border-[#D7E2EA]/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="font-medium uppercase tracking-wide text-sm sm:text-base text-[#D7E2EA] group-hover:text-white truncate">
                      {repo.name}
                    </h4>
                    <ArrowUpRight className="w-4 h-4 text-[#D7E2EA]/50 group-hover:text-[#D7E2EA] shrink-0" />
                  </div>
                  <p className="text-xs font-light text-[#D7E2EA]/70 line-clamp-2 leading-relaxed">
                    {repo.description ||
                      'Open-source engineering repository by King Jethro.'}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-[#D7E2EA]/55 pt-2 border-t border-[#D7E2EA]/10 tabular-nums">
                  <span>{repo.language || 'Systems'}</span>
                  <span className="inline-flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    <span>
                      {repo.stargazers_count || 0} · Updated{' '}
                      {new Date(repo.updated_at).toLocaleDateString('en-US', {
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
