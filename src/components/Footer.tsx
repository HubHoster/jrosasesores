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
          <div className="text-[rgba(212,209,209,1)] text-sm mb-2">+1 234 456 789</div>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <a href="#about" className="text-white text-sm hover:underline">Nosotros</a>
          <a href="#services" className="text-white text-sm hover:underline">Servicios</a>
          <a href="#contact" className="text-white text-sm hover:underline">Contacto</a>
          <a href="#blog" className="text-white text-sm hover:underline">Blog</a>
        </div>
      </div>
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between border-t border-[rgba(53,82,83,1)] mt-8 pt-4 px-4 gap-4">
        <div className="text-white text-xs">© 2025 J Rosa Asesores</div>
        <div className="flex gap-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a820e7a0e509ad99595fb1109c95678e1d66d6a3?placeholderIfAbsent=true"
            className="w-5 h-5 object-contain cursor-pointer hover:opacity-80 transition-opacity"
            alt="Social media"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/78966aee5717f6bf963b19f6ca109d2997aa8fad?placeholderIfAbsent=true"
            className="w-5 h-5 object-contain cursor-pointer hover:opacity-80 transition-opacity"
            alt="Social media"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bda10420a07cec4b263133c6376fe812381f44f2?placeholderIfAbsent=true"
            className="w-5 h-5 object-contain cursor-pointer hover:opacity-80 transition-opacity"
            alt="Social media"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eeac3497e55b22b56f311cde7e797296eea1bee7?placeholderIfAbsent=true"
            className="w-5 h-5 object-contain cursor-pointer hover:opacity-80 transition-opacity"
            alt="Social media"
          />
        </div>
      </div>
    </footer>
  );
};
