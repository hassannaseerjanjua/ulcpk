import React from "react";
import PageHeader from "@/components/layout/PageHeader";
import CTA from "@/components/sections/CTA";
import { ExternalLink } from "lucide-react";

export const metadata = {
  title: "Our Work | Universal Label Company",
  description: "View our portfolio of successful labeling projects across various industries in Pakistan.",
};

const projects = [
  {
    title: "Premium Juice Brand",
    category: "Food & Beverage",
    image: "/food-labels.png",
    description: "Vibrant, moisture-resistant labels for a new line of organic juices."
  },
  {
    title: "LifeSafe Pharmaceuticals",
    category: "Pharmaceutical",
    image: "/pharma-labels.png",
    description: "Highly legible dosage labels for multi-lingual medical packaging."
  },
  {
    title: "Glow Essentials Cosmetics",
    category: "Cosmetics",
    image: "/cosmetic-labels.png",
    description: "Gold-foiled luxury labels for a premium skincare product line."
  },
  {
    title: "AgroChem Solutions",
    category: "Industrial",
    image: "/barcode-labels.png",
    description: "Heavy-duty chemical resistant labels for agricultural products."
  },
  {
    title: "Gourmet Bakery Series",
    category: "Food & Beverage",
    image: "/label-rolls-cta.png",
    description: "Custom-shaped labels with matte finish for a high-end bakery chain."
  },
  {
    title: "TechTrack Logistics",
    category: "Logistics",
    image: "/barcode-labels.png",
    description: "High-contrast thermal transfer barcode labels for inventory management."
  }
];

const OurWorkPage = () => {
  return (
    <main>
      <PageHeader 
        title="Our Portfolio" 
        subtitle="A showcase of our most successful labeling projects. We've helped brands across Pakistan shine with quality printing."
        backgroundImage="/hero-bg.png"
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 block">Case Studies</span>
            <h2 className="text-4xl font-bold text-secondary">Success Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-3xl bg-primary shadow-lg border border-slate-100"
              >
                {/* Image Container */}
                <div className="relative h-[300px] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <button className="bg-white text-secondary p-4 rounded-full scale-50 group-hover:scale-100 transition-transform duration-500 shadow-xl">
                      <ExternalLink size={24} />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <span className="text-secondary-light font-bold text-xs uppercase tracking-widest mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-secondary mb-3 transition-colors group-hover:text-secondary-light">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Load More or Categories Filter could go here */}
          <div className="mt-20 text-center">
            <p className="text-gray-500 mb-8 italic text-lg">
              "Working with Universal Label has transformed our product's shelf presence."
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-slate-200"></div>
              <div className="text-left">
                <div className="font-bold text-secondary">Ahmed Raza</div>
                <div className="text-sm text-gray-400">CEO, Foodies Ltd.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default OurWorkPage;
