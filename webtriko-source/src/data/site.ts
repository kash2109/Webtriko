export const siteConfig = {
  name: "Webtriko",
  tagline: "Faster builds. Lighter bills. Zero drama.",
  description:
    "We design and develop websites that launch faster and cost less than you'd expect. No bloated timelines. No mystery invoices. Clean, effective web work.",
  url: "https://webtriko.com",
  email: "hello@webtriko.com",
  phone: "+1 (555) 000-1234",
  founder: "Alex Rivera",
  founderTitle: "Founder & Lead Developer",
};

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    id: "startup-websites",
    title: "Startup Websites",
    shortDesc: "Launch-ready sites built for speed and first impressions.",
    description:
      "Your first website sets the tone. We build fast, credible, conversion-ready sites that make investors and customers take you seriously — in days, not months.",
    idealFor: "Pre-seed to Series A startups",
    includes: [
      "Custom design in your brand",
      "Responsive development",
      "CMS integration",
      "SEO foundation",
      "Analytics setup",
      "Launch support",
    ],
    turnaround: "5–10 business days",
  },
  {
    id: "small-business-websites",
    title: "Small Business Sites",
    shortDesc: "Professional web presence without the agency price tag.",
    description:
      "Your business deserves a site that actually works — one that loads fast, looks sharp, and turns visitors into customers. No bloat. No mystery invoices.",
    idealFor: "Local businesses, service providers, consultants",
    includes: [
      "Modern responsive design",
      "Contact forms & maps",
      "SEO optimization",
      "Mobile-first layout",
      "Google Business integration",
      "Performance tuning",
    ],
    turnaround: "5–7 business days",
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    shortDesc: "High-converting pages that move the needle.",
    description:
      "One page. One goal. Maximum impact. We design and build landing pages engineered for conversions — whether you're launching a product, running a campaign, or capturing leads.",
    idealFor: "Product launches, campaigns, lead gen",
    includes: [
      "Conversion-focused design",
      "A/B test ready structure",
      "Form integration",
      "Speed optimized",
      "Analytics tracking",
      "Responsive across all devices",
    ],
    turnaround: "3–5 business days",
  },
  {
    id: "portfolio-sites",
    title: "Portfolio Sites",
    shortDesc: "Show your work like it deserves to be shown.",
    description:
      "Your portfolio should look as good as the work inside it. We build clean, fast, beautifully crafted portfolio sites that let your projects do the talking.",
    idealFor: "Designers, photographers, freelancers, creatives",
    includes: [
      "Gallery & project layouts",
      "Smooth animations",
      "CMS for easy updates",
      "Image optimization",
      "Custom typography",
      "Contact integration",
    ],
    turnaround: "5–7 business days",
  },
  {
    id: "website-redesigns",
    title: "Website Redesigns",
    shortDesc: "Upgrade without starting from scratch.",
    description:
      "Your current site isn't cutting it. We redesign and rebuild with modern standards, better performance, and a look that actually represents where your business is now.",
    idealFor: "Businesses outgrowing their current site",
    includes: [
      "Design audit & strategy",
      "Fresh UI/UX design",
      "Modern tech rebuild",
      "Content migration",
      "SEO preservation",
      "Performance boost",
    ],
    turnaround: "7–14 business days",
  },
  {
    id: "development-handoff",
    title: "Dev Handoff / Build-Only",
    shortDesc: "You design it. We build it. Fast.",
    description:
      "Already have designs? Skip the process and hand off your Figma files. We'll turn them into clean, responsive, production-ready code — pixel-perfect.",
    idealFor: "Agencies, designers, product teams",
    includes: [
      "Figma-to-code conversion",
      "Responsive implementation",
      "Cross-browser testing",
      "Performance optimization",
      "Clean handoff documentation",
      "CMS integration if needed",
    ],
    turnaround: "5–10 business days",
  },
  {
    id: "launch-support",
    title: "Launch Support",
    shortDesc: "Go live with confidence.",
    description:
      "Domain setup, hosting config, DNS, SSL, analytics, email — we handle the launch day details so you don't have to Google anything at 2am.",
    idealFor: "Anyone launching a new site",
    includes: [
      "Domain & DNS setup",
      "Hosting configuration",
      "SSL certificate",
      "Email setup",
      "Analytics & tracking",
      "Launch checklist & QA",
    ],
    turnaround: "1–2 business days",
  },
  {
    id: "ongoing-updates",
    title: "Ongoing Updates",
    shortDesc: "Keep your site fresh without a retainer.",
    description:
      "Need content updates, design tweaks, or new sections? We offer lightweight, pay-as-you-go support — no retainer contracts, no monthly minimums.",
    idealFor: "Anyone who needs occasional site changes",
    includes: [
      "Content updates",
      "Design adjustments",
      "New pages or sections",
      "Bug fixes",
      "Performance checks",
      "Priority response",
    ],
    turnaround: "1–3 business days per request",
  },
];

