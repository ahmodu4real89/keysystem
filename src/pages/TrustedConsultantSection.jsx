import trust from '../assets/trust.jpeg'
function TrustedConsultantSection() {
    return (
      <section className="bg-[#0C0F1F] text-white py-20 px-6 ">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Why we are your Trusted Consultant
          </h2>
          <p className="font-light text-neutral-300 mb-6">
            Empowering Businesses with Cutting-edge Technology
          </p>
         </div>
         <div className="max-w-7xl mx-auto text-center text-neutral-300">
         <p className="text-lg  mb-6 max-w-3xl mx-auto leading-relaxed">
         Excellence isn’t a goal, it’s our DNA; our relentless pursuit of
          excellence is the driving force behind our success. Excellence is our
           legacy, and we are proud to carry it forward. 
          </p>
  
          <p className="text-lg font-light mb-4 ">
            Watch the video to see how we are innovating to keep businesses on top of their games.
          </p>
  
          <div className="flex justify-center">
            <img
              src={trust}
              alt="Trusted Consultant Team"
              className="rounded-xl  max-w-full md:max-w-3xl border-8 border-xl border-gray-700 outline-gray-700 bg-blue-500 shadow-lg shadow-blue-500/50"
            />
          </div>
        </div>
      </section>
    );
  }
  export default TrustedConsultantSection