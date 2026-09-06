import { type PropsWithChildren, type JSX, Children, type ReactNode } from 'react'
import * as stylex from '@stylexjs/stylex'
import { colors, fonts, typeScale } from '../../design-system/tokens.stylex'

const styles = stylex.create({
  block: {
    padding: 0,
    backgroundColor: colors.codePlate,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: '0.375rem',
    overflow: 'hidden',
  },
  head: {
    fontFamily: fonts.mono,
    fontSize: typeScale.caption10,
    lineHeight: typeScale.caption10Lh,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: colors.codeMuted,
    paddingBlock: '0.5rem',
    paddingInline: '1rem',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: 'rgba(255, 255, 255, 0.08)',
  },
})

function CodePlate({
  lang,
  children,
}: {
  lang?: string
  children: ReactNode
}) {
  const sx = stylex.props(styles.block)
  return (
    <div
      {...sx}
      className={[sx.className, 'code-block'].filter(Boolean).join(' ')}
    >
      {lang ? <div {...stylex.props(styles.head)}>{lang}</div> : null}
      {children}
    </div>
  )
}

export function FigureCodeBlock(props: PropsWithChildren) {
  if ('data-rehype-pretty-code-figure' in props) {
    const element = Children.only(props.children) as JSX.Element
    const lang = element.props?.['data-language'] as string | undefined
    return (
      <CodePlate lang={lang}>
        <pre className="shiki" {...element.props} />
      </CodePlate>
    )
  }
  return <figure {...props} />
}

export function PreCodeBlock(props: PropsWithChildren) {
  const codeElement = Children.only(props.children) as JSX.Element
  const code = codeElement.props.children as string
  const className = (codeElement.props.className as string) || ''
  const lang = /language-(\w+)/.exec(className)?.[1]
  const codeLines = code.trim().split('\n')
  return (
    <CodePlate lang={lang}>
      <pre className="shiki">
        <code>
          {codeLines.map((l, i) => (
            <span key={i}>{l}</span>
          ))}
        </code>
      </pre>
    </CodePlate>
  )
}
