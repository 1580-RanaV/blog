// app/layout.tsx (or .jsx with objects the same)
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
const ogImage = `${siteUrl}/share-view.png`;

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
        url: ogImage,          // absolute URL
        secureUrl: ogImage,
        width: 1200,           // good OG size
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
    site: "@vrana_fun",       // if you have one, else remove
    creator: "@vrana_fun",
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  applicationName: "V Rana",
  appleWebApp: { title: "V Rana" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
