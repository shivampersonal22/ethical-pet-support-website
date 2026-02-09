"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type SortMode = "price-low" | "price-high" | "impact" | "name";
type Region = "us" | "uk";

interface Product {
  id: string;
  name: string;
  category: string;
  priceUs: number;
  priceUk: number;
  displayPrice: { us: string; uk: string };
  commissionPercent: number;
  link: { us: string; uk: string };
  description: string;
  image: string;
  mealsEstimate: number;
}

const allProducts: Product[] = [
  {
    id: "1",
    name: "Stainless Steel Water Bottle",
    category: "Personal Care",
    priceUs: 24.99,
    priceUk: 19.99,
    displayPrice: { us: "$24.99", uk: "\u00a319.99" },
    commissionPercent: 4,
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "Insulated, BPA-free, keeps drinks cold for 24 hours.",
    image: "/images/products/water-bottle.jpg",
    mealsEstimate: 2,
  },
  {
    id: "2",
    name: "Organic Cotton Towel Set",
    category: "Home",
    priceUs: 34.99,
    priceUk: 27.99,
    displayPrice: { us: "$34.99", uk: "\u00a327.99" },
    commissionPercent: 8,
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "Soft, absorbent, and eco-friendly. Set of 4 bath towels.",
    image: "/images/products/cotton-towels.jpg",
    mealsEstimate: 5,
  },
  {
    id: "4",
    name: "Non-Stick Ceramic Pan Set",
    category: "Kitchen",
    priceUs: 49.99,
    priceUk: 39.99,
    displayPrice: { us: "$49.99", uk: "\u00a339.99" },
    commissionPercent: 6,
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "3-piece set, toxin-free coating, oven safe to 450F.",
    image: "/images/products/ceramic-pans.jpg",
    mealsEstimate: 6,
  },
  {
    id: "9",
    name: "Premium Dog Food (15kg)",
    category: "Pet Supplies",
    priceUs: 39.99,
    priceUk: 32.99,
    displayPrice: { us: "$39.99", uk: "\u00a332.99" },
    commissionPercent: 5,
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "High-protein, grain-free formula for adult dogs.",
    image: "/images/products/dog-food.jpg",
    mealsEstimate: 8,
  },
  {
    id: "10",
    name: "Cat Food Variety Pack",
    category: "Pet Supplies",
    priceUs: 27.99,
    priceUk: 22.99,
    displayPrice: { us: "$27.99", uk: "\u00a322.99" },
    commissionPercent: 5,
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "24 pouches of assorted flavors in gravy for cats.",
    image: "/images/products/cat-food.jpg",
    mealsEstimate: 6,
  },
  {
    id: "12",
    name: "Organic Cotton Bed Sheets",
    category: "Home",
    priceUs: 59.99,
    priceUk: 49.99,
    displayPrice: { us: "$59.99", uk: "\u00a349.99" },
    commissionPercent: 8,
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "Queen size, 400 thread count, breathable and soft.",
    image: "/images/products/bed-sheets.jpg",
    mealsEstimate: 10,
  },
  {
    id: "6",
    name: "LED Desk Lamp",
    category: "Tech",
    priceUs: 29.99,
    priceUk: 24.99,
    displayPrice: { us: "$29.99", uk: "\u00a324.99" },
    commissionPercent: 3,
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "Adjustable brightness, USB charging port, eye-care design.",
    image: "/images/products/desk-lamp.jpg",
    mealsEstimate: 2,
  },
  {
    id: "11",
    name: "Portable Bluetooth Speaker",
    category: "Tech",
    priceUs: 34.99,
    priceUk: 28.99,
    displayPrice: { us: "$34.99", uk: "\u00a328.99" },
    commissionPercent: 3,
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "Waterproof, 20-hour battery, rich bass sound.",
    image: "/images/products/bluetooth-speaker.jpg",
    mealsEstimate: 2,
  },
];

const sortOptions: { value: SortMode; label: string }[] = [
  { value: "impact", label: "Most Meals First" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "name", label: "A-Z" },
];

export function ProductFinderContent() {
  const [sort, setSort] = useState<SortMode>("impact");
  const [region, setRegion] = useState<Region>("us");
  const [maxPrice, setMaxPrice] = useState(100);

  const sorted = useMemo(() => {
    const priceField = region === "us" ? "priceUs" : "priceUk";
    const withinBudget = allProducts.filter((p) => p[priceField] <= maxPrice);
    return [...withinBudget].sort((a, b) => {
      switch (sort) {
        case "impact":
          return b.mealsEstimate - a.mealsEstimate;
        case "price-low":
          return a[priceField] - b[priceField];
        case "price-high":
          return b[priceField] - a[priceField];
        case "name":
          return a.name.localeCompare(b.name);
      }
    });
  }, [sort, region, maxPrice]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 lg:px-8 lg:py-16">
      {/* Controls */}
      <div className="flex flex-col gap-6 rounded-xl border-2 border-border bg-card p-6 lg:flex-row lg:items-end lg:justify-between">
        {/* Region */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Region
          </label>
          <div className="mt-2 flex overflow-hidden rounded-lg border-2 border-primary/20">
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

        {/* Sort */}
        <div>
          <label htmlFor="sort-select" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Sort By
          </label>
          <select
            id="sort-select"
            className="mt-2 block w-full rounded-lg border-2 border-border bg-card px-3 py-2 text-sm font-medium text-foreground"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortMode)}
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Budget */}
        <div className="flex-1 lg:max-w-xs">
          <label htmlFor="budget-range" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Max Budget: {region === "us" ? "$" : "\u00a3"}{maxPrice}
          </label>
          <input
            id="budget-range"
            type="range"
            min="10"
            max="100"
            step="5"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="mt-2 w-full accent-primary"
          />
          <div className="flex justify-between text-[10px] text-muted-foreground">
            <span>{region === "us" ? "$10" : "\u00a310"}</span>
            <span>{region === "us" ? "$100" : "\u00a3100"}</span>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <p className="mt-6 text-sm text-muted-foreground">
        Showing <strong className="text-foreground">{sorted.length}</strong> products
        {sort === "impact" && " sorted by most animal meals"}
      </p>

      {/* Results */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((product) => (
          <article
            key={product.id}
            className="group flex flex-col overflow-hidden rounded-xl border-2 border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="relative h-44 w-full overflow-hidden bg-secondary">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute right-3 top-3 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase text-accent-foreground shadow-md">
                ~{product.mealsEstimate} meals
              </div>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                {product.category}
              </span>
              <h3 className="mt-1 font-bold text-foreground">{product.name}</h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <div>
                  <span className="text-xl font-bold text-foreground">
                    {product.displayPrice[region]}
                  </span>
                  <span className="ml-2 text-xs text-accent font-semibold">
                    {product.commissionPercent}% to animals
                  </span>
                </div>
                <Button asChild size="sm" className="shadow-md shadow-primary/20">
                  <a
                    href={product.link[region]}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                  >
                    Buy Now
                  </a>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {sorted.length === 0 && (
        <div className="mt-10 rounded-xl border-2 border-dashed border-border p-10 text-center">
          <p className="text-lg font-semibold text-foreground">No products in this budget range</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Try increasing your budget to see more products.
          </p>
        </div>
      )}
    </section>
  );
}
