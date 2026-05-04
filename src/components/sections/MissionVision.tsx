import React from "react";
import { Target, Eye, ShieldCheck, Heart } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Mission */}
          <div className="bg-primary p-8 md:p-12 rounded-3xl shadow-xl shadow-secondary/5 border border-slate-100 group hover:-translate-y-2 transition-all duration-500">
            <div className="w-16 h-16 bg-secondary text-white rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-bold text-secondary mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To provide our clients with the highest quality adhesive label solutions through 
              innovative technology, exceptional craftsmanship, and a commitment to excellence. 
              We strive to help brands stand out in the marketplace with labels that reflect 
              their quality and values.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-[#001a3d] p-8 md:p-12 rounded-3xl shadow-2xl group hover:-translate-y-2 transition-all duration-500">
            <div className="w-16 h-16 bg-secondary-light text-white rounded-2xl flex items-center justify-center mb-8 -rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <Eye size={32} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              To become the global benchmark for excellence in the label printing industry, 
              recognized for our sustainable practices, technological leadership, and 
              unwavering dedication to customer success. We aim to define the future of 
              packaging through creativity and precision.
            </p>
          </div>

        </div>

        {/* Core Values */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 block">
              Our Principles
            </span>
            <h2 className="text-4xl font-bold text-secondary">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="text-secondary" size={28} />,
                title: "Quality First",
                desc: "We never compromise on the quality of our materials or our final products."
              },
              {
                icon: <Target className="text-secondary" size={28} />,
                title: "Innovation",
                desc: "Constantly investing in new technology to provide the best solutions."
              },
              {
                icon: <Heart className="text-secondary" size={28} />,
                title: "Customer Focused",
                desc: "Your success is our priority. We work closely with you to meet your needs."
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-primary/30 p-8 rounded-2xl border border-white hover:border-secondary/20 transition-all text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-xl shadow-sm mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
