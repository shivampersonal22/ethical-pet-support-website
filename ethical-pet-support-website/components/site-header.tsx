"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/campaign", label: "Campaign" },
  { href: "/shop", label: "Shop" },
  { href: "/product-finder", label: "Product Finder" },
  { href: "/transparency", label: "Transparency" },
  { href: "/impact", label: "Impact Reports" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="text-primary"
            aria-hidden="true"
          >
            <circle cx="16" cy="16" r="16" fill="currentColor" />
            <path
              d="M10 20c0-3.3 2.7-6 6-6s6 2.7 6 6"
              stroke="hsl(30,33%,97%)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="13" cy="14" r="1.5" fill="hsl(30,33%,97%)" />
            <circle cx="19" cy="14" r="1.5" fill="hsl(30,33%,97%)" />
            <ellipse cx="16" cy="11" rx="6" ry="5" fill="none" stroke="hsl(30,33%,97%)" strokeWidth="1.5" />
          </svg>
          <span className="font-serif text-xl text-foreground">PawsForward</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm">
            <Link href="/shop">Shop & Support</Link>
          </Button>
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-md p-2 text-muted-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-card lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4" aria-label="Mobile navigation">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 px-3">
                <Button asChild className="w-full" size="sm">
                  <Link href="/shop">Shop & Support</Link>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
