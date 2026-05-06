/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './lib/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Biography from './pages/Biography';
import Journey from './pages/Journey';
import Music from './pages/Music';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import PageTransition from './components/PageTransition';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <PageTransition>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biographie" element={<Biography />} />
        <Route path="/parcours" element={<Journey />} />
        <Route path="/musique" element={<Music />} />
        <Route path="/galerie" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </PageTransition>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col selection:bg-amber-2 selection:text-ink" translate="no">
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}
