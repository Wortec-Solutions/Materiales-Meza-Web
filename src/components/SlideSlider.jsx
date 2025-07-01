// src/components/SlideSlider.jsx
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function SlideSlider({ images }) {
  const props = {
    duration: 4000,
    transitionDuration: 1000,
    infinite: true,
    indicators: true,
    arrows: false,
    pauseOnHover: true,
  };

  const slideStyle = {
    width: '100%',
    height: '500px',               // Ajusta según tu diseño
    backgroundPosition: 'center',
    backgroundSize: 'cover',       // Cubre todo el contenedor
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="w-full overflow-hidden">
      <Fade {...props}>
        {images.map((url, idx) => (
          <div key={idx} style={{ ...slideStyle, backgroundImage: `url(${url})` }} />
        ))}
      </Fade>
    </div>
  );
}
