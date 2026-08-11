import { services } from "@/lib/services";
import { caseStudies } from "@/lib/caseStudies";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap() {
  const staticRoutes = ["", "/about", "/commercial", "/contact", "/work"].map(
    (path) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.7,
    })
  );

  const serviceRoutes = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const workRoutes = caseStudies.map((project) => ({
    url: `${SITE_URL}/work/${project.slug}`,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...workRoutes];
}
