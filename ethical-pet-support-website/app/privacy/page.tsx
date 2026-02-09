import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CookieConsent } from "@/components/cookie-consent";

export const metadata: Metadata = {
  title: "Privacy Policy - PawsForward",
  description: "Our privacy policy explains what data we collect, how we use it, and how we protect your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-secondary">
          <div className="mx-auto max-w-3xl px-4 py-16 text-center lg:px-8 lg:py-24">
            <h1 className="font-serif text-4xl text-foreground md:text-5xl text-balance">
              Privacy Policy
            </h1>
            <p className="mt-4 text-muted-foreground">
              Last updated: February 1, 2026
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="prose-custom flex flex-col gap-8">
            <div>
              <h2 className="font-serif text-2xl text-foreground">Overview</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                PawsForward is committed to protecting your privacy. This policy explains what information we collect, how we use it, and the choices you have. We operate with a principle of minimal data collection.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground">Information We Collect</h2>
              <div className="mt-3 flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
                <p><strong className="text-foreground">Email Address (Optional):</strong> If you choose to subscribe to our monthly impact reports, we collect your email address. This is entirely voluntary and opt-in only.</p>
                <p><strong className="text-foreground">Essential Cookies:</strong> We use essential cookies that are necessary for the website to function properly, such as remembering your cookie consent preference.</p>
                <p><strong className="text-foreground">No Tracking Cookies:</strong> We do not use advertising cookies, retargeting pixels, or any form of behavioral tracking.</p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground">How We Use Your Information</h2>
              <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  Your email address is used only to send monthly impact reports.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  We never send promotional emails, spam, or third-party marketing.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  We never share, sell, rent, or distribute your email or any personal data to third parties.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  Essential cookies are used solely for site functionality such as remembering consent preferences.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground">Email Open Tracking</h2>
              <p className="mt-3 leading-relaxed text-sm text-muted-foreground">
                Our email reports may include open-rate tracking via a standard tracking pixel. This helps us understand whether our reports are being read so we can improve them. We do not track individual browsing behavior, build user profiles, or sell any tracking data. If this concerns you, you can disable remote image loading in your email client to prevent tracking.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground">Affiliate Links</h2>
              <p className="mt-3 leading-relaxed text-sm text-muted-foreground">
                When you click an affiliate link on our site, you are redirected to Amazon (amazon.com or amazon.co.uk). At that point, Amazon's own privacy policy applies. We do not receive any personal information about your Amazon account or purchase history. We only receive aggregate commission data.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground">Cookies</h2>
              <p className="mt-3 leading-relaxed text-sm text-muted-foreground">
                We use only essential cookies required for the website to function. These include cookies that remember your cookie consent preference. We do not use any analytics cookies, advertising cookies, or social media tracking cookies. You can manage cookies through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground">Your Rights</h2>
              <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  You can unsubscribe from emails at any time using the link in every email.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  You can request deletion of your email address at any time.
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  You can manage cookie preferences through your browser or the cookie banner on our site.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl text-foreground">Compliance</h2>
              <p className="mt-3 leading-relaxed text-sm text-muted-foreground">
                This site is designed to comply with applicable privacy regulations in the United States and the United Kingdom, including GDPR principles for UK users. We commit to transparency, minimal data collection, and respecting your consent preferences.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-5 text-center">
              <p className="text-sm text-muted-foreground">
                Questions about our privacy practices?{" "}
                <Link href="/transparency" className="underline hover:text-foreground">
                  Visit our Transparency page
                </Link>
                {" "}for more information.
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
