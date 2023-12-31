import Navbar from "@/components/organism/navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./layout.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "portfolio",
  description: "portfolio DuyLT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="portfolio-page">
          <div className="portfolio-page__content">{children}</div>
        </div>
      </body>
    </html>
  );
}
