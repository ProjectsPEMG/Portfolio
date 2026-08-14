"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between">
        
        {/* Copyright */}
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left">
          © {new Date().getFullYear()} Paul-Emile Martin-Grandvoinnet. <br className="md:hidden" />
          Fait avec Next.js & Tailwind CSS.
        </p>

        {/* Bouton retour en haut */}
        <motion.button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ y: -3 }}
          className="p-3 bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
          aria-label="Retour en haut"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
          </svg>
        </motion.button>
        
      </div>
    </footer>
  );
}
