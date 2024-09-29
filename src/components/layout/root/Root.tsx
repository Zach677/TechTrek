import { Footer } from '../footer/Footer'

export const Root: Component = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-base-200">
      <main className="flex grow items-center justify-center px-4 py-12">
        <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-base-100 shadow-lg">
          <div className="absolute left-1/2 top-0 size-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-base-100" />
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
