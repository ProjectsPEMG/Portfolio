"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

const mesProjets = [
  {
    id: 1,
    titre: "Système IoT & Prédiction (Transarc)",
    description: "Développement d'une solution IoT pour la mise à jour à distance sur autocars. Création d'un harnais de câblage sur-mesure et d'un algorithme de prédiction de panne de batterie.",
    technos: ["IoT", "Python", "Électronique Embarquée"],
    lienGithub: "#",
  },
  {
    id: 2,
    titre: "Vision Industrielle (Opales)",
    description: "Conception d'outils de vision industrielle pour la détection de défauts sur chaîne de production automobile. Classification par Deep Learning et traitement d'images.",
    technos: ["Python", "TensorFlow", "Deep Learning", "Computer Vision"],
    lienGithub: "#",
  },
  {
    id: 3,
    titre: "Simulation CACES VR (ESEO)",
    description: "Développement d'une simulation en Réalité Virtuelle (RV) dédiée à la formation CACES. Projet réalisé pour offrir un environnement d'apprentissage immersif et sécurisé.",
    technos: ["Unity", "C#", "Réalité Virtuelle (VR)"],
    lienGithub: "#",
  },
  {
    id: 4,
    titre: "Projet de Synthèse (SPIE/ESEO)",
    description: "Optimisation de la consommation énergétique de fours à arc électrique. Utilisation de la modélisation et du Machine Learning pour réduire l'empreinte énergétique.",
    technos: ["Machine Learning", "Modélisation", "Analyse de données"],
    lienGithub: "#",
  },
  {
    id: 5,
    titre: "ARM'ESEO",
    description: "Réalisation d'un bras robotisé industriel autonome et utilisable facilement. Programmation et contrôle des mouvements de la structure.",
    technos: ["C", "Robotique", "Systèmes Embarqués"],
    lienGithub: "#",
  },
  {
    id: 6,
    titre: "Appli Météo Web (Projet Perso)",
    description: "Développement et déploiement d'une application web météorologique personnalisée. Utilisation d'API externes, gestion d'états et interface responsive.",
    technos: ["Next.js", "React", "API REST", "Vercel"],
    lienGithub: "https://github.com/ProjectsPEMG/meteo-perso-pemg",
  }
];

export default function Projets() {
  return (
    <section id="projets" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animation du titre */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
            Mes Réalisations & Expériences
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded"></div>
        </motion.div>

        {/* Grille avec animation en cascade (stagger) pour les cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mesProjets.map((projet, index) => (
            <motion.div 
              key={projet.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Le delay crée l'effet cascade
              className="group border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:shadow-lg dark:hover:shadow-gray-900/50 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 flex flex-col bg-white dark:bg-gray-900"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {projet.titre}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow text-sm">
                {projet.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {projet.technos.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold px-2.5 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <Link 
                href={projet.lienGithub} 
                className="inline-flex items-center text-sm font-medium text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                Voir plus
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
