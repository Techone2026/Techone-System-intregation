import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { organizationJsonLd } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import { GoogleAnalytics } from "@next/third-parties/google";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import ContactClickTracking from "@/components/ContactClickTracking";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildMetadata({
    title:
      "AV, Security & Network Integration in Columbus, OH | TechOne",
    description:
      "TechOne Installers' Systems Integration division designs and deploys commercial audio/visual, security, digital signage, and structured cabling systems across Central Ohio and surrounding states.",
    path: "",
  }),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <JsonLd data={organizationJsonLd} />
        <Nav />
        {children}
        <Footer />
        <ContactClickTracking />
      </body>
      {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
    </html>
  );
}
