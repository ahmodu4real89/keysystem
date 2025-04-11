import React from "react";
import LogoGrid from "../components/LogoGrid";
import lapo from "../assets/lapo.svg";
import mp from "../assets/mp.svg";
import sterlng from "../assets/sterlng.svg";
import crusader from "../assets/crusader.svg";
import npf from "../assets/npf.svg";
import stanbic from "../assets/stanbic.svg";
import san from "../assets/san.svg";
import nafc from "../assets/nafc.svg";
import bank from "../assets/bank.svg";
import banki from "../assets/banki.svg";
import nbf from "../assets/nbf.svg";
function TrustSection() {
  const logos = [
    { name: "LAPO", src: lapo },
    { name: "NPF", src: npf },
    { name: "Sterling", src: sterlng },
    { name: "crusader", src: crusader },
    { name: "Nafc", src: nafc },
    { name: "Nbf", src: nbf },
    { name: "mp", src: mp },
    { name: "Stanbic", src: stanbic },
    { name: "bank", src: bank },
    { name: "Banki", src: banki },
    { name: "San", src: san },
  ];
  return (
    <section className="bg-[#0C0F1F] text-white py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-bold">They Trust Us</h2>
        <p className="text-gray-400 mt-2 md:text-2xl font-light">And so can you</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 max-w-4xl">
        <LogoGrid logos={logos} />
      </div>
    </section>
  );
}

export default TrustSection;
