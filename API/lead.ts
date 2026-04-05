export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  try {
    const response = await fetch(
      "https://api.contact2sale.com/integration/leads",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer ead825e2d6fe361d9b0145898a45858bcd92abbf0e907a2439"
        },
        body: JSON.stringify(req.body)
      }
    );

    const data = await response.text();

    console.log("RESPOSTA C2S:", data);

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Erro no backend:", error);
    return res.status(500).json({ error: "Erro ao enviar lead" });
  }
}