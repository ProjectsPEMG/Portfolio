"use client";

import { motion } from 'framer-motion';
import { GitHub, ExternalLink } from 'lucide-react'; // On importe nos jolies icônes

const mesProjets = [
  {
    id: 1,
    titre: "Système IoT & Prédiction (Transarc)",
    description: "Développement d'une solution IoT pour la mise à jour à distance sur autocars. Création d'un harnais de câblage sur-mesure et d'un algorithme de prédiction de panne de batterie.",
    technos: ["IoT", "Python", "Électronique Embarquée"],
    lienGithub: "#",
    lienSite: "",
  },
  {
    id: 2,
    titre: "Vision Industrielle (Opales)",
    description: "Conception d'outils de vision industrielle pour la détection de défauts sur chaîne de production automobile. Classification par Deep Learning et traitement d'images.",
    technos: ["Python", "TensorFlow", "Deep Learning", "Computer Vision"],
    lienGithub: "#",
    lienSite: "",
  },
  {
    id: 3,
    titre: "Simulation CACES VR (ESEO)",
    description: "Développement d'une simulation en Réalité Virtuelle (RV) dédiée à la formation CACES. Projet réalisé pour offrir un environnement d'apprentissage immersif et sécurisé.",
    technos: ["Unity", "C#", "Réalité Virtuelle (VR)"],
    lienGithub: "#",
    lienSite: "",
  },
  {
    id: 4,
    titre: "Projet de Synthèse (SPIE/ESEO)",
    description: "Optimisation de la consommation énergétique de fours à arc électrique. Utilisation de la modélisation et du Machine Learning pour réduire l'empreinte énergétique.",
    technos: ["Machine Learning", "Modélisation", "Analyse de données"],
    lienGithub: "#",
    lienSite: "",
  },
  {
    id: 5,
    titre: "ARM'ESEO",
    description: "Réalisation d'un bras robotisé industriel autonome et utilisable facilement. Programmation et contrôle des mouvements de la structure.",
    technos: ["C", "Robotique", "Systèmes Embarqués"],
    lienGithub: "#",
    lienSite: "",
  },
  {
    id: 6,
    titre: "Appli Web Météo (Projet Perso)",
    description: "Développement et déploiement d'une application web météorologique personnalisée. Utilisation d'API externes (OpenMeteo), gestion d'états et interface responsive.",
    technos: ["Next.js", "React", "API REST", "Vercel"],
    lienGithub: "https://github.com/ProjectsPEMG/meteo-perso-pemg", 
    lienSite: "https://meteo-perso-pemg.vercel.app",
  }
];

export default function Projets() {
  return (
    <section id="projets" className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mesProjets.map((projet, index) => (
            <motion.div 
              key={projet.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
              
              {/* Zone des boutons (Code et/ou Site) */}
              <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                {/* Affiche le bouton GitHub si un lien existe */}
                {projet.lienGithub && (
                  <a 
                    href={projet.lienGithub}
                    target={projet.lienGithub !== "#" ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code source
                  </a>
                )}

                {/* Affiche le bouton du site en direct si un lien existe */}
                {projet.lienSite && (
                  <a 
                    href={projet.lienSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Voir le site
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
