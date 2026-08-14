import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 text-center transition-colors duration-300">
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
    </section>
  );
}
