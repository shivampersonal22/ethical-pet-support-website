import Image from "next/image";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CookieConsent } from "@/components/cookie-consent";
import { EmailSignup } from "@/components/email-signup";

export const metadata: Metadata = {
  title: "Impact Reports - PawsForward",
  description:
    "Monthly impact reports with receipts, photos, and honest documentation of how affiliate commissions are used to feed street animals.",
};

const reports = [
  {
    month: "January 2026",
    summary:
      "Our first full month of operations. We earned $520 in affiliate commissions and spent $495 on pet food. 50+ animals were fed across 4 weekly distributions.",
    stats: {
      commissionsEarned: "$520",
      foodPurchased: "$495",
      animalsFed: "50+",
      distributions: "4",
    },
    highlights: [
      "Completed all 4 scheduled weekly distributions",
      "Purchased 45kg of dog food and 30kg of cat food",
      "Established 3 regular feeding stations",
      "Partnered with 5 local volunteers",
    ],
    photos: [
      { src: "/images/hero-dogs.jpg", alt: "January food distribution to street dogs" },
      { src: "/images/community-feeding.jpg", alt: "Community volunteers distributing pet food" },
    ],
  },
];

export default function ImpactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-secondary">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center lg:px-8 lg:py-24">
            <h1 className="font-serif text-4xl text-foreground md:text-5xl text-balance">
              Impact Reports
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Honest, factual monthly reports showing exactly how your purchases
              help feed street dogs and cats. No exaggeration.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-16">
            {reports.map((report) => (
              <article key={report.month} className="rounded-xl border border-border bg-card overflow-hidden">
                <div className="bg-primary px-6 py-4">
                  <h2 className="font-serif text-2xl text-primary-foreground">
                    {report.month}
                  </h2>
                </div>
                <div className="p-6">
                  <p className="leading-relaxed text-muted-foreground">
                    {report.summary}
                  </p>

                  {/* Stats Grid */}
                  <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                    {[
                      { label: "Commissions Earned", value: report.stats.commissionsEarned },
                      { label: "Food Purchased", value: report.stats.foodPurchased },
                      { label: "Animals Fed", value: report.stats.animalsFed },
                      { label: "Distributions", value: report.stats.distributions },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-lg bg-secondary p-4 text-center"
                      >
                        <p className="text-2xl font-bold text-foreground">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="mt-6">
                    <h3 className="font-semibold text-foreground">Highlights</h3>
                    <ul className="mt-3 flex flex-col gap-2">
                      {report.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Photos */}
                  <div className="mt-6">
                    <h3 className="font-semibold text-foreground">
                      Photos & Documentation
                    </h3>
                    <div className="mt-3 grid gap-4 sm:grid-cols-2">
                      {report.photos.map((photo) => (
                        <div
                          key={photo.src}
                          className="relative aspect-[4/3] overflow-hidden rounded-lg"
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

                  {/* Receipts */}
                  <div className="mt-6 rounded-lg bg-secondary p-4">
                    <h3 className="font-semibold text-foreground">
                      Receipts & Financial Documents
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      All receipts for pet food purchases are available as PDF
                      downloads. Financial summaries are included in each monthly
                      report.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <path d="M3.5 1.75h4.67l2.58 2.58v7.92H3.5V1.75z" stroke="currentColor" strokeWidth="1.2" />
                          <path d="M5.25 8.75h3.5M5.25 6.75h3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                        receipt-jan-2026-week1.pdf
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <path d="M3.5 1.75h4.67l2.58 2.58v7.92H3.5V1.75z" stroke="currentColor" strokeWidth="1.2" />
                          <path d="M5.25 8.75h3.5M5.25 6.75h3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                        receipt-jan-2026-week2.pdf
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <path d="M3.5 1.75h4.67l2.58 2.58v7.92H3.5V1.75z" stroke="currentColor" strokeWidth="1.2" />
                          <path d="M5.25 8.75h3.5M5.25 6.75h3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                        financial-summary-jan-2026.pdf
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Archive Note */}
          <div className="mt-12 rounded-lg border border-border bg-card p-6 text-center">
            <h3 className="font-serif text-xl text-foreground">Report Archive</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              As we publish more monthly reports, they will be archived here in
              reverse chronological order. This is our first month, so there is
              only one report so far. All past reports will remain accessible
              permanently.
            </p>
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
