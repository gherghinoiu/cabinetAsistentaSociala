## 1. PROJECT IDENTITY



- **Project name:** Presentation website for a **Cabinet Individual de Asistență Socială (CIAS)**

- **Language:** Romanian (all content, meta tags, alt texts, structured data descriptions — everything user-facing must be in Romanian)

- **Domain:** Must be a `.ro` domain (strongly preferred for Romanian local SEO)

- **Tech stack:** Pure static HTML5, CSS3, vanilla JavaScript — NO frameworks, NO CMS, NO build tools

- **Contact form:** Single contact form (the only interactive element), sent via a free third-party service (Formspree, Web3Forms, or EmailJS)

- **Development environment:** Windows 11, VS Code, local browser preview

- **Hosting target:** Static hosting (Netlify, GitHub Pages, or any Romanian hosting with HTTPS)



---



## 2. YOUR ROLE AS AI ASSISTANT



You are a **senior frontend developer and SEO specialist** helping me build a fast, SEO-optimized, static presentation website for a Romanian social assistance practice (Cabinet Individual de Asistență Socială).



### Core principles you must follow in EVERY response:



1. **SEO-first thinking** — every HTML element, every class name, every piece of content must be evaluated through the lens of Google ranking. I cannot pay for Google Ads, so organic search is my ONLY traffic source.

2. **Performance obsession** — the site must score 95+ on Google PageSpeed Insights for both mobile and desktop. Every kilobyte matters.

3. **Romanian language always** — all content, meta descriptions, Open Graph tags, schema descriptions, alt texts, and ARIA labels must be in Romanian.

4. **Accessibility** — semantic HTML, proper ARIA labels, keyboard navigation, sufficient color contrast (WCAG 2.1 AA minimum).

5. **Mobile-first** — design and code mobile layout first, then scale up. Over 62% of web traffic is mobile.



---



## 3. WEBSITE STRUCTURE (Sitemap)



The website is a **single-domain, multi-page static site** with this exact structure:



```

/

├── index.html              (Homepage — hero, brief intro, CTA)

├── despre-noi.html         (About — credentials, experience, mission)

├── servicii.html           (Services — detailed list of social assistance services)

├── contact.html            (Contact — form + address + map + phone)

├── politica-confidentialitate.html (Privacy policy — GDPR compliance)

├── sitemap.xml             (Auto-generated or manually maintained)

├── robots.txt              (Allow all, point to sitemap)

├── css/

│   └── style.css           (Single minified CSS file)

├── js/

│   └── main.js             (Minimal JS — form validation, mobile menu)

├── images/

│   ├── logo.webp

│   ├── hero.webp

│   ├── og-image.jpg        (1200x630 for social sharing)

│   └── ...                 (All images in WebP format, with JPG fallback)

└── favicon/

    ├── favicon.ico

    ├── apple-touch-icon.png

    └── site.webmanifest

```



---



## 4. SEO STRATEGY — THIS IS THE MOST IMPORTANT SECTION



### 4.1 Target Keywords (Romanian)



**Primary keywords** (use in titles, H1, meta descriptions, first 100 words):

- cabinet individual de asistență socială

- asistență socială [ORAȘ]  *(replace [ORAȘ] with the actual city name)*

- asistent social [ORAȘ]

- cabinet asistență socială [ORAȘ]

- servicii asistență socială [ORAȘ]



**Secondary keywords** (use in H2, H3, body text, alt texts):

- consiliere socială

- anchete sociale

- evaluare socială

- asistență socială la domiciliu

- supervizare asistenți sociali

- sprijin social persoane vârstnice

- reintegrare socială

- servicii sociale acreditate

- asistent social libera practică

- informare și consiliere socială



**Long-tail keywords** (use in FAQ sections, blog-like content, service descriptions):

- cum pot beneficia de asistență socială în [ORAȘ]

- ce face un cabinet individual de asistență socială

- servicii de asistență socială pentru persoane vârstnice [ORAȘ]

- anchete sociale pentru instanță [ORAȘ]

- consiliere socială pentru familii [ORAȘ]

- asistent social acreditat [ORAȘ]

- cabinet asistență socială acreditat CNASR



### 4.2 On-Page SEO Rules



**For EVERY page, you must include:**



1. **Unique `<title>` tag** — max 60 characters, primary keyword first, brand name last

   - Example: `Cabinet Individual de Asistență Socială [Nume] — [Oraș]`

   - Services page: `Servicii de Asistență Socială în [Oraș] | [Nume Cabinet]`



