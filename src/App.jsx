// src/App.js
import React, { createContext, useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import SlideSlider from './components/SlideSlider';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Sucursales from './components/Sucursales';
import MarcasTicker from './components/MarcasTicker';

// Icons
import '@fortawesome/fontawesome-free/css/all.min.css';

// Context
import { CartProvider } from './context/CartContext'; 

// Animations package
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';



// pages
import Home from './pages/home/home';
import Catalogo from './pages/productos/catalogo';
import Trabaja from './pages/trabaja/trabaja';
import Sucursal from './pages/sucursales/sucursal';
import ContactoSucursal from './pages/contacto/contacto';
// ——————————————————————————————————————————


export default function App() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Productos esta compuesto por el componente catalogo */}
            <Route path="/productos" element={<Catalogo />} />
            <Route path="/trabaja" element={<Trabaja />} />
            <Route path="/sucursales" element={<Sucursal />} />
            <Route path="/contacto" element={<ContactoSucursal />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </CartProvider>
  );
}
