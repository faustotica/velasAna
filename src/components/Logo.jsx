import React from 'react';

export default function Logo({ className = "", isLight = false }) {
  return (
    <div className={`flex items-center justify-center select-none ${className}`}>
      <img 
        src="/VECTOR-VELAS-ANA.png" 
        alt="Velas Ana Logo" 
        className={`w-10 h-auto object-contain ${isLight ? 'brightness-0 invert' : ''}`}
      />
    </div>
  );
}