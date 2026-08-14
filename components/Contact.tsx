export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* En-tête */}
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-4">
          Contactez-moi
        </h2>
        <div className="w-16 h-1 bg-blue-600 rounded mx-auto mb-8"></div>
        
        <p className="text-lg text-gray-600 mb-12">
          Je suis actuellement à la recherche de mon premier poste d&apos;ingénieur pour l&apos;automne 2026. 
          N&apos;hésitez pas à me contacter pour discuter d&apos;opportunités dans l&apos;Industrie 4.0 ou l&apos;embarqué !
        </p>

        {/* Grille des coordonnées */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Carte Email */}
          <div className="p-6 bg-gray-50 rounded-2xl flex flex-col items-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.53 4.819a2 2 0 002.94 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Email</h3>
            <a href="mailto:paulemile.martingrandvoinnet@gmail.com" className="text-blue-600 hover:underline break-all text-sm font-medium">
              paulemile.martingrandvoinnet
              <br/>@gmail.com
            </a>
          </div>

          {/* Carte Téléphone */}
          <div className="p-6 bg-gray-50 rounded-2xl flex flex-col items-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Téléphone</h3>
            <a href="tel:0777973070" className="text-blue-600 hover:underline text-sm font-medium">
              07 77 97 30 70
            </a>
          </div>

          {/* Carte LinkedIn */}
          <div className="p-6 bg-gray-50 rounded-2xl flex flex-col items-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">LinkedIn</h3>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm font-medium">
              Voir mon profil
            </a>
          </div>

        </div>

        {/* Bouton Télécharger CV */}
        <a 
          href="/CV_MARTIN-G_Paul-Emile.pdf" 
          download="CV_Paul-Emile_MARTIN-GRANDVOINNET.pdf" 
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
        >
          <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          Télécharger mon CV complet (PDF)
        </a>

      </div>
    </section>
  );
}
