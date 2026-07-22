/**
 * ────────────────────────────────────────────────────────────────
 *  SITE CONTENT — edit everything here.
 *  This single file drives every page: brand, contact details,
 *  services, values, testimonials and FAQ. No need to touch the
 *  components to update copy.
 *
 *  ⚠️  Testimonials are placeholders — swap in real client quotes
 *      as soon as you have them.
 * ────────────────────────────────────────────────────────────────
 */

export const site = {
  // ── Brand ──────────────────────────────────────────────────────
  name: "Watch The Baby",
  legalName: "Watch The Baby LLC",
  tagline: "Postpartum & Newborn Care",
  motto:
    "Every baby deserves gentle care. Every parent deserves compassionate support.",
  founder: "Oulimata Toure",
  establishedYear: 2026,

  // ── Contact ────────────────────────────────────────────────────
  email: "info@watchthebabyllc.com",
  bookingNote: "DM or email to book",
  region: "Maryland · DC · Virginia",
  city: "the DMV", // used in sentences like “families in the DMV”
  serviceArea: "Maryland, Washington DC & Northern Virginia",
  hours: "Overnight care 7 nights a week · Consultations by appointment",

  social: {
    instagram: "https://www.instagram.com/watchthebaby_?igsh=aGt4MnZqNnlnNTY5", // TODO: real Instagram profile URL
    facebook: "https://facebook.com/watchthebaby", // TODO: real Facebook page URL
    tiktok: "https://tiktok.com/@watchthebaby", // TODO: real TikTok profile URL
  },

  // ── One-liners used across the site ────────────────────────────
  /** Short summary used for meta descriptions & social cards (~160 chars). */
  description:
    "Luxury overnight & daytime newborn care, postpartum doula support and gentle sleep conditioning across Maryland, DC & Northern Virginia. Rest easy — book a free consultation.",
  heroTitle: "Rest, recover, and feel supported.",
  heroSubtitle:
    "Compassionate, evidence-based newborn care in your own home — expert, judgement-free hands for your baby, and real rest for you in those first precious weeks.",
  promiseSection: {
    eyebrow: "Our promise",
    title: "Our Promise to Every Family",
    text: "At Watch The Baby LLC, we are committed to providing compassionate, evidence-based newborn care in a safe, nurturing environment. We believe every family deserves to feel supported, respected, and confident as they begin their parenting journey. Your baby’s well-being and your peace of mind are at the heart of everything we do.",
  },
  promise:
    "We're a small, hands-on team. When you work with us, you work directly with the people caring for your family — never a call centre.",
  packagesNote:
    "Ask about our comprehensive Maternity Care Packages — overnight care, feeding and sleep support, bundled at a gentler rate.",

  // ── Photos ─────────────────────────────────────────────────────
  // Drop real photos into public/images/ then set the paths here,
  // e.g. hero: "/images/hero.jpg". While a value is null the site
  // shows an elegant placeholder instead. See public/images/README.md.
  images: {
    // hero.jpg and several service photos are free-license stock photos from
    // Pexels (commercial use allowed, no attribution required) — see
    // public/images/README.md for the full source list.
    hero: "/images/hero.jpg" as string | null, // mother holding her sleeping newborn
    founder: "/images/founder.jpg" as string | null, // portrait of Oulimata (880×1100)
  },
};

// ── Trust badges (the reassurance strip) ─────────────────────────
export const credentials = [
  {
    icon: "shield",
    title: "Background-checked",
    text: "Every caregiver is vetted and reference-checked before joining.",
  },
  {
    icon: "heart-pulse",
    title: "CPR & First-Aid certified",
    text: "Infant CPR and first-aid trained, kept current every year.",
  },
  {
    icon: "leaf",
    title: "Fully insured",
    text: "Liability insurance and clear agreements on every booking.",
  },
];

// ── Services ─────────────────────────────────────────────────────
export type Service = {
  slug: string;
  icon: string;
  title: string;
  summary: string;
  description: string;
  includes: string[];
  priceNote: string;
  /** Photo shown on the service card and detail page (file under public/). */
  image?: string;
  imageAlt?: string;
};

