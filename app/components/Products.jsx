"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [numToShow, setNumToShow] = useState(8);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const handleShowMore = () => {
    setShowMore(true);
    setNumToShow(products.length);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.slice(0, numToShow).map((product, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link href={`/product/${encodeURIComponent(product.id)}`}>
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={product.images[0]}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    {product.brand}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {product.title}
                  </h2>
                  <p className="mt-1">${product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {!showMore && products.length > 8 && (
          <div className="flex justify-center mt-4">
            <button
              onClick={handleShowMore}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-full"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
