import React from "react"
import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";

import "./globals.css";

const _dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const _dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: "PawsForward - Shop Products. Feed Street Animals.",
  description:
    "Buy everyday products through our affiliate links. Every commission earned goes directly to buying food for street dogs and cats. No donations needed.",
  keywords: [
    "pet charity",
    "street dogs",
    "street cats",
    "animal welfare",
    "affiliate shopping",
    "ethical shopping",
  ],
};

export const viewport: Viewport = {
  themeColor: "#e8600a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
