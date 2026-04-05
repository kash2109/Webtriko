"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import FAQ from "@/components/ui/FAQ";
import { fadeUp, stagger, staggerSlow } from "@/lib/motion";
import { pricingPackages, addOns, faqItems } from "@/data/site";

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28" aria-labelledby="pricing-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center max-w-3xl mx-auto">
            <motion.div variants={fadeUp}>
              <SectionLabel>Pricing</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              id="pricing-hero"
              className="font-syne font-extrabold text-4xl md:text-6xl lg:text-7xl text-warm tracking-tight mt-6 mb-6"
            >
              Flat pricing.{" "}
              <span className="text-lime">Zero surprises.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-jakarta text-warm/50 text-lg md:text-xl leading-relaxed">
              You see the number before we shake hands. No hourly billing. No scope creep charges. No &ldquo;we&apos;ll figure it out later.&rdquo;
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className={`rounded-2xl p-8 md:p-10 border transition-all duration-500 flex flex-col ${
                  pkg.highlighted
                    ? "bg-lime/5 border-lime/30 relative"
                    : "bg-slate/30 border-warm/5 hover:border-warm/10"
                }`}
              >
                {pkg.highlighted && (
                  <span className="absolute -top-3 left-8 bg-lime text-void font-jakarta font-semibold text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <h2 className="font-syne font-bold text-2xl text-warm mb-2">{pkg.name}</h2>
                <p className="font-syne font-extrabold text-4xl text-lime mb-2">{pkg.price}</p>
                <p className="font-jakarta text-warm/50 text-sm leading-relaxed mb-2">{pkg.description}</p>

                <div className="mb-6">
                  <span className="font-jakarta text-xs text-lime/60 uppercase tracking-wider">
                    Ideal for: <span className="text-warm/40 normal-case">{pkg.idealFor}</span>
                  </span>
                  <br />
                  <span className="font-jakarta text-xs text-lime/60 uppercase tracking-wider">
                    Timeline: <span className="text-warm/40 normal-case">{pkg.turnaround}</span>
                  </span>
                </div>

                <div className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 flex-shrink-0" aria-hidden="true">
                        <path d="M3 8L6.5 11.5L13 4.5" stroke="#B5FF47" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="font-jakarta text-warm/60 text-sm">{f}</span>
                    </div>
                  ))}
                </div>

                <Button
                  href="/contact"
                  variant={pkg.highlighted ? "primary" : "outline"}
                  className="w-full"
                >
                  {pkg.price === "Let's talk" ? "Get in Touch" : "Get Started"}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* No hidden fees banner */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 bg-slate/30 border border-warm/5 rounded-2xl p-8 text-center"
          >
            <p className="font-syne font-bold text-xl text-warm mb-2">No hidden fees. Ever.</p>
            <p className="font-jakarta text-warm/50 text-sm max-w-lg mx-auto">
              Every quote is fixed. Every invoice matches the quote. If scope changes, we discuss it before we bill it. Radical transparency is a core value — not a marketing line.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 md:py-28 bg-slate/20 border-y border-warm/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12">
            <SectionLabel>Add-Ons</SectionLabel>
            <motion.h2 variants={fadeUp} className="font-syne font-extrabold text-3xl md:text-4xl text-warm tracking-tight mt-4">
              Need more? Just add it.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          >
            {addOns.map((addon) => (
              <motion.div
                key={addon.name}
                variants={fadeUp}
                className="bg-slate/50 border border-warm/5 rounded-xl p-6 flex items-center justify-between hover:border-lime/10 transition-colors duration-300"
              >
                <span className="font-jakarta text-warm/70 text-sm">{addon.name}</span>
                <span className="font-jakarta font-semibold text-lime text-sm">{addon.price}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What's NOT included */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-2xl">
            <SectionLabel>Good to Know</SectionLabel>
            <motion.h2 variants={fadeUp} className="font-syne font-extrabold text-3xl md:text-4xl text-warm tracking-tight mt-4 mb-8">
              What&apos;s not included
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-4">
              {[
                "Third-party subscriptions (hosting, domains, premium plugins)",
                "Stock photography or illustration licensing",
                "Ongoing content writing beyond initial scope",
                "Custom backend development or database work (quoted separately)",
                "Print design or offline materials",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-warm/20 font-jakarta text-sm mt-0.5">—</span>
                  <span className="font-jakarta text-warm/50 text-sm">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-slate/20 border-y border-warm/5" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
            <SectionLabel>FAQ</SectionLabel>
            <motion.h2 variants={fadeUp} id="faq-heading" className="font-syne font-extrabold text-3xl md:text-4xl text-warm tracking-tight mt-4">
              Questions? Answered.
            </motion.h2>
          </motion.div>
          <FAQ items={faqItems} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="font-syne font-extrabold text-3xl md:text-5xl text-warm tracking-tight mb-4">
              Know what you need?
            </motion.h2>
            <motion.p variants={fadeUp} className="font-jakarta text-warm/50 text-lg mb-8 max-w-md mx-auto">
              Let&apos;s skip the small talk and get you a quote.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button href="/contact" size="lg">Get Your Quote</Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
