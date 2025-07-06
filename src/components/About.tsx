import React from 'react';

export const About = () => {
  return (
    <section className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[20px] overflow-hidden shadow-sm">
        <div className="order-2 lg:order-1">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/74f31687861d0e77d0937383fbf06d5ef4d99495?placeholderIfAbsent=true"
            className="w-full h-full object-cover min-h-[400px] lg:min-h-full"
            alt="Office building"
          />
        </div>
        <div className="order-1 lg:order-2 bg-neutral-50 p-6 md:p-8 lg:p-12 xl:px-[55px] xl:py-[103px] flex flex-col justify-center">
          <div className="space-y-6">
            <div className="text-[rgba(225,56,51,1)] text-sm md:text-[15px] font-bold">
              NOSOTROS
            </div>
            <h2 className="text-[rgba(38,46,46,1)] text-2xl md:text-3xl lg:text-[40px] font-bold leading-tight">
              Construyendo confianza financiera desde 1995
            </h2>
            <p className="text-[rgba(102,102,102,1)] text-base font-normal leading-relaxed">
              En J. Rosa Asesores, llevamos más de tres décadas ofreciendo soluciones integrales en asesoría financiera, fiscal, contable, legal y de marketing. Desde nuestra sede en Santo Domingo, acompañamos a empresas, emprendedores y profesionales a tomar decisiones más seguras, estratégicas y rentables.
              <br />
              <br />
              Nuestro enfoque se basa en la confianza, la precisión y el servicio personalizado, valores que nos han permitido establecer relaciones duraderas con nuestros clientes.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-center">
              <div className="flex flex-col items-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd056ca1607d89daf5900fc3a22974d8563d3792?placeholderIfAbsent=true"
                  className="w-16 h-16 md:w-20 md:h-20 object-contain shadow-lg rounded-full mb-4"
                  alt="Consistency"
                />
                <div className="text-[rgba(38,46,46,1)] text-lg md:text-[22px] font-bold">Consistencia</div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/45c3cf5b62a7dff570cbd065aa35f39c66e6c3be?placeholderIfAbsent=true"
                  className="w-16 h-16 md:w-20 md:h-20 object-contain shadow-lg rounded-full mb-4"
                  alt="Precision"
                />
                <div className="text-[rgba(38,46,46,1)] text-lg md:text-[22px] font-bold">Precisión</div>
              </div>
              <div className="flex flex-col items-center col-span-2 lg:col-span-1">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/548415b0da47da0708b515afaf317a0db34860aa?placeholderIfAbsent=true"
                  className="w-16 h-16 md:w-20 md:h-20 object-contain shadow-lg rounded-full mb-4"
                  alt="Trust"
                />
                <div className="text-[rgba(38,46,46,1)] text-lg md:text-[22px] font-bold">Confianza</div>
              </div>
            </div>
            
            <button className="border flex flex-row items-center justify-center gap-2 md:gap-[30px] text-base text-[rgba(38,46,46,1)] font-semibold px-4 md:px-[37px] py-3 md:py-[7px] rounded-[5px] border-[rgba(225,56,51,1)] border-solid hover:bg-gray-50 transition-colors w-full sm:w-fit mx-auto mt-6 whitespace-nowrap">
              <span>Leer más</span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/16a2f12285939026a96cbd02706d4f2b0c13c07a?placeholderIfAbsent=true"
                className="w-8 h-8 md:w-[35px] md:h-[35px] object-contain rounded-[5px]"
                alt="Read more"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
