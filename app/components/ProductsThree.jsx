"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

const ProductsThree = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products/category/sunglasses')
            .then((res) => res.json())
            .then((data) => {
                // Assuming data is an object with 'products' array as in your example JSON
                setProducts(data.products);
            });
    }, []);

    const limitedProducts = products.slice(0, 4);

    return (
        <div>
            <section>
                <header>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Glass Collection</h2>
                </header>
                <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
                    {limitedProducts.map((product) => (
                        <Link href={`/product/${encodeURIComponent(product.id)}`} key={product.id}>
                            <li>
                                <a href="#" className="block overflow-hidden group relative h-[350px] sm:h-[450px]">
                                    {/* First Image */}
                                    <img
                                        src={product.images[0]}
                                        alt=""
                                        className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                                    />

                                    {/* Second Image */}
                                    <img
                                        src={product.images[0]}
                                        alt=""
                                        className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 rotate-12 transition-transform duration-500"

                                    />

                                    {/* Card Content */}
                                    <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                                        <h3 className="text-xl font-medium text-white">{product.title}</h3>
                                        <p className="mt-1.5 max-w-[40ch] text-xs text-white">{product.description}</p>
                                        <span className="mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">Shop Now</span>
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

export default ProductsThree;
