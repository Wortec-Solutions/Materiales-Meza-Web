import React from 'react';
// import { useCart } from '../context/CartContext'; // Ajustá la ruta según tu estructura

export default function Inventario() {
  // const { addToCart } = useCart();

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
      <h2 className="text-3xl font-bold mb-6">Inventario</h2>
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
