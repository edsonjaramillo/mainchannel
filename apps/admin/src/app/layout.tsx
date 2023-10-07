import type { Metadata } from 'next';
import { Inter as NextFont } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import { cn } from 'ui/src/lib/tw';

import './globals.css';

const font = NextFont({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-next',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  applicationName: 'Create Next App',
  colorScheme: 'light',
  themeColor: '#123b2d',
  viewport: 'width=device-width, initial-scale=1',
  icons: [],
};

type RootLayoutProps = { children: React.ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
  const htmlClasses = cn(
    font.variable,
    'scrollbar-thin scrollbar-track-background-900 scrollbar-thumb-primary scroll-smooth',
  );

  return (
    <html className={htmlClasses} lang="en">
      <body className="relative overflow-x-hidden bg-grayscale-50 selection:bg-primary-200">
        <main id="main-content">{children}</main>
        <Toaster toastOptions={{ duration: 3000 }} position="top-right" />
      </body>
    </html>
  );
}
