import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const fabricOptions = {
  "Laine Super 120": {
    description: "Tissu raffiné et léger, parfait pour un usage quotidien",
    price: 0,
    colors: [
      { 
        name: "Noir", 
        overlay: "bg-black",
        image: "https://d1fufvy4xao6k9.cloudfront.net/feed/img/man_suit2/215653/2021_SS_tamano_0026__0000s_0018_278A8623-3_sw.webp"
      },
      { 
        name: "Bleu Marine", 
        overlay: "bg-blue-900",
        image: "https://d1fufvy4xao6k9.cloudfront.net/feed/img/man_suit2/10627/1.png"
      },
      { 
        name: "Gris Anthracite", 
        overlay: "bg-gray-700",
        image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&q=80"
      },
      { 
        name: "Bleu Royal", 
        overlay: "bg-blue-600",
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80"
      }
    ]
  },
  "Laine Super 150": {
    description: "Qualité supérieure avec un toucher soyeux",
    price: 200,
    colors: [
      { 
        name: "Noir", 
        overlay: "bg-black",
        image: "https://images.unsplash.com/photo-1594938374182-a557760e8b32?auto=format&fit=crop&q=80"
      },
      { 
        name: "Bleu Marine", 
        overlay: "bg-blue-900",
        image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80"
      },
      { 
        name: "Gris Perle", 
        overlay: "bg-gray-300",
        image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&q=80"
      },
      { 
        name: "Bordeaux", 
        overlay: "bg-red-900",
        image: "https://images.unsplash.com/photo-1598808503800-905293324152?auto=format&fit=crop&q=80"
      }
    ]
  },
  "Cachemire": {
    description: "Le summum du luxe et du confort",
    price: 500,
    colors: [
      { 
        name: "Noir", 
        overlay: "bg-black",
        image: "https://images.unsplash.com/photo-1594938374182-a557760e8b32?auto=format&fit=crop&q=80"
      },
      { 
        name: "Bleu Nuit", 
        overlay: "bg-blue-950",
        image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80"
      },
      { 
        name: "Gris Charbon", 
        overlay: "bg-gray-800",
        image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&q=80"
      },
      { 
        name: "Brun", 
        overlay: "bg-amber-900",
        image: "https://images.unsplash.com/photo-1598808503800-905293324152?auto=format&fit=crop&q=80"
      }
    ]
  }
};

const leatherOptions = {
  "Cuir de Veau": {
    description: "Doux et souple, parfait pour un confort quotidien",
    price: 0,
    colors: [
      {
        name: "Noir",
        overlay: "bg-black",
        image: "https://www.cuirnaturel.com/6717/cuir-de-veau-grain-naturel-noir.jpg"
      },
      {
        name: "Marron Foncé",
        overlay: "bg-amber-900",
        image: "https://www.cuirnaturel.com/6595/cuir-d-agneau-bubble-pull-up-tannage-vegetal-marron-fonce.jpg"
      },
      {
        name: "Bordeaux",
        overlay: "bg-red-900",
        image: "https://www.cuirnaturel.com/6636/cuir-de-veau-graine-rouge-bordeaux.jpg"
      }
    ]
  },
  "Cuir Box": {
    description: "Élégant et résistant, idéal pour les chaussures habillées",
    price: 100,
    colors: [
      {
        name: "Bleu",
        overlay: "bg-blue-800",
        image: "https://www.cuirnaturel.com/6981/cuir-de-veau-petit-grain-bleu-marine.jpg"
      },
      {
        name: "Cognac",
        overlay: "bg-amber-700",
        image: "https://www.tendance-cuir.fr/pub/Photos_produits/Capiton/Lisse/simili-cuir-capiton-lisse-cognac.jpg"
      },
      {
        name: "Chocolat",
        overlay: "bg-amber-950",
        image: "https://cdn3.tissus-price.com/266401-large_default/coupon-40cm-simili-cuir-dolaro-chocolat.jpg"
      }
    ]
  },
  "Cuir Chêvre": {
    description: "Le plus noble des cuirs, brillance et durabilité exceptionnelles",
    price: 300,
    colors: [
      {
        name: "Noir",
        overlay: "bg-black",
        image: "https://www.cuirnaturel.com/5635/cuir-de-chevre-grain-naturel-noir.jpg"
      },
      {
        name: "Rouge",
        overlay: "bg-red-600",
        image: "https://www.cuirnaturel.com/8804/cuir-de-chevre-liege-rouge-rose.jpg"
      },
      {
        name: "Acajou",
        overlay: "bg-red-900",
        image: "https://www.cuirnaturel.com/1520-large_default/cuir-de-collet-tannage-vegetal-brun-acajou.webp"
      }
    ]
  }
};

