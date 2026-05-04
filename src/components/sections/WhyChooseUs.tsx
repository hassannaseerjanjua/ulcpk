import React from 'react';
import { Gem, Droplets, Settings2, Zap, Tag } from 'lucide-react';

const features = [
  {
    title: "High Quality",
    description: "Premium materials ensure durability and perfection.",
    icon: Gem
  },
  {
    title: "Waterproof & Durable",
    description: "Labels that last long in our environment.",
    icon: Droplets
  },
  {
    title: "Custom Solutions",
    description: "We create labels in your exact requirements.",
    icon: Settings2
  },
  {
    title: "Fast Turnaround",
    description: "On-time delivery with quick production.",
    icon: Zap
  },
  {
    title: "Competitive Pricing",
    description: "Best quality at the most competitive prices.",
    icon: Tag
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-secondary text-white">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-4 block">
            Why Choose Us?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            We Provide The <span className="text-blue-400">Best Quality</span> Labels
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/10 mb-6 transition-all duration-300 group-hover:bg-blue-500 group-hover:scale-110">
                <feature.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
