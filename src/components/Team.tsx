
import React from 'react';

export const Team = () => {
  const teamMembers = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/af448c719015a25c32a4ba9ecdcb73d92930355e?placeholderIfAbsent=true",
      name: "James Andy",
      position: "CEO & Founder",
      socialIcons: ["https://cdn.builder.io/api/v1/image/assets/TEMP/bdeafbfe8376c4786819cebad24cf558091b4c72?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/TEMP/f5f25819ba7f7d83cc14075f389bd6f2c2b97141?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/TEMP/0b34b241117fb344ccc3c04261d27f0e7ba375d8?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/TEMP/94f4a34fe2e80b7878b5327a4be7d51388ab8704?placeholderIfAbsent=true"]
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a55ae705b985294c2e02df32b8d490cf4d02233?placeholderIfAbsent=true",
      name: "Sarah Taylor",
      position: "Office Manager",
      socialIcons: ["https://cdn.builder.io/api/v1/image/assets/TEMP/bdeafbfe8376c4786819cebad24cf558091b4c72?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/TEMP/f5f25819ba7f7d83cc14075f389bd6f2c2b97141?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/TEMP/0b34b241117fb344ccc3c04261d27f0e7ba375d8?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/TEMP/94f4a34fe2e80b7878b5327a4be7d51388ab8704?placeholderIfAbsent=true"]
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/acfe065dc3375ceb74194c3b961289bc63fb203c?placeholderIfAbsent=true",
      name: "Steven Smith",
      position: "General Manager",
      socialIcons: ["https://cdn.builder.io/api/v1/image/assets/TEMP/bdeafbfe8376c4786819cebad24cf558091b4c72?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/TEMP/f5f25819ba7f7d83cc14075f389bd6f2c2b97141?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/TEMP/0b34b241117fb344ccc3c04261d27f0e7ba375d8?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/TEMP/94f4a34fe2e80b7878b5327a4be7d51388ab8704?placeholderIfAbsent=true"]
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef96f13ccf855e75a2c7ed1f477e1a177f27b22c?placeholderIfAbsent=true",
      name: "Alina Lucy",
      position: "PR and Consulting",
      socialIcons: ["https://cdn.builder.io/api/v1/image/assets/TEMP/bdeafbfe8376c4786819cebad24cf558091b4c72?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/TEMP/f5f25819ba7f7d83cc14075f389bd6f2c2b97141?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/TEMP/0b34b241117fb344ccc3c04261d27f0e7ba375d8?placeholderIfAbsent=true", "https://cdn.builder.io/api/v1/image/assets/TEMP/94f4a34fe2e80b7878b5327a4be7d51388ab8704?placeholderIfAbsent=true"]
    }
  ];

  return (
    <section className="w-full">
      <div className="bg-neutral-50 py-12 md:py-16 lg:py-[105px] px-4 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-[rgba(225,56,51,1)] text-sm md:text-[15px] font-bold">
            Nuestro Equipo
          </div>
          <h2 className="text-[rgba(38,46,46,1)] text-2xl md:text-3xl lg:text-[40px] font-bold leading-tight mt-4 md:mt-[21px] px-4">
            Nuestro equipo de expertos dedicados a tu éxito financiero.
          </h2>
          <div className="bg-[rgba(225,56,51,1)] w-[60px] h-[3px] mx-auto mt-6 md:mt-8" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-10 md:mt-12 lg:mt-[60px]">
            {teamMembers.map((member, index) => (
              <article key={index} className="text-center">
                <img
                  src={member.image}
                  className="w-full h-auto object-contain shadow-lg rounded-[5px] mb-6 md:mb-7"
                  alt={member.name}
                />
                <h3 className="text-[rgba(38,46,46,1)] text-xl md:text-[22px] font-bold leading-tight">
                  {member.name}
                </h3>
                <div className="text-[rgba(225,56,51,1)] text-sm md:text-[15px] font-semibold mt-3 md:mt-[18px]">
                  {member.position}
                </div>
                <div className="flex items-center justify-center gap-2.5 mt-4 md:mt-[21px]">
                  {member.socialIcons.map((icon, iconIndex) => (
                    <img
                      key={iconIndex}
                      src={icon}
                      className="w-5 h-5 object-contain cursor-pointer hover:opacity-80 transition-opacity"
                      alt={`Social media ${iconIndex + 1}`}
                    />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
