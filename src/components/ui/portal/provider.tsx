import { createContext, useContext } from 'react'

export const useRootPortal = () => {
  const ctx = useContext(RootPortalContext)
}

const RootPortalContext = createContext<{
  to?: HTMLElement | undefined
}>({
  to: undefined,
})

export const RootPortalProvider = RootPortalContext.Provider
