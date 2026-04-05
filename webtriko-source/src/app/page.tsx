"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { fadeUp, stagger, staggerSlow } from "@/lib/motion";
import {
  stats,
  services,
  caseStudies,
  processSteps,
  testimonials,
  pricingPackages,
} from "@/data/site";

/* ── Hero ─────────────────────────────────────────── */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 grid-overlay opacity-50" aria-hidden="true" />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-lime/5 rounded-full blur-[120px]"
        aria-hidden="true"
      />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full border border-lime/30 bg-lime/5 text-lime text-xs font-jakarta font-semibold uppercase tracking-widest">
              Web Design &middot; Development &middot; Launch Ready
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            id="hero-heading"
            className="font-syne font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-warm tracking-tighter leading-[0.9] mb-4"
          >
            We Build{" "}
            <span className="text-lime">Faster.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="font-syne font-bold text-xl sm:text-2xl md:text-3xl text-warm/70 italic tracking-tight mb-8"
          >
            &ldquo;Faster builds. Lighter bills. Zero drama.&rdquo;
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="font-jakarta text-warm/50 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          >
            We design and develop websites that launch faster and cost less than you&apos;d expect. No bloated timelines. No mystery invoices.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
            <Button href="/contact" size="lg">Get a Quote</Button>
            <Button href="/work" variant="outline" size="lg">See Our Work</Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-5 h-8 border border-warm/20 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-lime rounded-full" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ── Stats Strip ──────────────────────────────────── */
