/* eslint-disable react/no-children-prop */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Template from "@/components/templates/layout";
import NavigationProvider from "@/context/navigationContext";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ETS MANAGEMENT IMMOBILIER",
  description: "Votre partenaire de Confiance pour toutes vos Transactions Immobilières au Cameroun",
  openGraph: {
    images: '/next.svg',
  },
  icons: {
    icon: [
      {
        rel: 'icon',
        type: 'image/png',
        url: '/images/favicon-32x32.png',
        sizes: '32x32'
      },
      {
        rel: 'icon',
        type: 'image/png',
        url: '/images/favicon-16x16.png',
        sizes: '16x16',
      },
    ],
    apple: {
      type: 'image/png',
      rel: 'apple-touch-icon',
      url: '/images/apple-touch-icon.png',
      sizes: '180x180',
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">

      <body className={`${inter.className}`}>
        <NavigationProvider>
          <Template children={children} />
          <Toaster />
        </NavigationProvider>
      </body>

      <GoogleAnalytics gaId="G-PCZZBNJSSW" />

    </html>
  );
}
