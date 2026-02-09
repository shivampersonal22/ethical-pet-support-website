import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CookieConsent } from "@/components/cookie-consent";
import { ShopContent } from "@/components/shop-content";

export const metadata: Metadata = {
  title: "Shop - PawsForward",
  description:
    "Browse curated trending products. Every purchase through our affiliate links earns commissions that feed street dogs and cats.",
};

export default function ShopPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-secondary">
          <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8 lg:py-24">
            <h1 className="font-serif text-4xl text-foreground md:text-5xl text-balance">
              Shop & Support
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Browse curated products you already need. Every purchase through
              our links earns a commission that goes directly to feeding street
              animals.
            </p>
            <div className="mx-auto mt-6 max-w-xl rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground">
              <strong className="text-foreground">Affiliate Disclosure:</strong>{" "}
              As an Amazon Associate, we earn from qualifying purchases. You pay
              the same price.{" "}
              <a
                href="/affiliate-disclosure"
                className="underline hover:text-foreground"
              >
                Learn more
              </a>
            </div>
          </div>
        </section>
        <ShopContent />
      </main>
      <SiteFooter />
      <CookieConsent />
    </>
  );
}