const MeasurementForm = ({ item, type, onClose }) => {
  const [step, setStep] = useState(1);
  const options = type === 'suit' ? fabricOptions : leatherOptions;
  const [customization, setCustomization] = useState({
    material: Object.keys(options)[0],
    color: options[Object.keys(options)[0]].colors[0].name,
    fit: "Classic",
    preferences: {
      style: "Business",
      occasion: "Quotidien",
      notes: ""
    }
  });
  const [measurements, setMeasurements] = useState({
    height: '',
    weight: '',
    waist: '',
    chest: '',
    shoulders: '',
    footLength: '',
    footWidth: '',
    shoeSize: ''
  });

  const basePrice = parseInt(item.price.match(/\d+/)[0]);
  const materialPrice = options[customization.material].price;
  const totalPrice = basePrice + materialPrice;

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `
Bonjour, je suis intéressé par ${item.name}.

Personnalisation :
- ${type === 'suit' ? 'Tissu' : 'Cuir'} : ${customization.material}
- Couleur : ${customization.color}
${type === 'suit' ? `- Coupe : ${customization.fit}` : ''}
- Style : ${customization.preferences.style}
- Occasion : ${customization.preferences.occasion}
- Notes : ${customization.preferences.notes}

Mensurations :
${type === 'suit' ? `- Taille : ${measurements.height}cm
- Poids : ${measurements.weight}kg
- Tour de taille : ${measurements.waist}cm
- Tour de poitrine : ${measurements.chest}cm
- Largeur d'épaules : ${measurements.shoulders}cm` : 
`- Pointure : ${measurements.shoeSize}
- Longueur du pied : ${measurements.footLength}cm
- Largeur du pied : ${measurements.footWidth}cm`}

