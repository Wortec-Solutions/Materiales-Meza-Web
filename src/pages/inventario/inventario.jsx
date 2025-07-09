import React, { useContext } from 'react';
import Slider from 'react-slick'; // Importamos react-slick para el carrusel
import { CartContext } from '../../context/CartContext'; // ajustá la ruta

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

const sections = [
  { title: 'Ofertas', filter: p => p.id % 2 === 0 },
  { title: 'Nuevos Productos', filter: p => p.id <= 6 },
  { title: 'Destacados', filter: p => p.id > 6 },
];

export default function Inventario() {
  const { addToCart } = useContext(CartContext);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="p-4 max-w-7xl mx-auto space-y-12">
      <h2 className="text-3xl font-bold mb-4 text-center text-blue-800">Inventario</h2>

      {sections.map((section, idx) => (
        <div key={idx}>
          <h3 className="text-2xl font-semibold mb-3 text-gray-800">{section.title}</h3>
          <Slider {...settings}>
            {demoProducts.filter(section.filter).map(product => (
              <div
                key={product.id}
                className="min-w-[220px] flex-shrink-0 border rounded-lg p-4 shadow hover:shadow-lg transition bg-white"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-40 w-full object-cover mb-3 rounded"
                />
                <h4 className="font-bold text-md">{product.name}</h4>
                <p className="text-sm text-gray-500">{product.category}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-3 bg-orange-500 hover:bg-orange-600 text-white text-sm py-1.5 px-3 rounded shadow-md"
                >
                  Agregar
                </button>
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
}