import { QuikConfigProvider, ApiErrorBody } from "@quikcr/quik-engine";
import "@quikcr/quik-engine/styles.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import type * as React from "react";

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
 * It owns the html/body shell, imports the package's compiled Tailwind CSS,
 * and lets the package's QuikEngine render everything inside <body>.
 *
 * <QuikConfigProvider> is the package's opt-in channel for host
 * configuration. The demo forwards NEXT_PUBLIC_API_URL and
 * NEXT_PUBLIC_API_KEY so any future console screen that calls the host
 * API can read them through `useQuikConfig()`.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full bg-background font-sans text-foreground">
        <QuikConfigProvider
          apiUrl={process.env.NEXT_PUBLIC_API_URL}
          apiKey={process.env.NEXT_PUBLIC_API_KEY}
        >
          {children}
        </QuikConfigProvider>
      </body>
    </html>
  );
}
