"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  // On crée un petit tableau pour générer nos étoiles facilement
  const stars = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    top: `${Math.floor(Math.random() * 100)}%`,
    left: `${Math.floor(Math.random() * 100)}%`,
    delay: `${Math.random() * 5}s`,
    size: Math.random() > 0.5 ? 'w-1 h-1' : 'w-2 h-2', // Alterne entre petites et moyennes étoiles
  }));

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 text-center overflow-hidden transition-colors duration-300">
      
      {/* 1. Le ciel étoilé (Visible UNIQUEMENT en mode sombre) */}
      <div className="absolute inset-0 hidden dark:block pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className={`absolute bg-white rounded-full animate-twinkle ${star.size}`}
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
            }}
          ></div>
        ))}
      </div>

      {/* 2. Les Blobs (Plus petits et mieux répartis) */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-blue-300/40 dark:bg-blue-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob pointer-events-none"></div>
      <div className="absolute top-40 right-20 w-56 h-56 bg-purple-300/40 dark:bg-purple-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute bottom-20 left-1/4 w-52 h-52 bg-indigo-300/40 dark:bg-indigo-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-4000 pointer-events-none"></div>
      <div className="absolute -bottom-10 right-1/3 w-40 h-40 bg-teal-300/40 dark:bg-teal-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob pointer-events-none" style={{ animationDelay: '3s' }}></div>

      {/* 3. Le contenu principal */}
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
