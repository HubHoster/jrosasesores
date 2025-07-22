import React from 'react';
import WhyUs from './../assets/why_us.png';

export const WhyChooseUs = () => {
  const features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/53bc50d4f6b06d9720be6423ad15c2eb335c99c4?placeholderIfAbsent=true",
      title: "Experiencia comprobada",
      description: "Más de 30 años asesorando a empresas y profesionales con éxito."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2aa19792fc38d2f47163f1fad54af92b23207145?placeholderIfAbsent=true",
      title: "Atención personalizada",
      description: "Soluciones a la medida que responden a las necesidades únicas de cada cliente."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5b33ca4d15027780db872f7a8728afc61ed95e4f?placeholderIfAbsent=true",
      title: "Equipo multidisciplinario",
      description: "Profesionales expertos en finanzas, impuestos, contabilidad, derecho y marketing."
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="order-2 lg:order-1">
          <img
            src={WhyUs}
            className="w-full h-auto object-contain rounded-[90px_20px_90px_20px]"
            alt="Why choose us"
          />
        </div>
        <div className="order-1 lg:order-2 space-y-6">
          <div className="text-[rgba(225,56,51,1)] text-sm md:text-[15px] font-bold">
            ¿Por qué elegirnos?
          </div>
          <h2 className="text-[rgba(38,46,46,1)] text-2xl md:text-3xl lg:text-[40px] font-bold leading-tight">
            Experiencia, compromiso y resultados que marcan la diferencia.
          </h2>
          <p className="text-[rgba(102,102,102,1)] text-base font-normal leading-relaxed">
            En J. Rosa Asesores combinamos más de 30 años de experiencia con un compromiso genuino hacia el éxito de nuestros clientes. Nuestra asesoría personalizada, precisión en cada detalle y ética profesional nos hacen tu mejor aliado para soluciones financieras, fiscales y legales confiables.
          </p>
          
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <img
                  src={feature.icon}
                  className="w-10 h-10 md:w-[45px] md:h-[45px] object-contain flex-shrink-0 mt-1"
                  alt={feature.title}
                />
                <div className="flex-1">
                  <h3 className="text-[rgba(38,46,46,1)] text-lg md:text-xl font-bold leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[rgba(102,102,102,1)] text-base font-normal leading-relaxed mt-2 md:mt-4">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};
