import { QuikConfigProvider, QuikThemeConfig } from "@quikcr/quik-engine";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import type * as React from "react";
import "@quikcr/quik-engine/styles.css";
// import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "QuikEngine — The operating system for SaaS products",
  description:
    "QuikEngine is a self-contained Next.js 16+ package that powers CRM, HRMS, Accounting, ERP, and more — built as the foundation for your next SaaS product.",
};

/**
 * The host application's root layout.
 *
 * Owns the <html>/<body> shell. The package's compiled stylesheet is
 * imported via @import inside `app/globals.css` (first line) so the
 * host's :root / .dark overrides win on cascade.
 *
 * `<QuikConfigProvider>` is the package's opt-in channel for host
 * configuration. The demo forwards NEXT_PUBLIC_API_URL and
 * NEXT_PUBLIC_API_KEY so any future console screen that calls the host
 * API can read them through `useQuikConfig()`.
 *
 * `suppressHydrationWarning` silences the expected `next-themes` warning
 * when the package flips the `dark` class on <html> after mount.
 */

const theme: QuikThemeConfig = {
  primaryColor: "#50C878",
  fontFamily: "geist-sans",
  fontSize: 0.9,
  borderRadius: 0.75,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <QuikConfigProvider
          apiUrl={process.env.NEXT_PUBLIC_API_URL}
          apiKey={process.env.NEXT_PUBLIC_API_KEY}
          theme={theme}
        >
          {children}
        </QuikConfigProvider>
      </body>
    </html>
  );
}
