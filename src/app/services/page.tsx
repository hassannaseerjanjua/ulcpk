import React from "react";
import PageHeader from "@/components/layout/PageHeader";
import CTA from "@/components/sections/CTA";
import { 
  Printer, 
  Palette, 
  ShieldCheck, 
  Truck, 
  Settings, 
  Zap,
  ArrowRight
} from "lucide-react";

export const metadata = {
  title: "Our Services | Universal Label Company",
  description: "Comprehensive label printing and branding services tailored for your business needs.",
};

const services = [
  {
    icon: <Printer size={40} />,
    title: "High-Volume Printing",
    description: "Equipped with advanced flexographic and digital printing presses, we handle large-scale production runs with consistent quality and speed.",
    features: ["Flexographic Printing", "Digital Printing", "High-speed Production"]
  },
  {
    icon: <Palette size={40} />,
    title: "Graphic Design & Branding",
    description: "Our in-house design team helps you create compelling label designs that resonate with your target audience and elevate your brand identity.",
    features: ["Custom Artwork", "Brand Consistency", "Prototyping"]
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Quality Assurance",
    description: "Rigorous quality control processes ensure that every label meets our high standards for color accuracy, adhesion, and durability.",
    features: ["Color Matching", "Adhesion Testing", "Defect Detection"]
  },
  {
    icon: <Zap size={40} />,
    title: "Rapid Prototyping",
    description: "Fast-track your product launch with our rapid sampling and prototyping services. Get physical samples of your labels in record time.",
    features: ["Quick Turnaround", "Multiple Finishes", "Low-volume Testing"]
  },
  {
    icon: <Settings size={40} />,
    title: "Custom Die-Cutting",
    description: "Create unique shapes and sizes for your labels. Our precision die-cutting technology allows for intricate designs that fit your packaging perfectly.",
    features: ["Any Shape/Size", "Precision Cutting", "Specialty Dies"]
  },
  {
    icon: <Truck size={40} />,
    title: "Inventory & Logistics",
    description: "We offer inventory management and reliable shipping services to ensure your labels are delivered on time, every time, anywhere in Pakistan.",
    features: ["Just-in-Time Delivery", "Stock Management", "Safe Packaging"]
  }
];

const ServicesPage = () => {
  return (
    <main>
      <PageHeader 
        title="Our Services" 
        subtitle="Beyond just printing, we offer end-to-end labeling solutions to help your business grow and succeed in the market."
        backgroundImage="/hero-bg.png"
      />

      <section className="py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-3xl bg-primary/20 border border-slate-100 hover:border-secondary/20 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-secondary mb-8 shadow-sm group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary-light"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="text-secondary font-bold flex items-center gap-2 hover:gap-3 transition-all group/btn">
                  Explore Service <ArrowRight size={18} className="text-secondary-light" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section can be reused here */}
      <section className="py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          {/* Abstract pattern or background image */}
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-bold mb-6">How We Deliver Excellence</h2>
            <p className="text-slate-300 text-lg">
              Our streamlined production process ensures that from initial design to final delivery, 
              your project is handled with the utmost care and precision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your specific needs and goals." },
              { step: "02", title: "Design", desc: "Crafting the perfect visual identity for your brand." },
              { step: "03", title: "Production", desc: "High-quality printing with rigorous QC." },
              { step: "04", title: "Delivery", desc: "Reliable logistics to your doorstep." }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-black text-white/10 mb-4">{step.step}</div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default ServicesPage;
