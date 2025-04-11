import React from "react";
import pci from "../assets/pci.svg";
import ism from "../assets/ism.svg";
import crip from "../assets/crip.svg";
import gdpri from "../assets/gdpr.svg";
import ndpr from "../assets/ndpr.svg";
import iso from "../assets/iso.svg";
import togaf from "../assets/togaf.svg";
import soc from "../assets/soc.svg";
import iso2 from "../assets/iso2.svg";
import cpbit from "../assets/cqbit.svg";
import ssae from "../assets/ssae.svg";
import pcabt from "../assets/pcabt.svg";
import cobit2019 from "../assets/cobit2019.svg";
import ssae18 from "../assets/ssae18.svg";
import pcaob from "../assets/pcaob.svg";
import coso from "../assets/coso.svg";
import aicpa from "../assets/aicpa.svg";
import iaasb from "../assets/iaasb.svg";

function CertificateSection() {
  const certifications = [
    { name: "Pci", logo: pci },
    { name: "Ism", logo: ism },
    { name: "Crip", logo: crip },
    { name: "Gdpri", logo: gdpri },
    { name: "Ndpr", logo: ndpr },
    { name: "Iso", logo: iso },
    { name: "Soc", logo: soc },
    { name: "Togaf", logo: togaf },
    { name: "Iso2", logo: iso2 },
    { name: "Aicpa", logo: aicpa },
    { name: "Aicpa2", logo: aicpa },
    { name: "Cpbit", logo: cpbit },
    { name: "ssae", logo: ssae },
    { name: "Pcabt", logo: pcabt },
    { name: "Coso", logo: coso },
    { name: "ssae18", logo: ssae18 },
    { name: "Iaasb", logo: iaasb },
    { name: "Pcaob", logo: pcaob },
    
  ];

  return (
    <section className="bg-[#0B1120] text-white py-16 px-4  ">
      <div className=" mx-auto max-w-3xl text-center p-6">
        <h2 className="text-xl md:text-5xl font-bold mb-4">
          Compliance Certifications/
          
          <br />
          Standards We Specialize In
        </h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">Elevate Your Organization’s Security Posture with Our Compliance/Standards Consulting Services</p>
       
        <button className="bg-[linear-gradient(to_right,_#000080,_#4169E1,_#000080)] py-5 px-6 rounded-full border-2 border-blue-600 text-xl hover:scale-105 transition-transform duration-300">
        Contact Us
        </button>
      </div>
      <div className="mx-auto max-w-5xl">
        {/* Image Grid */}
        <div className="mt-12 bg-white rounded-xl p-2 shadow-md ">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 items-center justify-center">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex flex-col">
                <img src={cert.logo} alt={cert.name} className="h-25 w-50 object-contain  hover:grayscale-0 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CertificateSection;
