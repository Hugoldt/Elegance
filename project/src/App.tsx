import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PromoBar from './components/PromoBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Chatbot from './components/Chatbot';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <PromoBar />
        <div className="h-8"></div>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections/*" element={<Collections />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />

        
        <div className="fixed bottom-6 right-6 z-50">
          {isChatOpen ? (
            <div className="relative">
              <button
                onClick={() => setIsChatOpen(false)}
                className="absolute -top-4 -right-4 bg-red-500 text-white w-8 h-8 rounded-full shadow-md"
              >
                ✕
              </button>
              <Chatbot />
            </div>
          ) : (
            <button
              onClick={() => setIsChatOpen(true)}
              className="bg-black text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl shadow-lg hover:scale-105 transition"
              title="Discuter avec ÉléganceBot"
            >
              💬
            </button>
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
