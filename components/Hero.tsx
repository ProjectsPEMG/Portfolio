"use client"; // Obligatoire car on utilise des animations côté navigateur

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    // overflow-hidden empêche le site de "déborder" si les halos vont trop sur les côtés
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 text-center overflow-hidden transition-colors duration-300">
      
      {/* Éléments de fond dynamiques (Blobs) */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-300/30 dark:bg-blue-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-300/30 dark:bg-purple-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-indigo-300/30 dark:bg-indigo-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-4000 pointer-events-none"></div>

      {/* Contenu principal avec effet d'apparition (Fade-in Up) */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 flex flex-col items-center"
      >
        <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase text-sm mb-4">
          Bonjour, je suis
        </span>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
          Paul-Emile Martin
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Ingénieur ESEO en <span className="text-gray-900 dark:text-white font-semibold">Informatique & Électronique</span>.
        </h2>
        
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          Je conçois des solutions logicielles et matérielles robustes. 
          À la recherche de nouveaux défis pour mettre mes compétences techniques au service de projets innovants.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="#projets" 
            className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-sm"
          >
            Voir mes projets
          </Link>
          <Link 
            href="#contact" 
            className="px-8 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors shadow-sm"
          >
            Me contacter
          </Link>
        </div>
      </motion.div>
      
    </section>
  );
}
