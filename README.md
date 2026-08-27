# Wise Tax & Accounting Services, LLC — Website

A custom marketing website for Wise Tax & Accounting Services, LLC, a tax
preparation and accounting firm in Lake Charles, LA (owner: Lashawnda
Guillory). Built as a pitch site to show what a professional web presence
could look like for the business.

## What this is

A **static, zero-build, dependency-free** website — plain HTML, CSS, and a
little vanilla JS. No frameworks, no `npm install`, no build step. This is
intentional: it deploys cleanly on Hostinger's Git auto-deploy with nothing
to configure beyond pointing it at this repo.

### Pages

| Page | File |
|---|---|
| Home | `index.html` |
| About | `about.html` |
| Services | `services.html` |
| Reviews | `reviews.html` |
| FAQ | `faq.html` |
| Contact | `contact.html` |
| 404 | `404.html` |

### Structure

```
/
├── index.html
├── about.html
├── services.html
├── reviews.html
├── faq.html
├── contact.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── css/
│   └── style.css        (design system: colors, type, components)
├── js/
│   └── main.js           (mobile nav, scroll reveal, footer year)
└── images/
    ├── favicon.svg
    └── logo-mark.svg
```

## Design

- **Palette:** ink navy (`#0d1b2a`), warm parchment cream (`#f7f1e2`), deep
  pine green (`#1f4038`), a loud vermilion-coral accent (`#ff5a3c`), and a
  restrained metallic gold hairline (`#c9a24b`).
- **Type:** [Fraunces](https://fonts.google.com/specimen/Fraunces) (serif,
  editorial, trustworthy) for headlines, [Manrope](https://fonts.google.com/specimen/Manrope)
  (clean, modern sans) for body text. Loaded from Google Fonts.
- **Layout:** asymmetric hero with rotated "seal" badges, an outline-numeral
  services grid, an editorial pull-quote review section, diagonal/dot-grid
  section treatments, and a full-bleed coral CTA band — built to feel like a
  boutique studio built it, not a template.
- No stock photography — all visual texture is hand-built from CSS/SVG
  (monogram "portrait" panels, seal badges, marquee ticker), so there are no
  licensing concerns and nothing to swap out before launch except real
  business photos, if/when the owner wants to add them.

## Real business data used

Sourced from the business's own public listings (BBB, Birdeye/Google
reviews, Clutch, Facebook) — see commit history for the research:

- Address: 2028 Kirkman St, Lake Charles, LA 70601
- Phone: (337) 478-8481 · Email: wise.account@yahoo.com
- Hours: Mon–Thu 9am–4pm, Fri–Sun closed
- A+ BBB rating; 5.0★ average across 9 Google/Birdeye reviews
- Owner: Lashawnda Guillory
- Services: individual tax prep, business/entity tax (sole prop, LLC,
  partnership, S-corp, nonprofit), bookkeeping/accounting, mobile tax prep
- The four testimonials on the Reviews page are real client reviews
  (lightly trimmed for punctuation), attributed by first name + last
  initial as they appear publicly on Google/Birdeye.

**Before pitching or launching:** confirm these details are still current
with the owner, and swap the `wisetaxllc.com` placeholder domain in
`robots.txt`, `sitemap.xml`, and the JSON-LD in `index.html`/`faq.html` for
the real domain once one is chosen.

## Deploying on Hostinger (Git auto-deploy)

This repo is structured to deploy as-is, with **no build command**:

1. In **hPanel → Websites → [your site] → Advanced → Git**, connect this
   GitHub repository (`Hyperhunk90/Ggggggg`) and select the branch to
   deploy (e.g. `main`).
2. Set the deployment path to `public_html` (Hostinger's default web root).
   Leave the build command empty — there's nothing to build.
3. Enable **auto-deploy** so every push to the selected branch redeploys
   automatically.
4. Once connected, trigger the first deploy manually from hPanel to pull
   the current files in.

That's it — every subsequent `git push` to the deployed branch will update
the live site within a minute or two.

### If you'd rather not use Git deploy

Zip the contents of this repo (not the repo folder itself, its *contents*)
and upload via hPanel's File Manager into `public_html`, or drag-and-drop
via Hostinger's File Manager / FTP.

## Making the contact form actually land in an inbox

Right now the Contact page form uses a `mailto:` action so it works with
zero backend — clicking "Send Message" opens the visitor's email client
pre-filled. That's a fine placeholder, but for a real launch, swap the
`<form>` in `contact.html` to post to a form service instead, e.g.:

- [Web3Forms](https://web3forms.com) or [Formspree](https://formspree.io) —
  free tier, no backend required, submissions land straight in
  `wise.account@yahoo.com`. Just change the `action` attribute and add
  their hidden access-key field per their docs.

## Local preview

No build tooling needed — just open `index.html` in a browser, or serve the
folder locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```