export const caseStudies = [
  {
    slug: "pulse-saas",
    title: "Pulse",
    category: "SaaS Launch Site",
    tagline: "From pitch deck to live product in 6 days.",
    problem:
      "Pulse had a working product but no web presence. Their existing landing page was a Notion doc with a Calendly link. Investors weren't impressed.",
    solution:
      "We designed and built a complete marketing site with product demos, pricing, and a signup flow — all in under a week. Clean, fast, and conversion-focused.",
    results: [
      "Live in 6 days",
      "3.2x increase in demo requests",
      "Sub-1s load time",
      "Featured in a TechCrunch roundup",
    ],
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    color: "#B5FF47",
  },
  {
    slug: "verde-landscaping",
    title: "Verde Landscaping",
    category: "Local Business Website",
    tagline: "A local business that finally looks the part.",
    problem:
      "Verde had a decade-old WordPress site that was slow, broken on mobile, and buried on page 3 of Google. Customers were calling competitors instead.",
    solution:
      "Complete redesign with a mobile-first approach, local SEO strategy, before/after galleries, and a quote request form that actually works.",
    results: [
      "Page 1 Google ranking in 30 days",
      "4x more quote requests",
      "Mobile traffic up 280%",
      "Site loads in 0.8 seconds",
    ],
    tech: ["Next.js", "Tailwind CSS", "Sanity CMS", "Vercel"],
    color: "#4DFFEF",
  },
  {
    slug: "mara-studio",
    title: "Mara Studio",
    category: "Creative Portfolio",
    tagline: "A portfolio as bold as the work inside it.",
    problem:
      "Mara is a brand designer whose Squarespace portfolio felt generic and slow. Her work is world-class — her site wasn't keeping up.",
    solution:
      "A custom-built portfolio with smooth animations, case study deep-dives, and a layout that puts the work front and center. Fast, elegant, unforgettable.",
    results: [
      "Delivered in 5 days",
      "Average session time up 3x",
      "Direct inquiries doubled",
      "Featured on Awwwards Honorable Mention",
    ],
    tech: ["Next.js", "GSAP", "Tailwind CSS", "Cloudinary"],
    color: "#FF5C3A",
  },
  {
    slug: "northpeak-consulting",
    title: "NorthPeak Consulting",
    category: "Consultant Website",
    tagline: "Credibility at first scroll.",
    problem:
      "NorthPeak's founder was sending prospects to a LinkedIn profile. They needed a professional site that conveyed expertise and made booking a call effortless.",
    solution:
      "A sharp, single-scroll site with clear service descriptions, testimonials, and an integrated booking system. Built to convert, not to impress designers.",
    results: [
      "Live in 4 days",
      "52% increase in consultation bookings",
      "Bounce rate dropped 40%",
      "Professional credibility established",
    ],
    tech: ["Next.js", "Tailwind CSS", "Cal.com", "Vercel"],
    color: "#B5FF47",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover Fast",
    subtitle: "Day 1",
    description:
      "One focused call. We learn your goals, your audience, and your constraints. No 40-slide discovery decks. No workshops that take a week.",
    deliverables: [
      "Project brief",
      "Sitemap",
      "Timeline",
      "Fixed quote",
    ],
    why: "Because you don't need a strategy retreat — you need clarity.",
  },
  {
    number: "02",
    title: "Design Sharp",
    subtitle: "Days 2–4",
    description:
      "We design in-browser or high-fidelity mockups — no vague wireframes that need three more rounds. You see real layouts with real copy from day one.",
    deliverables: [
      "Full design concepts",
      "Mobile + desktop layouts",
      "Brand-aligned UI",
      "Interactive prototype",
    ],
    why: "Because seeing is deciding. And fast feedback means fast progress.",
  },
  {
    number: "03",
    title: "Build Lean",
    subtitle: "Days 4–8",
    description:
      "Clean, modern code. No bloated frameworks. No spaghetti CSS. We build with performance and maintainability baked in from line one.",
    deliverables: [
      "Responsive development",
      "CMS integration",
      "SEO setup",
      "Cross-browser testing",
    ],
    why: "Because your site should be fast for users — and easy to maintain for you.",
  },
  {
    number: "04",
    title: "Launch Clean",
    subtitle: "Day 9–10",
    description:
      "We handle the launch details — hosting, domain, SSL, analytics, email. You get a live site, a clear handoff, and zero loose ends.",
    deliverables: [
      "Live deployment",
      "Analytics configured",
      "Performance audit",
      "Handoff documentation",
    ],
    why: "Because launch day should feel exciting — not stressful.",
  },
];

