import React from 'react';
import SlideSlider from '../../components/SlideSlider';
import MarcasTicker from '../../components/MarcasTicker';
import Inventario from '../inventario/inventario';

export default function Home() {
  const imagesInicio = ['/slide1.png', '/slide2.png', '/slide3.png'];

  return (
    <div>
      {/* Slider de imágenes */}
      <SlideSlider images={imagesInicio} />

      {/* Ticker de marcas */}
      <MarcasTicker />

      {/* Mensaje de bienvenida */}
      <div className="text-center px-4 py-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Bienvenido a Materiales Meza</h2>
        <p className="text-gray-700 mb-6">
          En Materiales Meza creemos en el poder de construir juntos. Nuestros valores se centran en la honestidad, el compromiso y la cercanía con nuestros clientes.
          Más que una ferretería, somos parte del crecimiento de Alajuela, aportando a su desarrollo y bienestar desde nuestras sucursales en el corazón de la provincia.
        </p>
        <p className="text-gray-700 mb-6">
          Somos una empresa creada por y para la familia costarricense, con productos confiables y atención personalizada que nos diferencia.
        </p>
      </div>

      {/* Productos destacados o catálogo completo */}
      <Inventario />
    </div>
  );
}