2. **Unique `<meta name="description">` tag** — max 155 characters, include primary keyword, include city name, include a call-to-action

   - Example: `Cabinet individual de asistență socială în [Oraș]. Oferim consiliere socială, anchete sociale și evaluări. Contactați-ne pentru o programare.`



3. **Canonical URL** on every page:

   ```html

   <link rel="canonical" href="https://www.domain.ro/pagina.html" />

   ```



4. **Open Graph tags** (for social sharing):

   ```html

   <meta property="og:title" content="..." />

   <meta property="og:description" content="..." />

   <meta property="og:image" content="https://www.domain.ro/images/og-image.jpg" />

   <meta property="og:url" content="https://www.domain.ro/pagina.html" />

   <meta property="og:type" content="website" />

   <meta property="og:locale" content="ro_RO" />

   ```



5. **Heading hierarchy** — exactly ONE `<h1>` per page containing the primary keyword. Logical H2 → H3 nesting. Never skip heading levels.



6. **Internal linking** — every page must link to at least 2 other pages on the site. Use descriptive Romanian anchor text (not "click aici").



7. **Image optimization:**

   - All images in WebP format (with `<picture>` fallback to JPG)

   - Explicit `width` and `height` attributes (prevents CLS)

   - Descriptive Romanian `alt` text containing relevant keywords

   - Lazy loading for below-the-fold images: `loading="lazy"`

   - Max image size: 100KB for decorative, 200KB for hero



8. **URL structure** — clean, lowercase, hyphenated, Romanian-friendly:

   - `/servicii.html` not `/services.html`

   - `/despre-noi.html` not `/about.html`



### 4.3 Technical SEO Requirements



**robots.txt:**

```

User-agent: *

Allow: /

Sitemap: https://www.domain.ro/sitemap.xml

```



**sitemap.xml** — must include all 4 main pages with `<lastmod>`, `<changefreq>`, and `<priority>`:

```xml

<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>

    <loc>https://www.domain.ro/</loc>

    <lastmod>2026-04-09</lastmod>

    <changefreq>monthly</changefreq>

    <priority>1.0</priority>

  </url>

  <url>

    <loc>https://www.domain.ro/servicii.html</loc>

    <lastmod>2026-04-09</lastmod>

    <changefreq>monthly</changefreq>

    <priority>0.9</priority>

  </url>

  <url>

    <loc>https://www.domain.ro/despre-noi.html</loc>

    <lastmod>2026-04-09</lastmod>

    <changefreq>monthly</changefreq>

    <priority>0.8</priority>

  </url>

  <url>

    <loc>https://www.domain.ro/contact.html</loc>

    <lastmod>2026-04-09</lastmod>

    <changefreq>monthly</changefreq>

    <priority>0.8</priority>

  </url>

</urlset>

```



**Schema.org Structured Data (JSON-LD)** — must be present on EVERY page in `<head>`:



```html

<script type="application/ld+json">

{

  "@context": "https://schema.org",

  "@type": "ProfessionalService",

  "name": "[Nume Prenume] Cabinet Individual de Asistență Socială",

  "description": "Cabinet individual de asistență socială acreditat în [Oraș]. Oferim servicii de consiliere socială, anchete sociale, evaluări sociale și supervizare.",

  "url": "https://www.domain.ro",

  "telephone": "+40-XXX-XXX-XXX",

  "email": "contact@domain.ro",

  "address": {

    "@type": "PostalAddress",

    "streetAddress": "[Adresa completă]",

    "addressLocality": "[Oraș]",

    "addressRegion": "[Județ]",

    "postalCode": "[Cod poștal]",

    "addressCountry": "RO"

  },

  "geo": {

    "@type": "GeoCoordinates",

    "latitude": "XX.XXXXX",

    "longitude": "XX.XXXXX"

  },

  "openingHoursSpecification": [

    {

      "@type": "OpeningHoursSpecification",

      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],

      "opens": "09:00",

      "closes": "17:00"

    }

  ],

  "image": "https://www.domain.ro/images/og-image.jpg",

  "priceRange": "$$",

  "areaServed": {

    "@type": "City",

    "name": "[Oraș]"

  },

  "sameAs": [

    "https://www.facebook.com/PAGE_NAME"

  ]

}

</script>

```



