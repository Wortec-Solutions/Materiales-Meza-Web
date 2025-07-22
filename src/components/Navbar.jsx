import React, { useState, useEffect, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ModalCart from '../components/modalCart'; // Ajusta el path si está en otro directorio

// Lista de items para el menú
const items = ['Inicio', 'Productos', 'Trabaja', 'Sucursales', 'Contacto'];

// Componente NavbarMobile

export function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const { cart } = useContext(CartContext);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-blue-700 shadow-lg z-50 md:hidden">
        <div className="w-full flex justify-between items-center h-16 px-4">
          {/* Logo a la izquierda */}
          <Link to="/" className="flex-shrink-0">
            <div
              className="h-12 w-32 rounded-full overflow-hidden border-4 border-white shadow-[0_10px_25px_rgba(0,0,0,0.4)] bg-white transform transition-transform duration-300 hover:scale-110 hover:rotate-x-6 hover:rotate-y-3 hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
              style={{ perspective: '1000px' }}
            >
              <img
                src="/logoMM.jpg"
                alt="Materiales Meza"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          {/* Iconos a la derecha */}
          <div className="flex items-center gap-4">
            {/* Botón de hamburguesa */}
            <button
              className="text-white text-3xl focus:outline-none"
              onClick={toggleMenu}
            >
              <i className="fas fa-bars"></i>
            </button>

            {/* Icono del carrito */}
            <div className="relative">
              <button
                onClick={() => setShowCartModal(true)}
                className="text-white hover:text-orange-400 transition-transform duration-300 hover:scale-110"
              >
                <i className="fas fa-shopping-cart text-2xl"></i>
              </button>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                  {cart.reduce((acc, item) => acc + item.qty, 0)}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Menú desplegable */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-blue-800 shadow-md z-40 overflow-hidden transition-all duration-800 ease-in-out">
            <div className="flex flex-col px-4 py-4 space-y-3">
              {items.map(label => {
                const path = label === 'Inicio' ? '/' : `/${label.toLowerCase()}`;
                return (
                  <NavLink
                    key={label}
                    to={path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `block text-white py-2 px-2 rounded hover:bg-blue-900 transition ${isActive ? 'font-bold underline underline-offset-4' : ''}`
                    }
                  >
                    {label}
                  </NavLink>
                );
              })}

              {/* Botón Iniciar sesión */}
              <Link
                to="/login"
                className="text-xs px-2 py-1 rounded-md font-semibold text-white bg-gradient-to-b from-orange-400 to-orange-600 hover:brightness-110 transition-all duration-150"
              >
                Iniciar sesión
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Modal del carrito */}
      <ModalCart isOpen={showCartModal} onClose={() => setShowCartModal(false)} />


      {/* Espaciador para el navbar fijo */}
      <div className="h-16" />
    </>
  );
}


// Navbar desktop
export function NavbarDesktop() {
  const [showCartModal, setShowCartModal] = useState(false);
  const { cart } = useContext(CartContext);

  const items = ['Inicio', 'Productos', 'Trabaja', 'Sucursales', 'Contacto'];

  return (
    <>
      <nav className="fixed top-0 w-full bg-blue-700 shadow-lg z-50">
        <div className="w-full flex justify-between items-center h-16 px-2">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <div
              className="h-16 w-32 rounded-full overflow-hidden border-4 border-white shadow-[0_10px_25px_rgba(0,0,0,0.4)] bg-white transform transition-transform duration-300 hover:scale-110 hover:rotate-x-6 hover:rotate-y-3 hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
              style={{ perspective: '1000px' }}
            >
              <img
                src="/logoMM.jpg"
                alt="Materiales Meza"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center flex-1 justify-between px-4">
            {/* Barra de búsqueda */}
            <div className="max-w-md w-full mx-4">
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full px-3 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Menú de navegación y acciones */}
            <div className="flex items-center space-x-6">
              {items.map(label => {
                const path = label === 'Inicio' ? '/' : `/${label.toLowerCase()}`;
                return (
                  <NavLink
                    key={label}
                    to={path}
                    end={path === '/'}
                    className={({ isActive }) =>
                      `text-white transition-transform duration-300 hover:text-orange-400 hover:scale-110 ${
                        isActive ? 'font-bold underline underline-offset-4' : ''
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                );
              })}

              {/* Icono del carrito */}
                <div className="relative">
                  <button
                    onClick={() => setShowCartModal(true)}
                    className="text-white hover:text-orange-400 transition-transform duration-300 hover:scale-110"
                  >
                    <i className="fas fa-shopping-cart text-2xl"></i>
                  </button>
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                      {cart.reduce((acc, item) => acc + item.qty, 0)}
                    </span>
                  )}
                </div>


              {/* Botón de iniciar sesión con efecto 3D */}
              <Link
                to="/login"
                className="text-sm px-2 py-2 rounded-md font-semibold text-white bg-gradient-to-b from-orange-400 to-orange-600 shadow-[inset_0_1px_0_#fff,0_3px_0_#c2410c,0_4px_6px_rgba(0,0,0,0.2)] hover:brightness-110 active:translate-y-[1px] active:shadow-[inset_0_1px_0_#fff,0_1px_0_#c2410c,0_2px_4px_rgba(0,0,0,0.2)] transition-all duration-150 overflow-hidden border-4 border-orange-500 shadow-[0_10px_25px_rgba(0,0,0,0.4)] bg-white transform transition-transform duration-300 hover:scale-110 hover:rotate-x-6 hover:rotate-y-3 hover:shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
              >
                Iniciar sesión
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal del carrito */}
      <ModalCart isOpen={showCartModal} onClose={() => setShowCartModal(false)} />

      {/* Espaciador para evitar que el navbar tape el contenido */}
      <div className="h-16" />
    </>
  );
}

// Componente principal Navbar
export default function Navbar() {
  const windowWidth = window.innerWidth; // Obtener el tamaño de la ventana

  const isMobile = windowWidth <= 768; // Considerar móvil si el ancho es menor a 768px

  return (
    <>
      {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
    </>
  );
}
