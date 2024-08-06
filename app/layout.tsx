import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "@/styles/global.css";
import "@/styles/normalize.css";
import "@/styles/variables.css";

export const metadata: Metadata = {
  title: "‎",
  description: "A basic bio site",
  authors: [
    {
      name: "Snowy",
      url: "https://snowy.codes",
    },
  ],
  keywords: ["bio", "snowy", "snowyjs", "snowypy", "minecrush"],
  creator: "snowy",
  publisher: "snowy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
