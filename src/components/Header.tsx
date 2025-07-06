import React, { useState } from 'react';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white w-full sticky top-0 z-50 shadow transition-shadow duration-300">
      {/* Top contact bar */}
      <div className="bg-[rgba(16,69,71,1)] w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm md:text-[15px] text-white font-normal w-full">
            {/* Socials - hidden on mobile, visible on sm+ */}
            <div className="hidden sm:flex items-center gap-4">
              <span className="hidden sm:inline">Follow us:</span>
              <div className="flex items-center gap-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/237040cdf08d7dd0b61df2638488c908d11357b2?placeholderIfAbsent=true"
                  className="w-[18px] h-[18px] object-contain"
                  alt="Social media"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/711c88c2460936bb1a3dc34e0abd7076e0f83483?placeholderIfAbsent=true"
                  className="w-[18px] h-[18px] object-contain"
                  alt="Social media"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/277c115ec0762c21f6e232396f8372def89020ef?placeholderIfAbsent=true"
                  className="w-[18px] h-[18px] object-contain"
                  alt="Social media"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d95b7b4978e156503cc5a4c807a5edc8319a838?placeholderIfAbsent=true"
                  className="w-[18px] h-[18px] object-contain"
                  alt="Social media"
                />
              </div>
            </div>
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
                <div className="flex animate-marquee whitespace-nowrap text-xs items-center gap-16 pl-2 pr-4" style={{animationDuration: '18s'}}>
                  {/* Social icons in marquee for mobile */}
                  <span className="flex items-center gap-4 pr-6">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/237040cdf08d7dd0b61df2638488c908d11357b2?placeholderIfAbsent=true"
                      className="w-[18px] h-[18px] object-contain"
                      alt="Social media"
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/711c88c2460936bb1a3dc34e0abd7076e0f83483?placeholderIfAbsent=true"
                      className="w-[18px] h-[18px] object-contain"
                      alt="Social media"
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/277c115ec0762c21f6e232396f8372def89020ef?placeholderIfAbsent=true"
                      className="w-[18px] h-[18px] object-contain"
                      alt="Social media"
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d95b7b4978e156503cc5a4c807a5edc8319a838?placeholderIfAbsent=true"
                      className="w-[18px] h-[18px] object-contain"
                      alt="Social media"
                    />
                  </span>
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
                  <span className="flex items-center gap-4 pr-6">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/237040cdf08d7dd0b61df2638488c908d11357b2?placeholderIfAbsent=true"
                      className="w-[18px] h-[18px] object-contain"
                      alt="Social media"
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/711c88c2460936bb1a3dc34e0abd7076e0f83483?placeholderIfAbsent=true"
                      className="w-[18px] h-[18px] object-contain"
                      alt="Social media"
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/277c115ec0762c21f6e232396f8372def89020ef?placeholderIfAbsent=true"
                      className="w-[18px] h-[18px] object-contain"
                      alt="Social media"
                    />
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d95b7b4978e156503cc5a4c807a5edc8319a838?placeholderIfAbsent=true"
                      className="w-[18px] h-[18px] object-contain"
                      alt="Social media"
                    />
                  </span>
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
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/387cf36dd6fccc4ff1754a051cf05e6725008fee?placeholderIfAbsent=true"
              className="h-12 md:h-16 w-auto object-contain"
              alt="J. Rosa Asesores Logo"
            />
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-base text-[rgba(13,87,4,1)] font-bold">
              <a href="#nosotros" className="flex items-center gap-2 cursor-pointer hover:text-[rgba(225,56,51,1)] transition-colors">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b932b1ad33cd8235b996c1a48cc89de8f447b9aa?placeholderIfAbsent=true"
                  className="w-8 h-8 object-contain"
                  alt="About"
                />
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
              <a href="#blog" className="flex items-center gap-2 cursor-pointer hover:text-[rgba(225,56,51,1)] transition-colors">
                <span>Blog</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e1e58999d3c0ba9dc2f20c32eeeaba8a550818e?placeholderIfAbsent=true"
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
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f314b75814740c95f6eb733de14c8aa894d4d39?placeholderIfAbsent=true"
                className="w-8 h-8 md:w-11 md:h-11 object-contain rounded-full"
                alt="Contact"
              />
              <span className="hidden sm:block">Contactanos</span>
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
              <a href="#blog" className="flex items-center gap-2 text-lg font-bold text-[rgba(13,87,4,1)] hover:text-[rgba(225,56,51,1)] transition"><span>Blog</span></a>
              <a href="#contacto" className="flex items-center gap-2 text-lg font-bold text-[rgba(13,87,4,1)] hover:text-[rgba(225,56,51,1)] transition"><span>Contacto</span></a>
            </div>
          </div>
        )}
      </nav>
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
