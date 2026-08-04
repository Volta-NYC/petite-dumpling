import type { Metadata } from "next";
import { Albert_Sans, Archivo, Chewy } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const chewy = Chewy({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Petite Dumpling",
  description:
    "Handcrafted dim sum, dumplings, noodles, and small plates in Park Slope and Prospect Heights, Brooklyn.",
};

import Navbar from "@/lib/components/navbar";
import Foot from "@/lib/components/Foot";
import ScrollEffects from "@/lib/components/ScrollEffects";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${albertSans.variable} ${archivo.variable} ${chewy.variable} antialiased`}
      >
        <ScrollEffects />
        <Navbar />
        {children}
        <Foot />
        <Analytics />
      </body>
    </html>
  );
}
