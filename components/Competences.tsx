"use client";

import { motion } from 'framer-motion';

export default function Competences() {
  const categories = [
    {
      titre: "Langages & Programmation",
      items: ["Python", "C", "C#", "C++", "Java", "Arduino"]
    },
    {
      titre: "Domaines d'Expertise",
      items: ["Deep Learning / Machine Learning", "Computer Vision", "IoT & Systèmes Embarqués", "Industrie 4.0", "Développement Logiciel", "Réalité Virtuelle (RA/RV)"]
    },
    {
      titre: "Logiciels & Outils",
      items: ["Unity", "SolidWorks", "Matlab", "Node-Red", "TensorFlow", "VS Code", "Excel"]
    }
  ];

  return (
    <section id="competences" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
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
            Mes Compétences
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded"></div>
        </motion.div>

        {/* Animation en cascade des cartes de compétences */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white dark:bg-gray-950 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-gray-800 pb-2">
                {cat.titre}
              </h3>
              <ul className="space-y-3">
                {cat.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-600 dark:text-gray-400">
                    <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Animation de la bannière finale */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-blue-900 dark:bg-blue-950/50 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between shadow-md border border-transparent dark:border-blue-900"
        >
          <div>
            <h3 className="text-xl font-bold mb-2">Certifications & Langues</h3>
            <p className="text-blue-200">TOEIC: 895/990 | Voltaire: 890/1000 | Anglais B2</p>
          </div>
          <div className="mt-6 md:mt-0">
            <span className="inline-block bg-blue-800 dark:bg-blue-900 text-blue-100 px-4 py-2 rounded-lg font-medium">
              Futur Ingénieur ESEO (Sept. 2026)
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
