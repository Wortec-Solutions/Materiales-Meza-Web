import React, { useEffect } from 'react';
import AOS from 'aos'; // Necesitarás instalar AOS para las animaciones
import 'aos/dist/aos.css'; // Importa el archivo CSS de AOS

export default function WelcomeMessage() {
  useEffect(() => {
    AOS.init(); // Inicializa AOS
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-12 md:px-16 md:py-20 text-center rounded-xl shadow-lg">
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        className="text-4xl font-extrabold mb-6 tracking-wide"
      >
        ¡Bienvenido a Materiales Meza!
      </h2>
      <p
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1200"
        className="text-lg font-medium mb-6 max-w-4xl mx-auto leading-relaxed"
      >
        En Materiales Meza, nos enorgullece ser más que una simple ferretería. Somos tu socio confiable en la construcción y el desarrollo de proyectos en Alajuela y más allá.
      </p>
      <p
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-duration="1200"
        className="text-lg font-medium mb-6 max-w-4xl mx-auto leading-relaxed"
      >
        Desde nuestras raíces en Alajuela, nos dedicamos a ofrecer productos de calidad con un servicio excepcional. Nos comprometemos a ayudarte a hacer realidad tus proyectos con la mejor atención personalizada y soluciones a medida.
      </p>
      <div
        data-aos="fade-up"
        data-aos-delay="900"
        data-aos-duration="1200"
        className="flex justify-center gap-4 mt-8"
      >
        <a
          href="#shop"
          className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md text-lg font-semibold shadow-lg transform transition-transform duration-200 hover:scale-105"
        >
          Explorar Productos
        </a>
        <a
          href="#contact"
          className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md text-lg font-semibold shadow-lg transform transition-transform duration-200 hover:scale-105"
        >
          Contáctanos
        </a>
      </div>
    </div>
  );
}
