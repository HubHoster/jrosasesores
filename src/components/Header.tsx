import React, { useState } from 'react';
import { WHATSAPP_LINK } from '../lib/constants';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white w-full sticky top-0 z-50 shadow transition-shadow duration-300">
      {/* Top contact bar */}
      <div className="bg-[rgba(16,69,71,1)] w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm md:text-[15px] text-white font-normal w-full">
            <div className="hidden sm:flex items-center gap-4"></div>
            {/* Desktop: One-line flex address bar, Mobile: Marquee */}
            <div className="flex-1 w-full">
              <div className="hidden sm:flex flex-row items-center gap-8 whitespace-nowrap justify-end">
                <div className="flex items-center gap-3">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e436033866d69f36463ae9490a683f57a3406b15?placeholderIfAbsent=true"
                    className="w-[25px] h-[25px] object-contain"
                    alt="Email"
                  />
                  <span>info@jrosasesores.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/90534328a852f6796f072d425d5a7f02167b7d6a?placeholderIfAbsent=true"
                    className="w-[18px] h-[18px] object-contain"
                    alt="Location"
                  />
                  <span>C/ José Martí No. 18. Urbanización Máximo Gómez. RD</span>
                </div>
              </div>
              <div className="block sm:hidden w-full h-6 overflow-hidden relative">
                <div className="flex animate-marquee whitespace-nowrap text-xs items-center gap-16" style={{animationDuration: '20s'}}>
                  {/* Marquee content duplicated for seamless loop */}
                  <>
                    <span className="flex items-center gap-4 pr-6">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e436033866d69f36463ae9490a683f57a3406b15?placeholderIfAbsent=true"
                        className="w-[18px] h-[18px] object-contain"
                        alt="Email"
                      />
                      info@jrosasesores.com
                    </span>
                    <span className="flex items-center gap-4 pr-6">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/90534328a852f6796f072d425d5a7f02167b7d6a?placeholderIfAbsent=true"
                        className="w-[18px] h-[18px] object-contain"
                        alt="Location"
                      />
                      C/ José Martí No. 18. Urbanización Máximo Gómez. RD
                    </span>
                  </>
                  <>
                    <span className="flex items-center gap-4 pr-6">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e436033866d69f36463ae9490a683f57a3406b15?placeholderIfAbsent=true"
                        className="w-[18px] h-[18px] object-contain"
                        alt="Email"
                      />
                      info@jrosasesores.com
                    </span>
                    <span className="flex items-center gap-4 pr-6">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/90534328a852f6796f072d425d5a7f02167b7d6a?placeholderIfAbsent=true"
                        className="w-[18px] h-[18px] object-contain"
                        alt="Location"
                      />
                      C/ José Martí No. 18. Urbanización Máximo Gómez. RD
                    </span>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-lg w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-[70px] py-4">
          <div className="flex items-center justify-between w-full">
            <a href="/" className="flex-shrink-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/387cf36dd6fccc4ff1754a051cf05e6725008fee?placeholderIfAbsent=true"
                className="h-12 md:h-20 lg:h-24 w-auto object-contain"
                alt="J. Rosa Asesores Logo"
              />
            </a>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-base text-[rgba(13,87,4,1)] font-bold">
              <a href="/" className="cursor-pointer hover:text-[rgba(225,56,51,1)] transition-colors">
                <span>Portada</span>
              </a>
              <a href="#nosotros" className="flex items-center gap-2 cursor-pointer hover:text-[rgba(225,56,51,1)] transition-colors">
                <span>Nosotros</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/da6d9ea7623fe1da98bba366eed0187e0f56a97e?placeholderIfAbsent=true"
                  className="w-4 h-4 object-contain"
                  alt="Dropdown"
                />
              </a>
              <a href="#servicios" className="flex items-center gap-2 cursor-pointer hover:text-[rgba(225,56,51,1)] transition-colors">
                <span>Servicios</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ff5fdc8cd18860c7ddea6923efc5d77aaf7ef68?placeholderIfAbsent=true"
                  className="w-4 h-4 object-contain"
                  alt="Dropdown"
                />
              </a>
              <a href="#contacto" className="flex items-center gap-2 cursor-pointer hover:text-[rgba(225,56,51,1)] transition-colors">
                <span>Contacto</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/263a38c50726fc6582738e0852b374b994b1161d?placeholderIfAbsent=true"
                  className="w-4 h-4 object-contain"
                  alt="Dropdown"
                />
              </a>
            </div>
            {/* Mobile Hamburger and Contact */}
            <div className="flex items-center gap-3 ml-auto lg:ml-0">
              <button
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md border border-gray-200 hover:bg-gray-100 transition"
                aria-label="Open menu"
                onClick={() => setMobileMenuOpen(true)}
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[rgba(13,87,4,1)]"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              </button>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
                aria-label="Contactar por WhatsApp"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f314b75814740c95f6eb733de14c8aa894d4d39?placeholderIfAbsent=true"
                  className="w-8 h-8 md:w-11 md:h-11 object-contain rounded-full"
                  alt="Contact"
                />
                <span className="hidden sm:block text-[rgba(13,87,4,1)] font-semibold hover:text-[rgba(225,56,51,1)] transition-colors">Contactanos</span>
              </a>
            </div>
          </div>
        </div>
        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex lg:hidden" onClick={() => setMobileMenuOpen(false)}>
            <div
              className="bg-white w-4/5 max-w-xs h-full shadow-lg p-6 flex flex-col gap-6 animate-slide-in-left"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="self-end mb-4 p-2 rounded hover:bg-gray-100"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
              <a href="#nosotros" className="flex items-center gap-2 text-lg font-bold text-[rgba(13,87,4,1)] hover:text-[rgba(225,56,51,1)] transition"><span>Nosotros</span></a>
              <a href="#servicios" className="flex items-center gap-2 text-lg font-bold text-[rgba(13,87,4,1)] hover:text-[rgba(225,56,51,1)] transition"><span>Servicios</span></a>
              <a href="#contacto" className="flex items-center gap-2 text-lg font-bold text-[rgba(13,87,4,1)] hover:text-[rgba(225,56,51,1)] transition"><span>Contacto</span></a>
            </div>
          </div>
        )}
      </nav>
      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all duration-200"
        aria-label="Contactar por WhatsApp"
        style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.15)' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          width="32"
          height="32"
          className="w-8 h-8 md:w-10 md:h-10"
        >
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.65.87 5.1 2.36 7.1L4 29l7.18-2.32C13.1 27.13 14.52 27.5 16 27.5c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.33 0-2.62-.26-3.81-.76l-.27-.11-4.26 1.38 1.4-4.13-.18-.28C6.87 18.13 6 16.62 6 15c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.07-7.75c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 4.93 4.22.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
        </svg>
      </a>
    </header>
  );
};

/* Add this to your global CSS (e.g., index.css):
@keyframes marquee {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}
.animate-marquee {
  animation: marquee linear infinite;
}
*/
