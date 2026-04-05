"use client";

import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
