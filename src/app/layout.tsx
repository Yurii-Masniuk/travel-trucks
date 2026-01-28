import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from '@/components/Header/Header';
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['400', '500', '600']
});

export const metadata: Metadata = {
  title: "TravelTrucks",
  description: "Camper rentals in Ukraine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}