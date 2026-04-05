import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.rondon.png';

export default function AboutSection() {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sobre" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Coluna esquerda */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Conheça a <span className="text-blue-600">Rondon Investimentos</span>
                </h2>

                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>
                    <strong className="text-white">A Rondon Investimentos</strong> é a sua parceira ideal para encontrar o imóvel dos seus sonhos, adquirir bens por meio de consórcios e realizar investimentos seguros e rentáveis.
                  </p>

                  <p>
                    Com atuação no mercado imobiliário e em soluções estratégicas com consórcios, oferecemos um portfólio diversificado para quem busca um lar, investir com segurança ou planejar a conquista de bens de forma inteligente.
                  </p>

                  <div className="pt-4">
                    <h3 className="text-white font-semibold mb-4 text-xl">Nosso compromisso:</h3>
                    <ul className="space-y-4 list-disc list-inside text-white">
                      <li>
                        <strong>Personalização:</strong> Entendemos que cada cliente é único. Por isso, oferecemos um atendimento próximo e personalizado, indicando as melhores opções em imóveis e consórcios conforme seus objetivos.
                      </li>
                      <li>
                        <strong>Experiência:</strong> Contamos com uma equipe experiente, preparada para orientar e trazer segurança em todas as etapas, desde a escolha até a concretização do investimento.
                      </li>
                      <li>
                        <strong>Inovação:</strong> Utilizamos dados e análises de mercado para identificar oportunidades relevantes, garantindo soluções atualizadas e alinhadas ao seu perfil.
                      </li>
                      <li>
                        <strong>Transparência:</strong> Prezamos por relações claras e confiáveis, oferecendo todas as informações necessárias para que você tome decisões com tranquilidade.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => scrollToSection('simulador')}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg"
                >
                  Fazer uma Simulação
                </button>
              </div>
            </div>

            {/* Coluna direita */}
            <div className="h-full lg:pl-8">
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl border border-gray-700 shadow-2xl h-[800px] flex flex-col items-center sticky top-8 p-12 max-w-lg mx-auto">

                <img
                  src={logo}
                  alt="Logo Rondon Investimentos"
                  className="mb-10 w-56"
                />

                <div className="text-center w-full text-gray-400 overflow-wrap break-word">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Nosso slogan resume nossa filosofia de trabalho:
                  </p>

                  <h3 className="text-2xl font-bold text-white leading-relaxed mb-6">
                    "Investimento seguro e rentável baseado em dados e estratégia"
                  </h3>

                  <p className="mb-6 leading-relaxed">
                    Ao aliar conhecimento do mercado com uma análise criteriosa de dados, oferecemos aos nossos clientes a segurança e a rentabilidade que buscam.
                  </p>

                  <p className="leading-relaxed">
                    Conte com a Rondon Investimentos para realizar seus sonhos e alcançar seus objetivos financeiros.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}