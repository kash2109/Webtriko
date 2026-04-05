"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { fadeUp, stagger, staggerSlow } from "@/lib/motion";
import { services } from "@/data/site";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28" aria-labelledby="services-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={fadeUp}>
              <SectionLabel>Services</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              id="services-hero"
              className="font-syne font-extrabold text-4xl md:text-6xl lg:text-7xl text-warm tracking-tight mt-6 mb-6"
            >
              Everything you need.<br />
              <span className="text-lime">Nothing you don&apos;t.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-jakarta text-warm/50 text-lg md:text-xl leading-relaxed max-w-2xl">
              No bloated retainers. No mystery scope. Just clear services with clear outcomes — designed for startups and small businesses that move fast.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                variants={fadeUp}
                id={service.id}
                className="group bg-slate/30 border border-warm/5 rounded-2xl p-8 md:p-12 hover:border-lime/20 transition-all duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left */}
                  <div className="lg:col-span-1">
                    <span className="text-lime/40 font-syne font-bold text-sm">0{i + 1}</span>
                    <h2 className="font-syne font-bold text-2xl md:text-3xl text-warm mt-2 mb-3 group-hover:text-lime transition-colors duration-300">
                      {service.title}
                    </h2>
                    <p className="font-jakarta text-warm/50 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      <p className="font-jakarta text-xs text-lime/60 uppercase tracking-wider">
                        Ideal for: <span className="text-warm/40 normal-case">{service.idealFor}</span>
                      </p>
                      <p className="font-jakarta text-xs text-lime/60 uppercase tracking-wider">
                        Timeline: <span className="text-warm/40 normal-case">{service.turnaround}</span>
                      </p>
                    </div>
                  </div>

                  {/* Right - Includes */}
                  <div className="lg:col-span-2">
                    <p className="font-jakarta font-semibold text-warm text-sm mb-4">What&apos;s included:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.includes.map((item, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 flex-shrink-0" aria-hidden="true">
                            <path d="M3 8L6.5 11.5L13 4.5" stroke="#B5FF47" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span className="font-jakarta text-warm/60 text-sm">{item}</span>
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

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-warm/5 bg-slate/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="font-syne font-extrabold text-3xl md:text-5xl text-warm tracking-tight mb-4">
              Not sure which service fits?
            </motion.h2>
            <motion.p variants={fadeUp} className="font-jakarta text-warm/50 text-lg mb-8 max-w-md mx-auto">
              Tell us what you need. We&apos;ll tell you exactly what it takes — no pressure, no pitch.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button href="/contact" size="lg">Get a Quote</Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
