import React from 'react';

function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
        <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
        <p className="mb-4">{product.description}</p>
        <div className="flex justify-between">
          <button
            onClick={() => onAddToCart(product)}
            className="bg-primary text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors"
          >
            Add to Cart
          </button>
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;