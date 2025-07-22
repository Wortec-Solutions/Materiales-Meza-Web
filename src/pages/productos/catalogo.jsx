// src/components/Catalogo.jsx
import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import FiltroProductos from './components/filtroProducto';

const demoProducts = [
  {
    id: 1,
    name: 'Motoguadaña 2.29 Hp B450',
    category: 'Jardinería',
    brand: 'STIHL',
    imageUrl: '/images/demo1.jpg',
  },
  {
    id: 2,
    name: 'Motoguadaña 1.1 Hp C230',
    category: 'Jardinería',
    brand: 'Husqvarna',
    imageUrl: '/images/demo2.jpg',
  },
  {
    id: 3,
    name: 'Pileta Plástica Blanca',
    category: 'Hogar',
    brand: 'Tramontina',
    imageUrl: '/images/demo3.jpg',
  },
  {
    id: 4,
    name: 'Lámina Galvanizada',
    category: 'Construcción',
    brand: 'Ternium',
    imageUrl: '/images/demo4.jpg',
  },
  {
    id: 5,
    name: 'Antena TV Multicanal',
    category: 'Eléctrico',
    brand: 'Philips',
    imageUrl: '/images/demo5.jpg',
  },
  {
    id: 6,
    name: 'Aspiradora Stanley',
    category: 'Herramientas',
    brand: 'Stanley',
    imageUrl: '/images/demo6.jpg',
  },
  {
    id: 7,
    name: 'Taladro Eléctrico',
    category: 'Herramientas',
    brand: 'DeWalt',
    imageUrl: '/images/demo7.jpg',
  },
  {
    id: 8,
    name: 'Cemento Gris',
    category: 'Construcción',
    brand: 'Cemex',
    imageUrl: '/images/demo8.jpg',
  },
  {
    id: 9,
    name: 'Guantes Industriales',
    category: 'Seguridad',
    brand: '3M',
    imageUrl: '/images/demo9.jpg',
  },
  {
    id: 10,
    name: 'Brocha De Pintura',
    category: 'Pintura',
    brand: 'Pintuco',
    imageUrl: '/images/demo10.jpg',
  },
];

export default function Catalogo() {
  const { addToCart } = useContext(CartContext);

  const [filtroNombre, setFiltroNombre] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');
  const [marcaSeleccionada, setMarcaSeleccionada] = useState('Todas');

  const categorias = [...new Set(demoProducts.map(p => p.category))];
  const marcas = [...new Set(demoProducts.map(p => p.brand))];

  const productosFiltrados = demoProducts.filter(product => {
    const palabrasClave = filtroNombre.toLowerCase().split(' ').filter(Boolean);

    const coincideBusqueda = palabrasClave.every(
      palabra =>
        product.name.toLowerCase().includes(palabra) ||
        product.category.toLowerCase().includes(palabra) ||
        product.brand.toLowerCase().includes(palabra)
    );

    const coincideCategoria =
      categoriaSeleccionada === 'Todas' || product.category === categoriaSeleccionada;

    const coincideMarca = marcaSeleccionada === 'Todas' || product.brand === marcaSeleccionada;

    return coincideBusqueda && coincideCategoria && coincideMarca;
  });

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Catálogo de Productos</h2>

      <FiltroProductos
        categorias={categorias}
        marcas={marcas}
        filtroNombre={filtroNombre}
        setFiltroNombre={setFiltroNombre}
        categoriaSeleccionada={categoriaSeleccionada}
        setCategoriaSeleccionada={setCategoriaSeleccionada}
        marcaSeleccionada={marcaSeleccionada}
        setMarcaSeleccionada={setMarcaSeleccionada}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {productosFiltrados.map(product => (
          <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg bg-white">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-40 w-full object-cover mb-3 rounded"
            />
            <h4 className="font-bold text-md">{product.name}</h4>
            <p className="text-sm text-gray-500">
              {product.category} • {product.brand}
            </p>
            <button
              onClick={() => addToCart(product)}
              className="mt-3 bg-orange-500 hover:bg-orange-600 text-white text-sm py-1.5 px-3 rounded shadow-md"
            >
              Agregar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
