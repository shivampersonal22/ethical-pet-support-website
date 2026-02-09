import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CookieConsent } from "@/components/cookie-consent";

export const metadata: Metadata = {
  title: "Affiliate Disclosure - PawsForward",
  description: "Full disclosure of our affiliate relationships and how commissions are used.",
};

export default function AffiliateDisclosurePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-secondary">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center lg:px-8 lg:py-24">
            <h1 className="font-serif text-4xl text-foreground md:text-5xl text-balance">
              Affiliate Disclosure
            </h1>
            <p className="mt-4 text-muted-foreground">
              Last updated: February 1, 2026
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-serif text-2xl text-foreground">Our Affiliate Relationship</h2>
              <p className="mt-3 leading-relaxed text-sm text-muted-foreground">
                PawsForward is a participant in the Amazon Services LLC Associates Program (US) and the Amazon EU Associates Programme (UK). These are affiliate advertising programs designed to provide a means for websites to earn advertising fees by advertising and linking to amazon.com and amazon.co.uk.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground">What This Means for You</h2>
              <ul className="mt-3 flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  When you click a product link on our website and make a purchase on Amazon, we earn a small commission from Amazon.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  You pay exactly the same price whether you use our link or go directly to Amazon. The commission comes from Amazon, not from you.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  Commission rates vary by product category, typically ranging from 1% to 10%.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  We only recommend products we believe offer genuine value. We do not promote products solely because they offer a higher commission rate.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground">How Commissions Are Used</h2>
              <p className="mt-3 leading-relaxed text-sm text-muted-foreground">
                All affiliate commissions earned are used exclusively to purchase food for street dogs and cats. We do not accept direct donations. This means:
              </p>
              <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  Commissions are pooled on a weekly or biweekly basis.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  Pet food is purchased from local suppliers or verified online stores.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  All purchases are documented with receipts and shared in our monthly impact reports.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  Food is distributed to street animals through our active campaigns.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground">FTC Compliance</h2>
              <p className="mt-3 leading-relaxed text-sm text-muted-foreground">
                In accordance with the Federal Trade Commission (FTC) guidelines, we disclose that this website contains affiliate links. This disclosure is present on every page that contains product links, and this dedicated page provides full details about our affiliate relationships.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-secondary p-6">
              <h3 className="font-semibold text-foreground">Required Statement</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                PawsForward is a participant in the Amazon Services LLC Associates Program and the Amazon EU Associates Programme, affiliate advertising programs designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com and Amazon.co.uk. As an Amazon Associate, we earn from qualifying purchases.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-5 text-center">
              <p className="text-sm text-muted-foreground">
                Want to see how your purchases make a difference?{" "}
                <Link href="/impact" className="underline hover:text-foreground">
                  View Impact Reports
                </Link>
                {" "}or{" "}
                <Link href="/transparency" className="underline hover:text-foreground">
                  learn about our transparency practices
                </Link>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <CookieConsent />
    </>
  );
}
