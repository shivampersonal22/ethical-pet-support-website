import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CookieConsent } from "@/components/cookie-consent";
import { EmailSignup } from "@/components/email-signup";
import { WelcomePopup } from "@/components/welcome-popup";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <WelcomePopup />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-primary">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(40_100%_95%/0.15),transparent_60%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
            <div className="max-w-xl">
              <span className="inline-block rounded-full bg-primary-foreground/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                Zero extra cost to you
              </span>
              <h1 className="mt-5 font-serif text-4xl leading-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
                Shop Products. Feed Street Animals.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-primary-foreground/85 text-pretty">
                Buy everyday products through our affiliate links. Every
                commission we earn goes directly to purchasing food for street
                dogs and cats -- at no extra cost to you.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-card text-foreground shadow-lg hover:bg-card/90">
                  <Link href="/shop">Browse Products</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                  <Link href="/how-it-works">See How It Works</Link>
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-primary-foreground/70">
                <span className="flex items-center gap-1.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M13.5 5.5l-6 6L4 8"/></svg>
                  100% transparent
                </span>
                <span className="flex items-center gap-1.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M13.5 5.5l-6 6L4 8"/></svg>
                  2,400+ meals funded
                </span>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-4 ring-primary-foreground/10">
              <Image
                src="/images/hero-dogs.jpg"
                alt="Street dogs and cats being fed by volunteers"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* How It Works Preview */}
        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="text-center">
            <h2 className="font-serif text-3xl text-foreground md:text-4xl text-balance">
              How Your Shopping Helps
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              A simple, transparent process that turns everyday purchases into
              meals for animals in need.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Browse & Shop",
                desc: "Find everyday products you already need from our curated selection.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
                  </svg>
                ),
              },
              {
                step: "2",
                title: "We Earn Commission",
                desc: "When you buy through our affiliate links, we receive a small commission.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                  </svg>
                ),
              },
              {
                step: "3",
                title: "Food Is Purchased",
                desc: "Commissions are pooled weekly and used to buy pet food in bulk.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
                  </svg>
                ),
              },
              {
                step: "4",
                title: "Animals Are Fed",
                desc: "Food is distributed to street dogs and cats, with receipts and photos shared.",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.step} className="group rounded-xl border-2 border-border bg-card p-6 text-center transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {item.icon}
                </div>
                <h3 className="mt-4 font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/how-it-works">Learn More</Link>
            </Button>
          </div>
        </section>

        {/* Featured Campaign */}
        <section className="bg-accent">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
            <div className="text-center">
              <span className="inline-block rounded-full bg-accent-foreground/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground">
                Featured Campaign
              </span>
              <h2 className="mt-4 font-serif text-3xl text-accent-foreground md:text-4xl text-balance">
                Feeding Street Animals in Downtown Rescue Zone
              </h2>
            </div>
            <div className="mt-10 grid items-center gap-8 md:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-4 ring-accent-foreground/10">
                <Image
                  src="/images/campaign-feeding.jpg"
                  alt="A street dog and cat near food bowls"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-accent-foreground/85 leading-relaxed text-lg">
                  Our pilot campaign focuses on providing consistent meals for
                  street dogs and cats in the Downtown Rescue Zone. Every
                  purchase you make through our links directly contributes to
                  this goal.
                </p>
                <div className="mt-6 rounded-xl bg-card p-5 shadow-lg">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Monthly Target</span>
                    <span className="text-lg font-bold text-foreground">$500</span>
                  </div>
                  <div className="mt-3 h-4 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: "62%" }}
                    />
                  </div>
                  <p className="mt-2 text-sm font-medium text-primary">
                    $310 raised this month through affiliate commissions
                  </p>
                </div>
                <div className="mt-6">
                  <Button asChild className="bg-card text-foreground shadow-lg hover:bg-card/90">
                    <Link href="/campaign">View Campaign Details</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency Highlight */}
        <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl text-foreground md:text-4xl text-balance">
                Full Transparency, Always
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We believe in earning your trust through radical transparency.
                Every commission, every purchase of pet food, and every
                distribution is documented and shared publicly.
              </p>
              <ul className="mt-6 flex flex-col gap-3">
                {[
                  "Monthly receipts and financial reports",
                  "Photos of food purchases and distribution",
                  "Clear documentation of how commissions are used",
                  "Your personal data is never shared or sold",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="mt-0.5 shrink-0 text-accent"
                      aria-hidden="true"
                    >
                      <path
                        d="M7 10l2 2 4-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button asChild variant="outline">
                  <Link href="/transparency">View Transparency Page</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src="/images/community-feeding.jpg"
                alt="Volunteers distributing pet food to street animals"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Email Signup */}
        <section className="bg-primary">
          <div className="mx-auto max-w-2xl px-4 py-16 lg:px-8 lg:py-24">
            <div className="rounded-2xl bg-card p-8 shadow-2xl lg:p-10">
              <EmailSignup />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <CookieConsent />
    </>
  );
}
