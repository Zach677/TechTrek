import * as stylex from '@stylexjs/stylex'
import { colors, typeScale } from '../design-system/tokens.stylex'
import { shared } from '../design-system/shared.stylex'

export interface InventoryItem {
  what: string
  retired?: boolean
  note?: string
}

const styles = stylex.create({
  section: {
    marginTop: '3.5rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(13rem, 1fr))',
    gap: '0 2rem',
    marginTop: '0.5rem',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '0.75rem',
    alignItems: 'baseline',
    paddingBlock: '0.55rem',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: colors.separatorSoft,
    fontSize: typeScale.copy15,
    lineHeight: typeScale.copy15Lh,
  },
  what: {
    color: colors.heading,
  },
  retired: {
    textDecoration: 'line-through',
    color: colors.secondary,
  },
  note: {
    flex: 'none',
    fontStyle: 'italic',
    fontSize: typeScale.copy13,
    lineHeight: typeScale.copy13Lh,
    color: colors.accent,
    whiteSpace: 'nowrap',
  },
  dot: {
    flex: 1,
    borderBottomWidth: '1px',
    borderBottomStyle: 'dotted',
    borderBottomColor: colors.separator,
  },
})

export function Inventory({ items }: { items: InventoryItem[] }) {
  return (
    <section {...stylex.props(styles.section)}>
      <span {...stylex.props(shared.regLabel)}>Device inventory</span>
      <div {...stylex.props(styles.grid)}>
        {items.map((item) => (
          <div {...stylex.props(styles.item)} key={item.what}>
            <span
              {...stylex.props(styles.what, item.retired && styles.retired)}
            >
              {item.what}
            </span>
            {item.note ? (
              <span {...stylex.props(styles.note)}>{item.note}</span>
            ) : null}
            <span {...stylex.props(styles.dot)} />
          </div>
        ))}
      </div>
    </section>
  )
}
