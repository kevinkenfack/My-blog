// components/Layout.tsx

import React from 'react';
import Head from 'next/head';
import { getGlobalData } from '../lib/cosmic';
import Generator from 'next/font/local';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Déclarez votre Generator en dehors de la fonction Layout
const sans = Generator({
  src: '../fonts/Generator-Variable.ttf',
  variable: '--font-sans',
});

const Layout = ({ children }) => {
  const generateMetadata = async () => {
    const siteData = await getGlobalData();
    return {
      title: siteData.metadata.site_title,
      description: siteData.metadata.site_tag,
      openGraph: {
        title: "Blog Kevin Kenfack",
        description: "Développeur web et web entrepreneur, je vous livre mes conseils et astuces pour une réussite digitale pertinente.",
        url: "https://blog.kevinkenfack.com",
        siteName: "Blog Kevin Kenfack",
        image: "https://blog.kevinkenfack.com/og-image.jpg",
      }
    };
  };

  const siteData = generateMetadata();

  return (
    <>
      <Head>
        <title>{siteData.title}</title>
        <meta name="description" content={siteData.description} />
        <meta property="og:title" content={siteData.openGraph.title} />
        <meta property="og:description" content={siteData.openGraph.description} />
        <meta property="og:url" content={siteData.openGraph.url} />
        <meta property="og:site_name" content={siteData.openGraph.siteName} />
        <meta property="og:image" content={siteData.openGraph.image} />
        {/* Ajoutez d'autres balises meta au besoin */}
      </Head>
      <html lang="en" className={`${sans.variable} font-sans`}>
      <body className="bg-white dark:bg-zinc-950">
        <Banner />
        <Header name={siteData} />
        {children}
        <Footer />
      </body>
    </html>
    </>
  );
};

export default Layout;
