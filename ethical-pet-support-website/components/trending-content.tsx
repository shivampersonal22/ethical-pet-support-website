"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type TrendCategory = "all" | "rising" | "hot" | "seasonal" | "evergreen";

interface TrendingProduct {
  id: string;
  rank: number;
  name: string;
  category: string;
  trendTag: TrendCategory;
  price: { us: string; uk: string };
  commission: string;
  link: { us: string; uk: string };
  description: string;
  image: string;
  trendScore: number;
  changeDirection: "up" | "down" | "new" | "stable";
  changeAmount: number;
  reasonTrending: string;
  mealsEstimate: number;
}

function getTodayFormatted() {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const trendingProducts: TrendingProduct[] = [
  {
    id: "t1",
    rank: 1,
    name: "HEPA Air Purifier",
    category: "Home",
    trendTag: "hot",
    price: { us: "$89.99", uk: "\u00a374.99" },
    commission: "~6%",
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "Removes 99.97% allergens. Perfect for allergy season. Quiet sleep mode.",
    image: "/images/products/air-purifier.jpg",
    trendScore: 98,
    changeDirection: "up",
    changeAmount: 12,
    reasonTrending: "Allergy season + viral TikTok review this week",
    mealsEstimate: 11,
  },
  {
    id: "t2",
    rank: 2,
    name: "Fitness Smart Watch",
    category: "Tech",
    trendTag: "rising",
    price: { us: "$49.99", uk: "\u00a342.99" },
    commission: "~4%",
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "Heart rate, step tracking, sleep monitor. 7-day battery life.",
    image: "/images/products/smart-watch.jpg",
    trendScore: 94,
    changeDirection: "up",
    changeAmount: 8,
    reasonTrending: "New Year fitness resolutions still going strong",
    mealsEstimate: 4,
  },
  {
    id: "t3",
    rank: 3,
    name: "Premium Dog Food (15kg)",
    category: "Pet Supplies",
    trendTag: "evergreen",
    price: { us: "$39.99", uk: "\u00a332.99" },
    commission: "~5%",
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "High-protein, grain-free formula for adult dogs.",
    image: "/images/products/dog-food.jpg",
    trendScore: 91,
    changeDirection: "stable",
    changeAmount: 0,
    reasonTrending: "Consistent top seller -- always in demand",
    mealsEstimate: 8,
  },
  {
    id: "t4",
    rank: 4,
    name: "Single-Serve Coffee Maker",
    category: "Kitchen",
    trendTag: "hot",
    price: { us: "$59.99", uk: "\u00a349.99" },
    commission: "~5%",
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "Brews in under 2 minutes. Compatible with pods and ground coffee.",
    image: "/images/products/coffee-maker.jpg",
    trendScore: 88,
    changeDirection: "up",
    changeAmount: 5,
    reasonTrending: "Featured in 'best budget kitchen gadgets' roundups",
    mealsEstimate: 6,
  },
  {
    id: "t5",
    rank: 5,
    name: "Eco Yoga Mat",
    category: "Personal Care",
    trendTag: "seasonal",
    price: { us: "$34.99", uk: "\u00a329.99" },
    commission: "~8%",
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "Non-slip, eco-friendly TPE material. Extra thick 6mm cushion.",
    image: "/images/products/yoga-mat.jpg",
    trendScore: 85,
    changeDirection: "up",
    changeAmount: 15,
    reasonTrending: "Wellness trend + spring fitness push",
    mealsEstimate: 5,
  },
  {
    id: "t6",
    rank: 6,
    name: "Non-Stick Ceramic Pan Set",
    category: "Kitchen",
    trendTag: "evergreen",
    price: { us: "$49.99", uk: "\u00a339.99" },
    commission: "~6%",
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "3-piece set, toxin-free coating, oven safe to 450F.",
    image: "/images/products/ceramic-pans.jpg",
    trendScore: 82,
    changeDirection: "stable",
    changeAmount: 0,
    reasonTrending: "Steady performer in kitchen essentials",
    mealsEstimate: 6,
  },
  {
    id: "t7",
    rank: 7,
    name: "Travel Daypack",
    category: "Personal Care",
    trendTag: "rising",
    price: { us: "$44.99", uk: "\u00a337.99" },
    commission: "~7%",
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "Water-resistant, laptop compartment, anti-theft zippers.",
    image: "/images/products/travel-backpack.jpg",
    trendScore: 79,
    changeDirection: "new",
    changeAmount: 0,
    reasonTrending: "New addition -- spring travel season picks",
    mealsEstimate: 6,
  },
  {
    id: "t8",
    rank: 8,
    name: "Cat Food Variety Pack",
    category: "Pet Supplies",
    trendTag: "evergreen",
    price: { us: "$27.99", uk: "\u00a322.99" },
    commission: "~5%",
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "24 pouches of assorted flavors in gravy for cats.",
    image: "/images/products/cat-food.jpg",
    trendScore: 77,
    changeDirection: "down",
    changeAmount: 2,
    reasonTrending: "Always popular but slightly less search volume this week",
    mealsEstimate: 6,
  },
  {
    id: "t9",
    rank: 9,
    name: "Organic Cotton Bed Sheets",
    category: "Home",
    trendTag: "seasonal",
    price: { us: "$59.99", uk: "\u00a349.99" },
    commission: "~8%",
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "Queen size, 400 thread count, breathable and soft.",
    image: "/images/products/bed-sheets.jpg",
    trendScore: 74,
    changeDirection: "up",
    changeAmount: 3,
    reasonTrending: "Spring home refresh season driving searches",
    mealsEstimate: 10,
  },
  {
    id: "t10",
    rank: 10,
    name: "Stainless Steel Water Bottle",
    category: "Personal Care",
    trendTag: "evergreen",
    price: { us: "$24.99", uk: "\u00a319.99" },
    commission: "~4%",
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "Insulated, BPA-free, keeps drinks cold for 24 hours.",
    image: "/images/products/water-bottle.jpg",
    trendScore: 71,
    changeDirection: "down",
    changeAmount: 1,
    reasonTrending: "Perennial favorite in hydration category",
    mealsEstimate: 2,
  },
];

const trendFilters: { value: TrendCategory; label: string }[] = [
  { value: "all", label: "All Trends" },
  { value: "hot", label: "Hot Now" },
  { value: "rising", label: "Rising Fast" },
  { value: "seasonal", label: "Seasonal" },
  { value: "evergreen", label: "Evergreen" },
];

function RankBadge({ rank }: { rank: number }) {
  const colors =
    rank === 1
      ? "bg-[hsl(43,90%,50%)] text-[hsl(220,25%,12%)]"
      : rank === 2
        ? "bg-[hsl(220,10%,72%)] text-[hsl(220,25%,12%)]"
        : rank === 3
          ? "bg-[hsl(25,60%,50%)] text-[hsl(0,0%,100%)]"
          : "bg-secondary text-foreground";
  return (
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${colors}`}
    >
      #{rank}
    </div>
  );
}

function ChangeIndicator({
  direction,
  amount,
}: {
  direction: "up" | "down" | "new" | "stable";
  amount: number;
}) {
  if (direction === "new") {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase text-primary-foreground">
        NEW
      </span>
    );
  }
  if (direction === "stable") {
    return (
      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <line
            x1="2"
            y1="6"
            x2="10"
            y2="6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        Steady
      </span>
    );
  }
  if (direction === "up") {
    return (
      <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-accent">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 2l4 5H2l4-5z"
            fill="currentColor"
          />
        </svg>
        +{amount}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-destructive">
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6 10l4-5H2l4 5z"
          fill="currentColor"
        />
      </svg>
      -{amount}
    </span>
  );
}

function TrendScoreBar({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-primary transition-all"
          style={{ width: `${score}%` }}
        />
      </div>
      <span className="text-xs font-bold text-primary">{score}</span>
    </div>
  );
}

export function TrendingContent() {
  const [filter, setFilter] = useState<TrendCategory>("all");
  const [region, setRegion] = useState<"us" | "uk">("us");

  const filtered = useMemo(() => {
    if (filter === "all") return trendingProducts;
    return trendingProducts.filter((p) => p.trendTag === filter);
  }, [filter]);

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 lg:px-8 lg:py-16">
      {/* Date Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-primary">
            Daily Rankings
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{getTodayFormatted()}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Rankings refresh daily based on search volume, sales velocity, and seasonal relevance.
          </p>
        </div>

        {/* Region Toggle */}
        <div className="flex overflow-hidden rounded-lg border-2 border-primary/20">
          <button
            type="button"
            className={`px-4 py-2 text-sm font-semibold transition-colors ${
              region === "us"
                ? "bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground hover:bg-secondary"
            }`}
            onClick={() => setRegion("us")}
          >
            USA
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-semibold transition-colors ${
              region === "uk"
                ? "bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground hover:bg-secondary"
            }`}
            onClick={() => setRegion("uk")}
          >
            UK
          </button>
        </div>
      </div>

      {/* Trend Filters */}
      <div className="flex flex-wrap gap-2">
        {trendFilters.map((f) => (
          <button
            key={f.value}
            type="button"
            className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide transition-all ${
              filter === f.value
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                : "bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary"
            }`}
            onClick={() => setFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Rankings List */}
      <div className="mt-8 flex flex-col gap-4">
        {filtered.map((product) => (
          <article
            key={product.id}
            className="group flex flex-col overflow-hidden rounded-xl border-2 border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:flex-row"
          >
            {/* Rank + Image */}
            <div className="relative flex items-center gap-4 p-4 sm:w-72 sm:shrink-0">
              <RankBadge rank={product.rank} />
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-secondary">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="sm:hidden">
                <h3 className="font-bold text-foreground">{product.name}</h3>
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-1 flex-col justify-center gap-2 border-t border-border p-4 sm:border-l sm:border-t-0">
              <div className="hidden sm:block">
                <div className="flex items-center gap-3">
                  <h3 className="font-bold text-foreground">{product.name}</h3>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                      product.trendTag === "hot"
                        ? "bg-destructive/10 text-destructive"
                        : product.trendTag === "rising"
                          ? "bg-accent/10 text-accent"
                          : product.trendTag === "seasonal"
                            ? "bg-chart-4/20 text-foreground"
                            : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {product.trendTag}
                  </span>
                  <ChangeIndicator
                    direction={product.changeDirection}
                    amount={product.changeAmount}
                  />
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {product.category}
                </p>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              <p className="text-xs italic text-muted-foreground">
                Why trending: {product.reasonTrending}
              </p>

              {/* Trend Score */}
              <div className="max-w-xs">
                <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Trend Score
                </p>
                <TrendScoreBar score={product.trendScore} />
              </div>
            </div>

            {/* Price + CTA */}
            <div className="flex items-center justify-between gap-4 border-t border-border p-4 sm:w-52 sm:shrink-0 sm:flex-col sm:items-end sm:justify-center sm:border-l sm:border-t-0">
              <div className="text-right">
                <span className="text-xl font-bold text-foreground">
                  {product.price[region]}
                </span>
                <p className="text-xs text-accent font-semibold">
                  {product.commission} = ~{product.mealsEstimate} meals
                </p>
              </div>
              <Button asChild size="sm" className="shadow-md shadow-primary/20">
                <a
                  href={product.link[region]}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                >
                  Buy on Amazon
                </a>
              </Button>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-10 rounded-xl border-2 border-dashed border-border p-10 text-center">
          <p className="text-lg font-semibold text-foreground">
            No trending products in this category right now
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try another filter to see what is trending today.
          </p>
        </div>
      )}

      {/* How Rankings Work */}
      <div className="mt-12 rounded-xl border-2 border-accent/20 bg-accent/5 p-6">
        <h3 className="font-bold text-foreground">How Daily Rankings Work</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-foreground">Search Volume</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              We track what people are searching for on Amazon, Google Trends, and social media to find products with rising demand.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Sales Velocity</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              Products that are selling faster than usual get a boost. High velocity = high confidence the product converts.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Seasonal Relevance</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              We factor in time of year, holidays, weather, and cultural moments to surface products people actually want right now.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
