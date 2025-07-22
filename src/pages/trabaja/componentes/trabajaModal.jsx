// src/components/TrabajaModal.jsx
import React, { useState } from 'react';

export default function TrabajaModal({ trabajo, isOpen, onClose }) {
  const [archivo, setArchivo] = useState(null);
  const [mensaje, setMensaje] = useState('');

  if (!isOpen || !trabajo) return null;

  const handleArchivoChange = e => {
    const file = e.target.files[0];
    if (!file) return;

    const nombre = file.name.toLowerCase();
    const extensionesPermitidas = ['.pdf', '.doc', '.docx'];
    const esExtensionValida = extensionesPermitidas.some(ext => nombre.endsWith(ext));

    if (!esExtensionValida) {
      setMensaje('Solo se permiten archivos PDF o Word (.doc, .docx).');
      setArchivo(null);
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setMensaje('Archivo muy grande. Máximo 5MB.');
      setArchivo(null);
      return;
    }

    setArchivo(file);
    setMensaje('Archivo cargado correctamente.');
  };

  const handleEnviar = () => {
    if (archivo) {
      alert(`Enviando CV para el puesto de ${trabajo.titulo}: ${archivo.name}`);
    } else {
      alert('Por favor selecciona un archivo válido.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full relative">
        <button
          className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-xl"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold text-blue-800 mb-2">{trabajo.titulo}</h2>
        <p className="text-gray-700 mb-1">{trabajo.descripcion}</p>
        <p className="text-sm text-gray-500 mb-4">
          {trabajo.ubicacion} – {trabajo.jornada}
        </p>

        <div className="mb-4">
          <label className="block font-semibold mb-1 text-sm">Subí tu currículum:</label>
          <input type="file" onChange={handleArchivoChange} className="block w-full text-sm" />

          {mensaje && <p className="text-sm text-red-600 mt-1">{mensaje}</p>}
        </div>

        <button
          onClick={handleEnviar}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold"
        >
          Enviar CV
        </button>
      </div>
    </div>
  );
}
