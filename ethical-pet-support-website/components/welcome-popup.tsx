"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function WelcomePopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("pf-welcome-seen");
    if (!seen) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  function dismiss() {
    sessionStorage.setItem("pf-welcome-seen", "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/40 p-4 backdrop-blur-sm">
      <div
        className="relative w-full max-w-md animate-in zoom-in-95 fade-in duration-300 overflow-hidden rounded-2xl bg-card shadow-2xl"
        role="dialog"
        aria-label="Welcome message"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={dismiss}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-card/80 text-muted-foreground backdrop-blur transition-colors hover:bg-card hover:text-foreground"
          aria-label="Close welcome message"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 4L4 12M4 4l8 8" />
          </svg>
        </button>

        {/* Pet image */}
        <div className="relative h-52 w-full">
          <Image
            src="/images/welcome-pets.jpg"
            alt="A happy dog and cat welcoming you"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="px-6 pb-6 pt-2 text-center">
          <div className="flex items-center justify-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary" aria-hidden="true">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
            </svg>
            <h2 className="font-serif text-2xl text-foreground">
              Welcome, Friend!
            </h2>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary" aria-hidden="true">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
            </svg>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Our furry friends are glad you stopped by! Every product you shop through PawsForward helps feed street dogs and cats -- at <strong className="text-foreground">zero extra cost</strong> to you.
          </p>

          <div className="mt-2 rounded-lg bg-[hsl(var(--warm-glow))] px-4 py-3">
            <p className="text-xs font-medium text-foreground">
              So far, shoppers like you have helped provide <strong className="text-primary">2,400+ meals</strong> to street animals.
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <Button asChild size="lg" className="w-full" onClick={dismiss}>
              <Link href="/shop">Start Shopping & Help Animals</Link>
            </Button>
            <button
              type="button"
              onClick={dismiss}
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {"I'll look around first"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
