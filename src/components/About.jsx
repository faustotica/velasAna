import React from 'react';

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="inline-block mb-6">
          <span className="text-brand-secondary text-sm font-semibold tracking-[0.2em] uppercase">Hecho a mano</span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-brand-primary mb-8">Nuestra Esencia</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6 font-light">
          En <span className="font-serif italic text-brand-primary">Velas Ana</span>, creemos en el poder de los aromas para transformar espacios en refugios de paz. Cada una de nuestras velas es vertida a mano con dedicación, utilizando cera de soja 100% natural y esencias de la más alta calidad.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed font-light">
          Al elegir un producto artesanal, estás llevando a tu hogar una pieza única creada con amor y respeto por el medio ambiente. Queremos acompañarte en tus momentos de relax, meditación o simplemente cuando disfrutas de tu hogar.
        </p>
      </div>
    </section>
  );
}
