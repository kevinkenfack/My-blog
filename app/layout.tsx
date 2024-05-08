// pages/_app.tsx

import React from 'react';
import Head from 'next/head';
import { getGlobalData } from '../lib/cosmic';
import Generator from 'next/font/local';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Footer from '../components/Footer';

const sans = Generator({
  src: '../fonts/Generator-Variable.ttf',
  variable: '--font-sans',
});

export async function generateMetadata() {
  const siteData = await getGlobalData();
  return {
    title: siteData.metadata.site_title,
    description: siteData.metadata.site_tag,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteData = await getGlobalData();

  return (
    <html lang="en" className={`${sans.variable} font-sans`}>
      <Head>
        <meta property="og:title" content="Blog Kevin Kenfack" />
        <meta property="og:description" content="Développeur web et web entrepreneur, je vous livre mes conseils et astuces pour une réussite digitale pertinente." />
        <meta property="og:url" content="https://blog.kevinkenfack.com" />
        <meta property="og:site_name" content="Blog Kevin Kenfack" />
        <meta property="og:image" content="https://blog.kevinkenfack.com/og-image.jpg" />
        {/* ...autres balises meta... */}
      </Head>
      <body className="bg-white dark:bg-zinc-950">
        <Banner />
        <Header name={siteData} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
