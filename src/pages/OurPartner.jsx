import React from "react";
import LogoGrid from "../components/LogoGrid";
import software from '../assets/software.svg';
import cognizant from '../assets/cognizant.svg';
import temenos from '../assets/temenos.svg';
import netInfo from '../assets/netInfo.svg';
import tech from '../assets/tech.svg';
function OurPartners (){
  const partners = [
    { name: "software", src: software },
    { name: "cognizant", src: cognizant },
    { name: "temenos", src: temenos },
    { name: "netInfo", src: netInfo },
    { name: "tech", src: tech },
  ];
  return (
    <section className="bg-[#0C0F1F] text-white px-6 py-16">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-[44px] font-bold mb-4">Our Partners</h2>
        <p className="text-sm md:text-[24px] font-light">Creating a Synergy with global brands</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-16 w-full mx-auto">
        <LogoGrid logos={partners} />
      </div>
    </section>
  );
};

export default OurPartners;
