import React from 'react';
import HeroImg from './../assets/hero.png'

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/893c88c39b81faf7a52039f097fecbb11a5b3d55?placeholderIfAbsent=true"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
      />
      <div className="relative bg-white/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center w-full">
              <div className="lg:col-span-3 text-center lg:text-left space-y-6 md:space-y-8">
                <div className="text-[rgba(225,56,51,1)] text-sm md:text-[15px] font-bold">
                  Bienvenidos a J. Rosa Asesores
                </div>
                <h1 className="text-[rgba(38,46,46,1)] text-3xl md:text-4xl lg:text-5xl xl:text-[58px] font-bold leading-tight">
                  Impulsa tu éxito financiero con
                  <br />
                  J. Rosa Asesores
                </h1>
                <p className="text-[rgba(38,46,46,1)] text-base md:text-lg font-normal leading-relaxed max-w-4xl mx-auto lg:mx-0">
                  En J. Rosas Asesores ofrecemos servicios de asesoría fiscal y financiera en Santo Domingo, República Dominicana, diseñados para apoyar a empresas, emprendedores y profesionales en su crecimiento económico y cumplimiento tributario. Nuestro compromiso es brindar soluciones efectivas y personalizadas para que optimices tus recursos y logres tus objetivos financieros.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6 text-base font-semibold">
                  <button className="bg-[rgba(225,56,51,1)] text-white rounded-[5px] hover:bg-[rgba(200,46,41,1)] transition-colors w-full sm:w-auto">
                    <div className="border flex items-center gap-4 md:gap-6 px-4 md:px-[17px] py-3 md:py-[7px] rounded-[5px] border-[rgba(225,56,51,1)] border-solid w-full sm:w-auto justify-center">
                      <span>Contáctanos</span>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/077128d51a9a20806bd9a668367167cada5c862b?placeholderIfAbsent=true"
                        className="w-8 h-8 md:w-[35px] md:h-[35px] object-contain rounded-[5px]"
                        alt="Contact icon"
                      />
                    </div>
                  </button>
                  <button className="border flex items-center gap-4 md:gap-[18px] text-[rgba(38,46,46,1)] px-4 md:px-[22px] py-3 md:py-[7px] rounded-[5px] border-[rgba(225,56,51,1)] border-solid hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center">
                    <span>Nuestros Servicios</span>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c56cd4f1da94069246888367b34c9e2d0196e7e?placeholderIfAbsent=true"
                      className="w-8 h-8 md:w-[35px] md:h-[35px] object-contain rounded-[5px]"
                      alt="Services icon"
                    />
                  </button>
                </div>
              </div>
              <div className="lg:col-span-2 flex justify-center items-center w-full">
                <img
                  src={HeroImg}
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain mx-auto"
                  alt="Professional consultation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
