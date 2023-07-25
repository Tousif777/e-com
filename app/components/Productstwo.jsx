"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

const Productstwo = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/category/mens-shoes')
            .then((res) => res.json())
            .then((data) => {
                // Assuming data is an object with 'products' array as in your example JSON
                setProducts(data.products);
            });
    }, []);

    const limitedProducts = products.slice(0, 4);

    return (
        <div>
            <section className="container  py-10 mx-auto">
                <header>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Shoes Collection</h2>
                </header>
                <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
                    {limitedProducts.map((product) => (
                        <Link href={`/product/${encodeURIComponent(product.id)}`}>
                            <li key={product.id}>
                                <a href="#" className="block overflow-hidden group">
                                    <img
                                        src={product.images[0]}
                                        alt={product.title}
                                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                    />

                                    <div className="relative pt-3 bg-white">
                                        <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                            {product.title}
                                        </h3>

                                        <p className="mt-2">
                                            <span className="sr-only"> Regular Price </span>
                                            <span className="tracking-wider text-gray-900"> £{product.price}.00 GBP </span>
                                        </p>
                                    </div>
                                </a>
                            </li>
                        </Link>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Productstwo;
