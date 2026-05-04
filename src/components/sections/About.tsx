import React from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";

const About = () => {
  const features = [
    "Best Quality Materials",
    "Advanced Printing Technology",
    "Customized Production",
    "Competitive Pricing",
  ];

  return (
    <section className="py-24 bg-primary">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 leading-tight">
              Your Trusted Partner in <br />
              Label Printing
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-[65ch]">
              Universal Label Company (Pvt.) LTD is a leading adhesive label
              manufacturer in Pakistan. We provide high-quality, durable and
              customizable labels for all industries.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <CheckCircle2
                    className="text-secondary transition-transform group-hover:scale-110"
                    size={20}
                  />
                  <span className="font-semibold text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden  transition-transform hover:scale-[1.02] duration-500">
              <img
                src="/about-building.png"
                alt="Our Factory Building"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
