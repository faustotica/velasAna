import React from 'react';
import Logo from './Logo'; // Usamos el componente Logo que ya tienes en components

export default function Footer() {
  return (
    <footer id="contacto" className="bg-white border-t border-[#EFECE6] pt-16 pb-8 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Columna 1: Logo original e identidad */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="h-20 w-48 flex items-center justify-start overflow-hidden -ml-2 mb-2">
              <Logo className="w-full h-full scale-[2.0]" />
            </div>
            <p className="text-gray-500 text-sm font-light max-w-xs mx-auto md:mx-0">
              Iluminando tus momentos con aromas<br />
              que inspiran paz y tranquilidad.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="text-center">
            <h4 className="font-serif text-xl mb-6 text-[#2D2D2D]">Enlaces</h4>
            <div className="flex flex-col space-y-3 text-sm font-light text-gray-600">
              <a href="#inicio" className="hover:text-[#6B4F3B] transition-colors">Inicio</a>
              <a href="#productos" className="hover:text-[#6B4F3B] transition-colors">Catálogo</a>
              <a href="#sobre-mi" className="hover:text-[#6B4F3B] transition-colors">Nuestra Esencia</a>
            </div>
          </div>

          {/* Columna 3: Redes / Contacto (Instagram de Velas Ana) */}
          <div className="text-center md:text-right">
            <h4 className="font-serif text-xl mb-6 text-[#2D2D2D]">Seguinos</h4>
            <div className="flex flex-col items-center md:items-end space-y-4">
              <a href="https://instagram.com/velasana_" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-[#2D2D2D] transition-colors group">
                <span className="text-sm font-light">@velasana_</span>
                <div className="p-2 bg-[#2D2D2D] text-white rounded-full group-hover:bg-[#1A1A1A] transition-colors">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </div>
              </a>
            </div>
          </div>
          
        </div>
        
        {/* Línea divisoria y Copyright */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-gray-400">
          <p>&copy; {new Date().getFullYear()} Velas Ana. Todos los derechos reservados.</p>
          <p>Diseño artesanal para un producto artesanal.</p>
        </div>
      </div>
    </footer>
  );
}