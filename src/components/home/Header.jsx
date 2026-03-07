import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Serviços', id: 'serviços' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Diferenciais', id: 'diferenciais' },
    { label: 'Contato', id: 'contato' },
  ];

  const scrollToSection = (id) => {
    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center"
          >
            <span
              className={`font-bold text-xl tracking-tight transition-colors ${isScrolled ? 'text-[#141444]' : 'text-[#141444]'
                }`}
            >
              Servy<span className="font-light">Tecnologia</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-[#141444]/70 ${isScrolled ? 'text-[#141444]' : 'text-[#141444]'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contato')}
              className="bg-[#141444] hover:bg-[#141444]/90 text-white rounded-full px-6 h-11 text-sm font-medium shadow-lg shadow-[#141444]/20 transition-all hover:shadow-xl hover:shadow-[#141444]/30"
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#141444]" />
            ) : (
              <Menu className="w-6 h-6 text-[#141444]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left py-3 px-4 text-[#141444] font-medium hover:bg-gray-50"
              >
                {item.label}
              </button>
            ))}

            <div className="px-4 pt-4">
              <Button
                onClick={() => scrollToSection('contato')}
                className="w-full bg-[#141444] hover:bg-[#141444]/90 text-white rounded-full"
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}