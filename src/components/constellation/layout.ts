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

const CENTER: MapPoint = { x: 50, y: 50 }

export function centerPoint(): MapPoint {
  return CENTER
}

function hashSlug(slug: string): number {
  let h = 2166136261
  for (let i = 0; i < slug.length; i++) {
    h ^= slug.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
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
  if (mode === 'featured' && FEATURED_LAYOUT[project.slug]) {
    return FEATURED_LAYOUT[project.slug]
  }

  const h = hashSlug(project.slug)
  const golden = 2.399963229728653 // ≈ golden angle in radians
  const baseAngle = (index * golden + (h % 360) * 0.0174532925) % (Math.PI * 2)
  // Radius band: featured ring ~28–36; dense ring expands with count
  const minR = mode === 'featured' ? 26 : 18
  const maxR = mode === 'featured' ? 36 : Math.min(42, 16 + total * 1.4)
  const t = total <= 1 ? 0.5 : index / Math.max(total - 1, 1)
  const radius = minR + (maxR - minR) * (0.35 + 0.65 * ((h % 100) / 100))
  // Slight radial jitter so it isn't a clean spiral
  const jitter = ((h >> 8) % 7) - 3
  const r = Math.min(maxR, Math.max(minR, radius + jitter * 0.4 + t * 2))

  const x = 50 + Math.cos(baseAngle) * r
  const y = 50 + Math.sin(baseAngle) * r * 0.92 // slight vertical squash
  return {
    x: Math.round(Math.min(92, Math.max(8, x)) * 10) / 10,
    y: Math.round(Math.min(90, Math.max(12, y)) * 10) / 10,
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
