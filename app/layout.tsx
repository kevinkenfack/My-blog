import React from 'react';
import '../styles/globals.css';
import { getGlobalData } from '../lib/cosmic';
import Generator from 'next/font/local';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Analytics } from "@vercel/analytics/react"

const sans = Generator({
  src: '../fonts/Generator-Variable.ttf',
  variable: '--font-sans',
});

export async function generateMetadata() {
  const siteData = await getGlobalData();
  return {
    title: "Blog Kevin Kenfack",
    description: "Développeur web et entrepreneur, je vous livre mes conseils et astuces pour une réussite digitale pertinente.",
    openGraph: {
      url: "https://blog.kevinkenfack.com",
      images: "https://blog.kevinkenfack.com/og-image.jpg",
      siteName: "Bienvenue sur mon blog",
    }
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteData = await getGlobalData();
  const isDarkMode = false;

  return (
    <html lang="en" className={`${sans.variable} font-sans`}>
      <head>
      <meta name="theme-color" content={isDarkMode ? "#67e8f9" : "#67e8f9"} />
      <script defer src="https://analytics.tagueacademy.com/pixel/rbVoNm7J2ATnf0cQ"></script>
      </head>
      <body className="bg-white dark:bg-zinc-950">
        <Banner />
        <Header name={siteData} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
