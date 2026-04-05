"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { fadeUp, stagger, staggerSlow } from "@/lib/motion";
import { caseStudies } from "@/data/site";

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28" aria-labelledby="work-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.div variants={fadeUp}>
              <SectionLabel>Our Work</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              id="work-hero"
              className="font-syne font-extrabold text-4xl md:text-6xl lg:text-7xl text-warm tracking-tight mt-6 mb-6"
            >
              Shipped. Live.{" "}
              <span className="text-lime">Working.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-jakarta text-warm/50 text-lg md:text-xl leading-relaxed max-w-2xl">
              Real projects for real businesses. Every one of these launched on time and on budget — because that&apos;s how we work.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerSlow}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-24 md:space-y-32"
          >
            {caseStudies.map((project, i) => (
              <motion.article
                key={project.slug}
                variants={fadeUp}
                id={project.slug}
                className="scroll-mt-24"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Visual */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className={`aspect-[4/3] rounded-2xl relative overflow-hidden border border-warm/5 ${i % 2 === 1 ? "lg:order-2" : ""}`}
                    style={{ background: `linear-gradient(135deg, ${project.color}10, ${project.color}05)` }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="font-syne font-extrabold text-6xl md:text-8xl tracking-tight opacity-15"
                        style={{ color: project.color }}
                      >
                        {project.title}
                      </span>
                    </div>
                    {/* Decorative grid */}
                    <div className="absolute inset-0 grid-overlay opacity-30" />
                    {/* Tech tags */}
                    <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="bg-void/80 backdrop-blur-sm border border-warm/10 text-warm/60 font-jakarta text-xs px-3 py-1 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <span className="font-jakarta text-xs text-lime/60 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h2 className="font-syne font-extrabold text-3xl md:text-4xl text-warm tracking-tight mt-2 mb-3">
                      {project.title}
                    </h2>
                    <p className="font-syne font-bold text-lg text-warm/60 italic mb-6">
                      {project.tagline}
                    </p>

                    <div className="space-y-6 mb-8">
                      <div>
                        <h3 className="font-jakarta font-semibold text-warm text-sm mb-2">The Problem</h3>
                        <p className="font-jakarta text-warm/50 text-sm leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <h3 className="font-jakarta font-semibold text-warm text-sm mb-2">The Solution</h3>
                        <p className="font-jakarta text-warm/50 text-sm leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {project.results.map((result, j) => (
                        <div
                          key={j}
                          className="bg-slate/50 border border-warm/5 rounded-xl p-4"
                        >
                          <p className="font-jakarta font-semibold text-lime text-sm">{result}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {i < caseStudies.length - 1 && (
                  <div className="mt-24 md:mt-32 h-px bg-warm/5" />
                )}
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-warm/5 bg-slate/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} className="font-syne font-extrabold text-3xl md:text-5xl text-warm tracking-tight mb-4">
              Your project could be next.
            </motion.h2>
            <motion.p variants={fadeUp} className="font-jakarta text-warm/50 text-lg mb-8 max-w-md mx-auto">
              Let&apos;s talk about what you&apos;re building.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button href="/contact" size="lg">Start a Project</Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
