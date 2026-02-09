import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CookieConsent } from "@/components/cookie-consent";
import { EmailSignup } from "@/components/email-signup";

export const metadata: Metadata = {
  title: "Campaign - PawsForward",
  description:
    "Our pilot campaign: feeding street dogs and cats in the Downtown Rescue Zone. See progress, photos, and updates.",
};

export default function CampaignPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Campaign Hero */}
        <section className="bg-secondary">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
            <div className="text-center">
              <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                Pilot Campaign
              </span>
              <h1 className="mt-4 font-serif text-4xl text-foreground md:text-5xl text-balance">
                Downtown Rescue Zone
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Our first campaign focuses on providing consistent, nutritious
                meals for street dogs and cats in the Downtown Rescue Zone area.
              </p>
            </div>
          </div>
        </section>

        {/* Campaign Details */}
        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Left: Info */}
            <div>
              <h2 className="font-serif text-2xl text-foreground">
                Campaign Details
              </h2>
              <dl className="mt-6 flex flex-col gap-4">
                {[
                  { label: "Location", value: "Downtown Rescue Zone" },
                  { label: "Animals Served", value: "Approximately 30+ dogs and 20+ cats" },
                  { label: "Campaign Start", value: "January 2026" },
                  { label: "Monthly Target", value: "$500 in pet food" },
                  { label: "Feeding Schedule", value: "Weekly distributions" },
                  { label: "Food Sourced From", value: "Local suppliers and verified online stores" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-1 border-b border-border pb-3">
                    <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      {item.label}
                    </dt>
                    <dd className="text-sm font-medium text-foreground">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Right: Progress */}
            <div>
              <h2 className="font-serif text-2xl text-foreground">
                Monthly Progress
              </h2>
              <div className="mt-6 rounded-lg border border-border bg-card p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-3xl font-bold text-foreground">$310</p>
                    <p className="text-sm text-muted-foreground">
                      raised this month
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-foreground">62%</p>
                    <p className="text-sm text-muted-foreground">of target</p>
                  </div>
                </div>
                <div className="mt-4 h-4 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: "62%" }}
                    role="progressbar"
                    aria-valuenow={62}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label="Campaign progress: 62% of monthly target"
                  />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  We need $190 more in affiliate commissions this month to reach
                  our target. Every product purchase through our links helps us
                  get closer.
                </p>
                <Button asChild className="mt-4 w-full">
                  <Link href="/shop">Shop to Support This Campaign</Link>
                </Button>
              </div>

              {/* How commissions contribute */}
              <div className="mt-6 rounded-lg border border-border bg-card p-6">
                <h3 className="font-semibold text-foreground">
                  What Your Purchases Achieve
                </h3>
                <ul className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    $10 in commissions buys a 5kg bag of dog food
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    $7 in commissions buys a 3kg bag of cat food
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    $50 in commissions feeds 10 animals for a week
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Photos Section */}
        <section className="bg-secondary/50">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
            <h2 className="font-serif text-2xl text-foreground text-center">
              Photos from the Field
            </h2>
            <p className="mt-2 text-center text-muted-foreground">
              Real photos from our feeding distributions. Updated monthly.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  src: "/images/hero-dogs.jpg",
                  alt: "Volunteers feeding street dogs at golden hour",
                },
                {
                  src: "/images/campaign-feeding.jpg",
                  alt: "Dog and cat near food bowls",
                },
                {
                  src: "/images/community-feeding.jpg",
                  alt: "Community food distribution for street animals",
                },
              ].map((photo) => (
                <div
                  key={photo.src}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl"
                >
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Updates Section */}
        <section className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-24">
          <h2 className="font-serif text-2xl text-foreground text-center">
            Campaign Updates
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            {[
              {
                date: "February 3, 2026",
                title: "Week 5 Distribution Complete",
                text: "Distributed 25kg of dog food and 15kg of cat food across three feeding stations. All animals appeared healthy and well-nourished.",
              },
              {
                date: "January 27, 2026",
                title: "January Target Reached",
                text: "We successfully reached our January target of $500 in pet food purchases. Thank you to everyone who shopped through our links.",
              },
              {
                date: "January 15, 2026",
                title: "Campaign Launch",
                text: "Our pilot campaign is officially live. We have identified feeding stations and partnered with local volunteers for weekly distributions.",
              },
            ].map((update) => (
              <article
                key={update.date}
                className="rounded-lg border border-border bg-card p-5"
              >
                <time className="text-xs text-muted-foreground">
                  {update.date}
                </time>
                <h3 className="mt-1 font-semibold text-foreground">
                  {update.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {update.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Email Signup */}
        <section className="bg-secondary/50">
          <div className="mx-auto max-w-2xl px-4 py-16 lg:px-8 lg:py-24">
            <EmailSignup />
          </div>
        </section>
      </main>
      <SiteFooter />
      <CookieConsent />
    </>
  );
}
