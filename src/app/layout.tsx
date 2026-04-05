import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "11:11 The Chronos Genesis | NeoITO Hackathon",
  description: "A 30-Hour Hackathon powered by Happilee. Build integrable solutions and AI agentic systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
