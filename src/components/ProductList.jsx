import React, { useState } from 'react';
import { categories, products } from '../data/products';

export default function ProductList() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = activeCategory === "Todos" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="productos" className="py-24 bg-white border-t border-[#EFECE6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif text-[#4A5548] text-center mb-12 font-bold">
          Nuestro Catálogo
        </h2>
        
        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-lg text-sm font-sans font-medium transition-all duration-300 shadow-sm ${
                activeCategory === cat 
                  ? "bg-[#6B4F3B] text-white shadow-md" 
                  : "bg-white text-gray-700 border border-gray-200 hover:border-[#6B4F3B] hover:text-[#6B4F3B]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grilla de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div 
                  onClick={() => setSelectedProduct(product)}
                  className="aspect-[4/5] overflow-hidden bg-gray-100 cursor-pointer"
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 pb-4">
                  <div className="text-xs font-sans text-[#6B4F3B] mb-2 uppercase tracking-widest">
                    {product.category}
                  </div>
                  <h3 className="font-serif text-xl text-gray-900 mb-2 font-bold">
                    {product.name}
                  </h3>
                  <p className="font-sans text-gray-600 text-sm line-clamp-2 font-light">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="font-sans text-lg font-semibold text-[#6B4F3B]">
                  ${product.price.toLocaleString('es-AR')}
                </span>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="px-4 py-2 rounded-lg text-xs font-sans font-medium border border-[#6B4F3B] text-[#6B4F3B] hover:bg-[#6B4F3B] hover:text-white transition-all"
                >
                  Ver detalle
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-10 font-sans text-gray-500">
            No hay productos en esta categoría por el momento.
          </div>
        )}
      </div>

      {/* MODAL DE DETALLE DEL PRODUCTO (Sin WhatsApp ni teléfono) */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar (X) */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-lg bg-white/90 text-gray-600 hover:text-gray-900 flex items-center justify-center shadow-sm transition-colors"
              aria-label="Cerrar detalle"
            >
              ✕
            </button>

            {/* Imagen grande */}
            <div className="aspect-[4/5] md:aspect-auto bg-gray-100">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Información completa */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-sans text-[#6B4F3B] uppercase tracking-widest block mb-2">
                  {selectedProduct.category}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-gray-900 font-bold mb-4">
                  {selectedProduct.name}
                </h3>
                <p className="font-sans text-2xl font-semibold text-[#6B4F3B] mb-6">
                  ${selectedProduct.price.toLocaleString('es-AR')}
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-sans text-gray-600 text-sm leading-relaxed font-light">
                    {selectedProduct.description}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex flex-col gap-3">
                <p className="text-center font-sans text-xs text-gray-500 italic">
                  Pieza artesanal realizada por encargo
                </p>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="w-full text-center bg-[#6B4F3B] text-white py-3 rounded-lg text-sm font-sans font-medium hover:bg-[#573F2F] transition-all shadow-sm"
                >
                  Volver al catálogo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}