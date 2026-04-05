import { CheckCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ThankYouPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center">
            <CheckCircle size={56} className="text-green-500" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">
          Cadastro recebido com sucesso!
        </h1>

        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
          Obrigado por preencher o formulário. Um especialista irá analisar suas informações e entrar em contato com você em breve para apresentar as melhores opções de consórcio.
        </p>

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mb-8">
          <p className="text-gray-400 text-sm">
            Verifique seu e-mail e WhatsApp para atualizações sobre sua simulação.
          </p>
        </div>

        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          <ArrowLeft size={20} />
          Voltar para o site
        </button>
      </div>
    </div>
  );
}
