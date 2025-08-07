import React, { useState } from 'react';
import { WHATSAPP_LINK } from '../lib/constants';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Asesoría Financiera'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section className="w-[1296px] max-w-full mt-[100px] max-md:mt-10 px-4">
      <div className="flex justify-center">
        <div className="w-full max-w-[640px]">
          <div className="flex w-full flex-col items-stretch my-auto max-md:max-w-full max-md:mt-10">
            <div className="text-[rgba(225,56,51,1)] text-[15px] font-bold">
              COTIZACIÓN GRATUITA
            </div>
            <h2 className="text-[rgba(38,46,46,1)] text-[40px] font-bold leading-[48px] mt-3.5">
              Consulta con un experto en cualquier momento
            </h2>
            <p className="text-[rgba(102,102,102,1)] text-base font-normal leading-[27px] mt-12 max-md:mt-10">
              Estamos listos para ayudarte con soluciones financieras adaptadas a tus necesidades, para que tomes decisiones seguras y efectivas.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-[66px] max-md:mt-10">
              <div className="flex flex-col md:flex-row items-stretch gap-6 text-[15px] text-[rgba(38,46,46,1)] font-bold leading-none flex-wrap w-full">
                <div className="border flex flex-col overflow-hidden flex-1 min-w-0 pb-[24px] px-[13px] rounded-[5px] border-[rgba(238,238,238,1)] border-solid mb-4 md:mb-0">
                  <label className="mb-1 px-1.5 py-0.5" htmlFor="contact-name">
                    Tu Nombre
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-1 p-2 border border-gray-300 outline-none bg-white rounded"
                    required
                  />
                </div>
                <div className="border flex flex-col overflow-hidden flex-1 min-w-0 pb-[24px] px-[13px] rounded-[5px] border-[rgba(238,238,238,1)] border-solid">
                  <label className="mb-1 px-1.5 py-0.5" htmlFor="contact-email">
                    Tu Correo Electrónico
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 p-2 border border-gray-300 outline-none bg-white rounded"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row w-full items-stretch gap-6 flex-wrap">
                <div className="border flex items-start gap-4 flex-1 min-w-0 pb-5 px-[13px] rounded-[5px] border-[rgba(238,238,238,1)] border-solid mb-4 md:mb-0">
                  <div className="flex flex-col items-stretch w-full">
                    <label className="mb-1 px-1.5 py-0.5" htmlFor="contact-service">
                      Servicios
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="text-[rgba(33,37,41,1)] text-base font-medium mt-1 bg-white border border-gray-300 outline-none rounded"
                    >
                      <option value="Asesoría Financiera">Asesoría Financiera</option>
                      <option value="Contabilidad">Contabilidad</option>
                      <option value="Servicios Legales">Servicios Legales</option>
                      <option value="Impuestos">Impuestos</option>
                      <option value="Marketing Financiero">Marketing Financiero</option>
                      <option value="Consultoría Estratégica">Consultoría Estratégica</option>
                    </select>
                  </div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2a377adf84d475803bfc26bf8ec10242b37af09?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-3 shrink-0 my-auto"
                    alt="Dropdown"
                  />
                </div>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[rgba(225,56,51,1)] text-base text-white font-semibold text-center flex-1 min-w-0 rounded-[5px] hover:bg-[rgba(200,46,41,1)] transition-colors flex items-center justify-center"
                >
                  <div className="border flex items-stretch gap-5 justify-between pl-[24px] pr-[7px] py-2.5 rounded-[5px] border-[rgba(225,56,51,1)] border-solid w-full">
                    <div className="my-auto">Solicitar Cotización</div>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce3b3368f249979c8ae40eed69aa493912a524c5?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-[35px] shrink-0 rounded-[5px]"
                      alt="Submit"
                    />
                  </div>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
