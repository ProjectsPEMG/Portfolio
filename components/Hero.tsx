import Link from 'next/link';

export default function Hero() {
  return (
    // min-h-[calc(100vh-4rem)] permet à la section de prendre toute la hauteur de l'écran (moins la hauteur de la barre de navigation)
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 text-center">
      
      {/* Petit mot d'introduction */}
      <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4">
        Bonjour, je suis
      </span>
      
      {/* Ton Nom */}
      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
        Paul-Emile Martin-Grandvoinnet
      </h1>
      
      {/* Ton Titre / Accroche */}
      <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
        Ingénieur ESEO en <span className="text-gray-900 font-semibold">Informatique & Électronique</span>.
      </h2>
      
      {/* Petite description */}
      <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
        Je conçois des solutions logicielles et matérielles robustes. 
        À la recherche de nouveaux défis pour mettre mes compétences techniques au service de projets innovants.
      </p>
      
      {/* Les boutons d'action (Call-to-Action) */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="#projets" 
          className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-sm"
        >
          Voir mes projets
        </Link>
        <Link 
          href="#contact" 
          className="px-8 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-sm"
        >
          Me contacter
        </Link>
      </div>
      
    </section>
  );
}