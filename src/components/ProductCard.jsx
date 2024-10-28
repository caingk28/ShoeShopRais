import React, { useState } from 'react';
import { useShopContext } from '../context/ShopContext';

function ProductCard({ product }) {
  const { addToCart } = useShopContext();
  const [imageError, setImageError] = useState(false);

  // Generate a placeholder image URL using Picsum
  const placeholderImage = `https://picsum.photos/300/200?random=${product.id}`;

  // Use the product's image if available, otherwise use the placeholder
  const imageUrl = imageError ? placeholderImage : (product.image || placeholderImage);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
        <img 
          src={imageUrl}
          alt={product.name} 
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
        <button 
          className="w-full bg-primary text-white py-2 rounded hover:bg-opacity-90 transition-colors"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;