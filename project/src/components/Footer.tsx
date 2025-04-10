import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">L'Élégance</h3>
            <p className="text-gray-400">Votre destination pour le sur-mesure et l'élégance masculine.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Accueil</Link></li>
              <li><Link to="/collections" className="text-gray-400 hover:text-white">Collections</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white">Notre Équipe</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center"><Phone className="h-4 w-4 mr-2" /> +33 1 23 45 67 89</li>
              <li className="flex items-center"><Mail className="h-4 w-4 mr-2" /> contact@elegance.fr</li>
              <li className="flex items-center"><MapPin className="h-4 w-4 mr-2" /> 123 Rue de la Mode, Paris</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 L'Élégance. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;