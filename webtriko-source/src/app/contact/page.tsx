"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import FAQ from "@/components/ui/FAQ";
import { fadeUp, stagger } from "@/lib/motion";
import { siteConfig, faqItems } from "@/data/site";

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const projectTypes = [
  "Startup Website",
  "Small Business Site",
  "Landing Page",
  "Portfolio Site",
  "Website Redesign",
  "Dev Handoff / Build Only",
  "Launch Support",
  "Other",
];

const budgets = [
  "Under $2,500",
  "$2,500 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
  "Not sure yet",
];

const timelines = [
  "ASAP",
  "Within 2 weeks",
  "Within a month",
  "No rush — planning ahead",
];

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!form.projectType) newErrors.projectType = "Please select a project type.";
    if (!form.message.trim()) newErrors.message = "Tell us a bit about your project.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // Simulate submission — replace with real endpoint
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const inputClasses = (field: string) =>
    `w-full bg-slate/50 border ${
      errors[field] ? "border-coral" : "border-warm/10 focus:border-lime"
    } rounded-xl px-5 py-3.5 font-jakarta text-warm text-sm placeholder:text-warm/30 outline-none transition-colors duration-300`;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20" aria-labelledby="contact-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center max-w-2xl mx-auto">
            <motion.div variants={fadeUp}>
              <SectionLabel>Contact</SectionLabel>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              id="contact-hero"
              className="font-syne font-extrabold text-4xl md:text-6xl lg:text-7xl text-warm tracking-tight mt-6 mb-6"
            >
              Let&apos;s talk{" "}
              <span className="text-lime">shop.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="font-jakarta text-warm/50 text-lg leading-relaxed">
              No pitch meetings. No 30-day onboarding. Just tell us what you need and we&apos;ll tell you exactly what it takes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 rounded-2xl bg-lime/10 border border-lime/20 flex items-center justify-center mx-auto mb-6">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                    <path d="M8 16L14 22L24 10" stroke="#B5FF47" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h2 className="font-syne font-extrabold text-3xl text-warm mb-4">Message sent.</h2>
                <p className="font-jakarta text-warm/50 text-lg mb-8">
                  We&apos;ll get back to you within 24 hours. Usually faster.
                </p>
                <Button href="/" variant="outline">Back to Home</Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                variants={stagger}
                initial="hidden"
                animate="visible"
                onSubmit={handleSubmit}
                className="space-y-6"
                noValidate
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={fadeUp}>
                    <label htmlFor="name" className="block font-jakarta font-medium text-warm text-sm mb-2">
                      Name <span className="text-coral">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Your name"
                      className={inputClasses("name")}
                      required
                    />
                    {errors.name && <p className="text-coral text-xs mt-1 font-jakarta">{errors.name}</p>}
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label htmlFor="email" className="block font-jakarta font-medium text-warm text-sm mb-2">
                      Email <span className="text-coral">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="you@company.com"
                      className={inputClasses("email")}
                      required
                    />
                    {errors.email && <p className="text-coral text-xs mt-1 font-jakarta">{errors.email}</p>}
                  </motion.div>
                </div>

                <motion.div variants={fadeUp}>
                  <label htmlFor="company" className="block font-jakarta font-medium text-warm text-sm mb-2">
                    Company
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={form.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    placeholder="Your company (optional)"
                    className={inputClasses("company")}
                  />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <label htmlFor="projectType" className="block font-jakarta font-medium text-warm text-sm mb-2">
                    Project Type <span className="text-coral">*</span>
                  </label>
                  <select
                    id="projectType"
                    value={form.projectType}
                    onChange={(e) => handleChange("projectType", e.target.value)}
                    className={`${inputClasses("projectType")} appearance-none cursor-pointer`}
                    required
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {errors.projectType && <p className="text-coral text-xs mt-1 font-jakarta">{errors.projectType}</p>}
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={fadeUp}>
                    <label htmlFor="budget" className="block font-jakarta font-medium text-warm text-sm mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      value={form.budget}
                      onChange={(e) => handleChange("budget", e.target.value)}
                      className={`${inputClasses("budget")} appearance-none cursor-pointer`}
                    >
                      <option value="">Select budget</option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label htmlFor="timeline" className="block font-jakarta font-medium text-warm text-sm mb-2">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      value={form.timeline}
                      onChange={(e) => handleChange("timeline", e.target.value)}
                      className={`${inputClasses("timeline")} appearance-none cursor-pointer`}
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </motion.div>
                </div>

                <motion.div variants={fadeUp}>
                  <label htmlFor="message" className="block font-jakarta font-medium text-warm text-sm mb-2">
                    Tell us about your project <span className="text-coral">*</span>
                  </label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="What are you building? What's the goal? Any details that help us understand your needs."
                    rows={5}
                    className={`${inputClasses("message")} resize-none`}
                    required
                  />
                  {errors.message && <p className="text-coral text-xs mt-1 font-jakarta">{errors.message}</p>}
                </motion.div>

                <motion.div variants={fadeUp}>
                  <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                    {submitting ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>

                <motion.p variants={fadeUp} className="text-center font-jakarta text-warm/30 text-xs">
                  We respond within 24 hours. Usually same-day. Or email us directly at{" "}
                  <a href={`mailto:${siteConfig.email}`} className="text-lime/60 hover:text-lime transition-colors">
                    {siteConfig.email}
                  </a>
                </motion.p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-slate/20 border-t border-warm/5" aria-labelledby="contact-faq">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>FAQ</SectionLabel>
            <h2 id="contact-faq" className="font-syne font-extrabold text-3xl md:text-4xl text-warm tracking-tight mt-4">
              Before you ask
            </h2>
          </div>
          <FAQ items={faqItems.slice(0, 5)} />
        </div>
      </section>
    </>
  );
}
