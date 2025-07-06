
import React from 'react';

export const Statistics = () => {
  const stats = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3ee07d5c9f952744b0b3b3b2102a51e1d5496e8?placeholderIfAbsent=true",
      number: "30",
      suffix: "+",
      label: "Años"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f63576568f2c66857e2410c351e30ccf2bf049ad?placeholderIfAbsent=true",
      number: "1, 200",
      suffix: "",
      label: "proyectos"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/99b68c1e1f7a71f59e791faf077e25b4bbac1ef7?placeholderIfAbsent=true",
      number: "500",
      suffix: "",
      label: "clientes"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/06b2e823ce87d86c29b42f194cbf98aac47f1c05?placeholderIfAbsent=true",
      number: "50",
      suffix: "",
      label: "profesionales expertos"
    }
  ];

  return (
    <section className="w-full text-center">
      <div className="text-[rgba(225,56,51,1)] text-sm md:text-[15px] font-bold">
        Datos Clave
      </div>
      <h2 className="text-[rgba(38,46,46,1)] text-2xl md:text-3xl lg:text-[40px] font-bold leading-tight mt-4 md:mt-6 lg:mt-12 px-4">
        Nuestra Trayectoria en Números
      </h2>
      <div className="bg-[rgba(225,56,51,1)] w-[60px] h-[3px] mx-auto mt-4 md:mt-6 lg:mt-12" />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 md:mt-12 lg:mt-[60px] max-w-7xl mx-auto">
        {stats.map((stat, index) => (
          <article key={index} className="bg-[rgba(247,247,247,1)] flex flex-col items-center text-center p-6 md:p-8 lg:px-[61px] lg:py-[29px]">
            <img
              src={stat.icon}
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
              alt={stat.label}
            />
            <div className="flex items-center justify-center gap-2 md:gap-[13px] text-3xl md:text-4xl lg:text-6xl text-[rgba(38,46,46,1)] font-bold leading-tight mt-4 md:mt-6">
              <div>{stat.number}</div>
              {stat.suffix && (
                <div className="mt-1 md:mt-2 lg:mt-[11px]">{stat.suffix}</div>
              )}
            </div>
            <div className="text-[rgba(102,102,102,1)] text-base md:text-lg font-medium mt-4 md:mt-6 lg:mt-[27px] px-2">
              {stat.label}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
