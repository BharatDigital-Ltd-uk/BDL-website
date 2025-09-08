import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';
import BottomNavbar from './components/BottomNavbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Career from './pages/Career';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import DigitalMarketing from './pages/DigitalMarketing';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import ITSupport from './pages/ITSupport';
import SocialMedia from './pages/SocialMedia';
import CADServices from './pages/CADServices';
import NotFound from './pages/NotFound'; // ⬅️ Import the 404 page

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <MobileNavbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/website-development" element={<WebsiteDevelopment />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/software-development" element={<SoftwareDevelopment />} />
        <Route path="/it-support" element={<ITSupport />} />
        <Route path="/social-media" element={<SocialMedia />} />
        <Route path="/cad-services" element={<CADServices />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/about" element={<About />} />

        {/* Catch-all route for invalid URLs */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <BottomNavbar />
    </Router>
  );
};

export default App;


//check for github