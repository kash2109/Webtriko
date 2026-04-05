"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { fadeUp, stagger, staggerSlow } from "@/lib/motion";
import { values, siteConfig } from "@/data/site";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28" aria-labelledby="about-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={fadeUp}>
              <SectionLabel>About</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              id="about-hero"
              className="font-syne font-extrabold text-4xl md:text-6xl lg:text-7xl text-warm tracking-tight mt-6 mb-6"
            >
              We exist because agencies are{" "}
              <span className="text-lime">too slow.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-jakarta text-warm/50 text-lg md:text-xl leading-relaxed max-w-2xl">
              Webtriko was born from a simple frustration: why does it take 12 weeks and $20K to build a 5-page website? It shouldn&apos;t. So we fixed it.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeUp}>
                <h2 className="font-syne font-extrabold text-2xl md:text-3xl text-warm tracking-tight mb-6">
                  The short version
                </h2>
                <div className="space-y-4 font-jakarta text-warm/60 text-base leading-relaxed">
                  <p>
                    {siteConfig.founder} started Webtriko after spending years watching agencies over-promise and under-deliver. Big decks. Big budgets. Mediocre results. And clients left wondering what they actually paid for.
                  </p>
                  <p>
                    The idea was simple: build a studio that treats every project like it matters. Move fast. Charge fairly. Communicate clearly. Ship quality.
                  </p>
                  <p>
                    We&apos;re not trying to be the biggest agency. We&apos;re trying to be the one you actually recommend to a friend. The one that picks up the phone. The one that delivers on Tuesday when they said Tuesday.
                  </p>
                  <p>
                    That&apos;s it. No manifesto. No mission statement that took a branding workshop to write. Just good work, on time, for a fair price.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Founder card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="bg-slate/30 border border-warm/5 rounded-2xl p-8 md:p-10 sticky top-28">
                <div className="w-20 h-20 rounded-2xl bg-lime/10 border border-lime/20 flex items-center justify-center mb-6">
                  <span className="font-syne font-extrabold text-3xl text-lime">A</span>
                </div>
                <h3 className="font-syne font-bold text-2xl text-warm mb-1">{siteConfig.founder}</h3>
                <p className="font-jakarta text-lime/60 text-sm mb-6">{siteConfig.founderTitle}</p>
                <p className="font-jakarta text-warm/50 text-sm leading-relaxed mb-6">
                  Designer and developer with 8+ years of shipping websites that actually work. Obsessed with speed, clarity, and making clients feel respected — not confused.
                </p>
                <div className="flex gap-3">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-jakarta text-sm text-lime hover:text-lime/80 transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-slate/20 border-y border-warm/5" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
            <SectionLabel>Values</SectionLabel>
            <motion.h2 variants={fadeUp} id="values-heading" className="font-syne font-extrabold text-3xl md:text-5xl text-warm tracking-tight mt-4">
              What we actually believe.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((value, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="bg-slate/50 border border-warm/5 rounded-2xl p-8 hover:border-lime/20 transition-all duration-500"
              >
                <span className="text-lime/30 font-syne font-bold text-sm">0{i + 1}</span>
                <h3 className="font-syne font-bold text-xl text-warm mt-3 mb-3">
                  {value.title}
                </h3>
                <p className="font-jakarta text-warm/50 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What makes us different */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
            <SectionLabel>The Difference</SectionLabel>
            <motion.h2 variants={fadeUp} className="font-syne font-extrabold text-3xl md:text-5xl text-warm tracking-tight mt-4 mb-12">
              Bold, not brash. Warm, not soft. Smart, not nerdy. Swift, not sloppy.
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {[
              { bold: "Bold", sub: "Not Brash" },
              { bold: "Warm", sub: "Not Soft" },
              { bold: "Smart", sub: "Not Nerdy" },
              { bold: "Swift", sub: "Not Sloppy" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-slate/30 border border-warm/5 rounded-xl p-6 text-center"
              >
                <p className="font-syne font-bold text-warm text-lg">{item.bold}</p>
                <p className="font-jakarta text-warm/30 text-xs mt-1">{item.sub}</p>
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
              Like what you see?
            </motion.h2>
            <motion.p variants={fadeUp} className="font-jakarta text-warm/50 text-lg mb-8 max-w-md mx-auto">
              Let&apos;s have a real conversation about your project. No sales pitch. Just clarity.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button href="/contact" size="lg">Get in Touch</Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
