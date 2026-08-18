# Techone Systems Integration

A multi-city marketing website for Techone Systems Integration, built with
Next.js. Each city gets its own landing page generated from a single
template + a shared data file, so adding a new city doesn't mean copying a
whole page.

## Status

Freshly scaffolded — content is placeholder throughout (bracketed text like
`[PHONE NUMBER]`). Not yet deployed anywhere.

## Structure

```
app/
  page.js                 — homepage: hero, services, city list
  locations/[slug]/page.js — city landing page template
                             (one static page generated per entry in
                             lib/cities.js)
  layout.js                — root layout, wraps every page in Nav + Footer

components/
  Nav.js                   — site header/nav
  Footer.js                — site footer, contact placeholder

lib/
  cities.js                — the list of cities; add a city here to get a
                              new /locations/<slug> page automatically
  services.js               — the service list shown on the homepage and
                              every city page
```

## Adding a city

Add an entry to the `cities` array in `lib/cities.js` (slug, display name,
blurb, phone). A page at `/locations/<slug>` is generated automatically —
no new files needed.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Analytics

GA4 is wired up but stays off until a measurement ID is provided, so local
dev and previews send nothing.

To turn it on in production, add a repository secret named
`NEXT_PUBLIC_GA_ID` (value looks like `G-XXXXXXXXXX`, from GA4 Admin >
Data Streams). The deploy workflow passes it into `npm run build`. The site
is a static export, so the ID is baked in at build time — changing the
secret requires a redeploy, not just a page refresh.

To test locally:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX npm run build
```

Events sent (see `lib/analytics.js`):

| Event | Fires when |
| --- | --- |
| `generate_lead` | Contact form accepted by Formspree. Mark this as a key event in GA4. |
| `phone_click` | Any `tel:` link clicked, with the page it happened on. |
| `email_click` | Any `mailto:` link clicked. |
| `careers_application` | Careers form accepted — kept separate so applicants never count as sales leads. |
| `form_error` | A form POST failed. A spike here means leads are being lost. |

## Next steps

- Replace all bracketed placeholder content (tagline, services, city
  details, address, phone, email) with the real business details.
- Decide on real service area cities.
- Pick a hosting target (e.g. Vercel or Netlify) and deploy.
- Add a real logo/branding once available.