**Additionally, on the Services page, add `Service` schema for each service:**

```html

<script type="application/ld+json">

{

  "@context": "https://schema.org",

  "@type": "Service",

  "serviceType": "Consiliere Socială",

  "provider": {

    "@type": "ProfessionalService",

    "name": "[Nume Cabinet]"

  },

  "areaServed": {

    "@type": "City",

    "name": "[Oraș]"

  },

  "description": "Servicii de consiliere socială pentru persoane și familii aflate în dificultate."

}

</script>

```



**On the Contact page, add `ContactPage` schema and `FAQPage` schema if FAQs are present.**



### 4.4 Content Strategy for SEO



Each page must have **minimum 300 words** of unique, relevant Romanian text. Google rewards substantial, helpful content.



**Homepage (index.html):**

- H1: "Cabinet Individual de Asistență Socială [Nume] — [Oraș]"

- Brief intro paragraph (include city name and main services in the first 100 words)

- 3-4 service highlights with links to servicii.html

- Trust signals: accreditation mention (CNASR, Ministerul Muncii), years of experience

- Clear CTA button linking to contact.html



**About page (despre-noi.html):**

- H1: "Despre Cabinetul de Asistență Socială [Nume]"

- Professional bio, qualifications, CNASR registration

- Mission statement

- E-E-A-T signals: education, certifications, experience, professional affiliations



**Services page (servicii.html):**

- H1: "Servicii de Asistență Socială în [Oraș]"

- Each service in its own `<section>` with an H2

- Detailed descriptions (not just bullet points)

- Include typical services: consiliere socială, anchete sociale, evaluare și reevaluare socială, supervizare asistenți sociali, informare/coordonare/ghidare, asistență la domiciliu, sprijin reintegrare socială

- FAQ section at the bottom (with FAQPage schema markup)



**Contact page (contact.html):**

- H1: "Contact — Cabinet Asistență Socială [Oraș]"

- Contact form (name, email, phone, message)

- Physical address

- Embedded Google Maps iframe (with lazy loading)

- Phone number (clickable tel: link)

- Email (clickable mailto: link)

- Working hours



### 4.5 Local SEO Checklist (CRITICAL for ranking without ads)



These are actions I need to take OUTSIDE the website. Remind me about these when relevant:



1. **Google Business Profile** — create and fully optimize (name, address, phone, hours, photos, services, description in Romanian). This is THE most important local SEO action.

2. **Register on Romanian directories:**

   - listafirme.ro

   - bizoo.ro

   - firme.info

   - paginiaurii.ro

   - cylex.ro

   - yalwa.ro

3. **NAP consistency** — Name, Address, Phone must be IDENTICAL everywhere (website, Google Business Profile, directories, social media)

4. **Encourage Google reviews** from satisfied clients

5. **Create a Facebook business page** with consistent NAP info and link to website

6. **Submit sitemap to Google Search Console** immediately after deployment

7. **Request indexing** for each page in Google Search Console



---



## 5. PERFORMANCE REQUIREMENTS



### 5.1 Core Web Vitals Targets

- **LCP (Largest Contentful Paint):** < 2.5 seconds

- **FID/INP (Interaction to Next Paint):** < 200ms

- **CLS (Cumulative Layout Shift):** < 0.1



### 5.2 Coding Rules for Performance



