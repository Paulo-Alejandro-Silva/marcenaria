import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Obras', href: '#obras' },
    { label: 'Contato', href: '#contato' }
  ];

  const handleMenuClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Header fixo transparente */}
      <header className={`nav-transparent ${isScrolled ? 'shadow-lg' : ''}`}>
        <div className="container-prime">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-primary text-primary-foreground rounded-lg px-3 py-2 font-bold text-xl">
                PM
              </div>
              <span className="font-bold text-xl text-foreground">
                Prime Marcenaria
              </span>
            </div>

            {/* Menu Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleMenuClick(item.href)}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Orçamento</span>
              </a>
            </nav>

            {/* Menu Hambúrguer Mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-secondary text-foreground"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Slide */}
        <div className={`lg:hidden fixed top-0 right-0 h-screen w-80 bg-background shadow-2xl transform transition-transform duration-300 z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <span className="font-bold text-xl">Menu</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg bg-secondary"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <nav className="space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleMenuClick(item.href)}
                  className="block w-full text-left py-3 px-4 rounded-lg text-foreground hover:bg-secondary transition-colors duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-6 border-t border-border">
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero w-full flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Solicitar Orçamento</span>
                </a>
                
                <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>(11) 99999-9999</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>contato@primemarcenaria.com.br</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>São Paulo, SP</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* Overlay do Menu Mobile */}
        {isMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </header>

      {/* Spacer para compensar header fixo */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;