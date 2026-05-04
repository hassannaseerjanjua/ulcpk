import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader = ({ 
  title, 
  subtitle, 
  backgroundImage = "/page-header-bg.png" 
}: PageHeaderProps) => {
  return (
    <div className="relative min-h-[350px] md:min-h-[450px] py-20 flex items-center overflow-hidden bg-secondary">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 scale-105"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      ></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-secondary via-secondary/70 to-transparent"></div>

      <div className="container relative z-20">
        <div className="max-w-3xl animate-fadeIn">
          <nav className="flex items-center gap-2 text-slate-300 text-[13px] mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white">{title}</span>
          </nav>
          
          <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      
      {/* Abstract Design Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2 z-10"></div>
    </div>
  );
};

export default PageHeader;
