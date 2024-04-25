import type {Metadata} from 'next';
import {Oregano} from 'next/font/google';
import './globals.css';

const font = Oregano({
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Dragon Ton',
  description: 'Dragon Ton',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  );
}
