// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Hero Section with Background Image */}
      <section className="relative h-[600px] rounded-2xl overflow-hidden mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3")',
            filter: 'brightness(0.7)'
          }}
        ></div>
        <div className="relative h-full flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-6xl font-bold mb-6 animate-fadeIn">
            Step Into Style
          </h1>
          <p className="text-2xl mb-8 max-w-2xl">
            Discover our premium collection of trainers crafted for style, 
            comfort, and performance
          </p>
          <div className="space-x-4">
            <Link 
              to="/products" 
              className="bg-primary text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 font-semibold inline-block"
            >
              Shop Now
            </Link>
            <Link 
              to="/products" 
              className="bg-white text-primary px-8 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold inline-block"
            >
              Autumn Collection
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals Banner */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-secondary to-accent rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">New Autumn Arrivals</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Embrace the season with our latest collection featuring waterproof designs 
            and enhanced grip for autumn conditions
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/90 rounded-xl p-6 transform hover:-translate-y-2 transition-transform">
              <div className="text-primary text-4xl mb-4">🍂</div>
              <h3 className="text-xl font-bold mb-2">Waterproof Collection</h3>
              <p className="text-gray-600">Stay dry in style</p>
            </div>
            <div className="bg-white/90 rounded-xl p-6 transform hover:-translate-y-2 transition-transform">
              <div className="text-primary text-4xl mb-4">👟</div>
              <h3 className="text-xl font-bold mb-2">Enhanced Grip</h3>
              <p className="text-gray-600">Perfect for wet conditions</p>
            </div>
            <div className="bg-white/90 rounded-xl p-6 transform hover:-translate-y-2 transition-transform">
              <div className="text-primary text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Comfort Tech</h3>
              <p className="text-gray-600">All-day comfort guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold mb-6">Special Offers</h3>
            <ul className="space-y-6">
              <li className="flex items-center">
                <span className="bg-primary text-white p-2 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold">20% Student Discount</h4>
                  <p className="text-gray-600">Valid student ID required</p>
                </div>
              </li>
              <li className="flex items-center">
                <span className="bg-primary text-white p-2 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold">Free Shipping</h4>
                  <p className="text-gray-600">On orders over $100</p>
                </div>
              </li>
              <li className="flex items-center">
                <span className="bg-primary text-white p-2 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <h4 className="font-semibold">Autumn Sale</h4>
                  <p className="text-gray-600">Up to 30% off selected styles</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-primary rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-6">Newsletter</h3>
            <p className="mb-6">Subscribe to get special offers, free giveaways, and new arrival updates.</p>
            <form className="space-y-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 rounded-lg text-gray-900"
              />
              <button 
                type="submit" 
                className="w-full bg-white text-primary px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;