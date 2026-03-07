import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <>
      {/* Smooth Scroll */}
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

      <footer className="bg-[#141444] pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 pb-12 border-b border-white/10">

            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <span className="text-white font-semibold text-xl tracking-tight">
                  <span className="font-bold">Servy</span>
                  <span className="font-light">Tecnologia</span>
                </span>
              </div>

              <p className="mt-4 text-white/60 max-w-sm leading-relaxed">
                Transformando ideias em soluções digitais com qualidade,
                confiança e facilidade de uso.
              </p>

              {/* Social */}
              <div className="mt-6 flex gap-4">
                <a
                  href="https://www.linkedin.com/company/servy-tecnologia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-white/70" />
                </a>

                <a
                  href="https://www.instagram.com/servy.tecnologia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5 text-white/70" />
                </a>
              </div>
            </div>

            {/* Serviços */}
            <div>
              <h4 className="text-white font-semibold mb-4">Serviços</h4>
              <ul className="space-y-3">
                {[
                  'Criação de Sites',
                  'Sistemas Web',
                  'Aplicativos Mobile',
                  'Consultoria'
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#serviços"
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-white/60 text-sm">
                  <Mail className="w-4 h-4" />
                  contato@servytecnologia.com
                </li>

                <li className="flex items-center gap-3 text-white/60 text-sm">
                  <Phone className="w-4 h-4" />
                  (19) 99216-3206
                </li>

                <li className="flex items-start gap-3 text-white/60 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  São Paulo, Brasil
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © 2026 Servy Tecnologia. Todos os direitos reservados.
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="text-white/40 hover:text-white/60 text-sm transition-colors"
              >
                Política de Privacidade
              </a>

              <a
                href="#"
                className="text-white/40 hover:text-white/60 text-sm transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}