import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const sucursales = [
  {
    nombre: 'Sucursal Principal – Alajuela Centro',
    direccion: 'Contiguo al Cementerio General, C. 12 Ismael Chaverri, Provincia de Alajuela, Alajuela',
    telefono: '+506 2442 3050',
    whatsapp: '50685011430',
  },
  {
    nombre: 'Sucursal Desamparados – Alajuela',
    direccion: 'C. Las Americas, Provincia de Alajuela, Desamparados',
    telefono: '+506 2430 0270',
    whatsapp: '50685011430',
  },
];

export default function ContactoSucursal() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contáctenos</h2>

      {/* Sucursales */}
      <div className="grid gap-8 md:grid-cols-2 mb-16">
        {sucursales.map((sucursal, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-gray-200 p-6 shadow hover:shadow-md transition bg-white"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{sucursal.nombre}</h3>
            <p className="flex items-center text-gray-600 mb-1">
              <MapPin className="w-4 h-4 mr-2" /> {sucursal.direccion}
            </p>
            <p className="flex items-center text-gray-600 mb-1">
              <Phone className="w-4 h-4 mr-2" /> 
              <a href={`tel:${sucursal.telefono}`} className="text-blue-600 hover:underline">
                {sucursal.telefono}
              </a>
            </p>
            <a
              href={`https://wa.me/${sucursal.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-600 font-medium mt-3 hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
                className="w-5 h-5"
              >
                <path d="M380.9 97.1c-45.5-45.5-106.1-70.5-170.6-70.5S85.2 51.6 39.7 97.1C-6 142.6-21.4 203.2 2.4 257.7L0 320l62.3-2.4c54.5 23.8 115.1 8.4 160.6-37.1s60.9-106.1 37.1-160.6L320 0l-62.3 2.4C380.9 61.4 426.4 111.9 380.9 97.1z" />
              </svg>
              Contactar por WhatsApp
            </a>
          </div>
        ))}
      </div>

      {/* Formulario */}
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow border border-gray-200">
        <h3 className="text-xl font-semibold mb-6 text-gray-800">¿Tienes una consulta? Escríbenos:</h3>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Correo</label>
            <input
              type="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="tucorreo@ejemplo.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mensaje</label>
            <textarea
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}
