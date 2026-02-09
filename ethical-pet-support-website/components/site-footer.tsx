import Link from "next/link";

const footerLinks = {
  Explore: [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/campaign", label: "Campaign" },
    { href: "/shop", label: "Shop" },
    { href: "/product-finder", label: "Product Finder" },
    { href: "/impact", label: "Impact Reports" },
  ],
  "Growth & Trust": [
    { href: "/seo-strategy", label: "SEO Strategy" },
    { href: "/pinterest-strategy", label: "Pinterest Strategy" },
    { href: "/transparency", label: "Transparency" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
    { href: "/terms", label: "Terms of Use" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="font-serif text-xl text-foreground">
              PawsForward
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Shop everyday products through our affiliate links. Every
              commission goes to feeding street dogs and cats. No donations
              needed.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-3 text-sm font-semibold text-foreground">
                {title}
              </h3>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-border pt-8 text-center text-xs text-muted-foreground md:flex-row md:justify-between md:text-left">
          <p>
            &copy; {new Date().getFullYear()} PawsForward. All rights reserved.
          </p>
          <p>
            Affiliate Disclosure: We earn commissions from qualifying purchases.{" "}
            <Link
              href="/affiliate-disclosure"
              className="underline hover:text-foreground"
            >
              Learn more
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
