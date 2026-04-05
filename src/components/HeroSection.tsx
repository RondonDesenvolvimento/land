export default function HeroSection() {
  const scrollToSimulator = () => {
    const element = document.getElementById('simulador');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Conquiste Seu <span className="text-blue-600">Imóvel Próprio</span> com Planejamento
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Casa própria, investimento imobiliário ou carro novo: tudo isso com consórcio, sem juros abusivos e com parcelas acessíveis.
          </p>

          <button
            onClick={scrollToSimulator}
            className="bg-green-500 hover:bg-green-700 text-white text-lg px-10 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-green-600/30"
          >
            Simular Agora
          </button>

        </div>
      </div>
    </section>
  );
}