import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Webtriko — Faster builds. Lighter bills. Zero drama.",
    template: "%s — Webtriko",
  },
  description:
    "We design and develop websites that launch faster and cost less than you'd expect. No bloated timelines. No mystery invoices. Clean, effective web work.",
  metadataBase: new URL("https://webtriko.com"),
  openGraph: {
    title: "Webtriko — Faster builds. Lighter bills. Zero drama.",
    description:
      "Web design & development for startups and SMBs. Fast, transparent, zero drama.",
    url: "https://webtriko.com",
    siteName: "Webtriko",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webtriko",
    description:
      "Faster builds. Lighter bills. Zero drama.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jakarta.variable} antialiased`}
    >
      <body className="min-h-screen bg-void text-warm font-jakarta">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
