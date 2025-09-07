import React from 'react';
import { 
  Home, 
  Building2, 
  Truck, 
  Wrench, 
  Ruler, 
  Palette,
  Star,
  CheckCircle 
} from 'lucide-react';

const ServicesSection = () => {
  const servicos = [
    {
      icon: Home,
      title: 'Móveis Residenciais',
      description: 'Cozinhas planejadas, dormitórios, banheiros, home office e áreas de lazer.',
      features: ['Projetos 3D', 'Medição gratuita', 'Instalação inclusa']
    },
    {
      icon: Building2,
      title: 'Projetos Corporativos',
      description: 'Escritórios, clínicas, lojas e espaços comerciais com design profissional.',
      features: ['Design corporativo', 'Prazos expressos', 'Suporte técnico']
    },
    {
      icon: Ruler,
      title: 'Projetos Sob Medida',
      description: 'Desenvolvimento de móveis únicos adaptados ao seu espaço e necessidades.',
      features: ['Totalmente personalizado', 'Materiais premium', 'Acabamento perfeito']
    },
    {
      icon: Wrench,
      title: 'Montagem e Instalação',
      description: 'Equipe especializada para montagem e instalação com total segurança.',
      features: ['Equipe qualificada', 'Ferramentas profissionais', 'Limpeza incluída']
    },
    {
      icon: Truck,
      title: 'Transporte Especializado',
      description: 'Entrega segura e pontual com veículos apropriados para móveis.',
      features: ['Veículos preparados', 'Seguro incluso', 'Agendamento flexível']
    },
    {
      icon: Palette,
      title: 'Consultoria de Design',
      description: 'Orientação profissional para escolha de cores, materiais e layout.',
      features: ['Visita técnica', 'Catálogo premium', 'Tendências atuais']
    }
  ];

  const parceiros = [
    { nome: 'Duratex', logo: '🏢' },
    { nome: 'Blum', logo: '⚙️' },
    { nome: 'Häfele', logo: '🔧' },
    { nome: 'Tramontina', logo: '🔩' },
    { nome: 'Eucatex', logo: '🏭' },
    { nome: 'Masisa', logo: '📐' }
  ];

  return (
    <section id="servicos" className="section-prime">
      <div className="container-prime">
        {/* Header da seção */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            🛠️ Nossos Serviços
          </div>
          
          <h2 className="title-section">
            Soluções completas para todos os ambientes
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Da concepção à instalação, oferecemos um serviço completo e personalizado 
            para transformar seus espaços com móveis planejados de alta qualidade.
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicos.map((servico, index) => (
            <div
              key={servico.title}
              className="card-prime group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <servico.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="font-semibold text-xl mb-3">{servico.title}</h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {servico.description}
              </p>
              
              <ul className="space-y-2">
                {servico.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Seção de parceiros */}
        <div className="bg-muted/30 rounded-2xl p-8 sm:p-12 animate-fade-in-up">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Trabalhamos com as melhores marcas
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Parceiros de confiança que garantem a qualidade e durabilidade dos nossos móveis.
            </p>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 items-center">
            {parceiros.map((parceiro, index) => (
              <div
                key={parceiro.nome}
                className="text-center group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-background rounded-xl p-6 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105">
                  <div className="text-3xl mb-2">{parceiro.logo}</div>
                  <div className="text-sm font-medium text-muted-foreground">
                    {parceiro.nome}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Badge de qualidade */}
          <div className="flex justify-center mt-8">
            <div className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-full">
              <Star className="w-5 h-5" />
              <span className="font-semibold">Certificados de Qualidade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;