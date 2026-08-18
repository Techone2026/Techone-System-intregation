import { SITE_URL } from "@/lib/site";

const OG_IMAGE = `${SITE_URL}/images/og-default.jpg`;

// Shared metadata builder so every page gets a canonical URL and matching
// Open Graph / Twitter Card data instead of just a <title> tag.
export function buildMetadata({
  title,
  description,
  path = "",
  type = "website",
}) {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "TechOne Installers",
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "TechOne Installers — Systems Integration",
        },
      ],
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}
