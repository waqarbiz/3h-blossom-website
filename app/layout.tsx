import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "3H Blossom Home Daycare | Licensed Home Daycare in Saskatoon",
  description:
    "Licensed home daycare in Kensington, Saskatoon. Caring childcare for infants, toddlers, preschoolers, and school-age children.",
  keywords: [
    "daycare Saskatoon",
    "licensed daycare Saskatoon",
    "Kensington daycare",
    "home daycare Saskatoon",
    "childcare Saskatoon",
    "3H Blossom"
  ],
 icons: {
  icon: "/logo.png",
  shortcut: "/logo.png",
  apple: "/logo.png",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
