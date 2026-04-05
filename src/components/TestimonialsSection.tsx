import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Maria Santos',
      role: 'Conquistou apartamento próprio',
      content: 'Depois de anos pagando aluguel, consegui meu apartamento através do consórcio. As parcelas eram menores que o aluguel e hoje tenho meu patrimônio!',
      rating: 5,
    },
    {
      name: 'João Silva',
      role: 'Programou Investimento',
      content: 'Entrei em um consórcio para investir. Fui contemplado, comprei um apartamento e coloquei para alugar. Hoje o aluguel ajuda a pagar as parcelas e o imóvel está valorizando.',
      rating: 5,
    },
    {
      name: 'Ana Oliveira',
      role: 'Conquistou carro zero',
      content: 'Planejei a troca do meu carro através do consórcio e economizei muito comparado ao financiamento. Recomendo para quem quer fazer um bom negócio!',
      rating: 5,
    },
  ];

  return (
    <section id="clientes" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Histórias de <span className="text-blue-600">Sucesso</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Veja o que nossos clientes têm a dizer sobre suas conquistas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-blue-600/30 transition-all relative"
            >
              <Quote size={40} className="text-blue-600/20 absolute top-6 right-6" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-blue-500 text-blue-600" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="border-t border-gray-800 pt-4">
                <p className="text-white font-semibold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
