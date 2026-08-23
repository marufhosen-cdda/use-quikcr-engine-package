import {
  ArrowRight,
  Boxes,
  Layers,
  Plug,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import Link from "next/link";

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@quikcr/quik-engine/components/ui";

const FEATURES = [
  {
    icon: Layers,
    title: "One package, every shell",
    body: "Marketing pages, auth flow, and console — wired through a single catch-all route.",
  },
  {
    icon: Boxes,
    title: "Pre-compiled design system",
    body: "Tailwind v4 + shadcn primitives ship in dist/styles.css. No Tailwind config on your side.",
  },
  {
    icon: Plug,
    title: "Own your data layer",
    body: "apiFetch, useApiQuery, useTenants — all in one place. Pass apiUrl through QuikConfigProvider.",
  },
  {
    icon: Shield,
    title: "Auth baked in",
    body: "SessionProvider handles bearer + refresh + logout. Mount it once and useSession() works anywhere.",
  },
  {
    icon: Zap,
    title: "Light + dark, free",
    body: "next-themes mounts inside QuikEngine. Add a ModeToggle anywhere — no second provider needed.",
  },
  {
    icon: Sparkles,
    title: "Theme your way",
    body: "Override --background and --foreground on :root and .dark to recolor the entire shell.",
  },
] as const;

const MODULES = [
  "CRM",
  "HRMS",
  "Accounting",
  "ERP",
  "Automation",
  "Workspaces",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-accent/20"
        />
        <div className="container-wrapper py-20 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="gap-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              v1.0 — published on npm
            </Badge>
            <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              The operating system for your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                next SaaS product
              </span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Drop one route into your Next.js 16+ app and get a full SaaS
              shell — marketing, auth, console, sidebar, theme, and a typed
              data layer. Built on shadcn, Tailwind v4, and react-router.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/sign-up">
                  Get started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/pricing">See pricing</Link>
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Installs in two files. No Tailwind config, no shadcn CLI.
            </p>
          </div>
        </div>
      </section>

      {/* Modules strip */}
      <section className="border-b bg-muted/30">
        <div className="container-wrapper p-4">
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">
            Ships with modules for
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {MODULES.map((module) => (
              <span
                key={module}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground"
              >
                {module}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b">
        <div className="container-wrapper py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Everything you'd build yourself
            </h2>
            <p className="mt-3 text-muted-foreground">
              Six defaults that ship pre-wired. Override any of them by
              writing your own route ahead of the catch-all.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title}>
                  <CardHeader>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <CardTitle className="mt-3 text-lg">
                      {feature.title}
                    </CardTitle>
                    <CardDescription>{feature.body}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Code-style install snippet */}
      <section className="border-b">
        <div className="container-wrapper py-16 md:py-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Two files. That's the integration.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Mount the engine in your catch-all route, import the
                stylesheet in your root layout, and you're done. Everything
                else — auth, theme, data layer, sidebar — is already inside.
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  No <code className="font-mono">tailwind.config.js</code>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  No <code className="font-mono">components.json</code>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                  No third-party data-fetching library
                </li>
              </ul>
            </div>
            <Card>
              <CardContent className="p-0">
                <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-6 text-sm text-zinc-50">
                  <code>{`// app/layout.tsx
import "@quikcr/quik-engine/styles.css";
import { QuikConfigProvider } from "@quikcr/quik-engine";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <QuikConfigProvider apiUrl={process.env.NEXT_PUBLIC_API_URL}>
          {children}
        </QuikConfigProvider>
      </body>
    </html>
  );
}

// app/[[...slug]]/page.tsx
import { QuikEngine } from "@quikcr/quik-engine";

export default function CatchAll() {
  return <QuikEngine />;
}`}</code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40">
        <div className="container-wrapper py-16 md:py-20">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Ready to ship the shell?
            </h2>
            <p className="max-w-xl text-muted-foreground">
              Spin up a workspace and feel the difference — every screen
              below the catch-all is already wired.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/sign-up">
                  Get started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/about">Learn more</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
