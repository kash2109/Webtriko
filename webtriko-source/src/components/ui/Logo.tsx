"use client";

import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 group ${className}`}
      aria-label="Webtriko — Home"
    >
      {/* Lightning bolt icon */}
      <span className="w-8 h-8 bg-lime rounded-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M9.5 1L3 9.5H8L6.5 15L13 6.5H8L9.5 1Z"
            fill="#0A0A0F"
            stroke="#0A0A0F"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="font-syne font-bold text-xl tracking-tight">
        Web<span className="text-lime">triko</span>
      </span>
    </Link>
  );
}
