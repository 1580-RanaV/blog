// src/app/layout.js
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const siteUrl = "https://www.vrana.fun";
const ogImage = `${siteUrl}/share-view.png`; // ensure 1200x630 exists

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "V Rana | self boast page",
  description: "my personal blog :) V Ranadheer.",
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "vrana.fun",
    title: "Check out this profile",
    description: "V Ranadheer — Creative Developer (Andhra Pradesh, India)",
    images: [
      {
        url: ogImage,
        secureUrl: ogImage,
        width: 1200,
        height: 630,
        alt: "V Ranadheer — profile preview",
        type: "image/png",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Check out this profile",
    description: "V Ranadheer — Creative Developer (Andhra Pradesh, India)",
    images: [ogImage],
    // remove site/creator if you don't own the handle
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },              // you have this
      // add these only if you add the files:
      // { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      // { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }], // matches your file
    other: [{ rel: "manifest", url: "/site.webmanifest" }], // keep this one manifest
  },
  applicationName: "V Rana",
  appleWebApp: { title: "V Rana" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="VRana" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
