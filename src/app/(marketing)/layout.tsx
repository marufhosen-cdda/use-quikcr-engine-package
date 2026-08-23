import type * as React from "react";

import { MarketingHeader } from "./components/marketing-header";

/**
 * Host-owned marketing layout. Mounts the package's design tokens
 * (via the package's `dist/styles.css` already imported in
 * `app/layout.tsx`) and a header that uses the package's `ModeToggle`
 * + `Button` primitives. Marketing URLs claim the route ahead of the
 * package's catch-all, so this layout never reaches `<QuikEngine />`.
 */
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <MarketingHeader />
      <main className="flex-1">{children}</main>
      <footer className="border-t">
        <div className="container-wrapper flex flex-col items-center justify-between gap-3 py-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} QuikEngine demo.</p>
          <p>Built with @quikcr/quik-engine.</p>
        </div>
      </footer>
    </div>
  );
}
