import Footer from './footer/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md bg-base-100 rounded-3xl shadow-lg overflow-hidden relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rotate-45 bg-base-100"></div>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}