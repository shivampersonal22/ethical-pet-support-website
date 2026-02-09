import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { TrendingContent } from "@/components/trending-content";

export const metadata: Metadata = {
  title: "Daily Trending Products | PawsForward",
  description:
    "Today's top trending products ranked by search volume, sales velocity, and seasonal relevance. Shop what's hot and feed street animals with every purchase.",
};

export default function TrendingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="bg-primary">
          <div className="mx-auto max-w-5xl px-4 py-12 lg:px-8 lg:py-16">
            <span className="inline-block rounded-full bg-primary-foreground/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground">
              Updated Daily
            </span>
            <h1 className="mt-4 font-serif text-3xl text-primary-foreground md:text-5xl text-balance">
              Today's Trending Products
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-primary-foreground/80 text-pretty">
              We track what's trending across Amazon, Google, and social media --
              so you can buy what's hot and help feed street animals at the same time.
            </p>
          </div>
        </section>

        <TrendingContent />
      </main>
      <SiteFooter />
    </>
  );
}
