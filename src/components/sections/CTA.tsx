import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="bg-secondary relative overflow-hidden">
      <div className="container relative z-10 flex flex-col lg:flex-row items-center py-16 lg:py-0">
        {/* Left Side: Text */}
        <div className="w-full lg:w-3/5 text-white lg:py-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Need Custom Labels <br />
            for <span className="text-blue-400">Your Business?</span>
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-lg">
            Get the best quality customized labels tailored to your needs.
            Professional solutions for every industry.
          </p>
          <Link
            href="/contact"
            className="bg-white w-fit hover:bg-slate-100 text-secondary px-10 py-4 rounded-lg font-bold flex items-center gap-3 transition-all group shadow-xl"
          >
            Request a Quote
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end mt-12 lg:mt-0 lg:h-[450px]">
          <div className="relative max-w-[500px]">
            <img
              src="/label-rolls-cta.png"
              alt="Custom Label Rolls"
              className="w-full h-[400px] object-contain object-bottom transition-transform duration-700 hover:scale-[1.05]"
            />
          </div>
        </div>
      </div>

      {/* Decorative background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary to-transparent -z-0"></div>
    </section>
  );
};

export default CTA;
