import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-bg font-sans selection:bg-brand-primary/20 selection:text-brand-primary">
      {/* Navbar limpio (sin props de carrito) */}
      <Navbar />
      
      <main>
        <Hero />
        {/* ProductList ya no necesita la función addToCart */}
        <ProductList />
        <About />
      </main>

      <Footer />
    </div>
  );
}

export default App;