export const services: Service[] = [
  {
    slug: "overnight-newborn-care",
    icon: "moon",
    title: "Overnight Newborn Care",
    summary:
      "Luxury overnight care — feeds, changes and settling handled while you finally sleep.",
    description:
      "Our overnight specialists care for your baby through the night: feeds, diaper changes, gentle soothing, baby brought to you for breastfeeding or offered a prepared bottle. You rest and recover; we watch the baby.",
    includes: [
      "Overnight shifts, typically 8–12 hours",
      "Feeds, diapering and safe-sleep routines",
      "A tidy nursery and a written night log each morning",
      "Available 1 to 7 nights a week",
    ],
    priceNote: "Per-night rate · maternity packages available",
    image: "/images/overnight-care.jpg",
    imageAlt: "A newborn sleeping soundly under a soft knitted blanket",
  },
  {
    slug: "daytime-newborn-care",
    icon: "sun",
    title: "Daytime Newborn Care",
    summary:
      "Attentive daytime care so you can nap, work or simply take a breath.",
    description:
      "An experienced caregiver by your side during the day — feeds, naps, tummy time and gentle play, plus light baby-related tidying — while you rest, run errands or ease back into work knowing your baby is in expert hands.",
    includes: [
      "Flexible daytime shifts, typically 4–8 hours",
      "Feeds, naps, soothing and tummy time",
      "Bottle prep, pump-part washing and nursery tidy-ups",
      "A clear day log at every handover",
    ],
    priceNote: "Hourly rate · regular weekly schedules available",
    image: "/images/daytime-care.jpg",
    imageAlt: "A caregiver gently dressing a bright-eyed baby during the day",
  },
  {
    slug: "postpartum-doula-support",
    icon: "hands",
    title: "Postpartum Doula Support",
    summary:
      "Nurturing, judgement-free support for your whole household as you recover.",
    description:
      "A postpartum doula walks beside you through the fourth trimester: caring for your baby while you shower or sleep, answering your questions with evidence-based guidance, and lightening the load at home as you find your footing.",
    includes: [
      "In-home visits shaped around your recovery",
      "Newborn care while you rest and recharge",
      "Evidence-based answers, never judgement",
     
    ],
    priceNote: "Per visit · bundled packages available",
    image: "/images/doula-support.jpg",
    imageAlt: "A doula sitting with a mother and her newborn, offering support",
  },
  {
    slug: "newborn-sleep-conditioning",
    icon: "zzz",
    title: "Newborn Sleep Conditioning",
    summary:
      "Gentle sleep shaping from the earliest weeks — healthy habits, at your baby's pace.",
    description:
      "We help your newborn learn the difference between day and night: age-appropriate wake windows, calming bedtime rhythms and a safe-sleep set-up, coached with you and followed up until better nights actually stick.",
    includes: [
      "In-depth sleep assessment and gentle plan",
      "Day–night rhythm and wake-window coaching",
      "Safe-sleep set-up review of your nursery",
      "Follow-up check-ins and adjustments",
    ],
    priceNote: "Consultation + follow-up packages",
    image: "/images/sleep-conditioning.jpg",
    imageAlt: "A newborn sleeping peacefully in a bassinet beneath a mobile",
  },
  {
    slug: "feeding-support",
    icon: "bottle",
    title: "Feeding Support",
    summary:
      "Confident feeding — breast, bottle or combination — with patient, judgement-free coaching.",
    description:
      "Hands-on help with latch and positioning, paced bottle feeding, pumping routines and building a rhythm that works for your family. Whatever feeding path you choose, we support it fully.",
    includes: [
      "Breast, bottle and combination feeding",
      "Latch, positioning and pumping guidance",
      "Paced bottle feeding for partners and caregivers",
      "Simple routines you can keep and reuse",
    ],
    priceNote: "Woven into every visit · standalone sessions available",
    image: "/images/feeding-support.jpg",
    imageAlt: "A caregiver coaching a mother while she bottle-feeds her baby at home",
  },
  {
    slug: "parent-education",
    icon: "book",
    title: "Parent Education",
    summary:
      "Hands-on coaching that turns nervous first-timers into confident parents.",
    description:
      "Practical, personalised teaching in your own home: bathing, swaddling, soothing, safe sleep, feeding basics and what to really expect in the early weeks — so you feel prepared, not overwhelmed.",
    includes: [
      "Newborn basics: bathing, swaddling, soothing",
      "Safe-sleep and feeding fundamentals",
      "Sessions tailored to parents and grandparents",
      "Take-home checklists and trusted resources",
    ],
    priceNote: "Per session · included in longer care packages",
    image: "/images/parent-education.jpg",
    imageAlt: "Two parents at home cradling their baby together",
  },
  {
    slug: "newborn-routine-development",
    icon: "clock",
    title: "Newborn Routine Development",
    summary:
      "Calm, flexible daily rhythms for feeds, naps and play that grow with your baby.",
    description:
      "We observe your baby's natural patterns and shape them into a gentle, realistic routine — feeds, naps, wake windows and evenings — bringing predictability to your days without rigidity.",
    includes: [
      "Personalised feed and nap rhythm",
      "Age-appropriate wake windows and play",
      "Adjustments as your baby grows",
      "A simple written schedule the whole family can follow",
    ],
    priceNote: "Woven into ongoing care · standalone consultations",
    image: "/images/routine-development.jpg",
    imageAlt: "A mother settling her sleeping newborn beside the crib",
  },
  {
    slug: "emotional-support",
    icon: "chat-heart",
    title: "Emotional Support for New Parents",
    summary:
      "A steady, caring presence for you — because the fourth trimester is tender for parents too.",
    description:
      "A listening ear without judgement, reassurance grounded in experience, and gentle signposting to specialist resources when they'd help. You don't have to hold it all alone.",
    includes: [
      "Judgement-free listening and reassurance",
      "Evidence-based guidance for the fourth trimester",
      "Help finding specialist support when needed",
      "Woven through every service we offer",
    ],
    priceNote: "Included in our care · dedicated visits available",
    image: "/images/emotional-support.jpg",
    imageAlt: "A new mother smiling with her baby, supported by a caregiver",
  },
];

