import React from 'react';
import Footer from './footer/Footer';
import { StyledButton } from '~/components/ui/button'
import Link from 'next/link';

interface AboutLayoutProps {
  children: React.ReactNode;
}

const AboutLayout: React.FC<AboutLayoutProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen bg-gray-100">
    <header className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <StyledButton className='mt-8'>
          <Link href="/">返回首页</Link>
        </StyledButton>
      </div>
    </header>
    <main className="flex-grow container mx-auto p-4">
      {children}
    </main>
    <Footer />
  </div>
);

export default AboutLayout;