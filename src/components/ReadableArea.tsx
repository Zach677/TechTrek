import type { FC, PropsWithChildren } from 'react'
import * as stylex from '@stylexjs/stylex'

type ReadableAreaProps = {
  style?: stylex.StyleXStyles
}

const styles = stylex.create({
  root: {
    marginInline: 'auto',
    maxWidth: '48rem',
    paddingInline: '1.5rem',
  },
})

export const ReadableArea: FC<PropsWithChildren<ReadableAreaProps>> = ({
  style,
  children,
}) => {
  return <div {...stylex.props(styles.root, style)}>{children}</div>
}
