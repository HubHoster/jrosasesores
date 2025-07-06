
import React from 'react';

export const Blog = () => {
  const blogPosts = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/fe47835e7c6c8c1fee3a7333931fd11d62d4d38d?placeholderIfAbsent=true",
      date: "Jan 22, 2024",
      author: "Lords Evans",
      title: "The Secret of Your Business Success Find Quickly",
      excerpt: "Lorem ipsum dolor sit amet, conseteturants atal into sadipscing elitr, sed diam nonumy eirmod nsa ada tempor invidunt ut.",
      buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/52e47b4761cc3a297b86b1352eed56d5aa74f860?placeholderIfAbsent=true"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0114b41d98194234c080b20a7c3f3f3b5d22e7a3?placeholderIfAbsent=true",
      date: "Jan 22, 2024",
      author: "Sarah Taylor",
      title: "Consulting is a Good and Best Into Our Company",
      excerpt: "Lorem ipsum dolor sit amet, conseteturants atal into sadipscing elitr, sed diam nonumy eirmod nsa ada tempor invidunt ut.",
      buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/52e47b4761cc3a297b86b1352eed56d5aa74f860?placeholderIfAbsent=true"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/3b6c82cf08523fa955c2cf9fd1ee9a6cc0b4e389?placeholderIfAbsent=true",
      date: "Jan 22, 2024",
      author: "James Andy",
      title: "Business Has Become a Good in the Global World",
      excerpt: "Lorem ipsum dolor sit amet, conseteturants atal into sadipscing elitr, sed diam nonumy eirmod nsa ada tempor invidunt ut.",
      buttonIcon: "https://cdn.builder.io/api/v1/image/assets/TEMP/52e47b4761cc3a297b86b1352eed56d5aa74f860?placeholderIfAbsent=true"
    }
  ];

  return (
    <section className="w-full text-center">
      <div className="text-[rgba(225,56,51,1)] text-sm md:text-[15px] font-bold">
        Nuestros Blogs
      </div>
      <h2 className="text-[rgba(38,46,46,1)] text-2xl md:text-3xl lg:text-[40px] font-bold leading-tight mt-4 px-4">
        Conéctate con nuestros artículos y consejos expertos
      </h2>
      <div className="bg-[rgba(225,56,51,1)] w-[60px] h-[3px] mx-auto mt-4 md:mt-6" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12 max-w-7xl mx-auto">
        {blogPosts.map((post, index) => (
          <article key={index} className="bg-white rounded-[5px] shadow-sm overflow-hidden">
            <img
              src={post.image}
              className="w-full h-48 md:h-56 object-cover"
              alt={post.title}
            />
            <div className="p-6 md:p-8 text-left">
              <div className="flex items-center gap-4 text-sm text-[rgba(102,102,102,1)] font-semibold mb-4">
                <div className="flex items-center gap-2">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4483b0f3acf31161716b76f152172daf1fa2f326?placeholderIfAbsent=true"
                    className="w-3.5 h-3.5 object-contain"
                    alt="Date"
                  />
                  <time>{post.date}</time>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cef1107c2415d9bcb661cfe27ecc604625c9a624?placeholderIfAbsent=true"
                    className="w-3.5 h-3.5 object-contain"
                    alt="Author"
                  />
                  <span>{post.author}</span>
                </div>
              </div>
              <h3 className="text-[rgba(38,46,46,1)] text-xl md:text-[22px] font-bold leading-tight mb-4">
                {post.title}
              </h3>
              <p className="text-[rgba(102,102,102,1)] text-base font-normal leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <button className="border flex items-center gap-4 md:gap-6 text-base text-[rgba(38,46,46,1)] font-semibold px-6 md:px-8 py-3 md:py-[7px] rounded-[5px] border-[rgba(225,56,51,1)] border-solid hover:bg-gray-50 transition-colors">
                <span>Read More</span>
                <img
                  src={post.buttonIcon}
                  className="w-8 h-8 md:w-[35px] md:h-[35px] object-contain rounded-[5px]"
                  alt="Read more"
                />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
