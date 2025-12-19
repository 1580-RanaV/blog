// src/app/layout.js
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.vrana.website"),
  title: "V Ranadheer",
  description: "Creative developer portfolio & work.",

  openGraph: {
    type: "website",
    url: "https://www.vrana.website",
    title: "V Ranadheer · Portfolio",
    description: "Creative developer portfolio & work.",
    siteName: "vrana.website",
    images: [
      {
        url: "/my-view.jpg",
        width: 1200,
        height: 630,
        alt: "V Ranadheer cover",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "V Ranadheer · Portfolio",
    description: "Creative developer portfolio & work.",
    images: ["/my-view.jpg"],
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
    <html lang="en" className={manrope.className}>
      <head>
        <meta name="theme-color" content="#0c0c0f" />
        <meta name="apple-mobile-web-app-title" content="V Ranadheer" />
      </head>
      <body className="font-[var(--font-manrope)] text-white">{children}</body>
    </html>
  );
}
