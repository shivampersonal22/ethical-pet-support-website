"use client";

import React from "react"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export function EmailSignup({ variant = "default" }: { variant?: "default" | "compact" }) {
  const [email, setEmail] = useState("");
  const [consented, setConsented] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!consented || !email) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-accent/30 bg-accent/10 p-6 text-center">
        <p className="font-semibold text-foreground">Thank you for signing up!</p>
        <p className="mt-1 text-sm text-muted-foreground">
          You will receive monthly impact reports showing exactly how your
          purchases helped feed street animals.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={variant === "compact" ? "" : "rounded-lg border border-border bg-card p-6"}>
      {variant === "default" && (
        <div className="mb-4">
          <h3 className="font-serif text-lg text-foreground">
            Get Monthly Impact Reports
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            See exactly where commissions go. Receipts, photos, and reports
            delivered to your inbox.
          </p>
        </div>
      )}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email address"
          className="flex-1"
        />
        <Button type="submit" disabled={!consented || !email}>
          Subscribe
        </Button>
      </div>
      <div className="mt-3 flex items-start gap-2">
        <Checkbox
          id="email-consent"
          checked={consented}
          onCheckedChange={(checked) => setConsented(checked === true)}
          aria-describedby="consent-desc"
        />
        <label
          htmlFor="email-consent"
          id="consent-desc"
          className="text-xs leading-relaxed text-muted-foreground cursor-pointer"
        >
          I consent to receive monthly impact reports by email. I understand I
          can unsubscribe at any time. My email will never be shared or used for
          any other purpose. Email open tracking is used solely to measure report
          engagement.
        </label>
      </div>
    </form>
  );
}
