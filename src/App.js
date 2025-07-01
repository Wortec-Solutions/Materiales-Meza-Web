// src/App.js
import React, { createContext, useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import SlideSlider from './components/SlideSlider';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Sucursales from './components/Sucursales';
import MarcasTicker from './components/MarcasTicker';



// ——— Contexto del carrito —————————————————
const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart(prev => {
      const found = prev.find(x => x.id === product.id);
      if (found) return prev.map(x =>
        x.id === product.id ? { ...x, qty: x.qty + 1 } : x
      );
      return [...prev, { ...product, qty: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(x => x.id !== id));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
// ——————————————————————————————————————————

function Productos() {
  const { addToCart } = useCart();

  const demoProducts = [
    { id: 1, name: 'Motoguadaña 2.29 Hp B450', category: 'Jardinería', imageUrl: '/images/demo1.jpg' },
    { id: 2, name: 'Motoguadaña 1.1 Hp C230', category: 'Jardinería', imageUrl: '/images/demo2.jpg' },
    { id: 3, name: 'Pileta Plástica Blanca', category: 'Hogar', imageUrl: '/images/demo3.jpg' },
    { id: 4, name: 'Lámina Galvanizada', category: 'Construcción', imageUrl: '/images/demo4.jpg' },
    { id: 5, name: 'Antena TV Multicanal', category: 'Eléctrico', imageUrl: '/images/demo5.jpg' },
    { id: 6, name: 'Aspiradora Stanley', category: 'Herramientas', imageUrl: '/images/demo6.jpg' },
    { id: 7, name: 'Taladro Eléctrico', category: 'Herramientas', imageUrl: '/images/demo7.jpg' },
    { id: 8, name: 'Cemento Gris', category: 'Construcción', imageUrl: '/images/demo8.jpg' },
    { id: 9, name: 'Guantes Industriales', category: 'Seguridad', imageUrl: '/images/demo9.jpg' },
    { id: 10, name: 'Brocha De Pintura', category: 'Pintura', imageUrl: '/images/demo10.jpg' },
  ];

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Nuestros Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {demoProducts.map(p => (
          <div key={p.id} className="border rounded-lg p-4 flex flex-col shadow hover:shadow-lg transition">
            <img src={p.imageUrl} alt={p.name} className="h-48 w-full object-cover mb-4" />
            <h3 className="font-bold text-lg">{p.name}</h3>
            <p className="text-sm text-gray-500">{p.category}</p>
            <button
              onClick={() => addToCart(p)}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            >
              Agregar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Home() {
  const imagesInicio = ['/slide1.png', '/slide2.png', '/slide3.png'];
  return (
    <div>
      <SlideSlider images={imagesInicio} />
      <MarcasTicker />
     <div className="text-center">
  <h2 className="text-3xl font-bold text-blue-800 mb-4">Bienvenido a Materiales Meza</h2>
  <p className="text-gray-700 mb-6">
    En Materiales Meza creemos en el poder de construir juntos. Nuestros valores se centran en la honestidad, el compromiso y la cercanía con nuestros clientes.
    Más que una ferretería, somos parte del crecimiento de Alajuela, aportando a su desarrollo y bienestar desde nuestras sucursales en el corazón de la provincia.
  </p>
  <p className="text-gray-700 mb-6">
    Somos una empresa creada por y para la familia costarricense, con productos confiables y atención personalizada que nos diferencia.
  </p>
  <div className="flex justify-center">
   
      
   
  </div>
</div>

    </div>
  );
}

function Cotizaciones() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Cotizaciones</h2>
      <p>Página de cotizaciones...</p>
    </div>
  );
}

function Trabaja() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Trabaja con Nosotros</h2>
      <p>Información para aplicar a un puesto...</p>
    </div>
  );
}



function Contacto() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>
      <p>Formulario o información de contacto...</p>
    </div>
  );
}

function SearchResults() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Resultados de búsqueda</h2>
      <p>Muestra de resultados según tu consulta...</p>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/cotizaciones" element={<Cotizaciones />} />
            <Route path="/trabaja" element={<Trabaja />} />
            <Route path="/sucursales" element={<Sucursales />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </CartProvider>
  );
}
