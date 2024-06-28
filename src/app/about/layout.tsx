import Layout from '~/components/layout/Layout';
import '~/styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}