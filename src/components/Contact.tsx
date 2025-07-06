import React, { useState } from 'react';

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
    <section className="w-[1296px] max-w-full mt-[100px] max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fde97b7466754372b53924ad15c4bf849bc6cc73?placeholderIfAbsent=true"
            className="aspect-[1.06] object-contain w-full grow rounded-[20px] max-md:max-w-full max-md:mt-10"
            alt="Consultation"
          />
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col self-stretch items-stretch my-auto max-md:max-w-full max-md:mt-10">
            <div className="text-[rgba(225,56,51,1)] text-[15px] font-bold">
              COTIZACIÓN GRATUITA
            </div>
            <h2 className="text-[rgba(38,46,46,1)] text-[40px] font-bold leading-[48px] mr-[46px] mt-3.5 max-md:max-w-full max-md:mr-2.5">
              Consulta con un experto en cualquier momento
            </h2>
            <p className="text-[rgba(102,102,102,1)] text-base font-normal leading-[27px] mr-[49px] mt-12 max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
              Estamos listos para ayudarte con soluciones financieras adaptadas a tus necesidades, para que tomes decisiones seguras y efectivas.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-[66px] max-md:mt-10">
              <div className="flex items-stretch gap-6 text-[15px] text-[rgba(38,46,46,1)] font-bold leading-none flex-wrap max-md:max-w-full">
                <div className="border flex flex-col overflow-hidden flex-1 grow shrink-0 basis-0 w-fit pb-[47px] px-[13px] rounded-[5px] border-[rgba(238,238,238,1)] border-solid max-md:pr-5">
                  <label className="bg-white z-10 flex mt-[-7px] flex-col items-stretch justify-center px-1.5 py-0.5">
                    <div>Tu Nombre</div>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2 p-2 border-none outline-none bg-transparent"
                    required
                  />
                </div>
                <div className="border flex flex-col overflow-hidden flex-1 grow shrink-0 basis-0 w-fit pb-[47px] px-[13px] rounded-[5px] border-[rgba(238,238,238,1)] border-solid max-md:pr-5">
                  <label className="bg-white z-10 flex mt-[-7px] flex-col items-stretch justify-center px-1.5 py-0.5">
                    <div>Tu Correo Electrónico</div>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2 p-2 border-none outline-none bg-transparent"
                    required
                  />
                </div>
              </div>
              
              <div className="flex w-full items-stretch gap-6 flex-wrap max-md:max-w-full">
                <div className="border flex items-start gap-[40px_100px] flex-1 grow shrink basis-auto pb-5 px-[13px] rounded-[5px] border-[rgba(238,238,238,1)] border-solid">
                  <div className="flex mt-[-7px] flex-col items-stretch">
                    <label className="bg-white flex flex-col items-stretch text-[15px] text-[rgba(38,46,46,1)] font-bold whitespace-nowrap leading-none justify-center px-1.5 py-0.5">
                      <div>Servicios</div>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="text-[rgba(33,37,41,1)] text-base font-medium mt-[15px] bg-transparent border-none outline-none"
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
                
                <button
                  type="submit"
                  className="bg-[rgba(225,56,51,1)] text-base text-white font-semibold text-center flex-1 grow shrink-0 basis-0 w-fit rounded-[5px] hover:bg-[rgba(200,46,41,1)] transition-colors"
                >
                  <div className="border flex items-stretch gap-5 justify-between pl-[57px] pr-[7px] py-2.5 rounded-[5px] border-[rgba(225,56,51,1)] border-solid max-md:pl-5">
                    <div className="my-auto">Solicitar Cotización</div>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce3b3368f249979c8ae40eed69aa493912a524c5?placeholderIfAbsent=true"
                      className="aspect-[1] object-contain w-[35px] shrink-0 rounded-[5px]"
                      alt="Submit"
                    />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
