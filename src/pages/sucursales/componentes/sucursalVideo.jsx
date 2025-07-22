// src/components/sucursalVideo.jsx
import React from 'react';

export default function SucursalVideo() {
  return (
    <div className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-gray-300 mb-10 bg-black">
      {/* Contenedor de video ajustado para pantallas pequeñas y grandes */}
      <div className="w-full h-[80vh] sm:h-[80vh] md:h-[70vh] lg:h-[70vh]" style={{ aspectRatio: '16 / 5' }}>
        <video
          autoPlay
          loop
          muted
          controls
          playsInline
          className="w-full h-full sm:object-cover md:object-cover lg:object-contain bg-black"
        >
          <source src="/sucursal.mp4" type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/80 to-transparent text-white p-4 text-center text-sm">
        Recorrido en video de nuestra sucursal
      </div>
    </div>
  );
}
