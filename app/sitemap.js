import { services } from "@/lib/services";
import { caseStudies } from "@/lib/caseStudies";
import { verticals } from "@/lib/verticals";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/commercial",
    "/contact",
    "/careers",
    "/work",
    "/industries",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const industryRoutes = verticals.map((vertical) => ({
    url: `${SITE_URL}/industries/${vertical.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const workRoutes = caseStudies.map((project) => ({
    url: `${SITE_URL}/work/${project.slug}`,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...workRoutes];
}
