import React from 'react';
import { Link } from 'react-router-dom';

function ThankYou() {
  return (
    <div className="container mx-auto py-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Thank You for Your Order!</h2>
      <p className="mb-4">Your order has been received and is being processed.</p>
      <Link
        to="/"
        className="inline-block bg-primary text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  );
}

export default ThankYou;