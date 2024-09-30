'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';

function OneNewArrivals() {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(3);

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then(response => {
        const filteredProducts = response.data.filter(product => 
          product.images && product.images.length > 0 && product.images[0] !== ''
        );
        setProducts(filteredProducts);
      })
      .catch(error => {
        console.error('Error fetching the products:', error);
      });
  }, []);

  const handleLoadMore = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 3);
  };

  return (
    <section className="py-16 text-center">
      <h3 className="text-2xl font-bold mb-10">New Arrivals</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {products.slice(0, visibleProducts).map(product => (
          <div key={product.id} className="relative bg-gray-300">
            <img src={product.images[0]} alt={product.title} className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white text-lg font-bold">{product.title}</span>
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold">{product.title}</h4>
              <p className="text-gray-700">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      {visibleProducts < products.length && (
        <button onClick={handleLoadMore} className="mt-10 px-8 py-3 border-2 border-black font-bold">View More</button>
      )}
    </section>
  );
}

export default OneNewArrivals;