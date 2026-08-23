import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Separator,
} from "@quikcr/quik-engine/components/ui";

const PLANS = [
  {
    name: "Starter",
    price: "$0",
    cadence: "/month",
    description: "Try the engine with a single workspace and a small team.",
    features: [
      "Up to 3 users",
      "Single workspace",
      "CRM + HRMS modules",
      "Community support",
    ],
    cta: { href: "/sign-up", label: "Start free" },
    highlighted: false,
  },
  {
    name: "Team",
    price: "$29",
    cadence: "/user/month",
    description: "For teams running real workloads in production.",
    features: [
      "Unlimited users",
      "Multiple workspaces",
      "All modules included",
      "Email + chat support",
      "Single sign-on",
    ],
    cta: { href: "/sign-up", label: "Start a Team trial" },
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    description: "SLA, dedicated infrastructure, and audit trails.",
    features: [
      "Everything in Team",
      "Dedicated infrastructure",
      "Audit logs + SCIM",
      "Custom contracts + DPA",
      "24/7 priority support",
    ],
    cta: { href: "/about", label: "Talk to sales" },
    highlighted: false,
  },
] as const;

const FAQ = [
  {
    q: "What does the engine actually install?",
    a: "Two files in your host: app/layout.tsx (imports dist/styles.css and mounts QuikConfigProvider) and app/[[...slug]]/page.tsx (renders QuikEngine). That's the whole integration.",
  },
  {
    q: "Can I keep my own auth provider?",
    a: "Yes. Mount SessionProvider yourself, call setSession(...) from your login form, and the rest of the package reads the bearer through apiFetch automatically.",
  },
  {
    q: "Do I have to use all six modules?",
    a: "No. Each URL is a Next.js route in your host. Claim what you want at app/(marketing)/... or app/(admin)/..., and the package's catch-all only handles what you didn't claim.",
  },
  {
    q: "Can the marketing pages live in my repo?",
    a: "That's the default. Add app/(marketing)/page.tsx for the landing, app/(marketing)/pricing/page.tsx for pricing, and the catch-all never sees those URLs.",
  },
] as const;

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-accent/20"
        />
        <div className="container-wrapper py-20 text-center md:py-24">
          <Badge variant="outline" className="gap-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            Pricing
          </Badge>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Pay for the team you have.{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Not the seats you don't.
            </span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Simple per-seat pricing. No platform fees, no surprise overage
            charges. Start free, upgrade when you're ready.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="border-b">
        <div className="container-wrapper py-16 md:py-20">
          <div className="grid gap-6 lg:grid-cols-3">
            {PLANS.map((plan) => (
              <Card
                key={plan.name}
                className={
                  plan.highlighted
                    ? "relative border-primary/40 shadow-lg shadow-primary/10"
                    : ""
                }
              >
                {plan.highlighted ? (
                  <div className="absolute -top-3 right-6">
                    <Badge className="bg-primary text-primary-foreground">
                      Most popular
                    </Badge>
                  </div>
                ) : null}
                <CardHeader>
                  <CardTitle className="text-lg">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight">
                      {plan.price}
                    </span>
                    {plan.cadence ? (
                      <span className="text-sm text-muted-foreground">
                        {plan.cadence}
                      </span>
                    ) : null}
                  </div>
                  <Separator />
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    size="lg"
                    variant={plan.highlighted ? "default" : "outline"}
                    className="w-full"
                  >
                    <Link href={plan.cta.href}>
                      {plan.cta.label}
                      {plan.highlighted ? (
                        <ArrowRight className="h-4 w-4" />
                      ) : null}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="container-wrapper py-16 md:py-20">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Frequently asked
            </h2>
            <div className="mt-6 divide-y divide-border rounded-lg border bg-card">
              {FAQ.map((item) => (
                <div key={item.q} className="space-y-2 p-5">
                  <h3 className="text-base font-semibold">{item.q}</h3>
                  <p className="text-sm text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
