import React from "react";
import PageHeader from "@/components/layout/PageHeader";
import About from "@/components/sections/About";
import MissionVision from "@/components/sections/MissionVision";
import CTA from "@/components/sections/CTA";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export const metadata = {
  title: "About Us | Universal Label Company",
  description: "Learn more about Universal Label Company (Pvt.) LTD, Pakistan's leading adhesive label manufacturer.",
};

const AboutPage = () => {
  return (
    <main>
      <PageHeader 
        title="About Our Company" 
        subtitle="Universal Label Company (Pvt.) LTD is a pioneer in the adhesive label industry in Pakistan, delivering excellence since inception."
      />
      
      {/* Introduction Section */}
      <About />
      
      {/* Mission & Vision Section */}
      <MissionVision />
      
      {/* Why Choose Us - fits well in About page too */}
      <WhyChooseUs />
      
      {/* Experience Stats could go here, but they are in Hero. 
          Maybe create a dedicated Stats component later if needed. */}
      
      <CTA />
    </main>
  );
};

export default AboutPage;
