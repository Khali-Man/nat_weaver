# Nat Weaver — Marriage Celebrant Website

A Next.js 16 website for Nat Weaver, Marriage Celebrant, Tasmania.

## Stack

- **Next.js 16** (App Router)
- **React 19**
- Plain CSS-in-JS via `<style>` tags (no Tailwind, no CSS Modules)
- Google Fonts: Playfair Display + Jost

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, about teaser, testimonial, stories preview, CTA |
| `/about` | Nat's story, beliefs, credentials |
| `/ceremonies` | Ceremony types, process steps, what's included |
| `/stories` | Filterable photo grid of wedding stories |
| `/kind-words` | Google review testimonials |
| `/faq` | Accordion FAQ |
| `/contact` | Enquiry form + direct contact details |

## Project Structure

```
nat-weaver-celebrant/
├── app/
│   ├── layout.jsx          # Root layout (Nav, Footer, GlobalStyles)
│   ├── globals.css
│   ├── page.jsx            # Home
│   ├── about/page.jsx
│   ├── ceremonies/page.jsx
│   ├── stories/page.jsx
│   ├── kind-words/page.jsx
│   ├── faq/page.jsx
│   └── contact/page.jsx
├── components/
│   ├── GlobalStyles.jsx    # All CSS injected as a <style> tag
│   ├── Nav.jsx             # Fixed nav with mobile drawer
│   ├── Footer.jsx
│   ├── MobileCtaBanner.jsx # Fixed bottom CTA on mobile
│   └── useReveal.js        # IntersectionObserver scroll-reveal hook
├── next.config.js
└── package.json
```

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for Production

```bash
npm run build
npm start
```

## Customisation Notes

- **Images**: Currently using Unsplash placeholder URLs. Replace with real photography in each page file.
- **Contact form**: The form shows a success state on submit. Wire it up to an email service (e.g. Resend, Formspree, or a Next.js API route) for production.
- **Fonts**: Loaded via Google Fonts CDN in GlobalStyles.jsx. For production, consider using next/font for self-hosting.
- **Metadata**: Update app/layout.jsx metadata export with final SEO copy.
