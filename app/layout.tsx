// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BricketX Project Management L.L.C | Dubai & UAE",
  description:
    "Dubai's Trusted Partner in Project Management, Advertising & Business Consulting. Helping UAE businesses turn ideas into successful outcomes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased text-[#212121] bg-[#ffffff]">
        {children}
      </body>
    </html>
  );
}