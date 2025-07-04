// src/components/Navbar.jsx
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const items = ['Inicio', 'Productos', 'Cotizaciones', 'Trabaja', 'Sucursales', 'Contacto'];

export default function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="w-full mx-auto px-4 lg:px-8 flex justify-between items-center h-16">
        <Link to="/">
          <img src="/logoMM.jpg" alt="Materiales Meza" className="h-12" />
        </Link>

        <div className="flex-1 mx-4 max-w-xs">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full px-2 py-1 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
          {/* Reducimos los márgenes */}
        </div>

        <div className="space-x-6 flex items-center">
          {items.map(label => {
            const path = label === 'Inicio' ? '/' : `/${label.toLowerCase()}`;
            return (
              <NavLink
                key={label}
                to={path}
                end={path === '/'} 
                className={({ isActive }) =>
                  `text-white hover:text-red-600 transition ${isActive ? 'font-bold underline' : ''} hover:ring-2 hover:ring-blue-500`
                }
              >
                {label}
              </NavLink>
            );
          })}

          {/* Carrito de compras */}
          <Link to="/cart" className="text-white hover:text-red-600 transition ml-6">
            <i className="fas fa-shopping-cart text-2xl"></i>
          </Link>

        </div>
      </div>
    </nav>
  );
}
