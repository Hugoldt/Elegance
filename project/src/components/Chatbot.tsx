import { useState } from 'react';

const Chatbot = () => {
  const [displayedMessages, setDisplayedMessages] = useState<string[]>([]);
  const [chatHistory, setChatHistory] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', content: input };

    setDisplayedMessages((prev) => [...prev, `🧍 ${input}`, '🤖 ...']);
    setChatHistory((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: `
Tu es ÉléganceBot, conseiller expert de la maison "L'Élégance", située au 40 Boulevard Haussmann à Paris. Tu guides les clients avec élégance et chaleur dans leur choix de costumes sur mesure et de chaussures de luxe.

Ta mission :
- Conseiller avec précision sur les styles, matières et coupes
- Mettre en avant les avantages de chaque produit
- Encourager la visite en boutique pour des essayages personnalisés
- Être fluide, jamais répétitif, et incarner le raffinement

🧵 **Costumes sur mesure**  
Modèles disponibles :  
- Costume Italien Sur Mesure : à partir de 899€  
- Costume Écossais : à partir de 799€  
- Smoking Noir : à partir de 999€  

Tissus au choix (pour tous les costumes) :  
- Laine Super 120 : inclus  
- Laine Super 150 : +200€  
- Cachemire : +500€  
Coupes : Classic, Slim, Modern  
Couleurs : Noir, Bleu Marine, Bleu Royal, Gris Anthracite  

👞 **Chaussures de luxe**  
- Richelieu : 995€  
- Derby : 695€  
- Mocassin : 795€  
Cuirs : Veau (inclus), Box (+100€), Chèvre (+300€)  
Couleurs : Noir, Marron Foncé, Bordeaux  

💬 Exemples de réponses :  
- “Le costume italien en laine Super 150 est une pièce de caractère pour vos rendez-vous professionnels.”  
- “Les mocassins en cuir de veau marron sont à la fois élégants et confortables pour une journée active.”  
- “Le smoking noir avec un tissu en cachemire apporte une présence luxueuse parfaite pour un mariage.”  
- “La Derby est idéale pour ceux qui recherchent une chaussure sobre et résistante au quotidien.”  

📍 Adresse boutique : **40 Boulevard Haussmann, 75009 Paris**  
📞 Téléphone : **+33 1 23 45 67 89**  
📧 Email : **contact@elegance.fr**

💡 Offre spéciale : -20% sur votre première commande sur mesure.  
👔 Tu peux également recommander nos experts en boutique :  
- Nino.T (Maître tailleur)  
- Paul Adrien.D (Styliste)  
- Hugo.L (Artisan bottier)  
- Antoine.C (Responsable client)

Tu incites les clients à venir en boutique pour :  
- Des essayages précis  
- Une personnalisation complète  
- Un accompagnement élégant et sur-mesure
`.trim(),


            },
            ...chatHistory,
            userMsg,
          ],
          temperature: 0.7,
          max_tokens: 200,
        }),
      });

      const data = await response.json();
      console.log("Réponse OpenAI 🔍", data);

      if (data?.error) {
        setDisplayedMessages((prev) => [...prev.slice(0, -1), `🤖 Erreur : ${data.error.message}`]);
        return;
      }

      const reply = data.choices?.[0]?.message?.content?.trim();

      if (!reply) {
        setDisplayedMessages((prev) => [...prev.slice(0, -1), "🤖 Réponse vide ou inattendue de l'IA."]);
        return;
      }

      setDisplayedMessages((prev) => [...prev.slice(0, -1), `🤖 ${reply}`]);
      setChatHistory((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      console.error(err);
      setDisplayedMessages((prev) => [...prev.slice(0, -1), "🤖 Une erreur est survenue."]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-lg mx-auto mt-10">
      <h2 className="text-lg font-bold mb-2">💬 ÉléganceBot</h2>
      <div className="h-64 overflow-y-auto border p-2 mb-3 text-sm rounded">
        {displayedMessages.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
        {loading && <div>⏳ Réflexion en cours...</div>}
      </div>
      <input
        type="text"
        className="w-full border px-3 py-2 rounded mb-2"
        placeholder="Posez votre question sur les costumes, les matières ou l’entretien..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
      />
      <button
        className="w-full bg-black text-white py-2 rounded"
        onClick={sendMessage}
      >
        Envoyer
      </button>
    </div>
  );
};

export default Chatbot;