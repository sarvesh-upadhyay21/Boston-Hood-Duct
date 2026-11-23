# Boston Hood & Duct - SEO Handoff Document

**Prepared for:** SEO Team
**Website:** https://bostonhoodandduct.com/
**Framework:** Next.js 16 App Router with static export
**Repository:** Boston-Hood-Duct
**Last reviewed:** November 23, 2026

## 1. Project Overview

This document contains the complete current SEO implementation inventory, canonical URL list, sitemap and robots configuration, structured data inventory, validation status, and remaining SEO-team tasks.

The website is configured for static export. Public production routes are prerendered, and crawlers can access the generated sitemap and robots files.

## 2. Canonical URLs

| Page | Canonical URL |
|---|---|
| Homepage | https://bostonhoodandduct.com/ |
| About | https://bostonhoodandduct.com/about/ |
| Kitchen Hood Cleaning | https://bostonhoodandduct.com/services/kitchen-hood-cleaning/ |
| Air Duct Cleaning | https://bostonhoodandduct.com/services/air-duct-cleaning/ |
| Who We Serve | https://bostonhoodandduct.com/who-we-serve/ |
| Blog | https://bostonhoodandduct.com/blog/ |
| Contact | https://bostonhoodandduct.com/contact |
| Services | https://bostonhoodandduct.com/services |
| Dryer Vent Cleaning | https://bostonhoodandduct.com/services/dryer-vent-cleaning |
| Exhaust Duct Cleaning | https://bostonhoodandduct.com/services/exhaust-duct-cleaning |
| Exhaust Fan Cleaning | https://bostonhoodandduct.com/services/exhaust-fan-cleaning |
| Privacy Policy | https://bostonhoodandduct.com/privacy-policy |
| Terms of Service | https://bostonhoodandduct.com/terms-of-service |

The requested canonical URLs for the homepage, About, Kitchen Hood Cleaning, Air Duct Cleaning, Who We Serve, and Blog are implemented correctly.

Recommended cleanup: normalize secondary canonical URLs to trailing-slash URLs consistently with the site's `trailingSlash: true` configuration.

## 3. Metadata Implementation

All main public pages use Next.js `Metadata` exports.

| Route | Implementation file |
|---|---|
| `/` | `src/app/page.tsx` |
| `/about/` | `src/app/about/page.tsx` |
| `/services/` | `src/app/services/page.tsx` |
| `/services/kitchen-hood-cleaning/` | `src/app/services/kitchen-hood-cleaning/page.tsx` |
| `/services/air-duct-cleaning/` | `src/app/services/air-duct-cleaning/page.tsx` |
| `/services/dryer-vent-cleaning/` | `src/app/services/dryer-vent-cleaning/page.tsx` |
| `/services/exhaust-duct-cleaning/` | `src/app/services/exhaust-duct-cleaning/page.tsx` |
| `/services/exhaust-fan-cleaning/` | `src/app/services/exhaust-fan-cleaning/page.tsx` |
| `/who-we-serve/` | `src/app/who-we-serve/page.tsx` |
| `/blog/` | `src/app/blog/page.tsx` |
| `/blog/[slug]/` | `src/app/blog/[slug]/page.tsx` |
| `/contact/` | `src/app/contact/page.tsx` |
| `/privacy-policy/` | `src/app/privacy-policy/page.tsx` |
| `/terms-of-service/` | `src/app/terms-of-service/page.tsx` |

The following metadata elements are configured globally in `src/app/layout.tsx`:

- Metadata base URL
- Default title
- Title template
- Site description
- Homepage canonical
- Keywords
- Authors
- Creator
- Publisher
- Format detection
- Open Graph metadata
- Twitter/X card metadata
- Index/follow robots directives
- Googlebot preview settings
- Theme and viewport settings

The `/get-a-quote/` route redirects to `/contact#contact-form`, so it should not be submitted as a separate indexable page.

## 4. Robots.txt

Production location:

`https://bostonhoodandduct.com/robots.txt`

Generated configuration file:

`src/app/robots.ts`

Current output:

```txt
User-Agent: *
Allow: /

Sitemap: https://bostonhoodandduct.com/sitemap.xml
```

