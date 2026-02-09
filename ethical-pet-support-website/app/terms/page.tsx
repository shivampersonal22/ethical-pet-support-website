import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CookieConsent } from "@/components/cookie-consent";

export const metadata: Metadata = {
  title: "Terms of Use - PawsForward",
  description: "Terms and conditions for using the PawsForward website.",
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-secondary">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center lg:px-8 lg:py-24">
            <h1 className="font-serif text-4xl text-foreground md:text-5xl text-balance">
              Terms of Use
            </h1>
            <p className="mt-4 text-muted-foreground">
              Last updated: February 1, 2026
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="font-serif text-2xl text-foreground">Acceptance of Terms</h2>
              <p className="mt-3 leading-relaxed text-sm text-muted-foreground">
                By accessing and using the PawsForward website, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground">Nature of Service</h2>
              <p className="mt-3 leading-relaxed text-sm text-muted-foreground">
                PawsForward is an affiliate commerce website. We curate and recommend products available on Amazon. When you make a purchase through our affiliate links, we earn a commission which is used to buy food for street dogs and cats. We are not a charity, a nonprofit organization, or a direct seller of products.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground">Affiliate Links</h2>
              <p className="mt-3 leading-relaxed text-sm text-muted-foreground">
                Our website contains affiliate links to Amazon.com and Amazon.co.uk. When you click these links and make a purchase, you are buying directly from Amazon. Your transaction is governed by Amazon's terms of service, return policies, and customer support. PawsForward is not responsible for product quality, shipping, returns, or any aspect of the Amazon transaction.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground">No Donations</h2>
              <p className="mt-3 leading-relaxed text-sm text-muted-foreground">
                PawsForward does not accept direct donations. All funding for our pet food purchases comes exclusively from affiliate commissions. We want to be clear about this to maintain trust and simplicity in our model.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground">Content and Accuracy</h2>
              <p className="mt-3 leading-relaxed text-sm text-muted-foreground">
                We strive to provide accurate and up-to-date information on our website, including product details, prices, and impact reports. However, prices and availability may change on Amazon without notice. We make no guarantees about the accuracy of product information displayed on our site.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground">Impact Reports</h2>
              <p className="mt-3 leading-relaxed text-sm text-muted-foreground">
                Our monthly impact reports are provided in good faith with honest documentation. We use factual, non-exaggerated language to describe our activities. While we make every effort to ensure accuracy, minor discrepancies in reporting may occur. Any corrections will be noted in subsequent reports.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground">Email Communications</h2>
              <p className="mt-3 leading-relaxed text-sm text-muted-foreground">
                If you subscribe to our email list, you consent to receive monthly impact reports. You can unsubscribe at any time using the link provided in every email. We comply with CAN-SPAM (US) and applicable UK email regulations.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground">Intellectual Property</h2>
              <p className="mt-3 leading-relaxed text-sm text-muted-foreground">
                All content on the PawsForward website, including text, images, logos, and design, is owned by PawsForward unless otherwise noted. Product images and descriptions may be sourced from Amazon and are used in accordance with the Amazon Associates Program terms.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground">Limitation of Liability</h2>
              <p className="mt-3 leading-relaxed text-sm text-muted-foreground">
                PawsForward is provided on an &quot;as is&quot; basis. We make no warranties, express or implied, regarding the operation of the website or the information provided. We are not liable for any damages arising from your use of the website or purchases made through affiliate links.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground">Changes to Terms</h2>
              <p className="mt-3 leading-relaxed text-sm text-muted-foreground">
                We may update these terms from time to time. Changes will be reflected on this page with an updated date. Continued use of the website after changes constitutes acceptance of the revised terms.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-5 text-center">
              <p className="text-sm text-muted-foreground">
                See also:{" "}
                <Link href="/privacy" className="underline hover:text-foreground">
                  Privacy Policy
                </Link>
                {" "}&middot;{" "}
                <Link href="/affiliate-disclosure" className="underline hover:text-foreground">
                  Affiliate Disclosure
                </Link>
                {" "}&middot;{" "}
                <Link href="/transparency" className="underline hover:text-foreground">
                  Transparency
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <CookieConsent />
    </>
  );
}
