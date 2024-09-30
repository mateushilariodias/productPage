'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Definindo o tipo de Produto
interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

function TwoNewArrivals() {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleItems, setVisibleItems] = useState(6); // Exibe 6 produtos inicialmente (2 linhas de 3)

  useEffect(() => {
    axios.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .then(response => {
        // Filtra produtos que têm ao menos uma imagem
        const productsWithImages = response.data.filter(product => product.images.length > 0);
        setProducts(productsWithImages);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const loadMoreItems = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 6); // Carrega mais 6 produtos ao clicar
  };

  return (
    <section>
      <article className="py-16 text-center">
        <h3 className="text-2xl font-bold mb-10">New Arrivals</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {products.slice(0, visibleItems).map(product => (
            <div key={product.id} className="relative bg-gray-300">
              <img src={product.images[0]} alt={product.title} className="w-full h-64 object-cover" />

              <div className="p-4">
                <h4 className="text-lg font-semibold">{product.title}</h4>
                <p className="text-gray-700">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
        {visibleItems < products.length && (
          <button onClick={loadMoreItems} className="mt-10 px-8 py-3 border-2 border-black font-bold">View More</button>
        )}
      </article>
      <article className="py-16 text-center bg-gray-100">
        <div className="flex justify-around items-center px-6">
          <div className="bg-gray-300 h-20 w-20 rounded-full flex items-center justify-center">Secured Payments</div>
          <div className="bg-gray-300 h-20 w-20 rounded-full flex items-center justify-center">Free Shipping and Returns</div>
          <div className="bg-gray-300 h-20 w-20 rounded-full flex items-center justify-center">24/7 Customer Service</div>
        </div>
      </article>
    </section>
  );
}

export default TwoNewArrivals;