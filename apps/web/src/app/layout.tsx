import type { Metadata, Viewport } from 'next';
import { Inter as NextFont } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import SkipToMainContent from 'ui/src/SkipToMainContent';
import { cn } from 'ui/src/lib/tw';
import { ENV } from 'utils/src/env';
import { SEO } from 'utils/src/metadata/SEO';

import DesktopNavigation from '../components/shared/DesktopNavigation';
import Footer from '../components/shared/Footer';
import MobileNavigation from '../components/shared/MobileNavigation';
import { Modal } from '../components/shared/Modal';
import './globals.css';

const font = NextFont({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-next',
});

const url = new URL(ENV.URL);

export const metadata: Metadata = {
  title: 'Main Channel Brewing Co',
  applicationName: 'Main Channel Brewing Co',
  openGraph: {
    title: 'Main Channel Brewing Co',
    description: 'Main Channel Brewing Co Logo',
    images: ['https://media.graphassets.com/COyXb8wS7eWHZSdoZdzg'],
    type: 'website',
    siteName: 'Main Channel Brewing Company',
    emails: ['mainchannelbeer@gmail.com'],
    url,
    countryName: 'USA',
  },
  icons: SEO.icons(),
  metadataBase: new URL(url),
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
        <SkipToMainContent />
        <DesktopNavigation />
        <MobileNavigation />
        <main id="main-content">{children}</main>
        <Footer />
        <Toaster toastOptions={{ duration: 3000 }} position="top-right" />
        <Modal />
      </body>
    </html>
  );
}
