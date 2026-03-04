import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contato" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-slate-50 to-blue-50 rounded-[3rem] p-12 md:p-20 overflow-hidden"
        >
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#141444]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#141444]/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-[#141444]/10 rounded-full px-4 py-2 text-sm font-medium text-[#141444]">
              <MessageCircle className="w-4 h-4" />
              Vamos conversar
            </span>
            
            <h2 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-bold text-[#141444] tracking-tight">
              Pronto para transformar
              <br />
              sua ideia em realidade?
            </h2>
            
            <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar seu negócio 
              a crescer com soluções tecnológicas personalizadas.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg"
                className="bg-[#141444] hover:bg-[#141444]/90 text-white rounded-full px-10 h-14 text-base font-medium shadow-xl shadow-[#141444]/20 transition-all hover:shadow-2xl hover:shadow-[#141444]/30 hover:scale-105"
              >
                Solicitar Orçamento Gratuito
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-[#141444]/20 text-[#141444] hover:bg-[#141444]/5 rounded-full px-10 h-14 text-base font-medium"
              >
                WhatsApp
              </Button>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Resposta em até 24 horas • Orçamento sem compromisso
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}