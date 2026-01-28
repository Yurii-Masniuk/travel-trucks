import type { Metadata } from "next";
import { Header } from '@/components/Header/Header';
import "./globals.css";

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
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}