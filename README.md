# AI Explorer Agency — Next.js

Original static HTML/CSS website converted into a full **Next.js 16 (App Router)** project.
Design, copy, images, and behavior match the original site 1:1.

## Project structure

```
app/
  layout.jsx                 Root layout (fonts, metadata, JSON-LD)
  globals.css                Full site stylesheet (ported from style.css)
  page.jsx                   Homepage (hero, about, services, work, team, contact)
  thank-you/page.jsx         Thank-you page shown after form submit
  profiles/[slug]/page.jsx   Dynamic team member profile pages (SSG)
components/
  Navbar.jsx / Footer.jsx                 Homepage navbar & footer
  ProfileNavbar.jsx / ProfileFooter.jsx   Profile-page navbar & footer
  ContactForm.jsx            Contact form (posts to FormSubmit, same as original)
  ServiceIcon.jsx            Inline SVG icons for the services section
  TeamPhoto.jsx               Team photo with broken-image fallback
lib/
  data.js                    All team members, services, and project data
public/assets/                Logo + project screenshots + team photos
```

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Notes

- Team profile pages are statically generated at build time (`generateStaticParams`), so URLs are clean:
  `/profiles/zafar`, `/profiles/ubaid`, `/profiles/hassan`, `/profiles/amna`, `/profiles/chidi-okonkwo`, `/profiles/michael`.
- The contact form still submits to the same FormSubmit.co endpoint used in the original site and redirects to `/thank-you` on success.
- All section anchors (`#about`, `#services`, `#work`, `#team`, `#contact`) work the same as before, including from profile pages (they link back to `/#section`).
- Deploy directly to Vercel — no extra configuration needed.
