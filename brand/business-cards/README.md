# Business cards

Print-ready business card artwork, and the generator that produces a card
for a new person without redoing the layout.

## Print spec

Built to Staples' published spec. Any other US printer wants the same numbers.

| | Size | Notes |
| --- | --- | --- |
| Bleed | 3.75 × 2.25 in | The file size. Background and the red bar run off the edge |
| Trim | 3.5 × 2 in | Where the blade lands, ±1/16 in |
| Safe | 3.25 × 1.75 in | Text, logo and QR must all sit inside this |

300 dpi. Staples accepts JPG, PNG or PDF, and recommends CMYK — these files
are RGB, which their uploader converts. That conversion can dull the brand
red (`#c0392b`) slightly, so order a proof before a full run.

## Making a card for someone new

```bash
npm i playwright && npx playwright install chromium   # once
node make-card.mjs "Devan Grigsby" "INSTALLATION LEAD"
```

Writes `print/techone-card-<slug>-STAPLES.pdf` (front + back, vector text —
upload this one) and `print/techone-card-<slug>-BACK-300dpi.png` as a
fallback for uploaders that reject PDFs.

The script refuses to write files if a name or title is long enough to wrap,
because a wrapped line collides with the one below it rather than failing
visibly.

If Playwright's browser download is unavailable, point `CHROME_PATH` at a
Chromium binary.

## Layout

The front carries the brand only, so it never changes. The back carries the
person. Only the name and title differ between cards; phone, email, address
and the review QR are the same on every one.

The QR encodes `https://g.page/r/CTWPGoEyVXwOEBM/review`, which opens the
Google review form directly rather than the profile page. To repoint it,
regenerate `source/qr.png`:

```bash
npx qrcode -o source/qr.png -w 900 -e Q "<url>"
```

## Files

```
source/
  Front.dc.html    brand side — logo lockup, tagline, red bar
  Back.dc.html     person side — Sheldon Lambert is the placeholder the
                     generator substitutes
  PrintSpec.dc.html  the bleed/trim/safe diagram, for reference
  canvas.json      artboard layout for the design canvas
  logo-mark.png    downsampled from public/images/logo-mark.png
  qr.png           Google review QR
print/             generated output, committed so cards can be reordered
                     without regenerating
```

`source/*.dc.html` double as artboards for a Claude Design canvas; the
generator strips the canvas-only wrappers before rendering. Editing them as
plain HTML works fine.