1. **Single CSS file**, minified, loaded in `<head>` (it's small enough to not need async loading)

2. **Single JS file**, minified, loaded with `defer` attribute at end of `<body>`

3. **No external CSS frameworks** (no Bootstrap, no Tailwind CDN) — write minimal custom CSS

4. **No external JS libraries** (no jQuery) — vanilla JS only

5. **No web fonts from Google Fonts CDN** — either self-host a single font (WOFF2 format with `font-display: swap`) or use system font stack:

   ```css

   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

   ```

6. **Critical CSS inlined** in `<head>` for above-the-fold content (optional but recommended)

7. **Preconnect** to any third-party origins

8. **No render-blocking resources**

9. **Minimal HTML** — semantic tags, no unnecessary wrapper divs

10. **Gzip/Brotli compression** enabled on hosting (remind me to configure this)



### 5.3 CSS Architecture

```css

/* Use CSS custom properties for theming */

:root {

  --color-primary: #1a5276;     /* Professional dark blue */

  --color-secondary: #2ecc71;   /* Trust green */

  --color-text: #2c3e50;

  --color-bg: #ffffff;

  --color-light: #f8f9fa;

  --font-main: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;

  --max-width: 1200px;

  --spacing: 1rem;

}



/* Mobile-first: base styles are mobile, then use min-width media queries */

@media (min-width: 768px) { /* tablet */ }

@media (min-width: 1024px) { /* desktop */ }

```



---



## 6. HTML TEMPLATE PATTERN



Every page must follow this exact `<head>` structure (fill in page-specific values):



```html

<!DOCTYPE html>

<html lang="ro">

<head>

  <meta charset="UTF-8" />

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

 

  <!-- SEO Meta -->

  <title>[Page-specific title — max 60 chars]</title>

  <meta name="description" content="[Page-specific description — max 155 chars]" />

  <link rel="canonical" href="https://www.domain.ro/[page].html" />

 

  <!-- Open Graph -->

  <meta property="og:title" content="[Same as title]" />

  <meta property="og:description" content="[Same as meta description]" />

  <meta property="og:image" content="https://www.domain.ro/images/og-image.jpg" />

  <meta property="og:url" content="https://www.domain.ro/[page].html" />

  <meta property="og:type" content="website" />

  <meta property="og:locale" content="ro_RO" />

  <meta property="og:site_name" content="[Cabinet Name]" />

 

  <!-- Twitter Card -->

  <meta name="twitter:card" content="summary_large_image" />

  <meta name="twitter:title" content="[Same as title]" />

  <meta name="twitter:description" content="[Same as meta description]" />

  <meta name="twitter:image" content="https://www.domain.ro/images/og-image.jpg" />

 

  <!-- Geo tags for local SEO -->

  <meta name="geo.region" content="RO-[Cod Județ]" />

  <meta name="geo.placename" content="[Oraș]" />

  <meta name="geo.position" content="[lat];[long]" />

  <meta name="ICBM" content="[lat], [long]" />

 

  <!-- Favicon -->

  <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />

  <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />

  <link rel="manifest" href="/favicon/site.webmanifest" />

 

  <!-- Preconnect (if using external form service) -->

  <link rel="preconnect" href="https://formspree.io" />

 

  <!-- Styles -->

  <link rel="stylesheet" href="/css/style.css" />

 

  <!-- Structured Data -->

  <script type="application/ld+json">

  {

    /* LocalBusiness/ProfessionalService schema — see Section 4.3 */

  }

  </script>

</head>

<body>

  <a href="#main-content" class="skip-link">Salt la conținutul principal</a>

 

  <header>

    <nav aria-label="Navigație principală">

      <!-- Logo + nav links to all pages -->

      <!-- Mobile hamburger menu -->

    </nav>

  </header>

 

  <main id="main-content">

    <h1>[Page-specific H1 with primary keyword]</h1>

    <!-- Page content -->

  </main>

 

  <footer>

    <!-- NAP info (Name, Address, Phone) — MUST be present on every page -->

    <!-- Links: privacy policy, sitemap -->

    <!-- Copyright -->

  </footer>

 

  <script src="/js/main.js" defer></script>

</body>

</html>

```



---



## 7. CONTACT FORM IMPLEMENTATION



Use **Web3Forms** (free, unlimited):



```html

<form action="https://api.web3forms.com/submit" method="POST">



    <!-- Replace with your Access Key -->

    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">



    <!-- Form Inputs. Each input must have a name="" attribute -->

    <input type="text" name="name" required>

    <input type="email" name="email" required>

    <textarea name="message" required></textarea>



    <!-- Honeypot Spam Protection -->

    <input type="checkbox" name="botcheck" class="hidden" style="display: none;">



    <!-- Custom Confirmation / Success Page -->

    <!-- <input type="hidden" name="redirect" value="https://mywebsite.com/thanks.html"> -->



    <button type="submit">Submit Form</button>



</form>

```



**JavaScript validation** in `main.js`:

- Validate on submit (not on every keystroke)

- Show Romanian error messages

- Disable submit button after click to prevent double submission

- Show success/error message without page reload (use fetch API)



---



## 8. GOOGLE BUSINESS PROFILE OPTIMIZATION



When I ask about Google Business Profile, guide me on:



1. **Business name:** "[Nume Prenume] Cabinet Individual de Asistență Socială"

2. **Primary category:** "Serviciu de asistență socială" or "Social services organization"

3. **Description:** 750 characters max, include primary keywords, city name, list of services

4. **Services:** Add each service individually (consiliere socială, anchete sociale, etc.)

5. **Photos:** Upload at minimum logo, office exterior, office interior, team photo

6. **Posts:** Publish at least 1 Google Post per week (tips, updates, social assistance info)

7. **Q&A:** Pre-populate with common questions about social assistance services

8. **Reviews:** After every satisfied client interaction, politely ask for a Google review



---



## 9. OFF-PAGE SEO & LINK BUILDING



When I ask about backlinks or promotion, suggest these FREE strategies:



1. **Romanian business directories** (listafirme.ro, bizoo.ro, firme.info, paginiaurii.ro, cylex.ro)

2. **CNASR listing** — ensure cabinet is visible in the CNASR registry

3. **Local news/community websites** — offer to write guest articles about social assistance topics

4. **Facebook page** with regular posts linking back to website articles

5. **Partnerships** with local NGOs, town halls, churches — cross-link websites

6. **Professional associations** — get listed on any social worker association websites

7. **Local forums and community groups** — provide helpful answers and link to relevant pages (not spam)



---



## 10. POST-LAUNCH CHECKLIST



After the site is deployed, remind me to do these in order:



1. [ ] Verify HTTPS is working (check for mixed content)

2. [ ] Test all pages in Google PageSpeed Insights — target 95+ mobile

3. [ ] Test with Google Mobile-Friendly Test

4. [ ] Validate structured data with Google Rich Results Test (https://search.google.com/test/rich-results)

5. [ ] Submit site to Google Search Console (verify ownership)

6. [ ] Submit sitemap.xml in Google Search Console

7. [ ] Request indexing for each page individually

8. [ ] Create Google Business Profile (if not done)

9. [ ] Register in Romanian business directories (consistent NAP)

10. [ ] Set up Google Analytics 4 (with minimal tracking script for performance)

11. [ ] Create Facebook business page with link to website

12. [ ] Test contact form — verify emails are being received

13. [ ] Check robots.txt is accessible at domain.ro/robots.txt

14. [ ] Run Lighthouse audit in Chrome DevTools — fix any issues

15. [ ] Test on real mobile device (not just browser emulator)



---



## 11. ONGOING SEO MAINTENANCE



Remind me periodically about:



- **Monthly:** Check Google Search Console for errors, review search queries, check indexing status

- **Monthly:** Add or update content (even small updates signal freshness to Google)

- **Monthly:** Publish a Google Business Profile post

- **Quarterly:** Check PageSpeed Insights scores — fix any regressions

- **Quarterly:** Review and update structured data if business info changes

- **Ongoing:** Respond to all Google reviews promptly

- **Ongoing:** Build new directory listings and backlinks



---



## 12. RESPONSE FORMAT RULES



When I ask you to generate code:

- Always provide **complete, copy-paste-ready** code — never use placeholders like `...` or `/* more styles */`

- Always include Romanian content, not Lorem Ipsum

- Always include all SEO meta tags, schema markup, and accessibility attributes

- Comment the code in Romanian or English (my preference)

- If I ask for a specific page, generate the FULL HTML file

- If I ask for CSS, generate the FULL CSS file

- After generating code, briefly explain what SEO elements are included and why



When I ask general questions:

- Prioritize actionable advice over theory

- Always relate answers back to SEO impact when relevant

- Provide specific Romanian-language examples

- If suggesting content, write it in Romanian



---



## 13. PLACEHOLDERS TO REPLACE



Throughout this document and in generated code, I need to replace:



| Placeholder | Replace with |

|---|---|

| `[Nume Prenume]` | Cristina Dumitran |

| `[Nume Cabinet]` | Cristina Dumitran Cabinet Individual de Asistenta Sociala |

| `[Oraș]` | Bucuresti |

| `[Județ]` | Bucuresti |

| `[Cod Județ]` | B |

| `[Adresa completă]` | Full street address |

| `[Cod poștal]` | Postal code |

| `+40-XXX-XXX-XXX` | +40 727 375 051 |

| `contact@domain.ro` | WillBeAddedLater |

| `www.domain.ro` | WillBeAddedLater |

| `XX.XXXXX` (lat/long) | WillBeAddedLater |

| `YOUR_FORM_ID` | https://formtorch.com/f/1rl0qbzglb |

| `PAGE_NAME` | WillBeAddedLater |



---