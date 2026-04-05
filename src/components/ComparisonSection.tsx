export default function ComparisonSection() {
  const scrollToSimulator = () => {
    const element = document.getElementById('simulador');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="comparativo" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Comparativo de <span className="text-blue-600">Mercado</span>
          </h2>
          <p className="text-gray-400">
            Veja na prática a diferença entre financiamento e consórcio
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-800 border border-gray-700 rounded-2xl p-8">

          <table className="w-full text-center text-gray-300">

            <thead>
              <tr className="border-b border-gray-700">

                <th className="py-5 text-gray-400 font-semibold">
                  Imobiliário
                </th>

                <th className="py-6 bg-red-600 text-white font-semibold rounded-t-lg">
                  Financiamento
                </th>

                <th className="py-6 bg-blue-600 text-white font-semibold rounded-t-lg">
                  Consórcio
                </th>

              </tr>
            </thead>

            <tbody className="text-sm md:text-base">

              <tr className="border-b border-gray-700">
                <td className="py-4 font-semibold">Valor</td>
                <td>R$ 300.000,00</td>
                <td>R$ 300.000,00</td>
              </tr>

              <tr className="border-b border-gray-700">
                <td className="py-4 font-semibold">Prazo</td>
                <td>220 meses</td>
                <td>220 meses</td>
              </tr>

              <tr className="border-b border-gray-700">
                <td className="py-4 font-semibold">Taxa Juros / Adm</td>
                <td>12% a.a.</td>
                <td>1.2% a.a.</td>
              </tr>

              <tr className="border-b border-gray-700">
                <td className="py-4 font-semibold">Parcela Inicial</td>
                <td>R$ 3.478,60</td>
                <td className="text-blue-500 font-semibold">
                  R$ 1.030,00
                </td>
              </tr>

              <tr>
                <td></td>

                <td className="bg-red-600 text-white font-bold py-4 px-4 rounded-lg">
                  CUSTO TOTAL 
                  R$ 765.292
                </td>

                <td className="bg-blue-600 text-white font-bold py-4 px-4 rounded-lg">
                  CUSTO TOTAL 
                  R$ 366.000
                </td>
              </tr>

            </tbody>
          </table>

          <div className="mt-6 bg-green-600 text-white text-center font-semibold py-4 rounded-lg">
            Economia com o Consórcio: R$ 399.292
          </div>

          <p className="text-xs text-gray-500 text-center mt-3">
            Dados baseados em médias de mercado. Consulte simulação personalizada antes da contratação.
          </p>

        </div>

        <div className="text-center mt-12">
          <button
            onClick={scrollToSimulator}
            className="bg-blue-500 hover:bg-blue-700 text-white text-lg px-10 py-4 rounded-lg font-semibold transition-all hover:scale-105"
          >
            Quero simular agora!
          </button>
        </div>

      </div>
    </section>
  );
}