The `/api/` disallow rule was removed because the requested robots configuration only allows all paths.

## 5. XML Sitemap

Production location:

`https://bostonhoodandduct.com/sitemap.xml`

Generated configuration file:

`src/app/sitemap.ts`

The sitemap currently includes:

- Homepage
- About
- Kitchen Hood Cleaning
- Air Duct Cleaning
- Who We Serve
- Blog listing
- All generated blog article URLs

The following existing indexable routes are not currently included in the sitemap and should be added during the next SEO implementation pass:

- `/contact/`
- `/services/`
- `/services/dryer-vent-cleaning/`
- `/services/exhaust-duct-cleaning/`
- `/services/exhaust-fan-cleaning/`
- `/privacy-policy/`
- `/terms-of-service/`

URL list for the sitemap:

```txt
https://bostonhoodandduct.com/
https://bostonhoodandduct.com/about/
https://bostonhoodandduct.com/services/
https://bostonhoodandduct.com/services/kitchen-hood-cleaning/
https://bostonhoodandduct.com/services/air-duct-cleaning/
https://bostonhoodandduct.com/services/dryer-vent-cleaning/
https://bostonhoodandduct.com/services/exhaust-duct-cleaning/
https://bostonhoodandduct.com/services/exhaust-fan-cleaning/
https://bostonhoodandduct.com/who-we-serve/
https://bostonhoodandduct.com/blog/
https://bostonhoodandduct.com/contact/
https://bostonhoodandduct.com/privacy-policy/
https://bostonhoodandduct.com/terms-of-service/
```

The `/get-a-quote/` route should remain excluded because it redirects to the contact form.

## 6. Blog URLs

| Blog Article | Canonical URL |
|---|---|
| Commercial Kitchen Hood Cleaning in Boston | https://bostonhoodandduct.com/blog/nfpa-96-boston-restaurant-guide/ |
| Exhaust Fan Failing Warning Signs | https://bostonhoodandduct.com/blog/5-signs-exhaust-fan-is-failing/ |
| Hood Cleaning and Insurance Premiums | https://bostonhoodandduct.com/blog/how-clean-hoods-lower-insurance-premiums/ |
| Preparing for a Boston Fire Marshal Inspection | https://bostonhoodandduct.com/blog/preparing-for-boston-fire-marshal-inspection/ |

Blog metadata titles and descriptions are generated dynamically from `src/data/blog.ts`.

Recommended enhancement:

- Add `Article` or `BlogPosting` structured data to individual articles.
- Add `author`, `datePublished`, `dateModified`, `headline`, `description`, `image`, and `mainEntityOfPage`.
- Add breadcrumb structured data to article pages.

## 7. Structured Data

### Global Structured Data

Configured in `src/app/layout.tsx`:

- `@type`: `LocalBusiness`
- Name
- Image
- Telephone
- Email
- Postal address
- Geographic coordinates
- Website URL
- Price range
- Areas served
- Opening hours

### Who We Serve Structured Data

Configured in `src/app/who-we-serve/page.tsx`:

- `BreadcrumbList`
- `Service`
- `LocalBusiness`
- `AdministrativeArea`
- `OfferCatalog`
- `Offer`
- `FAQPage`
- `Question`
- `Answer`

### Structured Data Not Yet Present

- Individual `BlogPosting` or `Article` markup
- Blog `BreadcrumbList`
- Organization/WebSite schema
- Service-level schema on individual service pages
- FAQ schema on other FAQ pages
- Review/AggregateRating schema, only if genuine review data is available and policy-compliant

Do not add fabricated reviews, ratings, or prices.

## 8. On-Page SEO Configuration

Implementation includes:

- Semantic H1 elements on main pages
- Page-specific metadata titles
- Page-specific descriptions
- Section headings and supporting H2/H3 content
- Internal navigation links
- Breadcrumb or back-navigation links on blog articles
- Image ALT attributes
- Mobile responsive layouts
- Static prerendered HTML
- HTTPS canonical metadata

The SEO team should run an on-page crawler to confirm:

- Exactly one H1 per page
- No missing H1, title, or meta description
- No duplicate titles or descriptions
- No missing ALT attributes
- No accidental indexable thin pages
- No broken internal links
- No redirect chains
- No orphaned URLs

