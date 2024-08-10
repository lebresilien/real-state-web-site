import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import { Suspense } from 'react'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Immobilier",
  description: " Votre partenaire de Confiance pour toutes vos Transactions Immobilières au Cameroun.",
};

async function getData() {
  const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=33448546178178719a87b8991a7fe2fc&page=1')
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
} 
async function Posts() {
  const posts = await getData();

  return (
    <div>
      
    </div>
  );
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
