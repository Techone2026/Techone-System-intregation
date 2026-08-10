import Link from "next/link";
import { cities } from "@/lib/cities";
import { services } from "@/lib/services";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col gap-20">
      <section className="flex flex-col gap-4 text-center py-12">
        <h1 className="text-4xl font-bold">Techone Systems Integration</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">
          [Placeholder tagline — one or two sentences describing what Techone
          Systems Integration does and who it serves.]
        </p>
      </section>

      <section id="services" className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Services</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="border border-black/10 dark:border-white/10 rounded-lg p-5"
            >
              <h3 className="font-semibold mb-1">{service.name}</h3>
              <p className="text-sm opacity-70">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="locations" className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Locations</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${city.slug}`}
              className="border border-black/10 dark:border-white/10 rounded-lg p-5 hover:border-black/30 dark:hover:border-white/30 transition-colors"
            >
              <h3 className="font-semibold mb-1">{city.name}</h3>
              <p className="text-sm opacity-70">{city.blurb}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
