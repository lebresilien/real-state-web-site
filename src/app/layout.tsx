import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationProvider from "@/context/navigationContext";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Immobilier",
  description: " Votre partenaire de Confiance pour toutes vos Transactions Immobilières au Cameroun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationProvider>
          <>
            <div className="flex fixed bottom-20 right-3 hover:-translate-y-2 duration-300 z-50">
              <Link href="https://api.whatsapp.com/send?phone=23778660800" target="_blank">
                <Image 
                  src="/images/whatsapp.svg" 
                  alt="Watsapp logo"
                  height={60}
                  width={60}
                />
              </Link>
            </div>
            {children}
          </>
        </NavigationProvider>
      </body>
    </html>
  );
}
