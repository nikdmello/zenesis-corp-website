import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { legacyRouteMeta } from "@/lib/legacy-meta";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://www.zenesiscorp.com");

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: legacyRouteMeta.home.title,
  description: legacyRouteMeta.home.description,
  openGraph: {
    title: legacyRouteMeta.home.title,
    description: legacyRouteMeta.home.description,
    url: "/",
    siteName: "Zenesis Corporation",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1132,
        height: 311,
        alt: "Zenesis Corporation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: legacyRouteMeta.home.title,
    description: legacyRouteMeta.home.description,
    images: ["/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
