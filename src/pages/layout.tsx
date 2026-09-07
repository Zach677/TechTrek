import { Outlet, ScrollRestoration, useMatches } from 'react-router'
import * as stylex from '@stylexjs/stylex'
import { Footer } from '@/components/Footer'
import { NavBar } from '@/components/NavBar'
import { ReadableArea } from '@/components/ReadableArea'

type RouteHandle = { bare?: boolean }

const styles = stylex.create({
  mainPad: {
    marginTop: '1.5rem',
    marginBottom: '6rem',
  },
})

export default function RootLayout() {
  const isBare = useMatches().some(
    (match) => (match.handle as RouteHandle | undefined)?.bare,
  )

  if (isBare) {
    return (
      <>
        <Outlet />
        <ScrollRestoration />
      </>
    )
  }

  return (
    <>
      <ReadableArea>
        <NavBar />
      </ReadableArea>
      <ReadableArea style={styles.mainPad}>
        <Outlet />
      </ReadableArea>
      <ReadableArea>
        <Footer />
      </ReadableArea>
      <ScrollRestoration />
    </>
  )
}
