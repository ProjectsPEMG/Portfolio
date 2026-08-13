import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // L'import de ton composant

// Configuration de la police
const inter = Inter({ subsets: ["latin"] });

// Les métadonnées pour le référencement (SEO)
export const metadata: Metadata = {
  title: "Portfolio | Ingénieur ESEO",
  description: "Portfolio de présentation de mes projets en informatique et électronique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // L'ajout de scroll-smooth permet d'avoir un défilement fluide quand on clique sur le menu
    <html lang="fr" className="scroll-smooth"> 
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Navbar />
        {/* 'children' représente le contenu de tes pages (comme page.tsx) */}
        {children} 
      </body>
    </html>
  );
}