Prix estimé : ${totalPrice}€
`;
    
    window.location.href = `mailto:contact@elegance.fr?subject=Demande de devis pour ${item.name}&body=${encodeURIComponent(message)}`;
  };

  const selectedColor = options[customization.material].colors.find(c => c.name === customization.color);

  const renderPreview = () => (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-6">
      <img 
        src={selectedColor.image}
        alt={item.name}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
        <p className="text-white font-medium">Prix estimé: {totalPrice}€</p>
        <p className="text-white text-sm">
          {customization.material} - {customization.color}
        </p>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start">
          <div className="w-1/2 pr-8">
            <h3 className="text-2xl font-serif mb-6">Personnalisation de {item.name}</h3>
            {step === 1 ? (
              <>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {type === 'suit' ? 'Tissu' : 'Cuir'}
                    </label>
                    <select
                      value={customization.material}
                      onChange={(e) => {
                        const newMaterial = e.target.value;
                        setCustomization({
                          ...customization,
                          material: newMaterial,
                          color: options[newMaterial].colors[0].name
                        });
                      }}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                      {Object.entries(options).map(([name, details]) => (
                        <option key={name} value={name}>
                          {name} (+{details.price}€)
                        </option>
                      ))}
                    </select>
                    <p className="mt-1 text-sm text-gray-500">
                      {options[customization.material].description}
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Couleur</label>
                    <div className="grid grid-cols-2 gap-2">
                      {options[customization.material].colors.map((color) => (
                        <button
                          key={color.name}
                          onClick={() => setCustomization({...customization, color: color.name})}
                          className={`p-2 rounded-md text-left flex items-center space-x-2 ${
                            customization.color === color.name
                              ? 'bg-indigo-100 border-indigo-500'
                              : 'border-gray-200 hover:bg-gray-50'
                          } border`}
                        >
                          <div className={`w-6 h-6 rounded-full ${color.overlay}`}></div>
                          <span>{color.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {type === 'suit' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Coupe</label>
                      <div className="grid grid-cols-3 gap-2">
                        {['Classic', 'Slim', 'Modern'].map((fit) => (
                          <button
                            key={fit}
                            onClick={() => setCustomization({...customization, fit})}
                            className={`p-2 rounded-md ${
                              customization.fit === fit
                                ? 'bg-indigo-100 border-indigo-500'
                                : 'border-gray-200 hover:bg-gray-50'
                            } border`}
                          >
                            {fit}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Style</label>
                    <select
                      value={customization.preferences.style}
                      onChange={(e) => setCustomization({
                        ...customization,
                        preferences: {...customization.preferences, style: e.target.value}
                      })}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                      {['Business', 'Casual', 'Cérémonie', 'Soirée'].map((style) => (
                        <option key={style} value={style}>{style}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Occasion</label>
                    <select
                      value={customization.preferences.occasion}
                      onChange={(e) => setCustomization({
                        ...customization,
                        preferences: {...customization.preferences, occasion: e.target.value}
                      })}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                      {['Quotidien', 'Mariage', 'Business', 'Événement Spécial'].map((occasion) => (
                        <option key={occasion} value={occasion}>{occasion}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Notes particulières</label>
                    <textarea
                      value={customization.preferences.notes}
                      onChange={(e) => setCustomization({
                        ...customization,
                        preferences: {...customization.preferences, notes: e.target.value}
                      })}
                      rows={3}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Précisez vos préférences spécifiques..."
                    />
                  </div>
                </div>

                <div className="flex space-x-4 mt-6">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    Continuer
                  </button>
                  <button
                    onClick={onClose}
                    className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
                  >
                    Fermer
                  </button>
                </div>
              </>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {type === 'suit' ? (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Taille (cm)</label>
                      <input
                        type="number"
                        value={measurements.height}
                        onChange={(e) => setMeasurements({...measurements, height: e.target.value})}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        required
                        min="140"
                        max="220"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Poids (kg)</label>
                      <input
                        type="number"
                        value={measurements.weight}
                        onChange={(e) => setMeasurements({...measurements, weight: e.target.value})}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        required
                        min="40"
                        max="200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Tour de taille (cm)</label>
                      <input
                        type="number"
                        value={measurements.waist}
                        onChange={(e) => setMeasurements({...measurements, waist: e.target.value})}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        required
                        min="60"
                        max="150"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Tour de poitrine (cm)</label>
                      <input
                        type="number"
                        value={measurements.chest}
                        onChange={(e) => setMeasurements({...measurements, chest: e.target.value})}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        required
                        min="80"
                        max="150"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Largeur d'épaules (cm)</label>
                      <input
                        type="number"
                        value={measurements.shoulders}
                        onChange={(e) => setMeasurements({...measurements, shoulders: e.target.value})}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        required
                        min="35"
                        max="60"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Pointure (EU)</label>
                      <input
                        type="number"
                        value={measurements.shoeSize}
                        onChange={(e) => setMeasurements({...measurements, shoeSize: e.target.value})}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        required
                        min="35"
                        max="50"
                        step="0.5"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Longueur du pied (cm)</label>
                      <input
                        type="number"
                        value={measurements.footLength}
                        onChange={(e) => setMeasurements({...measurements, footLength: e.target.value})}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        required
                        min="22"
                        max="35"
                        step="0.5"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Largeur du pied (cm)</label>
                      <input
                        type="number"
                        value={measurements.footWidth}
                        onChange={(e) => setMeasurements({...measurements, footWidth: e.target.value})}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        required
                        min="7"
                        max="15"
                        step="0.5"
                      />
                    </div>
                  </>
                )}
                <div className="flex space-x-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors"
                  >
                    Retour
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                  >
                    Demander un devis
                  </button>
                </div>
              </form>
            )}
          </div>
          <div className="w-1/2 pl-8 border-l">
            {renderPreview()}
            <div className="prose prose-sm">
              <h4 className="font-medium">Pourquoi venir en boutique ?</h4>
              <ul className="text-sm text-gray-600 list-disc pl-4 space-y-2">
                {type === 'suit' ? (
                  <>
                    <li>Prise de mesures professionnelle pour une coupe impeccable</li>
                    <li>Conseil personnalisé sur le choix des tissus et des finitions</li>
                    <li>Visualisation des tissus et des couleurs en conditions réelles</li>
                    <li>Expertise de nos maîtres tailleurs à votre service</li>
                  </>
                ) : (
                  <>
                    <li>Mesure précise de vos pieds par nos experts</li>
                    <li>Essayage de différentes formes pour un confort optimal</li>
                    <li>Conseil sur le choix des cuirs et des finitions</li>
                    <li>Expertise de nos artisans bottiers à votre service</li>
                  </>
                )}
              </ul>
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
                  onClick={onClose}
                >
                  Prendre rendez-vous en boutique →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StoreVisitCTA = () => (
  <div className="bg-gray-50 py-12 px-4 mt-12">
    <div className="max-w-3xl mx-auto text-center">
      <h3 className="text-2xl font-serif mb-4">Visitez Notre Boutique</h3>
      <p className="text-gray-600 mb-6">
        Pour une expérience personnalisée et des mesures précises, venez nous rencontrer dans notre boutique au cœur de Paris.
        Nos experts sont là pour vous conseiller et vous garantir un costume parfaitement ajusté.
      </p>
      <Link
        to="/contact"
        className="inline-block bg-black text-white py-3 px-6 rounded-md hover:bg-gray-900 transition-colors"
      >
        Prendre Rendez-vous
      </Link>
    </div>
  </div>
);

const CollectionsHome = () => (
  <div className="py-16 px-4 mt-28">
    <h1 className="text-4xl font-serif text-center mb-12">Nos Collections</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
      <Link to="/collections/shoes" className="relative group">
        <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80" 
            alt="Chaussures"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:opacity-75 transition-opacity"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-3xl text-white font-serif">Chaussures</h2>
          </div>
        </div>
      </Link>
      <Link to="/collections/suits" className="relative group">
        <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80" 
            alt="Costumes"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:opacity-75 transition-opacity"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-3xl text-white font-serif">Costumes</h2>
          </div>
        </div>
      </Link>
    </div>
    <StoreVisitCTA />
  </div>
);

const Shoes = () => {
  const [selectedShoe, setSelectedShoe] = useState(null);
  
  const shoes = [
    {
      name: "RIchelieu",
      price: "995€",
      image: "https://eu.jmweston.com/cdn/shop/files/11U7FRX3651CF_2000x2000_crop_center@2x.png?v=1727784993"
    },
    {
      name: "Derby",
      price: "695€",
      image: "https://eu.jmweston.com/cdn/shop/products/1131FEW6412AF_2000x2000_crop_center@2x.png?v=1629280572"
    },
    {
      name: "Mocassin",
      price: "795€",
      image: "https://eu.jmweston.com/cdn/shop/products/11411011801FF_1800x1800_crop_center.png?v=1629153927"
    }
  ];

  return (
    <div className="py-16 px-4 mt-28">
      <h2 className="text-4xl font-serif text-center mb-12">Collection Chaussures</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {shoes.map((shoe, index) => (
          <div key={index} className="group cursor-pointer" onClick={() => setSelectedShoe(shoe)}>
            <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
              <img 
                src={shoe.image} 
                alt={shoe.name}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-lg font-medium">{shoe.name}</h3>
            <p className="text-gray-600">{shoe.price}</p>
            <button
              className="mt-2 text-indigo-600 hover:text-indigo-800"
            >
              Personnaliser →
            </button>
          </div>
        ))}
      </div>
      {selectedShoe && (
        <MeasurementForm
          item={selectedShoe}
          type="shoes"
          onClose={() => setSelectedShoe(null)}
        />
      )}
      <StoreVisitCTA />
    </div>
  );
};

const Suits = () => {
  const [selectedSuit, setSelectedSuit] = useState(null);
  
  const suits = [
    {
      name: "Costume Italien Sur Mesure",
      price: "À partir de 899€",
      image: "https://cdn-ikphffh.nitrocdn.com/GWUuScvGYPUNvPxZNmIksnyPPRnupQxe/assets/images/optimized/rev-1107fec/tailortrucks.com/wp-content/uploads/2024/12/csotume-gris-anthracite-moderne-peaky-blinders-645x800.jpg"
    },
    {
      name: "Costume Écossais",
      price: "À partir de 799€",
      image: "https://marceletmaurice.fr/38916-large_default/selected-veste-costume-bleu-marine-slim-fit.jpg"
    },
    {
      name: "Smoking Noir",
      price: "À partir de 999€",
      image: "https://www.max-martins.fr/wp-content/uploads/2021/04/Smoking-Noir-motifs-stand.jpg"
    }
  ];

  return (
    <div className="py-16 px-4 mt-28">
      <h2 className="text-4xl font-serif text-center mb-12">Collection Costumes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {suits.map((suit, index) => (
          <div key={index} className="group cursor-pointer" onClick={() => setSelectedSuit(suit)}>
            <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
              <img 
                src={suit.image} 
                alt={suit.name}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-lg font-medium">{suit.name}</h3>
            <p className="text-gray-600">{suit.price}</p>
            <button
              className="mt-2 text-indigo-600 hover:text-indigo-800"
            >
              Personnaliser →
            </button>
          </div>
        ))}
      </div>
      {selectedSuit && (
        <MeasurementForm
          item={selectedSuit}
          type="suit"
          onClose={() => setSelectedSuit(null)}
        />
      )}
      <StoreVisitCTA />
    </div>
  );
};

const Collections = () => {
  return (
    <Routes>
      <Route index element={<CollectionsHome />} />
      <Route path="shoes" element={<Shoes />} />
      <Route path="suits" element={<Suits />} />
    </Routes>
  );
};

export default Collections;
export { MeasurementForm };