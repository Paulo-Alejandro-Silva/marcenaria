import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Instagram,
  Facebook
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve. Obrigado!",
      });
      
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contatos = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(11) 99999-9999',
      link: 'tel:+5511999999999'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'contato@primemarcenaria.com.br',
      link: 'mailto:contato@primemarcenaria.com.br'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Rua das Madeiras, 123 - São Paulo, SP',
      link: 'https://maps.google.com/?q=Rua+das+Madeiras+123+São+Paulo'
    },
    {
      icon: Clock,
      title: 'Horário',
      info: 'Seg - Sex: 8h às 18h | Sáb: 8h às 12h',
      link: null
    }
  ];

  return (
    <section id="contato" className="section-prime">
      <div className="container-prime">
        {/* Header da seção */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            📞 Entre em Contato
          </div>
          
          <h2 className="title-section">
            Vamos conversar sobre seu projeto?
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para transformar suas ideias em realidade. 
            Entre em contato conosco e solicite seu orçamento personalizado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Informações de contato */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-bold mb-8">Fale conosco</h3>
            
            <div className="space-y-6 mb-8">
              {contatos.map((contato) => (
                <div key={contato.title} className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                    <contato.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{contato.title}</h4>
                    {contato.link ? (
                      <a
                        href={contato.link}
                        target={contato.link.startsWith('http') ? '_blank' : undefined}
                        rel={contato.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      >
                        {contato.info}
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{contato.info}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Redes sociais */}
            <div className="bg-muted/30 rounded-xl p-6">
              <h4 className="font-semibold mb-4">Siga-nos nas redes sociais</h4>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/primemarcenaria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-lg hover:scale-105 transition-transform duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/primemarcenaria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-lg hover:scale-105 transition-transform duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Mapa */}
            <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.6520348!3d-23.5506507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAyLjMiUyA0NsKwMzknMDcuMyJX!5e0!3m2!1spt!2sbr!4v1"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Prime Marcenaria"
              />
            </div>
          </div>

          {/* Formulário de contato */}
          <div className="animate-fade-in-right">
            <div className="bg-card rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Solicitar Orçamento</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-sm font-medium mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      required
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={5}
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-300 resize-none"
                    placeholder="Conte-nos sobre seu projeto, ambiente, prazo e outras informações relevantes..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-hero flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-medium mb-1">Resposta em até 2 horas!</p>
                    <p>Nossa equipe está sempre pronta para atender você com agilidade e qualidade.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;