import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="text-center max-w-md mx-auto animate-fade-in-up">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="bg-primary text-primary-foreground rounded-lg px-3 py-2 font-bold text-xl">
            PM
          </div>
          <span className="font-bold text-xl text-foreground">
            Prime Marcenaria
          </span>
        </div>

        {/* 404 */}
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        
        <h2 className="text-2xl font-semibold mb-4">Página não encontrada</h2>
        
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Ops! A página que você está procurando não existe ou foi movida. 
          Que tal voltar para nossa página inicial?
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/" 
            className="btn-hero flex items-center justify-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Voltar ao Início</span>
          </a>
          
          <button 
            onClick={() => window.history.back()}
            className="border border-border text-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Página Anterior</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
