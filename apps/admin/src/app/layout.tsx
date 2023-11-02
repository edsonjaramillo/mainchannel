import type { Metadata, Viewport } from 'next';
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
  title: 'Main Channel Brewing Co',
  applicationName: 'Main Channel Brewing Co',
  icons: [],
};

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#123b2d',
  initialScale: 1,
  width: 'device-width',
};

type RootLayoutProps = { children: React.ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
  const htmlClasses = cn(
    font.variable,
    'scrollbar-track-background-900 scroll-smooth scrollbar-thin scrollbar-thumb-primary',
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
