// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Project Management, Advertising & Consultancy Dubai | BricketX",
  description:
    "BricketX UAE offers project management, billboard & digital advertising, and business consultancy in Dubai. One accountable team, end-to-end delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} overflow-x-hidden max-w-full`}>
      <body className="antialiased bg-[#07090e] text-white overflow-x-hidden max-w-full min-h-screen relative selection:bg-[#c39967] selection:text-[#07090e]">
        <SmoothScrollProvider>
          <div className="relative w-full max-w-full overflow-x-hidden flex flex-col min-h-screen">
            <ScrollToTop />
            <Navbar />
            <div className="flex-1 w-full max-w-full overflow-x-hidden">
              {children}
            </div>
            <Footer />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}