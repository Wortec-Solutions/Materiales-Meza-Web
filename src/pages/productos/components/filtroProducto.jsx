// src/components/FiltroProductos.jsx
import React from 'react';

export default function FiltroProductos({
  categorias,
  marcas,
  filtroNombre,
  setFiltroNombre,
  categoriaSeleccionada,
  setCategoriaSeleccionada,
  marcaSeleccionada,
  setMarcaSeleccionada,
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:gap-4 gap-3 bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm">
      {/* Input de búsqueda */}
      <input
        type="text"
        placeholder="🔍 Buscar por nombre, categoría o marca..."
        value={filtroNombre}
        onChange={e => setFiltroNombre(e.target.value)}
        className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white shadow-sm transition"
      />

      {/* Dropdown de categorías */}
      <select
        value={categoriaSeleccionada}
        onChange={e => setCategoriaSeleccionada(e.target.value)}
        className="w-full md:w-1/4 px-3 py-2 border border-gray-300 rounded-md text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
      >
        <option value="Todas">Todas las categorías</option>
        {categorias.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      {/* Dropdown de marcas */}
      <select
        value={marcaSeleccionada}
        onChange={e => setMarcaSeleccionada(e.target.value)}
        className="w-full md:w-1/4 px-3 py-2 border border-gray-300 rounded-md text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
      >
        <option value="Todas">Todas las marcas</option>
        {marcas.map(marca => (
          <option key={marca} value={marca}>{marca}</option>
        ))}
      </select>
    </div>
  );
}
