// Generates Staples-ready business card files for one person.
//
//   npm i playwright && npx playwright install chromium   (once)
//
// Set CHROME_PATH to a Chromium binary if Playwright's own download is not
// available on the machine.
//   node make-card.mjs "Devan Grigsby" "INSTALLATION LEAD"
//
// Writes print/techone-card-<slug>-STAPLES.pdf (front + back) and
// print/techone-card-<slug>-BACK-300dpi.png.
//
// Built to Staples' spec: 3.75 x 2.25in file, 0.125in bleed on all sides,
// 300 dpi, everything readable inside 3.25 x 1.75in.
import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(HERE, "source");
const OUT = path.join(HERE, "print");

const [name, title] = process.argv.slice(2);
if (!name || !title) {
  console.error('usage: node make-card.mjs "Name" "TITLE"');
  process.exit(1);
}
const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const FONTS =
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Mono:wght@400;500;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap">';

// The .dc.html sources double as canvas artboards, so strip the canvas-only
// bits and inline the images the artboard references by filename.
function plain(file) {
  let body = fs.readFileSync(path.join(SRC, file), "utf8").split("<x-dc>")[1].split("</x-dc>")[0];
  body = body.replace(/<helmet>[\s\S]*?<\/helmet>/g, "").replace(/<sc-if[\s\S]*?<\/sc-if>/g, "");
  for (const img of ["logo-mark.png", "qr.png"]) {
    const b64 = fs.readFileSync(path.join(SRC, img)).toString("base64");
    body = body.replace(new RegExp(`"\\./${img}"`, "g"), `"data:image/png;base64,${b64}"`);
  }
  return body.trim();
}

const front = plain("Front.dc.html");
const back = plain("Back.dc.html")
  .replace("Sheldon Lambert", name)
  .replace("CHIEF EXECUTIVE OFFICER", title);
if (!back.includes(name) || !back.includes(title)) {
  console.error("substitution failed — check the placeholder name/title in source/Back.dc.html");
  process.exit(1);
}

const tmpBack = path.join(HERE, ".tmp-back.html");
const tmpPdf = path.join(HERE, ".tmp-pdf.html");
fs.writeFileSync(tmpBack, `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>html,body{margin:0;padding:0}</style></head><body>${back}</body></html>`);
// Artboards are authored at 96px to the inch inside a 3.125x wrapper for a
// 300 dpi raster; undoing that here keeps PDF text vector at true card size.
fs.writeFileSync(tmpPdf, `<!doctype html><html><head><meta charset="utf-8">${FONTS}<style>
  @page { size: 3.75in 2.25in; margin: 0; }
  html, body { margin: 0; padding: 0; }
  .page { width: 360px; height: 216px; overflow: hidden; break-after: page; }
  .page:last-child { break-after: auto; }
  .page > div { width: 360px !important; height: 216px !important; }
  .page > div > div { transform: none !important; }
</style></head><body><div class="page">${front}</div><div class="page">${back}</div></body></html>`);

fs.mkdirSync(OUT, { recursive: true });
// Environments that ship a browser out of band (CI images, sandboxes) pin a
// build Playwright may not expect, so allow an explicit binary.
const browser = await chromium.launch(
  process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {});
const waitFonts = (p) =>
  p.waitForFunction(() => document.fonts.status === "loaded", null, { timeout: 15000 })
    .catch(() => console.warn("WARN: webfonts did not load — output will use fallback faces"));

const png = await browser.newPage({ viewport: { width: 1125, height: 675 } });
await png.goto(`file://${tmpBack}`);
await waitFonts(png);
await png.waitForTimeout(500);
// A name or title long enough to wrap would silently collide with the line
// below it, so fail loudly instead of shipping broken artwork.
const overflow = await png.evaluate(() =>
  [...document.querySelectorAll("div")]
    .filter((d) => getComputedStyle(d).whiteSpace === "nowrap" && d.scrollWidth > d.clientWidth + 1)
    .map((d) => d.textContent.trim().slice(0, 40)));
if (overflow.length) {
  console.error("OVERFLOW — too long for the safe area:", overflow);
  await browser.close();
  process.exit(1);
}
await (await png.$("body > div")).screenshot({ path: path.join(OUT, `techone-card-${slug}-BACK-300dpi.png`) });
await png.close();

const pdf = await browser.newPage();
await pdf.goto(`file://${tmpPdf}`);
await waitFonts(pdf);
await pdf.waitForTimeout(500);
await pdf.pdf({
  path: path.join(OUT, `techone-card-${slug}-STAPLES.pdf`),
  width: "3.75in", height: "2.25in", printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 }, pageRanges: "1-2",
});
await browser.close();
fs.rmSync(tmpBack); fs.rmSync(tmpPdf);
console.log(`ok: ${name} / ${title} -> print/techone-card-${slug}-STAPLES.pdf`);
