import React from 'react';
import { Phone, ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-kitchen.jpg';

const HeroSection = () => {
  const handleScrollToNext = () => {
    const nextSection = document.querySelector('#sobre');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background com imagem */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Cozinha moderna Prime Marcenaria"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center text-white container-prime">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium mb-6">
            ✨ Móveis sob medida de alta qualidade
          </div>

          {/* Título principal */}
          <h1 className="title-hero mb-6">
            Transformamos seus
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              sonhos em realidade
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Especialistas em móveis planejados, projetos residenciais e corporativos 
            com design exclusivo e acabamento impecável.
          </p>

          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento para móveis planejados."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 flex items-center space-x-2 shadow-xl"
            >
              <Phone className="w-5 h-5" />
              <span>Solicitar Orçamento</span>
            </a>
            
            <button
              onClick={handleScrollToNext}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
            >
              Conheça nosso trabalho
            </button>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16 text-center">
            <div className="animate-fade-in-left">
              <div className="text-3xl sm:text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80 text-sm">Projetos realizados</div>
            </div>
            <div className="animate-fade-in-left" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl sm:text-4xl font-bold mb-2">15</div>
              <div className="text-white/80 text-sm">Anos de experiência</div>
            </div>
            <div className="animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl sm:text-4xl font-bold mb-2">98%</div>
              <div className="text-white/80 text-sm">Clientes satisfeitos</div>
            </div>
            <div className="animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl sm:text-4xl font-bold mb-2">24h</div>
              <div className="text-white/80 text-sm">Atendimento</div>
            </div>
          </div>
        </div>
      </div>

      {/* Seta para próxima seção */}
      <button
        onClick={handleScrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-white/80 transition-colors duration-300 animate-bounce"
        aria-label="Rolar para próxima seção"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSection;