import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Amazon Affiliate Setup Guide | PawsForward",
  description:
    "Step-by-step guide on how PawsForward uses Amazon Associates to turn product purchases into meals for street animals. Learn how to add affiliate product links.",
};

const steps = [
  {
    number: 1,
    title: "Sign Up for Amazon Associates",
    content: [
      "Go to affiliate-program.amazon.com (US) or affiliate-program.amazon.co.uk (UK).",
      "Click 'Sign Up' and log in with your existing Amazon account, or create a new one.",
      "Fill in your website URL (your PawsForward domain), preferred store ID, and explain what your site does: 'We share product recommendations and donate affiliate commissions to feed street animals.'",
      "Choose your preferred payment method (direct deposit, Amazon gift card, or check).",
      "You'll get an Associate ID (also called a tracking tag), something like 'pawsforward-20'. Save this -- you'll use it in every product link.",
    ],
  },
  {
    number: 2,
    title: "Find a Product on Amazon",
    content: [
      "Go to amazon.com (or amazon.co.uk) and search for any product you want to feature on PawsForward.",
      "Pick products that are: highly rated (4+ stars), reasonably priced, in categories with good commission rates (Home, Kitchen, Pet Supplies are great -- typically 3-8%).",
      "Open the product page. You'll need two things from it: the product ASIN (found in the product details section) and the product URL.",
    ],
  },
  {
    number: 3,
    title: "Generate Your Affiliate Link",
    content: [
      "Option A -- SiteStripe Bar: Once you're logged into Amazon Associates, you'll see a grey 'SiteStripe' toolbar at the top of every Amazon page. Click 'Get Link' then 'Text' on any product page to get your affiliate link instantly.",
      "Option B -- Product Linking Tool: Go to your Associates dashboard, click 'Product Linking' then 'Product Links'. Search for the product by name or ASIN. Click 'Get Link' and copy the URL.",
      "Option C -- Manual URL: Take any Amazon product URL and add '?tag=YOUR-ASSOCIATE-ID' at the end. For example: https://amazon.com/dp/B08XYZ123?tag=pawsforward-20",
      "Always test your link by clicking it and checking that 'tag=pawsforward-20' appears in the URL bar. This confirms Amazon will track the commission.",
    ],
  },
  {
    number: 4,
    title: "Add the Product to Your PawsForward Website",
    content: [
      "Open the shop-content.tsx file in your project's components folder.",
      "Find the 'products' array at the top of the file.",
      "Add a new product object following this exact format (copy an existing one and modify it):",
    ],
    code: `{
  id: "13",                    // Increment the ID number
  name: "Your Product Name",
  category: "home",            // Choose: home, tech, kitchen, personal, pet
  price: { 
    us: "$29.99",              // US price from Amazon.com
    uk: "\\u00a324.99"         // UK price from Amazon.co.uk
  },
  commission: "~5%",           // Check your category rate
  link: { 
    us: "https://amazon.com/dp/B08XYZ123?tag=pawsforward-20",
    uk: "https://amazon.co.uk/dp/B08XYZ123?tag=pawsforward-20"
  },
  description: "Brief product description, 1-2 sentences.",
  image: "/images/products/your-product.jpg",
  badge: "New"                 // Optional: "Best Seller", "Top Pick", etc.
}`,
    afterCode: [
      "For the product image: Download the product image from Amazon, save it to /public/images/products/ in your project, and reference that path in the 'image' field.",
      "Save the file. Your new product will appear on the Shop page automatically.",
    ],
  },
  {
    number: 5,
    title: "Add to Daily Trending (Optional)",
    content: [
      "Open trending-content.tsx in your components folder.",
      "Find the 'trendingProducts' array.",
      "Add your product with extra trending fields: rank, trendScore (0-100), changeDirection ('up', 'down', 'new', 'stable'), reasonTrending, and mealsEstimate.",
      "Update the rankings weekly based on what you see trending on Amazon Best Sellers, Google Trends, and social media.",
    ],
  },
  {
    number: 6,
    title: "Track Your Performance",
    content: [
      "Log into your Amazon Associates dashboard regularly to check: clicks (how many people clicked your links), orders (how many people bought something), and earnings (your commission amount).",
      "Amazon pays commissions monthly, usually around 60 days after the end of each month.",
      "Important: You must make at least 3 qualifying sales within your first 180 days, or Amazon will close your Associates account. So start promoting products early!",
      "Commission rates vary by category: Home & Kitchen (8%), Pet Supplies (5%), Electronics (3-4%), Health & Personal Care (5%). Check the full rate table in your Associates dashboard.",
    ],
  },
];

const proTips = [
  {
    title: "Best Categories for Commission",
    text: "Home, Kitchen, and Pet Supplies give the highest commissions (5-8%). Electronics and tech are lower (3-4%) but sell in higher volume.",
  },
  {
    title: "The 24-Hour Cookie",
    text: "When someone clicks your affiliate link, Amazon tracks anything they buy in the next 24 hours -- even if they buy a different product. You earn commission on all of it.",
  },
  {
    title: "Seasonal Product Rotation",
    text: "Swap out products with the seasons. Air purifiers in spring, fans in summer, blankets in winter. Check the Daily Trending page for ideas.",
  },
  {
    title: "US vs UK Links",
    text: "Amazon US and UK are separate affiliate programs. You need to sign up for each one individually. Use amazon.com links with your US tag, and amazon.co.uk links with your UK tag.",
  },
  {
    title: "FTC Compliance",
    text: "Always disclose that you use affiliate links. PawsForward already includes an affiliate disclosure page and badge -- keep these active to stay compliant.",
  },
  {
    title: "Image Rules",
    text: "Amazon's Terms of Service say you cannot use Amazon product images directly on your site (hotlinking). Instead, download photos or take screenshots and host them yourself in /public/images/products/.",
  },
];

