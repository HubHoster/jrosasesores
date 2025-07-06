
import React from 'react';

export const Testimonials = () => {
  return (
    <section className="w-full text-center">
      <div className="text-[rgba(225,56,51,1)] text-sm md:text-[15px] font-bold">
        TESTIMONIOS
      </div>
      <h2 className="text-[rgba(38,46,46,1)] text-2xl md:text-3xl lg:text-[40px] font-bold leading-tight mt-4 px-4">
        Lo que dicen nuestros clientes sobre nosotros
      </h2>
      
      <div className="max-w-7xl mx-auto mt-8 md:mt-12 lg:mt-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <blockquote className="text-left text-[rgba(38,46,46,1)]">
              <p className="text-base md:text-[17px] font-semibold leading-relaxed">
                Gracias a J. Rosa Asesores, optimizamos nuestras finanzas y cumplimos con todas las obligaciones fiscales sin complicaciones. Su equipo es profesional, atento y confiable."
                <br />
                "Thanks to J. Rosa Asesores, we optimized our finances and met all tax obligations without hassle. Their team is professional, attentive, and trustworthy.
              </p>
              <cite className="text-lg font-bold leading-tight mt-6 md:mt-7 not-italic block">
                Juan Pérez
              </cite>
              <div className="text-[rgba(225,56,51,1)] text-sm md:text-[15px] font-normal mt-4 md:mt-[21px]">
                CEO de Innovatec
              </div>
            </blockquote>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e976737a16db09f5d2387106e976fabf8446ed79?placeholderIfAbsent=true"
              className="w-full h-auto object-contain rounded-[5px]"
              alt="Juan Pérez"
            />
          </div>
        </div>
      </div>
      
      <div className="flex justify-center items-center gap-2 mt-6 md:mt-7">
        <div className="bg-[rgba(225,56,51,1)] w-[35px] h-1 rounded-[5px]" />
        <div className="bg-[rgba(225,56,51,1)] w-[35px] h-1 rounded-[5px]" />
        <div className="bg-[rgba(225,56,51,1)] w-[35px] h-1 rounded-[5px]" />
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16 lg:mt-[84px] max-w-7xl mx-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9afbadcbcf9ea0b411a3d68cadd8cacc7cad504?placeholderIfAbsent=true"
          className="w-full h-auto object-contain"
          alt="Partner logo"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/885bd3110c0c5257235d7ec3ca44648cc095bda0?placeholderIfAbsent=true"
          className="w-full h-auto object-contain"
          alt="Partner logo"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/31afa0866ad9c8586ed9d0afa5be3dc7ea442e64?placeholderIfAbsent=true"
          className="w-full h-auto object-contain"
          alt="Partner logo"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/885bd3110c0c5257235d7ec3ca44648cc095bda0?placeholderIfAbsent=true"
          className="w-full h-auto object-contain"
          alt="Partner logo"
        />
      </div>
    </section>
  );
};
