import React from 'react';
import { Award, Clock, Users, Wrench } from 'lucide-react';

const AboutSection = () => {
  const diferenciais = [
    {
      icon: Award,
      title: 'Qualidade Premium',
      description: 'Utilizamos apenas materiais de alta qualidade e técnicas avançadas de marcenaria.'
    },
    {
      icon: Clock,
      title: 'Prazo Garantido',
      description: 'Cumprimos rigorosamente os prazos acordados, sem comprometer a qualidade.'
    },
    {
      icon: Users,
      title: 'Personalização',
      description: 'Cada projeto é único e desenvolvido especialmente para suas necessidades.'
    },
    {
      icon: Wrench,
      title: 'Suporte Completo',
      description: 'Acompanhamento desde o projeto até a instalação e pós-venda.'
    }
  ];

  return (
    <section id="sobre" className="section-prime bg-muted/30">
      <div className="container-prime">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Conteúdo textual */}
          <div className="animate-fade-in-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              🏆 Sobre Marcenaria
            </div>
            
            <h2 className="title-section">
              Transformando ambientes há mais de 15 anos
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A Marcenaria nasceu da paixão por criar móveis únicos que combinam 
              funcionalidade, design e qualidade excepcional. Nossa missão é transformar 
              cada ambiente em um espaço especial que reflita a personalidade e as 
              necessidades de nossos clientes.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Com uma equipe experiente e tecnologia de ponta, desenvolvemos projetos 
              personalizados que superam expectativas, sempre mantendo nosso compromisso 
              com prazos e excelência no atendimento.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Projetos 3D realistas</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Garantia estendida</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Atendimento especializado</span>
              </div>
            </div>
          </div>

          {/* Grid de diferenciais */}
          <div className="grid sm:grid-cols-2 gap-6 animate-fade-in-right">
            {diferenciais.map((item, index) => (
              <div
                key={item.title}
                className="card-prime text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA inferior */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Pronto para transformar seu ambiente?
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-6 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos criar o projeto perfeito para você.
            </p>
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de conhecer mais sobre os serviços da Prime Marcenaria."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300"
            >
              Conversar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;