export default function AmazonAffiliateGuidePage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="bg-primary">
          <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8 lg:py-16">
            <span className="inline-block rounded-full bg-primary-foreground/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground">
              Setup Guide
            </span>
            <h1 className="mt-4 font-serif text-3xl text-primary-foreground md:text-5xl text-balance">
              How to Add Amazon Affiliate Products
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-primary-foreground/80 text-pretty">
              A complete step-by-step guide from signing up for Amazon Associates
              to adding your first product link on PawsForward.
            </p>
          </div>
        </section>

        {/* Quick Summary */}
        <section className="mx-auto max-w-4xl px-4 py-10 lg:px-8">
          <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-6">
            <h2 className="font-bold text-foreground">Quick Summary</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Sign up for Amazon Associates, get your tracking tag, find products, generate
              affiliate links with your tag, then add the product details to the{" "}
              <code className="rounded bg-secondary px-1.5 py-0.5 text-xs font-mono text-foreground">
                shop-content.tsx
              </code>{" "}
              file. Every purchase made through your links earns a commission that
              goes to feeding street animals.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="mx-auto max-w-4xl px-4 pb-16 lg:px-8">
          <div className="flex flex-col gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-xl border-2 border-border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground">
                      {step.title}
                    </h3>
                    <ul className="mt-3 flex flex-col gap-2">
                      {step.content.map((line, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            className="mt-1 shrink-0 text-accent"
                            aria-hidden="true"
                          >
                            <path
                              d="M5 8l2 2 4-4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {line}
                        </li>
                      ))}
                    </ul>
                    {step.code && (
                      <div className="mt-4 overflow-x-auto rounded-lg bg-[hsl(220,25%,12%)] p-4">
                        <pre className="text-xs leading-relaxed text-[hsl(40,50%,90%)]">
                          <code>{step.code}</code>
                        </pre>
                      </div>
                    )}
                    {step.afterCode && (
                      <ul className="mt-3 flex flex-col gap-2">
                        {step.afterCode.map((line, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              className="mt-1 shrink-0 text-accent"
                              aria-hidden="true"
                            >
                              <path
                                d="M5 8l2 2 4-4"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            {line}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pro Tips */}
        <section className="bg-accent">
          <div className="mx-auto max-w-4xl px-4 py-16 lg:px-8">
            <h2 className="font-serif text-2xl text-accent-foreground md:text-3xl">
              Pro Tips
            </h2>
            <p className="mt-2 text-accent-foreground/80">
              Important things to know to maximize your affiliate earnings.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {proTips.map((tip) => (
                <div
                  key={tip.title}
                  className="rounded-xl bg-card p-5 shadow-md"
                >
                  <h3 className="font-bold text-foreground">{tip.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {tip.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Example Link Structure */}
        <section className="mx-auto max-w-4xl px-4 py-16 lg:px-8">
          <h2 className="font-serif text-2xl text-foreground md:text-3xl">
            Link Structure Cheat Sheet
          </h2>
          <div className="mt-6 overflow-x-auto rounded-xl border-2 border-border">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-border bg-secondary">
                  <th className="px-4 py-3 font-bold text-foreground">Type</th>
                  <th className="px-4 py-3 font-bold text-foreground">URL Format</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-medium text-foreground">
                    Standard Product Link
                  </td>
                  <td className="px-4 py-3">
                    <code className="rounded bg-secondary px-1.5 py-0.5 text-xs font-mono text-foreground">
                      {'https://amazon.com/dp/ASIN?tag=YOUR-TAG'}
                    </code>
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-medium text-foreground">
                    Search Results Link
                  </td>
                  <td className="px-4 py-3">
                    <code className="rounded bg-secondary px-1.5 py-0.5 text-xs font-mono text-foreground">
                      {'https://amazon.com/s?k=KEYWORD&tag=YOUR-TAG'}
                    </code>
                  </td>
                </tr>
                <tr className="border-b border-border">
                  <td className="px-4 py-3 font-medium text-foreground">
                    Category Page Link
                  </td>
                  <td className="px-4 py-3">
                    <code className="rounded bg-secondary px-1.5 py-0.5 text-xs font-mono text-foreground">
                      {'https://amazon.com/b?node=NODE-ID&tag=YOUR-TAG'}
                    </code>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-foreground">
                    UK Product Link
                  </td>
                  <td className="px-4 py-3">
                    <code className="rounded bg-secondary px-1.5 py-0.5 text-xs font-mono text-foreground">
                      {'https://amazon.co.uk/dp/ASIN?tag=YOUR-UK-TAG'}
                    </code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Replace <strong>YOUR-TAG</strong> with your actual Amazon Associate ID
            (e.g., pawsforward-20) and <strong>ASIN</strong> with the product's
            10-character identifier found on its Amazon product page.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
