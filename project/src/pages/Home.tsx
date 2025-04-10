import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MeasurementForm } from './Collections';

const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const handleItemClick = (item, type) => {
    setSelectedItem(item);
    setSelectedType(type);
  };

  return (
    <div className="-mt-28">
      {/* Hero Section with Parallax */}
      <div className="relative h-[80vh] bg-fixed bg-cover bg-center" 
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-serif mb-4">L'Art du Sur-Mesure</h1>
            <p className="text-xl">Découvrez l'excellence de la haute couture masculine</p>
          </div>
        </div>
      </div>

      {/* Top Sales Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-center mb-12">Nos Meilleures Ventes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Top Sale Item 1 */}
            <div 
              className="group relative cursor-pointer"
              onClick={() => handleItemClick({
                name: "Costume Italien Sur Mesure",
                price: "À partir de 899€",
                image: "https://cdn-ikphffh.nitrocdn.com/GWUuScvGYPUNvPxZNmIksnyPPRnupQxe/assets/images/optimized/rev-1107fec/tailortrucks.com/wp-content/uploads/2024/12/csotume-gris-anthracite-moderne-peaky-blinders-645x800.jpg"
              }, 'suit')}
            >
              <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
                <img 
                  src="https://cdn-ikphffh.nitrocdn.com/GWUuScvGYPUNvPxZNmIksnyPPRnupQxe/assets/images/optimized/rev-1107fec/tailortrucks.com/wp-content/uploads/2024/12/csotume-gris-anthracite-moderne-peaky-blinders-645x800.jpg" 
                  alt="Costume Italien"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">Costume Italien Sur Mesure</h3>
                <p className="text-gray-600">À partir de 899€</p>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <button className="mt-2 text-indigo-600 hover:text-indigo-800">
                  Personnaliser →
                </button>
              </div>
            </div>

            {/* Top Sale Item 2 */}
            <div 
              className="group relative cursor-pointer"
              onClick={() => handleItemClick({
                name: "Mocassin",
                price: "795€",
                image: "https://eu.jmweston.com/cdn/shop/products/11411011801FF_2000x2000_crop_center@2x.png?v=1629153927"
              }, 'shoes')}
            >
              <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
                <img 
                  src="https://eu.jmweston.com/cdn/shop/products/11411011801FF_2000x2000_crop_center@2x.png?v=1629153927" 
                  alt="Mocassin"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">Mocassin</h3>
                <p className="text-gray-600">795€</p>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <button className="mt-2 text-indigo-600 hover:text-indigo-800">
                  Personnaliser →
                </button>
              </div>
            </div>

            {/* Top Sale Item 3 */}
            <div 
              className="group relative cursor-pointer"
              onClick={() => handleItemClick({
                name: "Costume Écossais",
                price: "À partir de 799€",
                image: "https://marceletmaurice.fr/38916-large_default/selected-veste-costume-bleu-marine-slim-fit.jpg"
              }, 'suit')}
            >
              <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
                <img 
                  src="https://marceletmaurice.fr/38916-large_default/selected-veste-costume-bleu-marine-slim-fit.jpg" 
                  alt="Costume Bleu Marine"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">Costume Bleu Marine</h3>
                <p className="text-gray-600">À partir de 799€</p>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <button className="mt-2 text-indigo-600 hover:text-indigo-800">
                  Personnaliser →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedItem && (
        <MeasurementForm
          item={selectedItem}
          type={selectedType}
          onClose={() => {
            setSelectedItem(null);
            setSelectedType(null);
          }}
        />
      )}
    </div>
  );
};

export default Home;