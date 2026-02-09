import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductFinderContent } from "@/components/product-finder-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Finder - PawsForward",
  description:
    "Find the perfect product to buy and help feed street animals. Filter by category, price, and impact level.",
};

export default function ProductFinderPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="bg-primary px-4 py-16 text-center lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <span className="inline-block rounded-full bg-primary-foreground/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground">
              Smart Shopping
            </span>
            <h1 className="mt-4 font-serif text-4xl text-primary-foreground md:text-5xl text-balance">
              Product Finder
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/85 leading-relaxed">
              Find the best products for you -- and the most meals for street
              animals. Sort by price, category, or impact level.
            </p>
          </div>
        </section>

        <ProductFinderContent />
      </main>
      <SiteFooter />
    </>
  );
}
