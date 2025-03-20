import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import "./globals.css";
import Layout from "../components/Layout";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Website Pribadi',
  description: 'Website Pribadi untuk menampilkan Proyek dan esai '
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

