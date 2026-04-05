"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { fadeUp, stagger } from "@/lib/motion";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="text-center max-w-lg"
      >
        <motion.p
          variants={fadeUp}
          className="font-syne font-extrabold text-[120px] md:text-[180px] text-lime/10 leading-none select-none"
        >
          404
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="font-syne font-extrabold text-3xl md:text-5xl text-warm tracking-tight -mt-8 mb-4"
        >
          Page not found.
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="font-jakarta text-warm/50 text-lg mb-8"
        >
          This page doesn&apos;t exist — but your next website could. Let&apos;s build something that actually works.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
          <Button href="/" size="lg">Back to Home</Button>
          <Button href="/contact" variant="outline" size="lg">Get a Quote</Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
