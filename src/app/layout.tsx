import type { Metadata } from "next";
import { Outfit, Rubik } from "next/font/google";
import "./globals.css";

import { siteConfig } from "@/config/site";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.fullName,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: siteConfig.images.logo,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.images.og,
        width: 1200,
        height: 630,
        alt: siteConfig.fullName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.images.og],
  },
};

import { UIProvider } from "@/context/UIContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.fullName,
    "image": siteConfig.url + siteConfig.images.hero,
    "@id": siteConfig.url,
    "url": siteConfig.url,
    "telephone": siteConfig.phone.display,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.55052,
      "longitude": -46.633308
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      siteConfig.social.instagram
    ]
  };

  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${rubik.variable} h-full antialiased`}
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="I.R.F. Turismo" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <UIProvider>{children}</UIProvider>
      </body>
    </html>
  );
}
