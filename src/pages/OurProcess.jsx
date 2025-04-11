import React from "react";
import process1 from '../assets/process1.svg'
import process2 from '../assets/process2.svg'
import process3 from '../assets/process3.svg'
function OurProcess () {
  return (
    <section className="bg-[#0C0F1F] text-white px-6 py-16">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-5xl font-bold mb-2">Our Process</h2>
        <p className="font-light text-2xl text-gray-400">
          At KeySystem, we leave you with a lasting impression
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">        
        <div className="bg-[linear-gradient(to_right,_#04050B,_#181B4D)] rounded-xl flex items-center justify-between col-span-1 md:col-span-2">
          <div className="m-2" >
            <h3 className="text-xl md:text-4xl font-semibold ">Strategic Consultation</h3>
            <p className="text-sm md:text-2xl font-light text-gray-300">
              We kick off with a strategic consultation to understand your brand,
              goals, and audience
            </p>
          </div>
            
          <img
            src={process1}
            alt="Checkmark"
            className="w-full h-40 object-fill -mr-45 hidden md:block"
          />
        </div>
  
        <div className="bg-[linear-gradient(to_right,_#04050B,_#181B4D)] rounded-xl  flex items-center justify-between">
        <div className="m-2">
            <h3 className="text-xl md:text-4xl font-semibold ">Delivery</h3>
            <p className="text-sm text-gray-300 md:text-2xl font-light ">
              Our delivery rate is 100%; our clients deserve nothing less.
            </p>
          </div>
          <img
            src={process2}
            alt="Puzzle"
            className="w-full h-40 object-fill -mr-6 hidden md:block"
          />
        </div>

        
        <div className="bg-[linear-gradient(to_right,_#04050B,_#181B4D)] rounded-xl flex items-center justify-between">
          <div className="m-2">
            <h3 className="text-xl font-semibold ">Collaboration</h3>
            <p className="text-sm text-gray-300 md:text-2xl font-light ">
            Our delivery rate is 100%; our clients deserve nothing less.
            </p>
          </div>
          <img
            src={process3}
            alt="Handshake"
            className="w-full h-40 object-fill hidden md:block"
          />
        </div>         
      </div>
    </section>
  );
};

export default OurProcess;
