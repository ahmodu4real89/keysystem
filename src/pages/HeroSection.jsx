import React from "react";
import HeroImg from "../assets/heroImag.png";
import mp from "../assets/mp.svg";
import sterlng from "../assets/sterlng.svg";
import crusader from "../assets/crusader.svg";
import stanbic from "../assets/stanbic.svg";
import nafc from "../assets/nafc.svg";
import bank from "../assets/bank.svg";
import nbf from "../assets/nbf.svg";

function HeroSection() {
  const logos = [
    { name: "Sterling", src: sterlng },
    { name: "crusader", src: crusader },
    { name: "Nafc", src: nafc },
    { name: "Nbf", src: nbf },
    { name: "mp", src: mp },
    { name: "Stanbic", src: stanbic },
    { name: "bank", src: bank },
    
  ];

  return (
    <section className="relative bg-no-repeat bg-cover bg-[linear-gradient(to_right,_#0f172a,_#2e1065,_#4f46e5)] py-24">
      <div className="max-w-6xl mx-auto px-4 text-center text-white">
        <div className="my-8">
        <span className="relative rounded-full px-4 py-2 text-xl bg-[#2E6D9C] border-2 border-white">Welcome to KeySystem</span>
        </div>
     
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          IT Consulting for <br />
          Forward-thinking Businesses
        </h1>
        <p className="text-lg text-white/80 mt-4 mb-8">Driving Digital Transformation, One Solution at a Time</p>

        <div className="flex justify-center gap-8 mb-12 sm:flex-1">
          <button className="bg-[linear-gradient(to_right,_#000080,_#4169E1,_#000080)] py-5 px-6 rounded-full border-2 border-blue-600 text-xl hover:scale-105 transition-transform duration-300">
            Get Started
          </button>
          <button className=" py-5 px-6 rounded-full border-2 border-blue-600 text-xl hover:scale-105 transition-transform duration-300">Learn More</button>
        </div>

        <div className="flex justify-center relative ">
          <div className="absolute top-[150px] w-[1210px] h-[100.02px] opacity-75 bg-[url('./assets/herobg.png')] bg-cover bg-blend-overlay bg-neutral-100 shadow-lg z-1 hidden sm:block">
            <div className="absolute inset-0 shadow-[inset_38.9963px_13.3409px_49.7716px_rgba(255,255,255,0.45), inset_32.839px_-24.6293px_43.1012px_rgba(0,0,0,0.64)]"></div>
          </div>

          <img
            src={HeroImg}
            alt="Analyst"
            className="rounded-xl max-w-full md:max-w-3xl z-10 border-8 border-xl border-gray-700 outline-gray-700 bg-blue-500 shadow-lg shadow-blue-500/50"
          />
        </div>

        <div className="mt-12 flex  justify-center items-center gap-4">
          {logos.map((partner) => (
            <img  key={partner.name} src={partner.src} alt={partner.name} className="h-[70px] w-[160px] object-contain" />
          ))}
        </div>
      </div>
    </section>
  );
}
export default HeroSection;
