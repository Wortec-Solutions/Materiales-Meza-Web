// src/pages/Trabaja.jsx
import React, { useState } from 'react';
import TrabajaModal from '../trabaja/componentes/trabajaModal';

const trabajosDemo = [
  {
    id: 1,
    titulo: 'Asistente de Bodega',
    descripcion: 'Ayudar en el control de inventario, carga y descarga de materiales.',
    ubicacion: 'Alajuela',
    jornada: 'Tiempo completo',
  },
  {
    id: 2,
    titulo: 'Cajero/a',
    descripcion: 'Atención al cliente y manejo de caja registradora.',
    ubicacion: 'Sucursal San José',
    jornada: 'Medio tiempo',
  },
  {
    id: 3,
    titulo: 'Chofer repartidor',
    descripcion: 'Reparto de pedidos en zona GAM con camión de la empresa.',
    ubicacion: 'Alajuela',
    jornada: 'Tiempo completo',
  },
];

export default function Trabaja() {
  const [trabajoSeleccionado, setTrabajoSeleccionado] = useState(null);

  const abrirModal = (trabajo) => setTrabajoSeleccionado(trabajo);
  const cerrarModal = () => setTrabajoSeleccionado(null);

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold text-center text-blue-900">Trabajá con Nosotros</h1>

      {/* Lista de trabajos disponibles */}
      <div className="bg-white rounded-lg shadow p-6 space-y-4">
        <h2 className="text-xl font-semibold">Vacantes disponibles</h2>
        {trabajosDemo.map((trabajo) => (
          <button
            key={trabajo.id}
            onClick={() => abrirModal(trabajo)}
            className="w-full text-left border-l-4 border-blue-700 pl-4 py-2 hover:bg-blue-50 transition rounded"
          >
            <h3 className="text-lg font-bold">{trabajo.titulo}</h3>
            <p className="text-sm text-gray-600">{trabajo.descripcion}</p>
            <p className="text-sm text-gray-500">
              {trabajo.ubicacion} – {trabajo.jornada}
            </p>
          </button>
        ))}
      </div>

      {/* Botón de WhatsApp */}
      <div className="text-center">
        <a
          href="https://wa.me/50685011430?text=Hola,%20me%20gustaría%20saber%20si%20tienen%20vacantes%20disponibles%20por%20el%20momento..."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full shadow-lg transition"
        >
          Contactar por WhatsApp
        </a>
      </div>

      {/* Modal */}
      <TrabajaModal trabajo={trabajoSeleccionado} isOpen={!!trabajoSeleccionado} onClose={cerrarModal} />
    </div>
  );
}
