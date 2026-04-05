"use client";

import { motion } from "framer-motion";
import { stagger, letterReveal } from "@/lib/motion";

interface SplitTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}

export default function SplitText({
  text,
  className = "",
  as: Tag = "h1",
  delay = 0,
}: SplitTextProps) {
  const words = text.split(" ");

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.06,
              delayChildren: delay,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="inline"
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden mr-[0.3em]">
            <motion.span
              variants={letterReveal}
              className="inline-block"
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
