import { notFound } from "next/navigation";
import { cities, getCity } from "@/lib/cities";
import { services } from "@/lib/services";

export function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }));
}

export function generateMetadata({ params }) {
  const city = getCity(params.slug);
  if (!city) return {};
  return {
    title: `${city.name} | Techone Systems Integration`,
    description: city.blurb,
  };
}

export default function CityPage({ params }) {
  const city = getCity(params.slug);
  if (!city) notFound();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col gap-12">
      <section className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">
          Techone Systems Integration — {city.name}
        </h1>
        <p className="text-lg opacity-80 max-w-2xl">{city.blurb}</p>
        <p className="text-sm opacity-70">Call us: {city.phone}</p>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">
          Services in {city.name}
        </h2>
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
    </div>
  );
}
