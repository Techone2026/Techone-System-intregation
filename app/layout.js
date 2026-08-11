import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/site";
import { business } from "@/lib/business";

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
  weight: ["400", "500"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "TechOne Installers | Systems Integration — Commercial AV, Security & Network Integration",
  description:
    "TechOne Installers' Systems Integration division designs and deploys commercial audio/visual, security, digital signage, and structured cabling systems across Central Ohio and surrounding states.",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TechOne Installers",
  alternateName: "TechOne Systems Integration",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-mark.png`,
  description:
    "Commercial audio/visual, security, digital signage, structured cabling, business communications, and restaurant technology integration serving Central Ohio and surrounding states.",
  telephone: business.phone,
  email: business.email,
  areaServed: {
    "@type": "State",
    name: "Ohio",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
