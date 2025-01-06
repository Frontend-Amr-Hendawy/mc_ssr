import "./globals.css";
import Head from "next/head";
import {useRouter} from 'next/router';


import {  IBM_Plex_Sans, IBM_Plex_Sans_Arabic } from "next/font/google";


import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

import en from "../../messeges/en.json";
import ar from "../../messeges/ar.json";

const ibm_plex_arabic = IBM_Plex_Sans_Arabic({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "arabic"],
  display: "swap",
});

const ibm_plex_sans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});


export default async function LocaleLayout({
  children,
  params: {locale}
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

 
  return (
    <html lang={locale} dir={locale === "ar"? "rtl" : "ltr"}>
        <Head>
          {/* Facebook Domain Verification */}
          <meta name="facebook-domain-verification" content="kkrd506y1ao3crgzgm7wxpi08nhfsv" />
      </Head>
      <body className={`${fontClass} text-sm antialiased bg-primary-10 text-primary-100 min-h-screen flex flex-col relative`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}