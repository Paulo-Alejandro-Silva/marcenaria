import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    // Mostrar o botão após um tempo para chamar atenção
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Esconder tooltip após alguns segundos
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const message = "Olá! Vim através do site e gostaria de mais informações sobre móveis planejados.";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-16 right-0 mb-2 bg-white text-primary shadow-xl rounded-lg p-3 max-w-xs animate-fade-in-up">
          <div className="flex items-start justify-between space-x-2">
            <div>
              <p className="text-sm font-medium mb-1">💬 Olá! Como posso ajudar?</p>
              <p className="text-xs text-muted-foreground">
                Clique aqui para conversar no WhatsApp
              </p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          {/* Seta do tooltip */}
          <div className="absolute bottom-0 right-8 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-border"></div>
        </div>
      )}

      {/* Botão principal */}
      <button
        onClick={handleWhatsAppClick}
        className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Conversar no WhatsApp"
      >
        {/* Efeito de pulso */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        
        {/* Ícone */}
        <MessageCircle className="w-7 h-7 relative z-10" />
        
        {/* Badge de notificação */}
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
          1
        </div>
      </button>

      {/* Texto adicional para desktop */}
      <div className="hidden lg:block absolute bottom-4 right-16 mr-4">
        <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap group-hover:bg-green-600 transition-colors duration-300">
          Conversar no WhatsApp
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;