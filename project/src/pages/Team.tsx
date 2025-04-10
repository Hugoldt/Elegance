import React from 'react';

const Team = () => {
  const team = [
    {
      name: "Nino.T",
      role: "Maître Tailleur",
      image: "https://i.imgur.com/EhaWaMW.jpeg",
      description: "Plus de 20 ans d'expérience dans la confection de costumes sur mesure."
    },
    {
      name: "Paul Adrien.D",
      role: "Styliste",
      image: "https://i.imgur.com/w5VNTlA.jpeg",
      description: "Expert en tendances et conseils personnalisés pour nos clients."
    },
    {
      name: "Hugo.L",
      role: "Artisan Bottier",
      image: "https://i.imgur.com/b3N0gtV.png",
      description: "Spécialiste du travail du cuir et de la fabrication de chaussures sur mesure."
    },
    {
      name: "Antoine.C",
      role: "Responsable Client",
      image: "https://i.imgur.com/0zbq8Lh.png",
      description: "Votre interlocuteur privilégié pour un service personnalisé."
    }
  ];

  return (
    <div className="py-16 bg-gray-50 mt-28">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-serif text-center mb-4">Notre Équipe</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Une équipe d'experts passionnés à votre service pour créer vos tenues sur mesure.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative w-full h-[400px]">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-indigo-600 mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;