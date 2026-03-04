import React from 'react';
import Header from '@/components/home/Header';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import Differentials from '@/components/home/Differentials';
import CTA from '@/components/home/CTA';
import Footer from '@/components/home/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <Differentials />
      <CTA />
      <Footer />
    </div>
  );
}