function StatsStrip() {
  return (
    <section className="relative border-y border-warm/5 bg-slate/30" aria-label="Key statistics">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={fadeUp} className="text-center">
              <p className="font-syne font-extrabold text-4xl md:text-5xl text-warm tracking-tight">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="font-jakarta text-warm/40 text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Services Preview ─────────────────────────────── */
function ServicesPreview() {
  const featured = services.slice(0, 4);
  return (
    <section className="py-24 md:py-32" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <SectionLabel>What We Do</SectionLabel>
          <h2 id="services-heading" className="font-syne font-extrabold text-3xl md:text-5xl text-warm tracking-tight mt-4 mb-4">
            Design that moves.<br /><span className="text-lime">Builds that ship.</span>
          </h2>
          <p className="font-jakarta text-warm/50 text-base md:text-lg leading-relaxed">
            From first sketch to live launch — we handle the full stack so you can focus on your business.
          </p>
        </div>

        <motion.div
          variants={staggerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {featured.map((service, i) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-slate/50 border border-warm/5 rounded-2xl p-8 md:p-10 hover:border-lime/20 transition-all duration-500"
            >
              <span className="text-lime/40 font-syne font-bold text-sm">0{i + 1}</span>
              <h3 className="font-syne font-bold text-xl md:text-2xl text-warm mt-3 mb-3 group-hover:text-lime transition-colors duration-300">
                {service.title}
              </h3>
              <p className="font-jakarta text-warm/50 text-sm leading-relaxed mb-6">{service.shortDesc}</p>
              <span className="font-jakarta text-xs text-lime/60 uppercase tracking-wider">{service.turnaround}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-10 text-center">
          <Button href="/services" variant="outline">View All Services</Button>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Process Teaser ───────────────────────────────── */
function ProcessTeaser() {
  return (
    <section className="py-24 md:py-32 bg-slate/20 border-y border-warm/5" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <SectionLabel>How We Work</SectionLabel>
            <h2 id="process-heading" className="font-syne font-extrabold text-3xl md:text-5xl text-warm tracking-tight mt-4">
              Live in days,<br /><span className="text-lime">not months.</span>
            </h2>
          </div>
          <Button href="/process" variant="outline" size="sm">Full Process</Button>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {processSteps.map((step) => (
            <motion.div key={step.number} variants={fadeUp} className="relative">
              <span className="font-syne font-extrabold text-5xl text-lime/10">{step.number}</span>
              <h3 className="font-syne font-bold text-lg text-warm mt-2 mb-2">{step.title}</h3>
              <p className="font-jakarta text-warm/40 text-sm leading-relaxed">
                {step.description.substring(0, 100)}...
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Work Teaser ──────────────────────────────────── */
function WorkTeaser() {
  const featured = caseStudies.slice(0, 3);
  return (
    <section className="py-24 md:py-32" aria-labelledby="work-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <SectionLabel>Selected Work</SectionLabel>
            <h2 id="work-heading" className="font-syne font-extrabold text-3xl md:text-5xl text-warm tracking-tight mt-4">
              Built to launch.
            </h2>
          </div>
          <Button href="/work" variant="outline" size="sm">View All Projects</Button>
        </div>

        <motion.div
          variants={staggerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {featured.map((project) => (
            <motion.div key={project.slug} variants={fadeUp} whileHover={{ y: -6 }} transition={{ duration: 0.3 }} className="group">
              <Link href={`/work#${project.slug}`} className="block">
                <div
                  className="aspect-[4/3] rounded-2xl mb-5 relative overflow-hidden border border-warm/5"
                  style={{ background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)` }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-syne font-extrabold text-4xl md:text-5xl tracking-tight opacity-20" style={{ color: project.color }}>
                      {project.title}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-void/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-lime font-jakarta font-semibold text-sm">View Project →</span>
                  </div>
                </div>
                <span className="font-jakarta text-xs text-lime/60 uppercase tracking-wider">{project.category}</span>
                <h3 className="font-syne font-bold text-xl text-warm mt-1 group-hover:text-lime transition-colors duration-300">{project.title}</h3>
                <p className="font-jakarta text-warm/40 text-sm mt-1">{project.tagline}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Pricing Teaser ───────────────────────────────── */
function PricingTeaser() {
  return (
    <section className="py-24 md:py-32 bg-slate/20 border-y border-warm/5" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel>Transparent Pricing</SectionLabel>
          <motion.h2 variants={fadeUp} id="pricing-heading" className="font-syne font-extrabold text-3xl md:text-5xl text-warm tracking-tight mt-4 mb-4">
            Clean sites. <span className="text-lime">Clear pricing.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="font-jakarta text-warm/50 text-base md:text-lg">
            No hidden fees. No mystery invoices. You see the number before we shake hands.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pricingPackages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className={`rounded-2xl p-8 border transition-all duration-500 ${
                pkg.highlighted
                  ? "bg-lime/5 border-lime/30 relative"
                  : "bg-slate/50 border-warm/5 hover:border-warm/10"
              }`}
            >
              {pkg.highlighted && (
                <span className="absolute -top-3 left-8 bg-lime text-void font-jakarta font-semibold text-xs px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-syne font-bold text-xl text-warm mb-2">{pkg.name}</h3>
              <p className="font-syne font-extrabold text-3xl text-lime mb-4">{pkg.price}</p>
              <p className="font-jakarta text-warm/50 text-sm mb-6 leading-relaxed">{pkg.description}</p>
              <Button href="/pricing" variant={pkg.highlighted ? "primary" : "outline"} size="sm" className="w-full">
                Learn More
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Testimonials ─────────────────────────────────── */
function Testimonials() {
  return (
    <section className="py-24 md:py-32" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionLabel>What Clients Say</SectionLabel>
          <h2 id="testimonials-heading" className="font-syne font-extrabold text-3xl md:text-5xl text-warm tracking-tight mt-4">
            Fast to market. <span className="text-lime">Easy to trust.</span>
          </h2>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              variants={fadeUp}
              className="bg-slate/50 border border-warm/5 rounded-2xl p-8 md:p-10 hover:border-lime/10 transition-colors duration-500"
            >
              <svg width="32" height="24" viewBox="0 0 32 24" fill="none" className="text-lime/20 mb-4" aria-hidden="true">
                <path d="M0 24V14.4C0 6.4 4.8 1.6 14.4 0L16 3.2C11.2 4.8 8.8 7.2 8.8 10.4H14.4V24H0ZM17.6 24V14.4C17.6 6.4 22.4 1.6 32 0L33.6 3.2C28.8 4.8 26.4 7.2 26.4 10.4H32V24H17.6Z" fill="currentColor" />
              </svg>
              <p className="font-jakarta text-warm/80 text-base md:text-lg leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-lime/10 flex items-center justify-center font-syne font-bold text-lime text-sm" aria-hidden="true">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-jakarta font-semibold text-warm text-sm">{t.name}</p>
                  <p className="font-jakarta text-warm/40 text-xs">{t.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Marquee ──────────────────────────────────────── */
function Marquee() {
  const items = ["Web Design", "Development", "Launch Ready", "Zero Drama", "Faster Builds", "Lighter Bills", "Startup Friendly", "Pixel Perfect"];
  return (
    <div className="py-6 border-y border-warm/5 overflow-hidden" aria-hidden="true">
      <motion.div
        animate={{ x: [0, -1920] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 whitespace-nowrap"
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="font-syne font-bold text-2xl md:text-3xl text-warm/10 flex items-center gap-12">
            {item}
            <span className="w-2 h-2 rounded-full bg-lime/20" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ServicesPreview />
      <Marquee />
      <ProcessTeaser />
      <WorkTeaser />
      <PricingTeaser />
      <Testimonials />
    </>
  );
}
