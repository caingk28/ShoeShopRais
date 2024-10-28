import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ThankYou from './components/ThankYou';
import Footer from './components/Footer';
import { ShopProvider } from './context/ShopContext';




function App() {
  return (
    <ShopProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow bg-gray-100">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductGrid />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
<Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} /> 
              <Route path="/thank-you" element={<ThankYou />} />
              
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ShopProvider>
  );
}

export default App;