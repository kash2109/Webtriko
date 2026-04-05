"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { fadeUp, stagger } from "@/lib/motion";

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <SectionLabel>Legal</SectionLabel>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-syne font-extrabold text-4xl md:text-5xl text-warm tracking-tight mt-6 mb-8"
          >
            Privacy Policy
          </motion.h1>
          <motion.div
            variants={fadeUp}
            className="prose-sm font-jakarta text-warm/60 leading-relaxed space-y-6"
          >
            <p>
              <strong className="text-warm">Last updated:</strong> January 2025
            </p>
            <p>
              Webtriko (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit webtriko.com or use our services.
            </p>

            <h2 className="font-syne font-bold text-xl text-warm mt-8 mb-3">Information We Collect</h2>
            <p>
              We collect information you provide directly: name, email, company name, and project details when you fill out our contact form. We also collect basic analytics data (page views, referral sources) through privacy-respecting analytics tools.
            </p>

            <h2 className="font-syne font-bold text-xl text-warm mt-8 mb-3">How We Use Your Information</h2>
            <p>
              We use your information to respond to inquiries, provide quotes, deliver our services, and improve our website. We never sell your data to third parties. We never send unsolicited marketing emails.
            </p>

            <h2 className="font-syne font-bold text-xl text-warm mt-8 mb-3">Cookies</h2>
            <p>
              We use minimal, functional cookies to ensure the website works properly. We do not use tracking cookies or advertising pixels.
            </p>

            <h2 className="font-syne font-bold text-xl text-warm mt-8 mb-3">Data Security</h2>
            <p>
              We implement reasonable security measures to protect your information. All data transmission is encrypted via SSL/TLS.
            </p>

            <h2 className="font-syne font-bold text-xl text-warm mt-8 mb-3">Your Rights</h2>
            <p>
              You can request access to, correction of, or deletion of your personal data at any time by emailing hello@webtriko.com.
            </p>

            <h2 className="font-syne font-bold text-xl text-warm mt-8 mb-3">Contact</h2>
            <p>
              Questions about this policy? Email us at{" "}
              <a href="mailto:hello@webtriko.com" className="text-lime hover:text-lime/80 transition-colors">
                hello@webtriko.com
              </a>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
