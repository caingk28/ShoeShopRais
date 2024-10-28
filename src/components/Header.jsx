import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShopContext } from '../context/ShopContext';

function Header() {
  const { cartItems, removeFromCart } = useShopContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const timeoutRef = useRef(null);
  const cartRef = useRef(null);

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsCartOpen(true);
    }, 300); // Reduced delay for better responsiveness
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsCartOpen(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-primary text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <h1 className="text-2xl font-bold mb-2 md:mb-0">Fashonique</h1>
        
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        <nav className={`w-full md:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
          <ul className="flex flex-col md:flex-row md:space-x-6">
            <li><Link to="/" className="hover:text-accent transition-colors py-2 px-3 block">Home</Link></li>
            <li><Link to="/products" className="hover:text-accent transition-colors py-2 px-3 block">Products</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-colors py-2 px-3 block">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors py-2 px-3 block">Contact</Link></li>
          </ul>
          <form onSubmit={handleSearch} className="flex mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-2 py-1 rounded-l text-black w-full md:w-auto"
            />
            <button type="submit" className="bg-accent text-primary px-3 py-1 rounded-r hover:bg-opacity-90 transition-colors">
              Search
            </button>
          </form>
        </nav>

        <div 
          ref={cartRef}
          className="flex items-center relative ml-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button className="hover:text-accent transition-colors relative" aria-label="Cart">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemCount}
              </span>
            )}
          </button>
          {isCartOpen && (
            <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-md shadow-xl z-20">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Your Cart</h3>
                {cartItems.length === 0 ? (
                  <p className="text-gray-600">Your cart is empty</p>
                ) : (
                  <>
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">{item.name} x {item.quantity}</span>
                        <span className="text-sm font-semibold text-gray-800">${(item.price * item.quantity).toFixed(2)}</span>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-xs hover:text-red-700 transition-colors">Remove</button>
                      </div>
                    ))}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-800">Total:</span>
                        <span className="font-bold text-gray-800">${cartTotal.toFixed(2)}</span>
                      </div>
                    </div>
                    <Link to="/cart" className="block w-full text-center bg-primary text-white py-2 px-4 rounded mt-4 hover:bg-opacity-90 transition-colors">
                      View Cart
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;