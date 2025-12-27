// src/app/layout.js
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

export const metadata = {
  metadataBase: new URL("https://www.vrana.website"),
  title: "V Ranadheer · Product Designer",
  description: "A hands-on builder who designs with restraint and ships with intention. Product Designer and Creative Developer.",

  openGraph: {
    type: "website",
    url: "https://www.vrana.website",
    title: "V Ranadheer · Product Designer",
    description: "A hands-on builder who designs with restraint and ships with intention. Product Designer and Creative Developer.",
    siteName: "vrana.website",
    locale: "en_US",
    images: [
      {
        url: "/my-view.jpg",
        width: 1200,
        height: 630,
        alt: "V Ranadheer - Product Designer Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "V Ranadheer · Product Designer",
    description: "A hands-on builder who designs with restraint and ships with intention. Product Designer and Creative Developer.",
    images: ["/my-view.jpg"],
    creator: "@byvrana",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.className}>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-title" content="V Ranadheer" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="canonical" href="https://www.vrana.website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://github-contributions-api.jogruber.de" />
      </head>
      <body className="font-[var(--font-dm-sans)] text-white">{children}</body>
    </html>
  );
}
