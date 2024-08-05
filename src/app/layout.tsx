import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { classHelper } from '@/lib/utils/classHelper';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Duckdime',
  description: 'Another app to manage your money',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classHelper(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
