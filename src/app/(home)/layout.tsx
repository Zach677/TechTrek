import type { Metadata } from 'next'
import Layout from '~/components/layout/Layout';
import '~/styles/globals.css';

export const metadata: Metadata = {
  title: 'TechTrek',
  description: 'Happy Day',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
