import { ArrowRight, Compass, GitBranch, Heart, Rocket } from "lucide-react";
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

const VALUES = [
  {
    icon: Compass,
    title: "Opinionated, not rigid",
    body: "Defaults that get you to a product today, escape hatches for the long run.",
  },
  {
    icon: GitBranch,
    title: "Composable end-to-end",
    body: "Marketing pages, auth shell, and the console share a single design system and data layer.",
  },
  {
    icon: Heart,
    title: "Boring infrastructure",
    body: "Routing, auth, and theming are solved problems. We keep them boring on purpose.",
  },
] as const;

const TEAM = [
  { name: "Asha Patel", role: "Co-founder · CEO", initials: "AP" },
  { name: "Diego Romero", role: "Co-founder · CTO", initials: "DR" },
  { name: "Mei Tanaka", role: "Design lead", initials: "MT" },
  { name: "Jonas Weber", role: "Engineering", initials: "JW" },
] as const;

const STATS = [
  { value: "12k+", label: "Active workspaces" },
  { value: "99.99%", label: "API uptime" },
  { value: "60+", label: "Countries served" },
  { value: "< 8 min", label: "Median time to first deploy" },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-accent/20"
        />
        <div className="container-wrapper py-20 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="gap-1.5">
              <Rocket className="h-3.5 w-3.5" />
              About QuikEngine
            </Badge>
            <h1 className="mt-5 text-4xl font-bold tracking-tight md:text-5xl">
              We're building the{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                SaaS operating system
              </span>{" "}
              we always wished we had.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              QuikEngine started as an internal toolkit for shipping SaaS
              products fast. Today it powers thousands of workspaces across
              CRM, HRMS, Accounting, ERP, and Automation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b">
        <div className="container-wrapper py-12 md:py-16">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="text-3xl font-bold tracking-tight md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b">
        <div className="container-wrapper py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              What we care about
            </h2>
            <p className="mt-3 text-muted-foreground">
              The three principles we hold ourselves to when shipping a new
              release.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title}>
                  <CardHeader>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <CardTitle className="mt-3 text-lg">
                      {value.title}
                    </CardTitle>
                    <CardDescription>{value.body}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-b">
        <div className="container-wrapper py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              The team
            </h2>
            <p className="mt-3 text-muted-foreground">
              A small group of builders shipping the SaaS shell we'd want
              to use ourselves.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <Card key={member.name}>
                <CardContent className="flex flex-col items-center gap-3 pt-6 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-base font-semibold text-primary">
                    {member.initials}
                  </span>
                  <div>
                    <p className="font-semibold">{member.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/40">
        <div className="container-wrapper py-16 md:py-20">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              See it in action
            </h2>
            <p className="max-w-xl text-muted-foreground">
              Spin up a workspace, drop into the console, and feel the
              difference.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/sign-up">
                  Get started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/">Back to home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
