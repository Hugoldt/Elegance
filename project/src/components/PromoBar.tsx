import React from 'react';
import { Link } from 'react-router-dom';

const PromoBar = () => {
  return (
    <div className="bg-black text-white py-2 text-center text-sm fixed top-0 left-0 right-0 z-50">
      <p>
        Offre spéciale: -20% sur votre première commande sur mesure -{' '}
        <Link to="/contact" className="underline hover:text-gray-300">
          Prenez rendez-vous en boutique
        </Link>
      </p>
    </div>
  );
};

export default PromoBar;