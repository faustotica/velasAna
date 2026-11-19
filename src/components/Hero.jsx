import React from 'react';

export default function Hero() {
  return (
    <div id="inicio" className="relative flex items-center min-h-[85vh] overflow-hidden">
      
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.png" 
          alt="Velas artesanales Velas Ana" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Velo sutil para asegurar buena lectura sin tapar la foto */}
      <div className="absolute inset-0 bg-[#FAF8F5]/25 z-10"></div>

      {/* Contenido alineado a la izquierda en el espacio libre */}
      <div className="relative z-20 text-left px-8 sm:px-14 lg:px-20 max-w-2xl py-20">
        
        {/* Título principal en BLANCO */}
        <h1 className="font-serif text-5xl md:text-7xl text-white mb-4 leading-tight font-bold tracking-tight drop-shadow-md">
          Velas aromáticas
        </h1>

        {/* Subtítulo en NEGRO/GRAFITO */}
        <h2 className="font-sans text-xl md:text-2xl text-[#2D2D2D] mb-6 font-medium italic">
          100% artesanales
        </h2>

        {/* Párrafo en NEGRO/GRAFITO */}
        <p className="font-sans text-lg md:text-xl text-[#2D2D2D] mb-8 font-light max-w-lg leading-relaxed">
          Iluminamos tus espacios con aromas únicos, creando momentos de paz y calidez en tu hogar.
        </p>

        {/* Botón rectangular con esquinas redondeadas */}
        <a 
          href="#productos" 
          className="inline-block bg-[#6B4F3B] text-white px-10 py-4 rounded-lg text-lg font-sans font-medium tracking-wide hover:bg-[#573F2F] transition-all shadow-lg"
        >
          Ver catálogo
        </a>
      </div>
    </div>
  );
}