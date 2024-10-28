import React from 'react';
import { Link } from 'react-router-dom';
import { useShopContext } from '../context/ShopContext';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useShopContext();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item.id} className="py-4 flex flex-wrap justify-between items-center">
                <div className="w-full sm:w-auto mb-2 sm:mb-0 flex items-center gap-4">
                  <div className="w-20 h-20 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                    <img
                      src={item.image || `https://picsum.photos/300/200?random=${item.id}`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://picsum.photos/300/200?random=${item.id}`;
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="bg-gray-200 px-2 py-1 rounded-l hover:bg-gray-300 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="bg-gray-100 px-4 py-1">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="bg-gray-200 px-2 py-1 rounded-r hover:bg-gray-300 transition-colors"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 transition-colors mt-2 sm:mt-0"
                  aria-label={`Remove ${item.name} from cart`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <h3 className="text-xl font-semibold">Total: ${total.toFixed(2)}</h3>
            <Link
              to="/checkout"
              className="mt-4 inline-block bg-primary text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;