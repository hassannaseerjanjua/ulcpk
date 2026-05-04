"use client";
import React, { useState, useEffect } from "react";
import PageHeader from "@/components/layout/PageHeader";
import { 
  Calculator, 
  Layers, 
  Maximize, 
  Palette, 
  Hash, 
  ArrowRight, 
  CheckCircle2,
  Info
} from "lucide-react";

const GetQuote = () => {
  const [formData, setFormData] = useState({
    length: 128,
    width: 115,
    quantity: 2000,
    colors: 1,
    material: "Semi-Gloss Paper",
    finish: "None"
  });

  const [estimate, setEstimate] = useState<number | null>(null);

  // Calculation logic based on the sheet's logic
  useEffect(() => {
    // These rates are derived from the spreadsheet provided
    const RATES = {
      PAPER_SQM: 180, // PKR per sq meter
      INK_KG: 6500,
      OVERHEAD: 7500,
      CARTON: 100,
      CORE: 9.1,
      WASTAGE_PERCENT: 165, // As seen in sheet
    };

    // 1. Calculate dimensions and "Ups" (simplified)
    const ups = Math.floor(250 / formData.width) || 1; // Assuming 250mm max width for press
    
    // 2. Calculate meters needed
    const lengthInMeters = formData.length / 1000;
    const totalMeters = (formData.quantity / ups) * lengthInMeters;
    const metersWithWastage = totalMeters * (1 + RATES.WASTAGE_PERCENT / 100);
    
    // 3. Calculate Sq Meters
    const paperWidthInMeters = (formData.width * ups + 20) / 1000; // Adding 20mm for trim
    const sqMeters = metersWithWastage * paperWidthInMeters;
    
    // 4. Calculate Costs
    const paperCost = sqMeters * RATES.PAPER_SQM;
    
    // Ink calculation: (Square Meters * Colors * Ink Price) / Yield (4000 sqm per kg is a standard flexo estimate)
    const inkCost = (sqMeters * formData.colors * RATES.INK_KG) / 4000;
    
    // Overhead calculation: In the sheet, overhead seems to scale with colors or setup
    // Using a logic of Base Overhead + (Colors * Setup Rate)
    const overheadCost = RATES.OVERHEAD + (formData.colors * 500); 
    
    // Packaging costs (Carton + Core)
    const packagingCost = (formData.quantity / 2000) * (RATES.CARTON + RATES.CORE * 6);

    const totalCost = paperCost + inkCost + overheadCost + packagingCost;
    const costPerLabel = totalCost / formData.quantity;
    
    // 5. Add Margin (Using the 'CM' logic from the sheet - approx 50-60% markup)
    const priceWithMargin = costPerLabel * 1.65; 

    setEstimate(priceWithMargin);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'material' || name === 'finish' ? value : Number(value) }));
  };

  return (
    <main className="bg-primary/5">
      <PageHeader 
        title="Instant Quote Estimate" 
        subtitle="Get an immediate cost estimation for your custom label project. Please note that final pricing may vary based on specific technical requirements."
        backgroundImage="/hero-bg.png"
      />

      <section className="py-24">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Form Side */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center text-white">
                    <Calculator size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-secondary">Label Specifications</h2>
                    <p className="text-gray-500 text-sm">Enter your requirements to calculate the estimate</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Dimensions */}
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                      <Maximize size={16} className="text-secondary-light" />
                      Label Dimensions (mm)
                    </label>
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <input 
                          type="number" 
                          name="length"
                          value={formData.length}
                          onChange={handleChange}
                          placeholder="Length"
                          className="w-full px-5 py-4 rounded-xl bg-primary/20 border border-transparent focus:bg-white focus:border-secondary outline-none transition-all"
                        />
                        <span className="text-[10px] text-gray-400 mt-1 block px-1">Length (mm)</span>
                      </div>
                      <div className="flex-1">
                        <input 
                          type="number" 
                          name="width"
                          value={formData.width}
                          onChange={handleChange}
                          placeholder="Width"
                          className="w-full px-5 py-4 rounded-xl bg-primary/20 border border-transparent focus:bg-white focus:border-secondary outline-none transition-all"
                        />
                        <span className="text-[10px] text-gray-400 mt-1 block px-1">Width (mm)</span>
                      </div>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                      <Hash size={16} className="text-secondary-light" />
                      Total Quantity Required
                    </label>
                    <input 
                      type="number" 
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-primary/20 border border-transparent focus:bg-white focus:border-secondary outline-none transition-all"
                    />
                  </div>

                  {/* Colors */}
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                      <Palette size={16} className="text-secondary-light" />
                      Number of Colors
                    </label>
                    <select 
                      name="colors"
                      value={formData.colors}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-primary/20 border border-transparent focus:bg-white focus:border-secondary outline-none transition-all appearance-none"
                    >
                      {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} Color{n>1?'s':''}</option>)}
                    </select>
                  </div>

                  {/* Material */}
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-700">
                      <Layers size={16} className="text-secondary-light" />
                      Material Type
                    </label>
                    <select 
                      name="material"
                      value={formData.material}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-primary/20 border border-transparent focus:bg-white focus:border-secondary outline-none transition-all appearance-none"
                    >
                      <option>Semi-Gloss Paper</option>
                      <option>Direct Thermal</option>
                      <option>PP White (Waterproof)</option>
                      <option>PP Clear (Transparent)</option>
                      <option>Silver / Gold Foil Paper</option>
                    </select>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-secondary/5 rounded-2xl border border-secondary/10 flex gap-4">
                  <Info className="text-secondary shrink-0" size={20} />
                  <p className="text-sm text-gray-600 leading-relaxed">
                    The calculated price includes standard setup costs, plate charges for the selected number of colors, and high-quality adhesive material. For complex shapes or special finishes (embossing, spot UV), please submit the form for a manual review.
                  </p>
                </div>
              </div>
            </div>

            {/* Summary Side */}
            <div className="w-full lg:w-1/3">
              <div className="bg-secondary text-white p-8 md:p-10 rounded-3xl shadow-2xl sticky top-8">
                <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                  <span className="w-2 h-8 bg-secondary-light rounded-full"></span>
                  Quote Summary
                </h3>

                <div className="space-y-6 mb-10">
                  <div className="flex justify-between border-b border-white/10 pb-4">
                    <span className="text-slate-400">Labels Size</span>
                    <span className="font-bold">{formData.length} x {formData.width} mm</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-4">
                    <span className="text-slate-400">Quantity</span>
                    <span className="font-bold">{formData.quantity.toLocaleString()} pcs</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-4">
                    <span className="text-slate-400">Printing</span>
                    <span className="font-bold">{formData.colors} Color{formData.colors > 1 ? 's' : ''}</span>
                  </div>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl mb-10 text-center">
                  <span className="text-slate-400 text-sm block mb-2 uppercase tracking-widest font-bold">Estimated Total</span>
                  <div className="text-4xl font-black text-white mb-1">
                    PKR {estimate ? (estimate * formData.quantity).toLocaleString(undefined, { maximumFractionDigits: 0 }) : "---"}
                  </div>
                  <span className="text-secondary-light font-bold text-sm">
                    {estimate ? `PKR ${estimate.toFixed(2)} per label` : "Calculating..."}
                  </span>
                </div>

                <button className="w-full bg-white text-secondary hover:bg-secondary-light hover:text-white py-5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all group">
                  Proceed to Order
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-[11px] text-slate-500 mt-6">
                  * All prices are subject to GST where applicable.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Use Our Online Tool? */}
      <section className="pb-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Instant Estimates", desc: "No more waiting for sales reps. Get immediate pricing based on market rates." },
              { title: "Transparency", desc: "Understand the cost breakdown for materials, ink, and overheads." },
              { title: "Technical Accuracy", desc: "Our calculator accounts for wastage and production efficiency automatically." }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <CheckCircle2 className="text-secondary-light shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-secondary mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default GetQuote;
