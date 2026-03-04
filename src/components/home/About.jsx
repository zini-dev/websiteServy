import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="sobre" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-[#141444] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Equipe trabalhando"
                className="w-full h-full object-cover mix-blend-luminosity opacity-60"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="text-4xl font-bold text-[#141444]">5+</div>
              <div className="text-gray-600 mt-1">Anos criando soluções digitais de excelência</div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-[#141444]/60 tracking-wider uppercase">
              Sobre Nós
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#141444] tracking-tight">
              Parceiros no seu
              <br />
              crescimento digital
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              A Servy Tecnologia nasceu com a missão de democratizar o acesso 
              a soluções tecnológicas de alta qualidade. Acreditamos que toda 
              empresa, independente do tamanho, merece ter uma presença digital 
              profissional.
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Nossa equipe é formada por profissionais apaixonados por tecnologia, 
              sempre atualizados com as últimas tendências do mercado e comprometidos 
              em entregar resultados que fazem a diferença.
            </p>

            {/* Values */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { value: 'Qualidade', desc: 'Em cada linha de código' },
                { value: 'Confiança', desc: 'Parceria transparente' },
                { value: 'Inovação', desc: 'Soluções modernas' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="text-lg font-semibold text-[#141444]">{item.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}