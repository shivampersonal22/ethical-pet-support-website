"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Region = "us" | "uk";
type Category = "all" | "home" | "tech" | "kitchen" | "personal" | "pet";

interface Product {
  id: string;
  name: string;
  category: Category;
  price: { us: string; uk: string };
  commission: string;
  link: { us: string; uk: string };
  description: string;
  image: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "Stainless Steel Water Bottle",
    category: "personal",
    price: { us: "$24.99", uk: "\u00a319.99" },
    commission: "~4%",
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "Insulated, BPA-free, keeps drinks cold for 24 hours.",
    image: "/images/products/water-bottle.jpg",
    badge: "Best Seller",
  },
  {
    id: "2",
    name: "Organic Cotton Towel Set",
    category: "home",
    price: { us: "$34.99", uk: "\u00a327.99" },
    commission: "~8%",
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "Soft, absorbent, and eco-friendly. Set of 4 bath towels.",
    image: "/images/products/cotton-towels.jpg",
  },
  {
    id: "3",
    name: "Wireless Charging Pad",
    category: "tech",
    price: { us: "$19.99", uk: "\u00a315.99" },
    commission: "~3%",
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "Fast wireless charging for all Qi-compatible devices.",
    image: "/images/products/wireless-charger.jpg",
  },
  {
    id: "4",
    name: "Non-Stick Ceramic Pan Set",
    category: "kitchen",
    price: { us: "$49.99", uk: "\u00a339.99" },
    commission: "~6%",
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "3-piece set, toxin-free coating, oven safe to 450F.",
    image: "/images/products/ceramic-pans.jpg",
    badge: "Top Pick",
  },
  {
    id: "5",
    name: "Natural Shea Butter Soap",
    category: "personal",
    price: { us: "$12.99", uk: "\u00a39.99" },
    commission: "~5%",
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "Handmade, moisturizing, cruelty-free. Pack of 3 bars.",
    image: "/images/products/shea-soap.jpg",
  },
  {
    id: "6",
    name: "LED Desk Lamp",
    category: "tech",
    price: { us: "$29.99", uk: "\u00a324.99" },
    commission: "~3%",
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "Adjustable brightness, USB charging port, eye-care design.",
    image: "/images/products/desk-lamp.jpg",
  },
  {
    id: "7",
    name: "Bamboo Cutting Board Set",
    category: "kitchen",
    price: { us: "$22.99", uk: "\u00a318.99" },
    commission: "~8%",
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "Sustainable bamboo, set of 3 sizes, juice grooves.",
    image: "/images/products/cutting-board.jpg",
  },
  {
    id: "8",
    name: "Microfiber Cleaning Cloths",
    category: "home",
    price: { us: "$14.99", uk: "\u00a311.99" },
    commission: "~8%",
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "Pack of 12, ultra-absorbent, reusable and lint-free.",
    image: "/images/products/cleaning-cloths.jpg",
  },
  {
    id: "9",
    name: "Premium Dog Food (15kg)",
    category: "pet",
    price: { us: "$39.99", uk: "\u00a332.99" },
    commission: "~5%",
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "High-protein, grain-free formula for adult dogs.",
    image: "/images/products/dog-food.jpg",
    badge: "Feeds 2x",
  },
  {
    id: "10",
    name: "Cat Food Variety Pack",
    category: "pet",
    price: { us: "$27.99", uk: "\u00a322.99" },
    commission: "~5%",
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "24 pouches of assorted flavors in gravy for cats.",
    image: "/images/products/cat-food.jpg",
    badge: "Feeds 2x",
  },
  {
    id: "11",
    name: "Portable Bluetooth Speaker",
    category: "tech",
    price: { us: "$34.99", uk: "\u00a328.99" },
    commission: "~3%",
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "Waterproof, 20-hour battery, rich bass sound.",
    image: "/images/products/bluetooth-speaker.jpg",
  },
  {
    id: "12",
    name: "Organic Cotton Bed Sheets",
    category: "home",
    price: { us: "$59.99", uk: "\u00a349.99" },
    commission: "~8%",
    link: { us: "https://amazon.com", uk: "https://amazon.co.uk" },
    description: "Queen size, 400 thread count, breathable and soft.",
    image: "/images/products/bed-sheets.jpg",
    badge: "High Commission",
  },
];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All Products" },
  { value: "home", label: "Home" },
  { value: "tech", label: "Tech" },
  { value: "kitchen", label: "Kitchen" },
  { value: "personal", label: "Personal Care" },
  { value: "pet", label: "Pet Supplies" },
];

export function ShopContent() {
  const [region, setRegion] = useState<Region>("us");
  const [category, setCategory] = useState<Category>("all");

  const filtered =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-16">
      {/* Impact Counter */}
      <div className="mb-8 rounded-xl bg-primary px-6 py-4 text-center text-primary-foreground">
        <p className="text-sm font-medium">
          Your purchases have funded <strong className="text-lg">2,400+</strong> meals for street animals this year
        </p>
      </div>

      {/* Region Toggle + Category Filter */}
      <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-foreground">Region:</span>
          <div className="flex overflow-hidden rounded-lg border-2 border-primary/20">
            <button
              type="button"
              className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-colors ${
                region === "us"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-secondary"
              }`}
              onClick={() => setRegion("us")}
            >
              <span aria-hidden="true">US</span> USA
            </button>
            <button
              type="button"
              className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-colors ${
                region === "uk"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-secondary"
              }`}
              onClick={() => setRegion("uk")}
            >
              <span aria-hidden="true">UK</span> United Kingdom
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide transition-all ${
                category === cat.value
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                  : "bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
              onClick={() => setCategory(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <article
            key={product.id}
            className="group flex flex-col overflow-hidden rounded-xl border-2 border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            {/* Product Image */}
            <div className="relative h-48 w-full overflow-hidden bg-secondary">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {product.badge && (
                <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-md">
                  {product.badge}
                </span>
              )}
            </div>

            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-2">
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  {product.category}
                </span>
                <span className="flex items-center gap-1 text-[10px] font-semibold text-accent">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-accent" aria-hidden="true">
                    <path d="M6 1l1.545 3.13L11 4.635 8.5 7.07l.59 3.44L6 8.885 2.91 10.51l.59-3.44L1 4.635l3.455-.505L6 1z" fill="currentColor"/>
                  </svg>
                  {product.commission} feeds animals
                </span>
              </div>

              <h3 className="mt-3 font-bold text-foreground">
                {product.name}
              </h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <span className="text-xl font-bold text-foreground">
                  {product.price[region]}
                </span>
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
            </div>
          </article>
        ))}
      </div>

      {/* Affiliate Reminder */}
      <div className="mt-12 rounded-xl border-2 border-accent/20 bg-accent/5 p-6 text-center">
        <div className="flex items-center justify-center gap-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-accent" aria-hidden="true">
            <path d="M10 18.35l-1.2-1.1C4.5 13 2 10.7 2 7.9 2 5.7 3.7 4 5.9 4c1.2 0 2.4.6 3.1 1.4.8-.9 2-1.4 3.1-1.4C14.3 4 16 5.7 16 7.9c0 2.8-2.5 5.1-6.8 9.3L10 18.35z" fill="currentColor"/>
          </svg>
          <p className="font-semibold text-foreground">
            Same price for you. Real meals for animals.
          </p>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Every purchase through these links earns us a small Amazon commission.
          100% of commissions buy food for street dogs and cats.
        </p>
      </div>
    </section>
  );
}
