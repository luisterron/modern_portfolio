import { GoogleTagManager } from '@next/third-parties/google';

import './globals.css';
import { LocaleProvider } from '@/lib/locale-context';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({
 children,
}: Readonly<{ children: React.ReactNode }>) {
 return (
  <html lang="en" className="h-full">
   {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
   <body className="h-full">
    <LocaleProvider>{children}</LocaleProvider>
   </body>
  </html>
 );
}
