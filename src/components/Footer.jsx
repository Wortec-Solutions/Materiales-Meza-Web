// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="relative mt-16 bg-gray-700">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-gray-700"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-8 lg:grid-cols-5 mb-8">

          {/* Logo y descripción */}
          <div className="flex justify-center lg:col-span-1">           
              <img src="/logoMM.jpg" alt="Materiales Meza" className="h-40 w-40 mb-4" />
            {/* <p className="text-sm text-gray-300">
              Materiales Meza: Construcción, compromiso y confianza en cada proyecto.
            </p> */}
          </div>

          {/* Servicio al Cliente */}
          <div>
            <p className="font-semibold tracking-wide text-teal-400">Servicio al Cliente</p>
            <ul className="mt-2 space-y-2 text-sm text-gray-300">
              <li>Entregas y Devoluciones</li>
              <li>Cotizaciones</li>
              <li>Reclamaciones</li>
            </ul>
          </div>

          {/* Contáctenos */}
          <div>
            <p className="font-semibold tracking-wide text-teal-400">Contáctenos</p>
            <ul className="mt-2 space-y-2 text-sm text-gray-300">
              <li>📞 2442‑3050</li>
              <li>✉️ infog@materialesmeza.com</li>
              <li>🏬 Tiendas</li>
              <li>🏢 ¿Quiénes Somos?</li>
            </ul>
          </div>

          {/* Sucursales */}
          <div className="lg:col-span-2">
            <p className="font-semibold tracking-wide text-teal-400 mb-4">📍 Sucursales</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Sucursal 1 */}
              <div>
                <p className="text-blue-300 text-sm font-medium mb-1">Sucursal Principal – Alajuela Centro</p>
                <iframe
                  title="Sucursal Principal"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.998016041414!2d-84.22198262496536!3d10.01761039002486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f9cfb0c998d9%3A0xabaef64a0b489e17!2sMateriales%20Meza!5e0!3m2!1ses!2scr!4v1720123565291!5m2!1ses!2scr"
                  width="100%"
                  height="100"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-md shadow"
                ></iframe>
              </div>

              {/* Sucursal 2 */}
              <div>
                <p className="text-blue-300 text-sm font-medium mb-1">Sucursal Desamparados – Alajuela</p>
                <iframe
                  title="Sucursal Desamparados"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.9504975801153!2d-84.19222212496529!3d10.021729489942634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f9f90ac4a411%3A0xd75f317a02d65fec!2sMateriales%20Meza%20%E2%80%A2%20Desamparados!5e0!3m2!1ses!2scr!4v1720123643825!5m2!1ses!2scr"
                  width="100%"
                  height="100"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-md shadow"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-600 sm:flex-row text-sm text-gray-300">
          <p>© Copyright 2025 Wortec. Todos los derechos reservados. Versión: 11.11.11.1</p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <img src="/images/visa.png" alt="Visa" className="h-5" />
            <img src="/images/mastercard.png" alt="Mastercard" className="h-5" />
            <a href="https://facebook.com" className="hover:text-white"><FaFacebookF /></a>
            <a href="https://instagram.com" className="hover:text-white"><FaInstagram /></a>
            <a href="https://youtube.com" className="hover:text-white"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </div>
  );
};
