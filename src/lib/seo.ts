/**
 * ────────────────────────────────────────────────────────────────
 *  SEO helpers — base URL resolution, per-page metadata and the
 *  JSON-LD structured data that Google reads for rich results and
 *  local search.
 * ────────────────────────────────────────────────────────────────
 */
import type { Metadata } from "next";
import { faqs, services, site } from "@/lib/site";

/**
 * Resolves the canonical production origin (no trailing slash).
 *
 * Priority:
 *  1. NEXT_PUBLIC_SITE_URL   → set this in Vercel once you have a custom domain
 *  2. VERCEL_PROJECT_PRODUCTION_URL → auto-set by Vercel (your *.vercel.app)
 *  3. VERCEL_URL             → the current preview deployment
 *  4. localhost              → local development
 *
 * This keeps every canonical, sitemap, robots and Open Graph URL correct
 * without hard-coding a domain.
 */
export function getBaseUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");

  const prod = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (prod) return `https://${prod}`;

  const preview = process.env.VERCEL_URL;
  if (preview) return `https://${preview}`;

  return "http://localhost:3000";
}

/** Consistent metadata for a page (title, description, canonical, social). */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${title} · ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      type: "website",
    },
    twitter: {
      title: fullTitle,
      description,
    },
  };
}

// ── JSON-LD (schema.org) ─────────────────────────────────────────

/** The agency as a LocalBusiness — the backbone of local SEO. */
export function localBusinessSchema(baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#business`,
    name: site.legalName,
    alternateName: site.name,
    description: site.description,
    slogan: site.motto,
    url: baseUrl,
    email: site.email,
    image: `${baseUrl}/opengraph-image`,
    logo: `${baseUrl}/images/logo.png`,
    priceRange: "$$$",
    currenciesAccepted: "USD",
    knowsLanguage: ["en"],
    founder: { "@type": "Person", name: site.founder },
    address: {
      "@type": "PostalAddress",
      addressRegion: "MD",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "State", name: "Maryland" },
      { "@type": "City", name: "Washington DC" },
      { "@type": "State", name: "Virginia" },
    ],
    sameAs: [site.social.instagram, site.social.facebook].filter(Boolean),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Newborn & postpartum care services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.summary,
          url: `${baseUrl}/services#${s.slug}`,
        },
      })),
    },
  };
}

/** The website itself. */
export function websiteSchema(baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    url: baseUrl,
    name: site.name,
    description: site.description,
    inLanguage: "en",
    publisher: { "@id": `${baseUrl}/#business` },
  };
}

/** FAQ rich-result eligible structured data for the services page. */
export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** A breadcrumb trail for a single page. */
export function breadcrumbSchema(
  baseUrl: string,
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${baseUrl}${item.path}`,
    })),
  };
}
