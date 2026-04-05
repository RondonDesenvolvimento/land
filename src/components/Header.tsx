import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <nav className="container mx-auto px-4 py-3 flex items-center justify-between">

          {/* LOGO */}
          <div
            className={`flex items-center h-12 text-2xl font-bold transition-all ${
              isMenuOpen
                ? 'opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto'
                : ''
            }`}
          >
            <span className="text-white">Rondon </span>
            <span className="text-blue-600">Investimentos</span>
          </div>

          {/* BOTÃO MENU */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 z-[60]"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* MENU DESKTOP */}
          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-300 hover:text-white">Início</button>
            <button onClick={() => scrollToSection('perfil')} className="text-gray-300 hover:text-white">Perfil</button>
            <button onClick={() => scrollToSection('solucoes')} className="text-gray-300 hover:text-white">Soluções</button>
            <button onClick={() => scrollToSection('comparativo')} className="text-gray-300 hover:text-white">Comparativo</button>
            <button onClick={() => scrollToSection('clientes')} className="text-gray-300 hover:text-white">Clientes</button>
            <button onClick={() => scrollToSection('simulador')} className="text-gray-300 hover:text-white">Simulador</button>
            <button onClick={() => scrollToSection('sobre')} className="text-gray-300 hover:text-white">Sobre</button>
            <button onClick={() => scrollToSection('localizacao')} className="text-gray-300 hover:text-white">Localização</button>

            <button
              onClick={() => scrollToSection('simulador')}
              className="bg-green-500 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold"
            >
              Quero Simular
            </button>
          </div>
        </nav>
      </header>

      {/* MENU MOBILE FULL SCREEN */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black z-[55]">

          {/* BOTÃO FECHAR */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={32} />
          </button>

          {/* CONTEÚDO CENTRALIZADO */}
          <div className="h-full flex flex-col justify-start pt-28 px-8 space-y-6 text-lg">

            <button onClick={() => scrollToSection('inicio')} className="text-gray-300 hover:text-white text-left">Início</button>
            <button onClick={() => scrollToSection('perfil')} className="text-gray-300 hover:text-white text-left">Perfil</button>
            <button onClick={() => scrollToSection('solucoes')} className="text-gray-300 hover:text-white text-left">Soluções</button>
            <button onClick={() => scrollToSection('comparativo')} className="text-gray-300 hover:text-white text-left">Comparativo</button>
            <button onClick={() => scrollToSection('clientes')} className="text-gray-300 hover:text-white text-left">Clientes</button>
            <button onClick={() => scrollToSection('simulador')} className="text-gray-300 hover:text-white text-left">Simulador</button>
            <button onClick={() => scrollToSection('sobre')} className="text-gray-300 hover:text-white text-left">Sobre</button>
            <button onClick={() => scrollToSection('localizacao')} className="text-gray-300 hover:text-white text-left">Localização</button>

            <button
              onClick={() => scrollToSection('simulador')}
              className="mt-8 bg-green-500 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Quero Simular
            </button>

          </div>
        </div>
      )}
    </>
  );
}