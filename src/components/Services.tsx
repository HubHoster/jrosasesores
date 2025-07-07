import React from 'react';

export const Services = () => {
  const services = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/16d6c9297b7e90221f6db8ad9f10e31a2b653fa9?placeholderIfAbsent=true",
      title: "Marketing Financiero",
      description: "Impulsa tu presencia en el mercado con estrategias alineadas a tus objetivos financieros.",
      buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4eec168081f9b4cc345aa497355ddb4e36666281?placeholderIfAbsent=true"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/dd79f3c9bde45cd23cb4ba4b1a439031de03ca09?placeholderIfAbsent=true",
      title: "Contabilidad",
      description: "Control total de tus finanzas mediante informes claros, precisos y útiles para la toma de decisiones.",
      buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4eec168081f9b4cc345aa497355ddb4e36666281?placeholderIfAbsent=true"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/47c40ceae01323d3292a05b046c14a7af5f48394?placeholderIfAbsent=true",
      title: "Servicios Legales",
      description: "Asesoría legal empresarial para proteger tu operación y garantizar el cumplimiento normativo.",
      buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/54ccb7d984fa2d64012d136afa0e33a47f7cc4ac?placeholderIfAbsent=true"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9ad8cbfc9d156a2e1e4d59da9ae571104633ed98?placeholderIfAbsent=true",
      title: "Impuestos",
      description: "Garantizamos tu cumplimiento fiscal y te ayudamos a reducir tu carga tributaria legalmente.",
      buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/54ccb7d984fa2d64012d136afa0e33a47f7cc4ac?placeholderIfAbsent=true"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0bf8810472eef234b07e53f93253885b1911692f?placeholderIfAbsent=true",
      title: "Asesoría Financiera",
      description: "Te ayudamos a tomar decisiones financieras inteligentes que impulsen tu rentabilidad y optimicen tus recursos.",
      buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4eec168081f9b4cc345aa497355ddb4e36666281?placeholderIfAbsent=true"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3fef0be3a0aedb4c29a615011dedf72943ab6a2c?placeholderIfAbsent=true",
      title: "Consultoría Estratégica",
      description: "Soluciones inteligentes para tomar decisiones empresariales basadas en datos, experiencia y visión a largo plazo.",
      buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/51f7df64532a229737e32e3ef5864fae327fc381?placeholderIfAbsent=true"
    }
  ];

  return (
    <section className="flex flex-col items-center">
      <div className="text-[rgba(225,56,51,1)] text-[15px] font-bold text-center mt-[105px] max-md:mt-10">
        SERVICIOS
      </div>
      <h2 className="text-[rgba(38,46,46,1)] text-[40px] font-bold leading-[1.2] text-center mt-[49px] max-md:max-w-full max-md:mt-10">
        Nuestros Servicios Especializados
      </h2>
      <p className="text-[rgba(102,102,102,1)] text-base font-normal leading-6 text-center mt-[35px] max-md:max-w-full">
        En J. Rosa Asesores ofrecemos soluciones integrales y personalizadas para apoyar el crecimiento, la estabilidad y el cumplimiento legal de tu negocio.
      </p>
      <div className="bg-[rgba(225,56,51,1)] flex w-[60px] shrink-0 h-[3px] mt-4" />
      
      <div className="w-[1296px] max-w-full mt-[60px] max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[67%] max-md:w-full max-md:ml-0">
            <div className="w-full max-md:max-w-full max-md:mt-6">
              <div className="max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  {services.slice(0, 2).map((service, index) => (
                    <div key={index} className="w-6/12 max-md:w-full max-md:ml-0">
                      <article className="bg-neutral-50 flex w-full flex-col text-base text-[rgba(38,46,46,1)] mx-auto pl-[30px] pr-[67px] py-[30px] rounded-[10px] max-md:mt-6 max-md:px-5">
                        <div className="flex items-stretch gap-[15px] text-[22px] font-bold leading-[1.2]">
                          <img
                            src={service.icon}
                            className="aspect-[0.98] object-contain w-[50px] shrink-0"
                            alt={service.title}
                          />
                          <h3 className="basis-auto my-auto">{service.title}</h3>
                        </div>
                        <p className="text-[rgba(102,102,102,1)] font-normal leading-[27px] mt-[37px]">
                          {service.description}
                        </p>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-[30px] max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  {services.slice(2, 4).map((service, index) => (
                    <div key={index + 2} className="w-6/12 max-md:w-full max-md:ml-0">
                      <article className="bg-neutral-50 flex w-full flex-col text-base text-[rgba(38,46,46,1)] mx-auto pl-[30px] pr-16 py-[30px] rounded-[10px] max-md:mt-6 max-md:px-5">
                        <div className="flex items-stretch gap-[15px] text-[22px] font-bold leading-[1.2]">
                          <img
                            src={service.icon}
                            className="aspect-[0.98] object-contain w-[50px] shrink-0"
                            alt={service.title}
                          />
                          <h3 className="basis-auto my-auto">{service.title}</h3>
                        </div>
                        <p className="text-[rgba(102,102,102,1)] font-normal leading-[27px] mt-9">
                          {service.description}
                        </p>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-neutral-50 grow text-base text-[rgba(38,46,46,1)] w-full pt-[29px] rounded-[10px] max-md:mt-6">
              {services.slice(4).map((service, index) => (
                <article key={index + 4} className={`${index === 0 ? 'flex w-full flex-col pl-[30px] pr-[66px] max-md:px-5' : 'bg-neutral-50 flex w-full flex-col mt-[62px] p-[30px] rounded-[10px] max-md:mt-10 max-md:px-5'}`}>
                  <div className="flex items-stretch gap-[15px] text-[22px] font-bold leading-[1.2]">
                    <img
                      src={service.icon}
                      className="aspect-[0.98] object-contain w-[50px] shrink-0"
                      alt={service.title}
                    />
                    <h3 className="basis-auto my-auto">{service.title}</h3>
                  </div>
                  <p className="text-[rgba(102,102,102,1)] font-normal leading-[27px] mt-[50px] max-md:mt-10">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
