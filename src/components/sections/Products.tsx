import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Food Labels",
    slug: "food-beverage",
    description: "High quality labels for food & beverages.",
    image: "/food-labels.png",
  },
  {
    title: "Cosmetic Labels",
    slug: "cosmetics",
    description: "Elegant labels for beauty & personal care.",
    image: "/cosmetic-labels.png",
  },
  {
    title: "Pharmaceutical Labels",
    slug: "pharmaceutical",
    description: "Reliable & safe labels for pharma industry.",
    image: "/pharma-labels.png",
  },
  {
    title: "Barcode Labels",
    slug: "industrial",
    description: "Accurate barcode & tracking labels.",
    image: "/barcode-labels.png",
  },
  {
    title: "Custom Labels",
    slug: "custom",
    description: "Custom size, shape & image for your brand.",
    image: "/custom-labels.png",
  },
];

const Products = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 block">
            Our Products
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary">
            Our Label Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16 ">
          {products.map((product, index) => (
            <Link
              key={index}
              href={`/products/${product.slug}`}
              className="group cursor-pointer bg-white rounded-xl p-2 transition-all hover:shadow-xl hover:-translate-y-1 block"
            >
              <div className="relative h-[200px] rounded-xl overflow-hidden mb-5 bg-gray-100 shadow-md transition-transform duration-500 group-hover:scale-[1.03]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2 transition-colors group-hover:text-secondary-light px-2">
                {product.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed px-2 pb-4">
                {product.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/products"
            className="bg-secondary hover:bg-secondary-light w-fit text-white px-10 py-4 rounded-lg font-bold flex items-center gap-3 transition-all mx-auto group shadow-xl shadow-secondary/10"
          >
            View All Products
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
