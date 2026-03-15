import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import VirtuellAssistans from './pages/VirtuellAssistans';
import AiAutomatisering from './pages/AiAutomatisering';
import DigitalMarknadsforing from './pages/DigitalMarknadsforing';
import Webbplatser from './pages/Webbplatser';
import Varumarke from './pages/Varumarke';
import OmOss from './pages/OmOss';
import { Toaster } from './components/ui/toaster';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/virtuellassistans" element={<VirtuellAssistans />} />
          <Route path="/aiautomatisering" element={<AiAutomatisering />} />
          <Route path="/digitalmarknadsforing" element={<DigitalMarknadsforing />} />
          <Route path="/webbplatser" element={<Webbplatser />} />
          <Route path="/varumarke" element={<Varumarke />} />
          <Route path="/omoss" element={<OmOss />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;