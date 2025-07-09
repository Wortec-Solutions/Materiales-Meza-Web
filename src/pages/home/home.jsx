import React from 'react';
import SlideSlider from '../../components/SlideSlider';
import MarcasTicker from '../../components/MarcasTicker';
import Inventario from '../inventario/inventario';
import WelcomeMessage from '../home/components/welcome';

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
       <WelcomeMessage />
      </div>

      {/* Productos destacados o catálogo completo */}
      <Inventario />
    </div>
  );
}
