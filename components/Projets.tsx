"use client";

import { motion } from 'framer-motion';
import { ExternalLink, PlayCircle, FileText } from 'lucide-react'; 

const mesProjets = [
  {
    id: 1,
    titre: "Système IoT & Prédiction (Transarc)",
    description: "Développement d'une solution IoT pour la mise à jour à distance sur autocars. Création d'un harnais de câblage sur-mesure et d'un algorithme de prédiction de panne de batterie.",
    technos: ["IoT", "Python", "Électronique Embarquée"],
    lienGithub: "",
    lienSite: "/Poster_Harnais_Kairos.pdf",
    lienVideo: "",
    lienDoc: "/Rapport de stage S10 - MARTIN-GRANDVOINNET Paul-Émile.pdf",
  },
  {
    id: 2,
    titre: "Vision Industrielle (Opales)",
    description: "Conception d'outils de vision industrielle pour la détection de défauts sur chaîne de production automobile. Classification par Deep Learning et traitement d'images.",
    technos: ["Python", "TensorFlow", "Deep Learning", "Computer Vision"],
    lienGithub: "",
    lienSite: "",
    lienVideo: "",
    lienDoc: "/Rapport Stage S7 ---- MARTIN-GRANDVOINNET Paul-Emile.pdf",
  },
  {
    id: 3,
    titre: "Simulation CACES VR (ESEO)",
    description: "Développement d'une simulation en Réalité Virtuelle (RV) dédiée à la formation CACES. Projet réalisé pour offrir un environnement d'apprentissage immersif et sécurisé.",
    technos: ["Unity", "C#", "Réalité Virtuelle (VR)"],
    lienGithub: "",
    lienSite: "",
    lienVideo: "https://youtu.be/QFTfpGDqWVM", 
    lienDoc: "",
  },
  {
    id: 4,
    titre: "Projet de Synthèse (SPIE/ESEO)",
    description: "Optimisation de la consommation énergétique de fours à arc électrique. Utilisation de la modélisation et du Machine Learning pour réduire l'empreinte énergétique.",
    technos: ["Machine Learning", "Modélisation", "Analyse de données"],
    lienGithub: "",
    lienSite: "",
    lienVideo: "",
    lienDoc: "/Poster_Projet_Synthèse.pdf",
  },
  {
    id: 5,
    titre: "ARM'ESEO (ESEO)",
    description: "Réalisation d'un bras robotisé industriel autonome et utilisable facilement. Programmation et contrôle des mouvements de la structure.",
    technos: ["C", "Robotique", "Systèmes Embarqués"],
    lienGithub: "",
    lienSite: "",
    lienVideo: "https://youtu.be/jUgoL7QJ4LA", 
    lienDoc: "",
  },
  ,
  {
    id: 6,
    titre: "ESEO NyrioLine (ESEO)",
    description: "Réalisation d'une chaîne de production miniaturisée avec un robot Nyrio. Programmation de robots et gestion de convoyeurs (Python), création de pinces sur-mesure (CAO SolidWorks), utilisation de caméra pour la détection d'objets (Computer Vision). ",
    technos: ["Python", "Robotique", "CAO", "Computer Vision"],
    lienGithub: "", 
    lienSite: "",
    lienVideo: "https://youtu.be/9J1mM9V6HDg",
    lienDoc: "",
  }
  {
    id: 7,
    titre: "Appli Web Météo (Projet Perso)",
    description: "Développement et déploiement d'une application web météorologique personnalisée. Utilisation d'API externes (comme OpenMeteo), gestion d'états et interface responsive.",
    technos: ["Next.js", "React", "API REST", "Vercel"],
    lienGithub: "https://github.com/ProjectsPEMG/meteo-perso-pemg", 
    lienSite: "https://meteo-perso-pemg.vercel.app",
    lienVideo: "",
    lienDoc: "",
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
              
              {/* Zone des boutons adaptatifs */}
              <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                
                {/* 1. Bouton GitHub */}
                {projet.lienGithub && (
                  <a 
                    href={projet.lienGithub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                    Code source
                  </a>
                )}

                {/* 2. Bouton Document (PDF/PPT) - En vert pour le différencier */}
                {projet.lienDoc && (
                  <a 
                    href={projet.lienDoc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Voir le document
                  </a>
                )}

                {/* 3. Bouton Vidéo - En rouge pour le côté "YouTube/Vidéo" */}
                {projet.lienVideo && (
                  <a 
                    href={projet.lienVideo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
                  >
                    <PlayCircle className="w-4 h-4 mr-2" />
                    Voir la vidéo
                  </a>
                )}

                {/* 4. Bouton Site Web Externe */}
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
