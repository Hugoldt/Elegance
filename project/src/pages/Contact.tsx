import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Marker = () => (
  <div className="text-red-600">
    <MapPin className="h-8 w-8 -mt-8 -ml-4" />
  </div>
);

const Contact = () => {
  const defaultProps = {
    center: {
      lat: 48.8738,
      lng: 2.3427
    },
    zoom: 16
  };

  return (
    <div className="py-16 mt-28">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-serif text-center mb-12">Contactez-nous</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-serif mb-6">Nos Coordonnées</h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-indigo-600 mr-3" />
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-gray-600">40 Boulevard Haussmann</p>
                    <p className="text-gray-600">75009 Paris, France</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-indigo-600 mr-3" />
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-indigo-600 mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">contact@elegance.fr</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="h-64 w-full mt-8 rounded-lg overflow-hidden">
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "" }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                >
                  <Marker
                    lat={defaultProps.center.lat}
                    lng={defaultProps.center.lng}
                  />
                </GoogleMapReact>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-serif mb-6">Envoyez-nous un message</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;