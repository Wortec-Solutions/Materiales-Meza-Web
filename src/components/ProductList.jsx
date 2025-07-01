// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';

export default function ProductList({ addToCart }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(r => r.json())
      .then(setProductos)
      .catch(console.error);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {productos.map(p => (
        <div key={p.id} className="border rounded-lg p-4 flex flex-col">
          <img src={p.imageUrl} alt={p.name} className="h-48 w-full object-cover mb-4" />
          <h3 className="font-bold text-lg">{p.name}</h3>
          <p className="text-gray-600">{p.description}</p>
          <p className="mt-auto font-semibold">₡{p.price}</p>
          <button
            onClick={() => addToCart(p)}
            className="mt-4 bg-red-600 text-white py-2 rounded hover:bg-red-700"
          >
            Agregar
          </button>
        </div>
      ))}
    </div>
  );
}
