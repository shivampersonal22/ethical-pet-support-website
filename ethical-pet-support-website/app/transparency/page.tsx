import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CookieConsent } from "@/components/cookie-consent";

export const metadata: Metadata = {
  title: "Transparency - PawsForward",
  description:
    "Complete transparency on how commissions are earned, spent, and reported. Your trust matters to us.",
};

const sections = [
  {
    title: "How Commissions Work",
    content: [
      "We are a participant in the Amazon Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by linking to Amazon.com and Amazon.co.uk.",
      "When you click a product link on our site and make a purchase, Amazon pays us a commission. Commission rates vary by product category, typically ranging from 1% to 10%.",
      "You pay the exact same price for the product. The commission comes from Amazon, not from your pocket.",
      "We do not accept any direct donations. All funding for pet food comes exclusively from affiliate commissions.",
    ],
  },
  {
    title: "Reporting Schedule",
    content: [
      "Monthly impact reports are published on the first week of each month, covering the previous month's activity.",
      "Reports include: total commissions earned, total spent on pet food, receipts for all purchases, photos of food distribution, and number of animals fed.",
      "Reports are published on our Impact Reports page and sent via email to subscribers.",
      "If there are delays or issues, we communicate them openly rather than hiding behind silence.",
    ],
  },
  {
    title: "What Proof Is Shared",
    content: [
      "Purchase receipts for all pet food bought with commission funds, uploaded as PDFs or images.",
      "Photographs of the food purchases and the distribution process.",
      "Financial summaries showing commissions earned, amounts spent, and any remaining balance.",
      "Updates on the number of animals reached and the locations served.",
      "We use factual language only. No exaggerated claims about impact.",
    ],
  },
  {
    title: "Privacy Protection",
    content: [
      "We collect only your email address if you choose to subscribe to impact reports. This is entirely optional.",
      "Your email is used solely for sending monthly impact reports. Nothing else.",
      "We never share, sell, rent, or distribute your personal data to any third party.",
      "We do not use tracking cookies for advertising. Only essential cookies are used for site functionality.",
      "You can unsubscribe from emails at any time with a single click.",
    ],
  },
  {
    title: "Email Open Tracking",
    content: [
      "We want to be upfront about this: our email reports may include open-rate tracking. This is a standard feature used by most email platforms.",
      "This tracking helps us understand if our reports are being read, so we can improve them.",
      "We do not track individual behavior beyond email opens. We do not build profiles or sell this data.",
      "If open tracking concerns you, most email clients allow you to disable remote image loading, which prevents open tracking.",
    ],
  },
];

export default function TransparencyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-secondary">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center lg:px-8 lg:py-24">
            <h1 className="font-serif text-4xl text-foreground md:text-5xl text-balance">
              Transparency
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              We believe trust is earned through honesty. Here is everything you
              need to know about how we operate.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-12">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-serif text-2xl text-foreground">
                  {section.title}
                </h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {section.content.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-lg border border-border bg-card p-6 text-center">
            <h3 className="font-serif text-xl text-foreground">
              Have Questions?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              If you have any questions about our transparency practices,
              commission model, or how funds are used, please do not hesitate to
              reach out.
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link href="/impact">View Impact Reports</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/affiliate-disclosure">Affiliate Disclosure</Link>
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
