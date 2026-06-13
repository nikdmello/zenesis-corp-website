import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { JsonLd } from "@/components/json-ld";
import { buildPageMetadata, getOrganizationSchemas, siteUrl } from "@/lib/seo";
import { legacyRouteMeta } from "@/lib/legacy-meta";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const organizationSchemas = getOrganizationSchemas();
const googleAnalyticsId =
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? "G-Z43BXSZ609";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...buildPageMetadata({
    title: legacyRouteMeta.home.title,
    description: legacyRouteMeta.home.description,
    path: "/",
  }),
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
        {organizationSchemas.map((schema, index) => (
          <JsonLd key={index} data={schema} />
        ))}
        {children}
        <GoogleAnalytics gaId={googleAnalyticsId} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
