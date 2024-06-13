import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "@/components/template/layout";
import "./globals.css";
import "./animation.css";
import "./layout.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LTD",
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
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
