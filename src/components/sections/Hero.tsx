import React from "react";
import { ArrowRight, Award, Users, Box, Truck } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center bg-black mb-16 lg:mb-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url('/hero-bg.png')` }}
      ></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/40 to-transparent"></div>

      <div className="container relative z-20 pt-32 pb-44 lg:pb-32">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Premium <br className="hidden md:block" /> Adhesive Label{" "}
            <br className="hidden md:block" /> Solutions in Pakistan
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-[65ch]">
            High-quality printing, durable materials, customized printing for
            every industry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button className="bg-secondary-light hover:bg-secondary text-white px-8 lg:px-10 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all group shadow-xl w-full sm:w-auto max-md:w-fit">
              Get A Quote{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <a
              href="/products"
              className="bg-white hover:bg-slate-100 text-secondary px-8 lg:px-10 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all group shadow-xl border border-white w-full sm:w-auto max-md:w-fit"
            >
              View Products{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Stats Bar - Exactly as the image */}
      <div className="absolute -bottom-10 lg:-bottom-12 left-0 right-0 z-40 container">
        <div className="bg-[#001a3d] rounded-xl shadow-2xl py-6 md:py-8 px-4 md:px-10 grid grid-cols-2 lg:grid-cols-4 items-center">
          {/* Item 1 */}
          <div className="flex items-center gap-3 md:gap-4 text-white justify-center lg:justify-start border-r border-white/10 py-2 pr-2 lg:pr-0">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/5 shrink-0">
              <Award className="text-white w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold leading-none">
                10+
              </div>
              <div className="text-[10px] md:text-[11px] text-slate-400 uppercase tracking-wider mt-1">
                Years Experience
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-center gap-3 md:gap-4 text-white justify-center lg:justify-start pl-4 lg:pl-8 lg:border-r border-white/10 py-2">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/5 shrink-0">
              <Users className="text-white w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold leading-none">
                500+
              </div>
              <div className="text-[10px] md:text-[11px] text-slate-400 uppercase tracking-wider mt-1">
                Happy Clients
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-center gap-3 md:gap-4 text-white justify-center lg:justify-start lg:pl-8 border-r lg:border-r border-white/10 py-2 pr-2 lg:pr-0 mt-2 lg:mt-0">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/5 shrink-0">
              <Box className="text-white w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold leading-none">
                1000+
              </div>
              <div className="text-[10px] md:text-[11px] text-slate-400 uppercase tracking-wider mt-1">
                Projects Completed
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-center gap-3 md:gap-4 text-white justify-center lg:justify-start pl-4 lg:pl-8 py-2 mt-2 lg:mt-0">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/5 shrink-0">
              <Truck className="text-white w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold leading-none">
                Fast
              </div>
              <div className="text-[10px] md:text-[11px] text-slate-400 uppercase tracking-wider mt-1">
                On Time Delivery
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