// ── How it works ─────────────────────────────────────────────────
export const steps = [
  {
    number: "01",
    title: "Free consultation",
    text: "A relaxed call to understand your family, your due date and what would help most.",
  },
  {
    number: "02",
    title: "Your care plan",
    text: "We match you with the right caregiver and agree a simple, flexible schedule.",
  },
  {
    number: "03",
    title: "Rest easy",
    text: "Care begins. You stay in the loop with clear notes and a caregiver who knows your family.",
  },
];

// ── Values ───────────────────────────────────────────────────────
export const values = [
  {
    icon: "heart",
    title: "Warmth first",
    text: "Care that feels personal, calm and completely without judgement.",
  },
  {
    icon: "shield",
    title: "Safety always",
    text: "Vetted, trained caregivers and safe-sleep practices, every single visit.",
  },
  {
    icon: "sparkle",
    title: "Real expertise",
    text: "Practical, evidence-based support drawn from years of newborn experience.",
  },
  {
    icon: "leaf",
    title: "For every family",
    text: "We support all families — every structure, every feeding choice, every story.",
  },
];

// ── Testimonials (placeholders — replace with real quotes) ───────
export const testimonials = [
  {
    quote:
      "Those first two weeks would have broken us without our overnight specialist. We finally slept, and woke up feeling human again.",
    name: "Jasmine & Marcus",
    detail: "First-time parents · Silver Spring, MD",
  },
  {
    quote:
      "Kind, calm and genuinely knowledgeable. She gave us confidence with feeding when we had none.",
    name: "Amina T.",
    detail: "Mother of two · Washington, DC",
  },
  {
    quote:
      "It felt like having a wise, unflappable friend in the house. Worth every penny.",
    name: "Sarah & David",
    detail: "Twins, 6 weeks · Arlington, VA",
  },
];

// ── FAQ ──────────────────────────────────────────────────────────
export const faqs = [
  {
    q: "When should we book?",
    a: "As early as you like — many families reach out in the second or third trimester. We also do our best to help with last-minute and newborn-in-arms requests.",
  },
  {
    q: "Are your caregivers vetted?",
    a: "Yes. Every caregiver is interviewed, reference-checked and background-checked, and holds current infant CPR and first-aid certification.",
  },
  {
    q: "Do you support breastfeeding, bottle and combination feeding?",
    a: "All of them. We support whatever feeding choice is right for your family, with zero judgement.",
  },
  {
    q: "What areas do you cover?",
    a: "We serve families across Maryland, Washington DC and Northern Virginia. A little further out? Reach out and we'll see what's possible.",
  },
  {
    q: "Do you offer packages or gift options?",
    a: "Yes — our Maternity Care Packages bundle overnight care, feeding and sleep support at a gentler rate, and any service can be gifted to a new family. We also offer a $50 referral bonus when a family you refer books with us.",
  },
];

// ── Navigation ───────────────────────────────────────────────────
export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
