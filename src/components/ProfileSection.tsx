import { Home, TrendingUp, Car } from 'lucide-react';

export default function ProfileSection() {
  const scrollToSimulator = () => {
    const element = document.getElementById('simulador');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const profiles = [
    {
      icon: Home,
      title: 'Quero Sair do Aluguel',
      description: 'Pare de pagar aluguel e invista no seu próprio imóvel. Com o consórcio, você planeja sua conquista sem comprometer o orçamento.',
    },
    {
      icon: TrendingUp,
      title: 'Planejando o Futuro',
      description: 'Quer comprar um imóvel nos próximos anos? O consórcio é a forma mais inteligente de se preparar e garantir seu patrimônio.',
    },
    {
      icon: Car,
      title: 'Trocar de Carro',
      description: 'Deseja adquirir ou trocar de automóvel? Consórcio é a opção sem juros para realizar esse objetivo.',
    },
  ];

  return (
    <section id="perfil" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Qual Consórcio <span className="text-blue-600">Combina com Você?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Identifique seu perfil e descubra como o consórcio pode te ajudar a realizar seus objetivos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="flex flex-col bg-gray-800 border border-gray-700 rounded-xl p-8 hover:border-blue-600/50 transition-all hover:shadow-xl hover:shadow-blue-600/10"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-lg mb-6">
                <profile.icon size={32} className="text-blue-600" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {profile.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {profile.description}
              </p>

              <button
                onClick={scrollToSimulator}
                className="mt-auto w-full bg-green-500 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Simular Agora
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}