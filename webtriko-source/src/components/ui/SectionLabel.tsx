"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

export default function SectionLabel({ children }: { children: string }) {
  return (
    <motion.span
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="inline-block px-4 py-1.5 rounded-full border border-lime/30 bg-lime/5 text-lime text-xs font-jakarta font-semibold uppercase tracking-widest"
    >
      {children}
    </motion.span>
  );
}
