import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import logo from '../assets/logo.rondon.lateral.png';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-[1.2fr_1fr_1fr_0.8fr] gap-8 mb-8">
          
          <div>
            <div className="mb-4">
              <img
                src={logo}
                alt="Rondon Investimentos"
                className="h-10 w-auto"
              />
            </div>

            <p className="text-gray-400 mb-4">
              Realizando sonhos através do planejamento financeiro inteligente.
            </p>

            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Facebook size={0} />
              </a>

              <a
                href="https://www.instagram.com/rondoninvestimentos_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Instagram size={20} />
              </a>

              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin size={0} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('inicio')} className="text-gray-400 hover:text-blue-600 transition-colors">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('perfil')} className="text-gray-400 hover:text-blue-600 transition-colors">
                  Perfil
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('solucoes')} className="text-gray-400 hover:text-blue-600 transition-colors">
                  Soluções
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('simulador')} className="text-gray-400 hover:text-blue-600 transition-colors">
                  Simulador
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('sobre')} className="text-gray-400 hover:text-blue-600 transition-colors">
                  Sobre
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Soluções</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Consórcio de Imóveis</li>
              <li className="text-gray-400">Consórcio de Automóveis</li>
              <li className="text-gray-400">Consultoria Financeira</li>
              <li className="text-gray-400">Suporte Personalizado</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={16} className="text-blue-600" />
                (51) 98924-7146
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={16} className="text-blue-600" />
                administrativo@rondoninvestimentos.com
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Rondon Investimentos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}