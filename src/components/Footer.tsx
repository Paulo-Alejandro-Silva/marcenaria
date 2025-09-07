import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Obras', href: '#obras' },
    { label: 'Contato', href: '#contato' }
  ];

  const handleMenuClick = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground relative">
      {/* Botão voltar ao topo */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground rounded-full p-3 shadow-lg hover:scale-110 transition-all duration-300"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="container-prime">
        {/* Conteúdo principal do footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Logo e descrição */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-white text-primary rounded-lg px-3 py-2 font-bold text-xl">
                  PM
                </div>
                <span className="font-bold text-2xl">Prime Marcenaria</span>
              </div>
              
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6 max-w-md">
                Transformamos ambientes com móveis sob medida de alta qualidade. 
                Mais de 15 anos criando soluções personalizadas para nossos clientes.
              </p>

              {/* Redes sociais */}
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/primemarcenaria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors duration-300"
                  aria-label="Instagram da Prime Marcenaria"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/primemarcenaria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors duration-300"
                  aria-label="Facebook da Prime Marcenaria"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors duration-300"
                  aria-label="WhatsApp da Prime Marcenaria"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Links rápidos */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Links Rápidos</h4>
              <nav className="space-y-3">
                {menuItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleMenuClick(item.href)}
                    className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contato */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Contato</h4>
              <div className="space-y-4">
                <a
                  href="tel:+5511999999999"
                  className="flex items-center space-x-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>(11) 99999-9999</span>
                </a>
                
                <a
                  href="mailto:contato@primemarcenaria.com.br"
                  className="flex items-center space-x-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>contato@primemarcenaria.com.br</span>
                </a>
                
                <a
                  href="https://maps.google.com/?q=Rua+das+Madeiras+123+São+Paulo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
                >
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Rua das Madeiras, 123<br />São Paulo, SP</span>
                </a>
              </div>

              {/* CTA WhatsApp */}
              <div className="mt-6">
                <a
                  href="https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-white/90 transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>Orçamento via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-white/20"></div>

        {/* Copyright */}
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-primary-foreground/70 text-center sm:text-left">
            <p>&copy; 2024 Prime Marcenaria. Todos os direitos reservados.</p>
          </div>
          
          <div className="text-primary-foreground/70 text-center sm:text-right">
            <p>
              Desenvolvido por{' '}
              <a
                href="https://devisionstudio.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-300 font-medium"
              >
                Devision Studio
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;