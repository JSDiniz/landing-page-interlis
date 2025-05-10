import './globals.css';
import type { Metadata } from 'next';
import { Inter, Ubuntu } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ['400', '500', '600', '700'] });
const ubuntu = Ubuntu({ subsets: ['latin'], variable: '--font-ubuntu', weight: ['400', "500", '700'] });

export const metadata: Metadata = {
  title: 'Interlis',
  description: 'Soluções tecnológicas para o seu laboratório',
    icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ubuntu.variable} text-content-body-80 font-inter font-normal antialiased`}>{children}</body>
    </html>
  );
}
