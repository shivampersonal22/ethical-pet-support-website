import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CookieConsent } from "@/components/cookie-consent";

export const metadata: Metadata = {
  title: "How It Works - PawsForward",
  description:
    "Learn how your everyday purchases turn into meals for street dogs and cats through our affiliate commission model.",
};

const steps = [
  {
    number: "01",
    title: "Browse Our Curated Products",
    description:
      "We curate trending, everyday products available on Amazon for both US and UK shoppers. From household essentials to electronics, you will find things you already need.",
    detail:
      "Products are hand-picked for quality and value. We never recommend something just for a higher commission.",
  },
  {
    number: "02",
    title: "Shop Through Our Affiliate Links",
    description:
      "When you click a product link on our site, it takes you to Amazon with our affiliate tag attached. You pay exactly the same price as you normally would.",
    detail:
      "There is zero extra cost to you. Amazon pays us a small percentage of the sale as a referral commission.",
  },
  {
    number: "03",
    title: "We Earn a Commission",
    description:
      "Amazon Associates pays us a commission for every qualifying purchase made through our links. Commission rates vary by product category, typically between 1% and 10%.",
    detail:
      "All commissions are tracked and reported transparently. You can see exactly how much has been earned each month.",
  },
  {
    number: "04",
    title: "Commissions Are Pooled",
    description:
      "We pool all earned commissions on a weekly or biweekly basis. Once the pool reaches a meaningful amount, we proceed to the next step.",
    detail:
      "We aim to make purchases regularly to ensure a consistent food supply for the animals we support.",
  },
  {
    number: "05",
    title: "Pet Food Is Purchased",
    description:
      "We buy dog and cat food in bulk from local suppliers or verified online stores. We prioritize nutritious, quality food that provides real nourishment.",
    detail:
      "Every food purchase receipt is saved and shared publicly in our monthly impact reports.",
  },
  {
    number: "06",
    title: "Food Is Distributed",
    description:
      "The purchased food is distributed to street dogs and cats in the designated campaign areas. We document this process with photos and updates.",
    detail:
      "Distribution is carried out by local volunteers and documented for full accountability.",
  },
  {
    number: "07",
    title: "Reports Are Shared",
    description:
      "Monthly impact reports are published on our website and sent to email subscribers. Reports include receipts, photos, financial summaries, and honest updates on progress.",
    detail:
      "No exaggeration. No guilt-tripping. Just honest, factual reporting of what was accomplished.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-secondary">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center lg:px-8 lg:py-24">
            <h1 className="font-serif text-4xl text-foreground md:text-5xl text-balance">
              How It Works
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A step-by-step look at how your everyday shopping turns into meals
              for street dogs and cats, at absolutely no extra cost to you.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-12">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-6"
              >
                <div className="flex shrink-0 flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold text-sm">
                    {step.number}
                  </div>
                  <div className="mt-2 h-full w-px bg-border" />
                </div>
                <div className="pb-8">
                  <h2 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h2>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                  <p className="mt-3 rounded-md bg-secondary/80 p-3 text-sm text-muted-foreground leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-secondary/50">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center lg:px-8 lg:py-24">
            <h2 className="font-serif text-3xl text-foreground text-balance">
              Important Things to Know
            </h2>
            <div className="mt-8 grid gap-6 text-left md:grid-cols-2">
              {[
                {
                  title: "No Donations",
                  desc: "We do not accept direct donations. All funding comes from affiliate commissions earned through product purchases.",
                },
                {
                  title: "No Extra Cost",
                  desc: "You pay the exact same price for products. The commission comes from the retailer, not from your wallet.",
                },
                {
                  title: "Full Transparency",
                  desc: "Every commission earned and every food purchase made is documented with receipts and shared publicly.",
                },
                {
                  title: "Your Privacy Matters",
                  desc: "We never collect, share, or sell your personal data. Email signups are opt-in only for monthly reports.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-border bg-card p-5"
                >
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/shop">Start Shopping</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/transparency">View Transparency</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <CookieConsent />
    </>
  );
}
