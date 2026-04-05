import { Building2, Car } from 'lucide-react';

export default function SolutionsSection() {
  const scrollToSimulator = () => {
    const element = document.getElementById('simulador');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solucoes" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Soluções em <span className="text-blue-600">Consórcio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Escolha a modalidade ideal para realizar seus objetivos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Imóveis */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-blue-600/30 rounded-2xl p-10 hover:border-blue-600/60 transition-all hover:shadow-2xl hover:shadow-blue-600/20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 rounded-xl mb-6">
              <Building2 size={40} className="text-blue-600" />
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">
              Consórcio de Imóveis
            </h3>

            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              A forma mais inteligente de conquistar seu imóvel próprio. Sem juros, com parcelas acessíveis e total flexibilidade para realizar o sonho da casa própria, apartamento ou terreno.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start text-gray-300">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Sem juros e taxas abusivas</span>
              </li>
              <li className="flex items-start text-gray-300">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Parcelas que cabem no orçamento</span>
              </li>
              <li className="flex items-start text-gray-300">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Liberdade para escolher o imóvel</span>
              </li>
            </ul>

            <button
              onClick={scrollToSimulator}
              className="w-full bg-green-500 hover:bg-green-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Simular Consórcio de Imóvel
            </button>
          </div>

          {/* Automóveis */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-blue-600/30 rounded-2xl p-10 hover:border-blue-600/60 transition-all hover:shadow-2xl hover:shadow-blue-600/20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 rounded-xl mb-6">
              <Car size={40} className="text-blue-600" />
            </div>

            <h3 className="text-3xl font-bold text-white mb-4">
              Consórcio de Automóveis
            </h3>

            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Conquiste seu veículo novo ou seminovo sem comprometer suas finanças. Planeje a troca ou aquisição do seu automóvel de forma segura e econômica.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start text-gray-300">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Economia em relação ao financiamento</span>
              </li>
              <li className="flex items-start text-gray-300">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Escolha qualquer modelo e marca</span>
              </li>
              <li className="flex items-start text-gray-300">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Planejamento financeiro inteligente</span>
              </li>
            </ul>

            <button
              onClick={scrollToSimulator}
              className="w-full bg-green-500 hover:bg-green-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Simular Consórcio de Automóvel
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}