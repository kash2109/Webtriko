"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "@/components/ui/Logo";
import { fadeUp, stagger } from "@/lib/motion";
import { siteConfig, navLinks } from "@/data/site";

const footerLinks = {
  company: [
    ...navLinks,
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-void border-t border-warm/5" role="contentinfo">
      {/* CTA Strip */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 md:py-28">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-lime font-jakarta text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Ready to move?
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-syne font-extrabold text-4xl md:text-6xl lg:text-7xl text-warm tracking-tight mb-6"
          >
            Let&apos;s build something
            <br />
            <span className="text-lime">worth launching.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-warm/50 font-jakarta text-lg max-w-md mx-auto mb-10"
          >
            No pitch decks. No discovery workshops. Just a conversation about what you need.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-lime text-void font-jakarta font-semibold px-8 py-4 rounded-lg text-base hover:bg-lime/90 transition-colors"
              >
                Get a Quote
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 border border-warm/20 text-warm font-jakarta font-semibold px-8 py-4 rounded-lg text-base hover:border-lime hover:text-lime transition-colors"
              >
                See Our Work
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer grid */}
      <div className="border-t border-warm/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <Logo />
              <p className="mt-4 text-warm/40 font-jakarta text-sm max-w-sm leading-relaxed">
                {siteConfig.description}
              </p>
              <p className="mt-6 text-warm/40 font-jakarta text-sm">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-lime transition-colors"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-jakarta font-semibold text-warm text-sm mb-4">
                Pages
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-warm/40 font-jakarta text-sm hover:text-lime transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-jakarta font-semibold text-warm text-sm mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-warm/40 font-jakarta text-sm hover:text-lime transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-warm/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-warm/30 font-jakarta text-xs">
              &copy; {currentYear} Webtriko. All rights reserved.
            </p>
            <p className="text-warm/20 font-jakarta text-xs italic">
              &ldquo;Faster builds. Lighter bills. Zero drama.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
