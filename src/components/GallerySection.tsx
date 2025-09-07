import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

// Importando as imagens
import galleryBedroom from '@/assets/gallery-bedroom.jpg';
import galleryOffice from '@/assets/gallery-office.jpg';
import galleryLiving from '@/assets/gallery-living.jpg';
import galleryBathroom from '@/assets/gallery-bathroom.jpg';
import galleryCorporate from '@/assets/gallery-corporate.jpg';
import galleryCloset from '@/assets/gallery-closet.jpg';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  details: string;
}

const GallerySection = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Dormitório Planejado',
      category: 'Residencial',
      image: galleryBedroom,
      description: 'Guarda-roupa sob medida com design moderno e funcional',
      details: 'Projeto completo incluindo guarda-roupa com portas de correr, criados-mudos integrados e bancada para TV. Acabamento em laminado texturizado com puxadores modernos.'
    },
    {
      id: 2,
      title: 'Home Office Executivo',
      category: 'Residencial',
      image: galleryOffice,
      description: 'Ambiente de trabalho personalizado com máxima produtividade',
      details: 'Mesa executiva em L com gaveteiros, estantes integradas e painel para TV. Projeto pensado para otimizar o espaço e criar um ambiente profissional em casa.'
    },
    {
      id: 3,
      title: 'Sala de Estar Integrada',
      category: 'Residencial',
      image: galleryLiving,
      description: 'Rack e estantes planejadas para o ambiente perfeito',
      details: 'Painel para TV com nichos decorativos, rack suspenso e estantes laterais. Design clean que valoriza o ambiente e oferece muito espaço de armazenamento.'
    },
    {
      id: 4,
      title: 'Banheiro Sob Medida',
      category: 'Residencial',
      image: galleryBathroom,
      description: 'Móvel para banheiro com acabamento resistente à umidade',
      details: 'Gabinete sob medida com tampo em mármore, espelheira integrada e organizadores internos. Materiais especiais resistentes à umidade.'
    },
    {
      id: 5,
      title: 'Sala de Reuniões',
      category: 'Corporativo',
      image: galleryCorporate,
      description: 'Mobiliário corporativo elegante e funcional',
      details: 'Mesa de reuniões para 12 pessoas com sistema de cabeamento integrado, armários executivos e credenzas. Acabamento premium para ambientes corporativos.'
    },
    {
      id: 6,
      title: 'Closet Luxo',
      category: 'Residencial',
      image: galleryCloset,
      description: 'Walk-in closet com organização perfeita',
      details: 'Closet completo com araras, prateleiras, sapateira, gavetas especiais e sistema de iluminação LED. Organização perfeita para todos os tipos de roupas e acessórios.'
    }
  ];

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
    setCurrentIndex(galleryItems.findIndex(i => i.id === item.id));
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const nextItem = () => {
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setCurrentIndex(nextIndex);
    setSelectedItem(galleryItems[nextIndex]);
  };

  const prevItem = () => {
    const prevIndex = currentIndex === 0 ? galleryItems.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setSelectedItem(galleryItems[prevIndex]);
  };

  return (
    <>
      <section id="obras" className="section-prime bg-muted/30">
        <div className="container-prime">
          {/* Header da seção */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              📸 Nosso Portfólio
            </div>
            
            <h2 className="title-section">
              Obras que transformaram ambientes
            </h2>
            
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Conheça alguns dos nossos projetos realizados. Cada obra é única e 
              desenvolvida com atenção aos mínimos detalhes para superar expectativas.
            </p>
          </div>

          {/* Grid da galeria */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openModal(item)}
              >
                <div className="relative overflow-hidden rounded-xl bg-card shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Ícone de visualização */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Informações */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-xs bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 inline-block mb-2">
                      {item.category}
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-white/90 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16 animate-fade-in-up">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <span className="text-lg text-muted-foreground">
                Gostou do que viu? 
              </span>
              <a
                href="https://wa.me/5511999999999?text=Olá! Vi o portfólio de vocês e gostaria de fazer um orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hero"
              >
                Solicitar Meu Projeto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modal da galeria */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
          <div className="relative bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Header do modal */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h3 className="text-2xl font-bold">{selectedItem.title}</h3>
                <span className="text-primary text-sm font-medium">{selectedItem.category}</span>
              </div>
              <button
                onClick={closeModal}
                className="p-2 rounded-lg hover:bg-secondary transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Conteúdo do modal */}
            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-80 lg:h-96 object-cover rounded-xl"
                  />
                  
                  {/* Navegação */}
                  <button
                    onClick={prevItem}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextItem}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors duration-300"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground text-lg">
                    {selectedItem.description}
                  </p>
                  <p className="text-foreground leading-relaxed">
                    {selectedItem.details}
                  </p>
                  
                  <div className="pt-4">
                    <a
                      href="https://wa.me/5511999999999?text=Olá! Vi este projeto no portfólio e gostaria de fazer algo similar."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-hero w-full sm:w-auto"
                    >
                      Quero um projeto similar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;