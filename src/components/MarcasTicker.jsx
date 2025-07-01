// src/components/MarcasTicker.jsx
import React from 'react';
import './MarcasTicker.css';

const marcas = [
  '/marca1.png',
  '/marca2.png',
  '/marca3.jpg',
  '/marca4.jpg',
  '/marca5.jpg',
  '/marca6.jpg',
];

export default function MarcasTicker() {
  return (
    <div className="marcas-container">
      <div className="marcas-slider">
        {[...marcas, ...marcas].map((src, i) => (
          <img key={i} src={src} alt={`marca-${i}`} className="marca-img" />
        ))}
      </div>
    </div>
  );
}
