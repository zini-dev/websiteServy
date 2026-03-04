import React from 'react';
import { Shield, Zap, Heart, Users, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const differentials = [
  {
    icon: Shield,
    title: 'Qualidade Garantida',
    description: 'Código limpo, boas práticas e testes rigorosos em todos os projetos.',
  },
  {
    icon: Heart,
    title: 'Confiança Total',
    description: 'Transparência em cada etapa, prazos cumpridos e comunicação constante.',
  },
  {
    icon: Zap,
    title: 'Fácil de Usar',
    description: 'Interfaces intuitivas pensadas para proporcionar a melhor experiência.',
  },
  {
    icon: Users,
    title: 'Suporte Dedicado',
    description: 'Acompanhamento próximo e suporte técnico quando você precisar.',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-32 bg-[#141444] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold text-white/60 tracking-wider uppercase"
            >
              Por que nos escolher
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-4xl md:text-5xl font-bold text-white tracking-tight"
            >
              Nossos pilares são
              <br />
              <span className="text-white/50">o seu sucesso</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-white/70 leading-relaxed"
            >
              Na Servy Tecnologia, cada projeto é tratado com dedicação exclusiva. 
              Combinamos expertise técnica com um atendimento humanizado para 
              entregar resultados que superam expectativas.
            </motion.p>

            {/* Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 space-y-4"
            >
              {['Projetos entregues no prazo', 'Código documentado e organizado', 'Treinamento incluso', 'Garantia pós-entrega'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {differentials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}