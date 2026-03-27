import type { Metadata } from "next";
import { Inter, Boldonse } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import ConstructionBanner from "@/components/layout/ConstructionBanner";
import VelocityCursor from "@/components/ui/VelocityCursor";

const inter = Inter({ subsets: ["latin"], display: "swap" });
export const boldonse = Boldonse({ subsets: ["latin"], weight: "400", display: "swap" });

export const metadata: Metadata = {
  title: "Russ Seidametov — Product Designer",
  description: "Portfolio of Russ Seidametov, Product Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <VelocityCursor />
        <div className="sticky top-0 z-50">
          <ConstructionBanner />
          <Nav />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
