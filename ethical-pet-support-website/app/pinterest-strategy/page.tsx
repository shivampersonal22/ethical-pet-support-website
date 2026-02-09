import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pinterest Strategy - PawsForward",
  description:
    "How PawsForward uses Pinterest to drive traffic and help feed more street animals through curated product pins and impact stories.",
};

const pinCategories = [
  {
    board: "Shop for Street Animals",
    description:
      "Product pins linking to curated affiliate products. Each pin shows the product, price, and how it helps feed animals.",
    pinCount: "50+ pins",
    color: "bg-primary",
  },
  {
    board: "Impact Stories",
    description:
      "Photos and stories from feeding campaigns. Real images of animals being fed, receipts, and volunteer moments.",
    pinCount: "30+ pins",
    color: "bg-accent",
  },
  {
    board: "How You Can Help",
    description:
      "Infographic pins explaining how affiliate shopping works, step-by-step guides, and myth-busting content.",
    pinCount: "20+ pins",
    color: "bg-primary",
  },
  {
    board: "Street Animal Awareness",
    description:
      "Educational content about street animal welfare, facts about stray populations, and responsible feeding guides.",
    pinCount: "25+ pins",
    color: "bg-accent",
  },
];

const pinTips = [
  {
    title: "Vertical Images (2:3 Ratio)",
    desc: "All product and impact pins use 1000x1500px vertical format for maximum visibility in Pinterest feeds.",
  },
  {
    title: "Rich Pins Enabled",
    desc: "Product Rich Pins automatically pull pricing and availability from our shop pages for each product.",
  },
  {
    title: "SEO-Optimized Descriptions",
    desc: "Every pin uses keyword-rich descriptions like 'buy this product and help feed a street dog today'.",
  },
  {
    title: "Consistent Posting Schedule",
    desc: "15-25 pins per week across all boards, mixing product pins, impact stories, and educational content.",
  },
  {
    title: "Link to Shop Pages",
    desc: "Every product pin links directly to the PawsForward shop page with affiliate links ready to go.",
  },
  {
    title: "Seasonal Campaigns",
    desc: "Special pin series for holidays, pet awareness months, and winter feeding campaigns to boost engagement.",
  },
];

export default function PinterestStrategyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="bg-accent px-4 py-16 text-center lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <span className="inline-block rounded-full bg-accent-foreground/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground">
              Social Strategy
            </span>
            <h1 className="mt-4 font-serif text-4xl text-accent-foreground md:text-5xl text-balance">
              Pinterest Strategy
            </h1>
            <p className="mt-4 text-lg text-accent-foreground/85 leading-relaxed">
              Driving traffic through beautiful product pins and heartwarming
              impact stories. Every click can lead to a meal for a street animal.
            </p>
          </div>
        </section>

        {/* Pin Boards */}
        <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
          <h2 className="font-serif text-3xl text-foreground text-balance">Pinterest Boards</h2>
          <p className="mt-2 text-muted-foreground">
            Organized boards that drive traffic and tell our story.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {pinCategories.map((board) => (
              <div
                key={board.board}
                className="overflow-hidden rounded-xl border-2 border-border bg-card"
              >
                <div className={`${board.color} px-5 py-3`}>
                  <h3 className="font-bold text-primary-foreground">{board.board}</h3>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {board.description}
                  </p>
                  <p className="mt-3 text-xs font-bold text-primary">
                    {board.pinCount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Example Pins */}
        <section className="bg-secondary/50">
          <div className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
            <h2 className="font-serif text-3xl text-foreground text-balance">Example Pin Styles</h2>
            <p className="mt-2 text-muted-foreground">
              Every pin connects products to impact.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                { src: "/images/products/water-bottle.jpg", label: "Product Pin", caption: "Shop this bottle. Feed a street dog." },
                { src: "/images/campaign-feeding.jpg", label: "Impact Pin", caption: "Your shopping funded 50 meals this week." },
                { src: "/images/community-feeding.jpg", label: "Story Pin", caption: "Meet the volunteers feeding animals daily." },
              ].map((pin) => (
                <div key={pin.label} className="overflow-hidden rounded-xl border-2 border-border bg-card shadow-md">
                  <div className="relative aspect-[2/3] w-full">
                    <Image
                      src={pin.src || "/placeholder.svg"}
                      alt={pin.caption}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
                      <span className="rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold uppercase text-primary-foreground">
                        {pin.label}
                      </span>
                      <p className="mt-2 text-sm font-semibold text-card">
                        {pin.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pin Strategy Tips */}
        <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
          <h2 className="font-serif text-3xl text-foreground text-balance">Pin Optimization Tips</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pinTips.map((tip) => (
              <div
                key={tip.title}
                className="rounded-xl border-2 border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              >
                <h3 className="font-bold text-foreground">{tip.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
