import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nature Gush | Pure Drinking Water",
  description: "Nature Gush – Pure, safe and sustainable bottled drinking water",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
