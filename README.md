# Divyal Padalkar | DevOps Portfolio

**Production-Ready Next.js 15 Portfolio** | **Vercel Deployed** | **DevOps Focused**

---

## Project Overview

A premium, animated DevOps portfolio showcasing enterprise-scale infrastructure projects with:
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS with custom cyan-violet-lime palette
- Framer Motion animations on every section
- Three.js 3D infinity loop in hero
- Responsive & SEO-optimized
- Vercel-ready deployment

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with Lenis scroll
│   └── globals.css         # Global styles & Tailwind
├── components/
│   ├── navbar/Navbar.tsx   # Sticky nav with social links
│   ├── hero/               # Hero + 3D canvas + background
│   ├── about/About.tsx     # Bio + animated counters
│   ├── experience/         # Timeline component
│   ├── projects/           # Tabbed project grid + cards
│   ├── skills/Skills.tsx   # Categorized skill tags
│   ├── certifications/     # Credential cards
│   ├── contact/Contact.tsx # Contact form + info
│   ├── bits/BlobCursor.tsx # Custom cursor effect
│   ├── Footer.tsx          # Multi-column footer
│   ├── CountUp.tsx         # Counter animation
│   └── Icons.tsx           # Brand icon SVGs
├── public/
│   ├── resume.pdf          # Your resume
│   ├── og-image.png        # Open Graph image
│   └── favicon.ico         # Favicon
├── package.json
├── tailwind.config.ts
├── postcss.config.mjs
├── vercel.json
├── .env.example
├── .gitignore
└── CHECKLIST.md
```

## Quick Start

```bash
npm install
npm run dev
# Opens http://localhost:3000
```

## Production Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push to GitHub
2. Import repo in [vercel.com](https://vercel.com)
3. Deploy (zero config - Next.js auto-detected)
4. Set env variables in Vercel dashboard

## Customization

| Section | File |
|---------|------|
| Hero text | `components/hero/Hero.tsx` |
| Bio + stats | `components/about/About.tsx` |
| Experience | `components/experience/Experience.tsx` |
| Projects | `components/projects/Projects.tsx` |
| Skills | `components/skills/Skills.tsx` |
| Contact info | `components/contact/Contact.tsx` |
| Social links | `components/navbar/Navbar.tsx`, `components/Footer.tsx` |
| Colors | `tailwind.config.ts` |

## Tech Stack

React 19, Next.js 15, TypeScript, Tailwind CSS 3, Framer Motion 11, Three.js, Lenis, Lucide
