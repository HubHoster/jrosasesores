import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Team } from '@/components/Team';
import { Contact } from '@/components/Contact';
import { Statistics } from '@/components/Statistics';
import { WhyChooseUs } from '@/components/WhyChooseUs';
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
          <section id="estadisticas"><Statistics /></section>
          <section id="why"><WhyChooseUs /></section>
        </div>
        <section id="contacto"><Contact /></section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
