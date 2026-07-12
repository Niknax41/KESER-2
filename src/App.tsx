/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-cream-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Stubbing out other routes */}
            <Route path="/learn" element={<div className="pt-32 pb-20 text-center"><h1 className="text-4xl font-serif text-earth-800">Apprendre</h1></div>} />
            <Route path="/protocols" element={<div className="pt-32 pb-20 text-center"><h1 className="text-4xl font-serif text-earth-800">Protocoles</h1></div>} />
            <Route path="/products" element={<div className="pt-32 pb-20 text-center"><h1 className="text-4xl font-serif text-earth-800">Produits</h1></div>} />
            <Route path="/ingredients" element={<div className="pt-32 pb-20 text-center"><h1 className="text-4xl font-serif text-earth-800">Bibliothèque d'Ingrédients</h1></div>} />
            <Route path="/about" element={<div className="pt-32 pb-20 text-center"><h1 className="text-4xl font-serif text-earth-800">À propos</h1></div>} />
            <Route path="/journal" element={<div className="pt-32 pb-20 text-center"><h1 className="text-4xl font-serif text-earth-800">Journal</h1></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
