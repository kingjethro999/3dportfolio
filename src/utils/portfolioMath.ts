export interface ElementRect {
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface MarqueeTransform {
  offset: number;
  row1TranslateX: number;
  row2TranslateX: number;
}

export interface MagnetResult {
  isActive: boolean;
  x: number;
  y: number;
}

export interface CardStackMetrics {
  targetScale: number;
  topOffsetPx: number;
}

export interface GitHubRepoInput {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork?: boolean;
}

export interface LanguageBreakdownItem {
  language: string;
  count: number;
  percentage: number;
}

export interface AggregatedGitHubStats {
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  topLanguages: LanguageBreakdownItem[];
}

export type CursorMode = 'hidden' | 'default' | 'control' | 'project';

export interface CursorVariantSpec {
  mode: CursorMode;
  width: number;
  height: number;
  borderRadius: number;
  label: string;
  dotScale: number;
}

/**
 * Calculates scroll-driven horizontal marquee translation offsets.
 * Formula: offset = (scrollY - sectionTop + innerHeight) * 0.3
 * Row 1 moves RIGHT: translateX(offset - 200)
 * Row 2 moves LEFT: translateX(-(offset - 200))
 */
export function calculateMarqueeOffset(
  scrollY: number,
  sectionTop: number,
  innerHeight: number
): MarqueeTransform {
  const offset = (scrollY - sectionTop + innerHeight) * 0.3;
  const row1TranslateX = offset - 200;
  const row2TranslateX = -(offset - 200);
  return {
    offset,
    row1TranslateX,
    row2TranslateX,
  };
}

/**
 * Calculates mouse-following magnetic translation when cursor is within padding distance of element edges.
 */
export function calculateMagnetTransform(
  mouseX: number,
  mouseY: number,
  rect: ElementRect,
  padding: number = 150,
  strength: number = 3
): MagnetResult {
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const distX = Math.abs(centerX - mouseX);
  const distY = Math.abs(centerY - mouseY);

  if (distX < rect.width / 2 + padding && distY < rect.height / 2 + padding) {
    return {
      isActive: true,
      x: (mouseX - centerX) / strength,
      y: (mouseY - centerY) / strength,
    };
  }

  return {
    isActive: false,
    x: 0,
    y: 0,
  };
}

/**
 * Calculates sticky-stacking project card target scale and vertical offset.
 */
export function calculateCardScale(
  index: number,
  totalCards: number
): CardStackMetrics {
  const scaleStep = totalCards > 4 ? 0.015 : 0.03;
  const offsetStep = totalCards > 4 ? 16 : 28;
  const rawScale = 1 - (totalCards - 1 - index) * scaleStep;
  const targetScale = Math.round(rawScale * 1000) / 1000;
  const topOffsetPx = index * offsetStep;
  return {
    targetScale,
    topOffsetPx,
  };
}

/**
 * Calculates character scroll progress range [start, end] for character-by-character reveal.
 */
export function calculateCharRange(
  charIndex: number,
  totalChars: number
): [number, number] {
  if (totalChars <= 0) return [0, 1];
  const start = charIndex / totalChars;
  const end = (charIndex + 1) / totalChars;
  return [start, end];
}

/**
 * Calculates the user's scroll percentage (0 to 100) relative to the total scrollable height of the document.
 */
export function calculateScrollPercentage(
  scrollTop: number,
  scrollHeight: number,
  clientHeight: number
): number {
  const maxScroll = scrollHeight - clientHeight;
  if (maxScroll <= 0) return 0;
  const rawPercentage = (scrollTop / maxScroll) * 100;
  return Math.min(100, Math.max(0, rawPercentage));
}

/**
 * Aggregates GitHub repository list into total stars, forks, and top language percentages.
 */
export function aggregateGitHubRepoStats(
  repos: GitHubRepoInput[]
): AggregatedGitHubStats {
  let totalStars = 0;
  let totalForks = 0;
  const langCounts = new Map<string, number>();
  let reposWithLang = 0;

  for (const repo of repos) {
    totalStars += repo.stargazers_count || 0;
    totalForks += repo.forks_count || 0;
    if (repo.language) {
      langCounts.set(repo.language, (langCounts.get(repo.language) || 0) + 1);
      reposWithLang++;
    }
  }

  const sortedLangs = Array.from(langCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([language, count]) => ({
      language,
      count,
      percentage:
        reposWithLang > 0 ? Math.round((count / reposWithLang) * 1000) / 10 : 0,
    }));

  return {
    totalRepos: repos.length,
    totalStars,
    totalForks,
    topLanguages: sortedLangs,
  };
}

/**
 * Resolves the custom cursor shape, dimensions, and label based on the hovered DOM target context.
 */
export function resolveCursorVariant(context: {
  enabled: boolean;
  isInteractiveControl: boolean;
  isProjectCard: boolean;
}): CursorVariantSpec {
  if (!context.enabled) {
    return {
      mode: 'hidden',
      width: 0,
      height: 0,
      borderRadius: 9999,
      label: '',
      dotScale: 0,
    };
  }

  if (context.isInteractiveControl) {
    return {
      mode: 'control',
      width: 56,
      height: 56,
      borderRadius: 9999,
      label: '',
      dotScale: 0.45,
    };
  }

  if (context.isProjectCard) {
    return {
      mode: 'project',
      width: 92,
      height: 36,
      borderRadius: 18,
      label: 'VIEW',
      dotScale: 0,
    };
  }

  return {
    mode: 'default',
    width: 34,
    height: 34,
    borderRadius: 9999,
    label: '',
    dotScale: 1,
  };
}

/**
 * Synthesizes a 16-bit mono 44.1kHz PCM WAV base64 data URI for Howler.js UI sound effects.
 */
export function createSynthesizedWavDataUri(
  startFreqHz: number,
  durationMs: number,
  amplitude: number = 0.25,
  endFreqHz: number = startFreqHz
): string {
  const sampleRate = 44100;
  const numSamples = Math.max(1, Math.floor((sampleRate * durationMs) / 1000));
  const dataSize = numSamples * 2;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  const writeAscii = (offset: number, str: string) => {
    for (let i = 0; i < str.length; i++) {
      view.setUint8(offset + i, str.charCodeAt(i));
    }
  };

  writeAscii(0, 'RIFF');
  view.setUint32(4, 36 + dataSize, true);
  writeAscii(8, 'WAVE');
  writeAscii(12, 'fmt ');
  view.setUint32(16, 16, true); // PCM chunk size
  view.setUint16(20, 1, true); // PCM format
  view.setUint16(22, 1, true); // Mono
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeAscii(36, 'data');
  view.setUint32(40, dataSize, true);

  let phase = 0;
  for (let i = 0; i < numSamples; i++) {
    const progress = i / numSamples;
    const freq = startFreqHz + (endFreqHz - startFreqHz) * progress;
    // Fast attack, smooth exponential decay envelope
    const attack = Math.min(1, i / (sampleRate * 0.003));
    const decay = Math.exp(-5.5 * progress);
    const envelope = attack * decay * amplitude;

    phase += (2 * Math.PI * freq) / sampleRate;
    const sample = Math.sin(phase) * envelope;
    const pcmValue = Math.max(-1, Math.min(1, sample));
    view.setInt16(44 + i * 2, Math.floor(pcmValue * 32767), true);
  }

  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  const base64 =
    typeof btoa === 'function'
      ? btoa(binary)
      : Buffer.from(buffer).toString('base64');

  return `data:audio/wav;base64,${base64}`;
}
