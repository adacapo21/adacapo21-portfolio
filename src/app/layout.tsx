import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aggelos Kappos | Staff Software Engineer",
  description: "Staff-level engineer building production-grade blockchain infrastructure, AI trading systems, and open-source developer tools.",
  keywords: ["Software Engineer", "Blockchain", "TypeScript", "Node.js", "Cardano", "DeFi", "AI", "MCP"],
  authors: [{ name: "Aggelos Kappos" }],
  openGraph: {
    title: "Aggelos Kappos | Staff Software Engineer",
    description: "Building production-grade blockchain infrastructure, AI trading systems, and open-source developer tools.",
    url: "https://adacapo21.dev",
    siteName: "Aggelos Kappos",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aggelos Kappos | Staff Software Engineer",
    description: "Building production-grade blockchain infrastructure, AI trading systems, and open-source developer tools.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
