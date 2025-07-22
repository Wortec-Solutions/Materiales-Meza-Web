// src/pages/sucursal.jsx
import React from 'react';
import SucursalVideo from '../sucursales/componentes/sucursalVideo';

export default function Sucursal() {
  return (
    <div className="px-4 py-12 max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12 tracking-tight">
        📍 Nuestras Sucursales
      </h1>

      <SucursalVideo />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Sucursal Principal */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition hover:shadow-lg">
          <div className="p-5">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Sucursal Principal – Alajuela Centro</h2>
            <p className="text-gray-600 mb-4">
              Nuestra sede central ubicada en el corazón de Alajuela. Atención personalizada y amplio inventario.
            </p>
          </div>
          <iframe
            title="Sucursal Principal"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.998016041414!2d-84.22198262496536!3d10.01761039002486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f9cfb0c998d9%3A0xabaef64a0b489e17!2sMateriales%20Meza!5e0!3m2!1ses!2scr!4v1720123565291!5m2!1ses!2scr"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-b-xl"
          ></iframe>
        </div>

        {/* Sucursal Desamparados */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition hover:shadow-lg">
          <div className="p-5">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Sucursal Desamparados – Alajuela</h2>
            <p className="text-gray-600 mb-4">
              Ubicada en Desamparados de Alajuela, esta sucursal ofrece servicio ágil y atención cercana.
            </p>
          </div>
          <iframe
            title="Sucursal Desamparados"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.9504975801153!2d-84.19222212496529!3d10.021729489942634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f9f90ac4a411%3A0xd75f317a02d65fec!2sMateriales%20Meza%20%E2%80%A2%20Desamparados!5e0!3m2!1ses!2scr!4v1720123643825!5m2!1ses!2scr"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-b-xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
