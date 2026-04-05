"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { fadeUp, stagger, staggerSlow } from "@/lib/motion";
import { processSteps } from "@/data/site";

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28" aria-labelledby="process-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={fadeUp}>
              <SectionLabel>Our Process</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              id="process-hero"
              className="font-syne font-extrabold text-4xl md:text-6xl lg:text-7xl text-warm tracking-tight mt-6 mb-6"
            >
              No bloated process.<br />
              <span className="text-lime">No mystery timeline.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-jakarta text-warm/50 text-lg md:text-xl leading-relaxed max-w-2xl">
              Four steps. Ten days or less. A site you&apos;re proud of. Here&apos;s exactly how we get there — no surprises, no drama.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-0"
          >
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="relative"
              >
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className="absolute left-8 md:left-12 top-full w-px h-8 md:h-12 bg-lime/10" aria-hidden="true" />
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 md:py-16 border-b border-warm/5">
                  {/* Number */}
                  <div className="lg:col-span-2 flex items-start">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-lime/5 border border-lime/20 flex items-center justify-center">
                      <span className="font-syne font-extrabold text-2xl md:text-3xl text-lime">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-5">
                    <span className="font-jakarta text-xs text-lime/60 uppercase tracking-wider">{step.subtitle}</span>
                    <h2 className="font-syne font-extrabold text-2xl md:text-4xl text-warm tracking-tight mt-2 mb-4">
                      {step.title}
                    </h2>
                    <p className="font-jakarta text-warm/50 text-base leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <p className="font-jakarta text-warm/30 text-sm italic">
                      {step.why}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="lg:col-span-5">
                    <p className="font-jakarta font-semibold text-warm text-sm mb-4">What you get:</p>
                    <div className="space-y-3">
                      {step.deliverables.map((d, j) => (
                        <div key={j} className="flex items-center gap-3 bg-slate/30 rounded-xl px-5 py-3 border border-warm/5">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0" aria-hidden="true">
                            <path d="M3 8L6.5 11.5L13 4.5" stroke="#B5FF47" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="font-jakarta text-warm/70 text-sm">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 md:py-28 bg-slate/20 border-y border-warm/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <SectionLabel>Why It&apos;s Faster</SectionLabel>
            <motion.h2 variants={fadeUp} className="font-syne font-extrabold text-3xl md:text-5xl text-warm tracking-tight mt-4">
              Agency bloat vs. <span className="text-lime">Webtriko lean.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            <motion.div variants={fadeUp} className="bg-coral/5 border border-coral/20 rounded-2xl p-8">
              <h3 className="font-syne font-bold text-xl text-coral mb-6">Typical Agency</h3>
              <ul className="space-y-4">
                {[
                  "4–12 week timeline",
                  "40-slide discovery deck",
                  "3 rounds of wireframes",
                  "Hourly billing surprises",
                  "Scope creep as a business model",
                  "\"We'll circle back\" culture",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 flex-shrink-0" aria-hidden="true">
                      <path d="M4 4L12 12M12 4L4 12" stroke="#FF5C3A" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span className="font-jakarta text-warm/50 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="bg-lime/5 border border-lime/20 rounded-2xl p-8">
              <h3 className="font-syne font-bold text-xl text-lime mb-6">Webtriko</h3>
              <ul className="space-y-4">
                {[
                  "5–10 day delivery",
                  "One focused discovery call",
                  "Design straight to high-fidelity",
                  "Fixed pricing, always",
                  "Clear scope from day one",
                  "Daily updates, zero ghosting",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 flex-shrink-0" aria-hidden="true">
                      <path d="M3 8L6.5 11.5L13 4.5" stroke="#B5FF47" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-jakarta text-warm/70 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="font-syne font-extrabold text-3xl md:text-5xl text-warm tracking-tight mb-4">
              Ready. Set. <span className="text-lime">Live.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="font-jakarta text-warm/50 text-lg mb-8 max-w-md mx-auto">
              Your site could be live in under two weeks. Let&apos;s get started.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button href="/contact" size="lg">Start Your Project</Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
