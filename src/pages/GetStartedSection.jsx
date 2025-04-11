import React from "react";

function GetStartedSection  () {
  return (
    <section className="relative bg-[#0C0F1F] py-20 px-4 flex justify-center items-center overflow-hidden "
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1E245C,_#0C0F1F_70%)] blur-3xl opacity-70 -z-10" />

      <div className="relative bg-[#0D1128] text-white rounded-2xl px-8 py-12 md:px-16 md:py-14 max-w-5xl w-full overflow-hidden shadow-2xl">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block">
          <div className="absolute right-0 top-0 h-full w-full bg-[radial-gradient(circle,_rgba(51,78,255,0.8)_0%,_rgba(30,36,92,0.5)_40%,_transparent_70%)] rounded-r-4xl" />
          <div className="absolute right-6 top-0 h-full w-full bg-[radial-gradient(circle,_rgba(88,101,255,0.5)_0%,_transparent_70%)] rounded-r-4xl" />
          <div className="mask-radial-at-right mask-radial-from-100% bg-[url(/img/mountains.jpg)] "></div>
        </div>

        <div className="relative z-10 max-w-3xl">
          <h2 className="text-3xl md:text-[57px] font-bold mb-2">Ready to get started?</h2>
          <p className="text-sm md:text-xl text-gray-400 mb-6">Shoot us a Mail</p>

          <p className="text-gray-300 md:text-2xl font-light mb-5 leading-relaxed">
            Join numerous corporations, organizations, and businesses as they scale their teams, tap into new market opportunities and build innovative products
            with KeySystem Technology
          </p>

          <p className="text-gray-300 leading-relaxed md:text-2xl font-light">
            Join thousands of students who are ready to learn new skills or take their career to the next level by enrolling in one of our training programs
            today.
          </p>
          <button className="bg-[linear-gradient(to_right,_#000080,_#4169E1,_#000080)] py-5 px-6 rounded-full border-2 border-blue-600 text-xl hover:scale-105 transition-transform duration-300 my-6">
            Send Us a Mail Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
