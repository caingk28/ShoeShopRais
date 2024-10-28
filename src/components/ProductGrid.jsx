import React, { useState, useEffect } from 'react';
import { useShopContext } from '../context/ShopContext';
import ProductModal from './ProductModal';
import ProductCard from './ProductCard';

function ProductGrid() {
  const { addToCart } = useShopContext();
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState('name');
  const [filterCategory, setFilterCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('/api/products')
      .then(response => {
        if (!response.ok) {
          return response.text().then(text => {
            throw new Error(`HTTP error! status: ${response.status}, body: ${text}`);
          });
        }
        return response.json();
      })
      .then(data => {
        console.log('Received data:', data);
        setProducts(data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const sortProducts = (products) => {
    return [...products].sort((a, b) => {
      if (sortOption === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortOption === 'price_asc') {
        return a.price - b.price;
      } else if (sortOption === 'price_desc') {
        return b.price - a.price;
      }
      return 0;
    });
  };

  const filterProducts = (products) => {
    if (filterCategory === 'all') {
      return products;
    }
    return products.filter(product => product.category === filterCategory);
  };

  // Memoize the displayed products to avoid unnecessary re-renders
  const displayProducts = React.useMemo(() => {
    return sortProducts(filterProducts(products));
  }, [products, sortOption, filterCategory]);

  return (
    <div className="container mx-auto py-8">
      <div className="mb-4 flex justify-between">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="name">Sort by Name</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
        </select>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="all">All Categories</option>
          <option value="clothing">Clothing</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={(product) => {
            addToCart(product);
            setSelectedProduct(null);
          }}
        />
      )}
    </div>
  );
}

export default ProductGrid;