import { MapPin } from 'lucide-react';

export default function LocationSection() {
  return (
    <section id="localizacao" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-6">
            <MapPin size={32} className="text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nossa <span className="text-blue-600">Localização</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Visite nosso escritório e conheça nossas soluções pessoalmente
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-gray-800 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.2445794351474!2d-51.1621446109955!3d-30.02984036594918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197765cd8e1043%3A0xf4261d2d7ce6b633!2sRondon%20Investimento%20imobli%C3%A1rio%20%7C%20Im%C3%B3veis%20em%20Porto%20Alegre!5e0!3m2!1spt-BR!2sbr!4v1773625996705!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do escritório"
            ></iframe>
          </div>

          <div className="mt-8 bg-gray-900 rounded-xl p-8 border border-gray-800">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-white font-semibold mb-2">Endereço</h3>
                <p className="text-gray-400">
                  Av. Nilo Peçanha 3245<br />
                  Porto Alegre - RS
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Horário</h3>
                <p className="text-gray-400">
                  Segunda a Sexta<br />
                  9h às 18h
                </p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Contato</h3>
                <p className="text-gray-400">
                  (51) 98924-7146<br />
                  administração@rondoninvestimentos.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
