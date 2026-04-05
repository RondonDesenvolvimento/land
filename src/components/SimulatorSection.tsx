import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calculator } from "lucide-react";

export default function SimulatorSection() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    estado: "",
    cidade: "",
    experiencia: "",
    finalidade: "",
    tipo_credito: "",
    valor_credito: ""
  });

  const isFormValid =
    formData.nome &&
    formData.telefone &&
    formData.email &&
    formData.estado &&
    formData.cidade &&
    formData.experiencia;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numbers = e.target.value.replace(/[^0-9]/g, "");
    setFormData(prev => ({ ...prev, telefone: numbers }));
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const numbers = e.target.value.replace(/[^0-9]/g, "");
    setFormData(prev => ({ ...prev, valor_credito: numbers }));
  };

  const formatCurrency = (value: string) => {
    if (!value) return "";

    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0
    }).format(Number(value));
  };

  const parcela =
    formData.valor_credito && Number(formData.valor_credito) > 0
      ? Math.round(Number(formData.valor_credito) * 0.003433)
      : null;

  // =========================
  // ENVIO PARA BACKEND (/api/lead)
  // =========================
  const enviarLead = async () => {
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: {
            attributes: {
              name: formData.nome,
              email: formData.email,
              phone: formData.telefone,
              message: `
Interesse: ${formData.finalidade}
Tipo: ${formData.tipo_credito}
Valor: ${formData.valor_credito}
Cidade: ${formData.cidade} - ${formData.estado}
Experiência: ${formData.experiencia}
              `
            }
          }
        })
      });

      const text = await response.text();
      console.log("RESPOSTA BACKEND:", text);

      if (!response.ok) return false;

      return true;
    } catch (error) {
      console.error("Erro ao enviar lead:", error);
      return false;
    }
  };

  return (
    <section id="simulador" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-6">
            <Calculator size={32} className="text-blue-600" />
          </div>

          <h2 className="text-4xl font-bold text-white">
            Simular <span className="text-blue-600">Consórcio</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* COLUNA 1 */}
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-white text-xl font-semibold mb-6">
              Preencha seus dados para liberar o simulador
            </h3>

            <div className="space-y-4">

              <input name="nome" placeholder="Nome completo" value={formData.nome} onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white" />

              <input name="telefone" placeholder="Telefone / WhatsApp" value={formData.telefone}
                onChange={handleTelefoneChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white" />

              <input name="email" placeholder="E-mail" value={formData.email} onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white" />

              <input name="estado" placeholder="Estado" value={formData.estado} onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white" />

              <input name="cidade" placeholder="Cidade" value={formData.cidade} onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white" />

              <select name="experiencia" value={formData.experiencia} onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white">

                <option value="">Já fez consórcio?</option>
                <option>Nunca</option>
                <option>1-2 Vezes</option>
                <option>Mais de 2 vezes</option>
                <option>Atualmente participando</option>
              </select>

              {isFormValid && (
                <p className="text-green-500 text-sm">
                  ✔ Dados preenchidos. Simulador liberado.
                </p>
              )}
            </div>
          </div>

          {/* COLUNA 2 */}
          <div className={`bg-gray-800 border border-gray-700 rounded-2xl p-8 transition ${!isFormValid && "opacity-40 pointer-events-none"}`}>

            <h3 className="text-white text-xl font-semibold mb-6">
              Crédito
            </h3>

            <div className="space-y-5">

              <select name="finalidade" value={formData.finalidade} onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white">

                <option value="">Selecione a finalidade</option>
                <option>Casa própria</option>
                <option>Apartamento</option>
                <option>Terreno</option>
                <option>Construção</option>
                <option>Reforma</option>
                <option>Carro novo</option>
                <option>Carro usado</option>
                <option>Investimento</option>
              </select>

              <select name="tipo_credito" value={formData.tipo_credito} onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white">

                <option value="">Tipo de consórcio</option>
                <option value="imovel">Imóvel</option>
                <option value="veiculo">Veículo</option>
              </select>

              {formData.tipo_credito && (
                <input
                  type="text"
                  name="valor_credito"
                  placeholder="Digite o valor desejado"
                  value={formatCurrency(formData.valor_credito)}
                  onChange={handleCurrencyChange}
                  className="w-full px-4 py-4 bg-gray-900 border border-gray-700 rounded-lg text-white text-lg"
                />
              )}

              {formData.valor_credito && parcela !== null && (
                <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-center">
                  <p className="text-gray-400 mb-2">Parcela estimada</p>
                  <div className="text-4xl font-bold text-blue-600">
                    {formatCurrency(parcela.toString())}
                  </div>
                  <p className="text-gray-500 text-sm mt-2">
                    Estimativa média de mercado
                  </p>
                </div>
              )}

              <button
                onClick={async () => {
                  const sucesso = await enviarLead();
                  if (sucesso) {
                    navigate('/obrigado');
                  } else {
                    alert("Erro ao enviar lead. Veja o console (F12).");
                  }
                }}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-semibold transition-colors"
              >
                Falar com Especialista
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}