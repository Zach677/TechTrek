import React, { type ReactNode } from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-gray-100">
    <Header />
    <main className="flex-grow container mx-auto p-4">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;