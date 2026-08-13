import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-2xl text-gray-900 tracking-tighter">
              PM<span className="text-blue-600">.</span>
            </Link>
          </div>

          {/* Liens de navigation (cachés sur petits écrans pour l'instant) */}
          <div className="hidden sm:flex space-x-8">
            <Link href="#projets" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Projets
            </Link>
            <Link href="#competences" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Compétences
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}