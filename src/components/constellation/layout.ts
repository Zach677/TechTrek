import type { Project } from '../../../data/projects'

/** Normalized map coordinates (0–100). Center is (50, 50). */
export type MapPoint = { x: number; y: number }

/** Hand-tuned organic positions matching approved constellation mocks. */
const FEATURED_LAYOUT: Record<string, MapPoint> = {
  mitori: { x: 30, y: 26 },
  'apple-package': { x: 70, y: 30 },
  'modern-uikit': { x: 78, y: 52 },
  'homebrew-star': { x: 54, y: 74 },
  'snell-panel': { x: 22, y: 54 },
}

/**
 * Hand-tuned dense map for the current public set.
 * Two rings, labels hang below the ring — keep ≥18% between anchors.
 */
const DENSE_LAYOUT: Record<string, MapPoint> = {
  'eevee-spotify': { x: 50, y: 14 },
  mitori: { x: 28, y: 28 },
  'zach-skills': { x: 10, y: 34 },
  'apple-package': { x: 72, y: 26 },
  'modern-appkit': { x: 90, y: 36 },
  'snell-panel': { x: 16, y: 52 },
  'modern-uikit': { x: 84, y: 54 },
  'homebrew-star': { x: 50, y: 68 },
  dotfiles: { x: 14, y: 74 },
  'zaxh-org': { x: 86, y: 74 },
  'cet-system': { x: 30, y: 86 },
}

const CENTER: MapPoint = { x: 50, y: 50 }
const FEATURED_MIN_R = 26
const FEATURED_MAX_R = 36
/** Dense max must not shrink below the featured ring. */
const DENSE_MIN_R = 24
const DENSE_MAX_R = 44
const MIN_SEPARATION = 18

export function centerPoint(): MapPoint {
  return CENTER
}

/** Polar angle from center, 0 at top, clockwise — for tab order. */
export function polarAngle(point: MapPoint): number {
  const a = Math.atan2(point.y - CENTER.y, point.x - CENTER.x)
  return (a + Math.PI * 2.5) % (Math.PI * 2)
}

function hashSlug(slug: string): number {
  let h = 2166136261
  for (let i = 0; i < slug.length; i++) {
    h ^= slug.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function clampPoint(point: MapPoint): MapPoint {
  return {
    x: Math.round(Math.min(92, Math.max(8, point.x)) * 10) / 10,
    y: Math.round(Math.min(90, Math.max(12, point.y)) * 10) / 10,
  }
}

/** Even angles + staggered radius so neighbors don't share a ring. */
function polarSlot(
  project: Project,
  index: number,
  total: number,
  minR: number,
  maxR: number,
): MapPoint {
  const h = hashSlug(project.slug)
  const angle =
    (index / Math.max(total, 1)) * Math.PI * 2 - Math.PI / 2
  const t = (h % 100) / 100
  const inner = index % 2 === 0
  const r = inner
    ? minR + (maxR - minR) * (0.15 + t * 0.25)
    : minR + (maxR - minR) * (0.65 + t * 0.3)
  const squash = 0.92
  return clampPoint({
    x: 50 + Math.cos(angle) * r,
    y: 50 + Math.sin(angle) * r * squash,
  })
}

function separate(points: MapPoint[], minDist: number, rounds = 16): MapPoint[] {
  const pts = points.map((p) => ({ ...p }))
  for (let round = 0; round < rounds; round++) {
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[j].x - pts[i].x
        const dy = pts[j].y - pts[i].y
        const d = Math.hypot(dx, dy) || 0.01
        if (d >= minDist) continue
        const push = (minDist - d) / 2
        const nx = dx / d
        const ny = dy / d
        pts[i].x -= nx * push
        pts[i].y -= ny * push
        pts[j].x += nx * push
        pts[j].y += ny * push
      }
      const cdx = pts[i].x - CENTER.x
      const cdy = pts[i].y - CENTER.y
      const cd = Math.hypot(cdx, cdy) || 0.01
      if (cd < 16) {
        const push = 16 - cd
        pts[i].x += (cdx / cd) * push
        pts[i].y += (cdy / cd) * push
      }
    }
  }
  return pts.map(clampPoint)
}

function layoutFeatured(projects: Project[]): MapPoint[] {
  return projects.map((project, index) => {
    const tuned = FEATURED_LAYOUT[project.slug]
    if (tuned) return tuned
    return polarSlot(project, index, projects.length, FEATURED_MIN_R, FEATURED_MAX_R)
  })
}

function layoutDense(projects: Project[]): MapPoint[] {
  const allTuned = projects.every((p) => DENSE_LAYOUT[p.slug])
  if (allTuned) {
    return projects.map((p) => DENSE_LAYOUT[p.slug]!)
  }

  const seeded = projects.map((project, index) => {
    const tuned = DENSE_LAYOUT[project.slug]
    if (tuned) return { ...tuned }
    return polarSlot(project, index, projects.length, DENSE_MIN_R, DENSE_MAX_R)
  })
  return separate(seeded, MIN_SEPARATION)
}

/** Positions for every project in the given mode, same order as `projects`. */
export function layoutProjects(
  projects: Project[],
  mode: 'featured' | 'dense',
): MapPoint[] {
  switch (mode) {
  case 'featured':
    return layoutFeatured(projects)
  case 'dense':
    return layoutDense(projects)
  default: {
    const _exhaustive: never = mode
    return _exhaustive
  }
  }
}

/**
 * Deterministic polar layout for denser maps — organic, not a perfect circle.
 * Avoids center collision and keeps nodes inside a safe ring.
 */
export function layoutProject(
  project: Project,
  index: number,
  total: number,
  mode: 'featured' | 'dense',
): MapPoint {
  switch (mode) {
  case 'featured': {
    const tuned = FEATURED_LAYOUT[project.slug]
    if (tuned) return tuned
    return polarSlot(project, index, total, FEATURED_MIN_R, FEATURED_MAX_R)
  }
  case 'dense': {
    const tuned = DENSE_LAYOUT[project.slug]
    if (tuned) return tuned
    return polarSlot(project, index, total, DENSE_MIN_R, DENSE_MAX_R)
  }
  default: {
    const _exhaustive: never = mode
    return _exhaustive
  }
  }
}

export function projectHref(project: Project): string | undefined {
  const link = project.links[0]
  return link?.url
}

export function projectCallout(project: Project): string {
  if (project.callout) return project.callout
  const raw = project.oneLiner
  if (raw.length <= 42) return raw
  return `${raw.slice(0, 39).trimEnd()}…`
}

/** Prefer callout side with more horizontal room. */
export function calloutSide(point: MapPoint): 'left' | 'right' {
  return point.x >= 50 ? 'right' : 'left'
}
