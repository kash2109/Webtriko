"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { fadeUp, stagger } from "@/lib/motion";

export default function TermsPage() {
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
            Terms of Service
          </motion.h1>
          <motion.div
            variants={fadeUp}
            className="prose-sm font-jakarta text-warm/60 leading-relaxed space-y-6"
          >
            <p>
              <strong className="text-warm">Last updated:</strong> January 2025
            </p>
            <p>
              These Terms of Service govern your use of webtriko.com and the services provided by Webtriko. By using our website or engaging our services, you agree to these terms.
            </p>

            <h2 className="font-syne font-bold text-xl text-warm mt-8 mb-3">Services</h2>
            <p>
              Webtriko provides web design, development, and related digital services. All project scopes, timelines, and pricing are agreed upon in writing before work begins.
            </p>

            <h2 className="font-syne font-bold text-xl text-warm mt-8 mb-3">Payment</h2>
            <p>
              All pricing is provided as fixed quotes. Payment terms are specified in individual project agreements. We typically require a deposit before starting work, with the remainder due upon completion.
            </p>

            <h2 className="font-syne font-bold text-xl text-warm mt-8 mb-3">Intellectual Property</h2>
            <p>
              Upon full payment, you own all custom design and code created for your project. We retain the right to showcase the work in our portfolio unless otherwise agreed.
            </p>

            <h2 className="font-syne font-bold text-xl text-warm mt-8 mb-3">Revisions</h2>
            <p>
              Revision rounds are included in every package as specified. Additional revisions beyond the agreed scope may incur extra charges, which will be discussed and approved before proceeding.
            </p>

            <h2 className="font-syne font-bold text-xl text-warm mt-8 mb-3">Limitation of Liability</h2>
            <p>
              Webtriko&apos;s liability is limited to the total amount paid for the specific project in question. We are not liable for indirect, incidental, or consequential damages.
            </p>

            <h2 className="font-syne font-bold text-xl text-warm mt-8 mb-3">Contact</h2>
            <p>
              Questions about these terms? Email us at{" "}
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
