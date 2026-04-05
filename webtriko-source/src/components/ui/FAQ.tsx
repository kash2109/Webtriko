"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="divide-y divide-warm/10"
    >
      {items.map((item, i) => (
        <motion.div key={i} variants={fadeUp}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between py-6 text-left group"
            aria-expanded={openIndex === i}
          >
            <span className="font-jakarta font-medium text-warm text-base md:text-lg pr-8 group-hover:text-lime transition-colors duration-300">
              {item.question}
            </span>
            <span
              className={`flex-shrink-0 w-8 h-8 rounded-full border border-warm/20 flex items-center justify-center transition-all duration-300 ${
                openIndex === i
                  ? "bg-lime border-lime rotate-45"
                  : "group-hover:border-lime"
              }`}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M7 1V13M1 7H13"
                  stroke={openIndex === i ? "#0A0A0F" : "#F6F6F2"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="pb-6 text-warm/60 font-jakarta text-sm md:text-base leading-relaxed max-w-2xl">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
}
