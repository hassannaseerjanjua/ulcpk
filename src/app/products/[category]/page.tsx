import React from "react";
import PageHeader from "@/components/layout/PageHeader";
import CTA from "@/components/sections/CTA";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Product data
const productData: Record<string, any> = {
  "food-beverage": {
    title: "Food & Beverage Labels",
    description:
      "Our food and beverage labels are engineered to withstand condensation, refrigeration, and varying storage conditions while maintaining brand integrity.",
    image: "/food-labels.png",
    longDescription:
      "In the competitive food and beverage industry, your label is often the first point of contact with consumers. We provide high-quality labels that are not only visually stunning but also durable enough to handle the rigors of the supply chain.",
    features: [
      "FDA-compliant materials",
      "Moisture and oil resistant",
      "Cold temperature adhesives",
      "Vibrant high-resolution printing",
      "Matte and gloss finishes",
    ],
  },
  pharmaceutical: {
    title: "Pharmaceutical Labels",
    description:
      "Precision-printed labels for the healthcare sector, ensuring legibility of critical information and compliance with safety standards.",
    image: "/pharma-labels.png",
    longDescription:
      "Pharmaceutical labeling requires the highest level of accuracy and durability. We provide labels that are resistant to chemicals and designed to remain legible throughout the product's lifecycle, ensuring patient safety and regulatory compliance.",
    features: [
      "Tamper-evident solutions",
      "High-legibility micro-text",
      "Chemical and alcohol resistant",
      "Sterilization compatible",
      "Braille printing options",
    ],
  },
  cosmetics: {
    title: "Cosmetic & Beauty Labels",
    description:
      "Premium labels that reflect the luxury and quality of your beauty products. Designed for elegance and durability in humid environments.",
    image: "/cosmetic-labels.png",
    longDescription:
      "The beauty industry demands aesthetic perfection. Our cosmetic labels use premium materials and finishes like foil stamping and embossing to create a luxury feel that captures attention on the shelf.",
    features: [
      "Waterproof materials",
      "Squeezable container compatibility",
      "Metallic and clear options",
      "Luxury foil stamping",
      "UV-resistant inks",
    ],
  },
  industrial: {
    title: "Industrial & Barcode Labels",
    description:
      "Rugged labeling solutions for inventory management, logistics, and heavy-duty industrial applications.",
    image: "/barcode-labels.png",
    longDescription:
      "Our industrial labels are built to last in the toughest environments. From warehouse tracking to equipment identification, we provide scannable, durable labels that stick where others fail.",
    features: [
      "Heavy-duty synthetic materials",
      "Extreme temperature resistance",
      "High-contrast barcode printing",
      "Aggressive adhesives",
      "Abrasion and tear resistant",
    ],
  },
  custom: {
    title: "Custom Label Solutions",
    description:
      "Unique labels tailored to your specific brand requirements. If you can imagine it, we can print it.",
    image: "/custom-labels.png",
    longDescription:
      "Sometimes standard isn't enough. Our custom solutions allow you to experiment with unique shapes, sizes, and specialized materials to create a truly one-of-a-kind look for your brand.",
    features: [
      "Custom die-cutting",
      "Specialty substrates",
      "Multi-layer labels",
      "Variable data printing",
      "Prototyping and sampling",
    ],
  },
};

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function ProductDetail({ params }: PageProps) {
  const { category } = await params;
  const product = productData[category];

  if (!product) {
    notFound();
  }

  return (
    <main>
      <PageHeader
        title={product.title}
        subtitle={product.description}
        backgroundImage={product.image}
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-primary">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2">
              <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">
                Product Category
              </span>
              <h2 className="text-4xl font-bold text-secondary mb-8">
                {product.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                {product.longDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {product.features.map((feature: string, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 bg-primary rounded-xl border border-secondary/5 transition-all hover:border-secondary/20"
                  >
                    <CheckCircle2
                      className="text-secondary-light shrink-0"
                      size={24}
                    />
                    <span className="font-semibold text-gray-800">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-secondary hover:bg-secondary-light text-white px-10 py-4 rounded-lg font-bold flex items-center gap-2 transition-all shadow-lg"
                >
                  Get A Quote <ArrowRight size={18} />
                </Link>
                <Link
                  href="/products"
                  className="bg-white border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-10 py-4 rounded-lg font-bold flex items-center gap-2 transition-all"
                >
                  Back to All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Categories Selection */}
      <section className="py-20 bg-primary/30 border-y border-secondary/5">
        <div className="container text-center">
          <h3 className="text-2xl font-bold text-secondary mb-12">
            Explore Other Categories
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {Object.keys(productData)
              .filter((key) => key !== category)
              .map((key) => (
                <Link
                  key={key}
                  href={`/products/${key}`}
                  className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all text-gray-600 font-semibold hover:text-secondary border border-gray-100"
                >
                  {productData[key].title}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
