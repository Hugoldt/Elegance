import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scissors } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const isHomePage = location.pathname === '/';
  const shouldBeTransparent = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        const heroHeight = window.innerHeight * 0.8;
        setIsScrolled(window.scrollY > heroHeight - 80);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  return (
    <nav className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${
      shouldBeTransparent ? 'bg-transparent' : 'bg-black shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Scissors className="h-8 w-8 text-white" />
            <span className="text-2xl font-serif text-white">L'Élégance</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:opacity-75 transition-colors">
              Accueil
            </Link>
            <div className="relative group">
              <Link to="/collections" className="text-white hover:opacity-75 transition-colors">
                Collections
              </Link>
              <div className="absolute opacity-0 group-hover:opacity-100 w-48 bg-black shadow-lg py-2 mt-2 transition-all duration-500">
                <Link to="/collections/shoes" className="block px-4 py-2 text-white hover:bg-gray-900">
                  Chaussures
                </Link>
                <Link to="/collections/suits" className="block px-4 py-2 text-white hover:bg-gray-900">
                  Costumes
                </Link>
              </div>
            </div>
            <Link to="/team" className="text-white hover:opacity-75 transition-colors">
              Notre Équipe
            </Link>
            <Link to="/contact" className="text-white hover:opacity-75 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;