"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [numToShow, setNumToShow] = useState(4);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://dummyjson.com/products/category/smartphones')
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
      <div className="container  py-10 ">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Mobile Collection</h2>
        </header>
        <div  className="grid w-full  space-y-4 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">

          {products.slice(0, numToShow).map((product, index) => (
            <div
              key={index}
              className="relative aspect-[16/9]  w-auto rounded-md md:aspect-auto md:h-[400px] "
            >
              <Link href={`/product/${encodeURIComponent(product.id)}`}>
              <img
                src={product.images[0]}
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-md object-cover"
              />
              <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">{product.brand}</h1>
                <p className="mt-2 text-sm text-gray-300">
                {product.title}
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                  Shop Now &rarr;
                </button>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
