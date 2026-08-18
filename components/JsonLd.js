// Renders a JSON-LD block. Keeps the dangerouslySetInnerHTML boilerplate in
// one place instead of repeating it on every page that needs structured data.
// `<` is escaped per the Next.js JSON-LD guide so a stray HTML tag in the
// payload can't break out of the script element.
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
