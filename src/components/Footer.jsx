// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-300">
      <div className="max-w-6xl mx-auto py-12 px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/logoMM.jpg" alt="Materiales Meza" className="h-12" />
          </div>

          {/* Columna: Servicio al cliente */}
          <div>
            <h3 className="text-white text-lg font-bold mb-2">Servicio al Cliente</h3>
            <ul className="space-y-1">
              <li>Entregas y Devoluciones</li>
              <li>Cotizaciones</li>
              <li>Reclamaciones</li>
            </ul>
          </div>

          {/* Columna: Contáctenos */}
          <div>
            <h3 className="text-white text-lg font-bold mb-2">Contáctenos</h3>
            <ul className="space-y-1">
              <li>📞 2442‑3050</li>
              <li>✉️ infog@materialesmeza.com</li>
     

              <li>🏬 Tiendas</li>
              <li>🏢 ¿Quiénes Somos?</li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="flex items-start gap-4">
            <a href="https://facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-white">
              <FaFacebookF size={24} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="https://youtube.com" aria-label="YouTube" className="text-gray-400 hover:text-white">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>

        {/* Pie de página */}
        <div className="mt-8 border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <div>© Copyright 2025 Wortec. Todos los derechos reservados. Versión: 11.11.11.1</div>
          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <img src="/images/visa.png" alt="Visa" className="h-6" />
            <img src="/images/mastercard.png" alt="Mastercard" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
