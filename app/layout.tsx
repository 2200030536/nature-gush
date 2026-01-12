import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "naturegush | Pure Drinking Water",
  description: "naturegush – Pure, safe and sustainable bottled drinking water",
   keywords: [
    "Nature Gush",
    "naturegush",
    "bottled water company",
    "drinking water manufacturer",
    "mineral water plant",
  ],
   verification: {
    google: "fFVAz3dAvpO64kaZIWzmiZUNVDMImZfRxuBKogwsLto", // 👈 paste ONLY the content value
  },
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
