"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-lime text-void hover:bg-lime/90 border border-lime",
  secondary:
    "bg-slate text-warm hover:bg-slate/80 border border-warm/10",
  outline:
    "bg-transparent text-warm border border-warm/20 hover:border-lime hover:text-lime",
  ghost:
    "bg-transparent text-warm hover:text-lime",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-jakarta font-semibold rounded-lg
    transition-all duration-300 ease-out
    focus-visible:outline-2 focus-visible:outline-lime focus-visible:outline-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.trim();

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02 },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: { duration: 0.2 },
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={baseClasses} aria-label={ariaLabel}>
          {children}
          {variant === "primary" && (
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              <path
                d="M1 7H13M13 7L7 1M13 7L7 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
}
