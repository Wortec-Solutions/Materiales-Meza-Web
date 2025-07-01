// src/components/Navbar.jsx
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const items = ['Inicio', 'Productos', 'Cotizaciones', 'Trabaja', 'Sucursales', 'Contacto'];

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 flex justify-between items-center h-16">
        <Link to="/">
          <img src="/logoMM.jpg" alt="Materiales Meza" className="h-12" />
        </Link>

        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="space-x-6">
          {items.map(label => {
            const path = label === 'Inicio' ? '/' : `/${label.toLowerCase()}`;
            return (
              <NavLink
                key={label}
                to={path}
                end={path === '/'} 
                className={({ isActive }) =>
                  `text-blue-800 hover:text-red-600 transition ${
                    isActive ? 'font-bold underline' : ''
                  }`
                }
              >
                {label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
);
}

