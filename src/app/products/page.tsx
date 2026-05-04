import React from "react";
import PageHeader from "@/components/layout/PageHeader";
import CTA from "@/components/sections/CTA";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Our Products | Universal Label Company",
  description:
    "Explore our wide range of premium adhesive label solutions for various industries.",
};

const products = [
  {
    title: "Food & Beverage Labels",
    description:
      "High-quality, moisture-resistant labels designed for food packaging, bottles, and jars. Our labels withstand various temperatures and maintain their vibrancy.",
    image: "/food-labels.png",
    features: ["Moisture Resistant", "Food Grade Safe", "Vibrant Colors"],
  },
  {
    title: "Pharmaceutical Labels",
    description:
      "Reliable and precise labeling solutions for the healthcare industry. We ensure clear printing for dosage information and regulatory compliance.",
    image: "/pharma-labels.png",
    features: ["High Precision", "Chemical Resistant", "Tamper Evident"],
  },
  {
    title: "Cosmetic & Personal Care",
    description:
      "Elegant, premium-finish labels that enhance your brand's shelf presence. Available in clear, metallic, and textured finishes.",
    image: "/cosmetic-labels.png",
    features: ["Premium Finishes", "Waterproof", "Squeezable Material"],
  },
  {
    title: "Industrial & Barcode",
    description:
      "Durable labels for logistics, inventory tracking, and industrial equipment. Optimized for high-speed scanning and harsh environments.",
    image: "/barcode-labels.png",
    features: ["Scannable Quality", "Heavy Duty", "Strong Adhesive"],
  },
  {
    title: "Custom Brand Labels",
    description:
      "Tailor-made solutions for unique branding needs. We offer custom shapes, sizes, and special effects like foil stamping and embossing.",
    image: "/custom-labels.png",
    features: ["Custom Die-cuts", "Special Effects", "Any Size/Shape"],
  },
];

const ProductsPage = () => {
  return (
    <main>
      <PageHeader
        title="Our Label Solutions"
        subtitle="We provide specialized labeling products tailored to the unique requirements of various industries, ensuring quality and durability in every print."
        backgroundImage="/hero-bg.png"
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="flex flex-col gap-20">
            {products.map((product, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Product Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    {product.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {product.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3">
                        <CheckCircle2
                          className="text-secondary-light"
                          size={20}
                        />
                        <span className="font-semibold text-gray-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={"/contact"}
                    className="bg-secondary w-fit hover:bg-secondary-light text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all group shadow-lg"
                  >
                    Request Samples{" "}
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default ProductsPage;