## 9. Technical Configuration

Relevant configuration:

`next.config.ts`

- Static export enabled
- Trailing slashes enabled
- Next.js images are unoptimized for static hosting
- Remote image domains are allowlisted

The production build was validated with:

```bash
npm run build
```

Build result:

- TypeScript validation passed
- Production compilation passed
- All static routes generated successfully
- Sitemap route generated
- Robots route generated

## 10. Search Console Tasks

Google Search Console:

1. Verify the domain property.
2. Submit `https://bostonhoodandduct.com/sitemap.xml`.
3. Request indexing for priority pages.
4. Monitor the Coverage or Indexing reports.
5. Check canonical selection and duplicate URL reports.
6. Review structured data enhancement reports.
7. Review Core Web Vitals.
8. Review mobile usability.
9. Review security issues.
10. Set preferred HTTPS/domain behavior if not already configured.

Priority indexing order:

1. Homepage
2. Kitchen Hood Cleaning
3. Air Duct Cleaning
4. Dryer Vent Cleaning
5. Exhaust Duct Cleaning
6. Exhaust Fan Cleaning
7. About
8. Who We Serve
9. Blog
10. Contact

## 11. Bing Webmaster Tasks

1. Verify the domain.
2. Submit `https://bostonhoodandduct.com/sitemap.xml`.
3. Request indexing for important URLs.
4. Review crawl and index reports.
5. Import Google Search Console data if available.

## 12. Analytics and Tracking

The SEO team should verify or add:

- Google Analytics 4
- Google Tag Manager
- Google Search Console integration
- Bing Webmaster verification
- Conversion tracking for phone clicks
- Conversion tracking for email clicks
- Contact form submissions
- Quote-related form submissions
- Internal CTA clicks
- Cross-domain tracking if applicable

Tracking should be implemented through the site's consent and privacy requirements.

## 13. Deployment Verification Checklist

Verify the following after deployment:

- `https://bostonhoodandduct.com/robots.txt` returns HTTP 200.
- `https://bostonhoodandduct.com/sitemap.xml` returns HTTP 200.
- Homepage returns HTTP 200.
- All canonicals return HTTP 200.
- Sitemap URLs match canonical or preferred URLs.
- No unintended page is blocked in robots.txt.
- Every page has exactly one canonical tag.
- Canonicals use HTTPS.
- Canonicals use the correct trailing slash format.
- No canonical points to a redirect or 404.
- No indexable page is missing a title or description.
- Static HTML contains visible H1 content.
- Structured data parses without errors.
- Open Graph previews display correctly.
- Twitter/X card previews display correctly.
- Mobile viewport rendering is correct.
- No broken internal or external links remain.
- No redirect chains exist.
- No unintended noindex directives exist.

## 14. External Preview Tools

Use these tools after deployment:

- Google Rich Results Test
- Google Search Console URL Inspection
- Facebook Sharing Debugger
- LinkedIn Post Inspector
- X Card Validator
- Google PageSpeed Insights
- Lighthouse
- Schema.org validator
- Screaming Frog or an equivalent crawler

## 15. Remaining Development Tasks

Before final SEO launch, development should:

1. Add missing indexable routes to `src/app/sitemap.ts`.
2. Normalize all secondary canonical URLs to trailing-slash URLs.
3. Add metadata to any future `/get-a-quote/` page if it stops redirecting.
4. Add `BlogPosting` or `Article` structured data to blog details.
5. Add article breadcrumbs.
6. Add Organization and WebSite schema globally if accepted by the team.
7. Add service structured data to each service page.
8. Validate and update the global LocalBusiness structured data.
9. Ensure Google Business Profile data matches the website address and phone number.
10. Verify image sizing and lazy-loading behavior.
11. Add final redirect rules if hosting/CDN configuration requires them.

## 16. Final SEO Delivery Statement

The core Next.js SEO foundation is implemented:

- Canonical metadata
- Page metadata
- Robots directive
- XML sitemap
- Open Graph metadata
- Twitter/X card metadata
- Local business structured data
- Page and service structured data
- Semantic headings
- Static, crawlable output

The remaining items listed in this document should be completed by the development and SEO teams after deployment.
