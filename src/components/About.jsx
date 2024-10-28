import React from 'react';

function About() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">About Fashonique</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-primary">Our Story</h3>
          <p className="text-gray-700">
            Founded in 2023, Fashonique is your destination for modern, 
            sustainable fashion. We believe in providing high-quality clothing 
            that doesn't compromise on style or environmental responsibility.
          </p>
          
          <h3 className="text-xl font-semibold text-primary mt-6">Our Mission</h3>
          <p className="text-gray-700">
            We strive to make fashion accessible while maintaining our commitment 
            to ethical manufacturing and sustainable practices. Every piece in our 
            collection is carefully selected to ensure both quality and style.
          </p>
        </div>
        
        <div className="bg-accent p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Why Choose Us?</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="bg-primary text-white p-2 rounded-full mr-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Sustainable Materials
            </li>
            <li className="flex items-center">
              <span className="bg-primary text-white p-2 rounded-full mr-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Ethical Manufacturing
            </li>
            <li className="flex items-center">
              <span className="bg-primary text-white p-2 rounded-full mr-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Quality Assurance
            </li>
            <li className="flex items-center">
              <span className="bg-primary text-white p-2 rounded-full mr-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Customer-First Approach
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;