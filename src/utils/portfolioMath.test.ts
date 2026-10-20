import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateMarqueeOffset,
  calculateMagnetTransform,
  calculateCardScale,
  calculateCharRange,
  calculateScrollPercentage,
  aggregateGitHubRepoStats,
  resolveCursorVariant,
  createSynthesizedWavDataUri,
} from './portfolioMath.ts';

test('calculateMarqueeOffset computes exact scroll offset and opposite row translations', () => {
  const result = calculateMarqueeOffset(500, 800, 1000);
  assert.equal(result.offset, 210);
  assert.equal(result.row1TranslateX, 10);
  assert.equal(result.row2TranslateX, -10);
});

test('calculateMagnetTransform activates inside padding boundary and resets outside', () => {
  const rect = { left: 400, top: 300, width: 200, height: 200 };
  const active = calculateMagnetTransform(590, 460, rect, 150, 3);
  assert.equal(active.isActive, true);
  assert.equal(active.x, 30);
  assert.equal(active.y, 20);

  const inactive = calculateMagnetTransform(900, 900, rect, 150, 3);
  assert.equal(inactive.isActive, false);
  assert.equal(inactive.x, 0);
  assert.equal(inactive.y, 0);
});

test('calculateCardScale computes targetScale and topOffsetPx for 3 and 8 stacking cards', () => {
  const card0 = calculateCardScale(0, 3);
  assert.equal(card0.targetScale, 0.94);
  assert.equal(card0.topOffsetPx, 0);

  const card8First = calculateCardScale(0, 8);
  assert.equal(card8First.targetScale, 0.895);
  assert.equal(card8First.topOffsetPx, 0);

  const card8Last = calculateCardScale(7, 8);
  assert.equal(card8Last.targetScale, 1);
  assert.equal(card8Last.topOffsetPx, 112);
});

test('calculateCharRange partitions [0, 1] scroll progress evenly across characters', () => {
  const first = calculateCharRange(0, 10);
  assert.deepEqual(first, [0, 0.1]);

  const last = calculateCharRange(9, 10);
  assert.deepEqual(last, [0.9, 1]);
});

test('calculateScrollPercentage computes clamped 0-100% document scroll progress', () => {
  assert.equal(calculateScrollPercentage(0, 5000, 1000), 0);
  assert.equal(calculateScrollPercentage(2000, 5000, 1000), 50);
  assert.equal(calculateScrollPercentage(4000, 5000, 1000), 100);
  assert.equal(calculateScrollPercentage(4500, 5000, 1000), 100);
  assert.equal(calculateScrollPercentage(-50, 5000, 1000), 0);
  assert.equal(calculateScrollPercentage(100, 800, 800), 0);
});

test('aggregateGitHubRepoStats totals stars, forks, and computes top language breakdown', () => {
  const sampleRepos = [
    {
      name: 'zyrk',
      html_url: 'https://github.com/kingjethro999/zyrk',
      description: 'Package manager',
      language: 'TypeScript',
      stargazers_count: 5,
      forks_count: 1,
      updated_at: '2026-10-20T00:00:00Z',
    },
    {
      name: '3d-viewre',
      html_url: 'https://github.com/kingjethro999/3d-viewre',
      description: '3D model viewer',
      language: 'TypeScript',
      stargazers_count: 3,
      forks_count: 2,
      updated_at: '2026-10-19T00:00:00Z',
    },
    {
      name: 'goo',
      html_url: 'https://github.com/kingjethro999/goo',
      description: 'Go coding assistant',
      language: 'Go',
      stargazers_count: 4,
      forks_count: 0,
      updated_at: '2026-10-18T00:00:00Z',
    },
    {
      name: 'automator',
      html_url: 'https://github.com/kingjethro999/automator',
      description: 'AI computer operator',
      language: 'Python',
      stargazers_count: 2,
      forks_count: 1,
      updated_at: '2026-10-17T00:00:00Z',
    },
  ];

  const stats = aggregateGitHubRepoStats(sampleRepos);
  assert.equal(stats.totalRepos, 4);
  assert.equal(stats.totalStars, 14);
  assert.equal(stats.totalForks, 4);
  assert.equal(stats.topLanguages[0].language, 'TypeScript');
  assert.equal(stats.topLanguages[0].count, 2);
  assert.equal(stats.topLanguages[0].percentage, 50);
});

test('resolveCursorVariant morphs shape appropriately for default, interactive controls, and project cards', () => {
  const def = resolveCursorVariant({
    enabled: true,
    isInteractiveControl: false,
    isProjectCard: false,
  });
  assert.equal(def.mode, 'default');
  assert.equal(def.width, 34);
  assert.equal(def.height, 34);

  const control = resolveCursorVariant({
    enabled: true,
    isInteractiveControl: true,
    isProjectCard: true, // control takes precedence inside project card
  });
  assert.equal(control.mode, 'control');
  assert.equal(control.width, 56);
  assert.equal(control.height, 56);

  const project = resolveCursorVariant({
    enabled: true,
    isInteractiveControl: false,
    isProjectCard: true,
  });
  assert.equal(project.mode, 'project');
  assert.equal(project.width, 92);
  assert.equal(project.height, 36);
  assert.equal(project.label, 'VIEW');
});

test('createSynthesizedWavDataUri generates valid base64 WAV audio data URI', () => {
  const uri = createSynthesizedWavDataUri(440, 40, 0.2, 660);
  assert.equal(uri.startsWith('data:audio/wav;base64,UklGR'), true);
  assert.equal(uri.length > 100, true);
});
