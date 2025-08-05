import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[rgba(16,69,71,1)] w-full flex flex-col items-center pt-8 pb-4 mt-16">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/32491a42567b41839a4b0439d2cad34b35755471?placeholderIfAbsent=true"
        className="w-full max-w-4xl object-contain mb-4"
        alt="Footer decoration"
      />
      <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center gap-8 px-4">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5ed90ae23d03a247234b304c6bcb24b697b9eb13?placeholderIfAbsent=true"
            className="w-32 mb-4"
            alt="J. Rosa Asesores Logo"
          />
          <div className="text-[rgba(212,209,209,1)] text-sm mb-2">C/ José Martí No. 18, Urbanización Máximo Gómez, RD</div>
          <div className="text-[rgba(212,209,209,1)] text-sm mb-2">info@jrosasesores.com</div>
          <div className="text-[rgba(212,209,209,1)] text-sm mb-2">+1 (849) 885-2282</div>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <a href="#nosotros" className="text-white text-sm hover:underline">Nosotros</a>
          <a href="#servicios" className="text-white text-sm hover:underline">Servicios</a>
          <a href="#contacto" className="text-white text-sm hover:underline">Contacto</a>
        </div>
      </div>
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between border-t border-[rgba(53,82,83,1)] mt-8 pt-4 px-4 gap-4">
        <div className="text-white text-xs">© 2025 J Rosa Asesores</div>
        <div className="flex gap-3"></div>
      </div>
    </footer>
  );
};
