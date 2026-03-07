import React from 'react';
import { Globe, Smartphone, Database, Code2, ArrowUpRight } from 'lucide-react';
import { LazyMotion, domAnimation, m } from 'framer-motion';

const services = [
  {
    icon: Globe,
    title: 'Criação de Sites',
    description: 'Seu site é a porta de entrada da sua empresa na internet. Criamos sites modernos, rápidos e pensados para transformar visitantes em clientes.',
    features: ['Design Personalizado', 'Mobile First', 'Alta Performance'],
  },
  {
    icon: Database,
    title: 'Sistemas Web',
    description: 'Sistemas robustos e escaláveis para automatizar e otimizar os processos do seu negócio.',
    features: ['Dashboard Intuitivo', 'Relatórios', 'Integrações'],
  },
  {
    icon: Smartphone,
    title: 'Aplicativos Mobile',
    description: 'Leve sua empresa para o celular dos seus clientes. Criamos aplicativos modernos que facilitam o atendimento e aproximam sua marca do público.',
    features: ['iOS & Android', 'UI/UX Premium', 'Push Notifications'],
  },
  {
    icon: Code2,
    title: 'Soluções Sob Medida',
    description: 'Cada empresa tem necessidades diferentes. Criamos soluções tecnológicas personalizadas para resolver problemas reais e impulsionar seu crescimento.',
    features: ['APIs', 'Automações', 'Consultoria'],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
};

const cardFadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
};

function ServiceCard({ service, index }) {
  const Icon = service.icon;

  const scrollToContact = () => {
    const section = document.getElementById('contato');

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <m.article
      {...cardFadeUp}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      onClick={scrollToContact}
      className="group relative bg-slate-50 hover:bg-[#141444] rounded-3xl p-8 md:p-10 transition-all duration-500 cursor-pointer overflow-hidden"
    >

      <div className="absolute inset-0 bg-gradient-to-br from-[#141444] to-[#1a1a5e] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">

        {/* Icon */}
        <div className="w-14 h-14 bg-[#141444] group-hover:bg-white/10 rounded-2xl flex items-center justify-center transition-colors duration-500">
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* Title */}
        <h3 className="mt-6 text-2xl font-semibold text-[#141444] group-hover:text-white transition-colors duration-500">
          {service.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-gray-600 group-hover:text-white/80 transition-colors duration-500 leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <div className="mt-6 flex flex-wrap gap-2">
          {service.features.map((feature) => (
            <span
              key={feature}
              className="px-3 py-1 bg-[#141444]/10 group-hover:bg-white/10 text-[#141444] group-hover:text-white text-sm rounded-full transition-colors duration-500"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex items-center gap-2 text-[#141444] group-hover:text-white transition-colors duration-500">
          <span className="text-sm font-medium">Quero esse serviço</span>
          <ArrowUpRight
            className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          />
        </div>

      </div>
    </m.article>
  );
}

export default function Services() {
  return (
    <LazyMotion features={domAnimation}>
      <section id="serviços" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <div className="max-w-3xl">

            <m.span
              {...fadeUp}
              transition={{ duration: 0.4 }}
              className="text-sm font-semibold text-[#141444]/60 tracking-wider uppercase"
            >
              Nossos Serviços
            </m.span>

            <m.h2
              {...fadeUp}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="mt-4 text-4xl md:text-5xl font-bold text-[#141444] tracking-tight"
            >
              Soluções completas para
              <br />
              sua presença digital
            </m.h2>

          </div>

          {/* Grid */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </div>

        </div>
      </section>
    </LazyMotion>
  );
}