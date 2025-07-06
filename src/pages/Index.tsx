import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Team } from '@/components/Team';
import { Contact } from '@/components/Contact';
import { Statistics } from '@/components/Statistics';
import { Testimonials } from '@/components/Testimonials';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Blog } from '@/components/Blog';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-white min-h-screen w-full">
      <Header />
      
      <main className="w-full">
        <Hero />
        <div className="container mx-auto px-4 space-y-20 lg:space-y-32">
          <section id="nosotros"><About /></section>
          <section id="servicios"><Services /></section>
          <section id="team"><Team /></section>
          <section id="contacto"><Contact /></section>
          <section id="estadisticas"><Statistics /></section>
          <section id="testimonios"><Testimonials /></section>
          <section id="why"><WhyChooseUs /></section>
          <section id="blog"><Blog /></section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
