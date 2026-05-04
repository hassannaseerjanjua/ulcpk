import React from 'react';

const steps = [
  {
    number: "01",
    title: "Requirement",
    description: "We understand your needs and requirements."
  },
  {
    number: "02",
    title: "Design",
    description: "Our team creates the perfect label design."
  },
  {
    number: "03",
    title: "Printing",
    description: "Advanced printing technology is used."
  },
  {
    number: "04",
    title: "Delivery",
    description: "Quality checked and delivered on time."
  }
];

const Process = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container">
        <div className="text-center mb-20">
          <span className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-4 block">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary">
            From Concept to Delivery
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-7 left-[12.5%] right-[12.5%] h-[3px] bg-secondary -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-secondary text-white font-bold text-xl mb-6 shadow-xl transition-transform group-hover:scale-110">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-secondary-light transition-colors">
                  {step.number === "01" ? "Requirement" :
                    step.number === "02" ? "Design" :
                      step.number === "03" ? "Printing" : "Delivery"}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
