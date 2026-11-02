# Boston Hood & Duct – Premium Commercial Kitchen Website

A modern, high-performance, fully responsive commercial kitchen hood, exhaust duct, and grease cleaning service website for **Boston Hood & Duct**, based in Boston, Massachusetts, USA.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **React Hook Form + Zod**.

---

## 🚀 Live Demo & Getting Started

### Prerequisites

- Node.js 18+ (tested on Node v20+)
- npm, pnpm, or yarn

### 1. Installation

```bash
# Navigate to project folder
cd boston-hood-and-duct

# Install dependencies
npm install
```

### 2. Development Mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Test

```bash
npm run build
npm run start
```

---

## 🎨 Brand Colors & Design System

The site implements a top-rated American service-business aesthetic with the specified **Red + Dark Navy Blue + White** palette:

| Token | Hex | Usage |
|---|---|---|
| **Primary Dark Navy** | `#0B1F3A` | Header, headings, card borders, footer |
| **Deep Navy** | `#071629` | Hero backdrop, dark sections, mobile drawer |
| **Primary Red** | `#E11D2E` | CTA buttons, accents, icons, badge highlights |
| **Dark Red** | `#B91C2B` | Button hover states, gradients |
| **White** | `#FFFFFF` | Main backgrounds, clean contrast |
| **Light Gray** | `#F4F7FB` | Alternate sections, input surfaces |
| **Slate Gray** | `#64748B` | Body copy, secondary text |
| **Border** | `#E2E8F0` | Dividers, card borders, table rows |

- **Typography**: Google Fonts Inter (sans) & Manrope (headings)
- **Effects**: Interactive before & after comparison slider with drag handle, responsive lightbox zoom modal, animated accordions, and mobile navigation drawer.

---

## 📁 Architecture & File Structure

```text
src/
├── app/
│   ├── layout.tsx                     # Root layout with fonts, metadata, & JSON-LD LocalBusiness schema
│   ├── page.tsx                       # Complete 10-section homepage
│   ├── globals.css                    # Tailwind CSS v4 design tokens and utility classes
│   ├── sitemap.ts                     # Search engine XML sitemap generator
│   ├── robots.ts                      # Crawlers indexing directive
│   ├── about/page.tsx                 # About Us & company mission
│   ├── services/
│   │   ├── page.tsx                   # Complete services catalog & NFPA 96 schedule table
│   │   ├── kitchen-hood-cleaning/     # Deep dive into range hood bare-metal degreasing
│   │   ├── exhaust-duct-cleaning/     # Deep dive into horizontal/vertical duct risers
│   │   └── exhaust-fan-cleaning/      # Deep dive into rooftop upblast blowers
│   ├── gallery/page.tsx               # Before & After gallery with interactive filter & slider
│   ├── reviews/page.tsx               # Verified client feedback & demonstration scorecards
│   ├── blog/page.tsx                  # Commercial fire safety guides & NFPA 96 insights
│   ├── contact/page.tsx               # 24/7 emergency dispatch line & contact form
│   ├── get-a-quote/page.tsx           # Dedicated commercial quote request page
│   ├── privacy-policy/page.tsx        # Privacy policy
│   ├── terms-of-service/page.tsx      # Terms of service
│   └── api/
│       └── quote/route.ts             # Server-side quote API handler with Zod validation
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx                 # Sticky header with scroll transition & mobile drawer
│   │   └── Footer.tsx                 # 4-column navy footer with contact, links & legal
│   ├── home/
│   │   ├── HeroSection.tsx            # Full-width hero with dark overlay & quote launcher
│   │   ├── TrustBar.tsx               # 5-star Google-style rating & 4 trust pillars
│   │   ├── ServicesGrid.tsx           # 6 commercial cleaning service cards (3-col desktop)
│   │   ├── WhyChooseUs.tsx            # 2-column layout with technician visual & 6 features
│   │   ├── BeforeAfterSection.tsx     # Draggable before/after comparison slider & preview cards
│   │   ├── HowItWorks.tsx             # 3-step connected process flow
│   │   ├── TestimonialsSection.tsx    # Navy testimonial carousel with controls
│   │   ├── ServiceAreasSection.tsx    # Local SEO coverage for Boston & Greater Massachusetts
│   │   ├── FaqSection.tsx             # Animated FAQ accordion
│   │   └── CtaBanner.tsx              # High-conversion red & navy call to action
│   ├── services/
│   │   ├── ServiceDetailHero.tsx      # Reusable service hero with badges & quick actions
│   │   └── ServiceProcess.tsx         # Multi-step procedure and operational benefits
│   ├── gallery/
│   │   ├── BeforeAfterSlider.tsx      # Interactive touch/mouse drag comparison component
│   │   └── GalleryGrid.tsx            # Category filtering & lightbox triggers
│   ├── forms/
│   │   ├── QuoteForm.tsx              # React Hook Form + Zod quote request with API states
│   │   └── ContactForm.tsx            # General inquiry submission form
│   └── ui/
│       ├── Button.tsx                 # Button component with variants & loaders
│       ├── SectionHeading.tsx         # Section titles with red highlights
│       ├── Accordion.tsx              # Framer Motion animated accordion
│       ├── Badge.tsx                  # Reusable status & pill badges
│       └── Lightbox.tsx               # High-res modal image viewer
├── data/
│   ├── services.ts                    # Services data & NFPA standards
│   ├── reviews.ts                     # Demonstration reviews & trust ratings
│   ├── faqs.ts                        # Commercial cleaning and fire code answers
│   ├── gallery.ts                     # Before/after projects with grease level info
│   ├── areas.ts                       # Boston neighborhoods & Massachusetts counties
│   └── blog.ts                        # Educational safety & inspection articles
├── lib/
│   ├── utils.ts                       # clsx and tailwind-merge helper
│   └── validation.ts                  # Zod validation schemas
└── types/
    └── index.ts                       # Core TypeScript interfaces
```

---

## 🔒 Quote Request Form & Email Delivery

The contact page includes a quote request form built with **React Hook Form** and **Zod**. It validates required contact and service-location details, supports multiple services with service-specific questions, and accepts up to 5 JPG, PNG, or PDF attachments (10 MB each). The `/api/quote` route validates all fields and file signatures, then sends the request and attachments to the dispatch inbox using the Resend API. Files are not stored on the website server.

Configure these server-only variables in `.env.local` and in the deployment environment. The sender address must be verified with Resend:

```env
RESEND_API_KEY=your_resend_api_key
DISPATCH_NOTIFICATION_EMAIL=dispatch@bostonhoodandduct.com
SENDER_EMAIL=Boston Hood & Duct <quotes@bostonhoodandduct.com>
```

Without `RESEND_API_KEY`, the API reports that submissions are unavailable and the form does not show a false success. Successful submissions receive a reference ID; delivery errors are shown with the dispatch phone number as an alternative.

---

## 🔍 SEO & Local Search Optimization

- **Next.js Metadata API**: Every page defines unique, optimized titles, meta descriptions, Open Graph, and Twitter Cards.
- **Structured Data (JSON-LD)**: Includes a valid `LocalBusiness` schema with Boston address (`100 State Street`), geo-coordinates, telephone, and service areas.
- **Search Engine Assets**: Autogenerated `sitemap.xml` and `robots.txt`.
- **Accessibility & Contrast**: Conforms to WCAG AA color contrast standards.
