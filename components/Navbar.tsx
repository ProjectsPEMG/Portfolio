"use client";

import Link from 'next/link';
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo + Photo de profil en miniature */}
          <div className="flex-shrink-0">
            <Link href="/" onClick={closeMenu} className="flex items-center gap-3 group">
              <img 
                src="/photo_profil.jpg" 
                alt="Profil" 
                className="w-10 h-10 rounded-full object-cover border-2 border-transparent group-hover:border-blue-500 transition-colors" 
              />
              <span className="font-bold text-2xl text-gray-900 dark:text-white tracking-tighter">
                PM<span className="text-blue-600 dark:text-blue-500">.</span>
              </span>
            </Link>
          </div>

          {/* Liens Desktop et Boutons */}
          <div className="flex items-center space-x-4 sm:space-x-8">
            
            <div className="hidden sm:flex space-x-8">
              <Link href="#projets" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                Projets
              </Link>
              <Link href="#competences" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                Compétences
              </Link>
              <Link href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Basculer le thème"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="sm:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Ouvrir le menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>
        </div>
      </div>

      {/* Menu Déroulant Mobile avec Animation Framer Motion */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="sm:hidden overflow-hidden bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800"
          >
            <div className="px-4 pt-2 pb-6 flex flex-col space-y-4">
              <Link href="#projets" onClick={closeMenu} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 font-medium text-lg">
                Projets
              </Link>
              <Link href="#competences" onClick={closeMenu} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 font-medium text-lg">
                Compétences
              </Link>
              <Link href="#contact" onClick={closeMenu} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 font-medium text-lg">
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
