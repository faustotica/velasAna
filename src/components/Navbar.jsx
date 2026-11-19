import React from 'react';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#EFECE6] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo (Izquierda) */}
          <div className="w-1/3 flex justify-start items-center">
            <a href="#inicio" className="cursor-pointer -ml-4 h-24 w-64 flex items-center justify-center overflow-hidden">
              <Logo className="w-full h-full scale-[2.2] hover:opacity-90 transition-opacity" />
            </a>
          </div>
          
          {/* Links (Centro) - Estilo de texto limpio y editorial (sin botones) */}
          <div className="hidden md:flex w-1/3 justify-center items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-[#6B4F3B] font-sans text-sm font-medium transition-colors">
              Inicio
            </a>
            <a href="#productos" className="text-gray-700 hover:text-[#6B4F3B] font-sans text-sm font-medium transition-colors">
              Productos
            </a>
            <a href="#sobre-mi" className="text-gray-700 hover:text-[#6B4F3B] font-sans text-sm font-medium transition-colors">
              Sobre mí
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-[#6B4F3B] font-sans text-sm font-medium transition-colors">
              Contacto
            </a>
          </div>
          
          {/* Espaciador derecho equilibrado */}
          <div className="w-1/3 flex justify-end items-center"></div>

        </div>
      </div>
    </nav>
  );
}