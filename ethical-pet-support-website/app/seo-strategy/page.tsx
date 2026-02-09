import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Strategy - PawsForward",
  description:
    "Our SEO approach to drive organic traffic and help more street animals through ethical affiliate commerce.",
};

const seoChecklist = [
  {
    title: "On-Page SEO",
    items: [
      "Unique title tags and meta descriptions on every page",
      "Structured heading hierarchy (H1 > H2 > H3)",
      "Alt text on all images for accessibility and search",
      "Internal linking between related pages",
      "Schema markup for Organization and Product types",
      "Clean, descriptive URL slugs",
    ],
  },
  {
    title: "Content Strategy",
    items: [
      "Long-tail keywords: 'ethical shopping for animals', 'buy products feed street dogs'",
      "Monthly impact blog posts with real data and photos",
      "Product review and recommendation articles",
      "How-to guides: 'How to help street animals without donating'",
      "Seasonal content around pet awareness days",
    ],
  },
  {
    title: "Technical SEO",
    items: [
      "Mobile-first responsive design",
      "Fast loading (under 3 seconds target)",
      "robots.txt and XML sitemap configured",
      "Canonical URLs to prevent duplicate content",
      "HTTPS everywhere with proper SSL",
      "Core Web Vitals optimization",
    ],
  },
  {
    title: "Local & Social Signals",
    items: [
      "Google Business Profile for organization",
      "Consistent NAP (Name, Address, Phone) across web",
      "Social sharing meta tags (Open Graph, Twitter Cards)",
      "Pinterest-optimized images for product pins",
      "Backlink outreach to animal welfare blogs",
    ],
  },
];

const targetKeywords = [
  { keyword: "shop to feed street animals", volume: "New niche", difficulty: "Low" },
  { keyword: "ethical affiliate shopping", volume: "1,200/mo", difficulty: "Medium" },
  { keyword: "help street dogs without donating", volume: "800/mo", difficulty: "Low" },
  { keyword: "buy products support animal welfare", volume: "600/mo", difficulty: "Low" },
  { keyword: "transparent charity shopping", volume: "400/mo", difficulty: "Low" },
  { keyword: "affiliate commission for animals", volume: "New niche", difficulty: "Low" },
];

export default function SEOStrategyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="bg-primary px-4 py-16 text-center lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <span className="inline-block rounded-full bg-primary-foreground/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground">
              Growth Engine
            </span>
            <h1 className="mt-4 font-serif text-4xl text-primary-foreground md:text-5xl text-balance">
              SEO Strategy
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/85 leading-relaxed">
              How we drive organic traffic to help more street animals through
              ethical, transparent content and search engine optimization.
            </p>
          </div>
        </section>

        {/* Target Keywords */}
        <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
          <h2 className="font-serif text-3xl text-foreground text-balance">Target Keywords</h2>
          <p className="mt-2 text-muted-foreground">
            We focus on low-competition, high-intent keywords that attract people
            looking for ethical ways to help animals.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="pb-3 pr-6 font-bold text-foreground">Keyword</th>
                  <th className="pb-3 pr-6 font-bold text-foreground">Est. Volume</th>
                  <th className="pb-3 font-bold text-foreground">Difficulty</th>
                </tr>
              </thead>
              <tbody>
                {targetKeywords.map((kw) => (
                  <tr key={kw.keyword} className="border-b border-border">
                    <td className="py-3 pr-6 font-medium text-foreground">{kw.keyword}</td>
                    <td className="py-3 pr-6 text-muted-foreground">{kw.volume}</td>
                    <td className="py-3">
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${
                          kw.difficulty === "Low"
                            ? "bg-accent/10 text-accent"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {kw.difficulty}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SEO Checklist */}
        <section className="bg-secondary/50">
          <div className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
            <h2 className="font-serif text-3xl text-foreground text-balance">SEO Checklist</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {seoChecklist.map((group) => (
                <div
                  key={group.title}
                  className="rounded-xl border-2 border-border bg-card p-6"
                >
                  <h3 className="font-bold text-lg text-foreground">{group.title}</h3>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          className="mt-0.5 shrink-0 text-accent"
                          aria-hidden="true"
                        >
                          <path
                            d="M6 9l2 2 4-4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
