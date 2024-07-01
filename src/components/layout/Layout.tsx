import Footer from './footer/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-base-200">
      <main className="flex flex-grow items-center justify-center px-4 py-12">
        <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-base-100 shadow-lg">
          <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 transform bg-base-100"></div>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