export const pricingPackages = [
  {
    name: "Launch Lite",
    price: "From $2,500",
    description: "For startups and solo founders who need to get online fast with a clean, credible site.",
    idealFor: "Startups, freelancers, side projects",
    turnaround: "5–7 days",
    features: [
      "Up to 5 pages",
      "Custom responsive design",
      "Mobile-first development",
      "Basic SEO setup",
      "Contact form",
      "CMS integration",
      "1 round of revisions",
      "Launch support",
    ],
    highlighted: false,
  },
  {
    name: "Growth Site",
    price: "From $5,000",
    description: "For growing businesses that need a site built to convert, impress, and scale.",
    idealFor: "SMBs, funded startups, service businesses",
    turnaround: "7–10 days",
    features: [
      "Up to 10 pages",
      "Premium custom design",
      "Advanced animations",
      "Full SEO optimization",
      "CMS with content modeling",
      "Analytics & tracking",
      "2 rounds of revisions",
      "Priority launch support",
      "30 days post-launch support",
    ],
    highlighted: true,
  },
  {
    name: "Custom Build",
    price: "Let's talk",
    description: "For complex projects that need custom features, integrations, or a bigger scope.",
    idealFor: "Agencies, enterprises, complex products",
    turnaround: "10–21 days",
    features: [
      "Unlimited pages",
      "Bespoke design system",
      "Custom animations & interactions",
      "Advanced integrations",
      "E-commerce or app features",
      "Multi-language support",
      "Dedicated project manager",
      "Extended support period",
      "Code handoff & documentation",
    ],
    highlighted: false,
  },
];

export const addOns = [
  { name: "Extra pages", price: "From $300/page" },
  { name: "Copywriting", price: "From $500" },
  { name: "Logo & brand design", price: "From $1,500" },
  { name: "Photography direction", price: "From $800" },
  { name: "Ongoing monthly support", price: "From $200/month" },
  { name: "E-commerce integration", price: "From $2,000" },
];

export const testimonials = [
  {
    quote: "They delivered our site in 6 days. Six. Our last agency took 4 months and we still weren't happy.",
    name: "Sarah Chen",
    role: "Founder, Pulse",
    company: "Pulse",
  },
  {
    quote: "No drama. No surprises. Just a beautiful site that works. Exactly what they promised.",
    name: "Marcus Thompson",
    role: "Owner, Verde Landscaping",
    company: "Verde",
  },
  {
    quote: "I've worked with 5 agencies. Webtriko is the only one that actually respected my time and budget.",
    name: "Mara Okafor",
    role: "Brand Designer",
    company: "Mara Studio",
  },
  {
    quote: "Finally, a team that speaks plain English and delivers on time. My booking rate doubled.",
    name: "James NorthPeak",
    role: "Management Consultant",
    company: "NorthPeak Consulting",
  },
];

export const stats = [
  { value: 50, suffix: "+", label: "Projects shipped" },
  { value: 7, suffix: "", label: "Avg. days to launch" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: 0, suffix: "", label: "Mystery invoices", prefix: "" },
];

export const values = [
  {
    title: "Speed is Respect",
    description: "Your time is finite. We treat every deadline like it matters — because it does.",
  },
  {
    title: "Radical Transparency",
    description: "You see the price before we shake hands. No hidden fees. No scope surprise.",
  },
  {
    title: "Quality Without Complexity",
    description: "Premium doesn't mean complicated. We build clean, modern, and maintainable.",
  },
  {
    title: "Client First, Always",
    description: "Your project, your goals, your voice. We're here to execute your vision, not ours.",
  },
  {
    title: "Zero Drama Culture",
    description: "No missed deadlines disguised as scope creep. No radio silence. Professional, every time.",
  },
];

export const faqItems = [
  {
    question: "How fast can you really build a website?",
    answer:
      "Most projects launch in 5–10 business days. Simple landing pages can be done in 3–5 days. We're fast because our process is lean — not because we cut corners.",
  },
  {
    question: "What if I already have designs?",
    answer:
      "Even better. Send us your Figma files and we'll turn them into clean, responsive code. Dev-only projects often ship even faster.",
  },
  {
    question: "Do you charge hourly or fixed?",
    answer:
      "Fixed pricing. Always. You'll know exactly what your project costs before we start. No hourly surprises, no vague estimates.",
  },
  {
    question: "What tech stack do you use?",
    answer:
      "Primarily Next.js, React, and Tailwind CSS — modern tools that are fast, maintainable, and scalable. We adapt based on your needs.",
  },
  {
    question: "Do you offer hosting?",
    answer:
      "We set up hosting on platforms like Vercel or Netlify as part of launch support. You own everything — we just make sure it's configured properly.",
  },
  {
    question: "What about revisions?",
    answer:
      "Every package includes revision rounds. We design in high-fidelity from the start to minimize back-and-forth. Most clients are happy after round one.",
  },
  {
    question: "Can you help with content and copy?",
    answer:
      "Yes — we offer copywriting as an add-on. We can write brand-aligned content that converts, or work with copy you provide.",
  },
  {
    question: "What happens after launch?",
    answer:
      "You get a full handoff with documentation. If you need ongoing support, we offer lightweight pay-as-you-go updates — no retainer required.",
  },
];
