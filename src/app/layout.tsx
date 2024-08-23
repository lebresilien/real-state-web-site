/* eslint-disable react/no-children-prop */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Template from "@/components/templates/layout";
import NavigationProvider from "@/context/navigationContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Immobilier",
  description: "Votre partenaire de Confiance pour toutes vos Transactions Immobilières au Cameroun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NavigationProvider>
          <Template children={children} />
        </NavigationProvider>
      </body>
    </html>
  );
}
