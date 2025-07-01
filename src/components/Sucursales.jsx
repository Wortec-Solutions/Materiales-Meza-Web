import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

export default function Sucursales() {
  const sucursales = [
    {
      nombre: "Meza Alajuela Central",
      direccion: "250 m Norte del Parque Central de Alajuela",
      telefono: "2440-1234",
      horarios: {
        lunesViernes: "7:00 a.m. - 6:00 p.m.",
        sabado: "7:00 a.m. - 4:00 p.m.",
        domingo: "Cerrado"
      }
    },
    {
      nombre: "Meza Desamparados de Alajuela",
      direccion: "Frente a Plaza Desamparados, carretera principal",
      telefono: "2441-5678",
      horarios: {
        lunesViernes: "7:00 a.m. - 6:00 p.m.",
        sabado: "7:00 a.m. - 4:00 p.m.",
        domingo: "Cerrado"
      }
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-red-700">Sucursales de Ferretería Meza</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {sucursales.map((sucursal, idx) => (
          <div key={idx} className="border rounded-lg p-6 shadow hover:shadow-md transition bg-white">
            <h3 className="text-xl font-bold text-red-800 mb-2">{sucursal.nombre}</h3>
            <p className="text-gray-700 mb-2"><FaMapMarkerAlt className="inline mr-2 text-red-600" /> {sucursal.direccion}</p>
            <p className="text-gray-700 mb-2"><FaPhoneAlt className="inline mr-2 text-red-600" /> {sucursal.telefono}</p>
            <div className="text-gray-600 text-sm mt-2">
              <p><FaClock className="inline mr-1 text-red-500" /> <strong>Lunes a Viernes:</strong> {sucursal.horarios.lunesViernes}</p>
              <p><FaClock className="inline mr-1 text-red-500" /> <strong>Sábados:</strong> {sucursal.horarios.sabado}</p>
              <p><FaClock className="inline mr-1 text-red-500" /> <strong>Domingos:</strong> {sucursal.horarios.domingo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
