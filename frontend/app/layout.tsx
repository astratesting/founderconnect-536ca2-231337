import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FounderConnect — Find Your Co-Founder",
  description:
    "Match with complementary co-founders based on skills, interests, and startup vision. Build your dream team with AI-powered matching.",
  keywords: [
    "co-founder",
    "startup",
    "founder matching",
    "entrepreneurship",
    "startup team",
  ],
  openGraph: {
    title: "FounderConnect — Find Your Co-Founder",
    description:
      "Match with complementary co-founders based on skills, interests, and startup vision.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
