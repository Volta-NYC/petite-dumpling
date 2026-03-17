import type { Metadata } from "next";
import { Albert_Sans, Archivo } from "next/font/google";
import "./globals.css";

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Petite Dumpling",
  description: "Handcrafted dumpling",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${albertSans.variable} ${archivo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}